# MilAura - Handoff Codex

Date : 2026-08-08 07:12 CEST

## Mission de la prochaine session

Ouvrir une nouvelle session principale MilAura et commencer le lot P0A en lecture seule : économie des paliers panier, cumuls Shopify et reliquat Scratch de `/cart`. Reprendre exclusivement depuis le checkout canonique propre et conserver toutes les décisions du hero, du dock, de la homepage, du Cercle, de ScratchToReveal et de l'Atelier des émotions.

## Verdict de clôture

La session précédente a réalisé une modification structurelle importante : réconciliation Shopify, GitHub et local, séparation du workspace privé, archivage contrôlé de l'ancien checkout, restauration d'une base propre et consolidation du plan de refonte.

Elle est volontairement clôturée avant P0A. Plusieurs compactages ont eu lieu et le prochain lot demande un raisonnement économique et des tests Shopify précis. Une nouvelle session réduit le risque de mélanger les preuves de réconciliation avec les décisions commerciales du panier.

## Lecture obligatoire, dans cet ordre

1. `AGENTS.md`.
2. `docs/project-state.md`.
3. `docs/checkpoints/2026-08-06-1828-milaura-hero-renouveau-little-words-handoff.md`.
4. `docs/checkpoints/2026-08-08-0712-milaura-plan-p0a-handoff.md`.
5. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`.
6. `docs/superpowers/specs/2026-07-31-milaura-renouveau-commerce-design.md`.
7. `docs/reference/MILAURA-CTA-SYSTEM-2026.md` avant tout CTA.

## Première interaction avec Patrice

Travailler uniquement depuis `/Users/paesano/Documents/MilAura website/dawn-X-milaura`. Commencer par vérifier Git et lire les règles P0A. Ne rien modifier avant d'avoir produit le tableau économique et le diagnostic des cumuls. Ne pas fusionner `origin/main` dans l'ancien `main` archivé et ne pas modifier l'archive sans besoin de récupération explicite.

## État live

- Thème live : `dawn-X-milaura/main`, ID `190430282075`.
- Panier : live et validé.
- Hero H1C final : live et validé visuellement par Patrice.
- Dock mobile V2 et CTA prune : live, pullback identique et validation publique mobile/desktop réussie.
- Commits dock : `0567fff1` et `252f31b5`, poussés sur `codex/milaura-mobile-dock-2026-08-07`.
- Theme Check du dernier lot : 0 erreur, 29 avertissements historiques.

## Hero à préserver

- Slogan : `La beauté d'un bijou + la vertu des pierres = l'émotion MilAura !`.
- CTA unique prune et or : `Découvrir les créations` vers `#MilauraSelectionAtelier`.
- Trois preuves simples.
- Trois cabochons ovales asymétriques, doubles contours or et aigue-marine.
- Neuf photographies produit officielles, trois par cabochon.
- Une photo change toutes les quatre secondes.
- Image secondaire activée sur les cartes avec pointeur fin ou focus.
- Aucun produit recréé par IA.

Rejets fermes : cartouche `L'engagement MilAura`, photos avec bandes, petites miniatures, nouveaux mannequins non documentés, produit approximatif, signes `+` et `=` en cabochons.

## Architecture homepage

1. Hero.
2. Sélection de l'atelier, quatre produits réels.
3. Trois portes pour les indécis.
4. Pierre du moment.
5. Karine et preuves.
6. Sur mesure et Atelier des émotions.
7. Cadeaux et mariage.
8. Journal.
9. Cercle.

Le CTA du hero ne quitte pas la homepage. Il descend vers les produits. Les portes arrivent seulement après cette première preuve commerciale.

## Nouveau point stratégique à ne pas oublier

