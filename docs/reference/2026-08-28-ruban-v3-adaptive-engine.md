# Ruban V3 adaptatif, contrat et moteur

Date : 2026-08-28

Version de score : `ruban-v3.2.0-2026-08-28`

Statut : moteur et runtime galerie implémentés et validés sur la branche Ruban. Lot 2 Higgsfield conservé en brouillon hors du chemin critique. Aucune mutation Shopify, aucun metafield créé, aucun média chargé dans Shopify et aucun déploiement effectué.

## Décision

Ruban V3 ne dépend plus d une matrice manuelle figée. Le noyau livré transforme un export catalogue et la vérité commerciale courante en un top 3 déterministe par produit source.

Le calcul peut être relancé après chaque évolution du catalogue. Le storefront ne dépend toutefois pas d une table figée : il relit au chargement les recommandations Shopify, les collections actuelles, le catalogue disponible et le panier.

Le contrat d affichage est désormais absolu : une PDP publique affiche un produit, conserve trois candidats ordonnés et utilise uniquement une photographie de la galerie Shopify du produit. Si les relations sémantiques ne suffisent pas, le moteur descend vers le même univers, la même collection, puis le catalogue éligible.

Les anciennes associations V1 restent un signal borné. Elles ne peuvent jamais contourner une gate de disponibilité, de stock, de statut fournisseur, de prix ou de contribution.

## Fichiers canoniques

- `config/ruban-v3-adaptive-contract.schema.json` : contrat JSON normalisé ;
- `config/ruban-v3-score-config.json` : poids, seuils, familles et compatibilités ;
- `config/ruban-v3-historical-overrides.json` : associations V1 historiques ;
- `config/ruban-v3-regression-2026-08-28.json` : baseline datée, jamais utilisée comme vérité future ;
- `tools/ruban_v3/build_ruban_v3_catalogue.py` : normalisation catalogue et inventaire ;
- `tools/ruban_v3/ruban_v3_engine.py` : gates, scoring, top 3, payload public et sélection runtime ;
- `tools/ruban_v3/verify_ruban_v3_snapshot.py` : contrôle de la baseline datée ;
- `tools/ruban_v3/tests/` : tests unitaires sans réseau.

## Contrat de données

Chaque produit porte au minimum :

- identifiant Shopify, EAN quand il est prouvé, titre et handle ;
- disponibilité storefront et prix ;
- type et famille normalisés ;
- pierre principale distincte de la liste complète des pierres ;
- finition ;
- intention et usages quand ils sont présents ;
- collections calculées ou exposées par Shopify ;
- statut canonique, quantité physique et statut fournisseur ;
- contribution HT et taux de contribution ;
- statut de fidélité photo ;
- statut et référence vidéo Ruban ;
- date de dernière vérification.

La pierre principale pilote le matching. Une pierre secondaire mentionnée dans un bijou multi-pierres ne suffit pas à créer une association. Les familles compatibles explicitement validées restent limitées. Par exemple, les variantes d obsidienne peuvent composer une parure, mais agate arbre et agate fleur de cerisier ne sont pas fusionnées automatiquement.

## Gates cibles

Une cible est rejetée avant scoring si une seule condition suivante est vraie :

1. produit non public ou indisponible ;
2. produit identique à la source ;
3. prix nul ou négatif ;
4. absence de photographie dans la galerie Shopify ;
5. produit ou fournisseur pausé ;
6. absence de stock physique positif et de fournisseur actuel vérifié ;
7. contribution HT absente, nulle ou négative ;
8. exclusion explicite.

Un override ne s applique qu après ces gates.

## Score

Le score additionne uniquement des signaux explicables :

- relation de type réellement complémentaire ;
- pierre principale exacte ou famille de pierre autorisée ;
- finition identique, avec pénalité pour une finition connue différente ;
- stock physique et profondeur de stock, ou fournisseur actuel ;
- fidélité photo connue ;
- contribution positive bornée ;
- rapport de prix source-cible ;
- fraîcheur catalogue ;
- bonus V1 borné.

Seuils :

- `70` : match honnête minimum ;
- `100` : match adaptatif fort ;
- moins de `70` : passage aux replis ordonnés, sans masquer le Ruban.

Le tri final est stable : score décroissant, ordre d override en départage, puis identifiant Shopify. La sortie est limitée à trois candidats uniques. La chaîne de repli est : pierre et type exacts, pierre ou intention proche, même famille, même collection, catalogue éligible.

## Runtime galerie et garantie jamais vide

Le média visible provient de `featured_image`, donc de la galerie Shopify du produit recommandé. Les détourages historiques et les vidéos Higgsfield ne sont pas utilisés dans ce runtime.

