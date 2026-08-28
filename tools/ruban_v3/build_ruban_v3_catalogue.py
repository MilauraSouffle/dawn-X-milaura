#!/usr/bin/env python3
"""Construit le contrat normalise Ruban V3 depuis les exports locaux audites."""

from __future__ import annotations

import argparse
import json
import re
import unicodedata
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterable, Mapping

from ruban_v3_engine import DEFAULT_CONFIG, dump_json, load_json


TYPE_RULES = (
  ("cadeau-interne", ("cadeau pochon",)),
  ("maillet-bol", ("maillet",)),
  ("bol-chantant", ("bol chantant", "bol-chantant")),
  ("boucles-oreilles", ("boucles d oreilles", "boucle d oreille")),
  ("distributeur-savon", ("distributeur de savon",)),
  ("flacon-roll-on", ("flacon roll on", "roll on")),
  ("palo-santo", ("palo santo",)),
  ("plaque-rechargement", ("plaque de rechargement", "plaque rechargement")),
  ("pierre-roulee", ("pierre roulee", "galet anti stress", "galet")),
  ("arbre-de-vie", ("arbre de vie",)),
  ("arbre-mineral", ("arbre mineral",)),
  ("oeuf-mineral", ("oeuf",)),
  ("orgonite", ("orgonite",)),
  ("pointe-minerale", ("pointe",)),
  ("pyramide-minerale", ("pyramide",)),
  ("sphere-minerale", ("sphere",)),
  ("baguette-minerale", ("baguette",)),
  ("chapelet", ("chapelet",)),
  ("bracelet", ("bracelet",)),
  ("chaine", ("chaine",)),
  ("collier", ("collier",)),
  ("bague", ("bague",)),
  ("pendentif", ("pendentif",)),
  ("porte-cles", ("porte cles", "porte cle")),
  ("bol-mineral", ("bol",)),
  ("boite-minerale", ("boite",)),
  ("lampe-minerale", ("lampe",)),
  ("mineral-brut", ("mineral",)),
  ("bougeoir", ("bougeoir",)),
  ("bougie", ("bougie",)),
  ("decoration", ("decoration",)),
  ("encens", ("encens",)),
  ("geode", ("geode",)),
  ("druse", ("druse",)),
  ("pendule", ("pendule",)),
  ("sage", ("sauge",)),
  ("savon", ("savon",)),
  ("coffret-bien-etre", ("coffret bien etre", "coffret roller")),
  ("accessoire", ("accessoire",)),
)


FAMILIES = {
  "bague": "bijou",
  "boucles-oreilles": "bijou",
  "bracelet": "bijou",
  "chaine": "bijou",
  "chapelet": "bijou",
  "collier": "bijou",
  "pendentif": "bijou",
  "arbre-mineral": "mineral",
  "baguette-minerale": "mineral",
  "druse": "mineral",
  "geode": "mineral",
  "oeuf-mineral": "mineral",
  "orgonite": "mineral",
  "pierre-roulee": "mineral",
  "plaque-rechargement": "mineral",
  "pointe-minerale": "mineral",
  "pyramide-minerale": "mineral",
  "sphere-minerale": "mineral",
  "boite-minerale": "mineral",
  "bol-mineral": "mineral",
  "lampe-minerale": "mineral",
  "mineral-brut": "mineral",
  "pendule": "mineral",
  "porte-cles": "accessoire",
  "bol-chantant": "rituel",
  "bougeoir": "rituel",
  "encens": "rituel",
  "maillet-bol": "rituel",
  "palo-santo": "rituel",
  "sage": "rituel",
  "bougie": "bougie",
  "distributeur-savon": "soin",
  "savon": "soin",
  "flacon-roll-on": "soin",
  "arbre-de-vie": "decoration",
  "decoration": "decoration",
  "cadeau-interne": "interne",
}


def fold_text(value: str) -> str:
  normalized = unicodedata.normalize("NFKD", value or "")
  ascii_text = "".join(char for char in normalized if not unicodedata.combining(char))
  return re.sub(r"[^a-z0-9]+", " ", ascii_text.lower()).strip()


def slug(value: str) -> str:
  return fold_text(value).replace(" ", "-")


def normalize_type(product: Mapping[str, Any]) -> str:
  tags = " ".join(str(tag) for tag in product.get("tags", []))
  product_type = str(product.get("product_type") or "")
  title = str(product.get("title") or "")
  combined = fold_text(" ".join((product_type, tags, title)))
  for normalized_type, needles in TYPE_RULES:
    if any(needle in combined for needle in needles):
      return normalized_type
  return slug(product_type) if product_type else "inconnu"


