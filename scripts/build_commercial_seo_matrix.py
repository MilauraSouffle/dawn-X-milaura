#!/usr/bin/env python3
"""Build a gated type-by-stone SEO matrix from a Shopify product snapshot.

The script is read-only. It selects active, in-stock products, detects collisions
with existing public collection routes and emits a reviewable JSON or CSV plan.
It never creates Shopify collections.
"""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import json
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse


TYPE_LABELS = {
    "accessoire": ("accessoires", "Accessoires"),
    "bague": ("bagues", "Bagues"),
    "boucles-oreilles": ("boucles-oreilles", "Boucles d'oreilles"),
    "bracelet": ("bracelets", "Bracelets"),
    "collier": ("colliers", "Colliers"),
    "pendentif": ("pendentifs", "Pendentifs"),
    "pendule": ("pendules", "Pendules"),
}

STONE_LABELS = {
    "agate": "agate",
    "aigue-marine": "aigue-marine",
    "amethyste": "améthyste",
    "aventurine-verte": "aventurine verte",
    "cornaline": "cornaline",
    "cristal-de-roche": "cristal de roche",
    "hematite": "hématite",
    "howlite": "howlite",
    "labradorite": "labradorite",
    "lapis-lazuli": "lapis-lazuli",
    "obsidienne-noire": "obsidienne noire",
    "oeil-de-taureau": "œil de taureau",
    "oeil-de-tigre": "œil de tigre",
    "onyx": "onyx",
    "quartz-rose": "quartz rose",
    "sodalite": "sodalite",
}


def metafields(product: dict) -> dict[str, str]:
    connection = product.get("metafields") or {}
    edges = connection.get("edges") if isinstance(connection, dict) else []
    return {
        edge["node"]["key"]: edge["node"].get("value", "")
        for edge in (edges or [])
        if edge.get("node", {}).get("key")
    }


def inventory(product: dict) -> int:
    variants = product.get("variants") or {}
    edges = variants.get("edges") if isinstance(variants, dict) else []
    return sum(
        int(edge.get("node", {}).get("inventoryQuantity") or 0)
        for edge in (edges or [])
    )


def public_collection_paths(audit: dict | None) -> set[str]:
    if not audit:
        return set()
    paths: set[str] = set()
    for page in audit.get("pages", []):
        requested = page.get("requested_url", "")
        path = urlparse(requested).path.rstrip("/")
        if path.startswith("/collections/") and page.get("status") == 200:
            paths.add(path)
    return paths


def tier(count: int) -> str:
    if count >= 5:
        return "A_LAUNCH"
    if count >= 3:
        return "B_REVIEW"
    if count == 2:
        return "C_WATCH"
    return "D_REJECT"


def product_stones(product: dict, fields: dict[str, str]) -> set[str]:
    """Return every canonical stone exposed by the catalogue tag contract."""
    tagged = {
        tag.removeprefix("pierre:").strip()
        for tag in product.get("tags", [])
        if tag.startswith("pierre:") and tag.removeprefix("pierre:").strip()
    }
    if tagged:
        return tagged
    primary = fields.get("stone_handle", "").strip()
    return {primary} if primary else set()


def build(snapshot: dict, audit: dict | None) -> dict:
    groups: dict[tuple[str, str], list[dict]] = defaultdict(list)
    for product in snapshot.get("products", []):
        if product.get("status") != "ACTIVE" or inventory(product) <= 0:
            continue
        fields = metafields(product)
        product_type = fields.get("product_type_handle", "").strip()
        stones = product_stones(product, fields)
        if product_type not in TYPE_LABELS or not stones:
            continue
        for stone in stones:
            groups[(product_type, stone)].append(product)

    live_paths = public_collection_paths(audit)
    cells = []
    for (product_type, stone), products in groups.items():
        plural_handle, type_label = TYPE_LABELS[product_type]
        stone_label = STONE_LABELS.get(stone, stone.replace("-", " "))
        handle = f"{plural_handle}-{stone}"
        path = f"/collections/{handle}"
        cells.append(
            {
                "tier": tier(len(products)),
                "product_type": product_type,
                "stone": stone,
                "product_count": len(products),
                "inventory_total": sum(inventory(product) for product in products),
                "suggested_handle": handle,
                "suggested_path": path,
                "suggested_h1": f"{type_label} en {stone_label}",
                "route_already_live": path in live_paths,
                "product_handles": sorted(product["handle"] for product in products),
            }
        )

    order = {"A_LAUNCH": 0, "B_REVIEW": 1, "C_WATCH": 2, "D_REJECT": 3}
    cells.sort(
        key=lambda cell: (
            order[cell["tier"]],
            -cell["product_count"],
            -cell["inventory_total"],
            cell["suggested_handle"],
        )
    )
    return {
        "generated_at": dt.datetime.now(dt.UTC).isoformat(),
        "contract": {
            "included": "Shopify status ACTIVE, summed inventory above zero, canonical type and pierre tags",
            "A_LAUNCH": "at least 5 products; still requires intent, content and cannibalisation review",
            "B_REVIEW": "3 or 4 products; publish only with unusually strong demand and differentiation",
            "C_WATCH": "2 products; do not publish without explicit strategic evidence",
            "D_REJECT": "fewer than 2 products; reject as a collection landing",
        },
        "counts": {
            label: sum(cell["tier"] == label for cell in cells)
            for label in order
        },
        "cells": cells,
    }


def write_csv(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fields = [
        "tier",
        "product_type",
        "stone",
        "product_count",
        "inventory_total",
        "suggested_handle",
        "suggested_path",
        "suggested_h1",
        "route_already_live",
        "product_handles",
    ]
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        for cell in payload["cells"]:
            row = dict(cell)
            row["product_handles"] = "|".join(row["product_handles"])
            writer.writerow(row)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--snapshot", type=Path, required=True)
    parser.add_argument("--live-audit", type=Path)
    parser.add_argument("--json-output", type=Path, required=True)
    parser.add_argument("--csv-output", type=Path, required=True)
    args = parser.parse_args()

    snapshot = json.loads(args.snapshot.read_text(encoding="utf-8"))
    audit = (
        json.loads(args.live_audit.read_text(encoding="utf-8"))
        if args.live_audit
        else None
    )
    payload = build(snapshot, audit)
    args.json_output.parent.mkdir(parents=True, exist_ok=True)
    args.json_output.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    write_csv(args.csv_output, payload)
    print(
        json.dumps(
            {
                "json": str(args.json_output),
                "csv": str(args.csv_output),
                "counts": payload["counts"],
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
