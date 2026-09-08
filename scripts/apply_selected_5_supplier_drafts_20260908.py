#!/usr/bin/env python3
"""Apply the approved five-product enrichment to pinned Shopify DRAFTs."""

from __future__ import annotations

import argparse
import datetime as dt
import fcntl
import hashlib
from io import BytesIO
import json
import os
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlparse

import requests
from PIL import Image


PIPELINE_ROOT = Path(
    "/Users/paesano/Documents/Agentic-Ops/milaura-automation/"
    "private-workspace/product-generation"
)
sys.path.insert(0, str(PIPELINE_ROOT / "scripts"))

from create_shopify_draft import (  # noqa: E402
    build_google_variant_metafields,
    build_metafields,
    image_attachment,
    image_files,
    load_env,
    resolve_catalogue_routing,
    resolve_inventory_location_id,
    set_inventory_quantity,
    shopify_graphql,
    shopify_request,
)
from image_quality_check import validate_image_batch  # noqa: E402
from quality_gate import check_draft_review_ready  # noqa: E402
from update_shopify_draft import (  # noqa: E402
    delete_stale_metafields,
    product_gid,
    read_draft_target,
    read_rest_product,
    set_metafields,
)


AUTHORIZATION_DATE = dt.date(2026, 9, 8)
EXPECTED_SHOP_ID = "gid://shopify/Shop/97728069979"
EXPECTED_SHOP_ENDPOINT_DOMAIN = "milaura-2.myshopify.com"
EXPECTED_SHOP_PERMANENT_DOMAIN = "dvsi0r-1q.myshopify.com"
PINNED_API_VERSION = "2026-07"
PRODUCTS = {
    "3701459058181": {
        "product_id": 10357443330395,
        "variant_id": 52484215701851,
        "inventory_item_id": 54526946574683,
        "handle": "bracelet-seraphinite",
        "old_title": "Bracelet Baroque Séraphinite",
        "old_price": "12.90",
        "old_sku": "3701459058181",
        "old_barcode": None,
    },
    "3701459074594": {
        "product_id": 10402430452059,
        "variant_id": 52651115938139,
        "inventory_item_id": 54695335100763,
        "handle": "collier-boule-06mm-jaspe-rouge-a",
        "old_title": "Collier Jaspe Rouge",
        "old_price": "17.90",
        "old_sku": None,
        "old_barcode": None,
    },
    "3701459074938": {
        "product_id": 10357493203291,
        "variant_id": 52484319281499,
        "inventory_item_id": 54527050154331,
        "handle": "collier-pyrite-1",
        "old_title": "Collier Pyrite",
        "old_price": "22.90",
        "old_sku": "3701459074938",
        "old_barcode": None,
    },
    "3701459037612": {
        "product_id": 10358581625179,
        "variant_id": 52486437634395,
        "inventory_item_id": 54529167294811,
        "handle": "pendule-labradorite",
        "old_title": "Pendule Labradorite",
        "old_price": "9.90",
        "old_sku": "3701459037612",
        "old_barcode": None,
    },
    "3701459037650": {
        "product_id": 10357688631643,
        "variant_id": 52484657676635,
        "inventory_item_id": 54527387959643,
        "handle": "pendule-oeil-de-tigre",
        "old_title": "Pendule Œil de Tigre",
        "old_price": "12.50",
        "old_sku": "3701459037650",
        "old_barcode": None,
    },
}


def numeric_gid(value: str) -> int:
    return int(str(value).rsplit("/", 1)[-1])


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def pixel_digest(image: Image.Image) -> str:
    normalized = image.convert("RGBA")
    digest = hashlib.sha256()
    digest.update(f"{normalized.width}x{normalized.height}:RGBA".encode("ascii"))
    digest.update(normalized.tobytes())
    return digest.hexdigest()


