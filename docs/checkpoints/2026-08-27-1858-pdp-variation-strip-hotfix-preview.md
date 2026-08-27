# Hotfix PDP variations, preview compacte

Date : 2026-08-27 18:58 CEST
Branche : `codex/milaura-pdp-variation-strip-hotfix-20260827`
Base : `5094436a`
Theme de developpement : `199421952347`
Theme live : `190430282075`, pousse apres GO explicite

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

Patrice a donne le GO live explicite le 2026-08-27 avec le message `go live`.

## Deploiement live

- Preflight live : les 3 fichiers cibles correspondaient exactement a la base `5094436a`. Aucune derive concurrente du theme.
- Push cible sur le theme live `190430282075` avec `--only`, `--nodelete`, `--strict` et `--allow-live` : PASS.
- Pullback live : 3 fichiers sur 3 identiques au worktree.
- HTML public controle sur `bracelet-labradorite` et `bague-ouverte-doree-en-aigue-marine-naturelle-taille-54`.
- Le bandeau, `Photos non contractuelles` et `Chaque exemplaire est unique` sont presents sur les deux PDP.
- `MilauraVariationModal`, `Demander une photo` et `milaura-product-variation-modal` sont absents des deux PDP.

Le deploiement a ete effectue depuis le worktree propre du hotfix. Le checkout canonique contenait au meme moment un handoff inventaire non committe limite a la documentation. Ces modifications concurrentes ont ete preservees et aucun de leurs fichiers n a ete stage, modifie ou ecrase par ce lot.

## Etat a 19:04 CEST

Hotfix live et controle. La branche du lot reste la source Git propre et poussee. Son integration dans `codex/milaura-integration` attend la fermeture du handoff inventaire concurrent afin de preserver sa documentation.
