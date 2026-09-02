# Checkpoint MilAura, Polish 3 landing dediee Aigue-marine

Date : 2026-09-02 18:56 CEST

## Autorisation et limite

- GO recu : `GO PREVIEW POLISH 3 - TEMPLATE LANDING DEDIEE + AIGUE-MARINE`.
- Perimetre execute : code source, theme Shopify prive et controle visuel.
- Non autorise et non execute : integration dans le checkout principal, affectation du template dans Shopify Admin, push sur le theme de developpement, publication live et Ads.
- Patrice conserve les GO visuel, integration et live.

## Resultat

- Moteur reutilisable cree dans `sections/milaura-campaign-landing.liquid` et `assets/milaura-campaign-landing.css`.
- Configuration Aigue-marine creee dans `templates/collection.milaura-campaign-aigue.json`.
- Ordre commercial : Hero existant, produit star en bento trois photos, selection de quatre autres bijoux, contenu detaille sur la pierre, liens vers les autres pierres.
- Produit star : `bague-lotus-reglable-en-argent-925-et-aigue-marine-naturelle`.
- Titre editorial visible : `Bague Lotus en aigue-marine`.
- Les composants et fichiers Sodalite existants sont restes inchanges.

## Preview privee

- Theme : `200259043675`, MilAura Sodalite Rentree Preview 2026-08-21.
- URL : `https://milaura-2.myshopify.com/collections/par-pierre-aigue-marine?preview_theme_id=200259043675&view=milaura-campaign-aigue`
- Aucun template n'a ete affecte a la collection dans Shopify Admin.

## Controles

- `git diff --check` : PASS.
- JSON du template apres retrait de l'en-tete Shopify : PASS avec `jq empty`.
- `python3 tools/check_copywriting.py` : PASS, 284 fichiers controles.
- `shopify theme check --fail-level error` : PASS, 0 erreur et 16 warnings historiques dans huit fichiers hors lot.
- QA navigateur : 360 x 800, 390 x 844, 430 x 932 et 1440 x 1000.
- Aucune largeur ne presente de debordement horizontal.
- Un seul H1, trois images dans le bento, quatre cartes de selection et CTA produit de 44 px de haut.
- Les images du bento et les images des cartes ont charge avec une largeur naturelle non nulle.
- Le contenu detaille sur l'aigue-marine commence apres la selection produit.
- Pullback du theme prive : 3 fichiers sur 3 identiques a la source.

SHA-256 du pullback final :

- `assets/milaura-campaign-landing.css` : `97274a7102fda7dace60a5042fb1170c8a867ecc4ed21af8b59503c583c326e2`
- `sections/milaura-campaign-landing.liquid` : `cd349e5e7f7683365d89c1427e27c254b8c9a1e713246d0bf477cce6b659cd36`
- `templates/collection.milaura-campaign-aigue.json` : `812952a3f19146f1a072a0f0b03ef7ac8799ba849209474bb0c7f0d1895dace6`

## Git

- Branche : `codex/milaura-campaign-landing-polish3-20260902`.
- Base canonique : `d5fddc4ac2c3576921f402aa2b09cfd7737ace36`.
- Commit implementation : `1077537d2e71e7e38f486f21e1a78c56f1512a6c`.
- Prochaine porte : verdict visuel de Patrice. Ne pas integrer ni publier sans un GO distinct.