Le storefront :

1. demande les produits complémentaires et liés du produit consulté ;
2. classe les cartes avec pierre, type, finition, intention et famille ;
3. complète avec les collections du produit ;
4. complète avec le catalogue public si nécessaire ;
5. exclut le produit courant, le panier, les produits indisponibles et les produits sans image ;
6. conserve trois candidats mais n affiche que le premier ;
7. promeut le candidat suivant après un ajout au panier.

Le moteur offline confirme qu un repli existe pour les 318 sources du snapshot. Le seul cas théorique vide serait l absence totale d un autre produit éligible dans le catalogue.

## Reproduction de la baseline du 2026-08-28

Les exports utilisés restent locaux dans `/private/tmp` et ne sont pas committés.

```bash
python3 -B tools/ruban_v3/build_ruban_v3_catalogue.py \
  --products /private/tmp/milaura-ruban-v3-products-20260828-p1.json \
  --products /private/tmp/milaura-ruban-v3-products-20260828-p2.json \
  --analysis /private/tmp/milaura-ruban-v3-current-analysis-20260828.json \
  --overrides config/ruban-v3-historical-overrides.json \
  --generated-at 2026-08-28T08:00:00Z \
  --output /private/tmp/milaura-ruban-v3-normalized-20260828.json

python3 -B tools/ruban_v3/ruban_v3_engine.py \
  --input /private/tmp/milaura-ruban-v3-normalized-20260828.json \
  --overrides config/ruban-v3-historical-overrides.json \
  --output /private/tmp/milaura-ruban-v3-engine-report-20260828.json \
  --public-output /private/tmp/milaura-ruban-v3-storefront-20260828.json

python3 -B tools/ruban_v3/verify_ruban_v3_snapshot.py \
  --report /private/tmp/milaura-ruban-v3-engine-report-20260828.json \
  --catalogue /private/tmp/milaura-ruban-v3-normalized-20260828.json \
  --baseline config/ruban-v3-regression-2026-08-28.json
```

## Résultat validé

Sur le snapshot du 2026-08-28 :

| Indicateur | Résultat |
| --- | ---: |
| Produits publics normalisés | 318 |
| Types non résolus | 0 |
| Cibles commercialement éligibles | 67 |
| Match adaptatif fort | 108 |
| Match adaptatif | 15 |
| Repli pierre ou intention proche | 62 |
| Repli même famille | 110 |
| Repli même collection | 0 |
| Repli catalogue | 3 |
| Aucun candidat | 0 |
| Sources historiquement exclues mais dotées de replis sûrs | 20 |
| Sources avec trois candidats | 318 |
| Rubans prêts à afficher avec une photo de galerie | 318 |

Les 113 sources déjà associées dans la matrice d audit conservent un match. Dix sources supplémentaires obtiennent un match honnête après normalisation : deux objets minéraux, quatre porte-clés et quatre bougies avec pierre principale identifiable.

Hash de contenu de la baseline : `8fbcace0721d1dad893782b67eff467481b2dc7011792e67e746b0c14bae75f3`.

## Lot 2 Higgsfield du 2026-08-28

Huit videos ambassadrices ont ete produites avec Seedance 2.5 dans Higgsfield. Grok n a pas ete utilise.

Toutes les sorties sont H.264, 960 x 960, 24 fps, 4,041667 secondes et sans audio. Le cout total est de 208 credits. Le solde Higgsfield est passe de 1 039 a 831 credits.

Le controle technique Codex est `PASS` sur les huit videos. Le statut creatif reste `PENDING_PATRICE`, donc aucune video n est encore approuvee pour le runtime et le nombre de Rubans prets a afficher reste a zero.

Le manifeste source de verite du Lot 2 est `config/ruban-v3-video-manifest-2026-08-28.json`. Il contient les references produit, sources exactes, jobs Higgsfield, URLs, parametres, empreintes SHA-256 et gates d approbation.

## Parcours de finition approuvé

1. Lot 1 : terminé, validé et poussé ;
2. Lot 2 : huit videos produites dans Higgsfield, controle technique passe, GO visuel Patrice en attente ;
3. Lot 3 de preview sur thème de développement : retiré par décision de Patrice ;
4. Lot 4 : runtime galerie implémenté sur la branche Ruban, sans nouveau metafield. L intégration canonique et le push live ciblé restent à exécuter après GO live explicite, avec pullback et rollback prêt.

Le retrait du thème de développement ne retire aucune gate de fidélité ni de sécurité. Un dernier GO live explicite reste requis juste avant le push sur le thème `190430282075`.
