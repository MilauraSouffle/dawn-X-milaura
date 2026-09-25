# Pieces rares, titre de la piece phare et raccord catalogue

Date : 2026-09-25 18:56 CEST

## Decisions

- Patrice valide le Hero a 100 %. Il est verrouille et reste strictement inchange dans ce lot.
- Le titre de section retenu est `La piece phare`, plus coherent avec MilAura que `Produit star`.
- Le nom exact `Geode cathedrale d amethyste n°0256` reste visible comme titre produit.
- Le grand vide entre la geode et la liste des pieces rares doit disparaitre.

## Implementation

- Ajout d un H2 de section configurable : `star_section_heading`.
- Deplacement du nom editorial de la geode dans un H3 produit au debut de la colonne d achat.
- Reduction du padding inferieur de la section vedette.
- Reduction du padding superieur du catalogue.
- Aucun changement de media, prix, stock, produit, collection, Hero ou contenu Admin.

## Mesures navigateur

- Grand ecran `1920 x 1080` : Hero `480px`, section geode `616px`, raccord composition vers titre catalogue `80px`, overflow horizontal `0px`.
- Mobile `390 x 844` : Hero conserve a `753px`, section geode `1006px`, raccord composition vers titre catalogue `68px`, overflow horizontal `0px`.
- Le rendu distant expose un H2 `La piece phare`, un H3 `Geode cathedrale d amethyste n°0256` et le H2 catalogue `Les pieces de la selection`.

## Verification

- `node --test tests/rare-pieces-landing.test.mjs` : `8/8`.
- `git diff --check` : PASS.
- Theme Check : aucune erreur ; seize avertissements historiques hors lot.
- Push cible de trois fichiers vers le theme prive `201797534043` avec `--nodelete`.
- Le pullback Shopify CLI reste bloque par l erreur locale `Maximum call stack size exceeded` sur ses preferences. Aucun dossier de preferences n a ete supprime.
- Theme public `190430282075` : intact.

## Preview

`https://milaura-2.myshopify.com/collections/pieces-rares?preview_theme_id=201797534043`

## Gate suivant

Attendre la validation finale de Patrice sur le titre et le raccord avant integration ou deploiement live.
