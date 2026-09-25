# Cartes cadeaux Home alignées sur la section cible

Date : 2026-09-25 17:49 CEST

## Statut

`PREVIEW CIBLE PRETE, REVUE PASS, GO VISUEL PATRICE REQUIS`

Le thème public `190430282075` n'a pas été modifié. La correction est visible uniquement sur le thème privé `201797534043` :

`https://milaura-2.myshopify.com?preview_theme_id=201797534043`

## Correction de direction

Patrice a rejeté la première proposition le 2026-09-25 à 17:40 CEST : elle reprenait l'idée de cartes, mais pas le design réel de la section `Trois façons de choisir`.

La version corrigée reprend cette structure :

- surface blanche et filet or fin ;
- numéro et titre en tête ;
- composition de bijoux détourée et centrée ;
- CTA centré en pied ;
- aucune étiquette ni description dans les cartes ;
- deux cartes centrées sur bureau et rail tactile sur mobile.

## Assets et provenance

- `assets/milaura-home-occasions-birthstone-cutout-v1.webp` provient de `assets/milaura-hero-editorial-hub-birthstone-desktop.webp`.
- `assets/milaura-home-occasions-wedding-cutout-v1.webp` provient de `assets/milaura-hero-editorial-hub-wedding-desktop.webp`.
- Les deux sources ont été éditées avec le mode intégré `image_gen`, cas d'usage `background-extraction`, avec contrainte de préserver les bijoux, pierres, métaux, proportions et détails et de retirer uniquement les décors et supports.
- Les PNG transparents produits ont été convertis sans perte en WebP avec `cwebp -lossless`.
- Dimensions finales : `1254 x 1254px`, canal alpha présent.

## Fichiers de thème

- `sections/milaura-home-occasions.liquid`
- `assets/milaura-home-occasions.css`
- `assets/milaura-home-occasions-birthstone-cutout-v1.webp`
- `assets/milaura-home-occasions-wedding-cutout-v1.webp`
- réglages `home_occasions` de `templates/index.json`

## Vérifications

- `python3 tests/css_contract_test.py` : PASS.
- `git diff --check` : PASS.
- `shopify theme check` : exit `0`, aucune erreur, seize avertissements historiques hors périmètre.
- JSON Shopify : PASS après retrait du commentaire d'en-tête avant parsing.
- Pullback depuis le thème privé : égalité exacte `5/5`.
- Bureau `1440 x 900` : deux cartes `424 x 576px`, document `1440px`, aucun débordement.
- Mobile `390 x 844` : deux cartes `290 x 425px`, rail `390/650px`, aperçu de la carte suivante, aucun débordement documentaire.
- Fond de section blanc, aucune description interne, deux images `1254 x 1254px` chargées.
- Destinations inchangées : `/pages/pierres-de-naissance` et `/pages/cadeaux-anniversaire-de-mariage`.
- Console : aucun échec applicatif ; uniquement les messages d'information de hot reload du thème privé.

## Revue de finition

Verdict indépendant : `PASS`.

Les écarts avec la section source sont intentionnels et cohérents avec le brief : deux cartes centrées au lieu de trois, poids visuel égal sans carte inactive, et une seule flèche rattachée au CTA inférieur.

## Prochaine décision

Patrice donne ou non le GO visuel sur cette direction. La prochaine passe pourra ensuite polir le surtitre, le titre, la description de section, les titres de cartes et les CTA. Aucun déploiement live n'est autorisé sans GO live explicite distinct.
