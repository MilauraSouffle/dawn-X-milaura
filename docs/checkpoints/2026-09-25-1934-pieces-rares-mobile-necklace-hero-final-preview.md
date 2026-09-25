# Pieces rares, cadrage mobile final centre sur le collier

Date : 2026-09-25 19:34 CEST

## Reference Patrice

- La capture rejetee mesure environ `527 x 683` en pixels CSS apres prise en compte de la densite d ecran.
- La cible coupe volontairement le visage et place le cou avec le collier au centre du cadre.
- Le collier, et non le mannequin, doit etre le sujet du Hero.

## Implementation

- De `431px` a `749px` : `scale(1.18) translateY(-36%)`.
- Jusqu a `430px` : `scale(1.18) translateY(-18%)` afin de conserver le collier dans le cadre plus etroit.
- Le voile reste totalement transparent jusqu a `57 %`, puis protege uniquement la lisibilite du titre blanc.
- Aucun changement du media, du H1, du CTA, de la hauteur du Hero ou du rendu bureau.

## Verification navigateur

- Mobile large `527 x 683` : Hero `620px`, H1 a `455px`, transformation calculee `matrix(1.18, 0, 0, 1.18, 0, -263.376)`, overflow horizontal `0px`.
- A cette largeur, le visage est presque entierement coupe ; le collier est seul au centre lumineux et reste separe du voile et du H1.
- Mobile etroit `390 x 844` : Hero `680px`, H1 a `513px`, transformation calculee `matrix(1.18, 0, 0, 1.18, 0, -144.432)`, overflow horizontal `0px`.
- Bureau `1440 x 900` : Hero `480px`, transformation `none`, pseudo-element `none`, overflow horizontal `0px`.

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
