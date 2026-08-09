# MilAura - Handoff Codex actif

Date de clôture : 2026-08-08 19:53 CEST

## Mission de reprise

Reprendre la refonte de la homepage après la publication de la sélection saisonnière d'août. La prochaine étape est le redesign des trois portes. Ne pas rouvrir P0A, les ventes complémentaires ou les automatisations.

## Lecture obligatoire

1. AGENTS.md
2. docs/project-state.md
3. docs/checkpoints/2026-08-08-1953-milaura-selection-aout-handoff.md
4. docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md
5. docs/checkpoints/2026-08-08-0712-milaura-plan-p0a-handoff.md uniquement si le détail économique ou panier est nécessaire

## Vérité live

- Boutique : https://milaura.fr.
- Thème live : dawn-X-milaura/main, ID 190430282075.
- Hero final live et validé par Patrice.
- Dock mobile V2 live.
- Sélection saisonnière d'août live sur la homepage.
- Landing live : https://milaura.fr/collections/selection-aout-2026.
- Collection Shopify : Sélection d'août 2026, ID 677642535259, handle selection-aout-2026, vingt produits.
- Les derniers déploiements ont été ciblés. Aucun push complet du thème.

## Décisions de Patrice à ne pas rouvrir

1. P0A est terminé pour continuer le plan.
2. Aucune automatisation ne doit être suspendue.
3. La livraison gratuite reste limitée à la France. L'Europe est payante et les territoires sans zone active ne doivent pas bénéficier d'une expédition gratuite.
4. Le bloc panier obsolète est retiré localement. Le moteur ScratchToReveal est conservé pour le futur module Cercle.
5. La vente complémentaire mérite une session dédiée. Elle ne fait pas partie de la reprise des trois portes.
6. L'ancienne section L'atelier MilAura est abandonnée.
7. La homepage utilise désormais une sélection saisonnière vivante : quatre produits et une landing d'environ vingt produits.
8. Le rendu actuel des trois portes en cartes dépliantes est rejeté. Le concept de guide, lui, est conservé.
9. La landing Aigue-marine reste la prochaine grande étape après le redesign des trois portes.

## Sélection saisonnière d'août

Direction validée : Maldives, lagon, lumière d'été, prune, or et aigue-marine.

Homepage validée :

- La sélection de Karine sur fond prune ;
- Août 2026 sur image de lagon ;
- une phrase descriptive sur une ligne sous le cartouche ;
- quatre cartes produits natives ;
- CTA vers toute la sélection.

Landing validée :

- bloc prune simple et premium en haut ;
- titre La sélection de Karine ;
- sous-titre Une escale minérale imaginée par Karine ;
- paragraphe validé ;
- trois informations : 20 créations, Édition août 2026, Sélection en stock ;
- image Maldives en arrière-plan derrière la grille complète ;
- vingt cartes produits ;
- aucun titre secondaire ou bloc marketing superflu.

Ce système est récurrent. Préparer la sélection de septembre ou de la rentrée avant la fin d'août, avec un nouvel univers, une nouvelle sélection d'environ vingt produits et quatre produits homepage.

## Prochaine étape : redesign des trois portes

La prochaine session doit travailler uniquement cette zone.

Direction validée :

1. Choisir mon bijou par type.
   - Cartes catégories visuelles proches des cartes produits.
   - Traitement plus prune et plus affirmé.
   - Belle photographie pour chaque catégorie.
   - Chaque carte mène à une collection ou page de type pertinente.

2. Choisir par émotion.
   - Même famille graphique.
   - Catégories émotionnelles illustrées.
   - Chaque carte mène à une page regroupant les produits correspondants.

3. Me laisser guider.
   - Ne pas créer une troisième section redondante.
   - Réutiliser et redessiner le teaser du diagnostic émotionnel déjà présent dans la homepage.
   - Tenir compte du cabochon fixe Trouver ma pierre déjà visible dans la navigation.

Méthode de reprise :

1. Inspecter sections/milaura-choice-doors.liquid et sa configuration dans templates/index.json.
2. Inspecter sections/milaura-quiz-teaser.liquid et le teaser live existant.
3. Inventorier les destinations réelles déjà disponibles par type et par émotion.
4. Proposer une architecture et un rendu desktop/mobile avant déploiement.
5. Présenter le rendu à Patrice.
6. Déployer uniquement après son GO.

## P0A, faits utiles

