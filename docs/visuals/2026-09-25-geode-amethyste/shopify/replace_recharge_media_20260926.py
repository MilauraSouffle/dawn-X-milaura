#!/usr/bin/env python3
"""Replace only the approved jewelry-recharge media on the live geode PDP."""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import json
import sys
import time
from pathlib import Path

from PIL import Image


AUTOMATION_SCRIPTS = Path(
    "/Users/paesano/Documents/Agentic-Ops/milaura-automation/"
    "private-workspace/product-generation/scripts"
)
sys.path.insert(0, str(AUTOMATION_SCRIPTS))

from create_shopify_draft import (  # noqa: E402
    image_attachment,
    load_env,
    shopify_graphql,
    shopify_request,
)
from update_shopify_draft import (  # noqa: E402
    product_gid,
    read_draft_target,
    read_rest_product,
)


PRODUCT_ID = 10764374081883
EXPECTED_HANDLE = "geode-cathedrale-en-amethyste-19-9-kg"
EXPECTED_SKU = "GC0256"
EXPECTED_PRICE = "1299.00"
EXPECTED_STOCK = 1
EXPECTED_STATUS = "ACTIVE"
EXPECTED_URL = "https://milaura.fr/products/geode-cathedrale-en-amethyste-19-9-kg"
TARGET_POSITION = 8
TARGET_SLOT_ID = "E02_JEWELRY_RECHARGE"
OLD_ALT = "Collier et bague en améthyste posés dans la géode pour le rechargement"
NEW_ALT = "Deux bracelets en pierres naturelles posés dans la géode pour le rechargement"
EXPECTED_SHA256 = "e929c237271641853444463be91e0d8c63824dba98aab50050fdce021be71976"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def validate_local(path: Path) -> None:
    if not path.is_file():
        raise RuntimeError(f"Missing replacement image: {path}")
    if sha256(path) != EXPECTED_SHA256:
        raise RuntimeError(f"SHA-256 mismatch for {path}")
    with Image.open(path) as image:
        if image.size != (2048, 2048):
            raise RuntimeError(f"Expected 2048 x 2048, found {image.size}")
        if image.format != "JPEG":
            raise RuntimeError(f"Expected JPEG, found {image.format}")


def variant_snapshot(product: dict) -> dict:
    variants = product.get("variants", {}).get("nodes", [])
    if len(variants) != 1:
        raise RuntimeError(f"Expected one variant, found {len(variants)}")
    variant = variants[0]
    return {
        "id": variant.get("id"),
        "sku": variant.get("sku"),
        "barcode": variant.get("barcode"),
        "price": variant.get("price"),
        "inventoryQuantity": variant.get("inventoryQuantity"),
        "inventoryPolicy": variant.get("inventoryPolicy"),
        "tracked": (variant.get("inventoryItem") or {}).get("tracked"),
    }


def require_target(graph_product: dict, rest_product: dict) -> dict:
    if graph_product.get("status") != EXPECTED_STATUS:
        raise RuntimeError(f"Unexpected status: {graph_product.get('status')}")
    if str(rest_product.get("status", "")).lower() != "active":
        raise RuntimeError(f"Unexpected REST status: {rest_product.get('status')}")
    if graph_product.get("handle") != EXPECTED_HANDLE:
        raise RuntimeError(f"Unexpected handle: {graph_product.get('handle')}")
    if graph_product.get("onlineStoreUrl") != EXPECTED_URL:
        raise RuntimeError(f"Unexpected URL: {graph_product.get('onlineStoreUrl')}")
    variant = variant_snapshot(graph_product)
    if variant.get("sku") != EXPECTED_SKU:
        raise RuntimeError(f"Unexpected SKU: {variant.get('sku')}")
    if str(variant.get("price")) != EXPECTED_PRICE:
        raise RuntimeError(f"Unexpected price: {variant.get('price')}")
    if int(variant.get("inventoryQuantity")) != EXPECTED_STOCK:
        raise RuntimeError(f"Unexpected stock: {variant.get('inventoryQuantity')}")
    return variant


def current_manifest(product: dict) -> tuple[dict, dict]:
    node = next(
        (
            item
            for item in product.get("metafields", {}).get("nodes", [])
            if item.get("key") == "pdp_media_manifest"
        ),
        None,
    )
    if not node or node.get("type") != "json":
        raise RuntimeError("Missing JSON pdp_media_manifest")
    manifest = json.loads(node["value"])
    slots = manifest.get("slots", [])
    if len(slots) != 9:
        raise RuntimeError(f"Expected nine manifest slots, found {len(slots)}")
    slot = next((item for item in slots if item.get("slot_id") == TARGET_SLOT_ID), None)
    if not slot or int(slot.get("position") or 0) != TARGET_POSITION:
        raise RuntimeError("Recharge slot missing or moved")
    return manifest, slot