def normalize_stones(product: Mapping[str, Any], config: Mapping[str, Any]) -> list[str]:
  stones: set[str] = set()
  for tag in product.get("tags", []):
    tag_text = str(tag)
    if ":" in tag_text and fold_text(tag_text.split(":", 1)[0]) in {"pierre", "pierres"}:
      stones.add(slug(tag_text.split(":", 1)[1]))
  for value in product.get("inventory_stones", []):
    if value:
      for item in re.split(r",|/|\bet\b", str(value), flags=re.IGNORECASE):
        if item.strip():
          stones.add(slug(item))

  haystack = fold_text(" ".join((
    str(product.get("title") or ""),
    str(product.get("product_type") or ""),
    " ".join(str(tag) for tag in product.get("tags", [])),
  )))
  for canonical, aliases in config["stone_aliases"].items():
    for alias in aliases:
      folded_alias = fold_text(alias)
      if folded_alias and folded_alias in haystack:
        stones.add(canonical)
        break
  for parent in config.get("stone_specificity_prefixes", []):
    if parent in stones and any(stone.startswith(f"{parent}-") for stone in stones):
      stones.remove(parent)
  return sorted(stones)


def normalize_primary_stone(
  product: Mapping[str, Any],
  stones: list[str],
  config: Mapping[str, Any],
) -> str | None:
  for tag in product.get("tags", []):
    text = str(tag)
    if ":" not in text:
      continue
    key, value = text.split(":", 1)
    if fold_text(key) == "pierre" and value.strip():
      return slug(value)

  title = fold_text(str(product.get("title") or ""))
  title_matches: list[tuple[int, int, str]] = []
  for canonical, aliases in config["stone_aliases"].items():
    for alias in aliases:
      folded_alias = fold_text(alias)
      position = title.find(folded_alias)
      if position >= 0:
        title_matches.append((position, -len(folded_alias), canonical))
        break
  if title_matches:
    primary = min(title_matches)[2]
    specific = [
      stone
      for stone in stones
      if stone == primary or stone.startswith(f"{primary}-")
    ]
    if specific:
      return sorted(specific, key=lambda stone: (-len(stone), stone))[0]
    return primary

  return stones[0] if len(stones) == 1 else None


def normalize_finish(product: Mapping[str, Any]) -> str:
  haystack = fold_text(" ".join((
    str(product.get("title") or ""),
    " ".join(str(tag) for tag in product.get("tags", [])),
  )))
  if any(token in haystack for token in ("dore", "or mat", "or fin")):
    return "dore"
  if any(token in haystack for token in ("argente", "argent 925", "acier inoxydable")):
    return "argente"
  if "bronze" in haystack:
    return "bronze"
  if "cuivre" in haystack:
    return "cuivre"
  if "metal noir" in haystack or "chaine noire" in haystack:
    return "noir"
  return "inconnu"


def first_tag_value(tags: Iterable[Any], prefix: str) -> str | None:
  folded_prefix = fold_text(prefix)
  for tag in tags:
    text = str(tag)
    if ":" not in text:
      continue
    key, value = text.split(":", 1)
    if fold_text(key) == folded_prefix and value.strip():
      return slug(value)
  return None


def _inventory_index(analysis: Mapping[str, Any]) -> dict[str, Mapping[str, Any]]:
  index: dict[str, Mapping[str, Any]] = {}
  for key in (
    "physical_stock_public",
    "supplier_backed_public",
    "paused_but_public",
    "public_without_inventory_match",
  ):
    for product in analysis.get(key, []):
      index[str(product["id"])] = product
  return index


def _photo_status(rows: list[Mapping[str, Any]]) -> str:
  values = " ".join(fold_text(str(row.get("photo_faithful") or "")) for row in rows)
  if "patrice" in values and "absent" not in values:
    return "patrice-approved"
  if "validee pipeline" in values:
    return "pipeline-validated"
  if "rejet" in values:
    return "rejected"
  return "unverified"


def _minimum_number(rows: list[Mapping[str, Any]], key: str) -> float | None:
  values = [float(row[key]) for row in rows if row.get(key) is not None]
  return min(values) if values else None


def _canonical_status(inventory: Mapping[str, Any] | None) -> str:
  if not inventory:
    return "unreconciled"
  if inventory.get("paused"):
    return "paused"
  if int(inventory.get("physical_stock_units", 0)) > 0:
    return "physical-stock"
  if inventory.get("supplier_backed"):
    return "supplier-backed"
  return "unreconciled"


