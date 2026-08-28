#!/usr/bin/env python3
"""Verifie un rapport Ruban V3 contre une baseline catalogue datee."""

from __future__ import annotations

import argparse
from pathlib import Path

from ruban_v3_engine import load_json


def _parse_args() -> argparse.Namespace:
  parser = argparse.ArgumentParser(description=__doc__)
  parser.add_argument("--report", required=True, type=Path)
  parser.add_argument("--catalogue", required=True, type=Path)
  parser.add_argument("--baseline", required=True, type=Path)
  return parser.parse_args()


def main() -> int:
  args = _parse_args()
  report = load_json(args.report)
  catalogue = load_json(args.catalogue)
  baseline = load_json(args.baseline)
  failures: list[str] = []

  for key in ("score_version", "products_count", "target_eligible_count", "status_counts"):
    if report.get(key) != baseline.get(key):
      failures.append(f"{key}: attendu {baseline.get(key)!r}, obtenu {report.get(key)!r}")

  unresolved = sum(
    1 for product in catalogue["products"] if product["normalized_type"] == "inconnu"
  )
  if unresolved != baseline["unresolved_type_count"]:
    failures.append(
      f"unresolved_type_count: attendu {baseline['unresolved_type_count']}, obtenu {unresolved}"
    )

  status_by_source = {
    mapping["source_product_id"]: mapping["status"] for mapping in report["mappings"]
  }
  for product_id, expected_status in baseline["new_honest_matches_after_normalization"].items():
    if status_by_source.get(product_id) != expected_status:
      failures.append(
        f"source {product_id}: attendu {expected_status}, obtenu {status_by_source.get(product_id)}"
      )

  if failures:
    raise SystemExit("Echec regression Ruban V3:\n- " + "\n- ".join(failures))

  print(
    "PASS regression Ruban V3 "
    f"{baseline['snapshot_date']}: {report['products_count']} produits, "
    f"{report['target_eligible_count']} cibles eligibles, "
    f"hash {report['content_hash']}"
  )
  return 0


if __name__ == "__main__":
  raise SystemExit(main())