def write_json_atomic(path: Path, value: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    temporary.replace(path)


def acquire_lock() -> object:
    path = Path("/private/tmp/milaura-selected-five-draft-production.lock")
    handle = path.open("a+", encoding="utf-8")
    try:
        fcntl.flock(handle.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
    except BlockingIOError as exc:
        handle.close()
        raise RuntimeError("Another selected-five Shopify apply is running") from exc
    handle.seek(0)
    handle.truncate()
    handle.write(f"pid={os.getpid()} started={dt.datetime.now(dt.UTC).isoformat()}\n")
    handle.flush()
    return handle


def assert_shop_identity() -> dict:
    query = """
query ApprovedMilAuraShopIdentity { shop { id myshopifyDomain } }
"""
    shop = shopify_graphql(query, {})["shop"]
    if shop.get("id") != EXPECTED_SHOP_ID:
        raise RuntimeError(f"Unexpected Shopify shop ID: {shop.get('id')}")
    if shop.get("myshopifyDomain") != EXPECTED_SHOP_PERMANENT_DOMAIN:
        raise RuntimeError(f"Unexpected Shopify domain: {shop.get('myshopifyDomain')}")
    return shop


def read_inventory_levels(inventory_item_id: int) -> list[dict]:
    result = shopify_request(
        "GET", f"inventory_levels.json?inventory_item_ids={inventory_item_id}"
    )
    return sorted(
        result.get("inventory_levels", []), key=lambda item: int(item["location_id"])
    )


def desired_product_metafields(payload: dict) -> list[dict]:
    fields = build_metafields(payload)
    supplier_url = str(payload.get("source", {}).get("supplier_url") or "").strip()
    if supplier_url:
        fields.append(
            {
                "namespace": "milaura",
                "key": "supplier_url",
                "type": "url",
                "value": supplier_url,
            }
        )
    return fields


def normalized_metafield_value(value: str, field_type: str) -> object:
    if field_type == "json" or field_type.startswith("list."):
        return json.loads(value)
    return value


def normalized_html(value: str | None) -> str:
    return re.sub(r">\s+<", "><", str(value or "").strip())


def metafield_map(fields: list[dict]) -> dict[tuple[str, str], tuple[str, object]]:
    return {
        (item["namespace"], item["key"]): (
            item["type"],
            normalized_metafield_value(item["value"], item["type"]),
        )
        for item in fields
    }


def remote_metafield_map(nodes: list[dict], namespace: str) -> dict:
    return {
        (namespace, item["key"]): (
            item["type"],
            normalized_metafield_value(item["value"], item["type"]),
        )
        for item in nodes
    }


def inspect_local_gallery(product_dir: Path) -> list[dict]:
    files = image_files(product_dir)
    expected_names = [
        "01-cover.png",
        "02-macro-product.png",
        "03-editorial-contrast.png",
        "04-calm-context-inset.png",
        "05-vivid-lifestyle.png",
    ]
    if [path.name for path in files] != expected_names:
        raise RuntimeError(f"Unexpected local gallery in {product_dir}")
    facts = []
    for path in files:
        with Image.open(path) as image:
            image.load()
            if image.format != "PNG" or image.size != (1024, 1024):
                raise RuntimeError(f"Invalid reviewed image: {path}")
            facts.append(
                {
                    "path": path,
                    "filename": path.name,
                    "sha256": sha256_file(path),
                    "pixel_sha256": pixel_digest(image),
                }
            )
    return facts


def validate_remote_target(
    ean: str, target: dict, payload: dict, remote: dict
) -> tuple[dict, bool]:
    if remote.get("id") != product_gid(target["product_id"]):
        raise RuntimeError(f"Pinned product ID mismatch for {ean}")
    if remote.get("handle") != target["handle"]:
        raise RuntimeError(f"Pinned handle mismatch for {ean}")
    if remote.get("status") != "DRAFT" or remote.get("onlineStoreUrl") is not None:
        raise RuntimeError(f"Refusing visible or non-DRAFT target for {ean}")
    variants = remote.get("variants", {}).get("nodes", [])
    if len(variants) != 1:
        raise RuntimeError(f"Expected one variant for {ean}")
    variant = variants[0]
    if numeric_gid(variant["id"]) != target["variant_id"]:
        raise RuntimeError(f"Pinned variant mismatch for {ean}")
    if numeric_gid(variant["inventoryItem"]["id"]) != target["inventory_item_id"]:
        raise RuntimeError(f"Pinned inventory item mismatch for {ean}")
    desired_variant = payload["shopify"]["variant"]
    if remote.get("title") == target["old_title"]:
        if variant.get("price") != target["old_price"]:
            raise RuntimeError(f"Unexpected pre-enrichment price for {ean}")
        if variant.get("sku") != target["old_sku"]:
            raise RuntimeError(f"Unexpected pre-enrichment SKU for {ean}")
        if variant.get("barcode") != target["old_barcode"]:
            raise RuntimeError(f"Unexpected pre-enrichment barcode for {ean}")
        return variant, False
    if remote.get("title") == payload["shopify"]["title"]:
        for key in ("price", "sku", "barcode"):
            if variant.get(key) != desired_variant.get(key):
                raise RuntimeError(f"Partially converged variant {key} for {ean}")
        return variant, True
    raise RuntimeError(f"Unexpected pre-enrichment title for {ean}")


def update_product_core(item: dict) -> dict:
    payload = item["payload"]
    shopify = payload["shopify"]
    product_input = {
        "id": product_gid(item["target"]["product_id"]),
        "title": shopify["title"],
        "handle": item["target"]["handle"],
        "redirectNewHandle": True,
        "descriptionHtml": shopify["description_html"],
        "vendor": shopify.get("vendor", "MilAura"),
        "productType": shopify["product_type"],
        "status": "DRAFT",
        "templateSuffix": shopify.get("template_suffix", "milaura-produit"),
        "tags": shopify.get("tags", []),
        "seo": {
            "title": shopify["seo_title"],
            "description": shopify["seo_description"],
        },
        "category": item["routing"]["category"]["id"],
    }
    if item["routing"]["manual_collection_ids"]:
        product_input["collectionsToJoin"] = item["routing"]["manual_collection_ids"]
    mutation = """
mutation ApprovedSelectedFiveDraft($product: ProductUpdateInput!) {
  productUpdate(product: $product) {
    userErrors { field message }
    product { id title handle status onlineStoreUrl }
  }
}
"""
    result = shopify_graphql(mutation, {"product": product_input})["productUpdate"]
    if result.get("userErrors"):
        raise RuntimeError(
            "Shopify productUpdate userErrors: "
            + json.dumps(result["userErrors"], ensure_ascii=False)
        )
    return result["product"]


def update_variant(item: dict) -> dict:
    variant = item["payload"]["shopify"]["variant"]
    result = shopify_request(
        "PUT",
        f"variants/{item['target']['variant_id']}.json",
        {
            "variant": {
                "id": item["target"]["variant_id"],
                "sku": variant.get("sku"),
                "barcode": variant.get("barcode"),
                "price": variant["price"],
                "compare_at_price": variant.get("compare_at_price"),
                "inventory_management": "shopify",
                "inventory_policy": "deny",
            }
        },
    )
    return result["variant"]


def inspect_remote_image(content: bytes, source: str) -> dict:
    if len(content) < 512:
        raise RuntimeError(f"Remote image is unexpectedly small: {source}")
    with Image.open(BytesIO(content)) as image:
        image.load()
        return {
            "format": image.format,
            "width": image.width,
            "height": image.height,
            "pixel_sha256": pixel_digest(image),
        }


def backup_remote_gallery(item: dict, output_dir: Path, stamp: str) -> list[dict]:
    target_dir = output_dir / "old-shopify-images" / stamp / item["ean"]
    target_dir.mkdir(parents=True, exist_ok=True)
    result = []
    for index, remote in enumerate(item["before_rest"].get("images", []), start=1):
        url = remote["src"]
        suffix = Path(url.split("?", 1)[0]).suffix or ".bin"
        path = target_dir / f"{index:02d}-{remote['id']}{suffix}"
        response = requests.get(url, timeout=90)
        response.raise_for_status()
        temporary = path.with_suffix(path.suffix + ".tmp")
        temporary.write_bytes(response.content)
        temporary.replace(path)
        result.append(
            {
                "id": remote["id"],
                "url": url,
                "alt": remote.get("alt"),
                "path": str(path),
                "sha256": sha256_file(path),
                "decoded": inspect_remote_image(response.content, url),
            }
        )
    return result


def remote_filename(image: dict) -> str:
    return Path(unquote(urlparse(image.get("src") or "").path)).name


def verify_uploaded_gallery(images: list[dict], item: dict) -> None:
    expected = item["local_gallery"]
    alt_texts = item["payload"]["shopify"]["image_alt_texts"]
    if len(images) != 5 or [image.get("alt") for image in images] != alt_texts:
        raise RuntimeError(f"Uploaded gallery count or alt mismatch for {item['ean']}")
    for remote, local in zip(images, expected, strict=True):
        marker = f"{Path(local['filename']).stem}-{local['sha256'][:12]}"
        if marker not in remote_filename(remote):
            raise RuntimeError(f"Remote filename marker mismatch for {item['ean']}")
        response = requests.get(remote["src"], timeout=90)
        response.raise_for_status()
        decoded = inspect_remote_image(response.content, remote["src"])
        if (decoded["width"], decoded["height"]) != (1024, 1024):
            raise RuntimeError(f"Remote dimensions mismatch for {item['ean']}")
        if decoded["pixel_sha256"] != local["pixel_sha256"]:
            raise RuntimeError(f"Remote pixel mismatch for {item['ean']}")


def replace_gallery(item: dict) -> list[dict]:
    product_id = item["target"]["product_id"]
    old_images = sorted(
        read_rest_product(product_id).get("images", []),
        key=lambda image: int(image.get("position") or 0),
    )
    uploaded = []
    try:
        for index, local in enumerate(item["local_gallery"], start=1):
            path = local["path"]
            marker = f"{path.stem}-{local['sha256'][:12]}{path.suffix}"
            result = shopify_request(
                "POST",
                f"products/{product_id}/images.json",
                {
                    "image": {
                        "attachment": image_attachment(path),
                        "filename": marker,
                        "position": len(old_images) + index,
                        "alt": item["payload"]["shopify"]["image_alt_texts"][index - 1],
                    }
                },
            )
            uploaded.append(result["image"])
        verify_uploaded_gallery(uploaded, item)
    except Exception:
        for image in uploaded:
            try:
                shopify_request(
                    "DELETE", f"products/{product_id}/images/{image['id']}.json"
                )
            except Exception:
                pass
        raise

    for image in old_images:
        shopify_request("DELETE", f"products/{product_id}/images/{image['id']}.json")
    shopify_request(
        "PUT",
        f"products/{product_id}.json",
        {
            "product": {
                "id": product_id,
                "images": [
                    {"id": image["id"], "position": index}
                    for index, image in enumerate(uploaded, start=1)
                ],
            }
        },
    )
    final_images = sorted(
        read_rest_product(product_id).get("images", []),
        key=lambda image: int(image.get("position") or 0),
    )
    verify_uploaded_gallery(final_images, item)
    return final_images


def verify_after(item: dict, target_location_id: int) -> list[str]:
    payload = item["payload"]
    shopify = payload["shopify"]
    after = read_draft_target(item["target"]["product_id"])
    rest = read_rest_product(item["target"]["product_id"])
    failures = []
    for key, expected in {
        "title": shopify["title"],
        "handle": item["target"]["handle"],
        "status": "DRAFT",
        "onlineStoreUrl": None,
        "productType": shopify["product_type"],
        "templateSuffix": shopify.get("template_suffix", "milaura-produit"),
    }.items():
        if after.get(key) != expected:
            failures.append(f"{key}: expected {expected!r}, got {after.get(key)!r}")
    if normalized_html(after.get("descriptionHtml")) != normalized_html(
        shopify["description_html"]
    ):
        failures.append("descriptionHtml mismatch")
    if after.get("seo") != {
        "title": shopify["seo_title"],
        "description": shopify["seo_description"],
    }:
        failures.append("SEO mismatch")
    if (after.get("category") or {}).get("id") != shopify["category_taxonomy_id"]:
        failures.append("taxonomy category mismatch")
    if set(after.get("tags") or []) != set(shopify.get("tags") or []):
        failures.append("tags mismatch")

    variants = after.get("variants", {}).get("nodes", [])
    rest_variants = rest.get("variants", [])
    if len(variants) != 1 or len(rest_variants) != 1:
        failures.append("single variant invariant failed")
        return failures
    variant = variants[0]
    rest_variant = rest_variants[0]
    desired_variant = shopify["variant"]
    for key in ("sku", "barcode", "price"):
        if variant.get(key) != desired_variant.get(key):
            failures.append(f"variant {key} mismatch")
    if rest_variant.get("compare_at_price") != desired_variant.get("compare_at_price"):
        failures.append("compare_at_price mismatch")
    if variant.get("inventoryQuantity") != 1:
        failures.append("inventory quantity is not staging value 1")
    if variant.get("inventoryPolicy") != "DENY":
        failures.append("inventory policy is not DENY")
    if (variant.get("inventoryItem") or {}).get("tracked") is not True:
        failures.append("inventory tracking is not enabled")
    if (variant.get("inventoryItem") or {}).get("unitCost") != item["unit_cost_before"]:
        failures.append("inventory unit cost changed unexpectedly")

    images = sorted(rest.get("images", []), key=lambda image: int(image["position"]))
    try:
        verify_uploaded_gallery(images, item)
    except RuntimeError as exc:
        failures.append(str(exc))

    desired_product = metafield_map(desired_product_metafields(payload))
    actual_product = remote_metafield_map(
        after.get("metafields", {}).get("nodes", []), "milaura"
    )
    if actual_product != desired_product:
        failures.append("Milaura metafields do not match exactly")
    desired_google = metafield_map(build_google_variant_metafields(payload))
    actual_google = remote_metafield_map(
        (variant.get("metafields") or {}).get("nodes", []), "mm-google-shopping"
    )
    if actual_google != desired_google:
        failures.append("Google Shopping metafields do not match exactly")

    levels = read_inventory_levels(item["target"]["inventory_item_id"])
    by_location = {int(level["location_id"]): int(level["available"]) for level in levels}
    if by_location.get(target_location_id) != 1:
        failures.append("target location inventory is not 1")
    if any(
        quantity != 0
        for location_id, quantity in by_location.items()
        if location_id != target_location_id
    ):
        failures.append("unexpected inventory at another location")
    item["after"] = after
    item["after_rest"] = rest
    item["inventory_levels_after"] = levels
    return failures


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--batch-root", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--authorized-by")
    parser.add_argument("--authorized-at")
    args = parser.parse_args()
    if args.apply and (
        args.authorized_by != "Patrice Allié" or args.authorized_at != "2026-09-08"
    ):
        raise RuntimeError("Apply requires Patrice Allié authorization dated 2026-09-08")
    if dt.date.today() != AUTHORIZATION_DATE:
        raise RuntimeError("This bounded apply authorization is valid only on 2026-09-08")

    batch_root = args.batch_root.resolve()
    output_dir = args.output_dir.resolve()
    output_dir.mkdir(parents=True, exist_ok=True)
    items = []
    for ean, target in PRODUCTS.items():
        payload_path = batch_root / "sol-enrichments" / ean / "product_enrichment.json"
        payload = json.loads(payload_path.read_text(encoding="utf-8"))
        if payload["source"]["supplier_ref"] != ean:
            raise RuntimeError(f"Local supplier identity mismatch for {ean}")
        if payload["shopify"]["handle"] != target["handle"]:
            raise RuntimeError(f"Local handle mismatch for {ean}")
        failures = check_draft_review_ready(payload, as_of_date=AUTHORIZATION_DATE)
        image_check = validate_image_batch(payload, payload_path.parent)
        failures.extend(f"images: {value}" for value in image_check["failures"])
        if failures:
            raise RuntimeError(
                f"Local preflight failed for {ean}: "
                + json.dumps(failures, ensure_ascii=False)
            )
        items.append(
            {
                "ean": ean,
                "target": target,
                "payload": payload,
                "payload_path": payload_path,
                "local_gallery": inspect_local_gallery(payload_path.parent),
            }
        )

    load_env()
    os.environ["SHOPIFY_API_VERSION"] = PINNED_API_VERSION
    if os.environ.get("SHOPIFY_STORE") != EXPECTED_SHOP_ENDPOINT_DOMAIN:
        raise RuntimeError(f"Unexpected SHOPIFY_STORE: {os.environ.get('SHOPIFY_STORE')}")
    lock_handle = acquire_lock()
    shop = assert_shop_identity()
    target_location_id = resolve_inventory_location_id()
    for item in items:
        before = read_draft_target(item["target"]["product_id"])
        variant, converged_candidate = validate_remote_target(
            item["ean"], item["target"], item["payload"], before
        )
        levels = read_inventory_levels(item["target"]["inventory_item_id"])
        allowed_quantity = 1 if converged_candidate else 0
        target_quantities = [
            int(level["available"])
            for level in levels
            if int(level["location_id"]) == target_location_id
        ]
        unexpected_other = [
            level
            for level in levels
            if int(level["location_id"]) != target_location_id
            and int(level["available"]) != 0
        ]
        if target_quantities != [allowed_quantity] or unexpected_other:
            raise RuntimeError(f"Unexpected pre-existing inventory for {item['ean']}")
        item["before"] = before
        item["before_rest"] = read_rest_product(item["target"]["product_id"])
        item["unit_cost_before"] = (variant.get("inventoryItem") or {}).get("unitCost")
        item["inventory_levels_before"] = levels
        item["routing"] = resolve_catalogue_routing(item["payload"])
        item["already_converged"] = converged_candidate
        if converged_candidate:
            converged_failures = verify_after(item, target_location_id)
            if converged_failures:
                raise RuntimeError(
                    f"Partially converged Shopify state for {item['ean']}: "
                    + json.dumps(converged_failures, ensure_ascii=False)
                )

    stamp = dt.datetime.now(dt.UTC).strftime("%Y%m%dT%H%M%SZ")
    preflight_path = output_dir / f"{stamp}-preflight.json"
    write_json_atomic(
        preflight_path,
        {
            "captured_at": dt.datetime.now(dt.UTC).isoformat(),
            "scope": "selected-five-draft-content-gallery-inventory",
            "shop": shop,
            "target_location_id": target_location_id,
            "products": [
                {
                    "ean": item["ean"],
                    "target": item["target"],
                    "payload_path": str(item["payload_path"]),
                    "before": item["before"],
                    "before_rest": item["before_rest"],
                    "inventory_levels_before": item["inventory_levels_before"],
                    "already_converged": item["already_converged"],
                    "local_gallery": [
                        {key: value for key, value in image.items() if key != "path"}
                        for image in item["local_gallery"]
                    ],
                }
                for item in items
            ],
        },
    )
    if not args.apply:
        print(
            json.dumps(
                {
                    "would_apply": True,
                    "product_count": len(items),
                    "eans": [item["ean"] for item in items],
                    "preflight_path": str(preflight_path),
                },
                ensure_ascii=False,
                indent=2,
            )
        )
        return 0

    backups = {
        item["ean"]: backup_remote_gallery(item, output_dir, stamp)
        for item in items
        if not item["already_converged"]
    }
    backup_manifest = output_dir / f"{stamp}-old-gallery-backups.json"
    write_json_atomic(backup_manifest, {"products": backups})

    results = []
    for item in items:
        if item["already_converged"]:
            results.append(
                {
                    "ean": item["ean"],
                    "product_id": item["target"]["product_id"],
                    "admin_url": (
                        f"https://{EXPECTED_SHOP_ENDPOINT_DOMAIN}/admin/products/"
                        f"{item['target']['product_id']}"
                    ),
                    "before": item["before"],
                    "after": item["after"],
                    "after_rest": item["after_rest"],
                    "inventory_levels_after": item["inventory_levels_after"],
                    "old_gallery_backup": None,
                    "result": "already-converged-from-resumable-run",
                    "failures": [],
                    "technical_status": "PASS",
                }
            )
            continue
        current = read_draft_target(item["target"]["product_id"])
        if current != item["before"]:
            raise RuntimeError(f"Concurrent Shopify edit detected for {item['ean']}")
        update_product_core(item)
        update_variant(item)
        product_fields = desired_product_metafields(item["payload"])
        google_fields = build_google_variant_metafields(item["payload"])
        set_metafields(product_gid(item["target"]["product_id"]), product_fields)
        variant_gid = f"gid://shopify/ProductVariant/{item['target']['variant_id']}"
        set_metafields(variant_gid, google_fields)
        refreshed = read_draft_target(item["target"]["product_id"])
        delete_stale_metafields(
            item["target"]["product_id"],
            item["target"]["variant_id"],
            refreshed,
            {field["key"] for field in product_fields},
            {field["key"] for field in google_fields},
        )
        set_inventory_quantity(
            f"gid://shopify/InventoryItem/{item['target']['inventory_item_id']}",
            1,
            location_id=target_location_id,
        )
        replace_gallery(item)
        failures = verify_after(item, target_location_id)
        result = {
            "ean": item["ean"],
            "product_id": item["target"]["product_id"],
            "admin_url": (
                f"https://{EXPECTED_SHOP_ENDPOINT_DOMAIN}/admin/products/"
                f"{item['target']['product_id']}"
            ),
            "before": item["before"],
            "after": item["after"],
            "after_rest": item["after_rest"],
            "inventory_levels_after": item["inventory_levels_after"],
            "old_gallery_backup": backups[item["ean"]],
            "failures": failures,
            "technical_status": "PASS" if not failures else "FAIL",
        }
        per_product_path = output_dir / f"{stamp}-{item['ean']}-result.json"
        write_json_atomic(per_product_path, result)
        results.append(result)
        if failures:
            raise RuntimeError(
                f"Remote verification failed for {item['ean']}: "
                + json.dumps(failures, ensure_ascii=False)
            )

    result_path = output_dir / f"{stamp}-result.json"
    write_json_atomic(
        result_path,
        {
            "completed_at": dt.datetime.now(dt.UTC).isoformat(),
            "scope": "selected-five-draft-content-gallery-inventory",
            "authorized_by": args.authorized_by,
            "authorized_at": args.authorized_at,
            "technical_status": "PASS",
            "product_count": len(results),
            "preflight_path": str(preflight_path),
            "backup_manifest": str(backup_manifest),
            "products": results,
        },
    )
    print(
        json.dumps(
            {
                "applied": True,
                "technical_status": "PASS",
                "product_count": len(results),
                "result_path": str(result_path),
                "products": [
                    {
                        "ean": item["ean"],
                        "title": item["after"]["title"],
                        "status": item["after"]["status"],
                        "inventory_quantity": item["after"]["variants"]["nodes"][0]["inventoryQuantity"],
                        "price": item["after"]["variants"]["nodes"][0]["price"],
                        "image_count": len(item["after_rest"]["images"]),
                    }
                    for item in results
                ],
            },
            ensure_ascii=False,
            indent=2,
        )
    )
    del lock_handle
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
