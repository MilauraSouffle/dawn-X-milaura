# Production de cinq fiches fournisseur en DRAFT

Date : 2026-09-08 09:50 CEST

## Decision de Patrice

Patrice ne veut plus de la baguette Pyrite sur le site. Il autorise la production complete de cinq autres anciennes fiches avec texte Sol, images selon le workflow MilAura, statut DRAFT et une quantite interne de preparation a 1. Il conserve la revue visuelle et toute activation ulterieure.

## Resultat Shopify

| Produit | ID Shopify | EAN | Prix | Stock | Images | Etat |
|---|---:|---:|---:|---:|---:|---|
| Bracelet baroque en seraphinite AA | 10357443330395 | 3701459058181 | 12,90 EUR | 1 interne | 5 | DRAFT |
| Collier en jaspe rouge 6 mm | 10402430452059 | 3701459074594 | 17,90 EUR | 1 interne | 5 | DRAFT |
| Collier en pyrite 8 mm | 10357493203291 | 3701459074938 | 22,90 EUR | 1 interne | 5 | DRAFT |
| Pendule hexagonal en labradorite AB | 10358581625179 | 3701459037612 | 9,90 EUR | 1 interne | 5 | DRAFT |
| Pendule hexagonal en oeil de tigre A | 10357688631643 | 3701459037650 | 9,90 EUR | 1 interne | 5 | DRAFT |

Les cinq produits ont `onlineStoreUrl=null`, suivi de stock actif, politique `DENY`, `milaura.availability_mode=supplier-backed` et `milaura.supplier_status=disponible`. La disponibilite fournisseur a ete verifiee sur les cinq pages exactes Camille Ambiance Nature le 2026-09-08. La quantite 1 sert uniquement a la preparation et au controle interne. Elle ne prouve pas un stock physique et ne permet pas la publication.

Le Collier Jaspe rouge avait une variante sans SKU ni code-barres. Son identite a ete completee avec la valeur exacte `3701459074594`. Le prix du Pendule Oeil de tigre a ete corrige de 12,50 a 9,90 EUR, prix public CAN explicite par piece. Les quatre autres prix correspondaient deja aux prix CAN.

La baguette Pyrite `10357681619291`, EAN `3701459092857`, handle historique `bague-pyrite`, a ete passee de `ACTIVE` a `DRAFT`. Elle reste a stock zero, politique `DENY`, `onlineStoreUrl=null`. Son ancien contenu et ses trois images sont preserves. Il n'y a eu aucune suppression definitive Shopify.

## Contenu et images

Les textes des cinq fiches ont ete produits et relus par Sol selon le guide MilAura. Chaque fiche comprend description commerciale, SEO, donnees techniques, FAQ, histoire, entretien et metachamps de catalogue. L'onglet pierre de chaque produit contient quatre phrases consacrees a la pierre : aspect observable, variations naturelles, symbolique lithotherapie et rendu dans le produit concerne.

Chaque galerie contient exactement cinq PNG 1024 par 1024 : couverture claire, macro, nature morte contrastee, scene calme avec encart issu des memes pixels et scene vive. Les visuels finaux ont ete produits a partir des images Shopify sous controle MilAura et des faits produit verifies. Aucun pixel CAN n'a ete transmis comme reference ni publie comme image finale.

## Workflow et securite

La taxonomie `seraphinite` manquait au pipeline. Elle a ete ajoutee dans :

- `schemas/product_enrichment_v1.schema.json` ;
- `scripts/quality_gate.py` ;
- `scripts/test_contract_addendum.py` ;
- `docs/milaura-product-agent-contract.md` ;
- `prompts/text_enrichment_system_v1.md`.

Sauvegarde prealable :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/snapshots/2026-09-08-0720-seraphinite-taxonomy/`

Le test local complet du pipeline est PASS, dont schema JSON, contrat V1.3, taxonomie Seraphinite, quality gate, galerie V4.1 et garde-fous Shopify.

Deux scripts bornes et dates assurent la reprise sans elargir le perimetre :

- `scripts/stage_selected_5_and_retire_baguette_20260908.py` ;
- `scripts/finalize_selected_5_supplier_drafts_20260908.py` ;
- `scripts/apply_selected_5_supplier_drafts_20260908.py`.

## Preuves et rollback

Batch durable :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-08-active-oos-five-supplier-backed/`

Il contient les sources fournisseur, les payloads Sol, les galeries, les originaux natifs, les manifestes de generation, les snapshots de statut, les preflights, les resultats Shopify, la lecture apres production et les sauvegardes des anciennes galeries. Resultat d'ecriture initial : `live/20260908T074721Z-result.json`. Cloture idempotente finale : `live/20260908T075630Z-result.json`. Lecture independante : `live/shopify-after-production-20260908.json`.

Une premiere verification de la Seraphinite a signale uniquement des espaces ajoutes par Shopify dans les listes HTML. Le contenu etait identique. Le comparateur a ete normalise, la fiche a ete reconnue comme deja conforme et la reprise a traite les quatre autres sans recharger sa galerie. Le resultat final est PASS 5 sur 5.

Aucun fichier theme n'a ete modifie ou deploye. Les mutations de production concernent uniquement Shopify Admin et restent invisibles aux visiteurs car les six produits sont DRAFT.

## Prochaine gate

Patrice controle visuellement les cinq DRAFT dans Shopify Admin. Ne publier aucun produit sans son nouveau GO explicite. Apres cette revue, relire les autres anciennes fiches encore `ACTIVE` et en rupture, puis faire arbitrer chaque reference entre enrichissement V4.1 et retrait du storefront.

## Prompt de reprise

```text
Reprends MilAura depuis docs/checkpoints/2026-09-08-0950-selected-five-draft-production.md. Les cinq fiches selectionnees sont enrichies dans Shopify mais restent DRAFT avec une quantite interne de preparation a 1 ; la baguette Pyrite reste DRAFT a zero et ne doit pas revenir sur le site. Commence par relire les cinq IDs et attends mon verdict visuel avant toute activation. Ensuite, audite les anciennes fiches encore ACTIVE et en rupture afin que je decide produit par produit entre enrichissement V4.1 et retrait. Preserve les IDs et handles historiques. Ne publie, ne supprime et ne modifie aucun stock par deduction.
```
