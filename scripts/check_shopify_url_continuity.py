#!/usr/bin/env python3
"""Compare Shopify product snapshots and enforce public URL continuity."""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import json
from pathlib import Path


def numeric_id(value: object) -> str:
    return str(value).rsplit("/", 1)[-1]


def normalize_product(product: dict) -> dict:
    variants = product.get("variants", [])
    if isinstance(variants, dict):
        variants = [edge.get("node", edge) for edge in variants.get("edges", variants.get("nodes", []))]
    return {
        "id": numeric_id(product["id"]),
        "title": product.get("title", ""),
        "handle": product.get("handle", ""),
        "status": str(product.get("status", "")).upper(),
        "updated_at": product.get("updatedAt") or product.get("updated_at"),
        "online_store_url": product.get("onlineStoreUrl"),
        "variant_ids": [numeric_id(item["id"]) for item in variants if item.get("id")],
    }


def load_products(path: Path) -> dict[str, dict]:
    payload = json.loads(path.read_text(encoding="utf-8"))
    products = [normalize_product(item) for item in payload["products"]]
    by_id = {item["id"]: item for item in products}
    if len(by_id) != len(products):
        raise RuntimeError(f"Duplicate product IDs in {path}")
    return by_id


def load_redirects(path: Path) -> dict[str, str]:
    with path.open(encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        redirects = {
            (row.get("Redirect from") or row.get("path") or "").strip():
            (row.get("Redirect to") or row.get("target") or "").strip()
            for row in reader
        }
    redirects.pop("", None)
    return redirects


def issue_row(kind: str, before: dict, after: dict | None, redirect: str | None) -> dict:
    return {
        "kind": kind,
        "product_id": before["id"],
        "old_status": before["status"],
        "new_status": after["status"] if after else "MISSING",
        "old_handle": before["handle"],
        "new_handle": after["handle"] if after else "",
        "redirect_from": f"/products/{before['handle']}",
        "redirect_to": redirect or "",
        "old_title": before["title"],
        "new_title": after["title"] if after else "",
    }


def write_csv(path: Path, rows: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fields = [
        "kind",
        "product_id",
        "old_status",
        "new_status",
        "old_handle",
        "new_handle",
        "redirect_from",
        "redirect_to",
        "old_title",
        "new_title",
    ]
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--before", type=Path, required=True)
    parser.add_argument("--after", type=Path, required=True)
    parser.add_argument("--redirects-csv", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--csv-output", type=Path, required=True)
    parser.add_argument("--fail-on-uncovered", action="store_true")
    args = parser.parse_args()

    before = load_products(args.before)
    after = load_products(args.after)
    redirects = load_redirects(args.redirects_csv)
    rows: list[dict] = []
    handle_changes: list[dict] = []
    visibility_losses: list[dict] = []

    for product_id, old in sorted(before.items()):
        new = after.get(product_id)
        source = f"/products/{old['handle']}"
        redirect = redirects.get(source)
        if new is None:
            if old["status"] == "ACTIVE":
                rows.append(issue_row("ACTIVE_PRODUCT_MISSING", old, None, redirect))
            continue
        if old["handle"] != new["handle"]:
            item = issue_row(
                "HANDLE_CHANGED_COVERED" if redirect else "HANDLE_CHANGED_UNCOVERED",
                old,
                new,
                redirect,
            )
            handle_changes.append(item)
            rows.append(item)
        if old["status"] == "ACTIVE" and new["status"] != "ACTIVE":
            item = issue_row(
                "VISIBILITY_LOSS_COVERED" if redirect else "VISIBILITY_LOSS_UNCOVERED",
                old,
                new,
                redirect,
            )
            visibility_losses.append(item)
            rows.append(item)

    active_handles = [item["handle"] for item in after.values() if item["status"] == "ACTIVE"]
    duplicate_active_handles = sorted(
        {handle for handle in active_handles if active_handles.count(handle) > 1}
    )
    uncovered = [item for item in rows if item["kind"].endswith("UNCOVERED") or item["kind"] == "ACTIVE_PRODUCT_MISSING"]
    payload = {
        "audited_at": dt.datetime.now(dt.UTC).isoformat(),
        "inputs": {
            "before": str(args.before),
            "after": str(args.after),
            "redirects_csv": str(args.redirects_csv),
        },
        "summary": {
            "before_products": len(before),
            "after_products": len(after),
            "shared_product_ids": len(set(before) & set(after)),
            "new_product_ids": len(set(after) - set(before)),
            "missing_product_ids": len(set(before) - set(after)),
            "redirects": len(redirects),
            "handle_changes": len(handle_changes),
            "visibility_losses": len(visibility_losses),
            "uncovered_events": len(uncovered),
            "duplicate_active_handles": len(duplicate_active_handles),
        },
        "duplicate_active_handles": duplicate_active_handles,
        "events": rows,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_csv(args.csv_output, rows)
    print(json.dumps({"written": str(args.output), **payload["summary"]}, ensure_ascii=False))
    return 2 if args.fail_on_uncovered and uncovered else 0


if __name__ == "__main__":
    raise SystemExit(main())
