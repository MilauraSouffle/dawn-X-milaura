# Hotfix PDP variations, preview compacte

Date : 2026-08-27 18:58 CEST
Branche : `codex/milaura-pdp-variation-strip-hotfix-20260827`
Base : `5094436a`
Theme de developpement : `199421952347`
Theme live : `190430282075`, non modifie par ce lot

## Probleme signale

Patrice a refuse le modal public le 2026-08-27 : dimensions excessives sur desktop et mobile, fermeture difficilement accessible, rendu non premium et CTA `Demander une photo` contraire au parcours d achat.

La demande finale est une information passive et immediate sous la galerie. Aucun clic, aucune ouverture, aucune redirection et aucune invitation a quitter la fiche produit.

## Solution

Le modal, son bouton de fermeture, son texte long et son CTA ont ete retires integralement.

Le bouton `Photos et variations naturelles` a ete remplace par un bandeau statique transparent, delimite par deux filets fins et compose d un marqueur information plus ce texte :

> Photos non contractuelles. La teinte, le veinage, la forme des pierres naturelles et certains details d assemblage peuvent varier legerement. Chaque exemplaire est unique.

Le composant ne contient aucun lien et aucune interaction.

## Fichiers theme

- `sections/milaura-product-hero.liquid`
- `sections/milaura-product-experience.liquid`
- `assets/milaura-product-experience.css`

## Verification

- `git diff --check` : PASS.
- Theme Check : 0 erreur, 16 avertissements historiques dans 8 fichiers non modifies.
- Preflight du theme de developpement : 3 fichiers sur 3 identiques a la base `5094436a` avant push.
- Push cible sur le theme de developpement `199421952347` avec `--only`, `--nodelete` et `--strict` : PASS.
- Pullback apres push : 3 fichiers sur 3 identiques au worktree.
- HTML de preview controle sur `bracelet-labradorite` : bandeau et nouveau texte presents.
- Les chaines `MilauraVariationModal`, `Demander une photo` et `milaura-product-variation-modal` sont absentes du HTML de preview.
- Aucun controle visuel automatise n a ete lance. Patrice controle la preview sur desktop et mobile.

## Gate

Preview technique PASS. Un nouveau GO visuel et live explicite de Patrice est requis avant toute modification du theme live `190430282075`.
