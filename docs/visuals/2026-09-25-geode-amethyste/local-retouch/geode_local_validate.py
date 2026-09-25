#!/usr/bin/env python3

import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image


def sha256(path):
    digest = hashlib.sha256()
    with open(path, "rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-root", required=True)
    parser.add_argument("--output-root", required=True)
    parser.add_argument("--manifest", required=True)
    parser.add_argument("--script", required=True)
    parser.add_argument("--model", required=True)
    args = parser.parse_args()

    source_root = Path(args.source_root)
    output_root = Path(args.output_root)
    records = []

    for source_path in sorted(source_root.glob("*.png")):
        stem = source_path.stem
        cutout_path = output_root / "cutouts-png" / f"{stem}-cutout.png"
        mask_path = output_root / "masks" / f"{stem}-mask.png"
        studio_path = output_root / "studio-png" / f"{stem}-studio.png"
        shopify_path = output_root / "shopify-upload-jpg" / f"{stem}-studio.jpg"

        required = (cutout_path, mask_path, studio_path, shopify_path)
        if not all(path.exists() for path in required):
            raise SystemExit(f"Missing output for {stem}")

        source = Image.open(source_path).convert("RGB")
        cutout = Image.open(cutout_path).convert("RGBA")
        mask = Image.open(mask_path).convert("L")
        studio = Image.open(studio_path).convert("RGB")
        shopify = Image.open(shopify_path).convert("RGB")

        if source.size != (2048, 2048):
            raise SystemExit(f"Invalid source size for {stem}: {source.size}")
        if cutout.size != source.size or mask.size != source.size:
            raise SystemExit(f"Invalid cutout or mask size for {stem}")
        if studio.size != source.size or shopify.size != source.size:
            raise SystemExit(f"Invalid studio size for {stem}")
        if source.tobytes() != cutout.convert("RGB").tobytes():
            raise SystemExit(f"Cutout RGB drift for {stem}")

        full_bleed_detail = stem.startswith("04-") or stem.startswith("07-")
        records.append(
            {
                "slot_file": stem,
                "source": str(source_path),
                "source_sha256": sha256(source_path),
                "full_bleed_detail": full_bleed_detail,
                "cutout": str(cutout_path.relative_to(output_root)),
                "cutout_sha256": sha256(cutout_path),
                "cutout_rgb_exactly_preserved": True,
                "mask": str(mask_path.relative_to(output_root)),
                "mask_sha256": sha256(mask_path),
                "mask_bbox": list(mask.getbbox()) if mask.getbbox() else None,
                "studio_png": str(studio_path.relative_to(output_root)),
                "studio_png_sha256": sha256(studio_path),
                "shopify_jpg": str(shopify_path.relative_to(output_root)),
                "shopify_jpg_sha256": sha256(shopify_path),
                "dimensions": [2048, 2048],
            }
        )

    if len(records) != 9:
        raise SystemExit(f"Expected 9 records, got {len(records)}")

    manifest = {
        "manifest_version": "1.0.0",
        "date": "2026-09-25",
        "product_reference": "GC0256",
        "status": "LOCAL_TECHNICAL_PASS_PATRICE_VISUAL_GO_REQUIRED",
        "method": "local_non_generative_segmentation_and_bounded_color_correction",
        "network_used": False,
        "generative_editing_used": False,
        "supplier_images_used": False,
        "product_truth": {
            "cutout_rgb_pixels_exactly_preserved": True,
            "geometry_reconstructed": False,
            "crystals_added_or_removed": False,
            "labels_removed": False,
        },
        "processing": {
            "background": "vertical nacre gradient from #FFFDF9 to #F4EEE6",
            "brightness": 1.07,
            "contrast": 1.08,
            "color": 1.03,
            "sharpness": 1.18,
            "full_view_long_axis_target": "84 percent when initial subject occupancy is below 82 percent",
            "full_bleed_details": ["H04", "E01"],
            "script_sha256": sha256(args.script),
            "segmentation_model_sha256": sha256(args.model),
        },
        "known_limits": [
            "Supplier labels remain visible on the relevant front views.",
            "H04 and E01 are full-bleed details and are not silhouette cutouts.",
            "Patrice visual GO is still required before Shopify integration.",
        ],
        "media": records,
    }

    manifest_path = Path(args.manifest)
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("GEODE_LOCAL_RETOUCH_VALIDATION_PASS")
    print(manifest_path)


if __name__ == "__main__":
    main()
