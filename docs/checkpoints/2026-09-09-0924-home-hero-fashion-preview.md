# Hero accueil mode MilAura, preview Shopify

Date : 2026-09-09 09:24 CEST

Statut : `GO VISUEL PATRICE, SOURCE POUSSEE, PREVIEW SHOPIFY PASS, NON LIVE`

## Resultat retenu

- Surtitre : `Bijoux en pierres naturelles`
- H1 : `Vos emotions ont du style.`
- Texte : `Choisissez votre bijou, votre pierre et ses vertus.`
- CTA : `Voir tous les bijoux`
- Destination CTA : `/collections/bijoux-pierres-naturelles`
- Desktop : `assets/milaura-home-hero-fashion-chloe-parure-desktop-v3b.webp`
- Mobile : `assets/milaura-home-hero-fashion-chloe-parure-mobile-v4.webp`

Chloe reste au service de la parure. Le collier Nuage en aigue-marine, le bracelet Eira en amethyste, la bague en sodalite et les boucles Auren en agate sont visibles a une echelle anatomique coherente.

## Source et Git

- Branche : `codex/milaura-home-hero-fashion-20260908`
- Commit creation : `96991f8f`
- Merge de mise a niveau depuis `origin/codex/milaura-integration` : `bc298bc5`
- Commit du GO visuel : `ef1e7af0`
- Branche distante poussee et worktree propre avant cette documentation.

Les variantes non retenues ont ete archivees hors du theme. L'image mobile V3 rejetee pour son oeil ferme et son derive WebP sont dans la Corbeille et ne doivent plus etre utilises.

## Preview Shopify

- Theme non publie : `201115566427`, `Copie de dawn-X-milaura/main`
- URL : `https://milaura-2.myshopify.com?preview_theme_id=201115566427`
- Push cible uniquement :
  - `sections/milaura-hero-portal.liquid`
  - `assets/milaura-home-hero-fashion-chloe-parure-desktop-v3b.webp`
  - `assets/milaura-home-hero-fashion-chloe-parure-mobile-v4.webp`
- Pullback : `3/3` identique bit a bit.

SHA-256 :

- Section : `c9931125c40efe641bcab3aa1c47687bcf095b12f174349bd48ef6eb78012327`
- Desktop : `7b0fffe49366fba6568123e44fd99e843366296895a55de65dfa6a67cead62f1`
- Mobile : `99324393c5f028733b2ee70f68847a858ac1d23692287181354dc321204a0a44`

## Verification

- `shopify theme check` : 0 erreur, 16 avertissements historiques hors lot.
- Controle copywriting : PASS, 335 fichiers controles.
- Preview mobile `390 x 844` : H1 et CTA corrects, image mobile chargee en `941 x 1672`, deux yeux ouverts, quatre types de bijoux visibles, aucun debordement horizontal.
- Preview desktop `1440 x 900` : image bureau chargee en `1672 x 941`, produit prioritaire, texte lisible, aucun debordement horizontal.
- CTA clique dans la preview : navigation correcte vers `https://milaura.fr/collections/bijoux-pierres-naturelles`.
- Erreurs navigateur : aucune.

## Gate restante

La preview n'est pas le live. Aucun fichier n'a ete pousse sur le theme public `190430282075` et la branche d'integration n'a pas ete modifiee. Attendre un GO explicite de Patrice pour `integration + live`, puis pousser uniquement les trois fichiers nommes, effectuer le pullback `3/3` et verifier la Home publique en mobile et bureau.
