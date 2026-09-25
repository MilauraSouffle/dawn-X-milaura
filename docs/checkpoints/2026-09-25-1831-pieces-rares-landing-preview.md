# Pieces rares, V1 en preview

Date : 2026-09-25 18:31 CEST

## Statut

- PASS technique.
- Preview privee disponible sur le theme Shopify `201797534043`.
- GO visuel de Patrice requis avant toute integration ou publication live.
- Theme public `190430282075` intact.

## Direction realisee

- Hero plein cadre turquoise avec le mannequin au collier bleu valide sur la Home.
- H1, texte et action en HTML, separes de l image.
- Sur mobile, photographie avant le texte pour montrer immediatement le produit et le mannequin.
- Trois reperes de selection condenses entre le Hero et la piece vedette.
- Bento de la geode compose de trois photographies exactes sur bureau et mobile.
- Origine, poids et dimensions exposes comme faits distincts.
- Catalogue place apres la piece vedette avec un compteur reel de six produits, hors geode.

## Fichiers de la preview

- `assets/milaura-hero-pieces-rares-lapis.webp`
- `assets/milaura-hero-pieces-rares-lapis-mobile.webp`
- `assets/milaura-rare-pieces-landing.css`
- `sections/milaura-rare-pieces-landing.liquid`
- `templates/collection.milaura-pieces-rares.json`

## Verifications

- `node --test tests/rare-pieces-landing.test.mjs` : `7/7`.
- `git diff --check` : PASS.
- `shopify theme check --path .` : aucune erreur ; seize avertissements historiques dans huit fichiers hors lot.
- Pullback du theme prive : `5/5` fichiers strictement identiques au worktree.
- QA `1440 x 900` : Hero `1440 x 780`, aucun debordement horizontal, trois vues visibles, aucune image cassee.
- QA `390 x 844` : bon crop mobile charge, image avant texte, aucun debordement horizontal, trois vues visibles, aucune image cassee.
- Console navigateur : aucune erreur et aucun avertissement.

## Preview

`https://milaura-2.myshopify.com/collections/pieces-rares?preview_theme_id=201797534043`

## Gate suivant

Patrice donne ou refuse le GO visuel. En cas de GO, integrer le commit dans le checkout d integration, revalider, puis demander un GO live distinct.
