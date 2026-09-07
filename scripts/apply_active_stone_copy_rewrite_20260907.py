#!/usr/bin/env python3
"""Apply the approved 2026-09-07 stone-copy rewrite with strict Shopify guards."""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import importlib
import json
import re
import sys
from pathlib import Path


READ_QUERY = """
query ReadStoneCopyTargets($ids: [ID!]!) {
  nodes(ids: $ids) {
    ... on Product {
      id
      title
      handle
      status
      onlineStoreUrl
      variants(first: 10) {
        nodes {
          id
          sku
          barcode
          price
          compareAtPrice
          inventoryQuantity
          inventoryPolicy
          inventoryItem { id tracked unitCost { amount currencyCode } }
        }
      }
      images(first: 100) { nodes { id altText url } }
      collections(first: 100) { nodes { id } }
      stoneName: metafield(namespace: "milaura", key: "stone_name") { type value }
      stoneHandle: metafield(namespace: "milaura", key: "stone_handle") { type value }
      stoneHandles: metafield(namespace: "milaura", key: "stone_handles") { type value }
      stoneDescription: metafield(namespace: "milaura", key: "stone_description") { type value }
      stoneBenefits: metafield(namespace: "milaura", key: "stone_benefits") { type value }
    }
  }
}
"""

SET_MUTATION = """
mutation SetStoneDescriptions($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields { ownerType namespace key type value }
    userErrors { field message code }
  }
}
"""

DELETE_MUTATION = """
mutation DeleteFalseStoneNames($metafields: [MetafieldIdentifierInput!]!) {
  metafieldsDelete(metafields: $metafields) {
    deletedMetafields { ownerId namespace key }
    userErrors { field message }
  }
}
"""


