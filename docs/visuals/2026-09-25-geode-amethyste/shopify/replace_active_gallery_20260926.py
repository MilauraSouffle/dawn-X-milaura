#!/usr/bin/env python3
"""Replace only the approved gallery of the live MilAura geode product."""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import json
import sys
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


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def load_plan(path: Path) -> dict:
    plan = json.loads(path.read_text(encoding="utf-8"))
    images = plan.get("images", [])
    if len(images) != 9:
        raise RuntimeError(f"Expected nine planned images, found {len(images)}")
    if [item.get("position") for item in images] != list(range(1, 10)):
        raise RuntimeError("Gallery positions must be exactly 1 through 9")
    if len({item.get("alt_text") for item in images}) != 9:
        raise RuntimeError("All nine ALT texts must be distinct")
    return plan


def validate_local(plan: dict) -> list[Path]:
    image_dir = Path(plan["image_directory"])
    paths: list[Path] = []
    for item in plan["images"]:
        path = image_dir / item["filename"]
        if not path.is_file():
            raise RuntimeError(f"Missing image: {path}")
        if sha256(path) != item["sha256"]:
            raise RuntimeError(f"SHA-256 mismatch: {path}")
        with Image.open(path) as image:
            if image.size != (2048, 2048):
                raise RuntimeError(f"Expected 2048 x 2048: {path} has {image.size}")
            if image.format != "JPEG":
                raise RuntimeError(f"Expected JPEG: {path} is {image.format}")
        paths.append(path)
    return paths


def variant_snapshot(graph_product: dict) -> dict:
    variants = graph_product.get("variants", {}).get("nodes", [])
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


def require_target(graph_product: dict, rest_product: dict, plan: dict) -> dict:
    numeric_id = int(str(graph_product.get("id")).rsplit("/", 1)[-1])
    if numeric_id != int(plan["product_id"]):
        raise RuntimeError("Shopify product ID mismatch")
    if graph_product.get("status") != plan["expected_status"]:
        raise RuntimeError(f"Unexpected GraphQL status: {graph_product.get('status')}")
    if str(rest_product.get("status", "")).lower() != "active":
        raise RuntimeError(f"Unexpected REST status: {rest_product.get('status')}")
    if graph_product.get("onlineStoreUrl") != plan["expected_online_store_url"]:
        raise RuntimeError("Public product URL changed")
    if graph_product.get("handle") != plan["handle"]:
        raise RuntimeError("Product handle changed")
    variant = variant_snapshot(graph_product)
    identities = {str(variant.get("sku") or ""), str(variant.get("barcode") or "")}
    if plan["sku"] not in identities:
        raise RuntimeError(f"SKU mismatch: {sorted(identities)}")
    if str(variant.get("price")) != str(plan["expected_price"]):
        raise RuntimeError(f"Price changed: {variant.get('price')}")
    if int(variant.get("inventoryQuantity")) != int(plan["expected_inventory_quantity"]):
        raise RuntimeError(f"Inventory changed: {variant.get('inventoryQuantity')}")
    return variant


def write_snapshot(snapshot_dir: Path, product_id: int, payload: dict) -> Path:
    snapshot_dir.mkdir(parents=True, exist_ok=True)
    stamp = dt.datetime.now(dt.UTC).strftime("%Y%m%dT%H%M%SZ")
    target = snapshot_dir / f"{product_id}-{stamp}-before-live-gallery-v2.json"
    temporary = target.with_suffix(target.suffix + ".tmp")
    temporary.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temporary.replace(target)
    return target


def stage_images(product_id: int, old_count: int, paths: list[Path], plan: dict) -> list[dict]:
    uploaded: list[dict] = []
    try:
        for index, (path, item) in enumerate(zip(paths, plan["images"], strict=True), start=1):
            response = shopify_request(
                "POST",
                f"products/{product_id}/images.json",
                {
                    "image": {
                        "attachment": image_attachment(path),
                        "filename": path.name,
                        "position": old_count + index,
                        "alt": item["alt_text"],
                    }
                },
            )
            uploaded.append(response["image"])
    except Exception:
        for image in uploaded:
            try:
                shopify_request(
                    "DELETE",
                    f"products/{product_id}/images/{image['id']}.json",
                )
            except Exception:
                pass
        raise
    return uploaded


