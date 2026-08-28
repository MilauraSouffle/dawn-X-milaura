# Handoff Codex MilAura, inventaire a 71 produits actifs

Date : 2026-08-28 18:15 CEST

## Etat de reprise

La session inventaire est fermee avec Shopify, le Sheet et le ledger rapproches :

- 71 produits traites et `ACTIVE` ;
- 89 references `queued` ;
- 15 references `blocked-price`, reportees a une tache ulterieure a la demande de Patrice ;
- aucun brouillon traite pendant cette session ne reste a publier.

Le ledger distingue 54 `active-user-approved-sheet-proved` et 17 `active-workflow-v3-sheet-proved`. Ne jamais convertir automatiquement la premiere categorie en preuve V3.

Patrice a valide et active les deux dernieres fiches :

- bague aigue-marine `10669860192603`, EAN `3667407015593`, avec cinq images V3 corrigees ;
- boucles Ornel dorees `10670433993051`, EAN `3667407007796`, physiquement controlees et acceptees avec leur galerie historique.

Ne rouvrir aucune de ces deux fiches sans nouvelle demande explicite.

## Sources obligatoires

Lire dans cet ordre :

1. `AGENTS.md` ;
2. `docs/project-state.md` ;
3. `docs/workstreams.md` ;
4. `docs/checkpoints/2026-08-28-1815-inventory-71-active-v3-handoff.md` ;
5. le ledger prive courant ;
6. la preuve de synchronisation du Sheet ;
7. un nouvel audit Shopify en lecture seule.

Workspace produit :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

Ledger :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-08-25-physical-stock-175/ledger.json`

Preuves de cloture :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-08-25-physical-stock-175/activation-closeout-2026-08-28/`

Sheet canonique :

`https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit?gid=1034959372#gid=1034959372`

## Workflow V3

Une galerie V3 contient exactement cinq images :

1. couverture produit seul sur mineral clair ;
2. vraie macro produit ;
3. produit seul sur support contraste ;
4. scene humaine calme avec inset de macro portee ;
5. scene humaine vive distincte, sans inset.

Seuls les slots 4 et 5 sont humains. Conserver la meme identite de modele par produit. Proportions, nombre de composants, couleur de pierre, metal, fermeture et anatomie sont des gates dures. Aucun habillage saisonnier. Generer et valider slot par slot. Bracelet Iris `10669947781467`, EAN `3667407021495`, reste le benchmark.

Camilla avait passe le contrat V1.3 et les tests locaux au 2026-08-27. Recontroler le runtime si necessaire avant de s'en servir.

## Premiere decision : quartz rose 6, 8 et 10 mm

Les trois puces d'oreilles quartz rose sont le meme modele et devraient, sous reserve des controles techniques, devenir une fiche unique avec option `Diametre` :

- 6 mm, EAN `3701459082087`, stock 3, prix `10,90 EUR`, encore `queued` au rang 106 ;
- 8 mm, EAN `3701459082186`, Shopify `10357431796059`, stock 4, prix `10,90 EUR`, active et V3 ;
- 10 mm, EAN `3701459082285`, Shopify `10357432353115`, stock 3, prix `12,90 EUR`, active et V3.

Verifier avant fusion : galerie et media par variante dans le theme, trafic et ventes des deux URL actives, EAN, prix, stock, panier, redirections, SEO et Google Merchant. Par defaut, garder 8 mm comme parent canonique, sauf preuve que 10 mm porte davantage de valeur. Ne supprimer aucune ancienne fiche avant validation des redirections et du feed.

Aucune fusion n'a ete faite pendant la session close.

## Reprise de la file

Apres l'arbitrage quartz rose, commencer au rang 61 :

- EAN `3701459084494`, collier lapis-lazuli 4 mm, stock 1, creation ;
- puis rangs 62 a 66 : colliers howlite blanche, hematite, oeil de taureau, oeil de tigre et rhodonite en 6 mm.

Repartir du ledger courant, pas d'un compteur recopie. Rapprocher l'EAN exact avant toute creation ou mise a jour. Ne jamais inventer un prix. Les 15 prix bloques restent hors scope tant que Patrice ne rouvre pas cette tache.

## Etat technique et limites

- Aucun deploiement de theme n'a ete effectue pendant cette session inventaire.
- Les produits cites comme actifs ont ete verifies par audit Shopify frais avant le handoff.
- Les 54 activations ont ete relues dans le Sheet apres ecriture, 54 sur 54 conformes.
- Le repo `Agentic-Ops` est sale avec des travaux concurrents sans rapport ; ils ont ete preserves et ne doivent pas etre stages, revertes ou pousses par la reprise inventaire.
- La source produit privee est ignoree par Git. Conserver les preuves absolues et refaire des lectures fraches avant toute mutation.

## Prompt de reprise copiable

```text
Reprenons l'inventaire MilAura depuis le handoff du 2026-08-28. Lis AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md et docs/checkpoints/2026-08-28-1815-inventory-71-active-v3-handoff.md. Commence en lecture seule par un audit Shopify frais et une verification du ledger et du Sheet. Le snapshot ferme est 71 produits traites et actifs, 89 queued et 15 blocked-price. La bague aigue-marine et les Ornel sont validees et actives, ne les rouvre pas. Premier arbitrage : regrouper les puces quartz rose 6, 8 et 10 mm en variantes sans perdre EAN, prix, stock, medias, SEO ni feed. Ensuite reprends le workflow visuel V3 au rang 61. Le chantier des 15 prix manquants reste reporte.
```
