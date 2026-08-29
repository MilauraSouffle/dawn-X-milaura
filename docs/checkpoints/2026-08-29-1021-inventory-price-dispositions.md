# Inventaire MilAura, fermeture des prix et dispositions hors vente

Date : 2026-08-29 10:21 CEST
Statut : `PRIX FERMES - CAMILLA SYNCHRONISEE - REPRISE PRODUIT PRETE`

## Decision Patrice

Patrice a fixe les prix de vente TTC unitaires suivants dans l'ordre de la liste de 15 references soumise :

| Ref | EAN | Decision |
| --- | --- | --- |
| 1 | `3701459065882` | 49,90 EUR TTC |
| 2 | `3701459069354` | 19,90 EUR TTC |
| 3 | `3701459069927` | 29,90 EUR TTC |
| 4 | `3701459069910` | 49,90 EUR TTC |
| 5 | `3701459066896` | 99,90 EUR TTC |
| 6 | `3701459055838` | 29,90 EUR TTC |
| 7 | `3701459064779` | 19,90 EUR TTC |
| 8 | `3701459060016` | Hors vente, cadeau ou avantage client |
| 9 | `3701459003600` | Hors vente, cadeau ou avantage client |
| 10 | `3701459060023` | Hors vente, cadeau ou avantage client |
| 11 | `3701459049356` | Hors vente, cadeau ou avantage client |
| 12 | `3701459060122` | Hors vente, cadeau ou avantage client |
| 13 | `3701459023387` | Hors vente, cadeau ou avantage client |
| 14 | `3701459043132` | 4,90 EUR TTC |
| 15 | `3701459065127` | 14,90 EUR TTC |

Les six references hors vente restent tracees dans le stock physique. Elles ne recoivent aucun prix a 0 EUR et aucun produit Shopify.

## Ecritures et controle du Sheet

- Sheet : `Inventaire canonique`, sheetId `1034959372`.
- Les neuf prix ont ete ecrits comme nombres dans la colonne prix de vente TTC.
- La source indique `Prix fixe par Patrice le 2026-08-29`.
- Les six autres lignes portent `HORS VENTE - cadeau/avantage client - decision Patrice 2026-08-29` et gardent le prix vide.
- Les 15 lignes ont ete relues apres ecriture. Les formules, validations et formats de colonnes n'ont pas ete modifies.

Six achats fournisseur etaient factures par lots alors que le stock physique et le prix Patrice sont unitaires. Les quantites et couts unitaires ont ete normalises dans la vue inventaire, sans modifier les lignes d'achat brutes :

- lot de 2 : EAN `3701459069354` et `3701459064779` ;
- lot de 3 : EAN `3701459069927`, `3701459069910` et `3701459065127` ;
- lot de 5 : EAN `3701459043132`.

Les neuf references vendables conservent une contribution indicative positive avant paiement, expedition et retours. Le Sheet continue de les signaler `INCOMPLETE - HYPOTHESES` tant que ces couts complets ne sont pas confirmes. Aucun taux de marge complet n'est presente comme valide.

## Etat consolide

- Vue physique : 185 references et 456 unites.
- Shopify exact : 79 `ACTIVE`, 9 `DRAFT`, 97 absentes.
- Ledger 175 : 71 actives, 98 `queued`, 6 `excluded-non-sale`, 0 `blocked-price`.
- Classification de file : 71 `active-cutover`, 91 `create`, 7 `update-draft`, 6 `excluded-non-sale`.
- Prochain item reel : position 72, EAN `3701459084494`, collier boule 04 mm lapis-lazuli Afghanistan AA.

L'ancien rang 61 est obsolete apres l'audit Shopify frais : onze positions supplementaires sont maintenant classees actives. L'EAN de reprise reste le meme.

## Pipeline local et Camilla

Le pipeline comprend maintenant le champ `catalogue_disposition` avec deux chemins explicites :

- `retail` : prix obligatoire et passage dans la file `create` ou `update-draft` ;
- `customer-advantage` : conservation dans l'inventaire, classification `excluded-non-sale` et aucune preparation de produit Shopify.

Sauvegarde locale avant modification :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/backups/2026-08-29T1013-price-dispositions`

Camilla a ete synchronisee sans suppression vers :

`/docker/hermes-milaura-control/data/milaura-generation-nouveau-produit`

Le seul conteneur `hermes-milaura-control` a ete redemarre. Son controle `--files-only` passe notamment :

- `CAMILLA_PRICE_DISPOSITION_DECISIONS_READY` ;
- `CAMILLA_INVENTORY_185_BUILDERS_READY` ;
- `CAMILLA_WORKFLOW_FILES_READY`.

Le dry-run rsync avec comparaison checksum ne retourne aucun fichier divergent entre les chemins cibles locaux et VPS.

## Verifications

- `scripts/test_pipeline_local.sh` : `PIPELINE_LOCAL_TESTS_PASSED` ;
- `.venv/bin/python scripts/test_contract_addendum.py` : `CONTRACT_V1_3_TEST_PASSED` ;
- construction consolidee : `INVENTORY_CONSOLIDATED_185_PASSED` ;
- audit Shopify frais avec limite 1000 : 658 produits lus ;
- test Camilla dans le conteneur : PASS ;
- parite locale/VPS ciblee par checksum : aucune divergence.

## Gates restantes

- Aucun produit Shopify n'a ete cree, modifie, active ou publie par ce lot.
- Chaque prochaine reference exige encore controle identite, stock, cout complet, prix, visuels et brouillon avant validation Patrice.
- L'arbitrage des variantes reste ouvert dans une future session specialisee. Il ne bloque pas la reprise du workflow mono-variante courant.
- Prochaine reprise copiable : `Reprendre le workflow produit V3 a la position 72, EAN 3701459084494. Auditer identite, stock, cout et prix, puis preparer le brouillon avec exactement cinq images V3. Ne rien publier sans validation Patrice et GO Admin distinct.`
