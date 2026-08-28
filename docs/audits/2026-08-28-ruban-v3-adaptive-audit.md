# Audit adaptatif Ruban V3

Date de l audit : 2026-08-28

Statut : audit, moteur V3.2 et runtime galerie implémentés sur la branche Ruban. Lot 2 Higgsfield reste un brouillon hors du chemin critique. Aucune mutation Shopify et aucun déploiement.

## Addendum V3.2 du 2026-08-28

La décision Patrice postérieure au premier audit remplace la gate vidéo et le masquage décrits plus bas : le Ruban ne doit jamais être vide. La version stable utilise uniquement les photographies des galeries Shopify et reporte toute nouvelle présentation vidéo.

Résultat recalculé sur le même catalogue de 318 produits :

| Statut | Sources |
| --- | ---: |
| Match adaptatif fort | 108 |
| Match adaptatif | 15 |
| Repli pierre ou intention proche | 62 |
| Repli même famille | 110 |
| Repli même collection | 0 |
| Repli catalogue | 3 |
| Aucun candidat | 0 |
| Sources historiquement exclues mais dotées de replis sûrs | 20 |

Les 318 sources possèdent exactement trois candidats. Les 318 payloads publics sont affichables avec une image de galerie. Hash V3.2 : `8fbcace0721d1dad893782b67eff467481b2dc7011792e67e746b0c14bae75f3`.

Le runtime prend ses données dans Shopify au chargement : recommandations complémentaires et liées, collections courantes, catalogue public et panier. Il affiche un produit, garde trois candidats, puis promeut le suivant si le premier entre au panier. Aucun nouveau metafield et aucune liste manuelle de 318 associations ne sont nécessaires pour cette version.

Les sections historiques qui prescrivent une vidéo approuvée ou un masquage en absence de match sont conservées comme trace du Lot 1, mais ne décrivent plus la décision active.

## Verdict

Ruban V3 ne doit pas devenir une table figée de 318 associations. Le bon modèle est un moteur hybride :

1. des règles commerciales et visuelles stables ;
2. un pool de produits cibles recalculé à partir du catalogue et de l inventaire courant ;
3. un top 3 explicable par produit source ;
4. une sélection finale au runtime qui choisit le premier candidat encore disponible, hors panier et doté d une vidéo Higgsfield approuvée ;
5. un masquage propre du Ruban quand aucun candidat honnête et fidèle ne reste.

Search & Discovery peut conserver les paires V1 comme overrides historiques. Il ne peut pas être le moteur unique de V3, car les produits complémentaires sont sélectionnés manuellement dans Shopify.

## Etat live revérifié

Thème Shopify publié :

- nom : `dawn-X-milaura/main` ;
- rôle : live ;
- ID : `190430282075`.

Les neuf fichiers Ruban V2 ont été tirés à neuf du live le 2026-08-28 et comparés au canonique : 9 sur 9 identiques.

1. `assets/milaura-recommendations.css`
2. `assets/milaura-recommendations.js`
3. `sections/milaura-recommendation-fragment.liquid`
4. `sections/milaura-recommendations.liquid`
5. `snippets/milaura-card-product.liquid`
6. `snippets/milaura-recommendation-card.liquid`
7. `snippets/milaura-recommendation-shell.liquid`
8. `templates/product.json`
9. `templates/product.milaura-produit.json`

Les neuf sources historiques ont également été interrogées sur l endpoint public `intent=complementary` :

- 9 sur 9 réponses exactes ;
- 12 placements dirigés toujours actifs ;
- les neuf produits sources sont encore publics.

Cette cohérence prouve que V2 n est pas cassé. Elle ne prouve pas que ses recommandations sont encore les meilleures commercialement.

## Catalogue public au 2026-08-28

La lecture publique de `products.json` donne :

- 318 produits publics et disponibles au sens storefront ;
- 268 produits dans le précédent audit du 2026-08-17 ;
- 50 produits ajoutés ;
- aucun produit retiré parmi les 268 identifiants précédents ;
- 18 baguettes encore publiques ;
- 10 produits avec un `product_type` Shopify vide ;
- 38 produits sans SKU public ;
- 252 produits avec trois images, 22 avec cinq images et 42 avec six images.

Le catalogue a donc déjà changé de 18,7 % en onze jours. Une maintenance manuelle paire par paire n est pas soutenable.

## Réconciliation avec l inventaire canonique

