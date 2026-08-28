#!/usr/bin/env python3
"""Moteur pur et deterministe du Ruban V3 MilAura."""

from __future__ import annotations

import argparse
import hashlib
import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterable, Mapping, Sequence


ROOT = Path(__file__).resolve().parents[2]
DEFAULT_CONFIG = ROOT / "config" / "ruban-v3-score-config.json"


@dataclass(frozen=True)
class Product:
  shopify_product_id: str
  title: str
  handle: str
  public: bool
  available: bool
  price_eur: float
  normalized_type: str
  family: str
  primary_stone: str | None = None
  stones: tuple[str, ...] = field(default_factory=tuple)
  finish: str = "inconnu"
  ean: str | None = None
  primary_intention: str | None = None
  uses: tuple[str, ...] = field(default_factory=tuple)
  canonical_status: str = "unreconciled"
  physical_stock_units: int = 0
  supplier_current: bool = False
  paused: bool = False
  contribution_ht: float | None = None
  contribution_rate: float | None = None
  photo_fidelity_status: str = "unverified"
  video_status: str = "missing"
  video_reference: str | None = None
  image_count: int = 0
  new_catalogue_entry: bool = False
  excluded: bool = False
  exclusion_reasons: tuple[str, ...] = field(default_factory=tuple)
  last_verified_at: str = ""

  @classmethod
  def from_dict(cls, data: Mapping[str, Any]) -> "Product":
    return cls(
      shopify_product_id=str(data["shopify_product_id"]),
      title=str(data["title"]),
      handle=str(data["handle"]),
      public=bool(data["public"]),
      available=bool(data["available"]),
      price_eur=float(data["price_eur"]),
      normalized_type=str(data["normalized_type"]),
      family=str(data["family"]),
      primary_stone=str(data["primary_stone"]) if data.get("primary_stone") else None,
      stones=tuple(sorted({str(value) for value in data.get("stones", []) if value})),
      finish=str(data.get("finish", "inconnu")),
      ean=str(data["ean"]) if data.get("ean") else None,
      primary_intention=data.get("primary_intention"),
      uses=tuple(sorted({str(value) for value in data.get("uses", []) if value})),
      canonical_status=str(data.get("canonical_status", "unreconciled")),
      physical_stock_units=max(0, int(data.get("physical_stock_units", 0))),
      supplier_current=bool(data.get("supplier_current", False)),
      paused=bool(data.get("paused", False)),
      contribution_ht=_optional_float(data.get("contribution_ht")),
      contribution_rate=_optional_float(data.get("contribution_rate")),
      photo_fidelity_status=str(data.get("photo_fidelity_status", "unverified")),
      video_status=str(data.get("video_status", "missing")),
      video_reference=data.get("video_reference"),
      image_count=max(0, int(data.get("image_count", 0))),
      new_catalogue_entry=bool(data.get("new_catalogue_entry", False)),
      excluded=bool(data.get("excluded", False)),
      exclusion_reasons=tuple(sorted({str(value) for value in data.get("exclusion_reasons", []) if value})),
      last_verified_at=str(data.get("last_verified_at", "")),
    )


def _optional_float(value: Any) -> float | None:
  if value is None or value == "":
    return None
  return float(value)


def load_json(path: Path) -> Any:
  with path.open("r", encoding="utf-8") as handle:
    return json.load(handle)


def dump_json(path: Path, payload: Any) -> None:
  path.parent.mkdir(parents=True, exist_ok=True)
  with path.open("w", encoding="utf-8") as handle:
    json.dump(payload, handle, ensure_ascii=False, indent=2, sort_keys=True)
    handle.write("\n")


def source_gate(product: Product, config: Mapping[str, Any]) -> list[str]:
  reasons: list[str] = []
  if not product.public:
    reasons.append("source_not_public")
  if not product.available:
    reasons.append("source_unavailable")
  if product.price_eur <= 0:
    reasons.append("source_non_positive_price")
  if product.paused:
    reasons.append("source_paused")
  if product.excluded:
    reasons.extend(product.exclusion_reasons or ("source_explicitly_excluded",))
  if product.normalized_type in set(config["source_excluded_types"]):
    reasons.append("source_type_excluded")
  return sorted(set(reasons))


