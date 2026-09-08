#!/usr/bin/env python3
"""Move the approved five-product production batch and Baguette Pyrite to DRAFT.

The mutation is intentionally limited to Shopify product status. It captures a
full before snapshot, validates every pinned identity, applies DRAFT, then reads
all six products back and rejects any drift beyond status and storefront URL.
"""

from __future__ import annotations

import argparse
import datetime as dt
import fcntl
import json
import os
from pathlib import Path
import sys
from zoneinfo import ZoneInfo


PIPELINE_ROOT = Path(
    "/Users/paesano/Documents/Agentic-Ops/milaura-automation/"
    "private-workspace/product-generation"
)
sys.path.insert(0, str(PIPELINE_ROOT / "scripts"))

from create_shopify_draft import load_env, shopify_graphql  # noqa: E402


PRODUCTS = [
    (10357443330395, "3701459058181", "bracelet-seraphinite", "Bracelet Baroque Séraphinite"),
    (10402430452059, "3701459074594", "collier-boule-06mm-jaspe-rouge-a", "Collier Jaspe Rouge"),
    (10357493203291, "3701459074938", "collier-pyrite-1", "Collier Pyrite"),
    (10358581625179, "3701459037612", "pendule-labradorite", "Pendule Labradorite"),
    (10357688631643, "3701459037650", "pendule-oeil-de-tigre", "Pendule Œil de Tigre"),
    (10357681619291, "3701459092857", "bague-pyrite", "Baguette Pyrite"),
]

# The Jaspe Rouge product predates the current identity rules and has no SKU or
# barcode in Shopify. Its exact product ID, historical handle, title and exact
# supplier handle/EAN match are pinned together for this one approved exception.
ALLOWED_MISSING_VARIANT_IDENTITY = {10402430452059}

AUTHORIZATION_DATE = dt.date(2026, 9, 8)
PARIS = ZoneInfo("Europe/Paris")
EXPECTED_SHOP_ID = "gid://shopify/Shop/97728069979"
EXPECTED_SHOP_ENDPOINT_DOMAIN = "milaura-2.myshopify.com"
EXPECTED_SHOP_PERMANENT_DOMAIN = "dvsi0r-1q.myshopify.com"
PINNED_API_VERSION = "2026-07"

PRODUCT_QUERY = """
query ApprovedDraftStageTarget($id: ID!) {
  product(id: $id) {
    id title handle status onlineStoreUrl vendor productType templateSuffix tags
    descriptionHtml
    seo { title description }
    category { id name fullName }
    collections(first: 100) { nodes { id title handle } }
    images(first: 50) { nodes { id altText url } }
    metafields(first: 100, namespace: "milaura") {
      nodes { id namespace key type value }
    }
    variants(first: 10) {
      nodes {
        id sku barcode price compareAtPrice inventoryQuantity inventoryPolicy
        inventoryItem { id tracked unitCost { amount currencyCode } }
      }
    }
  }
}
"""


def product_gid(product_id: int) -> str:
    return f"gid://shopify/Product/{product_id}"