Source : Google Sheet `MILAURA - Inventaire physique canonique - 2026-08-24`, onglet `Inventaire canonique`, lu le 2026-08-28.

Résultat sur les 318 produits publics :

| Indicateur | Nombre |
| --- | ---: |
| Produits rapprochés de l inventaire | 72 |
| Produits publics avec stock physique vérifié | 67 |
| Unités physiques correspondantes | 129 |
| Produits publics fournisseur actuel vérifié | 4 |
| Produit public mais fournisseur en pause | 1 |
| Produits publics sans rapprochement canonique | 246 |

Le produit public en pause est :

- `10357650948443`, `Pendentif Œil de Sainte Lucie` ;
- statut canonique : `paused - fournisseur en rupture` ;
- action canonique : ne pas promouvoir.

Parmi les 71 produits publics avec stock physique ou fournisseur actuel, quatre ont une contribution HT calculée négative et sont donc exclus comme cibles Ruban :

1. `Pendule 7 Chakras` ;
2. `Pendule Acier` ;
3. `Pendule Quartz Rose` ;
4. `Pendule Cristal de Roche`.

Le pool commercial actuel contient donc 67 cibles éligibles avant la gate vidéo.

## Résultat du matching recalculé

Le scoring utilise uniquement des cibles qui franchissent les gates suivantes :

- produit public et disponible ;
- produit différent de la source ;
- stock physique positif ou fournisseur actuel vérifié ;
- contribution HT strictement positive ;
- aucun statut fournisseur en pause ;
- aucune exclusion catalogue ;
- prix strictement positif.

Le score combine ensuite :

- compatibilité de type ;
- même pierre ;
- même finition quand elle est documentée ;
- stock physique et profondeur de stock ;
- contribution ;
- rapport de prix source-cible ;
- fraîcheur catalogue ;
- priorité bornée pour un mapping V1 existant.

Résultat sur les 318 sources publiques :

| Statut | Produits sources |
| --- | ---: |
| Match adaptatif fort | 108 |
| Match adaptatif | 15 |
| Aucun match honnête | 175 |
| Source exclue | 20 |

Les 113 produits avec match couvrent principalement les bijoux pour lesquels une pierre et une compatibilité de type sont identifiables. Les 185 produits sans match honnête ne doivent pas recevoir un substitut artificiel. Ruban doit se masquer tant que le catalogue ne fournit pas un complément défendable.

## Ce que révèle V1

Les neuf sources V1 sont toujours publiques, mais leur vérité commerciale a changé :

- deux sources ont un stock physique canonique ;
- une source est fournisseur actuel vérifié ;
- six sources ne sont pas rapprochées de l inventaire canonique ;
- les cibles V1 historiques ne franchissent pas toutes les gates V3 ;
- aucune cible V1 ne possède une vidéo Ruban Higgsfield approuvée dans le contrat actuel.

V1 reste donc une preuve technique et visuelle, pas la base de décision commerciale de V3.

## Audit du code V2

### Points solides à conserver

- le composant exclut le produit courant ;
- il exclut les produits déjà présents au panier ;
- il filtre les cartes Shopify indisponibles ;
- il fusionne les recommandations du produit courant et du panier ;
- il publie déjà des événements d impression, de clic et d ajout ;
- il prévoit un poster pour réduction de mouvement et économie de données ;
- le Ruban live est stable et identique au canonique.

### Limites bloquantes pour V3

1. La PDP demande uniquement `intent=complementary`. Shopify alimente cette intention par sélection manuelle.
2. Le score JavaScript actuel repose sur la provenance du produit courant, le panier, l ordre de l API et l historique récent. Il ne connaît ni la pierre, ni la finition, ni le stock canonique, ni la contribution.
3. La section peut afficher plusieurs cartes. V3 doit présenter une seule recommandation principale à la fois.
4. Le média détouré et les assets codés en dur sont prioritaires sur la vidéo produit. V3 doit utiliser un metafield vidéo Ruban dédié avant tout fallback.
5. La vidéo actuelle ne démarre que sur survol ou focus. Cela ne couvre pas correctement le mobile. V3 doit lancer la vidéo muette en boucle lorsqu elle entre dans le viewport, avec poster en réduction de mouvement ou économie de données.
6. Les événements analytics sont émis, mais aucun consommateur et aucun tableau de mesure Ruban ne sont prouvés dans cet audit.

## Architecture à implémenter

### 1. Contrat produit normalisé

Champs minimums par produit :

