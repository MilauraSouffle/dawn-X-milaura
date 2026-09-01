#!/usr/bin/env python3
"""Contrôle léger des régressions de copywriting MilAura."""

from __future__ import annotations

import subprocess
import sys
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
GUIDE = ROOT / "docs/reference/2026-08-12-copywriting-milaura.md"
AGENTS = ROOT / "AGENTS.md"
SCAN_ROOTS = ("layout", "sections", "snippets", "templates", "locales")
TEXT_EXTENSIONS = {".json", ".liquid"}

FORBIDDEN_PHRASES = (
    "des pierres naturelles, des nuances singulieres, des creations choisies pour etre portees chaque jour",
    "toutes nos pierres sont certifiees",
    "leur provenance est garantie",
    "une experience unique",
    "plongez dans notre univers",
    "un voyage sensoriel",
    "sublimez votre quotidien",
    "des creations intemporelles",
)


def normalize(value: str) -> str:
    decomposed = unicodedata.normalize("NFKD", value)
    return "".join(char for char in decomposed if not unicodedata.combining(char)).casefold()


def iter_copy_files() -> list[Path]:
    files: list[Path] = []
    for root_name in SCAN_ROOTS:
        root = ROOT / root_name
        if not root.exists():
            continue
        files.extend(
            path
            for path in root.rglob("*")
            if path.is_file() and path.suffix in TEXT_EXTENSIONS
        )
    return sorted(files)


def added_lines(staged: bool) -> list[tuple[str, int, str]]:
    command = ["git", "diff", "--unified=0", "--no-ext-diff"]
    if staged:
        command.append("--cached")
    command.extend(["--", *SCAN_ROOTS])
    result = subprocess.run(
        command,
        cwd=ROOT,
        check=False,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        return [("git diff", 0, result.stderr.strip() or "commande impossible")]

    findings: list[tuple[str, int, str]] = []
    current_file = ""
    current_line = 0
    for line in result.stdout.splitlines():
        if line.startswith("+++ b/"):
            current_file = line[6:]
            continue
        if line.startswith("@@"):
            fragment = line.split("+", 1)[1].split(" ", 1)[0]
            current_line = int(fragment.split(",", 1)[0])
            continue
        if line.startswith("+") and not line.startswith("+++"):
            findings.append((current_file, current_line, line[1:]))
            current_line += 1
        elif line.startswith(" "):
            current_line += 1
    return findings


def untracked_lines() -> list[tuple[str, int, str]]:
    result = subprocess.run(
        ["git", "ls-files", "--others", "--exclude-standard", "--", *SCAN_ROOTS],
        cwd=ROOT,
        check=False,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        return [("git ls-files", 0, result.stderr.strip() or "commande impossible")]

    findings: list[tuple[str, int, str]] = []
    for relative in result.stdout.splitlines():
        path = ROOT / relative
        if not path.is_file() or path.suffix not in TEXT_EXTENSIONS:
            continue
        for line_number, content in enumerate(
            path.read_text(encoding="utf-8", errors="ignore").splitlines(), start=1
        ):
            findings.append((relative, line_number, content))
    return findings


def main() -> int:
    errors: list[str] = []

    if not GUIDE.is_file():
        errors.append(f"Guide canonique manquant : {GUIDE.relative_to(ROOT)}")
    if not AGENTS.is_file() or GUIDE.name not in AGENTS.read_text(encoding="utf-8"):
        errors.append(f"AGENTS.md doit pointer vers {GUIDE.name}")

    files = iter_copy_files()
    for path in files:
        content = path.read_text(encoding="utf-8", errors="ignore")
        normalized = normalize(content)
        for phrase in FORBIDDEN_PHRASES:
            if phrase in normalized:
                errors.append(f"{path.relative_to(ROOT)} : formulation interdite '{phrase}'")

    changed_lines = added_lines(staged=False) + added_lines(staged=True) + untracked_lines()
    for source, line_number, content in changed_lines:
        normalized = normalize(content)
        if "\N{EM DASH}" in content:
            errors.append(f"{source}:{line_number} : tiret cadratin interdit dans le nouveau texte")
        for phrase in FORBIDDEN_PHRASES:
            if phrase in normalized:
                errors.append(f"{source}:{line_number} : formulation interdite '{phrase}'")

    if errors:
        print("COPYWRITING MILAURA: FAIL")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"COPYWRITING MILAURA: PASS ({len(files)} fichiers contrôlés)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
