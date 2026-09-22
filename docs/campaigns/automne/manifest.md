# Manifeste Selection d automne

Date : 2026-09-22

Statut : `DRAFT, LANDING PRIVEE QA PASS, GO VISUEL PATRICE APPROUVE, COLLECTION ADMIN A CREER`

## Destination permanente

- URL cible : `/collections/selection-automne`
- Reutilisation annuelle : oui
- Template : `templates/collection.selection-automne.json`
- Moteur : `sections/milaura-sodalite-landing.liquid`, schema public `Landing de selection`
- Cycle suivant : `ACTIVE`, puis `OFF_SEASON`, sans changement de handle

La route cible renvoie encore `404` au 2026-09-22. La preview utilise temporairement `/collections/selection-de-karine?view=selection-automne` sur le theme prive `200259043675`. Ce porteur de preview ne devient pas la destination publique de la campagne.

## Positionnement valide

- Nom : `Selection d automne`
- Pierres : `Grenat & cornaline`
- H1 : `Selection d automne, grenat & cornaline`
- Produit star : `bracelet-iris-dore-en-aigue-marine-cornaline-et-grenat-4-mm`
- Structure : Hero anime, produit star, grille produits, guide Grenat, guide Cornaline
- Mannequin : aucun dans le Hero actuel ; le produit reste le sujet

## Medias actifs

- `assets/milaura-automne-2026-feuilles-desktop.mp4`
- `assets/milaura-automne-2026-feuilles-mobile.mp4`
- `assets/milaura-automne-2026-feuilles-desktop-poster.webp`
- `assets/milaura-automne-2026-feuilles-mobile-poster.webp`
- `assets/milaura-automne-2026-composition-bijoux-desktop-v3.webp`
- `assets/milaura-automne-2026-composition-bijoux-mobile-v3.webp`

La V3 est la seule composition validee. Le collier entre par le haut et reste coupe par le cadre ; les bracelets sont entrelaces ; les boucles sont suspendues a une branche. La V2 est rejetee.

## Produits rendus dans la landing

Produit star, public HTTP 200 au 2026-09-22 :

- `bracelet-iris-dore-en-aigue-marine-cornaline-et-grenat-4-mm`

Grille, publics HTTP 200 au 2026-09-22 :

- `bracelet-dore-en-grenat-rhodolite-3-mm`
- `bracelet-en-grenat-rouge-4-mm`
- `bracelet-en-grenat-rouge-6-mm`
- `bracelet-facette-en-grenat-rouge-4-mm`
- `boucles-d-oreilles-pendantes-en-grenat-rouge-12-mm`
- `collier-en-grenat-rouge-4-mm-45-cm`
- `collier-en-grenat-rouge-6-mm-45-cm`
- `bracelet-en-cornaline-10-mm-16-a-18-cm`
- `boucles-d-oreilles-puces-en-cornaline-8-mm`

Exclus tant que la route publique renvoie `404` :

- `bracelet-en-grenat-rouge-8-mm`
- `boucles-d-oreilles-puces-en-grenat-rouge-8-mm`

## Copy de reference

Introduction : `Cette selection reunit des bracelets, des colliers et des boucles d oreilles en grenat et en cornaline. Deux pierres aux tons rouge profond et orange, faciles a associer aux mailles, au cuir et aux teintes brunes de la saison.`

CTA produit star : `Decouvrir le bracelet Iris`

Titre catalogue : `Les bijoux de la selection d automne`

## SEO et conversion

Les produits et leurs actions d achat apparaissent avant les contenus longs. Les guides Grenat et Cornaline restent apres la grille pour apporter du contexte indexable sans retarder l acces aux produits.

Avant activation publique :

1. Creer la collection Shopify `selection-automne` et lui affecter le template `selection-automne`.
2. Renseigner un title SEO et une meta description dedies.
3. Verifier HTTP 200, canonical auto-referent, sitemap, H1 unique et schema.
4. Verifier stocks, prix, disponibilite, panier et tracking Purchase avec valeur et devise.
5. Configurer les produits complementaires reciproques Grenat et Cornaline dans Search and Discovery.
6. GO visuel landing obtenu le 2026-09-22 a 19:53 CEST. Obtenir maintenant le GO Admin, puis le GO live distinct.
7. Apres mise en ligne verifiee, transmettre la nouvelle destination a la session Pinterest et aux proprietaires Ads.

## Preuves preview du 2026-09-22

- Theme : `200259043675`, non publie
- Mobile : `390 x 844`, aucun overflow
- Bureau : `1440 x 900`, aucun overflow
- Structure : un H1, dix produits publics dont un produit star, deux guides pierre
- Interactions : video pause, onglets guides et CTA produit fonctionnels
- Console : aucune erreur navigateur
- Theme Check : zero erreur, seize avertissements historiques hors lot
- Pullback : section landing, template Automne et dependance guide pierre identiques au depot
- GO visuel landing : Patrice, 2026-09-22 19:53 CEST, retour exact `go visuel tout est parfait`
- Live `190430282075` : non modifie
- Shopify Admin : non modifie
