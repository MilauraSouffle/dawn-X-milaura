from __future__ import annotations

import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(ROOT / "tools" / "ruban_v3"))

from ruban_v3_engine import (  # noqa: E402
  Product,
  build_matrix,
  load_json,
  rank_candidates,
  public_payload,
  score_candidate,
  select_runtime_candidate,
)


CONFIG = load_json(ROOT / "config" / "ruban-v3-score-config.json")


def product(product_id: str, **overrides) -> Product:
  defaults = {
    "shopify_product_id": product_id,
    "title": f"Produit {product_id}",
    "handle": f"produit-{product_id}",
    "public": True,
    "available": True,
    "price_eur": 20.0,
    "normalized_type": "bracelet",
    "family": "bijou",
    "primary_stone": "amethyste",
    "stones": ("amethyste",),
    "finish": "dore",
    "canonical_status": "physical-stock",
    "physical_stock_units": 2,
    "supplier_current": False,
    "paused": False,
    "contribution_ht": 8.0,
    "contribution_rate": 0.5,
    "photo_fidelity_status": "unverified",
    "video_status": "missing",
    "image_count": 3,
    "last_verified_at": "2026-08-28T00:00:00Z",
  }
  defaults.update(overrides)
  if "stones" in overrides and "primary_stone" not in overrides:
    defaults["primary_stone"] = overrides["stones"][0] if overrides["stones"] else None
  return Product(**defaults)


