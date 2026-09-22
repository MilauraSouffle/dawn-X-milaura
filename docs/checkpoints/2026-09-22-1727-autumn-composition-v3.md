# Composition Automne V3

Date : 2026-09-22 17:27 CEST

Statut : `QA PRIVEE PASS, NOUVEAU GO VISUEL PATRICE EN ATTENTE, LIVE FERME`

## Retour traite

Patrice a refuse la V2 : le collier entier et centre occupait trop la scene, tandis que les boucles semblaient flotter sans logique. Il a demande un collier beaucoup plus haut, coupe environ a moitie et tombant, le maintien des bracelets entrelaces, et des boucles reellement accrochees.

## Direction V3

- Le collier grenat entre par le haut, reste partiellement hors cadre et descend en courbe ouverte.
- Les bracelets grenat et cornaline restent entrelaces dans la partie basse.
- Les boucles grenat sont suspendues a une branche fine qui entre depuis le bord droit. Elles ne flottent plus.
- Aucun mannequin, texte ou fond n est integre. La transparence alpha laisse la video Automne construire le decor.
- Generation realisee avec l outil natif `image_gen` a partir des quatre references produit locales.

Prompt final resume : composition e-commerce premium asymetrique, collier fortement remonte et coupe par le bord haut, bracelets entrelaces conserves, boucles physiquement suspendues a une branche automnale fine, fidelite stricte des quatre bijoux, transparence alpha reelle, aucun bijou supplementaire, aucune feuille, aucun texte, aucun mannequin et aucun fond rectangulaire.

## Assets

- Desktop : `assets/milaura-automne-2026-composition-bijoux-desktop-v3.webp`, `1536 x 1024`, 215 Ko, SHA-256 `e22322ad1d648d5a9818f595735a9270340ae91d5970b77e7f19d5d84f9fa6b0`.
- Mobile : `assets/milaura-automne-2026-composition-bijoux-mobile-v3.webp`, `1122 x 1402`, 260 Ko, SHA-256 `2adb6157a53d531db25d43aac3429a90848a5d4305a2ec0408f189b77ccfe1f5`.
- `templates/index.json` reference exclusivement ces deux assets pour la composition active.

## QA privee

- Theme prive : `200259043675`, `MilAura Sodalite Rentree Preview 2026-08-21`.
- Preview : `https://milaura-2.myshopify.com?preview_theme_id=200259043675`.
- Mobile `390 x 844` : WebP mobile charge en `1122 x 1402`, document 390, aucun overflow, collier coupe par le haut, boucles soutenues, bracelets entrelaces, titre et CTA lisibles, video 8 secondes en `readyState=4` sans erreur.
- Desktop `1440 x 900` : WebP desktop charge en `1536 x 1024`, collier coupe par le haut, composition sur la droite, texte sur la gauche, aucun overflow, video 8 secondes en `readyState=4` sans erreur.
- Journal navigateur final : aucune erreur ni alerte.
- `shopify theme check` : 0 erreur, 16 avertissements historiques hors lot.

## Pullback et gates

- Les deux WebP relus depuis le theme prive sont strictement identiques aux sources locales, SHA-256 ci-dessus.
- Le bloc `sections.bestsellers` de `templates/index.json` est identique apres pullback.
- Aucun push live, aucune mutation Shopify Admin, produit, stock, collection, prix, Ads, Pinterest ou reseau social.
- Le nouveau GO visuel de Patrice reste obligatoire avant toute suite.