def acquire_batch_lock() -> object:
    lock_path = Path("/private/tmp/milaura-five-plus-baguette-draft-apply.lock")
    handle = lock_path.open("a+", encoding="utf-8")
    try:
        fcntl.flock(handle.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
    except BlockingIOError as exc:
        handle.close()
        raise RuntimeError("Another MilAura five-product draft mutation is running") from exc
    handle.seek(0)
    handle.truncate()
    handle.write(f"pid={os.getpid()} started={dt.datetime.now(dt.UTC).isoformat()}\n")
    handle.flush()
    return handle


def assert_shop_identity() -> dict:
    query = """
query ApprovedMilAuraShopIdentity {
  shop { id myshopifyDomain }
}
"""
    shop = shopify_graphql(query, {})["shop"]
    if shop.get("id") != EXPECTED_SHOP_ID:
        raise RuntimeError(f"Unexpected Shopify shop ID: {shop.get('id')}")
    if shop.get("myshopifyDomain") != EXPECTED_SHOP_PERMANENT_DOMAIN:
        raise RuntimeError(f"Unexpected Shopify domain: {shop.get('myshopifyDomain')}")
    return shop


def read_product(product_id: int) -> dict:
    product = shopify_graphql(PRODUCT_QUERY, {"id": product_gid(product_id)}).get("product")
    if not product:
        raise RuntimeError(f"Shopify product not found: {product_id}")
    return product


def validate_identity(
    product: dict, product_id: int, ean: str, handle: str, title: str
) -> None:
    if product.get("id") != product_gid(product_id):
        raise RuntimeError(f"Pinned ID mismatch for {product_id}")
    if product.get("handle") != handle:
        raise RuntimeError(
            f"Pinned handle mismatch for {ean}: expected {handle}, got {product.get('handle')}"
        )
    if product.get("title") != title:
        raise RuntimeError(
            f"Pinned title mismatch for {ean}: expected {title}, got {product.get('title')}"
        )
    if product.get("status") not in {"ACTIVE", "DRAFT"}:
        raise RuntimeError(f"Refusing unexpected status for {ean}: {product.get('status')}")
    variants = product.get("variants", {}).get("nodes", [])
    if len(variants) != 1:
        raise RuntimeError(f"Expected one variant for {ean}, got {len(variants)}")
    variant = variants[0]
    identities = {
        str(value).strip()
        for value in (variant.get("sku"), variant.get("barcode"))
        if value is not None and str(value).strip()
    }
    if not identities and product_id in ALLOWED_MISSING_VARIANT_IDENTITY:
        return
    if ean not in identities:
        raise RuntimeError(
            f"Pinned EAN/SKU identity mismatch for {product_id}: {sorted(identities)}"
        )


def set_draft(product_id: int) -> dict:
    mutation = """
mutation ApprovedDraftStage($product: ProductUpdateInput!) {
  productUpdate(product: $product) {
    userErrors { field message }
    product { id title handle status onlineStoreUrl }
  }
}
"""
    result = shopify_graphql(
        mutation, {"product": {"id": product_gid(product_id), "status": "DRAFT"}}
    )["productUpdate"]
    if result.get("userErrors"):
        raise RuntimeError(
            "Shopify productUpdate userErrors: "
            + json.dumps(result["userErrors"], ensure_ascii=False)
        )
    return result["product"]


def write_json_atomic(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    temporary.replace(path)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--authorized-by")
    parser.add_argument("--authorized-at")
    args = parser.parse_args()

    if args.apply and (
        args.authorized_by != "Patrice Allié" or args.authorized_at != "2026-09-08"
    ):
        raise RuntimeError(
            "Apply requires the exact explicit authorization recorded for Patrice Allié "
            "on 2026-09-08"
        )
    if dt.datetime.now(PARIS).date() != AUTHORIZATION_DATE:
        raise RuntimeError("This bounded status authorization is valid only on 2026-09-08")

    load_env()
    os.environ["SHOPIFY_API_VERSION"] = PINNED_API_VERSION
    if os.environ.get("SHOPIFY_STORE") != EXPECTED_SHOP_ENDPOINT_DOMAIN:
        raise RuntimeError(
            f"Refusing unexpected SHOPIFY_STORE: {os.environ.get('SHOPIFY_STORE')}"
        )
    lock_handle = acquire_batch_lock()
    shop_identity = assert_shop_identity()
    before: list[dict] = []
    for product_id, ean, handle, title in PRODUCTS:
        product = read_product(product_id)
        validate_identity(product, product_id, ean, handle, title)
        before.append({"ean": ean, "expected_handle": handle, "product": product})

    stamp = dt.datetime.now(dt.UTC).strftime("%Y%m%dT%H%M%SZ")
    snapshot_path = args.output_dir / f"{stamp}-status-before.json"
    write_json_atomic(
        snapshot_path,
        {
            "captured_at": dt.datetime.now(dt.UTC).isoformat(),
            "scope": "status-only-five-production-plus-baguette-retirement",
            "authorized_by": args.authorized_by,
            "authorized_at": args.authorized_at,
            "shop": shop_identity,
            "api_version": PINNED_API_VERSION,
            "products": before,
        },
    )
    if not args.apply:
        print(
            json.dumps(
                {
                    "would_apply": True,
                    "product_count": len(before),
                    "snapshot_path": str(snapshot_path),
                    "statuses": {item["ean"]: item["product"]["status"] for item in before},
                },
                ensure_ascii=False,
                indent=2,
            )
        )
        return 0

    changed: list[dict] = []
    for item in before:
        product = item["product"]
        if product["status"] == "DRAFT":
            changed.append(
                {"ean": item["ean"], "product_id": product["id"], "result": "already-draft"}
            )
            continue
        updated = set_draft(int(str(product["id"]).rsplit("/", 1)[-1]))
        changed.append({"ean": item["ean"], "product_id": product["id"], "result": updated})

    after: list[dict] = []
    failures: list[str] = []
    before_by_ean = {item["ean"]: item["product"] for item in before}
    for product_id, ean, handle, title in PRODUCTS:
        product = read_product(product_id)
        validate_identity(product, product_id, ean, handle, title)
        after.append({"ean": ean, "product": product})
        if product.get("status") != "DRAFT":
            failures.append(f"{ean}: status {product.get('status')} != DRAFT")
        if product.get("onlineStoreUrl") is not None:
            failures.append(f"{ean}: onlineStoreUrl is still populated")
        expected = json.loads(json.dumps(before_by_ean[ean], ensure_ascii=False))
        expected["status"] = "DRAFT"
        expected["onlineStoreUrl"] = None
        if product != expected:
            changed_keys = sorted(
                key
                for key in set(expected) | set(product)
                if expected.get(key) != product.get(key)
            )
            failures.append(f"{ean}: unexpected status-stage drift in keys {changed_keys}")

    result_path = args.output_dir / f"{stamp}-status-result.json"
    result = {
        "completed_at": dt.datetime.now(dt.UTC).isoformat(),
        "scope": "status-only-five-production-plus-baguette-retirement",
        "authorized_by": args.authorized_by,
        "authorized_at": args.authorized_at,
        "before_snapshot": str(snapshot_path),
        "changed": changed,
        "after": after,
        "failures": failures,
        "technical_status": "PASS" if not failures else "FAIL",
    }
    write_json_atomic(result_path, result)
    print(json.dumps({**result, "result_path": str(result_path)}, ensure_ascii=False, indent=2))
    del lock_handle
    return 0 if not failures else 2


if __name__ == "__main__":
    raise SystemExit(main())
