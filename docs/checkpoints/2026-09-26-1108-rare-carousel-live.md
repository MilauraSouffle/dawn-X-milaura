# Home et landing Pieces rares, release live du 2026-09-26

## Decision et perimetre

- GO live explicite de Patrice recu le 2026-09-26.
- Source : branche `codex/milaura-rare-carousel-preview-20260926`, commit `581cccf4`.
- Integration : branche `codex/milaura-integration`, merge `f5ade537`.
- Theme Shopify public : `190430282075`.
- Theme prive de validation : `201935323483`.
- Aucun produit, prix, stock, reglage Shopify Admin, navigation ou Ads modifie.

## Fichiers de theme publies

- `assets/milaura-home-rare-carousel.css`
- `assets/milaura-home-rare-carousel.js`
- `assets/milaura-rare-cutout-cyanite.webp`
- `assets/milaura-rare-cutout-geode.webp`
- `assets/milaura-rare-cutout-grenat.webp`
- `assets/milaura-rare-cutout-lapis.webp`
- `assets/milaura-rare-cutout-zoisite.webp`
- `assets/milaura-rare-pieces-f04-selection-v4.avif`
- `assets/milaura-rare-pieces-landing.css`
- `sections/milaura-home-rare-carousel.liquid`
- `sections/milaura-rare-pieces-landing.liquid`
- `templates/collection.milaura-pieces-rares.json`
- `templates/index.json`

Le push a ete cible, avec `--nodelete --strict`. Le template Home a ete repousse seul apres le premier envoi pour enregistrer le schema de la nouvelle section. Le pullback final du live est strictement identique aux treize sources locales, `13/13`.

## Verification technique

- `git diff --check` : conforme.
- `node --check assets/milaura-home-rare-carousel.js` : conforme.
- `shopify theme check` : `396` fichiers controles, `0` erreur, `16` avertissements historiques dans huit fichiers hors lot.
- Aucun fichier concurrent sale ou non suivi du checkout d integration n a ete ajoute, modifie, retire ou stage.

## QA publique sans preview bar

### Home, bureau 1440 x 1000

- largeur du document exacte, aucun debordement horizontal;
- carousel en grille et panneau photographie visibles;
- CTA photographie `Voir toute la collection` visible;
- CTA mobile masque;
- cinq detourages charges;
- titre produit calcule a `23px`;
- ecarts image-titre mesures sur les cinq slides : `32,40px`, `30,40px`, `30,40px`, `51,33px`, `57,80px`.

### Home, mobile 390 x 844

- largeur du document exacte, aucun debordement horizontal;
- panneau mannequin masque;
- CTA `Voir toute la collection` visible sous le carousel;
- cinq detourages charges en largeur naturelle `1254px`;
- titre produit calcule a `25,74px`;
- slide active controlee avec `43,60px` entre le visuel et le titre.

### Landing Pieces rares

- bureau `1280 x 720` et mobile `390 x 844` controles publiquement;
- un seul `h1`, hero charge et CTA de hero absent;
- trois vues de geode chargees;
- six cartes catalogue et compteur `6 pieces`;
- aucune largeur parasite;
- aucune erreur navigateur sur le controle mobile final.

## Etat final

`FERME, INTEGRE, POUSSE ET LIVE VERIFIE` au 2026-09-26 11:08 CEST. Les changements concurrents visibles dans le checkout d integration restent preserves et hors commit.
