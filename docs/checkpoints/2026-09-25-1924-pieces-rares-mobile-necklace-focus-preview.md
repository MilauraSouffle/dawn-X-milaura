# Pieces rares, focus collier du Hero mobile

Date : 2026-09-25 19:24 CEST

## Decision

- La typographie blanche du Hero mobile est validee et reste strictement inchangee.
- Le collier doit etre le sujet ; le mannequin reste son support.
- Le correctif est limite au cadrage mobile sous `750px`.

## Implementation

- Agrandissement de l image mobile a `1.18`.
- Remontee verticale de `5 %`.
- Aucun changement du media source, du H1, du CTA, du voile, de la hauteur du Hero ou du rendu bureau.

## Verification navigateur

- Mobile `390 x 844` : Hero `680px`, image rendue `802px`, transformation calculee `matrix(1.18, 0, 0, 1.18, 0, -40.12)`, overflow horizontal `0px`.
- Le collier est entierement visible, plus grand et degage du H1.
- Bureau `1440 x 900` : Hero `480px`, image `480px`, transformation calculee `none`, overflow horizontal `0px`.

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
