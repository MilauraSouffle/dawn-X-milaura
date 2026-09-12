#!/usr/bin/env python3
"""Crawl public sitemap URLs and report deterministic SEO defects.

The crawler is read-only, uses only the Python standard library and keeps the
request rate deliberately low for Shopify.
"""

from __future__ import annotations

import argparse
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor, as_completed
import csv
import datetime as dt
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import threading
import time
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlsplit, urlunsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener
import xml.etree.ElementTree as ET


USER_AGENT = "MilAuraSEOAudit/1.0 (+https://milaura.fr)"
SKIP_PREFIXES = (
    "/account",
    "/cart",
    "/carts",
    "/checkout",
    "/challenge",
    "/search",
    "/apps",
    "/recommendations",
)
SKIP_SUFFIXES = (
    ".avif",
    ".css",
    ".gif",
    ".ico",
    ".jpeg",
    ".jpg",
    ".js",
    ".json",
    ".pdf",
    ".png",
    ".svg",
    ".webp",
    ".xml",
)


class RedirectRecorder(HTTPRedirectHandler):
    def __init__(self) -> None:
        super().__init__()
        self.chain: list[dict] = []

    def redirect_request(self, req, fp, code, msg, headers, newurl):  # noqa: ANN001
        self.chain.append({"status": code, "from": req.full_url, "to": newurl})
        return super().redirect_request(req, fp, code, msg, headers, newurl)


class SeoHtmlParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.title_parts: list[str] = []
        self.h1_parts: list[list[str]] = []
        self.current_h1: list[str] | None = None
        self.meta: list[dict[str, str]] = []
        self.links: list[dict[str, str]] = []
        self.hrefs: list[str] = []
        self.images = 0
        self.images_missing_alt = 0
        self.text_parts: list[str] = []
        self.json_ld_parts: list[list[str]] = []
        self.current_json_ld: list[str] | None = None
        self.hidden_depth = 0
        self.in_title = False
        self.title_complete = False

    @staticmethod
    def attrs_dict(attrs: list[tuple[str, str | None]]) -> dict[str, str]:
        return {key.lower(): value or "" for key, value in attrs}

    def handle_starttag(self, tag: str, attrs) -> None:  # noqa: ANN001
        tag = tag.lower()
        values = self.attrs_dict(attrs)
        if tag in {"script", "style", "noscript", "template"}:
            self.hidden_depth += 1
        if tag == "title" and not self.title_complete:
            self.in_title = True
        elif tag == "h1":
            self.current_h1 = []
        elif tag == "meta":
            self.meta.append(values)
        elif tag == "link":
            self.links.append(values)
        elif tag == "a" and values.get("href"):
            self.hrefs.append(values["href"])
        elif tag == "img":
            self.images += 1
            if not values.get("alt", "").strip():
                self.images_missing_alt += 1
        if tag == "script" and values.get("type", "").lower() == "application/ld+json":
            self.current_json_ld = []

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag == "title":
            self.in_title = False
            self.title_complete = True
        elif tag == "h1" and self.current_h1 is not None:
            self.h1_parts.append(self.current_h1)
            self.current_h1 = None
        if tag == "script" and self.current_json_ld is not None:
            self.json_ld_parts.append(self.current_json_ld)
            self.current_json_ld = None
        if tag in {"script", "style", "noscript", "template"}:
            self.hidden_depth = max(0, self.hidden_depth - 1)

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)
        if self.current_h1 is not None:
            self.current_h1.append(data)
        if self.current_json_ld is not None:
            self.current_json_ld.append(data)
        if self.hidden_depth == 0:
            cleaned = re.sub(r"\s+", " ", data).strip()
            if cleaned:
                self.text_parts.append(cleaned)

    def value(self) -> dict:
        descriptions = [
            item.get("content", "").strip()
            for item in self.meta
            if item.get("name", "").lower() == "description"
        ]
        robots = [
            item.get("content", "").strip()
            for item in self.meta
            if item.get("name", "").lower() == "robots"
        ]
        canonicals = [
            item.get("href", "").strip()
            for item in self.links
            if "canonical" in item.get("rel", "").lower().split()
        ]
        schema_types: set[str] = set()
        invalid_json_ld = 0
        for parts in self.json_ld_parts:
            raw = "".join(parts).strip()
            if not raw:
                continue
            try:
                self.collect_schema_types(json.loads(raw), schema_types)
            except json.JSONDecodeError:
                invalid_json_ld += 1
        return {
            "title": re.sub(r"\s+", " ", "".join(self.title_parts)).strip(),
            "meta_description": descriptions[0] if descriptions else "",
            "meta_description_count": len(descriptions),
            "robots": robots[0] if robots else "",
            "canonical": canonicals[0] if canonicals else "",
            "canonical_count": len(canonicals),
            "h1": [re.sub(r"\s+", " ", "".join(parts)).strip() for parts in self.h1_parts],
            "word_count": len(re.findall(r"\b[\wÀ-ÿ'-]+\b", " ".join(self.text_parts))),
            "images": self.images,
            "images_missing_alt": self.images_missing_alt,
            "schema_types": sorted(schema_types),
            "invalid_json_ld": invalid_json_ld,
            "hrefs": self.hrefs,
        }

    @classmethod
    def collect_schema_types(cls, value, output: set[str]) -> None:  # noqa: ANN001
        if isinstance(value, dict):
            schema_type = value.get("@type")
            if isinstance(schema_type, str):
                output.add(schema_type)
            elif isinstance(schema_type, list):
                output.update(item for item in schema_type if isinstance(item, str))
            for child in value.values():
                cls.collect_schema_types(child, output)
        elif isinstance(value, list):
            for child in value:
                cls.collect_schema_types(child, output)


