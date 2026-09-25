# Pieces rares, voile mobile sous le collier

Date : 2026-09-25 19:28 CEST

## Probleme corrige

- Le recadrage V6 grossissait correctement le collier.
- Le voile sombre commencait cependant dans le champ du bijou et diminuait sa priorite visuelle.

## Implementation

- Conservation du recadrage mobile `scale(1.18) translateY(-5%)`.
- Le voile couvre toujours le Hero, mais reste totalement transparent jusqu a `57 %`.
- La transition atteint `88 %` de prune a `74 %`, uniquement derriere le titre blanc, puis `96 %` en bas.
- Aucun changement du H1, du CTA, du media, de la hauteur du Hero ou du rendu bureau.

## Verification navigateur

- Mobile `390 x 844` : Hero `680px`, collier entierement dans la zone lumineuse, titre blanc sur la zone sombre, overflow horizontal `0px`.
- Gradient calcule : transparent jusqu a `57 %`, prune `88 %` a `74 %`, prune `96 %` a `100 %`.
- Bureau `1440 x 900` : Hero `480px`, pseudo-element `none`, transformation image `none`, overflow horizontal `0px`.

## Verification technique

- `node --test tests/rare-pieces-landing.test.mjs` : `8/8`.
- `git diff --check` : PASS.
- Theme Check : aucune erreur ; seize avertissements historiques hors lot.
- Push cible du CSS sur le theme prive `201797534043` avec `--nodelete --strict`.
- Theme public `190430282075` : intact.

## Preview

`https://milaura-2.myshopify.com/collections/pieces-rares?preview_theme_id=201797534043`

## Gate suivant

Attendre le GO visuel explicite de Patrice avant integration ou deploiement live.
