#!/usr/bin/env python3
"""Rebuild the MilAura catalogue completeness matrices from verified snapshots.

The script deliberately separates three sources:

- the last complete read-only Admin snapshot for statuses and metafields;
- a fresh public products export for current tags;
- fresh public collection exports for current storefront memberships.

Known Admin edits that are not exposed by the storefront are passed explicitly
with ``--stone-handle-append`` so the reconstruction remains auditable.
"""

from __future__ import annotations

import argparse
import csv
import json
from collections import defaultdict
from pathlib import Path


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def read_json_if_valid(path: Path):
    try:
        return read_json(path)
    except (json.JSONDecodeError, OSError):
        return None


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8") as handle:
        return list(csv.DictReader(handle))


def write_csv(path: Path, fieldnames: list[str], rows: list[dict[str, object]]) -> None:
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=fieldnames,
            extrasaction="ignore",
            lineterminator="\n",
        )
        writer.writeheader()
        writer.writerows(rows)


def metafield(product: dict, key: str):
    for node in product.get("metafields", {}).get("nodes", []):
        if node.get("namespace") == "milaura" and node.get("key") == key:
            value = node.get("value")
            if node.get("type", "").startswith("list."):
                try:
                    return json.loads(value or "[]")
                except json.JSONDecodeError:
                    return []
            return value
    return [] if key.endswith("_handles") else ""


def set_list_metafield(product: dict, key: str, values: list[str]) -> None:
    nodes = product.setdefault("metafields", {}).setdefault("nodes", [])
    for node in nodes:
        if node.get("namespace") == "milaura" and node.get("key") == key:
            node["type"] = "list.single_line_text_field"
            node["value"] = json.dumps(values, ensure_ascii=False, separators=(",", ":"))
            return
    nodes.append(
        {
            "namespace": "milaura",
            "key": key,
            "type": "list.single_line_text_field",
            "value": json.dumps(values, ensure_ascii=False, separators=(",", ":")),
        }
    )


def parse_theme_json(path: Path) -> dict:
    raw = path.read_text(encoding="utf-8")
    start = raw.find("{")
    if start < 0:
        raise ValueError(f"No JSON object in {path}")
    return json.loads(raw[start:])


