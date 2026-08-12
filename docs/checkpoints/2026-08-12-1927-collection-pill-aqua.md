# Capsule de titre collection aigue-marine

Date : 2026-08-12 19:27 CEST
Branche : `codex/milaura-collection-pill-aqua-20260812`
Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/collection-pill-aqua-20260812`
Statut : prêt à intégrer après commit et push du lot

## Autorisation et périmètre

Patrice a validé le 2026-08-12 la variante aigue-marine de la capsule de titre des collections et a demandé son application à toutes les pages utilisant `milaura-collection-hero`.

Le lot reste limité à :

- `sections/milaura-collection-hero.liquid` ;
- ce checkpoint.

Aucun fichier PDP, produit, catalogue, navigation, panier ou homepage n'a été modifié. Aucun changement Shopify n'a été exécuté depuis ce worktree.

## Changements

- fond de la capsule : dégradé du token existant `--milaura-surface-aqua` (`#DDF8F4`) vers `#BFEAE3` ;
- texte et curseur : prune `#4A3147` ;
- point doré et animation de déploiement conservés ;
- ombre et liseré recalibrés pour le fond aigue-marine ;
- compteur traduit en `modèle` ou `modèles` ;
- ajout d'une réserve basse de `0.2em` dans le masque du typing pour ne plus couper le jambage du `g` de `Bagues` ;
- version interne de la section passée de `4.1.0` à `4.2.0`.

Le titre de la collection Shopify n'est pas modifié par ce lot.

## Validation

- `git diff --check` : réussi ;
- `shopify theme check --fail-level error` : réussi, 0 erreur ;
- Theme Check global : 29 avertissements historiques dans 12 fichiers, aucun dans `sections/milaura-collection-hero.liquid` ;
- contrôle visuel desktop : texte prune lisible, jambage du `g` visible, compteur stable ;
- contrôle visuel mobile : capsule contenue dans la largeur, jambage du `g` visible, compteur stable ;
- `prefers-reduced-motion` reste pris en charge par la section existante.

Captures hors dépôt :

- `/Users/paesano/.codex/visualizations/2026/08/12/019ff698-b556-72a0-91a0-4f7554eb145b/milaura-capsule-aigue-marine-desktop.png` ;
- `/Users/paesano/.codex/visualizations/2026/08/12/019ff698-b556-72a0-91a0-4f7554eb145b/milaura-capsule-aigue-marine-mobile.png`.

## Remise au propriétaire d'intégration

Après intégration du commit de ce lot :

1. relancer `git diff --check` et Theme Check ;
2. pousser uniquement `sections/milaura-collection-hero.liquid` vers le thème live `190430282075` avec `--only`, `--nodelete`, `--strict` et `--allow-live` ;
3. effectuer un pullback ciblé et comparer le fichier bit à bit ;
4. contrôler au minimum `/collections/bagues-pierres` et une seconde collection sur mobile et desktop ;
5. fermer le lot dans `docs/workstreams.md`, puis retirer le worktree selon la procédure.

## Cloture d'integration

Date : 2026-08-12 19:37 CEST

- Commit integre sur `codex/milaura-integration` : `6f9b90b5`.
- Branche d'integration poussee sur GitHub.
- Seul `sections/milaura-collection-hero.liquid` a ete pousse sur le theme live `190430282075` avec `--only`, `--nodelete`, `--strict` et `--allow-live`.
- Pullback live identique bit a bit.
- SHA-256 local et live : `a68655062d2a69d19b69a1f1d4b7f55a61e186980c39dcd88c0a552d2da1b032`.
- `/collections/bagues-pierres` validee sur desktop : fond aigue-marine, texte prune, `6 modeles`, un H1, aucun debordement.
- `/collections/par-pierre-aigue-marine` validee sur mobile : fond aigue-marine, texte prune, point dore, `6 modeles`, reserve basse du typewriter a `3.2 px`, un H1, aucun debordement.
- Statut final : live et ferme.
