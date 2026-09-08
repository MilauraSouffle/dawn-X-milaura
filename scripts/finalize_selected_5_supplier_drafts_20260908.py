#!/usr/bin/env python3
"""Finalize the five approved supplier-backed MilAura review drafts locally."""

from __future__ import annotations

import argparse
import datetime as dt
import hashlib
import json
from pathlib import Path
import shutil
import sys

from PIL import Image


PIPELINE_ROOT = Path(
    "/Users/paesano/Documents/Agentic-Ops/milaura-automation/"
    "private-workspace/product-generation"
)
sys.path.insert(0, str(PIPELINE_ROOT / "scripts"))

from quality_gate import check_draft_review_ready  # noqa: E402


AUTHORIZATION_DATE = dt.date(2026, 9, 8)
EXPECTED_FILENAMES = [
    "01-cover.png",
    "02-macro-product.png",
    "03-editorial-contrast.png",
    "04-calm-context-inset.png",
    "05-vivid-lifestyle.png",
]
ORIGINAL_FILENAMES = {
    "01-cover.png": "01-cover.png",
    "02-macro-product.png": "02-macro-product.png",
    "03-editorial-contrast.png": "03-editorial-contrast.png",
    "04-calm-context-inset.png": "04-calm-context-base.png",
    "05-vivid-lifestyle.png": "05-vivid-lifestyle.png",
}
PRODUCTS = {
    "3701459058181": {
        "product_id": 10357443330395,
        "handle": "bracelet-seraphinite",
    },
    "3701459074594": {
        "product_id": 10402430452059,
        "handle": "collier-boule-06mm-jaspe-rouge-a",
    },
    "3701459074938": {
        "product_id": 10357493203291,
        "handle": "collier-pyrite-1",
    },
    "3701459037612": {
        "product_id": 10358581625179,
        "handle": "pendule-labradorite",
    },
    "3701459037650": {
        "product_id": 10357688631643,
        "handle": "pendule-oeil-de-tigre",
    },
}
STAGING_REASON = (
    "Autorisation explicite de Patrice du 2026-09-07 : une unité de staging "
    "interne sur un produit DRAFT pour contrôle manuel, sans preuve de stock "
    "physique reçu."
)


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def image_facts(path: Path) -> dict:
    with Image.open(path) as image:
        image.load()
        return {
            "path": str(path.resolve()),
            "mime": "image/png",
            "format": image.format,
            "mode": image.mode,
            "width": image.width,
            "height": image.height,
            "sha256": sha256(path),
        }


