# Correction de la composition Automne transparente

Date : 2026-09-22 17:17 CEST

Statut : `QA PRIVEE PASS, GO VISUEL PATRICE EN ATTENTE, LIVE FERME`

## Motif

Patrice a refuse le montage precedent : les photos produit restaient visibles comme des rectangles recadres, notamment autour du bracelet cornaline. Ce rendu ne respectait ni le brief ni le niveau visuel MilAura.

## Correction produite

- Generation native de deux assets responsives a partir des quatre references reelles : collier grenat rouge 6 mm, boucles pendantes grenat rouge 12 mm, bracelet grenat rouge 8 mm et bracelet cornaline 10 mm.
- Prompt de production : composition e-commerce premium, fidelite stricte aux bijoux references, sujets entierement visibles et correctement espaces, transparence alpha reelle, aucun fond, texte, feuille, decor ou mannequin, aucune ombre rectangulaire.
- Desktop : `assets/milaura-automne-2026-composition-bijoux-desktop-v2.webp`, `1536 x 1024`, 211 Ko, SHA-256 `36a5ecc8854ff0db3716981a4587727a0a3ae2b0c647ea9ef89b42db004252a7`.
- Mobile : `assets/milaura-automne-2026-composition-bijoux-mobile-v2.webp`, `1122 x 1402`, 291 Ko, SHA-256 `26a8f344247f54ea41c35e7a2bb9fe956a5243ef3ff978eea91e0194553d0282`.
- `sections/milaura-selection-atelier.liquid` accepte une composition desktop et son alternative mobile via un seul `picture`, avec fallback preserve vers les anciens emplacements individuels.
- `templates/index.json` reference uniquement les deux nouvelles compositions pour la campagne Automne.

## Theme prive et QA

- Theme prive uniquement : `200259043675`, `MilAura Sodalite Rentree Preview 2026-08-21`.
- Preview : `https://milaura-2.myshopify.com?preview_theme_id=200259043675`.
- Mobile `390 x 844` : WebP mobile charge en `1122 x 1402`, largeur document 390, aucun overflow, quatre bijoux entierement detoures, titre et CTA sans collision, video 8 secondes en `readyState=4`, aucune erreur media.
- Desktop `1440 x 900` : WebP desktop charge en `1536 x 1024`, texte a gauche, composition a droite, aucun rectangle parasite ni overflow.
- Journal navigateur final : aucune erreur ni alerte.
- `shopify theme check` : 0 erreur, 16 avertissements historiques hors lot.
- Aucun mannequin : le mouvement vient de la video feuilles et les bijoux restent le sujet.

## Pullback

- Premier appel Shopify CLI affecte par le defaut local intermittent `Maximum call stack size exceeded`; aucune preference n a ete supprimee ou modifiee.
- Second appel cible reussi.
- Section relue identique : SHA-256 `87441e9da758ca3d36ac579b9ac9856ed5a692078627d966ceef7901ccb2f1b7`.
- Les deux WebP relus sont strictement identiques aux sources locales, SHA-256 ci-dessus.
- Le bloc `sections.bestsellers` de `templates/index.json` est identique apres pullback. Shopify normalise seulement les six cles Hero historiques inconnues du schema ancien du theme prive.

## Limites et gates

- Aucun push live, aucune mutation Shopify Admin, collection, produit, stock, prix, canal, Ads, Pinterest ou reseau social.
- La preview attend le GO visuel explicite de Patrice.
- La landing et les recommandations restent bloquees tant que le perimetre final n est pas tranche entre grenat plus cornaline et grenat plus aigue-marine, et tant que les produits DRAFT ne sont pas verifies ACTIVE.
