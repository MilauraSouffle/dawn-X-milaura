#!/usr/bin/env python3
"""Guard the CSS contract for surfaces migrated after 2026-09-23."""

from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

CSS_FILES = (
    ROOT / "assets/milaura-destination-landing.css",
    ROOT / "assets/milaura-home-seasonal.css",
    ROOT / "assets/milaura-home-transitions.css",
    ROOT / "assets/milaura-home-karine-selection.css",
)

SECTION_FILES = {
    ROOT / "sections/milaura-sodalite-landing.liquid": "milaura-destination-landing.css",
    ROOT / "sections/milaura-selection-atelier.liquid": "milaura-home-seasonal.css",
    ROOT / "sections/milaura-home-karine-selection.liquid": "milaura-home-karine-selection.css",
}

HERO_PORTAL = ROOT / "sections/milaura-hero-portal.liquid"
SEASONAL_CROSS_SURFACE_SELECTOR = "section-milaura-selection-atelier .milaura-season__shell"

HEX_COLOR = re.compile(r"#[0-9a-fA-F]{3,8}\b")
FONT_DECLARATION = re.compile(r"font-family\s*:\s*([^;]+);")


def line_number(text: str, offset: int) -> int:
    return text.count("\n", 0, offset) + 1


def check_css(path: Path) -> list[str]:
    errors: list[str] = []
    text = path.read_text(encoding="utf-8")

    for token, label in (("!important", "!important"), ("{{", "Liquid output"), ("{%", "Liquid tag")):
        for match in re.finditer(re.escape(token), text):
            errors.append(f"{path.relative_to(ROOT)}:{line_number(text, match.start())}: {label} interdit")

    for match in HEX_COLOR.finditer(text):
        errors.append(
            f"{path.relative_to(ROOT)}:{line_number(text, match.start())}: couleur brute {match.group(0)} interdite"
        )

    for match in FONT_DECLARATION.finditer(text):
        value = match.group(1).strip()
        if "var(--milaura-font-" not in value and value not in {"inherit"}:
            errors.append(
                f"{path.relative_to(ROOT)}:{line_number(text, match.start())}: font-family doit utiliser un token MilAura"
            )

    return errors


def check_section(path: Path, expected_asset: str) -> list[str]:
    errors: list[str] = []
    text = path.read_text(encoding="utf-8")

    if expected_asset not in text:
        errors.append(f"{path.relative_to(ROOT)}: asset {expected_asset} non chargé")

    if "{% style %}" in text or "{%- style -%}" in text or "<style" in text:
        errors.append(f"{path.relative_to(ROOT)}: bloc de style inline interdit sur une surface migrée")

    return errors


def main() -> int:
    errors: list[str] = []

    for path in CSS_FILES:
        if not path.exists():
            errors.append(f"{path.relative_to(ROOT)}: fichier absent")
            continue
        errors.extend(check_css(path))

    for path, expected_asset in SECTION_FILES.items():
        if not path.exists():
            errors.append(f"{path.relative_to(ROOT)}: fichier absent")
            continue
        errors.extend(check_section(path, expected_asset))

    hero_text = HERO_PORTAL.read_text(encoding="utf-8")
    if SEASONAL_CROSS_SURFACE_SELECTOR in hero_text:
        errors.append(
            f"{HERO_PORTAL.relative_to(ROOT)}: le hero ne doit pas imposer l espacement de la campagne saisonniere"
        )

    if errors:
        print("CSS_CONTRACT_FAILED")
        for error in errors:
            print(f"- {error}")
        return 1

    print("CSS_CONTRACT_PASSED")
    print(f"- {len(CSS_FILES)} assets de surface conformes")
    print(f"- {len(SECTION_FILES)} sections Liquid sans bloc CSS inline")
    return 0


if __name__ == "__main__":
    sys.exit(main())
