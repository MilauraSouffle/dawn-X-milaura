# Checkpoint Ruban V3 galerie et runtime adaptatif

Date : 2026-08-28 10:00 CEST

Session Codex : `01a00e7f-4a1e-7903-9e64-9394199a27d5`

Branche : `codex/milaura-ruban-v3-matrix-20260817`

Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/ruban-v3-matrix-20260817`

## Décision active

- Ruban ne doit jamais être vide sur une PDP publique tant qu un autre produit éligible existe.
- Un seul produit est visible.
- Trois candidats uniques sont conservés dans l ordre.
- Le média vient uniquement de la galerie Shopify du produit recommandé.
- Les vidéos Higgsfield et les détourages historiques restent hors du chemin critique.
- Aucun thème de développement n est utilisé.

## Chaîne de sélection

1. même pierre, type complémentaire et finition compatible ;
2. pierre ou intention proche ;
3. même famille de produits ;
4. même collection Shopify ;
5. catalogue public éligible.

À chaque étape, le produit courant, les produits au panier, les produits indisponibles et les produits sans image sont exclus. Le moteur offline conserve aussi les gates de stock ou fournisseur vérifié, contribution positive, prix et statut.

## Implémentation

- moteur `ruban-v3.2.0-2026-08-28` avec replis déterministes ;
- contrat enrichi avec les collections ;
- `featured_image` forcée pour toutes les cartes Ruban ;
- suppression de la priorité aux vidéos et aux détourages dans la carte Ruban ;
- pools serveur issus de la collection pierre, des collections du produit et de `collections/all` ;
- complément runtime via les endpoints Shopify `complementary`, `related` et le catalogue public ;
- trois candidats gardés, un seul produit rendu ;
- promotion automatique du candidat suivant après ajout au panier ;
- aucun nouveau metafield et aucune association manuelle écrite dans Shopify.

## Régression catalogue

Snapshot : 2026-08-28.

| Indicateur | Résultat |
| --- | ---: |
| Produits normalisés | 318 |
| Cibles commercialement éligibles | 67 |
| Sources avec exactement trois candidats | 318 |
| Payloads publics affichables par galerie | 318 |
| Aucun candidat | 0 |
| Match adaptatif fort | 108 |
| Match adaptatif | 15 |
| Repli proche | 62 |
| Repli même famille | 110 |
| Repli même collection | 0 |
| Repli catalogue | 3 |
| Sources historiquement exclues mais couvertes | 20 |

Hash : `8fbcace0721d1dad893782b67eff467481b2dc7011792e67e746b0c14bae75f3`.

## Vérifications

```text
python3 -B -m unittest discover -s tools/ruban_v3/tests -v
Ran 17 tests
OK

node tools/ruban_v3/tests/test_milaura_recommendations_runtime.mjs
PASS runtime Ruban V3: gates, top 3, exclusions et replis

node --check assets/milaura-recommendations.js
PASS

python3 -B tools/ruban_v3/verify_ruban_v3_snapshot.py ...
PASS regression Ruban V3 2026-08-28: 318 produits, 67 cibles eligibles

shopify theme check
297 fichiers inspectés, 0 erreur, 17 avertissements historiques hors Ruban

git diff --check
PASS
```

## État Shopify et live

- aucune mutation Shopify ;
- aucun metafield créé ;
- aucun média chargé ;
- aucun thème de développement ;
- aucun push sur le thème live `190430282075` ;
- aucun déploiement.

## Étape suivante

1. relire le diff final et vérifier Git ;
2. commit et push de la branche Ruban ;
3. intégration ciblée par le checkout canonique ;
4. demander le GO live explicite ;
5. pousser uniquement les fichiers Ruban sur `190430282075` ;
6. contrôler plusieurs PDP publiques sur mobile et desktop, puis effectuer un pullback bit à bit.

Le contrôle visuel Patrice reste séparé du PASS technique. Une modification de présentation après le contrôle live ne remet pas en cause le moteur ni la règle jamais vide.
