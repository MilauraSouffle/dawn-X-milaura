# MilAura - Handoff sélection d'août et réorientation homepage

Date : 2026-08-08 19:53 CEST

## Résultat de la session

La homepage MilAura et une nouvelle landing saisonnière sont live sur le thème Shopify principal. L'ancien concept L'atelier MilAura est abandonné au profit d'un dispositif vivant, renouvelable chaque mois ou chaque saison et utilisable comme landing d'acquisition.

La première édition est La sélection de Karine, août 2026, dans un univers plage des Maldives et lagon. Quatre produits sont présentés sur la homepage et vingt produits sur la landing.

Patrice valide le rendu final de la homepage et de la landing. La prochaine étape est le redesign complet des trois portes. Leur principe est conservé, mais leur présentation actuelle en cartes dépliantes est rejetée.

## Contexte économique et commercial

P0A est clos par Patrice.

Faits confirmés :

- cadeau à 30 EUR ;
- livraison offerte à 50 EUR ;
- remise de 15 % à 80 EUR ;
- code principal de livraison MILAURA-LIV50 ;
- code de remise MILAURA15 ;
- cadeau variante 53142713925979 ;
- livraison standard France à 5,80 EUR jusqu'à 49,99 EUR puis gratuite à 50 EUR ;
- MILAURA-LIV50 et MILAURA-LIV19 limités à la France et aux tarifs d'expédition de 6 EUR maximum ;
- Europe maintenue à 12 EUR payants ;
- aucune zone active au contrôle du 2026-08-08 pour Guadeloupe, Martinique, La Réunion, États-Unis ou reste du monde ;
- MILAURA15, le cadeau et les automatisations non modifiés ;
- ancien bloc panier retiré localement ;
- moteur ScratchToReveal conservé pour un futur module Cercle.

Coûts manquants :

- coûts unitaires exacts ;
- transport entrant ;
- emballage et paiement ;
- retours et casse ;
- coût moyen réel du cadeau ;
- contribution exacte par panier ;
- CAC maximal soutenable.

Hypothèse de travail validée pour avancer : la marge globale communiquée par Patrice permet de poursuivre la refonte éditoriale. Elle ne remplace pas un calcul produit par produit avant Ads.

La stratégie de ventes complémentaires est reportée à une session dédiée.

## Modification du plan

Ancienne direction abandonnée :

- L'atelier MilAura avec quatre produits et un CTA générique.

Nouvelle direction validée :

1. une sélection saisonnière visible sur la homepage ;
2. quatre produits mis en avant ;
3. une landing cohérente d'environ vingt produits ;
4. une rotation mensuelle ou saisonnière ;
5. une page directement exploitable pour Meta et les autres canaux d'acquisition.

Cycle éditorial prévu :

- août 2026 : Maldives et lagon ;
- fin août : préparer septembre ou la rentrée ;
- mettre à jour le mois, l'univers, les quatre produits homepage et la sélection longue ;
- conserver une cohérence visuelle entre le bloc homepage et la landing.

## Homepage finale

- cartouche horizontal fin et pleine largeur ;
- moitié gauche prune ;
- texte La sélection de Karine en aigue-marine et Dancing Script ;
- moitié droite sur l'image du lagon ;
- texte Août 2026 en prune ;
- phrase descriptive sous le cartouche sur toute la largeur ;
- quatre cartes produits natives ;
- accent aigue-marine autour des cartes ;
- CTA Découvrir toute la sélection vers la landing ;
- adaptation desktop et mobile vérifiée.

Fichiers :

- sections/milaura-selection-atelier.liquid
- templates/index.json
- assets/milaura-selection-aout-lagon.webp

L'ancien nom de fichier et l'ancre MilauraSelectionAtelier restent conservés pour compatibilité. Ils ne décrivent plus le concept éditorial.

## Landing finale

Collection Shopify :

- titre : Sélection d'août 2026 ;
- ID : 677642535259 ;
- handle : selection-aout-2026 ;
- URL : https://milaura.fr/collections/selection-aout-2026 ;
- template : selection-aout-2026 ;
- produits : 20 ;
- sélection en stock.

Bloc supérieur :

- La sélection de Karine ;
- Une escale minérale imaginée par Karine ;
- paragraphe validé sur le lagon, l'amazonite, la calcédoine, la nacre et les nuances solaires ;
- 20 créations ;
- Édition août 2026 ;
- Sélection en stock.

Grille :

- image Maldives en arrière-plan derrière toutes les cartes ;
- voile nacré pour conserver la lisibilité ;
- cartes produits natives ;
- aucun second titre ou texte marketing redondant.

Fichiers :

- sections/milaura-seasonal-collection.liquid
- templates/collection.selection-aout-2026.json

SEO :

- titre : Sélection d'août 2026 | Bijoux en pierres naturelles ;
- description : Éclats des Maldives : la sélection d'août de Karine. Vingt bijoux et créations aux nuances de lagon, de nacre et de lumière, réunis pour l'été.

## Produits

Homepage et landing :

1. collier-obsidienne-noire-boho-dore
2. bracelet-aventurine-verte-halo-dore
3. bracelet-oeil-de-tigre-cuir-brun
4. bracelet-elye-dore-nacre-amethyste-aa

