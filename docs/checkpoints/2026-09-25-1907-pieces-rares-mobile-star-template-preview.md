# Pieces rares, Hero mobile et produit star

Date : 2026-09-25 19:07 CEST

## Correction de cadrage

- La validation de Patrice portait sur le Hero bureau, pas sur sa version mobile.
- Le Hero bureau reste inchange et mesure exactement `480px`.
- La decision V4 `La piece phare` est remplacee par le motif deja utilise sur les autres landings MilAura : petit libelle turquoise `Le produit star`, grand titre produit, puis composition media.

## Implementation

- Mobile sous `750px` : Hero photographique unique, image plein cadre, voile sombre progressif en partie basse, H1 et CTA integres a la photographie.
- L introduction du Hero est masquee uniquement sur mobile pour ne pas recouvrir le collier.
- La hauteur mobile est bornee par `clamp(620px, 90svh, 680px)`.
- Le titre de la geode devient le H2 principal de la section produit star.
- Suppression du H3 produit redondant dans la colonne d achat.
- Aucun changement de media, produit, prix, stock, collection ou contenu Admin.

## Mesures navigateur

- Bureau `1440 x 900` : Hero `480px`, bas des trois reperes a `677px`, galerie geode `410px`, overflow horizontal `0px`.
- Mobile `390 x 844` : Hero `680px`, H1 de `135px` place de `513px` a `648px`, debut des reperes a `736px`, overflow horizontal `0px`.
- Le collier reste entierement visible sur mobile et n est plus masque par le texte d introduction.
- Le rendu distant expose `LE PRODUIT STAR`, puis le H2 `Geode cathedrale d amethyste n°0256`.

## Verification

- `node --test tests/rare-pieces-landing.test.mjs` : `8/8`.
- `git diff --check` : PASS.
- Theme Check : aucune erreur ; seize avertissements historiques hors lot.
- Push cible vers le theme prive `201797534043` avec `--nodelete`.
- QA visuelle du theme Draft confirmee a `1440 x 900` et `390 x 844`.
- Theme public `190430282075` : intact.

## Preview

`https://milaura-2.myshopify.com/collections/pieces-rares?preview_theme_id=201797534043`

## Gate suivant

Attendre le GO visuel explicite de Patrice sur le Hero mobile et la section produit star avant integration ou deploiement live.