def write_snapshot(snapshot_dir: Path, graph: dict, rest: dict, manifest: dict) -> Path:
    snapshot_dir.mkdir(parents=True, exist_ok=True)
    stamp = dt.datetime.now(dt.UTC).strftime("%Y%m%dT%H%M%SZ")
    target = snapshot_dir / f"{PRODUCT_ID}-{stamp}-before-recharge-media-v2.json"
    target.write_text(
        json.dumps(
            {
                "captured_at": dt.datetime.now(dt.UTC).isoformat(),
                "scope": "position-8-recharge-media-and-manifest-slot-only",
                "graphql": graph,
                "rest": rest,
                "manifest": manifest,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    return target


def wait_for_images(
    *,
    required_id: int | None = None,
    forbidden_alt: str | None = None,
    attempts: int = 10,
) -> list[dict]:
    latest: list[dict] = []
    for attempt in range(attempts):
        latest = sorted(
            read_rest_product(PRODUCT_ID).get("images", []),
            key=lambda item: int(item.get("position") or 0),
        )
        has_required = required_id is None or any(
            int(item["id"]) == required_id for item in latest
        )
        has_forbidden = forbidden_alt is not None and any(
            item.get("alt") == forbidden_alt for item in latest
        )
        if has_required and not has_forbidden:
            return latest
        if attempt < attempts - 1:
            time.sleep(2)
    raise RuntimeError(
        "Timed out waiting for Shopify image propagation: "
        f"required_id={required_id}, forbidden_alt={forbidden_alt}, "
        f"image_count={len(latest)}"
    )


def set_manifest(manifest: dict, remote_image: dict, path: Path) -> dict:
    slot = next(item for item in manifest["slots"] if item.get("slot_id") == TARGET_SLOT_ID)
    slot.update(
        {
            "filename": path.name,
            "sha256": EXPECTED_SHA256,
            "width_px": 2048,
            "height_px": 2048,
            "alt_text": NEW_ALT,
            "shopify_image_id": int(remote_image["id"]),
            "shopify_position": TARGET_POSITION,
            "url": remote_image.get("src"),
        }
    )
    revision = {
        "date": "2026-09-26",
        "slot_id": TARGET_SLOT_ID,
        "reason": "Remplacer le collier suspendu par deux bracelets poses naturellement dans la cavite.",
        "approved_by": "Patrice Allié",
        "source": {
            "provider": "OpenAI",
            "workflow": "built-in image_gen precise-object-edit",
            "master": "replacement-2026-09-26/08-recharge-bracelets-v2-master.png",
        },
    }
    revisions = manifest.setdefault("revisions", [])
    if not any(item.get("slot_id") == TARGET_SLOT_ID and item.get("date") == "2026-09-26" for item in revisions):
        revisions.append(revision)
    mutation = """
mutation SetGeodeRechargeManifest($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields { id namespace key type value }
    userErrors { field message code }
  }
}
"""
    result = shopify_graphql(
        mutation,
        {
            "metafields": [
                {
                    "ownerId": product_gid(PRODUCT_ID),
                    "namespace": "milaura",
                    "key": "pdp_media_manifest",
                    "type": "json",
                    "value": json.dumps(manifest, ensure_ascii=False, separators=(",", ":")),
                }
            ]
        },
    )["metafieldsSet"]
    if result.get("userErrors"):
        raise RuntimeError(
            "Manifest errors: " + json.dumps(result["userErrors"], ensure_ascii=False)
        )
    return manifest


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("image", type=Path)
    parser.add_argument("--snapshot-dir", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    image_path = args.image.resolve()
    validate_local(image_path)
    load_env()
    graph_before = read_draft_target(PRODUCT_ID)
    rest_before = read_rest_product(PRODUCT_ID)
    variant_before = require_target(graph_before, rest_before)
    manifest, slot_before = current_manifest(graph_before)
    current_images = sorted(rest_before.get("images", []), key=lambda item: int(item.get("position") or 0))
    old_images = [item for item in current_images if item.get("alt") == OLD_ALT]
    new_images = [item for item in current_images if item.get("alt") == NEW_ALT]
    if len(old_images) > 1 or len(new_images) > 1:
        raise RuntimeError("Duplicate old or replacement recharge media detected")
    if not old_images and not new_images:
        raise RuntimeError("Neither the expected old nor replacement recharge media is present")
    if len(current_images) not in {9, 10}:
        raise RuntimeError(f"Expected nine or ten images, found {len(current_images)}")
    expected_alts = [item["alt_text"] for item in sorted(manifest["slots"], key=lambda item: item["position"])]
    expected_alts[TARGET_POSITION - 1] = NEW_ALT
    summary = {
        "product_id": PRODUCT_ID,
        "status": graph_before.get("status"),
        "sku": variant_before.get("sku"),
        "price": variant_before.get("price"),
        "inventory_quantity": variant_before.get("inventoryQuantity"),
        "image_count_before": len(current_images),
        "target_slot_before": slot_before,
        "old_media_present": bool(old_images),
        "replacement_media_present": bool(new_images),
        "replacement_sha256": EXPECTED_SHA256,
        "would_apply": bool(args.apply),
    }
    if not args.apply:
        print(json.dumps(summary, ensure_ascii=False, indent=2))
        return 0

    snapshot_path = write_snapshot(args.snapshot_dir.resolve(), graph_before, rest_before, manifest)
    uploaded = new_images[0] if new_images else None
    if uploaded is None:
        uploaded = shopify_request(
            "POST",
            f"products/{PRODUCT_ID}/images.json",
            {
                "image": {
                    "attachment": image_attachment(image_path),
                    "filename": image_path.name,
                    "position": len(current_images) + 1,
                    "alt": NEW_ALT,
                }
            },
        )["image"]

    fresh_images = wait_for_images(required_id=int(uploaded["id"]))
    uploaded = next((item for item in fresh_images if int(item["id"]) == int(uploaded["id"])), None)
    if uploaded is None:
        raise RuntimeError("Replacement image is missing after staging")
    old_images = [item for item in fresh_images if item.get("alt") == OLD_ALT]
    if old_images:
        shopify_request(
            "DELETE",
            f"products/{PRODUCT_ID}/images/{old_images[0]['id']}.json",
        )

    fresh_images = wait_for_images(
        required_id=int(uploaded["id"]),
        forbidden_alt=OLD_ALT,
    )
    base_images = [item for item in fresh_images if int(item["id"]) != int(uploaded["id"])]
    desired_images = base_images[: TARGET_POSITION - 1] + [uploaded] + base_images[TARGET_POSITION - 1 :]
    if len(desired_images) != 9:
        raise RuntimeError(f"Expected nine images for final order, found {len(desired_images)}")
    shopify_request(
        "PUT",
        f"products/{PRODUCT_ID}.json",
        {
            "product": {
                "id": PRODUCT_ID,
                "images": [
                    {"id": image["id"], "position": position}
                    for position, image in enumerate(desired_images, start=1)
                ],
            }
        },
    )
    rest_after_order = read_rest_product(PRODUCT_ID)
    images_after = sorted(
        rest_after_order.get("images", []),
        key=lambda item: int(item.get("position") or 0),
    )
    if len(images_after) != 9 or [item.get("alt") for item in images_after] != expected_alts:
        raise RuntimeError("Final gallery order or ALT pullback mismatch")
    remote_target = images_after[TARGET_POSITION - 1]
    manifest_after = set_manifest(manifest, remote_target, image_path)

    graph_after = read_draft_target(PRODUCT_ID)
    rest_after = read_rest_product(PRODUCT_ID)
    variant_after = require_target(graph_after, rest_after)
    pulled_manifest, pulled_slot = current_manifest(graph_after)
    if graph_after.get("title") != graph_before.get("title"):
        raise RuntimeError("Product title changed")
    if variant_after != variant_before:
        raise RuntimeError("Variant commerce state changed")
    if graph_after.get("collections") != graph_before.get("collections"):
        raise RuntimeError("Collection membership changed")
    if pulled_slot.get("sha256") != EXPECTED_SHA256 or pulled_slot.get("alt_text") != NEW_ALT:
        raise RuntimeError("Manifest slot pullback mismatch")
    final_images = sorted(rest_after.get("images", []), key=lambda item: int(item.get("position") or 0))
    if [item.get("alt") for item in final_images] != expected_alts:
        raise RuntimeError("Final REST pullback mismatch")

    print(
        json.dumps(
            {
                **summary,
                "applied": True,
                "snapshot_path": str(snapshot_path),
                "image_count_after": len(final_images),
                "target_image_after": final_images[TARGET_POSITION - 1],
                "target_slot_after": pulled_slot,
                "manifest_revision_count": len(pulled_manifest.get("revisions", [])),
                "product_core_preserved": True,
                "variant_commerce_preserved": True,
                "collections_preserved": True,
            },
            ensure_ascii=False,
            indent=2,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
