# Ruban V3 adaptatif, contrat et moteur

Date : 2026-08-28

Version de score : `ruban-v3.1.0-2026-08-28`

Statut : Lot 1 implémenté et validé. Lot 2 produit dans Higgsfield et techniquement validé. GO visuel Patrice en attente. Aucune mutation Shopify, aucun metafield créé, aucun média chargé dans Shopify et aucun déploiement effectué.

## Décision

Ruban V3 ne dépend plus d une matrice manuelle figée. Le noyau livré transforme un export catalogue et la vérité commerciale courante en un top 3 déterministe par produit source.

Le calcul peut être relancé après chaque évolution du catalogue. Un produit ajouté, retiré, épuisé, pausé, remis en stock ou devenu non rentable modifie automatiquement le pool au prochain calcul.

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
4. produit ou fournisseur pausé ;
5. absence de stock physique positif et de fournisseur actuel vérifié ;
6. contribution HT absente, nulle ou négative ;
7. exclusion explicite.

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
- moins de `70` : aucun affichage forcé.

Le tri final est stable : score décroissant, ordre d override en départage, puis identifiant Shopify. La sortie est limitée à trois candidats uniques.

## Gate vidéo et runtime

Le top 3 commercial est calculé même si les vidéos ne sont pas encore produites. Le payload public porte cependant `should_render: false` tant qu aucun candidat ne possède à la fois :

- `video_status: approved` ;
- une référence vidéo non vide.

Au runtime, le premier candidat est encore rejeté s il est déjà au panier ou devenu indisponible. Ruban se masque si aucun candidat restant ne franchit toutes les gates.

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
| Aucun match honnête | 175 |
| Source exclue | 20 |
| Ambassadeurs vidéo distincts dans les top 3 | 47 |
| Rubans prêts à afficher avant Lot 2 | 0 |

Les 113 sources déjà associées dans la matrice d audit conservent un match. Dix sources supplémentaires obtiennent un match honnête après normalisation : deux objets minéraux, quatre porte-clés et quatre bougies avec pierre principale identifiable.

Hash de contenu de la baseline : `b11db7446b9188976f02fca93208c237629f41fdfc9812a91448b7cd0476e143`.

## Lot 2 Higgsfield du 2026-08-28

Huit videos ambassadrices ont ete produites avec Seedance 2.5 dans Higgsfield. Grok n a pas ete utilise.

Toutes les sorties sont H.264, 960 x 960, 24 fps, 4,041667 secondes et sans audio. Le cout total est de 208 credits. Le solde Higgsfield est passe de 1 039 a 831 credits.

Le controle technique Codex est `PASS` sur les huit videos. Le statut creatif reste `PENDING_PATRICE`, donc aucune video n est encore approuvee pour le runtime et le nombre de Rubans prets a afficher reste a zero.

Le manifeste source de verite du Lot 2 est `config/ruban-v3-video-manifest-2026-08-28.json`. Il contient les references produit, sources exactes, jobs Higgsfield, URLs, parametres, empreintes SHA-256 et gates d approbation.

## Parcours de finition approuvé

1. Lot 1 : terminé, validé et poussé ;
2. Lot 2 : huit videos produites dans Higgsfield, controle technique passe, GO visuel Patrice en attente ;
3. Lot 3 de preview sur thème de développement : retiré par décision de Patrice ;
4. Lot 4 : regroupe l adaptation du thème, les metafields, l analytics et le passage direct au live, avec push ciblé, pullback et rollback prêt.

Le retrait du thème de développement ne retire aucune gate de fidélité ni de sécurité. Un dernier GO live explicite reste requis juste avant le push sur le thème `190430282075`.