class RateLimiter:
    def __init__(self, interval: float) -> None:
        self.interval = max(0.0, interval)
        self.lock = threading.Lock()
        self.next_request = 0.0

    def wait(self) -> None:
        with self.lock:
            now = time.monotonic()
            delay = max(0.0, self.next_request - now)
            self.next_request = max(now, self.next_request) + self.interval
        if delay:
            time.sleep(delay)


def normalize_public_url(url: str, base: str = "https://milaura.fr/") -> str | None:
    absolute = urljoin(base, url)
    parts = urlsplit(absolute)
    host = parts.hostname.lower() if parts.hostname else ""
    if host not in {"milaura.fr", "www.milaura.fr"}:
        return None
    path = re.sub(r"/{2,}", "/", parts.path or "/")
    if any(path.startswith(prefix) for prefix in SKIP_PREFIXES):
        return None
    if path.lower().endswith(SKIP_SUFFIXES):
        return None
    return urlunsplit(("https", "milaura.fr", path, "", ""))


def fetch(url: str, limiter: RateLimiter, retries: int = 3) -> dict:
    for attempt in range(retries):
        recorder = RedirectRecorder()
        opener = build_opener(recorder)
        request = Request(url, headers={"User-Agent": USER_AGENT, "Accept": "text/html,*/*"})
        limiter.wait()
        try:
            with opener.open(request, timeout=45) as response:
                body = response.read(8 * 1024 * 1024)
                content_type = response.headers.get("Content-Type", "")
                return {
                    "requested_url": url,
                    "status": response.status,
                    "final_url": response.geturl(),
                    "redirect_chain": recorder.chain,
                    "content_type": content_type,
                    "body": body,
                    "error": "",
                }
        except HTTPError as exc:
            if exc.code in {429, 500, 502, 503, 504} and attempt + 1 < retries:
                time.sleep(2**attempt)
                continue
            return {
                "requested_url": url,
                "status": exc.code,
                "final_url": exc.geturl(),
                "redirect_chain": recorder.chain,
                "content_type": exc.headers.get("Content-Type", "") if exc.headers else "",
                "body": exc.read(1024 * 1024),
                "error": f"HTTP {exc.code}",
            }
        except (URLError, TimeoutError) as exc:
            if attempt + 1 < retries:
                time.sleep(2**attempt)
                continue
            return {
                "requested_url": url,
                "status": 0,
                "final_url": url,
                "redirect_chain": recorder.chain,
                "content_type": "",
                "body": b"",
                "error": str(exc),
            }
    raise AssertionError("unreachable")