def set_media_manifest(product_id: int, plan: dict, images: list[dict]) -> dict:
    slots = []
    for planned, remote in zip(plan["images"], images, strict=True):
        slots.append(
            {
                "position": planned["position"],
                "slot_id": planned["slot_id"],
                "role": planned["role"],
                "presentation_class": planned["presentation_class"],
                "destination": "pdp_gallery",
                "canonical_ratio": "1:1",
                "filename": planned["filename"],
                "sha256": planned["sha256"],
                "width_px": 2048,
                "height_px": 2048,
                "alt_text": planned["alt_text"],
                "shopify_image_id": int(remote["id"]),
                "shopify_position": planned["position"],
                "url": remote.get("src"),
            }
        )
    manifest = {
        "schema_version": "1.2.0",
        "workflow_version": "6.4",
        "status": "LIVE_MEDIA_BOUND",
        "catalogue_family": "pierre-mineral",
        "media_profile": "pierre-mineral",
        "visual_approval": {
            "approved_by": plan["approved_by"],
            "approved_at": plan["approval_date"],
            "scope": "neuf visuels GPT Image 2.5 de la géode GC0256",
            "instruction": plan["approval_instruction"],
        },
        "source": {
            "provider": "Higgsfield",
            "model": "gpt_image_2_5",
            "manifest": plan["source_manifest"],
            "truth_note": "Propositions génératives validées visuellement par le propriétaire; sources physiques conservées séparément.",
        },
        "groups": {
            "commercial_gallery": [item["slot_id"] for item in plan["images"] if item["presentation_class"] == "commercial_gallery"],
            "editorial_projection": [item["slot_id"] for item in plan["images"] if item["presentation_class"] == "editorial_projection"],
            "narrative_blocks": [item["slot_id"] for item in plan["images"] if item["presentation_class"] == "narrative_block"],
        },
        "slots": slots,
    }
    mutation = """
mutation SetGeodeMediaManifest($metafields: [MetafieldsSetInput!]!) {
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
                    "ownerId": product_gid(product_id),
                    "namespace": "milaura",
                    "key": "pdp_media_manifest",
                    "type": "json",
                    "value": json.dumps(manifest, ensure_ascii=False, separators=(",", ":")),
                }
            ]
        },
    )["metafieldsSet"]
    if result.get("userErrors"):
        raise RuntimeError("Media manifest errors: " + json.dumps(result["userErrors"], ensure_ascii=False))
    return manifest


def replace_gallery(product_id: int, paths: list[Path], plan: dict) -> tuple[list[dict], dict]:
    rest_before = read_rest_product(product_id)
    current_images = sorted(rest_before.get("images", []), key=lambda item: int(item.get("position") or 0))
    expected_alts = [item["alt_text"] for item in plan["images"]]
    expected_alt_set = set(expected_alts)
    existing_new = [item for item in current_images if item.get("alt") in expected_alt_set]
    if existing_new:
        by_alt = {item.get("alt"): item for item in existing_new}
        if len(existing_new) != 9 or set(by_alt) != expected_alt_set:
            raise RuntimeError(
                "Partial staged gallery detected; refusing duplicate uploads until resolved"
            )
        uploaded = [by_alt[alt] for alt in expected_alts]
        new_ids = {int(item["id"]) for item in uploaded}
        old_images = [item for item in current_images if int(item["id"]) not in new_ids]
    else:
        old_images = current_images
        uploaded = stage_images(product_id, len(old_images), paths, plan)
        if len(uploaded) != 9:
            raise RuntimeError(f"Expected nine staged images, got {len(uploaded)}")
    staged_ids = {int(item["id"]) for item in read_rest_product(product_id).get("images", [])}
    if any(int(item["id"]) not in staged_ids for item in uploaded):
        raise RuntimeError("One or more staged images are missing before cutover")
    for old in old_images:
        shopify_request("DELETE", f"products/{product_id}/images/{old['id']}.json")
    shopify_request(
        "PUT",
        f"products/{product_id}.json",
        {
            "product": {
                "id": product_id,
                "images": [
                    {"id": image["id"], "position": position}
                    for position, image in enumerate(uploaded, start=1)
                ],
            }
        },
    )
    remote_after = read_rest_product(product_id)
    images_after = sorted(remote_after.get("images", []), key=lambda item: int(item.get("position") or 0))
    if len(images_after) != 9:
        raise RuntimeError(f"Expected nine final images, got {len(images_after)}")
    if [item.get("alt") for item in images_after] != expected_alts:
        raise RuntimeError("Final ALT order does not match approved plan")
    manifest = set_media_manifest(product_id, plan, images_after)
    return images_after, manifest


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("plan", type=Path)
    parser.add_argument("--snapshot-dir", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    plan_path = args.plan.resolve()
    plan = load_plan(plan_path)
    paths = validate_local(plan)
    load_env()
    product_id = int(plan["product_id"])
    graph_before = read_draft_target(product_id)
    rest_before = read_rest_product(product_id)
    variant_before = require_target(graph_before, rest_before, plan)
    old_images = sorted(rest_before.get("images", []), key=lambda item: int(item.get("position") or 0))
    summary = {
        "product_id": product_id,
        "title": graph_before.get("title"),
        "handle": graph_before.get("handle"),
        "status": graph_before.get("status"),
        "online_store_url": graph_before.get("onlineStoreUrl"),
        "sku": variant_before.get("sku"),
        "price": variant_before.get("price"),
        "inventory_quantity": variant_before.get("inventoryQuantity"),
        "old_image_count": len(old_images),
        "new_image_count": len(paths),
        "new_alt_texts": [item["alt_text"] for item in plan["images"]],
        "would_apply": bool(args.apply),
    }
    if not args.apply:
        print(json.dumps(summary, ensure_ascii=False, indent=2))
        return 0
    if plan.get("approved_by") != "Patrice Allié" or plan.get("approval_date") != dt.date.today().isoformat():
        raise RuntimeError("Live gallery replacement requires Patrice Allié approval dated today")

    snapshot_path = write_snapshot(
        args.snapshot_dir.resolve(),
        product_id,
        {
            "captured_at": dt.datetime.now(dt.UTC).isoformat(),
            "scope": "live-gallery-and-pdp-media-manifest-only",
            "graphql": graph_before,
            "rest": rest_before,
            "local_plan": plan,
        },
    )
    images_after, manifest = replace_gallery(product_id, paths, plan)
    graph_after = read_draft_target(product_id)
    rest_after = read_rest_product(product_id)
    variant_after = require_target(graph_after, rest_after, plan)
    if graph_after.get("title") != graph_before.get("title"):
        raise RuntimeError("Product title changed during gallery replacement")
    if variant_snapshot(graph_after) != variant_snapshot(graph_before):
        raise RuntimeError("Variant commerce state changed during gallery replacement")
    if graph_after.get("collections") != graph_before.get("collections"):
        raise RuntimeError("Collection membership changed during gallery replacement")
    final_manifest_node = next(
        (item for item in graph_after.get("metafields", {}).get("nodes", []) if item.get("key") == "pdp_media_manifest"),
        None,
    )
    if not final_manifest_node:
        raise RuntimeError("pdp_media_manifest missing after replacement")
    pulled_manifest = json.loads(final_manifest_node["value"])
    if pulled_manifest.get("status") != "LIVE_MEDIA_BOUND" or len(pulled_manifest.get("slots", [])) != 9:
        raise RuntimeError("pdp_media_manifest pullback mismatch")
    print(
        json.dumps(
            {
                **summary,
                "applied": True,
                "snapshot_path": str(snapshot_path),
                "status_after": graph_after.get("status"),
                "online_store_url_after": graph_after.get("onlineStoreUrl"),
                "image_count_after": len(images_after),
                "image_ids_after": [int(item["id"]) for item in images_after],
                "image_urls_after": [item.get("src") for item in images_after],
                "alt_texts_after": [item.get("alt") for item in images_after],
                "manifest_status_after": manifest["status"],
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
