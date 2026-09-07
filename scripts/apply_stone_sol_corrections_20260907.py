#!/usr/bin/env python3
"""Apply the Sol-reviewed 2026-09-07 stone corrections with strict guards."""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import importlib
import json
import re
import sys
from collections import Counter
from pathlib import Path


READ_QUERY = """
query ReadStoneCorrectionTargets($ids: [ID!]!) {
  nodes(ids: $ids) {
    ... on Product {
      id
      title
      handle
      status
      onlineStoreUrl
      variants(first: 10) {
        nodes {
          id sku barcode price compareAtPrice inventoryQuantity inventoryPolicy
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
mutation SetStoneCorrections($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields { ownerType namespace key type value }
    userErrors { field message code }
  }
}
"""

DELETE_MUTATION = """
mutation DeleteStoneCorrections($metafields: [MetafieldIdentifierInput!]!) {
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
    if len(rows) != 21 or len({row["shopify_product_id"] for row in rows}) != 21:
        raise RuntimeError("Expected exactly 21 unique correction rows")
    counts = Counter(row.get("action") for row in rows)
    expected_counts = {
        "set_stone_description": 17,
        "delete_stone_description": 1,
        "set_stone_handles": 3,
    }
    if dict(counts) != expected_counts:
        raise RuntimeError(f"Unexpected action counts: {dict(counts)}")
    for row in rows:
        if row.get("namespace") != "milaura":
            raise RuntimeError(f"Unexpected namespace for {row['shopify_product_id']}")
        action = row["action"]
        if action == "set_stone_description":
            proposed = str(row.get("proposed_value") or "")
            if not 240 <= len(proposed) <= 900:
                raise RuntimeError(f"Invalid copy length for {row['shopify_product_id']}")
            if not 3 <= count_sentences(proposed) <= 5:
                raise RuntimeError(f"Invalid sentence count for {row['shopify_product_id']}")
            if hashlib.sha256(proposed.encode("utf-8")).hexdigest() != row.get(
                "proposed_sha256"
            ):
                raise RuntimeError(f"Proposed hash mismatch for {row['shopify_product_id']}")
        elif action == "delete_stone_description":
            if row.get("proposed_value") is not None:
                raise RuntimeError("Delete action must have a null proposed value")
        elif action == "set_stone_handles":
            proposed = row.get("proposed_value")
            if not isinstance(proposed, list) or len(proposed) < 2:
                raise RuntimeError(f"Invalid stone_handles for {row['shopify_product_id']}")
            expected_raw = json.dumps(proposed, ensure_ascii=False, separators=(",", ":"))
            if expected_raw != row.get("proposed_raw_value"):
                raise RuntimeError(f"stone_handles encoding mismatch for {row['shopify_product_id']}")
    return rows


def target_value(row: dict):
    if row["action"] == "set_stone_handles":
        return row["proposed_raw_value"]
    return row.get("proposed_value")


def current_target_value(row: dict, product: dict):
    if row["key"] == "stone_description":
        return field_value(product, "stoneDescription")
    if row["key"] == "stone_handles":
        return field_value(product, "stoneHandles")
    raise RuntimeError(f"Unsupported key: {row['key']}")


def validate_live_preconditions(rows: list[dict], products: dict[str, dict]) -> None:
    for row in rows:
        product_id = row["shopify_product_id"]
        product = products[product_id]
        if product["title"] != row["title"] or product["handle"] != row["handle"]:
            raise RuntimeError(f"Shopify identity changed for {product_id}")
        if product["status"] not in {"ACTIVE", "DRAFT"}:
            raise RuntimeError(f"Unsupported Shopify status for {product_id}")
        actual = current_target_value(row, product)
        expected = (
            row.get("expected_current_raw_value")
            if row["action"] == "set_stone_handles"
            else row.get("expected_current_value")
        )
        proposed = target_value(row)
        if actual not in {expected, proposed}:
            raise RuntimeError(
                f"Target field drifted for {product_id}: expected {expected!r}, found {actual!r}"
            )
        for key, value in (row.get("must_preserve_values") or {}).items():
            if current_stone_fields(product).get(key) != value:
                raise RuntimeError(f"Preserved field drifted for {product_id}: {key}")


def apply_sets(shopify_graphql, rows: list[dict], products: dict[str, dict]) -> int:
    pending = [
        row
        for row in rows
        if row["action"] in {"set_stone_description", "set_stone_handles"}
        and current_target_value(row, products[row["shopify_product_id"]]) != target_value(row)
    ]
    written = 0
    for batch in chunks(pending, 25):
        inputs = [
            {
                "ownerId": product_gid(row["shopify_product_id"]),
                "namespace": row["namespace"],
                "key": row["key"],
                "type": row["type"],
                "value": target_value(row),
            }
            for row in batch
        ]
        result = shopify_graphql(SET_MUTATION, {"metafields": inputs})["metafieldsSet"]
        if result.get("userErrors"):
            raise RuntimeError(json.dumps(result["userErrors"], ensure_ascii=False))
        if len(result.get("metafields") or []) != len(inputs):
            raise RuntimeError("Shopify returned an incomplete metafieldsSet result")
        written += len(inputs)
    return written


def apply_deletes(shopify_graphql, rows: list[dict], products: dict[str, dict]) -> int:
    pending = [
        row
        for row in rows
        if row["action"] == "delete_stone_description"
        and current_target_value(row, products[row["shopify_product_id"]]) is not None
    ]
    if not pending:
        return 0
    identifiers = [
        {
            "ownerId": product_gid(row["shopify_product_id"]),
            "namespace": row["namespace"],
            "key": row["key"],
        }
        for row in pending
    ]
    result = shopify_graphql(DELETE_MUTATION, {"metafields": identifiers})[
        "metafieldsDelete"
    ]
    if result.get("userErrors"):
        raise RuntimeError(json.dumps(result["userErrors"], ensure_ascii=False))
    if len(result.get("deletedMetafields") or []) != len(identifiers):
        raise RuntimeError("Shopify returned an incomplete metafieldsDelete result")
    return len(identifiers)


def verify_after(rows: list[dict], before: dict[str, dict], after: dict[str, dict]) -> dict:
    failures = []
    targeted = {(row["shopify_product_id"], row["key"]) for row in rows}
    for row in rows:
        product_id = row["shopify_product_id"]
        if stable_product_state(before[product_id]) != stable_product_state(after[product_id]):
            failures.append({"product_id": product_id, "reason": "commerce_or_identity_changed"})
            continue
        if current_target_value(row, after[product_id]) != target_value(row):
            failures.append({"product_id": product_id, "reason": "target_pullback_mismatch"})
        before_fields = current_stone_fields(before[product_id])
        after_fields = current_stone_fields(after[product_id])
        for key in before_fields:
            if (product_id, key) in targeted:
                continue
            if before_fields[key] != after_fields[key]:
                failures.append(
                    {"product_id": product_id, "reason": f"untargeted_{key}_changed"}
                )
    return {
        "pass": not failures,
        "products_verified": len(rows) - len({f["product_id"] for f in failures}),
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
    stamp = dt.datetime.now(dt.UTC).strftime("%Y%m%dT%H%M%SZ")
    preflight_path = args.snapshot_dir / f"{stamp}-preflight.json"
    write_json_atomic(
        preflight_path,
        {
            "checked_at": dt.datetime.now(dt.UTC).isoformat(),
            "manifest": str(args.manifest.resolve()),
            "counts": manifest["counts"],
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
                    "counts": manifest["counts"],
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

    set_writes = apply_sets(shopify_graphql, rows, before)
    deletes = apply_deletes(shopify_graphql, rows, before)
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
            "set_writes_performed": set_writes,
            "deletes_performed": deletes,
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
                "set_writes_performed": set_writes,
                "deletes_performed": deletes,
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
