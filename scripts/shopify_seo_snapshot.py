#!/usr/bin/env python3
"""Create a read-only Shopify SEO snapshot without exposing credentials.

The snapshot contains products, collections and URL redirects. The script never
prints the access token and performs no mutation.
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import os
from pathlib import Path
import tempfile
import urllib.error
import urllib.request


DEFAULT_API_VERSION = "2026-07"


def graphql(query: str, variables: dict) -> dict:
    store = os.environ.get("SHOPIFY_STORE", "milaura-2.myshopify.com")
    token = os.environ.get("SHOPIFY_ACCESS_TOKEN")
    version = os.environ.get("SHOPIFY_API_VERSION", DEFAULT_API_VERSION)
    if not token:
        raise RuntimeError("SHOPIFY_ACCESS_TOKEN is missing")
    request = urllib.request.Request(
        f"https://{store}/admin/api/{version}/graphql.json",
        data=json.dumps({"query": query, "variables": variables}).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": token,
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=60) as response:
            payload = json.load(response)
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"Shopify HTTP {exc.code}: {body[:1200]}") from exc
    if payload.get("errors"):
        raise RuntimeError(json.dumps(payload["errors"], ensure_ascii=False, indent=2))
    return payload["data"]


def read_connection(query: str, connection: str, page_size: int = 250) -> list[dict]:
    nodes: list[dict] = []
    after: str | None = None
    while True:
        data = graphql(query, {"first": page_size, "after": after})
        result = data[connection]
        nodes.extend(edge["node"] for edge in result["edges"])
        page_info = result["pageInfo"]
        if not page_info["hasNextPage"]:
            return nodes
        after = page_info["endCursor"]


PRODUCTS_QUERY = """
query MilauraSeoProducts($first: Int!, $after: String) {
  products(first: $first, after: $after, sortKey: ID) {
    edges {
      node {
        id
        title
        handle
        status
        onlineStoreUrl
        updatedAt
        vendor
        productType
        templateSuffix
        seo { title description }
        descriptionHtml
        totalInventory
        variants(first: 25) {
          nodes { id sku barcode inventoryQuantity inventoryPolicy }
        }
        metafields(first: 100, namespace: "milaura") {
          nodes { namespace key type value }
        }
      }
    }
    pageInfo { hasNextPage endCursor }
  }
}
"""


COLLECTIONS_QUERY = """
query MilauraSeoCollections($first: Int!, $after: String) {
  collections(first: $first, after: $after, sortKey: ID) {
    edges {
      node {
        id
        title
        handle
        updatedAt
        templateSuffix
        descriptionHtml
        seo { title description }
        productsCount { count }
      }
    }
    pageInfo { hasNextPage endCursor }
  }
}
"""


REDIRECTS_QUERY = """
query MilauraSeoRedirects($first: Int!, $after: String) {
  urlRedirects(first: $first, after: $after) {
    edges { node { id path target } }
    pageInfo { hasNextPage endCursor }
  }
}
"""


IDENTITY_QUERY = """
query MilauraSeoIdentity {
  shop { id name myshopifyDomain primaryDomain { host url } }
  currentAppInstallation { accessScopes { handle } }
}
"""


def write_json_atomic(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(
        "w", encoding="utf-8", dir=path.parent, delete=False
    ) as handle:
        json.dump(payload, handle, ensure_ascii=False, indent=2)
        handle.write("\n")
        temporary = Path(handle.name)
    temporary.replace(path)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--expected-shop-id")
    parser.add_argument("--expected-primary-host")
    parser.add_argument(
        "--skip-redirects",
        action="store_true",
        help="Skip URL redirects when the supplied token has no redirect scope.",
    )
    args = parser.parse_args()

    os.environ.setdefault("SHOPIFY_API_VERSION", DEFAULT_API_VERSION)
    identity = graphql(IDENTITY_QUERY, {})
    shop = identity["shop"]
    if args.expected_shop_id and shop["id"] != args.expected_shop_id:
        raise RuntimeError(f"Unexpected Shopify shop ID: {shop['id']}")
    if (
        args.expected_primary_host
        and shop["primaryDomain"]["host"] != args.expected_primary_host
    ):
        raise RuntimeError(
            f"Unexpected Shopify primary host: {shop['primaryDomain']['host']}"
        )

    products = read_connection(PRODUCTS_QUERY, "products")
    collections = read_connection(COLLECTIONS_QUERY, "collections")
    redirects = (
        []
        if args.skip_redirects
        else read_connection(REDIRECTS_QUERY, "urlRedirects")
    )
    snapshot = {
        "audited_at": dt.datetime.now(dt.UTC).isoformat(),
        "api_version": os.environ["SHOPIFY_API_VERSION"],
        "shop": shop,
        "access_scopes": sorted(
            scope["handle"] for scope in identity["currentAppInstallation"]["accessScopes"]
        ),
        "counts": {
            "products": len(products),
            "collections": len(collections),
            "redirects": len(redirects),
        },
        "products": products,
        "collections": collections,
        "redirects": redirects,
        "unavailable_resources": ["redirects"] if args.skip_redirects else [],
    }
    write_json_atomic(args.output, snapshot)
    print(
        json.dumps(
            {
                "written": str(args.output),
                "shop_id": shop["id"],
                "counts": snapshot["counts"],
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
