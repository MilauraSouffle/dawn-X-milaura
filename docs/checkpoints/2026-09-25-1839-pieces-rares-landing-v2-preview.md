# Pieces rares, V2 compacte en preview

Date : 2026-09-25 18:39 CEST

## Retour traite

- Reduire fortement la hauteur du Hero.
- Montrer les trois reperes de selection des l arrivee sur bureau.
- Remplacer le bento trop grand et trop rigide par la composition des autres landings MilAura.
- Passer provisoirement le fond general de la page en blanc pur.

## Resultat

- Hero bureau : `600px` de haut sur `1440 x 900`.
- Les trois reperes se terminent a `797px` et sont donc visibles dans le premier viewport.
- Bento : deux colonnes egales, trois photographies superposees, media et panneau produit de `499px`.
- Section geode complete : `790px` de haut.
- Bento mobile : composition superposee de `406px`, sans masquer aucune des trois vues.
- Surface generale, reperes, produit vedette et catalogue : blanc pur calcule `rgb(255, 255, 255)`.

## Verification

- `node --test tests/rare-pieces-landing.test.mjs` : `8/8`.
- `git diff --check` : PASS.
- Theme Check : aucune erreur ; seize avertissements historiques hors lot.
- Pullback du CSS sur le theme prive `201797534043` : strictement identique.
- QA `1440 x 900` et `390 x 844` : aucun debordement horizontal, aucune image cassee, console vide.
- Theme public `190430282075` : intact.

## Preview

`https://milaura-2.myshopify.com/collections/pieces-rares?preview_theme_id=201797534043`

## Gate suivant

Attendre le retour visuel de Patrice sur la V2. Aucun live avant GO explicite.
