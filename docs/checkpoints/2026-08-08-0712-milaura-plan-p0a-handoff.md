# Checkpoint MilAura - clôture avant P0A

Date : 2026-08-08 07:12 CEST

Projet : MilAura Shopify

Checkout actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`

Branche : `codex/milaura-reconcile-2026-08-07`

Thème Shopify live : `dawn-X-milaura/main`, ID `190430282075`

## Décision de session

Ne pas commencer P0A dans la session ayant réalisé la réconciliation. La session a déjà porté plusieurs compactages, une bascule profonde des checkouts, la séparation des données privées et la consolidation du plan de refonte.

P0A doit commencer dans une nouvelle session principale, avec un contexte frais, en lecture seule et sans mutation Shopify ou thème avant diagnostic économique et GO explicite de Patrice.

## Travail terminé dans la session clôturée

### Hero et dock

- hero H1C live et validé visuellement par Patrice le 2026-08-07 ;
- slogan, CTA unique, preuves simples, cabochons ovales et neuf photographies officielles validés ;
- dock mobile V2 live et validé ;
- navigation mobile : Menu, Rechercher, Contact, Cercle et Panier ;
- gemmes placées sous les pictogrammes et coupées par le bord inférieur ;
- CTA prune harmonisés sur les surfaces ciblées ;
- aucun changement Shopify après le déploiement du dock du 2026-08-07.

### Réconciliation G1

- Shopify live, GitHub et ancien checkout comparés ;
- `origin/main` identifié comme miroir automatique Shopify ;
- base propre reconstruite depuis le miroir et les assets publics actifs ;
- six fichiers historiques encore utiles migrés dans `ff5712dd` ;
- dix-neuf autres écarts classés sans migration globale ;
- checkout propre installé au chemin canonique ;
- ancien checkout conservé sous `/Users/paesano/Documents/MilAura website/dawn-X-milaura-archive-2026-08-07` ;
- aucun reset, clean ou merge global ;
- worktree temporaire retiré seulement après vérification d'un clone indépendant et du commit distant.

### Workspace privé

Destination : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace`

- workflow produit moderne : 171 fichiers actifs utiles ;
- modèles Chloé et Elena conservés ;
- outputs, images, audits et documentation conservés ;
- corpus `credentials` : 2 741 fichiers utiles source et destination ;
- contrôle checksum du corpus sans différence ;
- zéro placeholder iCloud dans la destination ;
- photos bougies : 16 fichiers source et destination ;
- documents internes : 63 fichiers source et destination ;
- modèles d'emails : 20 fichiers source et destination ;
- `.env` du workflow et `.env` historique du thème conservés hors Git en permissions `600` ;
- aucun secret affiché ;
- `.venv`, caches, `*.pyc` et dépendances reproductibles exclus.

### Camilla

- copie VPS indépendante et inchangée ;
- montage : `/opt/data/milaura-generation-nouveau-produit` ;
- scripts, références Chloé et Elena et environnement accessibles lors du contrôle du 2026-08-07 ;
- accès OpenAI, Shopify et fournisseur confirmés par réponses HTTP 200 lors de ce contrôle ;
- création Shopify limitée au brouillon ;
- publication automatique désactivée ;
- Patrice reste l'unique personne qui publie les produits.

## État Git avant ce handoff

Contrôle du 2026-08-08 à 07:12 CEST :

- branche locale : `codex/milaura-reconcile-2026-08-07` ;
- HEAD local et distant : `ac16164944a95748b01d46551dd5e5248d55fb61` ;
- divergence : `0 ahead`, `0 behind` ;
- statut : propre avant rédaction des documents de handoff ;
- worktree Git unique au chemin canonique.

Commits structurants :

1. `ac49b85b chore: establish clean live baseline` ;
2. `b6b7fce9 docs: close G1 reconciliation` ;
3. `ff5712dd chore: preserve useful legacy theme work` ;
4. `22824174 docs: complete repository reconciliation` ;
5. `ac161649 docs: distinguish code baseline from closure`.

## État du plan

Terminé :

1. H1, hero ;
2. N1, dock mobile et prune d'action ;
3. G1, réconciliation complète.

Prochaine étape obligatoire :

4. P0A, économie du panier, cumuls Shopify et audit du reliquat Scratch de `/cart`.

Étape suivante :

5. P0B, quatre produits physiquement présents, identifiés et rentables.

Puis : Sélection de l'atelier, trois portes, landing Aigue-marine, Atelier des émotions, Karine et les preuves, Sur mesure, première PDP mobile, Cadeaux et mariage, Journal, Cercle, ScratchToReveal réutilisé, acquisition et automatisation progressive.

## P0A, périmètre exact de la prochaine session

Commencer en lecture seule.

### Économie

Construire le calcul :

`Prix HT - coût produit - transport entrant - emballage - paiement - cadeau - livraison financée - remise - provision retours et casse = contribution avant Ads`

Scénarios obligatoires : 30, 50, 80, 89 et 100 EUR.

Éléments live connus :