class RubanV3EngineTest(unittest.TestCase):
  def test_same_stone_compatible_type_and_finish_ranks_first(self):
    source = product("1", price_eur=30.0)
    exact = product("2", normalized_type="boucles-oreilles")
    different_finish = product("3", normalized_type="collier", finish="argente")
    other_stone = product("4", normalized_type="boucles-oreilles", stones=("sodalite",))

    candidates = rank_candidates(source, [source, different_finish, other_stone, exact], CONFIG)

    self.assertEqual([candidate["shopify_product_id"] for candidate in candidates[:2]], ["2", "3"])
    self.assertEqual(candidates[0]["relation"], "same_stone_jewellery")
    self.assertIn("same_finish", candidates[0]["components"])

  def test_all_commercial_hard_gates_are_blocking(self):
    source = product("1")
    cases = [
      product("2", normalized_type="collier", public=False),
      product("3", normalized_type="collier", available=False),
      product("4", normalized_type="collier", price_eur=0),
      product("5", normalized_type="collier", paused=True),
      product("6", normalized_type="collier", physical_stock_units=0, supplier_current=False),
      product("7", normalized_type="collier", contribution_ht=0),
      product("8", normalized_type="collier", excluded=True, exclusion_reasons=("manual",)),
      product("9", normalized_type="collier", image_count=0),
    ]

    for target in cases:
      with self.subTest(target=target.shopify_product_id):
        self.assertIsNone(score_candidate(source, target, CONFIG))

  def test_override_never_bypasses_a_gate(self):
    source = product("1")
    blocked = product(
      "2",
      normalized_type="collier",
      physical_stock_units=0,
      supplier_current=False,
    )

    self.assertEqual(rank_candidates(source, [source, blocked], CONFIG, ["2"]), [])

  def test_distinct_stone_variants_are_not_merged_without_an_explicit_family_rule(self):
    source = product("1", normalized_type="collier", stones=("agate-arbre",))
    target = product("2", normalized_type="bracelet", stones=("agate-fleur-de-cerisier",))
    generic = product("3", normalized_type="bracelet", stones=("agate",))

    candidates = rank_candidates(source, [source, target, generic], CONFIG)

    self.assertTrue(candidates)
    self.assertTrue(all(candidate["relation"] != "compatible_stone_or_intention" for candidate in candidates))
    self.assertEqual(candidates[0]["relation"], "same_universe")

  def test_approved_stone_family_can_match_variants(self):
    source = product("1", normalized_type="collier", stones=("obsidienne-noire",))
    target = product("2", normalized_type="bracelet", stones=("obsidienne-flocon-de-neige",))

    candidates = rank_candidates(source, [source, target], CONFIG)

    self.assertEqual(candidates[0]["shopify_product_id"], "2")
    self.assertIn("obsidienne", candidates[0]["shared_stones"])

  def test_top_three_is_unique_and_deterministic(self):
    source = product("1", price_eur=30.0)
    targets = [
      product("5", normalized_type="collier"),
      product("3", normalized_type="bague"),
      product("4", normalized_type="pendentif"),
      product("2", normalized_type="boucles-oreilles"),
    ]

    first = rank_candidates(source, [source, *targets], CONFIG)
    second = rank_candidates(source, [*reversed(targets), source], CONFIG)

    self.assertEqual(first, second)
    self.assertEqual(len(first), 3)
    self.assertEqual(len({item["shopify_product_id"] for item in first}), 3)
    self.assertNotIn("1", {item["shopify_product_id"] for item in first})

  def test_no_semantic_relation_uses_catalogue_fallback(self):
    source = product("1", normalized_type="savon", family="soin", stones=())
    unrelated = product("2", normalized_type="bracelet", stones=("amethyste",))

    matrix = build_matrix([source, unrelated], CONFIG, generated_at="2026-08-28T00:00:00Z")
    mapping = next(item for item in matrix["mappings"] if item["source_product_id"] == "1")

    self.assertEqual(mapping["status"], "MATCH_REPLI_CATALOGUE")
    self.assertEqual(mapping["candidates"][0]["shopify_product_id"], "2")

  def test_same_collection_precedes_catalogue_fallback(self):
    source = product(
      "1",
      normalized_type="savon",
      family="soin",
      stones=(),
      collection_handles=("soins-bien-etre",),
    )
    collection_match = product(
      "2",
      normalized_type="decoration",
      family="decoration",
      stones=("sodalite",),
      collection_handles=("soins-bien-etre",),
    )
    catalogue = product("3", normalized_type="bracelet", family="bijou", stones=("amethyste",))

    candidates = rank_candidates(source, [source, catalogue, collection_match], CONFIG)

    self.assertEqual(candidates[0]["shopify_product_id"], "2")
    self.assertEqual(candidates[0]["relation"], "same_collection")

  def test_ruban_is_empty_only_when_no_other_target_passes_hard_gates(self):
    source = product("1", normalized_type="savon", family="soin", stones=())
    blocked = product("2", available=False)

    matrix = build_matrix([source, blocked], CONFIG, generated_at="2026-08-28T00:00:00Z")
    mapping = next(item for item in matrix["mappings"] if item["source_product_id"] == "1")

    self.assertEqual(mapping["status"], "AUCUN_MATCH_HONNETE")
    self.assertEqual(mapping["candidates"], [])

  def test_source_exclusion_does_not_remove_safe_fallback_candidates(self):
    source = product("1", normalized_type="baguette-minerale", family="mineral", stones=())
    target = product("2", normalized_type="bracelet", family="bijou")

    matrix = build_matrix([source, target], CONFIG, generated_at="2026-08-28T00:00:00Z")
    mapping = next(item for item in matrix["mappings"] if item["source_product_id"] == "1")

    self.assertEqual(mapping["status"], "EXCLU_SOURCE")
    self.assertEqual(mapping["candidates"][0]["shopify_product_id"], "2")

  def test_content_hash_is_idempotent(self):
    products = [product("1"), product("2", normalized_type="collier")]

    first = build_matrix(products, CONFIG, generated_at="2026-08-28T01:00:00Z")
    second = build_matrix(products, CONFIG, generated_at="2026-08-28T02:00:00Z")

    self.assertEqual(first["content_hash"], second["content_hash"])
    self.assertNotEqual(first["generated_at"], second["generated_at"])

  def test_runtime_uses_gallery_cart_and_availability_gates_without_video(self):
    candidates = [
      {"shopify_product_id": "2", "image_count": 3, "video_status": "approved"},
      {"shopify_product_id": "3", "image_count": 4, "video_status": "draft"},
      {"shopify_product_id": "4", "image_count": 0, "video_status": "approved"},
    ]

    selected = select_runtime_candidate(
      candidates,
      cart_product_ids={"2"},
      available_product_ids={"2", "3", "4"},
    )
    hidden = select_runtime_candidate(
      candidates,
      cart_product_ids={"2", "3"},
      available_product_ids={"2", "3", "4"},
    )

    self.assertEqual(selected["shopify_product_id"], "3")
    self.assertIsNone(hidden)

  def test_public_payload_renders_with_gallery_without_video(self):
    products = [product("1"), product("2", normalized_type="collier")]
    matrix = build_matrix(products, CONFIG, generated_at="2026-08-28T00:00:00Z")

    payload = public_payload(matrix)
    mapping = next(item for item in payload["mappings"] if item["source_product_id"] == "1")

    self.assertTrue(mapping["should_render"])
    self.assertTrue(mapping["has_gallery_candidate"])
    self.assertTrue(mapping["candidates"])


if __name__ == "__main__":
  unittest.main()
