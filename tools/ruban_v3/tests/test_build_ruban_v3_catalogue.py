from __future__ import annotations

import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(ROOT / "tools" / "ruban_v3"))

from build_ruban_v3_catalogue import (  # noqa: E402
  normalize_primary_stone,
  normalize_stones,
  normalize_type,
)
from ruban_v3_engine import load_json  # noqa: E402


CONFIG = load_json(ROOT / "config" / "ruban-v3-score-config.json")


class RubanV3CatalogueBuilderTest(unittest.TestCase):
  def test_normalizes_previously_unresolved_catalogue_types(self):
    cases = {
      "Galet anti-stress en aventurine verte": "pierre-roulee",
      "Arbre minéral en améthyste": "arbre-mineral",
      "Plaque de rechargement zodiaque": "plaque-rechargement",
      "Distributeur de savon en aventurine": "distributeur-savon",
      "Coffret roller visage en jade": "coffret-bien-etre",
    }

    for title, expected in cases.items():
      with self.subTest(title=title):
        self.assertEqual(normalize_type({"title": title, "tags": []}), expected)

  def test_chain_is_not_misclassified_as_a_necklace(self):
    raw = {
      "title": "Chaîne Acier Doré",
      "product_type": "Accessoire",
      "tags": ["collier", "chaine"],
    }

    self.assertEqual(normalize_type(raw), "chaine")

  def test_primary_stone_uses_the_canonical_primary_tag(self):
    raw = {
      "title": "Bracelet Iris en aigue-marine, cornaline et grenat",
      "tags": ["pierre:aigue-marine"],
    }
    stones = normalize_stones(raw, CONFIG)

    self.assertEqual(normalize_primary_stone(raw, stones, CONFIG), "aigue-marine")
    self.assertIn("cornaline", stones)
    self.assertIn("grenat", stones)

  def test_specific_stone_does_not_collapse_to_a_generic_parent(self):
    raw = {"title": "Collier Agate Arbre", "tags": ["agate"]}
    stones = normalize_stones(raw, CONFIG)

    self.assertEqual(stones, ["agate-arbre"])
    self.assertEqual(normalize_primary_stone(raw, stones, CONFIG), "agate-arbre")


if __name__ == "__main__":
  unittest.main()