- identifiant Shopify et EAN ;
- type normalisé ;
- famille ;
- pierre ou liste de pierres ;
- finition ;
- intention et usage ;
- prix ;
- coût et contribution ;
- mode de disponibilité ;
- quantité physique ;
- statut fournisseur ;
- statut photo fidèle ;
- vidéo Ruban approuvée ;
- date du dernier contrôle.

### 2. Pool de cibles dynamique

Déclencheurs recommandés :

- recalcul nocturne ;
- recalcul après changement de produit ;
- recalcul après changement de stock ou de statut fournisseur ;
- recalcul après validation ou retrait d une vidéo.

Le noyau pur et versionné vit dans `tools/ruban_v3/`. Un adaptateur d automatisation pourra l appeler après le Lot 2. Il lit le catalogue et l inventaire, calcule les candidats, puis prépare seulement les top 3 réellement utiles.

### 3. Metafields V3 proposés

Noms à valider avant toute création Admin :

- `milaura.ruban_candidates_v3` : liste de références produit ordonnées ;
- `milaura.ruban_reason_v3` : raison commerciale structurée ou JSON léger ;
- `milaura.ruban_video` : fichier vidéo approuvé ;
- `milaura.ruban_video_status` : `draft`, `approved`, `rejected` ;
- `milaura.ruban_score_version` : version et date du calcul ;
- `milaura.ruban_override` : liste prioritaire validée manuellement, sans contournement des gates.

Le top 3 est pré-calculé pour éviter un calcul coûteux dans Liquid. Le storefront vérifie encore la disponibilité et le panier au moment de l affichage.

### 4. Sélection runtime

Ordre de décision :

1. charger le top 3 pré-calculé ;
2. appliquer un override validé s il existe ;
3. exclure le produit source ;
4. exclure les produits au panier ;
5. exclure les produits Shopify indisponibles ;
6. exclure les candidats sans vidéo approuvée ;
7. afficher le premier candidat restant ;
8. masquer Ruban si la liste est vide.

Le runtime ne doit jamais utiliser `intent=related` comme secours visible automatique. Les produits liés automatiques peuvent être étudiés hors écran, mais ils risquent de proposer des substituts plutôt que des compléments.

### 5. Pool vidéo ambassadeur

Le top 3 du moteur Lot 1 mobilise toujours 47 produits ambassadeurs distincts. Il ne faut pas lancer 47 vidéos d un coup.

Le set de huit ambassadeurs qui maximise la couverture incrémentale au 2026-08-28 est le suivant, avant gate de fidélité photo :

1. `Bracelet doré en améthyste - 16 à 21 cm` ;
2. `Collier quartz rose doré bohème` ;
3. `Collier boho doré en améthyste - 38 à 43 cm` ;
4. `Bracelet Aska noir en oeil de tigre et onyx 6 mm` ;
5. `Boucles d'oreilles dorées en sodalite - 36 mm` ;
6. `Bracelet Mira doré en cristal de roche 4 mm` ;
7. `Collier obsidienne noire boho doré` ;
8. `Bracelet en lapis-lazuli 4 mm - 16 à 18 cm`.

Ce set couvre 75 des 123 sources associables si les huit vidéos franchissent toutes les gates. Il ne vaut pas GO visuel.

Une vidéo est rejetée si Higgsfield modifie la pierre, la taille ou le nombre de perles, la couleur du métal, la forme, le fermoir, les proportions ou un détail distinctif du produit.

### Resultat du Lot 2

Le 2026-08-28, les huit videos ont ete produites dans Higgsfield avec Seedance 2.5. Grok n a pas ete utilise.

- huit jobs termines, zero echec final ;
- H.264, 960 x 960, 24 fps, 4,041667 secondes, sans audio ;
- 208 credits consommes, solde passe de 1 039 a 831 ;
- controle technique Codex `PASS` sur les huit sorties ;
- GO visuel Patrice encore `PENDING` ;
- aucune video chargee dans Shopify ;
- aucun candidat marque `approved` dans le runtime.

Le manifeste complet est `config/ruban-v3-video-manifest-2026-08-28.json`.

## Mesure attendue

Evénements minimums :

- impression du Ruban ;
- identifiant source ;
- identifiant candidat ;
- position dans le top 3 ;
- version du score ;
- clic ;
- ajout direct ;
- achat du candidat dans la même commande ;
- revenu attaché ;
- absence de candidat ;
- motif d exclusion runtime.

KPI prioritaires :