Landing uniquement :

5. bracelet-elye-dore-nacre-lapis-lazuli-aa
6. boucles-doreilles-cornaline-fleur-15mm
7. bracelet-amazonite-1
8. bracelet-agate-fleur-de-cerisier
9. bracelet-turquoise
10. bracelet-fluorine-multicolore
11. boucles-doreilles-quartz-rose-4
12. boucles-doreilles-aventurine-3
13. collier-boule-06mm-jaspe-rouge-a
14. bague-azelys-doree-quartz-rose-ab
15. savon-verveine-1-piece
16. collier-calcedoine-bleue-4mm
17. collier-aurela-dore-amethyste-a
18. collier-amethyste
19. collier-amazonite
20. collier-agate-arbre

## Déploiement

- Thème live : dawn-X-milaura/main.
- ID : 190430282075.
- Déploiements ciblés uniquement.
- Homepage : section saisonnière et templates/index.json.
- Landing : section saisonnière et template de collection.
- Asset lagon poussé avec le premier lot saisonnier.
- Aucun fichier panier, Hero, trois portes ou automatisation inclus dans le dernier push.
- Aucun push complet du thème.

## Vérifications

- shopify theme check : 0 erreur, 29 avertissements historiques, 274 fichiers ;
- git diff --check propre sur le lot ;
- homepage contrôlée sur desktop ;
- homepage contrôlée en mobile 390 x 844 ;
- landing contrôlée sur desktop ;
- landing contrôlée en mobile 390 x 844 ;
- CTA homepage vérifié ;
- vingt produits vérifiés sur la landing ;
- quatre produits prioritaires vérifiés en tête ;
- pullback ciblé local/live identique.

SHA-256 :

- sections/milaura-selection-atelier.liquid : 8f3153aef3275b33361763a682a186d3f1679c2e0b91c9feb1f000e49d700a4a
- templates/index.json : fc67a0e2e5b2efe3908f13940231e407f98c4cc784a007c89c8e954a926b1604
- sections/milaura-seasonal-collection.liquid : e4ee9275088935442e9dad4851fa3e1bc61538f1e5721962cc106c16b3a25585
- templates/collection.selection-aout-2026.json : d7dd04568b117707cc0fcc027bfadd9a426b44d99813f8d05c85a1cdada46737

## Git et worktree

- Branche : codex/milaura-reconcile-2026-08-07.
- HEAD avant documentation : 266a9cac.
- Branche alignée avec origin avant ce handoff.
- Le lot saisonnier n'est pas commit ni poussé dans Git.
- Il est néanmoins live sur Shopify et vérifié par pullback.

Fichiers sales hors lot à préserver :

- templates/cart.json
- templates/cart.milaura.json
- assets/milaura-hero-proof-karine.webp
- sections/milaura-selection-atelier 2.liquid

L'origine exacte du dernier fichier n'est pas confirmée. Ne pas le supprimer et ne pas le qualifier automatiquement de doublon iCloud.

## Trois portes, nouvelle direction

La version actuelle en cartes dépliantes est rejetée. La prochaine proposition doit devenir un véritable guide de navigation.

1. Choisir mon bijou par type.
   - Cartes catégories photographiées.
   - Design proche des cartes produits.
   - Plus de présence prune.
   - Liens vers les collections par type.

2. Choisir par émotion.
   - Même système visuel.
   - Photos d'illustration fortes.
   - Liens vers les regroupements émotionnels.

3. Me laisser guider.
   - Réutiliser le teaser du diagnostic déjà présent.
   - Le redessiner au lieu de créer une section concurrente.
   - Respecter le cabochon fixe Trouver ma pierre.

Avant de coder, inventorier les destinations existantes et les catégories réelles. Présenter ensuite desktop et mobile à Patrice avant tout GO live.

## Ce qui reste à faire

1. Redessiner les trois portes selon la direction validée.
2. Construire ensuite la landing Aigue-marine.
3. Préparer la campagne saisonnière de septembre ou de la rentrée avant la fin d'août.
4. Compléter plus tard les coûts produit détaillés avant Ads.
5. Traiter les ventes complémentaires dans une session séparée.
6. Poursuivre ensuite Atelier des émotions, Karine et preuves, Sur mesure, PDP, Cadeaux, Journal puis Cercle.

## Prompt de reprise

> Reprends MilAura depuis docs/codex-handoff.md, docs/project-state.md et docs/checkpoints/2026-08-08-1953-milaura-selection-aout-handoff.md dans /Users/paesano/Documents/MilAura website/dawn-X-milaura. La sélection saisonnière d'août et sa landing sont terminées et live. Reprends uniquement l'étape active des trois portes. La version actuelle en cartes dépliantes est rejetée. Conçois un guide visuel avec des cartes catégories photographiées pour Choisir mon bijou par type, puis Choisir par émotion, et réutilise le teaser du diagnostic existant pour Me laisser guider. Vérifie les destinations réelles avant de coder, préserve tous les changements sales hors périmètre, et ne déploie rien sans mon GO visuel.
