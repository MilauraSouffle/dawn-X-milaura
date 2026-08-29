# Handoff inventaire MilAura, sept produits actifs et prochains dix

Date : 2026-08-29 16:21 CEST

Statut : `SESSION FERMEE - SEPT PRODUITS ACTIFS - PROCHAINS DIX IDENTIFIES`

## Resume executif

La session du 2026-08-29 a ferme la reprise structurelle de l inventaire puis le lot des sept anciens brouillons Shopify. Patrice a inspecte les sept fiches, les a toutes validees, puis les a activees et rendues disponibles sur tous les canaux de vente.

La preuve API Shopify confirme pour les sept : statut `ACTIVE`, URL publique, prix, SKU, barcode, stock physique et couverture V3. La disponibilite sur tous les canaux est une confirmation explicite de Patrice ; le token technique ne possede pas le scope `read_publications`, donc la liste publication par publication n a pas pu etre relue independamment.

Le Sheet `Inventaire canonique`, les ledgers et la vue consolidee ont ete fermes et relus. Etat final : `185 references`, `456 unites`, `86 ACTIVE`, `2 DRAFT`, `97 absentes`, `91 queued`, `6 excluded-non-sale`, `0 blocked-price` et `0 ecart de stock`.

## Ce qui a ete decide et execute le 2026-08-29

1. La vue de travail reste `185 references = ledger 175 + pilote 10`.
2. Les 15 decisions prix sont fermees : neuf prix TTC renseignes et six pierres reservees aux cadeaux ou avantages client, donc hors vente.
3. Le contrat produit courant reste V1.3 avec exactement cinq images V3. Les anciennes galeries a six images ne prouvent pas le contrat V3.
4. Camilla doit pouvoir executer les memes regles, scripts et controles que Codex. Son runtime persistant est `/opt/data/milaura-generation-nouveau-produit/.venv/bin/python`.
5. L arbitrage variantes est transfere a une session specialisee. Aucune fusion ou creation de variantes n a ete faite ici. Le flux mono-variante continue en attendant.
6. Patrice a retenu le rythme de dix produits par session. Avant la creation pure, il a demande de fermer les sept brouillons historiques.
7. Les sept brouillons ont ete refaits avec le workflow V3, controles puis presentes un par un. Patrice les a tous valides et actives.

## Sept produits fermes et actifs

| EAN | Produit Shopify | Prix TTC | Stock | URL publique |
| --- | ---: | ---: | ---: | --- |
| `3701459056040` | `10358583951707` | 8,90 EUR | 2 | `https://milaura.fr/products/plaque-fleur-de-vie-ajouree-en-bois-10-cm` |
| `3667407007277` | `10358582215003` | 22,50 EUR | 2 | `https://milaura.fr/products/plaque-fleur-de-vie-decoupee-en-bois-20-cm` |
| `3701459056088` | `10358584377691` | 8,90 EUR | 1 | `https://milaura.fr/products/plaque-fleur-de-vie-gravee-en-bois-10-cm` |
| `3701459082087` | `10357429371227` | 10,90 EUR | 3 | `https://milaura.fr/products/boucles-d-oreilles-puces-en-quartz-rose-6-mm` |
| `3701459081790` | `10358581756251` | 9,90 EUR | 1 | `https://milaura.fr/products/baton-de-fumigation-a-l-eucalyptus-10-cm` |
| `3701459056163` | `10358583853403` | 8,90 EUR | 2 | `https://milaura.fr/products/plaque-fleur-de-vie-et-oeil-d-horus-en-bois-10-cm` |
| `3701459080281` | `10357690171739` | 9,90 EUR | 2 | `https://milaura.fr/products/baton-de-fumigation-a-l-herbe-sacree-10-cm` |

La plaque Oeil d Horus a ete activee par Patrice apres le signalement de son economie faible : 8,90 EUR TTC pour 8,20 EUR HT de cout fournisseur. Ne pas modifier silencieusement son prix ; conserver ce point comme risque marge distinct.

## Prochains dix produits du Sheet

La prochaine session traite exactement les dix premieres entrees encore `queued`, par ordre de file. Les anciennes positions 81 et 82 sont sautees car elles appartiennent aux sept produits maintenant actifs.

