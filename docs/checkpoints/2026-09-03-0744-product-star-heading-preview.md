# Checkpoint MilAura, hierarchie du produit star

Date : 2026-09-03 07:44 CEST

## Demande

Patrice demande que le surtitre et le nom du produit star apparaissent avant le bento, sur les landings Aigue-marine et Sodalite. Le descriptif court, le prix et le CTA doivent suivre le bento.

## Resultat prive

- Aigue-marine : `Le produit star`, puis `Bague Lotus en aigue-marine`, bento trois photos, descriptif, prix et CTA.
- Sodalite : `Le produit star`, puis `Bracelet Horus dore en sodalite 6 mm`, bento trois photos, descriptif, prix et CTA.
- Le titre n'est pas duplique dans le bloc descriptif.
- Le bloc descriptif mobile est ramene a une hauteur compacte de 300 px minimum.
- Sur desktop, le bento et son panneau descriptif restent alignes sur une hauteur de 560 px maximum.

## Fichiers

- `assets/milaura-campaign-landing.css`
- `sections/milaura-campaign-landing.liquid`
- `sections/milaura-sodalite-landing.liquid`
- `docs/workstreams.md`

## Validation

- `git diff --check` : PASS.
- `python3 tools/check_copywriting.py` : PASS, 284 fichiers controles.
- Theme Check pendant le push prive : 0 erreur et 16 warnings historiques hors lot.
- QA navigateur sur Aigue-marine et Sodalite : 360 x 800, 390 x 844, 430 x 932 et 1440 x 1000.
- Ordre DOM et visuel valide : titre avant le media, descriptif apres le media sur mobile, media et descriptif cote a cote sur desktop.
- Trois images de bento chargees sur chaque page.
- Aucun debordement horizontal sur les huit controles.
- CTA a 44 px de hauteur sur les huit controles.
- Pullback du theme prive `200259043675` : 3 fichiers sur 3 identiques a la source.

SHA-256 :

- `assets/milaura-campaign-landing.css` : `2f9326a13f37d407fbbc1d81233deb57ff837fb36223e7b6a9d57fc7a14336d8`
- `sections/milaura-campaign-landing.liquid` : `f0776d1f3d53552ebede4efe5eddb00cff290d263e49dd3b28d37e467190fc0a`
- `sections/milaura-sodalite-landing.liquid` : `32ed6548d7fa3eba0bda73897b7c2a1311bea7d353869fd6c6bf35ccc67ef972`

## Etat et limites

- Branche : `codex/milaura-campaign-landing-polish3-20260902`.
- Commit d'ajustement : `a3fee49336591423ad734986c246b0048a852ec7`.
- Preview Aigue-marine : `https://milaura-2.myshopify.com/collections/par-pierre-aigue-marine?preview_theme_id=200259043675&view=milaura-campaign-aigue`.
- Preview Sodalite : `https://milaura-2.myshopify.com/collections/selection-de-karine?preview_theme_id=200259043675`.
- Aucun changement sur le theme de developpement ou le live.
- Aucune affectation Shopify Admin, integration Git ou publication.
- Prochaine porte : verdict visuel de Patrice.
