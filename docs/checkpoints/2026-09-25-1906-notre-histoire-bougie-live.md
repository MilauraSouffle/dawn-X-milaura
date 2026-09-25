# Notre histoire, bougie compacte live

Date : 2026-09-25 19:06 CEST

## Perimetre

- Page : `/pages/notre-histoire`
- Bloc : `Comment tout a commence`
- Fichiers publies : `sections/milaura-notre-histoire.liquid`, `assets/milaura-notre-histoire.css`
- Theme live : `190430282075`
- Commit fonctionnel : `09e54347`

## Resultat

- Le grand portrait de Karine a ete retire du bloc.
- Le visuel utilise la bougie Protection - Obsidienne deja reliee a la page.
- Cadre mesure a 242 x 242 px sur desktop et 198 x 198 px sur mobile.

## Verification

- `git diff --check` : PASS.
- `python3 tests/css_contract_test.py` : PASS.
- `shopify theme check --fail-level error` : PASS, avec 16 avertissements preexistants hors perimetre.
- QA publique 1440 x 900 et 390 x 844 : image chargee, aucun debordement horizontal, aucune erreur Liquid, aucune barre de preview.
- Pullback du theme live : egalite exacte `2/2` avec les fichiers locaux.

## Hors perimetre

- Aucun texte de la section Cadeaux de la Home n'a ete modifie. Une proposition copywriting est soumise a Patrice pour validation avant implementation.
