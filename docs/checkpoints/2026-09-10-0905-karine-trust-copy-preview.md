# Conseils de Karine dans les bandes de reassurance

Date : 2026-09-10 09:05 CEST, cloture live 2026-09-10 10:45 CEST
Statut : live deploye et verifie
Validation copy : Patrice Allié, GO explicite sur `Karine vous conseille 6j/7`

## Perimetre source

- `sections/milaura-all-jewelry-landing.liquid`
- `sections/milaura-stone-choice-landing.liquid`
- `sections/milaura-catalogue-hub.liquid`
- `templates/collection.milaura-all-jewelry.json`
- `templates/page.milaura-bijoux-pierre.json`
- `templates/page.milaura-cadeaux-mariage.json`
- `templates/page.milaura-pierres-naissance.json`

Les deux templates produit et `sections/milaura-product-advisor.liquid` restent hors perimetre. Leur texte contextuel `Équipe disponible 6j/7` est conserve.

## Recette

- Branche : `codex/milaura-karine-trust-copy-20260910`
- Base initiale : `origin/codex/milaura-integration` au commit `2011f3a4`
- Commit fonctionnel integre : `2f3345fd`
- Theme prive : `200974958939`
- Theme public : `190430282075`
- Pullback live des sept fichiers modifies : `7/7` strictement identique
- Dependances de preview inchangees ajoutees au theme prive : `assets/milaura-all-jewelry-landing.css`, `assets/milaura-hero-editorial-collection-all-jewelry-desktop.webp`, `assets/milaura-hero-editorial-collection-all-jewelry-mobile.webp`, pullback `3/3` strictement identique

Le preflight live a detecte deux ecarts par rapport a l ancienne integration : le filtrage des produits indisponibles dans `sections/milaura-catalogue-hub.liquid` et l onglet ouvert par defaut dans `templates/page.milaura-cadeaux-mariage.json`. Ces deux etats publics ont ete preserves avant le push.

## Verifications

- Controle copywriting MilAura : PASS, 338 fichiers controles
- `shopify theme check` : zero erreur, seize avertissements historiques hors lot
- Mobile public `390 x 844` : quatre pages, texte exact visible une fois, ancien texte absent, aucun debordement
- Bureau public `1440 x 900` : quatre pages, texte exact visible une fois, ancien texte absent, aucun debordement
- Theme rendu confirme : `190430282075`
- Erreurs navigateur : aucune sur les quatre pages

Pages controlees :

- `/pages/bijoux-par-pierre`
- `/collections/bijoux-pierres-naturelles`
- `/pages/pierres-de-naissance`
- `/pages/cadeaux-anniversaire-de-mariage`

## Cloture

Lot ferme. Les fiches produit restent hors perimetre et conservent `Équipe disponible 6j/7`.
