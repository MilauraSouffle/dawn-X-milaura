# Matrice anti-cannibalisation MilAura

Date : 2026-08-09
Statut : recommandations, aucune redirection appliquée

## 1. Règle d'arbitrage

Une requête principale reçoit une seule URL canonique. Les autres contenus peuvent couvrir des questions secondaires, mais ne reprennent ni le même H1, ni le même title, ni la même promesse commerciale.

Priorité des objets :

1. collection pour acheter ou comparer plusieurs produits ;
2. page hub pour choisir entre plusieurs axes ;
3. fiche produit pour un modèle précis ;
4. article pour apprendre ou résoudre une question ;
5. filtre paramétré pour affiner sans créer une nouvelle page SEO.

## 2. Conflits confirmés ou probables

| Sujet | URL canonique cible | URL concurrente ou état | Risque | Décision proposée |
|---|---|---|---|---|
| Bracelet améthyste | `/collections/par-pierre-amethyste` pour la gamme, PDP pour un modèle | `/pages/bracelet-amethyste` | critique, page avec fausses preuves et même intention | analyser GSC puis redirect 301 vers la collection ou la PDP pertinente |
| Bracelets pierres | `/collections/bracelets-pierres` | `/collections/bracelets-pierres/bracelet` | critique, URL tag 200 auto-canonique | supprimer les liens, rediriger ou neutraliser l'URL tag |
| Recherche améthyste | collection pierre ou PDP | `/search?q=amethyste` | élevé, recherche interne indexable | `noindex,follow` sur toutes les recherches internes |
| Bijoux améthyste | `/collections/par-pierre-amethyste` | article améthyste du blog | moyen | collection cible achat ; article cible propriétés, entretien et histoire, avec liens croisés |
| Bijoux jaspe | `/collections/par-pierre-jaspe` | `/collections/par-pierre-jaspe-rouge` | élevé si les deux restent minces | jaspe parent ; jaspe rouge seulement à 5 bijoux propres et contenu distinct |
| Aventurine | `/collections/par-pierre-aventurine` ou variante verte | valeurs `aventurine` et `aventurine-verte` | critique avant normalisation | vérifier chaque produit, puis choisir parent et éventuel enfant |
| Obsidienne | parent ou noire | valeurs `obsidienne` et `obsidienne-noire` | élevé | ne publier aucune nouvelle page avant normalisation |
| Sérénité et sommeil | `/collections/serenite-sommeil` si maintenue | article sommeil, page intention, produits améthyste | élevé | collection cible sélection ; hub répond au choix ; article traite le rituel sans promesse médicale |
| Protection et ancrage | page groupe après seuil | `protection-energie`, guides pierre, produits œil de tigre | élevé | choisir un groupe canonique, ne pas multiplier protection, ancrage, énergie en pages faibles |
| Amour et douceur | page groupe après seuil | `amour-relations`, quartz rose, idées cadeau | élevé | collection pour l'intention ; quartz rose reste une page pierre ; cadeau reste un usage |
| Pierres de naissance | `/pages/pierres-de-naissance` | 12 mois potentiels | élevé si 12 pages faibles | hub d'abord, enfant seulement après seuil et contenu unique |
| Anniversaire de mariage | `/pages/cadeaux-anniversaire-de-mariage` | cadeau de mariage | critique de sens | employer toujours `anniversaire de mariage` et `noces`, jamais fusionner les deux intentions |
| 40 ans de mariage | landing noces d'émeraude | collection émeraude | moyen | landing cible occasion ; collection cible matière/pierre ; maillage réciproque |
| Sélection d'août | route saisonnière | bestsellers, nouveautés, pierres | faible si temporaire | conserver sa saisonnalité et ne pas lui attribuer une requête evergreen |
| LLMs | aucune cible SEO dédiée | `/pages/llms-txt` dans sitemap | faible mais inutile | conserver seulement si utile aux humains/agents, sinon `noindex` ou suppression après décision |

## 3. Affectation des requêtes principales

| Requête ou famille | Destination exclusive | Secondaires autorisées ailleurs |
|---|---|---|
| bijoux en pierres naturelles | collection hub bijoux | guides d'achat, histoire de la marque |
| bracelets en pierres naturelles | collection bracelets | entretien d'un bracelet, tailles, PDP |
| colliers en pierres naturelles | collection colliers | guide longueur, PDP |
| boucles d'oreilles pierres naturelles | collection boucles | guide fermoirs, PDP |
| bagues pierres naturelles | collection bagues | guide taille, PDP |
| pendentif pierre naturelle | collection pendentifs | guide choix de chaîne, PDP |
| bijoux améthyste | collection améthyste | guide gemmologique améthyste |
| vertus améthyste | article ou bloc éditorial attribué | collection avec résumé prudent |
| quelle pierre pour dormir | guide ou hub intention | collection `serenite-sommeil` pour acheter |
| pierre de naissance février | landing mois après seuil | hub pour tableau complet |
| pierres de naissance par mois | hub naissance | enfants mensuels pour sélection dédiée |
| cadeau 25 ans de mariage | landing noces d'argent après seuil | hub pour tableau des années |
| cadeau de mariage | aucune page dans ce plan | ne pas absorber dans le hub anniversaire |

## 4. Canonicals, paramètres et filtres

- Les paramètres de filtre et de préselection restent canoniques vers la collection ou le hub de base.
- Une campagne peut utiliser `?intention=calme`, mais la variante ne reçoit ni title, ni H1, ni sitemap propre.
- Le tri ne doit pas devenir indexable.
- La pagination garde son canonical de page et son contenu produit paginé.
- Une URL tag legacy ne doit pas se canoniser elle-même si elle duplique exactement une collection.
- Une page vide ou réservée reste hors canal public plutôt que publiée avec `noindex` comme solution permanente.

## 5. Règles de rédaction anti-conflit

### Collection

- H1 commercial exact ;
- introduction courte sur le choix ;
- filtres et produits ;
- conseils d'achat ;
- pas d'article encyclopédique complet.

### Hub

- question de choix ;
- tableau ou parcours comparatif ;
- liens vers destinations enfants ;
- sélections limitées, pas une copie de toutes les grilles.

### Article

- question informationnelle ;
- faits, sources, entretien, histoire ;
- liens vers une collection, sans recopier son title ou son H1.

### Fiche produit

- nom du modèle, matière, pierre, taille et offre ;
- données structurées Product ;
- pas de ciblage générique d'une collection entière.

## 6. Contrôle avant chaque publication

1. Rechercher le H1, le title et la requête dans toutes les routes MilAura.
2. Vérifier la route dans Search Console lorsque l'accès existe.
3. Déterminer l'URL canonique unique.
4. Vérifier qu'aucun filtre ou tag ne crée une variante indexable.
5. Vérifier les liens entrants et le fil d'Ariane.
6. Publier, demander l'indexation, puis comparer requêtes et landing après 28 et 90 jours.