- paliers : cadeau à 30 EUR, livraison à 50 EUR, remise de 15 % à 80 EUR ;
- codes : MILAURA-LIV50 et MILAURA15 ;
- cadeau : variante 53142713925979 ;
- France : 5,80 EUR jusqu'à 49,99 EUR, gratuite à partir de 50 EUR ;
- MILAURA-LIV50 et MILAURA-LIV19 limités à la France et aux tarifs de 6 EUR maximum ;
- Europe : 12 EUR payants ;
- aucune zone active contrôlée le 2026-08-08 pour Guadeloupe, Martinique, La Réunion, États-Unis et reste du monde ;
- MILAURA15, le cadeau et les automatisations n'ont pas été modifiés ;
- les coûts précis par produit et la contribution exacte restent à compléter avant Ads.

## Fichiers du lot saisonnier local

- sections/milaura-selection-atelier.liquid
- templates/index.json
- assets/milaura-selection-aout-lagon.webp
- sections/milaura-seasonal-collection.liquid
- templates/collection.selection-aout-2026.json
- output/concepts/selection-aout-2026/concept.css
- output/concepts/selection-aout-2026/home-preview.html
- output/concepts/selection-aout-2026/landing-preview.html

## Fichiers sales hors lot à préserver

- templates/cart.json
- templates/cart.milaura.json
- assets/milaura-hero-proof-karine.webp
- sections/milaura-selection-atelier 2.liquid

Le dernier fichier est non suivi et son origine exacte n'est pas confirmée. Ne pas le qualifier de doublon iCloud comme un fait et ne pas le supprimer sans audit.

## Git

- Branche : codex/milaura-reconcile-2026-08-07.
- HEAD au début de la clôture : 266a9cac.
- Branche alignée avec son origin avant les modifications documentaires du handoff.
- Le lot saisonnier est live sur Shopify mais n'est pas commit ni poussé dans Git.
- Ne pas embarquer les fichiers panier, Hero ou non suivis dans un futur commit sans vérification de leur propriétaire et de leur portée.

## Validation déjà effectuée

- shopify theme check : 0 erreur et 29 avertissements historiques sur 274 fichiers ;
- git diff --check propre sur le lot saisonnier ;
- homepage contrôlée publiquement sur desktop et mobile 390 x 844 ;
- landing contrôlée publiquement sur desktop et mobile 390 x 844 ;
- CTA vers /collections/selection-aout-2026 vérifié ;
- vingt produits vérifiés sur la landing ;
- pullbacks ciblés identiques au local pour les deux fichiers homepage et les deux fichiers landing.

SHA-256 du dernier pullback :

- sections/milaura-selection-atelier.liquid : 8f3153aef3275b33361763a682a186d3f1679c2e0b91c9feb1f000e49d700a4a
- templates/index.json : fc67a0e2e5b2efe3908f13940231e407f98c4cc784a007c89c8e954a926b1604
- sections/milaura-seasonal-collection.liquid : e4ee9275088935442e9dad4851fa3e1bc61538f1e5721962cc106c16b3a25585
- templates/collection.selection-aout-2026.json : d7dd04568b117707cc0fcc027bfadd9a426b44d99813f8d05c85a1cdada46737

## Risques et dépendances

1. La version actuelle des trois portes peut être live, mais elle est visuellement rejetée.
2. Les pages de destination par type et surtout par émotion doivent être inventoriées avant de dessiner toutes les cartes.
3. Le teaser quiz existe déjà plus bas et doit être réutilisé sans duplication.
4. Le lot saisonnier doit encore être isolé dans un commit Git propre si Patrice le demande.
5. Les coûts produit exacts et délais manquent encore avant paid acquisition.
6. La campagne de septembre doit être préparée avant la fin d'août pour que le dispositif reste vivant.

## Prompt exact de reprise

> Reprends MilAura depuis docs/codex-handoff.md, docs/project-state.md et docs/checkpoints/2026-08-08-1953-milaura-selection-aout-handoff.md dans /Users/paesano/Documents/MilAura website/dawn-X-milaura. La sélection saisonnière d'août et sa landing sont terminées et live. Reprends uniquement l'étape active des trois portes. La version actuelle en cartes dépliantes est rejetée. Conçois un guide visuel avec des cartes catégories photographiées pour Choisir mon bijou par type, puis Choisir par émotion, et réutilise le teaser du diagnostic existant pour Me laisser guider. Vérifie les destinations réelles avant de coder, préserve tous les changements sales hors périmètre, et ne déploie rien sans mon GO visuel.