def read_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json_atomic(path: Path, value: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    temporary.replace(path)


def chunks(values: list, size: int):
    for index in range(0, len(values), size):
        yield values[index : index + size]


def product_gid(product_id: str) -> str:
    return f"gid://shopify/Product/{product_id}"


def numeric_id(gid: str) -> str:
    return str(gid).rsplit("/", 1)[-1]


def field_value(product: dict, alias: str):
    field = product.get(alias)
    return None if field is None else field.get("value")


def current_stone_fields(product: dict) -> dict:
    return {
        "stone_name": field_value(product, "stoneName"),
        "stone_handle": field_value(product, "stoneHandle"),
        "stone_handles": field_value(product, "stoneHandles"),
        "stone_description": field_value(product, "stoneDescription"),
        "stone_benefits": field_value(product, "stoneBenefits"),
    }


def stable_product_state(product: dict) -> dict:
    return {
        "id": product["id"],
        "title": product["title"],
        "handle": product["handle"],
        "status": product["status"],
        "onlineStoreUrl": product.get("onlineStoreUrl"),
        "variants": product.get("variants", {}).get("nodes", []),
        "images": product.get("images", {}).get("nodes", []),
        "collections": sorted(
            node["id"] for node in product.get("collections", {}).get("nodes", [])
        ),
    }


def read_products(shopify_graphql, rows: list[dict]) -> dict[str, dict]:
    result: dict[str, dict] = {}
    for batch in chunks(rows, 25):
        ids = [product_gid(row["shopify_product_id"]) for row in batch]
        nodes = shopify_graphql(READ_QUERY, {"ids": ids})["nodes"]
        if len(nodes) != len(ids) or any(node is None for node in nodes):
            raise RuntimeError("Shopify did not return every expected product")
        for node in nodes:
            result[numeric_id(node["id"])] = node
    return result


def count_sentences(text: str) -> int:
    return len(re.findall(r"[.!?](?:\s|$)", text.strip()))


def validate_manifest(manifest: dict) -> list[dict]:
    rows = manifest.get("rows") or []
    if len(rows) != 228:
        raise RuntimeError(f"Expected 228 manifest rows, found {len(rows)}")
    if len({row["shopify_product_id"] for row in rows}) != 228:
        raise RuntimeError("Manifest contains duplicate Shopify product IDs")
    ready = [row for row in rows if row.get("action") == "set_stone_description"]
    taxonomy = [row for row in rows if row.get("action") == "taxonomy_review_required"]
    if len(ready) != 221 or len(taxonomy) != 7:
        raise RuntimeError(
            f"Expected 221 copy writes and 7 taxonomy corrections, found {len(ready)} and {len(taxonomy)}"
        )
    descriptions = []
    for row in ready:
        value = str(row.get("proposed_stone_description") or "")
        if not 240 <= len(value) <= 900:
            raise RuntimeError(f"Invalid copy length for {row['shopify_product_id']}")
        if not 3 <= count_sentences(value) <= 5:
            raise RuntimeError(f"Invalid sentence count for {row['shopify_product_id']}")
        digest = hashlib.sha256(value.encode("utf-8")).hexdigest()
        if digest != row.get("proposed_sha256"):
            raise RuntimeError(f"Copy hash mismatch for {row['shopify_product_id']}")
        descriptions.append(value)
    if len(set(descriptions)) != len(descriptions):
        raise RuntimeError("Duplicate proposed stone descriptions detected")
    for row in taxonomy:
        if row.get("proposed_stone_description") not in {None, ""}:
            raise RuntimeError(
                f"Taxonomy correction has unexpected copy for {row['shopify_product_id']}"
            )
    return rows


def validate_live_preconditions(rows: list[dict], products: dict[str, dict]) -> None:
    for row in rows:
        product_id = row["shopify_product_id"]
        product = products[product_id]
        if product["title"] != row["title"] or product["handle"] != row["handle"]:
            raise RuntimeError(f"Shopify identity changed for {product_id}")
        if product["status"] not in {"ACTIVE", "DRAFT"}:
            raise RuntimeError(f"Unsupported Shopify status for {product_id}: {product['status']}")
        expected = row.get("current_stone_fields") or {}
        actual = current_stone_fields(product)
        if row["action"] == "set_stone_description":
            already_applied = actual["stone_description"] == row["proposed_stone_description"]
            expected_current = {
                key: expected.get(key)
                for key in (
                    "stone_name",
                    "stone_handle",
                    "stone_handles",
                    "stone_description",
                    "stone_benefits",
                )
            }
            if not already_applied and actual != expected_current:
                raise RuntimeError(
                    f"Stone fields drifted for {product_id}: expected {expected_current}, found {actual}"
                )
        else:
            for key in ("stone_handle", "stone_handles", "stone_benefits"):
                if actual[key] != expected.get(key):
                    raise RuntimeError(f"Taxonomy fields drifted for {product_id}: {key}")
            if actual["stone_name"] not in {None, expected.get("stone_name")}:
                raise RuntimeError(f"stone_name drifted for {product_id}")
            if actual["stone_description"] not in {None, expected.get("stone_description")}:
                raise RuntimeError(f"stone_description drifted for {product_id}")


def set_descriptions(shopify_graphql, rows: list[dict], products: dict[str, dict]) -> int:
    pending = [
        row
        for row in rows
        if row["action"] == "set_stone_description"
        and current_stone_fields(products[row["shopify_product_id"]])["stone_description"]
        != row["proposed_stone_description"]
    ]
    written = 0
    for batch in chunks(pending, 25):
        inputs = [
            {
                "ownerId": product_gid(row["shopify_product_id"]),
                "namespace": "milaura",
                "key": "stone_description",
                "type": "multi_line_text_field",
                "value": row["proposed_stone_description"],
            }
            for row in batch
        ]
        result = shopify_graphql(SET_MUTATION, {"metafields": inputs})["metafieldsSet"]
        if result.get("userErrors"):
            raise RuntimeError(
                "Shopify metafieldsSet errors: "
                + json.dumps(result["userErrors"], ensure_ascii=False)
            )
        if len(result.get("metafields") or []) != len(inputs):
            raise RuntimeError("Shopify metafieldsSet returned an incomplete result")
        written += len(inputs)
    return written


def clear_false_stone_names(shopify_graphql, rows: list[dict], products: dict[str, dict]) -> int:
    identifiers = []
    for row in rows:
        if row["action"] != "taxonomy_review_required":
            continue
        product = products[row["shopify_product_id"]]
        fields = current_stone_fields(product)
        for key in ("stone_name", "stone_description"):
            if fields[key] is not None:
                identifiers.append(
                    {
                        "ownerId": product_gid(row["shopify_product_id"]),
                        "namespace": "milaura",
                        "key": key,
                    }
                )
    deleted = 0
    for batch in chunks(identifiers, 25):
        result = shopify_graphql(DELETE_MUTATION, {"metafields": batch})[
            "metafieldsDelete"
        ]
        if result.get("userErrors"):
            raise RuntimeError(
                "Shopify metafieldsDelete errors: "
                + json.dumps(result["userErrors"], ensure_ascii=False)
            )
        if len(result.get("deletedMetafields") or []) != len(batch):
            raise RuntimeError("Shopify metafieldsDelete returned an incomplete result")
        deleted += len(batch)
    return deleted


def verify_after(
    rows: list[dict], before: dict[str, dict], after: dict[str, dict]
) -> dict:
    failures = []
    for row in rows:
        product_id = row["shopify_product_id"]
        if stable_product_state(before[product_id]) != stable_product_state(after[product_id]):
            failures.append({"product_id": product_id, "reason": "commerce_or_identity_changed"})
            continue
        fields = current_stone_fields(after[product_id])
        if row["action"] == "set_stone_description":
            if fields["stone_description"] != row["proposed_stone_description"]:
                failures.append({"product_id": product_id, "reason": "copy_pullback_mismatch"})
        elif fields["stone_name"] is not None or fields["stone_description"] is not None:
            failures.append({"product_id": product_id, "reason": "taxonomy_cleanup_mismatch"})
    return {
        "pass": not failures,
        "products_verified": len(rows) - len(failures),
        "failures": failures,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("manifest", type=Path)
    parser.add_argument("--product-generation-root", type=Path, required=True)
    parser.add_argument("--snapshot-dir", type=Path, required=True)
    parser.add_argument("--approved-by")
    parser.add_argument("--approval-date")
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    scripts_dir = args.product_generation_root.resolve() / "scripts"
    sys.path.insert(0, str(scripts_dir))
    create_shopify_draft = importlib.import_module("create_shopify_draft")
    create_shopify_draft.load_env()
    shopify_graphql = create_shopify_draft.shopify_graphql

    manifest = read_json(args.manifest.resolve())
    rows = validate_manifest(manifest)
    before = read_products(shopify_graphql, rows)
    validate_live_preconditions(rows, before)
    status_counts = {
        status: sum(product["status"] == status for product in before.values())
        for status in ("ACTIVE", "DRAFT")
    }
    stamp = dt.datetime.now(dt.UTC).strftime("%Y%m%dT%H%M%SZ")
    preflight_path = args.snapshot_dir / f"{stamp}-preflight.json"
    write_json_atomic(
        preflight_path,
        {
            "checked_at": dt.datetime.now(dt.UTC).isoformat(),
            "manifest": str(args.manifest.resolve()),
            "products": len(rows),
            "copy_writes": 221,
            "taxonomy_corrections": 7,
            "status_counts": status_counts,
            "live_preconditions": "PASS",
            "shopify_mutation_performed": False,
            "before": before,
        },
    )
    if not args.apply:
        print(
            json.dumps(
                {
                    "would_apply": True,
                    "products": len(rows),
                    "copy_writes": 221,
                    "taxonomy_corrections": 7,
                    "status_counts": status_counts,
                    "preflight": str(preflight_path),
                },
                ensure_ascii=False,
                indent=2,
            )
        )
        return 0

    today = dt.date.today().isoformat()
    if args.approved_by != "Patrice Allié" or args.approval_date != today:
        raise RuntimeError("Current dated approval from Patrice Allié is required")

    copy_writes = set_descriptions(shopify_graphql, rows, before)
    taxonomy_deletes = clear_false_stone_names(shopify_graphql, rows, before)
    after = read_products(shopify_graphql, rows)
    verification = verify_after(rows, before, after)
    result_path = args.snapshot_dir / f"{stamp}-result.json"
    write_json_atomic(
        result_path,
        {
            "completed_at": dt.datetime.now(dt.UTC).isoformat(),
            "approved_by": args.approved_by,
            "approval_date": args.approval_date,
            "shopify_mutation_performed": True,
            "copy_writes_performed": copy_writes,
            "taxonomy_metafields_deleted": taxonomy_deletes,
            "verification": verification,
            "after": after,
        },
    )
    if not verification["pass"]:
        raise RuntimeError(f"Pullback verification failed; see {result_path}")
    print(
        json.dumps(
            {
                "technical_status": "PASS",
                "products_verified": verification["products_verified"],
                "copy_writes_performed": copy_writes,
                "taxonomy_metafields_deleted": taxonomy_deletes,
                "preflight": str(preflight_path),
                "result": str(result_path),
            },
            ensure_ascii=False,
            indent=2,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
