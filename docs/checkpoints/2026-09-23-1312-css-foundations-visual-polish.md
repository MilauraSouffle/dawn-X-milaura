# Polish visuel des landing et de la Home MilAura

Date : 2026-09-23 13:12 CEST

Statut : POLISH VISUEL PREVIEW PRET, GO VISUEL PATRICE EN ATTENTE

## Perimetre

- Branche : `codex/milaura-css-foundations-20260923`.
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/css-foundations-20260923`.
- Theme de developpement frais : `201797534043`.
- Theme public de reference : `190430282075`, non modifie.
- Routes verifiees : `/`, `/collections/selection-automne`, `/collections/par-pierre-sodalite`.

## Resultat

- Les titres des landing Automne et Sodalite sont superposes au media du hero.
- Le hero remonte sous la navigation et supprime le blanc en haut de page.
- Un degrade construit uniquement avec les tokens MilAura preserve la lisibilite des titres sans masquer le produit.
- Les six transitions decoratives de la Home sont masquees : aucun trait ni espace ajoute entre les sections.
- Les sept limites entre les sections visibles de la Home ont un ecart calcule de `0px` sur mobile comme sur bureau.
- Sur la campagne Automne mobile, la couche produit est bornee au ratio `9 / 16` du media. Son voile ne recouvre plus la description.
- La description Automne utilise l Encre, une graisse 500 et la taille de corps large en mobile.

## Verification

- `python3 tests/css_contract_test.py` : PASS, quatre assets conformes et trois sections Liquid sans CSS inline.
- `git diff --check` : PASS.
- `shopify theme check` : PASS sans erreur, 16 avertissements historiques hors lot.
- QA navigateur en `390 x 844` et `1440 x 900`.
- Aucun debordement horizontal sur les trois routes.
- Les titres Automne et Sodalite sont integralement contenus dans les limites du hero sur mobile et bureau.
- Le bord bas de la couche produit Automne mobile est exactement aligne sur le bord bas du media.
- Console navigateur : aucune erreur ni alerte.

## Gates restantes

- GO visuel de Patrice sur le theme de developpement.
- Integration Git dans le checkout principal apres validation.
- Eventuel push sur le theme public uniquement apres un GO live explicite distinct.

Shopify Admin, les produits, les prix, les stocks, les medias, la navigation et les Ads sont restes intouches.
