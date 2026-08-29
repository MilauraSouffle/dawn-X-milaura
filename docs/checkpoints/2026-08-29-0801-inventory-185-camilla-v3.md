# Checkpoint MilAura - inventaire 185 et parite Camilla V3

Date : 2026-08-29 08:01 CEST
Statut : `FERME TECHNIQUEMENT - DECISION VARIANTES OUVERTE - AUCUNE MUTATION PRODUIT`

## Resultat

La source inventaire est maintenant consolidee selon l equation exacte :

`185 references = ledger 175 + pilote 10`

- 456 unites physiques ;
- 79 produits `ACTIVE` ;
- 9 produits `DRAFT` ;
- 97 references absentes de Shopify ;
- 88 correspondances Shopify exactes par EAN ;
- 81 stocks Shopify exacts ;
- 7 ecarts de stock, tous limites aux anciens `update-draft` du ledger ;
- 71 photos `validee pipeline + Patrice` ;
- 114 photos `a valider` ;
- aucun EAN positif duplique.

## Rapprochement des dix EAN pilote

Les lignes `5`, `6`, `8`, `10`, `19`, `21`, `73`, `133`, `154` et `172` de l onglet `Inventaire canonique` ont ete rapprochees avec un audit Shopify frais.

Cellules factuelles mises a jour : identifiants produit et variant, statut, titre exact, URL publique quand active, URL Admin, SKU, barcode, quantite Shopify observee, mode de stock, couverture Shopify, preuve et date `2026-08-29`.

Cellules volontairement preservees : stock physique, prix, couts, formules, validations, notes calculees et validation photo. Les dix lignes restent `Photo fidele validee = a valider`.

Resultat pilote :

- 8 `ACTIVE` ;
- 2 `DRAFT` ;
- 23 unites ;
- 10 identites SKU/barcode exactes ;
- 10 stocks exacts ;
- 5 galeries a cinq images et 5 galeries historiques a six images.

Sheet : `https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit`

## Artefacts persistants

Workspace prive :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

- `scripts/build_inventory_consolidated_view.py` ;
- `data/catalogue-batches/2026-08-25-physical-stock-175/consolidated-185.json` ;
- `data/pilot-batches/2026-08-25-physical-stock-pilot-10/shopify-reconciliation-2026-08-29.json` ;
- `scripts/build_physical_stock_queue.py` corrige vers cinq images ;
- manifeste global, master queue et 18 manifestes de lots corriges vers cinq images ;
- `scripts/shopify_read_audit.py` pagine maintenant le catalogue complet au-dela de 250 produits ;
- `scripts/test_camilla_readiness.sh` exige les deux auditeurs et les deux builders inventaire.

