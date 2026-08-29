# Sept brouillons Shopify remis au contrat V3

Date : 2026-08-29 11:50 CEST

Statut : `PASS TECHNIQUE - DRAFT - VALIDATION VISUELLE PATRICE REQUISE`

## Resultat

Les sept brouillons Shopify historiques vises par Patrice ont ete remis au workflow produit courant. Chaque fiche dispose maintenant de son identite controlee, de son stock physique, de son prix TTC, de son cout fournisseur, de ses contenus et metafields, puis d exactement cinq images V3 dans l ordre contractuel.

Les sept produits restent en `DRAFT`. Leur `onlineStoreUrl` est `null`. Aucun canal, hub, collection publique, theme ou produit live n a ete active.

| EAN | Produit Shopify | Titre | Prix TTC | Cout HT | Stock | Gate |
| --- | ---: | --- | ---: | ---: | ---: | --- |
| `3701459056040` | `10358583951707` | Plaque Fleur de Vie ajouree en bois - 10 cm | 8,90 EUR | 6,14 EUR | 2 | PASS technique |
| `3667407007277` | `10358582215003` | Plaque Fleur de Vie decoupee en bois - 20 cm | 22,50 EUR | 6,82 EUR | 2 | PASS technique |
| `3701459056088` | `10358584377691` | Plaque Fleur de Vie gravee en bois - 10 cm | 8,90 EUR | 4,80 EUR | 1 | PASS technique |
| `3701459082087` | `10357429371227` | Boucles d oreilles puces en quartz rose 6 mm | 10,90 EUR | 4,68 EUR | 3 | PASS technique |
| `3701459081790` | `10358581756251` | Baton de fumigation a l eucalyptus - 10 cm | 9,90 EUR | 5,87 EUR | 1 | PASS technique |
| `3701459056163` | `10358583853403` | Plaque Fleur de Vie et Oeil d Horus en bois - 10 cm | 8,90 EUR | 8,20 EUR | 2 | PASS technique, prix a arbitrer avant publication |
| `3701459080281` | `10357690171739` | Baton de fumigation a l herbe sacree - 10 cm | 9,90 EUR | 5,17 EUR | 2 | PASS technique |

## Preuves

- preuves fournisseur rafraichies et authentifiees le 2026-08-29 ;
- controles texte puis controles finaux : 7 sur 7 PASS ;
- galeries : 35 images carrees RGB de 1024 x 1024, soit cinq par produit ;
- generation native V3 depuis les vraies references fournisseur ; pour le bijou porte, les slots 4 et 5 emploient la meme identite Elena ;
- snapshots Shopify avant mutation conserves dans `data/catalogue-batches/2026-08-25-physical-stock-175/draft-update-07/shopify-snapshots/` ;
- audit Shopify frais : `data/catalogue-batches/2026-08-25-physical-stock-175/draft-update-07/shopify-post-update-audit.json`, `verified: true`, aucune failure ;
- les deux definitions Shopify d intentions acceptent maintenant `purification`, sans perte des choix ni validations existants.

## Parite Camilla

Le VPS a recu les cinq scripts modifies ou ajoutes et le schema courant. Les six empreintes SHA-256 locales et VPS sont identiques. Le conteneur `hermes-milaura-control` est `running` et son environnement persistant `/opt/data/milaura-generation-nouveau-produit/.venv` passe la compilation Python, la validation JSON du schema et les points d entree des nouveaux auditeurs : `CAMILLA_WORKFLOW_RUNTIME_PASS`.

Camilla doit executer ce workflow avec `.venv/bin/python`, jamais avec le Python systeme du conteneur qui ne contient pas les dependances applicatives.

## Gates restantes

1. Patrice inspecte les sept fiches une par une et rend `VALIDE` ou `A REVOIR`.
2. La fiche Oeil d Horus exige aussi une decision de prix : 8,90 EUR TTC pour un cout fournisseur de 8,20 EUR HT ne permet pas une marge normale.
3. Une validation visuelle ne vaut pas autorisation de publication. Chaque activation Shopify reste une action separee.

