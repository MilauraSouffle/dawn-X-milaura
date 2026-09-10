#!/usr/bin/env python3
"""Verify every Shopify redirect source, target and final public response."""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import json
from pathlib import Path

from audit_live_seo import RateLimiter, fetch, normalize_public_url


def load_redirects(path: Path) -> list[dict[str, str]]:
    with path.open(encoding="utf-8-sig", newline="") as handle:
        reader = csv.DictReader(handle)
        rows = [
            {
                "path": (row.get("Redirect from") or row.get("path") or "").strip(),
                "target": (row.get("Redirect to") or row.get("target") or "").strip(),
            }
            for row in reader
        ]
    return [row for row in rows if row["path"] and row["target"]]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--redirects-csv", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--request-interval", type=float, default=0.3)
    args = parser.parse_args()

    redirects = load_redirects(args.redirects_csv)
    limiter = RateLimiter(args.request_interval)
    checks: list[dict] = []
    for redirect in redirects:
        source_url = normalize_public_url(redirect["path"])
        target_url = normalize_public_url(redirect["target"])
        if source_url is None or target_url is None:
            checks.append(
                {
                    **redirect,
                    "source_url": source_url,
                    "target_url": target_url,
                    "status": 0,
                    "final_url": "",
                    "redirect_chain": [],
                    "target_status": 0,
                    "issues": ["INVALID_INTERNAL_URL"],
                }
            )
            continue
        source = fetch(source_url, limiter)
        target = fetch(target_url, limiter)
        final_url = normalize_public_url(source["final_url"], source_url)
        issues: list[str] = []
        if not source["redirect_chain"]:
            issues.append("SOURCE_NOT_REDIRECTED")
        elif source["redirect_chain"][0]["status"] not in {301, 308}:
            issues.append("SOURCE_NOT_PERMANENT_REDIRECT")
        if len(source["redirect_chain"]) > 1:
            issues.append("REDIRECT_CHAIN")
        if source["status"] != 200:
            issues.append(f"FINAL_HTTP_{source['status']}")
        if target["status"] != 200:
            issues.append(f"TARGET_HTTP_{target['status']}")
        if final_url != target_url:
            issues.append("FINAL_URL_DIFFERS_FROM_TARGET")
        checks.append(
            {
                **redirect,
                "source_url": source_url,
                "target_url": target_url,
                "status": source["status"],
                "final_url": source["final_url"],
                "redirect_chain": source["redirect_chain"],
                "target_status": target["status"],
                "issues": issues,
            }
        )

    issue_checks = [item for item in checks if item["issues"]]
    payload = {
        "audited_at": dt.datetime.now(dt.UTC).isoformat(),
        "summary": {
            "redirects": len(checks),
            "passing": len(checks) - len(issue_checks),
            "failing": len(issue_checks),
        },
        "checks": checks,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"written": str(args.output), **payload["summary"]}, ensure_ascii=False))
    return 2 if issue_checks else 0


if __name__ == "__main__":
    raise SystemExit(main())