def read_sitemap_urls(root_url: str, limiter: RateLimiter) -> tuple[list[str], list[dict]]:
    queue = [root_url]
    seen: set[str] = set()
    urls: set[str] = set()
    sitemap_checks: list[dict] = []
    while queue:
        sitemap = queue.pop(0)
        if sitemap in seen:
            continue
        seen.add(sitemap)
        result = fetch(sitemap, limiter)
        check = {key: value for key, value in result.items() if key != "body"}
        sitemap_checks.append(check)
        if result["status"] != 200:
            continue
        root = ET.fromstring(result["body"])
        if root.tag.endswith("sitemapindex"):
            locations = [
                node.text.strip()
                for node in root.findall("./{*}sitemap/{*}loc")
                if node.text and node.text.strip()
            ]
            queue.extend(locations)
        else:
            locations = [
                node.text.strip()
                for node in root.findall("./{*}url/{*}loc")
                if node.text and node.text.strip()
            ]
            urls.update(locations)
    return sorted(urls), sitemap_checks


def audit_html_result(result: dict) -> dict:
    public = {key: value for key, value in result.items() if key != "body"}
    public["issues"] = []
    public["internal_hrefs"] = []
    if result["status"] != 200 or "html" not in result["content_type"].lower():
        if result["status"] != 200:
            public["issues"].append(f"HTTP_{result['status']}")
        return public
    parser = SeoHtmlParser()
    parser.feed(result["body"].decode("utf-8", errors="replace"))
    data = parser.value()
    public.update({key: value for key, value in data.items() if key != "hrefs"})
    public["internal_hrefs"] = sorted(
        {
            normalized
            for href in data["hrefs"]
            if (normalized := normalize_public_url(href, result["final_url"]))
        }
    )
    canonical = normalize_public_url(data["canonical"], result["final_url"]) if data["canonical"] else None
    requested = normalize_public_url(result["requested_url"])
    title_len = len(data["title"])
    description_len = len(data["meta_description"])
    if not data["title"]:
        public["issues"].append("TITLE_MISSING")
    elif title_len < 20:
        public["issues"].append("TITLE_SHORT")
    elif title_len > 65:
        public["issues"].append("TITLE_LONG")
    if not data["meta_description"]:
        public["issues"].append("META_DESCRIPTION_MISSING")
    elif description_len < 70:
        public["issues"].append("META_DESCRIPTION_SHORT")
    elif description_len > 170:
        public["issues"].append("META_DESCRIPTION_LONG")
    if data["meta_description_count"] > 1:
        public["issues"].append("MULTIPLE_META_DESCRIPTIONS")
    if data["canonical_count"] != 1:
        public["issues"].append("CANONICAL_COUNT_INVALID")
    elif canonical != requested:
        public["issues"].append("CANONICAL_NOT_SELF_REFERENT")
    if len(data["h1"]) == 0:
        public["issues"].append("H1_MISSING")
    elif len(data["h1"]) > 1:
        public["issues"].append("MULTIPLE_H1")
    if "noindex" in data["robots"].lower():
        public["issues"].append("NOINDEX_IN_SITEMAP")
    if data["invalid_json_ld"]:
        public["issues"].append("INVALID_JSON_LD")
    if "/products/" in urlsplit(result["requested_url"]).path and "Product" not in data["schema_types"]:
        public["issues"].append("PRODUCT_SCHEMA_MISSING")
    return public


