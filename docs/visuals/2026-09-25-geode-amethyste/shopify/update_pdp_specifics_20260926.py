#!/usr/bin/env python3
"""Apply only the approved product-specific PDP fields for the live geode."""

from __future__ import annotations

import argparse
import datetime as dt
import json
import sys
from pathlib import Path


AUTOMATION_SCRIPTS = Path(
    "/Users/paesano/Documents/Agentic-Ops/milaura-automation/"
    "private-workspace/product-generation/scripts"
)
sys.path.insert(0, str(AUTOMATION_SCRIPTS))

from create_shopify_draft import load_env, shopify_graphql  # noqa: E402
from update_shopify_draft import product_gid, read_draft_target  # noqa: E402


PRODUCT_ID = 10764374081883
EXPECTED_HANDLE = "geode-cathedrale-en-amethyste-19-9-kg"
EXPECTED_SKU = "GC0256"
EXPECTED_PRICE = "1299.00"
EXPECTED_STOCK = 1
EXPECTED_STATUS = "ACTIVE"
EXPECTED_URL = "https://milaura.fr/products/geode-cathedrale-en-amethyste-19-9-kg"

FIELDS = [
    {
        "namespace": "milaura",
        "key": "pdp_photo_notice",
        "type": "multi_line_text_field",
        "value": (
            "Les photos sont contractuelles : vous recevrez exactement cette géode. "
            "D'autres photos ou une vidéo peuvent vous être envoyées sur simple demande."
        ),
    },
    {
        "namespace": "milaura",
        "key": "pdp_hide_social_proof",
        "type": "boolean",
        "value": "true",
    },
    {
        "namespace": "milaura",
        "key": "pdp_hero_grade",
        "type": "single_line_text_field",
        "value": "AA+ très élevé",
    },
    {
        "namespace": "milaura",
        "key": "qualite",
        "type": "single_line_text_field",
        "value": "AA+ très élevé",
    },
    {
        "namespace": "milaura",
        "key": "stone_description",
        "type": "multi_line_text_field",
        "value": (
            "Cette géode cathédrale présente une qualité exceptionnelle. Son grade AA+, "
            "la profondeur de sa cavité, ses nuances de violet et la forme bien marquée "
            "de ses cristaux en font une pièce rare dans ce format. Le coeur sombre "
            "contraste avec les bandes minérales plus claires et souligne son relief "
            "spectaculaire. Avec ses 19,9 kg et ses 39,5 cm de hauteur, elle devient une "
            "véritable pièce décorative.\n\nEn lithothérapie, l'améthyste est associée "
            "à l'apaisement, au calme intérieur et à un sommeil plus serein. Sa grande "
            "cavité permet aussi d'y déposer bagues, bracelets ou pendentifs pour les recharger."
        ),
    },
]


def require_target(product: dict) -> dict:
    if product.get("status") != EXPECTED_STATUS:
        raise RuntimeError(f"Unexpected status: {product.get('status')}")
    if product.get("handle") != EXPECTED_HANDLE:
        raise RuntimeError(f"Unexpected handle: {product.get('handle')}")
    if product.get("onlineStoreUrl") != EXPECTED_URL:
        raise RuntimeError(f"Unexpected public URL: {product.get('onlineStoreUrl')}")
    variants = product.get("variants", {}).get("nodes", [])
    if len(variants) != 1:
        raise RuntimeError(f"Expected one variant, found {len(variants)}")
    variant = variants[0]
    if variant.get("sku") != EXPECTED_SKU:
        raise RuntimeError(f"Unexpected SKU: {variant.get('sku')}")
    if str(variant.get("price")) != EXPECTED_PRICE:
        raise RuntimeError(f"Unexpected price: {variant.get('price')}")
    if int(variant.get("inventoryQuantity")) != EXPECTED_STOCK:
        raise RuntimeError(f"Unexpected stock: {variant.get('inventoryQuantity')}")
    return variant


def field_map(product: dict) -> dict[str, dict]:
    return {
        node["key"]: node
        for node in product.get("metafields", {}).get("nodes", [])
        if node.get("key") in {field["key"] for field in FIELDS}
    }


def write_snapshot(snapshot_dir: Path, product: dict) -> Path:
    snapshot_dir.mkdir(parents=True, exist_ok=True)
    stamp = dt.datetime.now(dt.UTC).strftime("%Y%m%dT%H%M%SZ")
    target = snapshot_dir / f"{PRODUCT_ID}-{stamp}-before-pdp-specifics.json"
    target.write_text(
        json.dumps(
            {
                "captured_at": dt.datetime.now(dt.UTC).isoformat(),
                "scope": "five-product-specific-pdp-metafields-only",
                "product": product,
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    return target


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--snapshot-dir", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    load_env()
    before = read_draft_target(PRODUCT_ID)
    variant_before = require_target(before)
    summary = {
        "product_id": PRODUCT_ID,
        "title": before.get("title"),
        "handle": before.get("handle"),
        "status": before.get("status"),
        "sku": variant_before.get("sku"),
        "price": variant_before.get("price"),
        "inventory_quantity": variant_before.get("inventoryQuantity"),
        "fields_before": field_map(before),
        "fields_planned": FIELDS,
        "would_apply": bool(args.apply),
    }
    if not args.apply:
        print(json.dumps(summary, ensure_ascii=False, indent=2))
        return 0

    snapshot_path = write_snapshot(args.snapshot_dir.resolve(), before)
    mutation = """
mutation SetGeodePdpSpecifics($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields { id namespace key type value }
    userErrors { field message code }
  }
}
"""
    inputs = [{"ownerId": product_gid(PRODUCT_ID), **field} for field in FIELDS]
    result = shopify_graphql(mutation, {"metafields": inputs})["metafieldsSet"]
    if result.get("userErrors"):
        raise RuntimeError(
            "Shopify metafieldsSet errors: "
            + json.dumps(result["userErrors"], ensure_ascii=False)
        )

    after = read_draft_target(PRODUCT_ID)
    variant_after = require_target(after)
    if after.get("title") != before.get("title"):
        raise RuntimeError("Product title changed")
    if variant_after != variant_before:
        raise RuntimeError("Variant commerce state changed")
    if after.get("collections") != before.get("collections"):
        raise RuntimeError("Collection membership changed")
    actual = field_map(after)
    for expected in FIELDS:
        node = actual.get(expected["key"])
        if not node or node.get("type") != expected["type"] or node.get("value") != expected["value"]:
            raise RuntimeError(f"Pullback mismatch for {expected['key']}: {node}")

    print(
        json.dumps(
            {
                **summary,
                "applied": True,
                "snapshot_path": str(snapshot_path),
                "fields_after": actual,
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