def pipe(values: list[str] | set[str]) -> str:
    return "|".join(sorted(values))


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--admin-snapshot", type=Path, required=True)
    parser.add_argument("--public-products", type=Path, required=True)
    parser.add_argument("--collection-dir", type=Path, required=True)
    parser.add_argument("--collection-membership-overrides", type=Path)
    parser.add_argument("--audit-dir", type=Path, required=True)
    parser.add_argument("--baseline-gap-csv", type=Path)
    parser.add_argument("--guide-template", type=Path, required=True)
    parser.add_argument(
        "--stone-handle-append",
        action="append",
        default=[],
        metavar="PRODUCT_HANDLE=STONE_HANDLE",
    )
    parser.add_argument("--verification-output", type=Path)
    args = parser.parse_args()

    admin = read_json(args.admin_snapshot)
    products = admin["products"]
    by_handle = {product["handle"]: product for product in products}
    public_products = {
        product["handle"]: product
        for product in read_json(args.public_products).get("products", [])
    }

    for handle, public_product in public_products.items():
        if handle in by_handle:
            by_handle[handle]["tags"] = list(public_product.get("tags", []))

    explicit_metafield_edits: list[dict[str, str]] = []
    for item in args.stone_handle_append:
        product_handle, separator, stone_handle = item.partition("=")
        if not separator or product_handle not in by_handle:
            raise ValueError(f"Invalid --stone-handle-append value: {item}")
        current = list(metafield(by_handle[product_handle], "stone_handles"))
        if stone_handle not in current:
            current.append(stone_handle)
        set_list_metafield(by_handle[product_handle], "stone_handles", current)
        explicit_metafield_edits.append(
            {"product": product_handle, "stone_handle_added": stone_handle}
        )

    public_collection_rows = read_csv(args.audit_dir / "public-collections.csv")
    old_public_by_handle = {row["handle"]: row for row in public_collection_rows}
    membership_overrides: dict[str, list[str]] = {}
    if args.collection_membership_overrides:
        membership_overrides = read_json(args.collection_membership_overrides).get(
            "collections", {}
        )
    collection_products: dict[str, list[dict]] = {}
    product_collections: dict[str, set[str]] = defaultdict(set)
    collection_fallbacks: list[str] = []
    for handle in old_public_by_handle:
        payload = read_json_if_valid(args.collection_dir / f"{handle}.json")
        if payload is None:
            if handle in membership_overrides:
                old_handles = set(membership_overrides[handle])
            else:
                collection_fallbacks.append(handle)
                old_handles = set(
                    filter(
                        None,
                        old_public_by_handle[handle]["public_product_handles"].split("|"),
                    )
                )
            collection_products[handle] = [
                public_products[product_handle]
                for product_handle in old_handles
                if product_handle in public_products
            ]
        else:
            collection_products[handle] = payload.get("products", [])
        for product in collection_products[handle]:
            product_collections[product["handle"]].add(handle)

    baseline_product_collections = {
        product["handle"]: {
            node["handle"] for node in product.get("collections", {}).get("nodes", [])
        }
        for product in products
    }
    admin_collections = {collection["handle"]: collection for collection in admin["collections"]}

    rebuilt_public_rows: list[dict[str, object]] = []
    for old in public_collection_rows:
        handle = old["handle"]
        current_handles = [product["handle"] for product in collection_products[handle]]
        additions = sum(
            1
            for product_handle in current_handles
            if handle not in baseline_product_collections.get(product_handle, set())
        )
        if handle in admin_collections:
            baseline_total = admin_collections[handle]["productsCount"]["count"]
        else:
            baseline_total = int(old["shopify_reported_products_all_statuses"] or 0)
        rebuilt_public_rows.append(
            {
                "handle": handle,
                "title": old["title"],
                "url": old["url"],
                "public_visible_products": len(current_handles),
                "shopify_reported_products_all_statuses": baseline_total + additions,
                "empty_public": "YES" if not current_handles else "NO",
                "public_product_handles": pipe(current_handles),
            }
        )
    write_csv(
        args.audit_dir / "public-collections.csv",
        list(rebuilt_public_rows[0]),
        rebuilt_public_rows,
    )

    guide = parse_theme_json(args.guide_template)
    guide_rows: list[dict[str, str]] = []
    guide_links: set[str] = set()
    for section in guide.get("sections", {}).values():
        for block_id, block in section.get("blocks", {}).items():
            if block.get("type") != "entry":
                continue
            settings = block.get("settings", {})
            link = settings.get("link", "")
            guide_rows.append(
                {
                    "id": block_id,
                    "letter": settings.get("letter", ""),
                    "title": settings.get("title", ""),
                    "link": link,
                }
            )
            if link.startswith("shopify://collections/"):
                guide_links.add(link.rsplit("/", 1)[-1])
    write_csv(
        args.audit_dir / "guide-a-z-entries.csv",
        ["id", "letter", "title", "link"],
        guide_rows,
    )

    old_stone_rows = read_csv(args.audit_dir / "stone-landing-matrix.csv")
    active_products = [product for product in products if product.get("status") == "ACTIVE"]
    active_by_handle = {product["handle"]: product for product in active_products}
    active_jewelry = {
        product["handle"]: product
        for product in active_products
        if metafield(product, "catalogue_family") == "bijou"
    }
    rebuilt_stone_rows: list[dict[str, object]] = []
    for old in old_stone_rows:
        collection_handle = old["collection"]
        stone_handle = collection_handle.removeprefix("par-pierre-")
        expected = {
            handle
            for handle, product in active_jewelry.items()
            if stone_handle in metafield(product, "stone_handles")
        }
        actual = {
            product["handle"] for product in collection_products.get(collection_handle, [])
        }
        missing = sorted(expected - actual)
        unexpected = sorted(
            handle for handle in actual if handle in active_by_handle and handle not in expected
        )
        public_count = len(actual)
        configured_raw = old["configured_piece_count_internal"]
        try:
            configured_count = int(configured_raw)
        except (TypeError, ValueError):
            configured_count = None
        rebuilt_stone_rows.append(
            {
                "collection": collection_handle,
                "title": old["title"],
                "url": old["url"],
                "expected_active_bijoux": len(expected),
                "public_visible_products": public_count,
                "missing_active_bijoux": len(missing),
                "missing_product_titles": pipe(
                    [active_by_handle[handle]["title"] for handle in missing]
                ),
                "missing_product_handles": pipe(missing),
                "unexpected_or_non_bijou_active": len(unexpected),
                "unexpected_product_titles": pipe(
                    [active_by_handle[handle]["title"] for handle in unexpected]
                ),
                "unexpected_product_handles": pipe(unexpected),
                "hub_card_present": old["hub_card_present"],
                "guide_a_z_linked": "YES" if collection_handle in guide_links else "NO",
                "configured_piece_count_internal": configured_raw,
                "configured_count_matches_public": (
                    "YES" if configured_count == public_count else "NO"
                ),
            }
        )
    write_csv(
        args.audit_dir / "stone-landing-matrix.csv",
        list(rebuilt_stone_rows[0]),
        rebuilt_stone_rows,
    )

    old_gap_rows = read_csv(
        args.baseline_gap_csv
        if args.baseline_gap_csv
        else args.audit_dir / "active-product-category-gaps.csv"
    )
    remaining_gap_rows = [
        row
        for row in old_gap_rows
        if row["expected_collection"]
        not in product_collections.get(row["handle"], set())
    ]
    write_csv(
        args.audit_dir / "active-product-category-gaps.csv",
        list(old_gap_rows[0]),
        remaining_gap_rows,
    )

    tag_gap_rows: list[dict[str, str]] = []
    for product in active_products:
        stones = list(metafield(product, "stone_handles"))
        tags = set(product.get("tags", []))
        missing_tags = [f"pierre:{stone}" for stone in stones if f"pierre:{stone}" not in tags]
        if missing_tags:
            tag_gap_rows.append(
                {
                    "status": product["status"],
                    "title": product["title"],
                    "handle": product["handle"],
                    "stone_handles": pipe(stones),
                    "missing_pierre_tags": pipe(missing_tags),
                    "product_url": product.get("onlineStoreUrl", ""),
                }
            )
    write_csv(
        args.audit_dir / "stone-metafield-tag-gaps.csv",
        [
            "status",
            "title",
            "handle",
            "stone_handles",
            "missing_pierre_tags",
            "product_url",
        ],
        tag_gap_rows,
    )

    new_product_rows = read_csv(args.audit_dir / "new-products.csv")
    rebuilt_new_rows: list[dict[str, object]] = []
    for old in new_product_rows:
        handle = old["handle"]
        product = by_handle[handle]
        actual = product_collections.get(handle, set())
        expected_type = old["expected_type_collection"]
        expected_stone = set(filter(None, old["expected_stone_collections"].split("|")))
        expected_commercial = set(
            filter(None, old["expected_commercial_collections"].split("|"))
        )
        rebuilt_new_rows.append(
            {
                **old,
                "status": product["status"],
                "online_store_url": product.get("onlineStoreUrl", ""),
                "inventory": product.get("totalInventory", 0),
                "stone_handles": pipe(metafield(product, "stone_handles")),
                "actual_collections": pipe(actual),
                "type_collection_ok": str(expected_type in actual),
                "missing_stone_collections": pipe(expected_stone - actual),
                "missing_commercial_collections": pipe(expected_commercial - actual),
            }
        )
    write_csv(
        args.audit_dir / "new-products.csv",
        list(new_product_rows[0]),
        rebuilt_new_rows,
    )

    if args.verification_output:
        verification = {
            "admin_snapshot": str(args.admin_snapshot),
            "public_products": str(args.public_products),
            "public_active_products": len(public_products),
            "public_collections": len(collection_products),
            "explicit_metafield_edits": explicit_metafield_edits,
            "collection_fallbacks": collection_fallbacks,
            "remaining_category_gaps": len(remaining_gap_rows),
            "resolved_previous_category_gaps": len(old_gap_rows)
            - len(remaining_gap_rows),
            "remaining_tag_gaps": len(tag_gap_rows),
            "stone_landings_with_missing_products": sum(
                1 for row in rebuilt_stone_rows if row["missing_active_bijoux"]
            ),
            "guide_entries": len(guide_rows),
            "guide_collection_links": len(guide_links),
        }
        args.verification_output.write_text(
            json.dumps(verification, ensure_ascii=False, indent=2) + "\n",
            encoding="utf-8",
        )

    print(
        json.dumps(
            {
                "public_active_products": len(public_products),
                "public_collections": len(collection_products),
                "collection_fallbacks": collection_fallbacks,
                "remaining_category_gaps": len(remaining_gap_rows),
                "resolved_previous_category_gaps": len(old_gap_rows)
                - len(remaining_gap_rows),
                "remaining_tag_gaps": len(tag_gap_rows),
                "guide_entries": len(guide_rows),
                "guide_collection_links": len(guide_links),
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
