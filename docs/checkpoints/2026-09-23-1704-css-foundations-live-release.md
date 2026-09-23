# Release live des fondations CSS et du polish MilAura

Date : 2026-09-23 17:04 CEST

Statut : FERME, LIVE ET VERIFIE

## Decision visuelle finale

- La jonction entre le hero de la Home et la campagne Automne reste vide de contenu commercial supplementaire.
- Aucun second bandeau defilant ni bloc de reassurance n a ete ajoute : le bandeau avantages du header remplit deja ce role.
- L espace blanc venait de deux regles du hero qui imposaient `42px` a `62px` de padding dans une autre section avec `!important`.
- Ces deux regles ont ete supprimees. Le hero et la campagne Automne se touchent maintenant sans trou ni trait.
- Le controle CSS interdit desormais au hero de piloter l espacement interne de la campagne saisonniere.

## Git et integration

- Branche de travail : `codex/milaura-css-foundations-20260923`.
- Branche d integration : `codex/milaura-integration`.
- Commits fonctionnels integres :
  - `136b6347` : fondations CSS et extraction des styles.
  - `23dbe930` : polish des heroes et des transitions Home.
  - `deffcd75` : suppression du dernier espace Home vers Automne.
- Integration fast-forward effectuee et poussee sur `origin/codex/milaura-integration`.
- Les modifications et fichiers non suivis deja presents dans le checkout d integration ont ete preserves.

## Deploiement Shopify

- Theme public : `190430282075`.
- Push strictement cible avec `--allow-live --nodelete --strict`.
- Fichiers deployes :
  - `assets/milaura-destination-landing.css`
  - `assets/milaura-home-karine-selection.css`
  - `assets/milaura-home-seasonal.css`
  - `assets/milaura-home-transitions.css`
  - `sections/milaura-hero-portal.liquid`
  - `sections/milaura-home-karine-selection.liquid`
  - `sections/milaura-selection-atelier.liquid`
  - `sections/milaura-sodalite-landing.liquid`
  - `templates/collection.milaura-pierre-sodalite.json`
  - `templates/collection.selection-automne.json`
- Snapshot avant deploiement : `/private/tmp/milaura-css-live-before-20260923-NOmKW7`.
- Pullback apres deploiement : `/private/tmp/milaura-css-live-after-20260923-vFwTnH`.
- Egalite locale et theme public : `10/10` fichiers identiques par hash Git.

## Verification technique

- `python3 tests/css_contract_test.py` : PASS, quatre assets conformes et trois sections Liquid sans CSS inline.
- `git diff --check` : PASS.
- `shopify theme check` : aucune erreur, 16 avertissements historiques hors lot.
- Routes publiques :
  - `https://milaura.fr/` : HTTP `200`.
  - `https://milaura.fr/collections/selection-automne` : HTTP `200`.
  - `https://milaura.fr/collections/par-pierre-sodalite` : HTTP `200`.

## Verification visuelle publique

- QA effectuee hors mode preview sur la Home, Automne et Sodalite.
- Mobile `390 x 844` et bureau reel Chrome `1512 x 751`.
- Home : padding superieur de la campagne `0px`, ecart entre sections `0px`, ecart entre medias `0px`.
- Description Automne mobile : Encre, graisse 500, opacite 1.
- Couche produit Automne : bord bas aligne sur le bord bas du media, delta `0px`.
- Landing Automne et Sodalite : titres integralement contenus dans le hero sur mobile et bureau.
- Aucun debordement horizontal sur les trois routes.
- Les erreurs console relevees concernent uniquement Shopify consentement et telemetry, l ancienne preview bar et une extension Chrome. Aucun message ne pointe vers les fichiers deployes.

Shopify Admin, les produits, prix, stocks, medias, collections, canaux de vente, navigation, Ads et configuration du theme sont restes intouches.
