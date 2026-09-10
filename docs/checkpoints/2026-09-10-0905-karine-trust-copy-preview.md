# Conseils de Karine dans les bandes de reassurance

Date : 2026-09-10 09:05 CEST
Statut : preview validee techniquement, live non modifie
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
- Base : `origin/codex/milaura-integration` au commit `2011f3a4`
- Theme prive : `200974958939`
- Theme public non touche : `190430282075`
- Pullback des sept fichiers modifies : `7/7` strictement identique
- Dependances de preview inchangees ajoutees au theme prive : `assets/milaura-all-jewelry-landing.css`, `assets/milaura-hero-editorial-collection-all-jewelry-desktop.webp`, `assets/milaura-hero-editorial-collection-all-jewelry-mobile.webp`, pullback `3/3` strictement identique

## Verifications

- Controle copywriting MilAura : PASS, 338 fichiers controles
- `shopify theme check` : zero erreur, seize avertissements historiques hors lot
- Mobile `390 x 844` : quatre pages, texte exact visible une fois, aucun debordement
- Bureau `1440 x 900` : quatre pages, texte exact visible une fois, aucun debordement
- Theme rendu confirme : `200974958939`
- Erreurs navigateur : aucune sur les quatre pages

Pages controlees :

- `/pages/bijoux-par-pierre`
- `/collections/bijoux-pierres-naturelles`
- `/pages/pierres-de-naissance`
- `/pages/cadeaux-anniversaire-de-mariage`

## Gate suivante

Attendre un GO live explicite de Patrice avant integration sur `codex/milaura-integration` et push cible vers le theme public `190430282075`.