def write_csv(path: Path, pages: list[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    fields = [
        "requested_url",
        "status",
        "final_url",
        "title",
        "title_length",
        "meta_description",
        "meta_description_length",
        "canonical",
        "robots",
        "h1_count",
        "word_count",
        "images",
        "images_missing_alt",
        "schema_types",
        "issues",
    ]
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields)
        writer.writeheader()
        for page in pages:
            writer.writerow(
                {
                    "requested_url": page.get("requested_url", ""),
                    "status": page.get("status", ""),
                    "final_url": page.get("final_url", ""),
                    "title": page.get("title", ""),
                    "title_length": len(page.get("title", "")),
                    "meta_description": page.get("meta_description", ""),
                    "meta_description_length": len(page.get("meta_description", "")),
                    "canonical": page.get("canonical", ""),
                    "robots": page.get("robots", ""),
                    "h1_count": len(page.get("h1", [])),
                    "word_count": page.get("word_count", ""),
                    "images": page.get("images", ""),
                    "images_missing_alt": page.get("images_missing_alt", ""),
                    "schema_types": "|".join(page.get("schema_types", [])),
                    "issues": "|".join(page.get("issues", [])),
                }
            )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--sitemap", default="https://milaura.fr/sitemap.xml")
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--csv-output", type=Path, required=True)
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--request-interval", type=float, default=0.25)
    parser.add_argument("--check-extra-links", action="store_true")
    args = parser.parse_args()
    if not 1 <= args.workers <= 8:
        raise RuntimeError("workers must be between 1 and 8")

    limiter = RateLimiter(args.request_interval)
    sitemap_urls, sitemap_checks = read_sitemap_urls(args.sitemap, limiter)
    results: list[dict] = []
    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {executor.submit(fetch, url, limiter): url for url in sitemap_urls}
        for future in as_completed(futures):
            results.append(audit_html_result(future.result()))
    results.sort(key=lambda item: item["requested_url"])

    title_urls: defaultdict[str, list[str]] = defaultdict(list)
    description_urls: defaultdict[str, list[str]] = defaultdict(list)
    for page in results:
        if page.get("title"):
            title_urls[page["title"]].append(page["requested_url"])
        if page.get("meta_description"):
            description_urls[page["meta_description"]].append(page["requested_url"])
    duplicate_titles = {key: value for key, value in title_urls.items() if len(value) > 1}
    duplicate_descriptions = {
        key: value for key, value in description_urls.items() if len(value) > 1
    }
    for page in results:
        if page.get("title") in duplicate_titles:
            page["issues"].append("DUPLICATE_TITLE")
        if page.get("meta_description") in duplicate_descriptions:
            page["issues"].append("DUPLICATE_META_DESCRIPTION")

    extra_link_checks: list[dict] = []
    if args.check_extra_links:
        sitemap_set = {normalize_public_url(url) for url in sitemap_urls}
        linked = {
            url for page in results for url in page.get("internal_hrefs", []) if url not in sitemap_set
        }
        with ThreadPoolExecutor(max_workers=args.workers) as executor:
            futures = {executor.submit(fetch, url, limiter): url for url in sorted(linked)}
            for future in as_completed(futures):
                result = future.result()
                extra_link_checks.append(
                    {key: value for key, value in result.items() if key != "body"}
                )
        extra_link_checks.sort(key=lambda item: item["requested_url"])

    issue_counts = Counter(issue for page in results for issue in page["issues"])
    broken_internal = [
        item for item in extra_link_checks if item["status"] == 0 or item["status"] >= 400
    ]
    payload = {
        "audited_at": dt.datetime.now(dt.UTC).isoformat(),
        "sitemap": args.sitemap,
        "sitemap_checks": sitemap_checks,
        "summary": {
            "sitemap_urls": len(sitemap_urls),
            "pages_200": sum(page["status"] == 200 for page in results),
            "pages_non_200": sum(page["status"] != 200 for page in results),
            "issue_counts": dict(sorted(issue_counts.items())),
            "duplicate_titles": len(duplicate_titles),
            "duplicate_meta_descriptions": len(duplicate_descriptions),
            "extra_internal_links_checked": len(extra_link_checks),
            "broken_internal_links": len(broken_internal),
        },
        "duplicate_titles": duplicate_titles,
        "duplicate_meta_descriptions": duplicate_descriptions,
        "broken_internal_links": broken_internal,
        "pages": results,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_csv(args.csv_output, results)
    print(json.dumps({"written": str(args.output), **payload["summary"]}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