| Position | EAN | Ligne Sheet | Produit fournisseur | Stock | Prix TTC | Statut CAN |
| ---: | --- | ---: | --- | ---: | ---: | --- |
| 72 | `3701459084494` | 105 | Collier boule 04 mm lapis-lazuli Afghanistan AA | 1 | 39,90 EUR | disponible |
| 73 | `3701459074563` | 107 | Collier boule 06 mm howlite blanche A | 1 | 15,90 EUR | disponible |
| 74 | `3701459074556` | 108 | Collier boule 06 mm hematite A | 2 | 15,90 EUR | disponible |
| 75 | `3701459074617` | 109 | Collier boule 06 mm oeil de taureau A | 1 | 15,90 EUR | disponible |
| 76 | `3701459074624` | 110 | Collier boule 06 mm oeil de tigre A | 1 | 15,90 EUR | disponible |
| 77 | `3701459074686` | 111 | Collier boule 06 mm rhodonite Madagascar AB | 1 | 14,90 EUR | rupture fournisseur, stock physique present |
| 78 | `3667407000353` | 114 | Orgonite 60 mm arbre de vie amethyste | 1 | 19,90 EUR | disponible |
| 79 | `3667407000155` | 115 | Orgonite 60 mm cercle magique amethyste | 1 | 19,90 EUR | disponible |
| 80 | `3701459056033` | 118 | Plaque bois modele 01 arbre de vie 100 mm | 3 | 8,90 EUR | disponible |
| 83 | `3701459027453` | 121 | Rouleau de massage jade de Chine, deux tetes | 1 | 25,90 EUR | disponible |

La rupture CAN de la rhodonite ne retire pas son unite du stock physique MilAura. Elle interdit seulement de supposer un reapprovisionnement fournisseur.

## Contrat de la prochaine session

1. Commencer en lecture seule par `AGENTS.md`, `docs/project-state.md`, `docs/codex-handoff.md`, ce checkpoint, le contrat produit V1.3, le guide copywriting et le workflow image V3.
2. Relire le Sheet, le ledger et Shopify par EAN avant toute mutation. Confirmer que les dix lignes ci-dessus sont toujours les dix premieres `queued`.
3. Rafraichir les sources CAN, prix et statuts fournisseur. Le stock physique du Sheet reste la seule verite de quantite vendable.
4. Construire un lot unique de dix creations Shopify. Aucun de ces dix EAN n a actuellement de produit Shopify exact.
5. Produire exactement cinq images V3 par produit, avec controle de fidelite slot par slot. Pour les colliers portes, une seule identite humaine sur les slots 4 et 5.
6. Creer uniquement des `DRAFT`, sans canal, hub, collection publique ni publication.
7. Auditer textes, metafields, prix, couts, stock et galerie, puis envoyer les dix liens Admin un par un a Patrice.
8. Attendre la validation de Patrice. Une validation visuelle ne publie rien automatiquement.

## Preuves et artefacts

- Sheet : `https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit`, onglet `Inventaire canonique`, sheetId `1034959372` ;
- preuve activation : `data/catalogue-batches/2026-08-25-physical-stock-175/draft-update-07/activation-closeout-2026-08-29.json` ;
- vue consolidee : `data/catalogue-batches/2026-08-25-physical-stock-175/consolidated-185.json` ;
- audits Shopify : `source/shopify-read-audit-2026-08-29-post-activation.json` et `source/shopify-exact-identity-audit-post-activation.json` ;
- sauvegarde locale : `backups/2026-08-29T1613-activation-closeout-07/` ;
- sauvegarde VPS : `/docker/hermes-milaura-control/data/backups/2026-08-29T1625-activation-closeout-07/` ;
- builder local et Camilla : SHA-256 `dd51950c3f2364cdd3664769c1940ca371eef9378439a36b8dfe903429a6f0fe` ;
- runtime Camilla : `CAMILLA_CONSOLIDATED_BUILDER_PASS`, conteneur `running`.

## Prompt de reprise

La phrase courte de Patrice suffit :

```text
Salut Codex, on reprend l inventaire. Check le handoff du 29/08.
```

La nouvelle session doit alors lire `docs/codex-handoff.md` et ce checkpoint avant de selectionner ou modifier un produit.