def target_gate(source: Product, target: Product, config: Mapping[str, Any]) -> list[str]:
  gates = config["hard_gates"]
  reasons: list[str] = []
  if gates["reject_source_itself"] and source.shopify_product_id == target.shopify_product_id:
    reasons.append("same_as_source")
  if gates["require_public"] and not target.public:
    reasons.append("target_not_public")
  if gates["require_available"] and not target.available:
    reasons.append("target_unavailable")
  if gates["require_positive_price"] and target.price_eur <= 0:
    reasons.append("target_non_positive_price")
  if gates["reject_paused"] and target.paused:
    reasons.append("target_paused")
  if target.excluded:
    reasons.extend(target.exclusion_reasons or ("target_explicitly_excluded",))
  if gates["require_verified_supply"] and not (
    target.physical_stock_units > 0 or target.supplier_current
  ):
    reasons.append("target_without_verified_supply")
  if gates["require_positive_contribution"] and (
    target.contribution_ht is None or target.contribution_ht <= 0
  ):
    reasons.append("target_without_positive_contribution")
  return sorted(set(reasons))


def _shared_stones(
  source: Product,
  target: Product,
  config: Mapping[str, Any],
) -> list[str]:
  source_stones = {source.primary_stone} if source.primary_stone else set()
  target_stones = {target.primary_stone} if target.primary_stone else set()
  matches = source_stones.intersection(target_stones)
  cross_variant = set(config.get("stone_cross_variant_parents", []))
  for parent in config.get("stone_parent_prefixes", []):
    source_variants = {
      stone for stone in source_stones if stone == parent or stone.startswith(f"{parent}-")
    }
    target_variants = {
      stone for stone in target_stones if stone == parent or stone.startswith(f"{parent}-")
    }
    if not source_variants or not target_variants:
      continue
    if parent in source_stones or parent in target_stones or parent in cross_variant:
      matches.add(parent)
  return sorted(matches)


def _relation_components(
  source: Product,
  target: Product,
  config: Mapping[str, Any],
) -> tuple[str | None, list[str], dict[str, int]]:
  weights = config["weights"]
  shared_stones = _shared_stones(source, target, config)
  compatibility = config["type_compatibility"].get(source.normalized_type, {})
  pair_weight = int(compatibility.get(target.normalized_type, 0))
  jewellery_types = set(config["jewellery_types"])
  mineral_source_types = set(config["mineral_source_types"])
  candle_source_types = set(config["candle_source_types"])
  rollon_source_types = set(config["rollon_source_types"])
  components: dict[str, int] = {}

  pair = (source.normalized_type, target.normalized_type)
  if pair == ("bol-chantant", "maillet-bol"):
    components["functional_bowl_mallet"] = int(weights["functional_bowl_mallet"])
    return "functional_bowl_mallet", shared_stones, components

  if pair in {("chaine", "pendentif"), ("pendentif", "chaine")}:
    components["functional_chain_pendant"] = int(weights["functional_chain_pendant"])
    components["type_compatibility"] = pair_weight
    return "functional_chain_pendant", shared_stones, components

  if (
    shared_stones
    and source.normalized_type in jewellery_types
    and target.normalized_type in jewellery_types
    and source.normalized_type != target.normalized_type
    and pair_weight > 0
  ):
    components["same_stone_jewellery"] = int(weights["same_stone_jewellery"])
    components["type_compatibility"] = pair_weight
    return "same_stone_jewellery", shared_stones, components

  if (
    shared_stones
    and source.normalized_type in mineral_source_types
    and target.normalized_type in jewellery_types
  ):
    components["same_stone_mineral_to_jewellery"] = int(
      weights["same_stone_mineral_to_jewellery"]
    )
    if target.normalized_type in {"bracelet", "collier", "pendentif"}:
      components["preferred_jewellery_form"] = 12
    return "same_stone_mineral_to_jewellery", shared_stones, components

  if (
    shared_stones
    and source.normalized_type in candle_source_types
    and target.normalized_type in jewellery_types
  ):
    components["same_stone_candle_to_jewellery"] = int(
      weights["same_stone_candle_to_jewellery"]
    )
    if target.normalized_type in {"bracelet", "collier"}:
      components["preferred_jewellery_form"] = 15
    return "same_stone_candle_to_jewellery", shared_stones, components

  if (
    shared_stones
    and source.normalized_type in rollon_source_types
    and target.normalized_type in jewellery_types
  ):
    components["same_stone_rollon_to_jewellery"] = int(
      weights["same_stone_rollon_to_jewellery"]
    )
    return "same_stone_rollon_to_jewellery", shared_stones, components

  return None, shared_stones, components