def normalize_product(
  raw: Mapping[str, Any],
  inventory: Mapping[str, Any] | None,
  config: Mapping[str, Any],
  added_ids: set[str],
  video_registry: Mapping[str, Any],
  generated_at: str,
) -> dict[str, Any]:
  product_id = str(raw["id"])
  variants = list(raw.get("variants", []))
  available_variants = [variant for variant in variants if variant.get("available")]
  priced_variants = available_variants or variants
  price = min((float(variant["price"]) for variant in priced_variants), default=0.0)
  inventory_rows = list((inventory or {}).get("inventory_rows", []))
  inventory_stones = [row.get("stones") for row in inventory_rows if row.get("stones")]
  raw_with_inventory = {**raw, "inventory_stones": inventory_stones}
  normalized_type = normalize_type(raw_with_inventory)
  stones = normalize_stones(raw_with_inventory, config)
  eans = [str(row["ean"]) for row in inventory_rows if row.get("ean")]
  if not eans:
    eans = [
      str(value)
      for variant in variants
      for value in (variant.get("barcode"), variant.get("sku"))
      if value and str(value).isdigit() and 8 <= len(str(value)) <= 14
    ]
  video = video_registry.get(product_id, {})
  tags = list(raw.get("tags", []))
  excluded_reasons: list[str] = []
  if normalized_type == "inconnu":
    excluded_reasons.append("type_unresolved")

  return {
    "shopify_product_id": product_id,
    "ean": eans[0] if eans else None,
    "title": str(raw.get("title") or ""),
    "handle": str(raw.get("handle") or ""),
    "public": True,
    "available": bool(available_variants),
    "price_eur": price,
    "normalized_type": normalized_type,
    "family": FAMILIES.get(normalized_type, "autre"),
    "primary_stone": normalize_primary_stone(raw_with_inventory, stones, config),
    "stones": stones,
    "finish": normalize_finish(raw),
    "primary_intention": first_tag_value(tags, "intention"),
    "uses": sorted({value for key in ("usage", "use") if (value := first_tag_value(tags, key))}),
    "canonical_status": _canonical_status(inventory),
    "physical_stock_units": max(0, int((inventory or {}).get("physical_stock_units", 0))),
    "supplier_current": bool((inventory or {}).get("supplier_backed", False)),
    "paused": bool((inventory or {}).get("paused", False)),
    "contribution_ht": _minimum_number(inventory_rows, "contribution_ht"),
    "contribution_rate": _minimum_number(inventory_rows, "contribution_rate"),
    "photo_fidelity_status": _photo_status(inventory_rows),
    "video_status": str(video.get("status", "missing")),
    "video_reference": video.get("reference"),
    "image_count": len(raw.get("images", [])),
    "new_catalogue_entry": product_id in added_ids,
    "excluded": False,
    "exclusion_reasons": excluded_reasons,
    "last_verified_at": generated_at,
  }


def _parse_args() -> argparse.Namespace:
  parser = argparse.ArgumentParser(description=__doc__)
  parser.add_argument("--products", required=True, action="append", type=Path)
  parser.add_argument("--analysis", required=True, type=Path)
  parser.add_argument("--output", required=True, type=Path)
  parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG)
  parser.add_argument("--overrides", type=Path)
  parser.add_argument("--video-registry", type=Path)
  parser.add_argument("--generated-at", help="Horodatage ISO 8601 fixe pour une regeneration exacte")
  return parser.parse_args()


def main() -> int:
  args = _parse_args()
  config = load_json(args.config)
  analysis = load_json(args.analysis)
  inventory_index = _inventory_index(analysis)
  added_ids = {str(product["id"]) for product in analysis.get("added", [])}
  video_registry = load_json(args.video_registry) if args.video_registry else {}
  overrides = load_json(args.overrides).get("overrides", {}) if args.overrides else {}
  generated_at = args.generated_at or datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")

  raw_products: list[Mapping[str, Any]] = []
  for path in args.products:
    raw_products.extend(load_json(path).get("products", []))
  product_ids = [str(product["id"]) for product in raw_products]
  if len(product_ids) != len(set(product_ids)):
    raise ValueError("Produits dupliques dans les exports Shopify")

  products = [
    normalize_product(
      raw,
      inventory_index.get(str(raw["id"])),
      config,
      added_ids,
      video_registry,
      generated_at,
    )
    for raw in sorted(raw_products, key=lambda product: str(product["id"]))
  ]
  payload = {
    "contract": "milaura.ruban-v3.catalogue",
    "score_version": config["score_version"],
    "generated_at": generated_at,
    "products": products,
    "overrides": overrides,
  }
  dump_json(args.output, payload)
  return 0


if __name__ == "__main__":
  raise SystemExit(main())
