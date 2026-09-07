# Corrections Sol des contenus pierre, mise en ligne

Date : 2026-09-07

Statut : `PASS`, corrections appliquees au catalogue Shopify live

## Perimetre

- 228 decisions relues par `gpt-5.6-sol` en raisonnement `xhigh`.
- 207 decisions confirmees sans changement.
- 21 corrections ciblees :
  - 17 remplacements de `milaura.stone_description` ;
  - 1 suppression de `milaura.stone_description` faute de preuve visuelle suffisante ;
  - 3 corrections de `milaura.stone_handles`.
- Les 7 exclusions de la passe initiale restent validees.

## Resultat live

- Preflight Shopify : `PASS` sur 21 produits.
- Ecritures Shopify : 20 metafields modifies.
- Suppressions Shopify : 1 metafield supprime.
- Pullback Shopify : 21/21 produits conformes.
- Aucun titre, handle, URL, statut, prix, stock, variante, image ou rattachement de collection modifie.

## Verification storefront

- Le bracelet en obsidienne noire affiche le nouveau texte commencant par `L'obsidienne noire se distingue par son noir profond et son eclat vitreux`.
- Le bracelet Unys affiche le nouveau texte distinct pour l'onyx et l'oeil de taureau.
- La grenouille en quartz rose conserve les faits pierre mais n'affiche plus la description d'apparence non prouvee.

## Preuves

- Revue Sol : `docs/audits/2026-09-07-stone-sol-review.md`
- Lignes corrigees : `docs/audits/2026-09-07-stone-sol-flagged.csv`
- Manifeste d'application : `docs/audits/2026-09-07-stone-sol-corrections-manifest.json`
- Script cible : `scripts/apply_stone_sol_corrections_20260907.py`
- Preflight live archive : `data/catalogue-batches/2026-09-07-active-p0-supplier-backed-16/live/stone-sol-corrections/20260907T154940Z-preflight.json`
- Resultat live archive : `data/catalogue-batches/2026-09-07-active-p0-supplier-backed-16/live/stone-sol-corrections/20260907T154940Z-result.json`

Les deux derniers chemins sont dans le workspace prive `milaura-automation/private-workspace/product-generation/`.