def write_json_atomic(path: Path, value: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    temporary.replace(path)


def load_status_snapshot(path: Path) -> dict[str, dict]:
    snapshot = json.loads(path.read_text(encoding="utf-8"))
    found = {
        str(item["ean"]): item["product"]
        for item in snapshot.get("products", [])
        if str(item.get("ean")) in PRODUCTS
    }
    if set(found) != set(PRODUCTS):
        raise RuntimeError("The pinned Shopify status snapshot is incomplete")
    return found


def verify_local_identity(ean: str, payload: dict, snapshot: dict) -> None:
    expected = PRODUCTS[ean]
    shopify = payload.get("shopify", {})
    source = payload.get("source", {})
    if source.get("supplier_ref") != ean:
        raise RuntimeError(f"Supplier identity mismatch for {ean}")
    if shopify.get("handle") != expected["handle"]:
        raise RuntimeError(f"Payload handle mismatch for {ean}")
    if snapshot.get("id") != f"gid://shopify/Product/{expected['product_id']}":
        raise RuntimeError(f"Snapshot product ID mismatch for {ean}")
    if snapshot.get("handle") != expected["handle"]:
        raise RuntimeError(f"Snapshot handle mismatch for {ean}")
    variant = shopify.get("variant", {})
    identities = {str(variant.get("sku") or ""), str(variant.get("barcode") or "")}
    if ean not in identities:
        raise RuntimeError(f"Final SKU/barcode identity missing for {ean}")


def finalize_payload(payload: dict) -> dict:
    updated = json.loads(json.dumps(payload, ensure_ascii=False))
    fulfillment = updated["fulfillment"]
    fulfillment["physical_inventory_quantity"] = None
    fulfillment["draft_staging_inventory_override"] = {
        "inventory_quantity": 1,
        "authorized_by": "Patrice Allié",
        "authorized_at": "2026-09-07",
        "purpose": "internal-staging-review",
        "reason": STAGING_REASON,
    }
    fulfillment["photo_usage_rights_status"] = "verified-owned"
    fulfillment["photo_usage_rights_evidence"] = (
        "Galerie générée le 2026-09-08 à partir des médias CDN Shopify sous "
        "contrôle MilAura et des faits produit vérifiés. Aucun pixel fournisseur "
        "CAN n'a été transmis ni publié comme image finale."
    )
    fulfillment["gallery_mutation_allowed"] = True

    updated["shopify"]["status"] = "DRAFT"
    updated["shopify"]["variant"]["inventory_quantity"] = 1

    qa = updated["qa"]
    qa["images_complete"] = True
    qa["gallery_fidelity_checked"] = True
    qa["gallery_fidelity_checked_by"] = "Codex native visual review"
    qa["gallery_fidelity_checked_at"] = "2026-09-08"
    qa["patrice_review_status"] = "pending"
    qa["shopify_status_draft"] = True
    return updated


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--batch-root", type=Path, required=True)
    parser.add_argument("--shopify-snapshot", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    batch_root = args.batch_root.resolve()
    snapshot_by_ean = load_status_snapshot(args.shopify_snapshot.resolve())
    prepared: list[dict] = []
    for ean, expected in PRODUCTS.items():
        product_dir = batch_root / "sol-enrichments" / ean
        blocked_path = product_dir / "product_enrichment.blocked.json"
        gallery_dir = batch_root / "gallery-production" / ean
        images_dir = gallery_dir / "images"
        originals_dir = gallery_dir / "originals-native"
        payload = json.loads(blocked_path.read_text(encoding="utf-8"))
        verify_local_identity(ean, payload, snapshot_by_ean[ean])

        actual = sorted(path.name for path in images_dir.glob("*.png"))
        if actual != EXPECTED_FILENAMES:
            raise RuntimeError(f"Five-image contract failed for {ean}: {actual}")
        final_images = [image_facts(images_dir / name) for name in EXPECTED_FILENAMES]
        for item in final_images:
            if item["format"] != "PNG" or (item["width"], item["height"]) != (1024, 1024):
                raise RuntimeError(f"Invalid final image for {ean}: {item}")

        original_images = []
        for final_name in EXPECTED_FILENAMES:
            original_path = originals_dir / ORIGINAL_FILENAMES[final_name]
            if not original_path.is_file():
                raise RuntimeError(f"Missing native original for {ean}: {original_path}")
            original_images.append(image_facts(original_path))

        reference_urls = [
            item["url"] for item in snapshot_by_ean[ean]["images"]["nodes"]
        ]
        if not reference_urls or any(
            not url.startswith("https://cdn.shopify.com/") for url in reference_urls
        ):
            raise RuntimeError(f"Untrusted visual reference URL for {ean}")

        final_payload = finalize_payload(payload)
        failures = check_draft_review_ready(
            final_payload, as_of_date=AUTHORIZATION_DATE
        )
        if failures:
            raise RuntimeError(
                f"Draft review gate failed for {ean}: "
                + json.dumps(failures, ensure_ascii=False)
            )

        manifest_images = []
        for index, name in enumerate(EXPECTED_FILENAMES):
            manifest_images.append(
                {
                    "filename": name,
                    "role": name.removesuffix(".png").split("-", 1)[-1],
                    "original_native": original_images[index],
                    "final": final_images[index],
                    "visual_review": {
                        "status": "PASS",
                        "reviewed_by": "Codex native visual review",
                        "reviewed_at": "2026-09-08",
                    },
                }
            )
        generation_manifest = {
            "ean": ean,
            "shopify_product_id": expected["product_id"],
            "handle": expected["handle"],
            "workflow_version": "4.1",
            "generation": {
                "requested_model": "codex-native-imagegen",
                "aspect_ratio": "1:1",
                "normalized_resolution": "1024x1024",
            },
            "reference_policy": {
                "only_shopify_cdn_pixels_sent": True,
                "can_pixels_sent": False,
                "shopify_cdn_urls": reference_urls,
            },
            "images": manifest_images,
        }
        prepared.append(
            {
                "ean": ean,
                "payload": final_payload,
                "payload_path": product_dir / "product_enrichment.json",
                "product_dir": product_dir,
                "source_images_dir": images_dir,
                "generation_manifest_path": gallery_dir / "generation-manifest.json",
                "generation_manifest": generation_manifest,
                "image_hashes": {item["path"]: item["sha256"] for item in final_images},
            }
        )

    if not args.apply:
        print(
            json.dumps(
                {
                    "would_apply": True,
                    "product_count": len(prepared),
                    "eans": [item["ean"] for item in prepared],
                    "draft_review_ready": True,
                },
                ensure_ascii=False,
                indent=2,
            )
        )
        return 0

    backup_dir = batch_root / "local-pre-finalize-backup"
    results = []
    for item in prepared:
        ean = item["ean"]
        backup_dir.mkdir(parents=True, exist_ok=True)
        backup_path = backup_dir / f"{ean}-product_enrichment.blocked.json"
        if not backup_path.exists():
            shutil.copy2(
                item["product_dir"] / "product_enrichment.blocked.json", backup_path
            )
        target_images = item["product_dir"] / "images"
        target_images.mkdir(parents=True, exist_ok=True)
        for name in EXPECTED_FILENAMES:
            source = item["source_images_dir"] / name
            target = target_images / name
            if target.exists() and sha256(target) != sha256(source):
                raise RuntimeError(f"Refusing different existing final image: {target}")
            if not target.exists():
                shutil.copy2(source, target)
        write_json_atomic(item["payload_path"], item["payload"])
        write_json_atomic(
            item["generation_manifest_path"], item["generation_manifest"]
        )
        results.append(
            {
                "ean": ean,
                "product_id": PRODUCTS[ean]["product_id"],
                "payload": str(item["payload_path"]),
                "generation_manifest": str(item["generation_manifest_path"]),
                "draft_review_ready": True,
            }
        )

    report_path = batch_root / "local-draft-review-ready.json"
    write_json_atomic(
        report_path,
        {
            "completed_at": dt.datetime.now(dt.UTC).isoformat(),
            "product_count": len(results),
            "technical_status": "PASS",
            "products": results,
        },
    )
    print(
        json.dumps(
            {
                "applied": True,
                "product_count": len(results),
                "technical_status": "PASS",
                "report_path": str(report_path),
            },
            ensure_ascii=False,
            indent=2,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
