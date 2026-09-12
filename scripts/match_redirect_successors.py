#!/usr/bin/env python3
"""Find exact active product candidates for redirects whose targets are offline."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


def variant_values(product: dict, field: str) -> set[str]:
    variants = product.get("variants") or {}
    edges = variants.get("edges") if isinstance(variants, dict) else []
    return {
        str(edge.get("node", {}).get(field) or "").strip()
        for edge in (edges or [])
        if str(edge.get("node", {}).get(field) or "").strip()
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--products", type=Path, required=True)
    parser.add_argument("--redirect-audit", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    products = json.loads(args.products.read_text(encoding="utf-8"))["products"]
    redirect_checks = json.loads(
        args.redirect_audit.read_text(encoding="utf-8")
    )["checks"]
    by_handle = {product["handle"]: product for product in products}
    active = [product for product in products if product.get("status") == "ACTIVE"]

    results = []
    for check in redirect_checks:
        target = check.get("target", "")
        if check.get("target_status") != 404 or not target.startswith("/products/"):
            continue
        handle = target.removeprefix("/products/").split("?", 1)[0]
        product = by_handle.get(handle)
        if not product:
            results.append(
                {
                    "path": check["path"],
                    "target": target,
                    "target_product": None,
                    "exact_active_candidates": [],
                }
            )
            continue
        barcodes = variant_values(product, "barcode")
        skus = variant_values(product, "sku")
        candidates = []
        for candidate in active:
            if candidate["handle"] == handle:
                continue
            common_barcodes = sorted(barcodes & variant_values(candidate, "barcode"))
            common_skus = sorted(skus & variant_values(candidate, "sku"))
            if common_barcodes or common_skus:
                candidates.append(
                    {
                        "handle": candidate["handle"],
                        "title": candidate["title"],
                        "common_barcodes": common_barcodes,
                        "common_skus": common_skus,
                    }
                )
        results.append(
            {
                "path": check["path"],
                "target": target,
                "target_product": {
                    "id": product["id"],
                    "handle": product["handle"],
                    "title": product["title"],
                    "status": product["status"],
                    "barcodes": sorted(barcodes),
                    "skus": sorted(skus),
                },
                "exact_active_candidates": candidates,
            }
        )

    payload = {
        "redirect_targets_checked": len(results),
        "targets_with_exact_active_candidate": sum(
            bool(item["exact_active_candidates"]) for item in results
        ),
        "results": results,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps({key: payload[key] for key in payload if key != "results"}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