Sauvegarde locale pre-mutation :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/backups/2026-08-29T0758-inventory-185-v3-camilla`

## Contrat image corrige

Le contrat actif est exactement cinq images V3 :

1. cover produit seul ;
2. vraie macro produit seul ;
3. nature morte contrastee produit seul ;
4. scene humaine calme avec macro portee integree ;
5. scene humaine vive et distincte.

Les references actives a trois ou six images sont des galeries historiques. Elles ne prouvent pas V3 et ne sont pas regenerees automatiquement.

Les anciennes mentions actives de six images ont ete retirees de :

- `scripts/build_physical_stock_queue.py` ;
- `docs/project-state.md` ;
- manifeste global, master queue et manifestes de lots encore actifs.

Les sauvegardes et preuves historiques restent intactes.

## Camilla VPS

Hote : `/docker/hermes-milaura-control/data/milaura-generation-nouveau-produit`

Conteneur : `/opt/data/milaura-generation-nouveau-produit`

Sauvegarde distante pre-mutation :

`/docker/hermes-milaura-control/data/backups/2026-08-29T0756-inventory-185-v3-camilla`

Actions :

- sauvegarde ciblee et recuperable ;
- creation explicite des repertoires parents inventaire manquants ;
- rsync cible avec `--relative`, sans suppression et sans secret ;
- synchronisation des regles, prompts, schema, scripts, tests, builders, auditeurs et artefacts 185 ;
- confirmation que le skill Camilla installe et le skill canonique ont la meme empreinte SHA-256 ;
- redemarrage du seul conteneur `hermes-milaura-control` ;
- checksum dry-run local/VPS sans fichier divergent.

Etat final : `running`, `restarting=false`.

Tests conteneur :

- `CONTRACT_V1_3_TEST_PASSED` ;
- `PIPELINE_LOCAL_TESTS_PASSED` ;
- `CAMILLA_SHOPIFY_READ_AUDITORS_READY` ;
- `CAMILLA_INVENTORY_185_BUILDERS_READY`.

## Controle variantes avant decision

L audit Shopify complet du 2026-08-29 couvre 658 produits : 330 `ACTIVE`, 312 `DRAFT`, 15 `ARCHIVED`, 1 `UNLISTED`. Aucun produit ne comporte actuellement plus d une variante.

Dans les 185 references physiques :

- 82 sont des bracelets ;
- 39 bracelets mentionnent explicitement un diametre en mm ;
- 8 boucles d oreilles mentionnent explicitement un diametre ;
- 5 familles exactes, soit 14 EAN, ne different que par diametre.

Familles prouvees :

1. puces cornaline 6, 8 et 10 mm ;
2. puces quartz rose 6, 8 et 10 mm ;
3. bracelets boule cornaline 6, 8, 10 et 14 mm ;
4. bracelets boule pierre de lune multicolore 6 et 10 mm ;
5. bracelets boule quartz rose 6 et 12 mm.

Etat des 14 EAN : 5 `ACTIVE`, 2 `DRAFT`, 7 absents.

Le theme est deja capable d afficher un selecteur a une dimension et de mettre a jour variante, prix, media, URL et CTA. Il n existe cependant aucune preuve live sur un vrai produit multi-variante MilAura. Le pipeline est mono-variante : le schema contient un objet `shopify.variant` unique et `update_shopify_draft.py` refuse les produits qui ne possedent pas exactement une variante.

## Decision ouverte avec Patrice

Aucune fusion n a ete executee. Le rang 61 est suspendu jusqu a la decision.

Recommandation a discuter : une fiche produit par famille exacte, avec une variante par diametre ou taille, a condition que chaque variante conserve son EAN, son SKU, son prix, son stock et son image fidele. Garder des fiches distinctes si la pierre, la qualite, la provenance, la construction, le modele ou la promesse produit changent.

Le premier pilote le plus propre serait une famille encore majoritairement non publiee, pas une fusion immediate des fiches quartz rose actives. Le lot doit d abord etendre le schema, les create/update, l affectation des medias, le feed, les redirections et les tests, puis passer sur un brouillon prive.

## Hors perimetre confirme

- aucune publication produit ;
- aucune activation ou archivage produit ;
- aucune mutation de prix ou stock ;
- aucune fusion ou redirection ;
- aucun changement de theme ;
- aucun push ou deploiement Shopify theme ;
- aucun arbitrage variantes pris a la place de Patrice.

## Reprise copiable

```text
Reprends l inventaire MilAura au 2026-08-29 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Lis AGENTS.md, docs/project-state.md, docs/workstreams.md et docs/checkpoints/2026-08-29-0801-inventory-185-camilla-v3.md. La vue canonique est 185 references = ledger 175 + pilote 10, 456 unites, 79 ACTIVE, 9 DRAFT, 97 absentes. Camilla et le pipeline local passent CONTRACT_V1_3_TEST_PASSED et PIPELINE_LOCAL_TESTS_PASSED avec exactement cinq images V3. Ne reprends pas le rang 61. Commence par discuter avec Patrice de l architecture variantes a partir des cinq familles et 14 EAN identifies. Aucune fusion, mutation produit, stock, prix, publication, theme ou live sans decision et GO distincts.
```
