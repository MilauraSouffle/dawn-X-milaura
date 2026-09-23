# Manifeste Selection d automne

Date : 2026-09-22
Mise a jour : 2026-09-23

Statut : `ACTIVE, LIVE ET VERIFIEE`

## Destination permanente

- URL cible : `/collections/selection-automne`
- Reutilisation annuelle : oui
- Template : `templates/collection.selection-automne.json`
- Moteur : `sections/milaura-sodalite-landing.liquid`, schema public `Landing de selection`
- Cycle courant : `ACTIVE`, puis `OFF_SEASON` au remplacement par la prochaine occasion, sans changement de handle
- Collection Shopify Admin : `681359311195`
- Handle Admin : `selection-automne`
- Disponibilite : canal `Boutique en ligne`
- Modele Admin actuel : `selection-automne`

La route permanente `/collections/selection-automne` repond HTTP `200` depuis la release du 2026-09-23. Le porteur de preview historique `/collections/selection-de-karine?view=selection-automne` n est pas la destination publique de la campagne.

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

Prepare dans Shopify Admin le 2026-09-22 a 19:59 CEST apres le `GO Admin` de Patrice :

1. Collection manuelle `selection-automne` creee avec dix produits verifies.
2. Titre SEO : `Bijoux grenat et cornaline : sélection d’automne | MilAura`.
3. Meta description : `Découvrez la sélection d’automne MilAura : bracelets, colliers et boucles d’oreilles en grenat et en cornaline, dans des tons rouge profond et orange.`
4. Publication maintenue a `0 canal` jusqu au GO live distinct.

Release executee le 2026-09-23 apres le GO live distinct :

1. Dix fichiers cibles pousses sur le theme public `190430282075` et pullback `10/10` identique.
2. Template `selection-automne` affecte a la collection `681359311195`.
3. Publication activee uniquement sur le canal `Boutique en ligne`.
4. Accueil et landing HTTP `200`, canonical, title, meta, H1 unique, sitemap, dix produits et deux guides verifies.
5. Aucun ordre de test, Ads, Search and Discovery ou Pinterest execute dans cette release.
6. Au remplacement par la prochaine occasion, passer Automne en `OFF_SEASON`, retirer les messages perimes et conserver son lien depuis `/pages/selections-saisonnieres`.

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
- Live `190430282075` : actif et verifie le 2026-09-23
- Shopify Admin : collection `681359311195`, URL `selection-automne`, title SEO et meta description ; publication `Boutique en ligne` ; modele `selection-automne`
- Route publique : HTTP `200`, canonical et sitemap verifies
