# Checkpoint Ruban V3 adaptatif, Lot 1

Date : 2026-08-28 08:55 CEST

Session Codex : `01a00e7f-4a1e-7903-9e64-9394199a27d5`

Branche : `codex/milaura-ruban-v3-matrix-20260817`

Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/ruban-v3-matrix-20260817`

Base avant commit : `33c1e7c1e4deed6298e67156444f7626e6666a33`

## Autorisation

Patrice a donné le GO explicite `GO LOT 1 RUBAN V3 ADAPTATIF` le 2026-08-28. Il a également autorisé le Lot 2 juste après, retiré la phase de thème de développement et demandé un passage direct au Lot 4.

Le retrait de la preview ne vaut pas encore dernier GO de push live.

## Livré

- contrat JSON normalisé Ruban V3 ;
- configuration de score versionnée ;
- overrides V1 bornés ;
- normaliseur catalogue et inventaire ;
- moteur de gates et scoring déterministe ;
- top 3 unique avec raisons structurées ;
- payload public sans données de coût ou de stock privées ;
- gate vidéo qui conserve `should_render: false` sans vidéo approuvée ;
- sélection runtime avec exclusions panier, disponibilité et vidéo ;
- baseline datée et vérificateur ;
- quatorze tests unitaires.

## Régression catalogue

Snapshot utilisé : 2026-08-28.

| Indicateur | Résultat |
| --- | ---: |
| Produits normalisés | 318 |
| Types non résolus | 0 |
| Cibles commercialement éligibles | 67 |
| Match adaptatif fort | 108 |
| Match adaptatif | 15 |
| Aucun match honnête | 175 |
| Source exclue | 20 |
| Ambassadeurs distincts | 47 |
| Rubans prêts à afficher | 0 |

Les 113 sources déjà associées dans l audit restent associées. Dix sources supplémentaires obtiennent un match après normalisation stricte.

Hash : `b11db7446b9188976f02fca93208c237629f41fdfc9812a91448b7cd0476e143`.

## Vérifications

```text
python3 -B -m unittest discover -s tools/ruban_v3/tests -v
Ran 14 tests
OK

python3 -B tools/ruban_v3/verify_ruban_v3_snapshot.py ...
PASS regression Ruban V3 2026-08-28: 318 produits, 67 cibles eligibles
```

Le contrat généré possède tous les champs requis et aucune propriété supplémentaire par rapport au schéma.

## Frontières respectées

- aucune mutation Shopify ;
- aucun metafield créé ;
- aucune association écrite dans Shopify ;
- aucune vidéo produite ou chargée ;
- aucun thème de développement utilisé ;
- aucun fichier thème modifié ;
- aucun déploiement ;
- aucun export privé committé.

## Risques restants

1. Les 47 ambassadeurs ne possèdent encore aucune vidéo Higgsfield approuvée.
2. Les huit photos du pilote doivent être contrôlées individuellement avant production.
3. L adaptateur qui écrira les top 3 dans Shopify reste à construire au Lot 4.
4. Le registre `docs/workstreams.md` du checkout d intégration reste propriété de la session master. Il devra refléter l extension de scope avant intégration.
5. Le thème V3 et l analytics restent à implémenter sans phase de preview Shopify, conformément à la décision de Patrice.

## Reprise Lot 2

Reprendre depuis `docs/reference/2026-08-28-ruban-v3-adaptive-engine.md` et `docs/audits/2026-08-28-ruban-v3-adaptive-audit.md`. Vérifier d abord Git et le commit Lot 1. Contrôler les photos exactes du set de huit ambassadeurs recalculé. Produire uniquement dans Higgsfield. Rejeter toute vidéo qui modifie pierre, perles, métal, forme, fermoir, proportions ou détail distinctif. Ne rien charger dans Shopify et ne créer aucun metafield pendant le Lot 2.
