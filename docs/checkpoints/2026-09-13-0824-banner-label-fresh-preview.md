# Repere AVANTAGE MILAURA et preview reconstruite

Date : 2026-09-13 08:24 CEST

Statut : `PREVIEW PRIVEE PRETE, LIVE INCHANGE`

## Correction visuelle

- le repere `AVANTAGE MILAURA` precede chacun des trois avantages ;
- sa couleur aigue-marine et ses capitales le distinguent du benefice principal sans concurrencer celui-ci ;
- sur bureau, le repere reste sur la meme ligne et est separe du message par un filet or ;
- sur mobile, il passe au-dessus du message pour conserver une lecture immediate ;
- la hauteur mobile passe de `56 px` a `62 px` afin d eviter tout tassement ou rognage.

## Preview fidele au live

L ancienne preview `200974958939` contenait un Hero obsolete. Le nouveau theme prive `201311519067` a ete reconstruit a partir du theme live courant `190430282075`, puis seul `sections/milaura-announcement.liquid` a ete remplace par la version de travail. Le Hero actuel `Vos emotions ont du style.` et son mannequin sont maintenant visibles dans la recette.

## Verification

- `python3 tools/check_copywriting.py` : PASS, 350 fichiers controles ;
- `shopify theme check --fail-level error` : PASS, zero erreur et 16 avertissements historiques hors lot ;
- `git diff --check` : PASS ;
- pullback du theme prive : fichier distant identique au fichier local, SHA-256 `ba461da8938441708afbf558b8b5af11ce89e39eb757fde315505870d13c56a5` ;
- QA navigateur a `360`, `390`, `430` et `1440 px` : trois messages lisibles, compteur correct, Hero actuel confirme, aucun rognage visible ;
- journal navigateur : aucune erreur ni aucun avertissement ;
- theme live `190430282075` : non modifie.

## Preview

`https://milaura.fr/?preview_theme_id=201311519067&_fd=0&pb=0`

## Gate suivante

Attendre le GO visuel explicite de Patrice. Ce checkpoint ne vaut ni integration dans le checkout principal ni publication live.