1. taux de couverture Ruban sur PDP éligible ;
2. CTR Ruban ;
3. taux d ajout depuis Ruban ;
4. attach rate source plus complément ;
5. chiffre d affaires et contribution attachés ;
6. part des affichages masqués pour absence de vidéo ou de cible ;
7. taux de rejet Higgsfield pour non-fidélité.

Le poids de la performance dans le score doit rester borné. Une bonne conversion ne doit jamais autoriser une association visuellement fausse ou un produit non vendable.

## Lot 1 exécuté le 2026-08-28

Le moteur `ruban-v3.1.0-2026-08-28` a été rejoué sur les 318 produits :

- 67 cibles commercialement éligibles, identiques à l audit ;
- zéro type non résolu après normalisation ;
- 108 matchs forts ;
- 15 matchs adaptatifs ;
- 175 sources sans match honnête ;
- 20 sources exclues ;
- 47 ambassadeurs vidéo distincts dans les top 3 ;
- zéro Ruban prêt à afficher avant approbation des vidéos.

Les 113 sources associées dans la matrice initiale conservent un match. Dix sources supplémentaires deviennent associables après normalisation stricte : deux objets minéraux, quatre porte-clés et quatre bougies.

Les 14 tests locaux et la baseline datée passent. Le hash de contenu est `b11db7446b9188976f02fca93208c237629f41fdfc9812a91448b7cd0476e143`.

Documentation canonique : `docs/reference/2026-08-28-ruban-v3-adaptive-engine.md`.

## Plan de finition révisé

### Lot 1. Contrat et moteur de scoring, terminé

- corriger les cinq types non normalisés utiles au moteur ;
- définir les metafields V3 ;
- transformer le script d audit en job idempotent ;
- générer le top 3 et les raisons ;
- ajouter des tests de non-régression sur les règles et exclusions.

Sortie obtenue : matrice reproductible sur chaque état du catalogue.

### Lot 2. Pilote Higgsfield, autorisé

- valider les photos exactes des huit ambassadeurs pilotes ;
- produire les vidéos dans Higgsfield uniquement ;
- appliquer la gate de fidélité ;
- conserver localement uniquement les vidéos approuvées avant toute création de metafield ou tout chargement Shopify.

Sortie : pool vidéo initial, aucun asset douteux.

### Lot 3. Preview sur thème de développement, retiré

Patrice a retiré cette phase le 2026-08-28. Aucun thème de développement ne sera réservé ni utilisé. Les exigences fonctionnelles sont transférées au Lot 4 et restent obligatoires.

### Lot 4. Thème V3, analytics et passage direct au live

- implémenter une seule carte visible, la vidéo dédiée, l autoplay mobile dans le viewport, le poster de repli, le top 3 runtime, le masquage propre et l ajout direct ;
- connecter le consommateur des événements ;
- prouver impression, clic, ajout et achat attaché ;
- effectuer la QA locale et statique sans thème de développement ;
- obtenir successivement GO technique, GO visuel Patrice, GO données Shopify, GO intégration et dernier GO live ;
- pousser uniquement les fichiers et définitions approuvés ;
- pullback et QA publique.

## Gates non accordées

Le GO Lot 1 et le GO Lot 2 sont accordés. Aucun GO n est encore accordé pour :

- créer ou modifier des metafields Shopify ;
- écrire des associations dans Shopify ;
- modifier le thème ;
- utiliser un thème de preview, phase explicitement retirée ;
- intégrer la branche ;
- déployer sur le live.

## Sources

- Shopify Ajax Product Recommendations API : https://shopify.dev/docs/api/ajax/reference/product-recommendations
- Shopify Help, product recommendations : https://help.shopify.com/en/manual/online-store/themes/customizing-themes/add-product-recommendations
- Inventaire canonique : https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit
- Handoff Ruban V3 : `docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md`
- Matrice V1 : `docs/audits/2026-08-16-ruban-matrices-commerciales-v1.md`

## Livrable de données

Classeur : `/Users/paesano/.codex/visualizations/2026/08/17/01a00e7f-4a1e-7903-9e64-9394199a27d5/outputs/01a00e7f-4a1e-7903-9e64-9394199a27d5/milaura-ruban-v3-adaptive-matrix-2026-08-28.xlsx`

Feuilles :

1. `Synthese` ;
2. `Matrice V3` ;
3. `Eligibilite` ;
4. `Ambassadeurs` ;
5. `Mappings V1` ;
6. `Delta catalogue` ;
7. `Architecture` ;
8. `Regles`.
