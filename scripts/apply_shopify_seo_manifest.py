#!/usr/bin/env python3
"""Snapshot or apply the reviewed MilAura Shopify SEO manifests.

The script requires an explicitly supplied env file, never prints credentials,
backs up every resource available to the supplied token before a write and
supports two ordered phases: existing SEO repairs first, commercial
collections second. Use ``--products-only`` when the token deliberately has no
content or navigation scope; the receipt will mark those actions for Admin UI.
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import os
from pathlib import Path
import re
import time
import urllib.error
import urllib.parse
import urllib.request


EXPECTED_API_ENDPOINT_DOMAIN = "milaura-2.myshopify.com"
EXPECTED_SHOP_ID = 97728069979
EXPECTED_SHOP_PERMANENT_DOMAIN = "dvsi0r-1q.myshopify.com"
EXPECTED_PRIMARY_DOMAIN = "milaura.fr"


def load_env(path: Path) -> None:
    if not path.is_file():
        raise RuntimeError(f"Env file does not exist: {path}")
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


class Shopify:
    def __init__(self, api_version: str) -> None:
        self.store = os.environ.get(
            "SHOPIFY_STORE", EXPECTED_API_ENDPOINT_DOMAIN
        )
        self.token = os.environ.get("SHOPIFY_ACCESS_TOKEN")
        self.api_version = api_version
        if self.store != EXPECTED_API_ENDPOINT_DOMAIN:
            raise RuntimeError(f"Unexpected Shopify store: {self.store}")
        if not self.token:
            raise RuntimeError("SHOPIFY_ACCESS_TOKEN is missing")

    def request(
        self, method: str, path: str, payload: dict | None = None
    ) -> tuple[dict, dict[str, str]]:
        url = f"https://{self.store}/admin/api/{self.api_version}/{path.lstrip('/')}"
        data = json.dumps(payload).encode("utf-8") if payload is not None else None
        request = urllib.request.Request(
            url,
            data=data,
            method=method,
            headers={
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Shopify-Access-Token": self.token,
            },
        )
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                body = response.read().decode("utf-8")
                headers = {key.lower(): value for key, value in response.headers.items()}
        except urllib.error.HTTPError as exc:
            body = exc.read().decode("utf-8", errors="replace")
            raise RuntimeError(
                f"Shopify {method} {path} returned HTTP {exc.code}: {body[:1500]}"
            ) from exc
        return (json.loads(body) if body else {}), headers

    def get(self, path: str) -> dict:
        return self.request("GET", path)[0]

    def post(self, path: str, payload: dict) -> dict:
        result = self.request("POST", path, payload)[0]
        time.sleep(0.25)
        return result

    def put(self, path: str, payload: dict) -> dict:
        result = self.request("PUT", path, payload)[0]
        time.sleep(0.25)
        return result

    def graphql(self, query: str, variables: dict) -> dict:
        result = self.post(
            "graphql.json", {"query": query, "variables": variables}
        )
        if result.get("errors"):
            raise RuntimeError(f"Shopify GraphQL errors: {result['errors']}")
        return result["data"]


def snapshot(shopify: Shopify, products_only: bool = False) -> dict:
    raw_shop = shopify.get("shop.json")["shop"]
    identity = {
        "id": raw_shop["id"],
        "name": raw_shop["name"],
        "myshopify_domain": raw_shop["myshopify_domain"],
        "primary_domain": raw_shop["domain"],
    }
    if identity["id"] != EXPECTED_SHOP_ID:
        raise RuntimeError(f"Unexpected shop identity: {identity}")
    if identity["myshopify_domain"] != EXPECTED_SHOP_PERMANENT_DOMAIN:
        raise RuntimeError(f"Unexpected shop identity: {identity}")
    if identity["primary_domain"] != EXPECTED_PRIMARY_DOMAIN:
        raise RuntimeError(f"Unexpected primary domain: {identity}")

    smart = shopify.get("smart_collections.json?limit=250").get(
        "smart_collections", []
    )
    custom = shopify.get("custom_collections.json?limit=250").get(
        "custom_collections", []
    )
    collections = [
        {**item, "_resource_kind": "smart_collection"} for item in smart
    ] + [{**item, "_resource_kind": "custom_collection"} for item in custom]
    pages = []
    blogs = []
    articles = []
    redirects = []
    unavailable_resources = []
    if products_only:
        unavailable_resources = ["pages", "blogs", "articles", "redirects"]
    else:
        pages = shopify.get("pages.json?limit=250").get("pages", [])
        blogs = shopify.get("blogs.json?limit=250").get("blogs", [])
        for blog in blogs:
            result = shopify.get(f"blogs/{blog['id']}/articles.json?limit=250")
            articles.extend(
                {**article, "_blog_id": blog["id"], "_blog_handle": blog["handle"]}
                for article in result.get("articles", [])
            )
        redirects = shopify.get("redirects.json?limit=250").get("redirects", [])
    return {
        "captured_at": dt.datetime.now(dt.UTC).isoformat(),
        "api_version": shopify.api_version,
        "shop": identity,
        "collections": collections,
        "pages": pages,
        "blogs": blogs,
        "articles": articles,
        "redirects": redirects,
        "unavailable_resources": unavailable_resources,
    }


def unique_by_handle(items: list[dict], handle: str, resource: str) -> dict:
    matches = [item for item in items if item.get("handle") == handle]
    if len(matches) != 1:
        raise RuntimeError(
            f"Expected exactly one {resource} with handle {handle}, found {len(matches)}"
        )
    return matches[0]


def write_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def normalise_escaped_hrefs(body: str) -> tuple[str, int]:
    patterns = [
        (r'href="\\?&quot;(/[^"<]+?)\\?&quot;"', r'href="\1"'),
        (r'href="\\"(/[^"<]+?)\\""', r'href="\1"'),
        (r"href='\\\"(/[^'<]+?)\\\"'", r"href='\1'"),
    ]
    total = 0
    result = body
    for pattern, replacement in patterns:
        result, count = re.subn(pattern, replacement, result)
        total += count
    return result, total


def update_collection_seo_graphql(
    shopify: Shopify,
    collection_id: int,
    seo_title: str,
    seo_description: str,
) -> dict:
    mutation = """
      mutation UpdateCollectionSeo($input: CollectionInput!) {
        collectionUpdate(input: $input) {
          collection {
            id
            handle
            title
            templateSuffix
            seo { title description }
          }
          userErrors { field message }
        }
      }
    """
    data = shopify.graphql(
        mutation,
        {
            "input": {
                "id": f"gid://shopify/Collection/{collection_id}",
                "seo": {
                    "title": seo_title,
                    "description": seo_description,
                },
            }
        },
    )["collectionUpdate"]
    if data["userErrors"]:
        raise RuntimeError(
            f"Collection SEO update failed for {collection_id}: {data['userErrors']}"
        )
    return data["collection"]


def apply_existing(
    shopify: Shopify,
    before: dict,
    corrections: dict,
    apply: bool,
    products_only: bool = False,
) -> list[dict]:
    actions: list[dict] = []
    for change in corrections["collection_updates"]:
        current = unique_by_handle(before["collections"], change["handle"], "collection")
        resource = current["_resource_kind"]
        payload = {
            resource: {
                "id": current["id"],
                "metafields_global_title_tag": change["seo_title"],
                "metafields_global_description_tag": change["seo_description"],
            }
        }
        for source_key, target_key in (
            ("title", "title"),
            ("template_suffix", "template_suffix"),
            ("description_html", "body_html"),
        ):
            if source_key in change:
                payload[resource][target_key] = change[source_key]
        action = {
            "action": "update_collection",
            "handle": change["handle"],
            "resource": resource,
            "id": current["id"],
            "applied": apply,
        }
        if apply:
            response = shopify.put(
                f"{resource}s/{current['id']}.json", payload
            )
            updated = response[resource]
            updated_graphql = update_collection_seo_graphql(
                shopify,
                current["id"],
                change["seo_title"],
                change["seo_description"],
            )
            action["after"] = {
                "title": updated.get("title"),
                "template_suffix": updated.get("template_suffix"),
                "description_html": updated.get("body_html"),
                "seo_title": updated_graphql["seo"].get("title"),
                "seo_description": updated_graphql["seo"].get("description"),
            }
        actions.append(action)

    if products_only:
        for change in corrections["page_updates"]:
            actions.append(
                {
                    "action": "update_page_seo",
                    "handle": change["handle"],
                    "applied": False,
                    "status": "requires_admin_ui",
                }
            )
        article_handles = sorted(
            {change["handle"] for change in corrections["article_updates"]}
            | {
                change["handle"]
                for change in corrections["internal_link_repairs"]
                if change.get("source_type") == "article"
            }
        )
        for handle in article_handles:
            actions.append(
                {
                    "action": "update_article",
                    "handle": handle,
                    "applied": False,
                    "status": "requires_admin_ui",
                }
            )
        for change in corrections["redirect_updates"]:
            actions.append(
                {
                    "action": "update_redirect",
                    "path": change["path"],
                    "target": change["target"],
                    "applied": False,
                    "status": "requires_admin_ui",
                }
            )
        return actions

    for change in corrections["page_updates"]:
        current = unique_by_handle(before["pages"], change["handle"], "page")
        payload = {
            "page": {
                "id": current["id"],
                "metafields_global_title_tag": change["seo_title"],
                "metafields_global_description_tag": change["seo_description"],
            }
        }
        action = {
            "action": "update_page_seo",
            "handle": change["handle"],
            "id": current["id"],
            "applied": apply,
        }
        if apply:
            response = shopify.put(f"pages/{current['id']}.json", payload)
            updated = response["page"]
            action["after"] = {
                "seo_title": updated.get("metafields_global_title_tag"),
                "seo_description": updated.get(
                    "metafields_global_description_tag"
                ),
            }
        actions.append(action)

    article_changes = {change["handle"]: change for change in corrections["article_updates"]}
    repair_handles = {
        change["handle"]
        for change in corrections["internal_link_repairs"]
        if change.get("source_type") == "article"
        and change.get("strip_escaped_quotes_from_relative_hrefs")
    }
    for handle in sorted(set(article_changes) | repair_handles):
        current = unique_by_handle(before["articles"], handle, "article")
        values: dict = {"id": current["id"]}
        if handle in article_changes:
            change = article_changes[handle]
            values["metafields_global_title_tag"] = change["seo_title"]
            values["metafields_global_description_tag"] = change["seo_description"]
        repaired_count = 0
        if handle in repair_handles:
            repaired_body, repaired_count = normalise_escaped_hrefs(
                current.get("body_html") or ""
            )
            if repaired_body != current.get("body_html"):
                values["body_html"] = repaired_body
        action = {
            "action": "update_article",
            "handle": handle,
            "id": current["id"],
            "blog_id": current["_blog_id"],
            "href_repairs": repaired_count,
            "applied": apply,
        }
        if apply:
            response = shopify.put(
                f"blogs/{current['_blog_id']}/articles/{current['id']}.json",
                {"article": values},
            )
            updated = response["article"]
            action["after"] = {
                "seo_title": updated.get("metafields_global_title_tag"),
                "seo_description": updated.get(
                    "metafields_global_description_tag"
                ),
                "body_updated": "body_html" in values,
            }
        actions.append(action)

    for change in corrections["redirect_updates"]:
        matches = [
            item for item in before["redirects"] if item.get("path") == change["path"]
        ]
        if len(matches) != 1:
            raise RuntimeError(
                f"Expected one redirect for {change['path']}, found {len(matches)}"
            )
        current = matches[0]
        action = {
            "action": "update_redirect",
            "path": change["path"],
            "target": change["target"],
            "id": current["id"],
            "applied": apply,
        }
        if apply:
            response = shopify.put(
                f"redirects/{current['id']}.json",
                {
                    "redirect": {
                        "id": current["id"],
                        "path": change["path"],
                        "target": change["target"],
                    }
                },
            )
            action["after"] = response["redirect"]
        actions.append(action)
    return actions


def smart_collection_payload(change: dict, existing_id: int | None = None) -> dict:
    values = {
        "title": change["title"],
        "handle": change["handle"],
        "body_html": change["description_html"],
        "template_suffix": "milaura-type",
        "sort_order": "best-selling",
        "disjunctive": False,
        "rules": [
            {"column": "tag", "relation": "equals", "condition": tag}
            for tag in change["rules"]
        ],
        "metafields_global_title_tag": change["seo_title"],
        "metafields_global_description_tag": change["seo_description"],
        "published": True,
    }
    if existing_id is not None:
        values["id"] = existing_id
    return {"smart_collection": values}


def apply_collections(
    shopify: Shopify,
    before: dict,
    corrections: dict,
    collection_manifest: dict,
    apply: bool,
    products_only: bool = False,
) -> list[dict]:
    actions: list[dict] = []
    by_handle = {item["handle"]: item for item in before["collections"]}
    for change in collection_manifest["collections"]:
        current = by_handle.get(change["handle"])
        if current and current["_resource_kind"] != "smart_collection":
            raise RuntimeError(
                f"Collection handle collision with custom collection: {change['handle']}"
            )
        action = {
            "action": "update_smart_collection" if current else "create_smart_collection",
            "handle": change["handle"],
            "expected_products": change["expected_products"],
            "applied": apply,
        }
        if apply:
            payload = smart_collection_payload(
                change, current["id"] if current else None
            )
            if current:
                response = shopify.put(
                    f"smart_collections/{current['id']}.json", payload
                )
            else:
                response = shopify.post("smart_collections.json", payload)
            created = response["smart_collection"]
            updated_graphql = update_collection_seo_graphql(
                shopify,
                created["id"],
                change["seo_title"],
                change["seo_description"],
            )
            action["id"] = created["id"]
            action["after"] = {
                "title": created.get("title"),
                "handle": created.get("handle"),
                "published_at": created.get("published_at"),
                "template_suffix": created.get("template_suffix"),
                "rules": created.get("rules"),
                "seo_title": updated_graphql["seo"].get("title"),
                "seo_description": updated_graphql["seo"].get("description"),
            }
        actions.append(action)

    if products_only:
        redirect_change = corrections["redirect_creates_after_collections"][0]
        actions.extend(
            [
                {
                    "action": "unpublish_duplicate_page",
                    "handle": "bracelet-amethyste",
                    "applied": False,
                    "status": "requires_admin_ui",
                },
                {
                    "action": "create_or_update_redirect",
                    "path": redirect_change["path"],
                    "target": redirect_change["target"],
                    "applied": False,
                    "status": "requires_admin_ui",
                },
            ]
        )
        return actions

    old_page = unique_by_handle(before["pages"], "bracelet-amethyste", "page")
    unpublish_action = {
        "action": "unpublish_duplicate_page",
        "handle": "bracelet-amethyste",
        "id": old_page["id"],
        "applied": apply,
    }
    if apply:
        response = shopify.put(
            f"pages/{old_page['id']}.json",
            {"page": {"id": old_page["id"], "published": False}},
        )
        updated = response["page"]
        unpublish_action["after"] = {
            "published_at": updated.get("published_at"),
        }
    actions.append(unpublish_action)

    redirect_change = corrections["redirect_creates_after_collections"][0]
    existing = [
        item
        for item in before["redirects"]
        if item.get("path") == redirect_change["path"]
    ]
    redirect_action = {
        "action": "update_redirect" if existing else "create_redirect",
        "path": redirect_change["path"],
        "target": redirect_change["target"],
        "applied": apply,
    }
    if apply:
        values = {
            "path": redirect_change["path"],
            "target": redirect_change["target"],
        }
        if existing:
            values["id"] = existing[0]["id"]
            response = shopify.put(
                f"redirects/{existing[0]['id']}.json", {"redirect": values}
            )
        else:
            response = shopify.post("redirects.json", {"redirect": values})
        redirect_action["after"] = response["redirect"]
    actions.append(redirect_action)
    return actions


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--env-file", type=Path, required=True)
    parser.add_argument("--api-version", default="2026-07")
    parser.add_argument("--phase", choices=("snapshot", "existing", "collections"), required=True)
    parser.add_argument("--corrections", type=Path, required=True)
    parser.add_argument("--collections", type=Path, required=True)
    parser.add_argument("--backup", type=Path, required=True)
    parser.add_argument("--receipt", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--products-only", action="store_true")
    args = parser.parse_args()

    load_env(args.env_file)
    shopify = Shopify(args.api_version)
    before = snapshot(shopify, products_only=args.products_only)
    write_json(args.backup, before)
    corrections = json.loads(args.corrections.read_text(encoding="utf-8"))
    collection_manifest = json.loads(args.collections.read_text(encoding="utf-8"))

    if args.phase == "snapshot":
        actions: list[dict] = []
    elif args.phase == "existing":
        actions = apply_existing(
            shopify,
            before,
            corrections,
            args.apply,
            products_only=args.products_only,
        )
    else:
        actions = apply_collections(
            shopify,
            before,
            corrections,
            collection_manifest,
            args.apply,
            products_only=args.products_only,
        )

    receipt = {
        "executed_at": dt.datetime.now(dt.UTC).isoformat(),
        "phase": args.phase,
        "applied": args.apply,
        "shop": before["shop"],
        "backup": str(args.backup),
        "products_only": args.products_only,
        "actions": actions,
    }
    write_json(args.receipt, receipt)
    print(
        json.dumps(
            {
                "phase": args.phase,
                "applied": args.apply,
                "actions": len(actions),
                "backup": str(args.backup),
                "receipt": str(args.receipt),
                "shop": before["shop"],
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