def score_candidate(
  source: Product,
  target: Product,
  config: Mapping[str, Any],
  override_ids: Sequence[str] = (),
) -> dict[str, Any] | None:
  gate_reasons = target_gate(source, target, config)
  if gate_reasons:
    return None

  relation, shared_stones, components = _relation_components(source, target, config)
  if relation is None:
    return None

  weights = config["weights"]
  if source.finish != "inconnu" and target.finish != "inconnu":
    if source.finish == target.finish:
      components["same_finish"] = int(weights["same_finish"])
    else:
      components["different_known_finish"] = int(weights["different_known_finish"])

  if target.physical_stock_units > 0:
    components["physical_stock"] = int(weights["physical_stock"])
    components["physical_stock_depth"] = min(
      target.physical_stock_units,
      int(weights["physical_stock_unit_cap"]),
    )
  elif target.supplier_current:
    components["supplier_current"] = int(weights["supplier_current"])

  if target.photo_fidelity_status == "patrice-approved":
    components["photo_fidelity"] = int(weights["photo_patrice_approved"])
  elif target.photo_fidelity_status == "pipeline-validated":
    components["photo_fidelity"] = int(weights["photo_pipeline_validated"])
  elif target.image_count >= 5:
    components["photo_gallery_complete"] = int(weights["photo_gallery_complete"])

  if target.contribution_rate is not None and target.contribution_rate > 0:
    components["positive_contribution"] = min(
      int(weights["positive_contribution_cap"]),
      round(target.contribution_rate * 10),
    )

  ratio = target.price_eur / source.price_eur
  price_ratio = config["price_ratio"]
  if ratio <= float(price_ratio["low_max"]):
    components["price_ratio"] = int(weights["price_ratio_low"])
  elif ratio <= float(price_ratio["medium_max"]):
    components["price_ratio"] = int(weights["price_ratio_medium"])
  elif ratio > float(price_ratio["high_min"]):
    components["price_ratio"] = int(weights["price_ratio_high"])

  override_rank: int | None = None
  if target.shopify_product_id in override_ids:
    override_rank = override_ids.index(target.shopify_product_id)
    components["historical_override"] = int(weights["historical_override"])

  if target.new_catalogue_entry:
    components["new_catalogue_entry"] = int(weights["new_catalogue_entry"])

  score = sum(components.values())
  return {
    "shopify_product_id": target.shopify_product_id,
    "handle": target.handle,
    "title": target.title,
    "score": score,
    "relation": relation,
    "shared_stones": shared_stones,
    "components": dict(sorted(components.items())),
    "override_rank": override_rank,
    "video_status": target.video_status,
    "video_reference": target.video_reference,
  }


def rank_candidates(
  source: Product,
  targets: Iterable[Product],
  config: Mapping[str, Any],
  override_ids: Sequence[str] = (),
) -> list[dict[str, Any]]:
  minimum = int(config["thresholds"]["honest_match"])
  scored = [
    candidate
    for target in targets
    if (candidate := score_candidate(source, target, config, override_ids)) is not None
    and candidate["score"] >= minimum
  ]
  scored.sort(
    key=lambda candidate: (
      -candidate["score"],
      candidate["override_rank"] if candidate["override_rank"] is not None else 9999,
      candidate["shopify_product_id"],
    )
  )
  return scored[: int(config["max_candidates"])]


