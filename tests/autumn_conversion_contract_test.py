#!/usr/bin/env python3
"""Guard the approved conversion fixes for the Autumn landing."""

from __future__ import annotations

import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def load_shopify_json(path: Path) -> dict:
    text = path.read_text(encoding="utf-8")
    return json.loads(text[text.index("{") :])


def main() -> int:
    section = (ROOT / "sections/milaura-sodalite-landing.liquid").read_text(encoding="utf-8")
    template = load_shopify_json(ROOT / "templates/collection.selection-automne.json")
    footer = load_shopify_json(ROOT / "sections/footer-group.json")
    errors: list[str] = []

    if 'class="milaura-sodalite-intro__cta" href="#MilauraSeasonalCatalogue"' not in section:
        errors.append("le hero doit proposer un CTA direct vers le catalogue")

    purchase_position = section.find('class="milaura-sodalite-star__purchase"')
    text_position = section.find('class="milaura-sodalite-star__text"')
    if purchase_position < 0 or text_position < 0 or purchase_position > text_position:
        errors.append("le prix et le CTA Iris doivent preceder le texte editorial")

    autumn_settings = template["sections"]["seasonal_collection"]["settings"]
    if autumn_settings.get("campaign_cta_label") != "Voir les bijoux":
        errors.append("le CTA Automne doit rester explicite et sans nombre fige")

    footer_settings = footer["sections"]["footer"]["settings"]
    if footer_settings.get("footer_feature_mode") != "newsletter":
        errors.append("le concours termine ne doit plus etre le module actif du footer")

    if errors:
        print("AUTUMN_CONVERSION_CONTRACT_FAILED")
        for error in errors:
            print(f"- {error}")
        return 1

    print("AUTUMN_CONVERSION_CONTRACT_PASSED")
    print("- CTA hero vers le catalogue")
    print("- achat Iris avant le texte editorial")
    print("- footer repasse sur la newsletter")
    return 0


if __name__ == "__main__":
    sys.exit(main())
