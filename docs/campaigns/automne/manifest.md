# Manifeste Selection d automne

Date : 2026-09-22
Mise a jour : 2026-09-24

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

## Proposition Home V4 rejetee

Statut au 2026-09-24 : `REJETEE VISUELLEMENT, CONSERVEE COMME TRACE LOCALE, NON LIVE`.

Cette premiere proposition Home regroupait trop de bracelets et son accent branche plus boucles ne respectait pas suffisamment la physique attendue. Elle ne doit pas etre publiee et ne remplace pas la V3 active dans la landing.

Produits de reference choisis par Patrice :

- Bracelet dore en amethyste, cornaline et cristal de roche
- Bracelet en cornaline 8 mm
- Bracelet dore en cornaline 6 mm
- Bracelet Iris dore en aigue-marine, cornaline et grenat 4 mm
- Bracelet dore en grenat rhodolite 3 mm

Actifs rejetes :

- `assets/milaura-automne-2026-bracelets-desktop-v4.webp`
- `assets/milaura-automne-2026-bracelets-mobile-v4.webp`
- `assets/milaura-automne-2026-branch-earrings-desktop-v4.webp`
- `assets/milaura-automne-2026-branch-earrings-mobile-v4.webp`

## Proposition Home V5 rejetee

Statut au 2026-09-24 : `REJETEE VISUELLEMENT, NON LIVE`.

La V5 conserve le fond video de feuilles, le joue en boucle continue et laisse l animation visible derriere la copie. Elle applique la correction de composition demandee : trois branches d erable japonais nues, cinq bracelets distincts enroules autour du bois avec une lecture credible de la gravite et des occultations, puis les boucles en grenat posees directement dans une flaque peu profonde aux reflets orange. Quelques feuilles tombees restent dans la flaque ; aucune feuille n est attachee aux branches et aucune forme de goutte ne contient les boucles.

Actifs proposes :

- `assets/milaura-automne-2026-composition-branches-eau-desktop-v5.webp`
- `assets/milaura-automne-2026-composition-branches-eau-mobile-v5.webp`

Provenance : generation avec l outil Imagegen natif le 2026-09-24, puis conversion WebP locale avec transparence conservee. Le prompt final impose trois branches nues, exactement cinq bracelets, le passage visible de chaque branche dans son bracelet, aucun bijou dans la navigation, et des boucles posees directement sur une flaque sans socle ferme. Les PNG sources de travail sont conserves sous `~/.codex/generated_images/01a0d203-c498-7713-b05a-b032e52e4ed1/`.

QA preview : theme prive `201797534043`, bureau `1440 x 900` et mobile `390 x 844`, aucun debordement, medias responsive complets, fond video en lecture et `loop=true`. Le theme public `190430282075`, Shopify Admin, la landing Automne et ses medias V3 restent intouches.

## Proposition Home V6 en preview

Statut au 2026-09-24 09:30 CEST : `PREVIEW TECHNIQUE PASS, GO VISUEL PATRICE EN ATTENTE, NON LIVE`.

La V6 preserve le fond video et repartit les cinq bracelets sur quatre plans independants :

- deux bracelets surdimensionnes, coupes par le bord gauche et legerement superposes ;
- une branche nue entrant depuis la droite avec le bracelet en cornaline 8 mm et le bracelet dore en grenat rhodolite 3 mm suspendus sous le bois ;
- le bracelet Iris au premier plan, pose sur un socle bas en pierre sombre ;
- les boucles en grenat posees directement dans une flaque dont le bord inferieur reste hors cadre.

Actifs proposes :

- `assets/milaura-automne-2026-puddle-earrings-desktop-v6.webp`
- `assets/milaura-automne-2026-puddle-earrings-mobile-v6.webp`
- `assets/milaura-automne-2026-branch-bracelets-desktop-v6.webp`
- `assets/milaura-automne-2026-branch-bracelets-mobile-v6.webp`
- `assets/milaura-automne-2026-left-bracelets-v6.webp`
- `assets/milaura-automne-2026-iris-stone-plinth-v6.webp`

Provenance : generation avec l outil Imagegen natif a partir des cinq images produit publiques de MilAura et de la reference de suspension fournie par Patrice. Les six PNG sources sont conserves sous `~/.codex/generated_images/01a0d203-c498-7713-b05a-b032e52e4ed1/`, puis convertis en WebP avec transparence alpha preservee. Le montage reste separe dans le theme afin de pouvoir positionner chaque plan sans regenerer toute la scene.

QA preview : theme prive `201797534043`, bureau `1440 x 900` et mobile `390 x 844`, aucun debordement, quatre plans charges sans image cassee, fond video en lecture et `loop=true`, aucune erreur navigateur. Theme Check sans erreur avec seize avertissements historiques hors lot. Pullback prive `9/9` identique. Le theme public `190430282075`, Shopify Admin, la landing Automne et ses medias V3 restent intouches.

## Hero Home V7 en preview du 2026-09-24

- Composition active : video Automne originale, branche desktop V6 validee avec deux bracelets suspendus et flaque avec boucles en grenat au bord inferieur droit.
- Elements retires : deux bracelets entre-meles au bord gauche et bracelet Iris sur socle.
- Mobile : video de fond seule pendant la validation desktop.
- Higgsfield Kling 3.0 a ete teste sur deux rendus, 32 credits au total. Le second rendu stabilise la composition, mais sa branche aplatie remonte dans la navigation ; il reste un actif d exploration et n est pas reference par le template.
- Theme prive `201797534043` : PASS technique et navigateur. Theme public `190430282075` intact.
- Gate : GO visuel Patrice, puis GO live distinct.
- Preuve : [checkpoint V7](../../checkpoints/2026-09-24-1001-autumn-home-hero-v7-preview.md).

## Hero Home V8 responsive valide du 2026-09-24

- GO visuel Patrice recu pour la composition desktop V7, puis pour le nouveau hook et le passage au mobile.
- Surtitre : `SELECTION D OCTOBRE`.
- H1 : `L automne vous va si bien`.
- Signature : `Grenat & cornaline`.
- Texte : `Decouvrez une selection de bijoux et de mineraux en grenat et en cornaline, choisis pour leurs nuances profondes, du rouge sombre a l orange lumineux.`
- CTA : `DECOUVRIR LA SELECTION`.
- Mobile : branche et deux bracelets dans la moitie haute, flaque et boucles au bord inferieur, puis copie sous le media. Aucun bijou ne masque le texte.
- QA privee `390 x 844` et `1440 x 900` : aucun debordement, video en lecture et boucle automatique confirmee apres plus de huit secondes.
- Pullback prive `8/8` identique.
- Release live a 11:34 CEST : commit `9ed6cee2`, push cible de huit fichiers sur `190430282075`, pullback live `8/8` identique et QA publique sans preview en `390 x 844` puis `1440 x 900`.
- Preuve : [checkpoint V8](../../checkpoints/2026-09-24-1130-autumn-home-hero-v8-release.md).

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