def build_matrix(
  products: Sequence[Product],
  config: Mapping[str, Any],
  overrides: Mapping[str, Sequence[str]] | None = None,
  generated_at: str | None = None,
) -> dict[str, Any]:
  override_map = overrides or {}
  ordered_products = sorted(products, key=lambda product: product.shopify_product_id)
  strong_threshold = int(config["thresholds"]["strong_match"])
  mappings: list[dict[str, Any]] = []
  status_counts = {
    "MATCH_ADAPTATIF_FORT": 0,
    "MATCH_ADAPTATIF": 0,
    "AUCUN_MATCH_HONNETE": 0,
    "EXCLU_SOURCE": 0,
  }

  for source in ordered_products:
    source_reasons = source_gate(source, config)
    if source_reasons:
      status = "EXCLU_SOURCE"
      candidates: list[dict[str, Any]] = []
    else:
      candidates = rank_candidates(
        source,
        ordered_products,
        config,
        list(override_map.get(source.shopify_product_id, [])),
      )
      if not candidates:
        status = "AUCUN_MATCH_HONNETE"
      elif candidates[0]["score"] >= strong_threshold:
        status = "MATCH_ADAPTATIF_FORT"
      else:
        status = "MATCH_ADAPTATIF"
    status_counts[status] += 1
    mappings.append(
      {
        "source_product_id": source.shopify_product_id,
        "source_handle": source.handle,
        "status": status,
        "source_exclusion_reasons": source_reasons,
        "candidates": candidates,
      }
    )

  target_eligible_ids = sorted(
    {
      target.shopify_product_id
      for source in ordered_products[:1]
      for target in ordered_products
      if not target_gate(source, target, {**config, "hard_gates": {**config["hard_gates"], "reject_source_itself": False}})
    }
  ) if ordered_products else []

  content = {
    "contract": "milaura.ruban-v3.matrix",
    "score_version": config["score_version"],
    "products_count": len(ordered_products),
    "target_eligible_count": len(target_eligible_ids),
    "status_counts": status_counts,
    "mappings": mappings,
  }
  canonical = json.dumps(content, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
  return {
    **content,
    "generated_at": generated_at,
    "content_hash": hashlib.sha256(canonical.encode("utf-8")).hexdigest(),
  }


def public_payload(matrix: Mapping[str, Any]) -> dict[str, Any]:
  public_mappings = []
  for mapping in matrix["mappings"]:
    has_approved_video_candidate = any(
      candidate.get("video_status") == "approved" and candidate.get("video_reference")
      for candidate in mapping["candidates"]
    )
    public_mappings.append(
      {
        "source_product_id": mapping["source_product_id"],
        "should_render": has_approved_video_candidate,
        "has_approved_video_candidate": has_approved_video_candidate,
        "candidates": [
          {
            "product_id": candidate["shopify_product_id"],
            "position": position,
            "relation": candidate["relation"],
            "score": candidate["score"],
          }
          for position, candidate in enumerate(mapping["candidates"], start=1)
        ],
      }
    )
  return {
    "contract": "milaura.ruban-v3.storefront",
    "score_version": matrix["score_version"],
    "content_hash": matrix["content_hash"],
    "mappings": public_mappings,
  }


def select_runtime_candidate(
  candidates: Sequence[Mapping[str, Any]],
  cart_product_ids: Iterable[str] = (),
  available_product_ids: Iterable[str] | None = None,
) -> Mapping[str, Any] | None:
  cart_ids = {str(value) for value in cart_product_ids}
  available_ids = (
    {str(value) for value in available_product_ids}
    if available_product_ids is not None
    else None
  )
  for candidate in candidates:
    product_id = str(candidate["shopify_product_id"])
    if product_id in cart_ids:
      continue
    if available_ids is not None and product_id not in available_ids:
      continue
    if candidate.get("video_status") != "approved":
      continue
    if not candidate.get("video_reference"):
      continue
    return candidate
  return None


def _parse_args() -> argparse.Namespace:
  parser = argparse.ArgumentParser(description=__doc__)
  parser.add_argument("--input", required=True, type=Path, help="Contrat catalogue normalise")
  parser.add_argument("--output", required=True, type=Path, help="Rapport local complet")
  parser.add_argument("--public-output", type=Path, help="Payload storefront sans donnees privees")
  parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG)
  parser.add_argument("--overrides", type=Path)
  return parser.parse_args()


def main() -> int:
  args = _parse_args()
  input_payload = load_json(args.input)
  config = load_json(args.config)
  if input_payload.get("contract") != "milaura.ruban-v3.catalogue":
    raise ValueError("Contrat d entree Ruban V3 invalide")
  if input_payload.get("score_version") != config.get("score_version"):
    raise ValueError("Version du contrat differente de la configuration de score")
  products = [Product.from_dict(item) for item in input_payload["products"]]
  overrides = dict(input_payload.get("overrides", {}))
  if args.overrides:
    overrides.update(load_json(args.overrides).get("overrides", {}))
  matrix = build_matrix(
    products,
    config,
    overrides,
    generated_at=input_payload.get("generated_at"),
  )
  dump_json(args.output, matrix)
  if args.public_output:
    dump_json(args.public_output, public_payload(matrix))
  return 0


if __name__ == "__main__":
  raise SystemExit(main())