Patrice prend [Little Words Project](https://www.littlewordsproject.com) comme inspiration de mécanique pour une offre MilAura de bracelets personnalisables. Il achète actuellement les composants pour que Karine réalise ces bracelets. Ce chantier est actif et absent du plan originel.

Nom de travail : `L'Atelier des émotions`.

Concept MilAura : pierres naturelles, lettres, mot ou prénom, émotions, palettes, petits charms ludiques dont des éléments souriants, taille, création et validation par Karine.

Ne pas copier leur nom, leur identité ou leurs visuels. Formaliser l'offre MilAura.

Premières tâches :

1. inventaire des composants, coûts, quantités et compatibilités ;
2. trois à cinq modèles pilotes ;
3. prix, marge, contribution, temps d'assemblage et délai ;
4. limites de personnalisation et conditions de retour ;
5. photos et vidéos exactes ;
6. landing V1 avec brief guidé et validation humaine ;
7. architecture Shopify sans explosion de variantes ;
8. petit pilote avant automatisation.

## Ordre d'exécution immédiat

1. Calculer la contribution du panier dans le pire scénario et tester les cumuls Shopify.
2. Identifier quatre produits physiquement présents et rentables.
3. Construire la Sélection de l'atelier.
4. Repositionner les trois portes.
5. Construire la landing Aigue-marine.
6. Inventorier et prototyper l'Atelier des émotions.

## État Git critique

Contrôle du 2026-08-08 à 07:12 CEST avant rédaction du handoff :

- checkout actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche active : `codex/milaura-reconcile-2026-08-07` ;
- HEAD local et distant avant le handoff : `ac16164944a95748b01d46551dd5e5248d55fb61` ;
- baseline de code réconciliée : `ff5712dd0a7cf6900e1e8a4dcd4e7fa2ebd71f9b` ;
- documentation de clôture versionnée ensuite sur la même branche ;
- divergence distante : `0 ahead`, `0 behind` ;
- checkout actif strictement propre ;
- tout le code live et les assets publics actifs requis sont présents ;
- six écarts historiques encore utiles ont été migrés dans `ff5712dd` ;
- archive complète de l'ancien checkout : `/Users/paesano/Documents/MilAura website/dawn-X-milaura-archive-2026-08-07` ;
- l'archive conserve l'ancien `main` à `252f31b5`, ses modifications suivies et ses fichiers non suivis ;
- données privées séparées sous `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace` ;
- aucun secret ou matériau privé n'est présent dans le checkout actif.

Ne pas faire de reset, clean, pull global ou merge du vieux `main` archivé. Pour récupérer un élément historique, comparer le fichier ciblé et le migrer intentionnellement dans un commit distinct.

## Politique de parallélisation

La session principale P0A est seule propriétaire du thème actif, de la branche Git active, du panier et des éventuelles mutations Shopify.

Peuvent avancer en parallèle sans toucher au thème :

1. P0B, comptage physique et rapprochement SKU, EAN, coûts, marges et délais ;
2. Atelier des émotions, inventaire des composants, trois à cinq prototypes, temps d'assemblage et économie produit ;
3. Camilla, audit ou évolution du pipeline dans Agentic-Ops et sur le VPS, en brouillon uniquement ;
4. recherches et briefs créatifs en lecture seule.

Ne pas paralléliser :

- deux sessions modifiant la homepage ou le même fichier de thème ;
- deux sessions modifiant le panier, les remises ou `settings_data.json` ;
- plusieurs déploiements Shopify ;
- plusieurs sessions écrivant les documents d'état du projet ;
- la construction d'une section avant validation de ses dépendances stock et économie.

Chaque session parallèle doit annoncer son périmètre, ses fichiers autorisés, ses interdictions et son livrable. Les résultats reviennent à la session principale avant toute implémentation.

## Camilla et workflow produit VPS

Contrôle en lecture seule du 2026-08-07 :

- workflow autonome monté en lecture-écriture dans `hermes-milaura-control` sous `/opt/data/milaura-generation-nouveau-produit` ;
- doctrine Camilla, runbook et skill `milaura-product-generation` présents ;
- environnement Python, scripts, références Chloé et Elena accessibles ;
- accès OpenAI, Shopify et fournisseur confirmés par réponses HTTP 200 ;
- création Shopify forcée en brouillon et publication automatique désactivée.

La réconciliation locale ne modifie pas cette copie VPS. Le workflow privé local se trouve maintenant sous `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`. Les 171 fichiers actifs utiles sont conservés, avec Chloé, Elena, les outputs et un runbook adapté au nouveau chemin. Le `.env` local est hors Git en permissions `600` et son contenu n'a pas été affiché.

## Panier et Ads

Avant tout trafic payant :

- calculer cadeau + livraison + remise + frais + CAC dans le pire scénario ;
- vérifier le cumul réel des avantages Shopify ;
- vérifier stock, marge, délais, tracking et claims ;
- corriger les contradictions livraison et retours.

## Pierre du moment et landings

- Aigue-marine : campagne pilote de septembre 2026.
- `Une pierre pour une émotion` : landing interactive, pas contenu à jeter.
- Comparaison vraies pierres, imitations et mauvaise qualité : landing future pour une idée Meta.
- Éviter `semi-précieuse`. Préférer `Aigue-marine naturelle` avec preuve, ou `pierre gemme`.

## Contraintes durables

- Patrice publie seul les produits Shopify.
- Camilla s'arrête au brouillon.
- Chloé et Elena sont les mannequins documentés.
- Un mannequin homme doit être créé et documenté avant production.
- LFG Paris certifie les pierres via les certificats transmis par le fournisseur.
- Les commandes partent de l'atelier MilAura à Metz.
- Pas de mention publique de Cartier sans preuve et droit d'usage.
- Pas de promesse médicale.
- Pas de trafic payant avant économie et mesure fiables.
- Pas de suppression d'une bonne section avant sa destination opérationnelle.

## Prompt prêt à copier

> Reprends MilAura depuis `docs/codex-handoff.md` et `docs/checkpoints/2026-08-08-0712-milaura-plan-p0a-handoff.md` dans `/Users/paesano/Documents/MilAura website/dawn-X-milaura`. La réconciliation Git et privée est terminée, le hero et le dock sont validés. Commence P0A en lecture seule : construis le tableau de contribution aux paniers 30, 50, 80, 89 et 100 EUR, vérifie les règles de cumul des codes `MILAURA-LIV50` et `MILAURA15`, le cadeau variante `53142713925979` et le reliquat Scratch de `/cart`. Distingue coûts confirmés, données manquantes et hypothèses. Ne modifie ni Shopify ni le thème avant de présenter le diagnostic et d'obtenir mon GO. P0B inventaire et l'Atelier des émotions peuvent avancer dans des sessions séparées sans toucher au thème.