- cadeau à 30 EUR ;
- livraison offerte à 50 EUR ;
- remise de 15 % à 80 EUR ;
- cadeau variante `53142713925979` ;
- code livraison `MILAURA-LIV50` ;
- code remise `MILAURA15`.

### Shopify

Vérifier :

- existence et statut des codes ;
- classes de remise et règles de cumul ;
- exclusions et minimums ;
- comportement lorsque le panier repasse sous un seuil ;
- ajout et retrait du cadeau ;
- remboursement, annulation et retour ;
- journal des commandes tests ;
- scénario maximal cadeau, livraison et remise.

### Scratch

- confirmer l'absence de friction visible dans le drawer live ;
- inventorier les déclarations restantes dans `/cart` et les templates alternatifs ;
- ne pas extraire ni reconstruire le moteur pendant P0A ;
- réserver le retrait PDP à S1A ;
- réserver le nouveau popup Cercle à S1B et S1C après les fondations du compte.

### Sortie attendue

- coûts confirmés séparés des hypothèses et données manquantes ;
- contribution par scénario ;
- cumul Shopify prouvé par test ;
- recommandation conserver, modifier ou suspendre chaque avantage ;
- CAC maximal soutenable ;
- aucune modification avant présentation à Patrice.

## Parallélisation contrôlée

Le plan peut avancer plus vite avec plusieurs sessions, mais une seule session reste propriétaire du thème actif, de la branche Git active et du live Shopify.

### Sessions parallèles autorisées

1. `P0A principal`
   - propriétaire du panier, du thème et des éventuels tests Shopify ;
   - commence en lecture seule ;
   - aucun déploiement sans GO.
2. `P0B inventaire`
   - comptage physique, SKU, EAN, coût, prix, marge, origine et délai ;
   - aucun fichier de thème ;
   - aucun changement de stock Shopify sans validation.
3. `Atelier des émotions`
   - inventaire composants, trois à cinq prototypes, temps d'assemblage, règles et économie ;
   - travail dans le workspace privé ;
   - aucune landing et aucune mutation Shopify live.
4. `Camilla`
   - pipeline produit dans Agentic-Ops ou sur le VPS ;
   - brouillons uniquement ;
   - aucun fichier du thème.
5. `Recherche ou creative`
   - lecture seule, briefs et propositions ;
   - aucune intégration sans retour à la session principale.

### Sessions parallèles interdites

- deux sessions modifiant les mêmes fichiers de thème ;
- deux sessions travaillant sur le panier ou les remises Shopify ;
- plusieurs déploiements Shopify ;
- plusieurs sessions modifiant les documents d'état ;
- développement de la Sélection avant P0B ;
- popup Cercle avant le modèle de données et les consentements ;
- campagnes avant stock, marge et tracking.

### Gouvernance

Chaque session doit annoncer : objectif, dépôt, fichiers autorisés, fichiers interdits, mutations autorisées, livrable et dépendance. La session principale consolide les résultats et reste seule responsable des commits du thème et du plan canonique.

## Documents de vérité

1. `AGENTS.md` ;
2. `docs/project-state.md` ;
3. `docs/codex-handoff.md` ;
4. ce checkpoint ;
5. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md` ;
6. `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md` ;
7. `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/INVENTORY.md` ;
8. `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/THEME-DIFF-CLASSIFICATION-2026-08-07.md`.

## Live et déploiement

- aucun changement live effectué pendant la clôture ;
- dernière vérité live vérifiée : hero et dock validés le 2026-08-07 ;
- Theme Check de la base réconciliée : 270 fichiers, 0 erreur, 29 avertissements historiques ;
- aucun push Shopify requis pour ce handoff.

## Risques restants

1. coûts réels du cadeau, de la livraison, de l'emballage, du paiement et des retours encore incomplets pour P0A ;
2. règles de cumul Shopify à prouver par tests ;
3. stock Shopify possiblement issu d'anciens défauts 5 ou 10, à rapprocher du stock physique ;
4. Scratch encore présent sur certaines PDP et possiblement déclaré dans des templates panier ;
5. page `/account` encore générique alors que le dock pointe vers Cercle ;
6. popup newsletter `-10 %` à conserver jusqu'au remplacement Cercle fonctionnel ;
7. aucune acquisition payante avant économie, stock et tracking fiables.

## Prompt de reprise

> Reprends MilAura depuis `docs/codex-handoff.md` et `docs/checkpoints/2026-08-08-0712-milaura-plan-p0a-handoff.md` dans `/Users/paesano/Documents/MilAura website/dawn-X-milaura`. Commence P0A en lecture seule. Construis le tableau de contribution aux paniers 30, 50, 80, 89 et 100 EUR. Vérifie les règles des codes `MILAURA-LIV50` et `MILAURA15`, le cadeau variante `53142713925979`, leur cumul et le reliquat Scratch de `/cart`. Distingue faits confirmés, coûts manquants et hypothèses. Ne modifie ni Shopify ni le thème avant de présenter le diagnostic et d'obtenir mon GO. Une autre session peut avancer sur P0B inventaire ou l'Atelier des émotions, mais aucune autre session ne touche au thème.
