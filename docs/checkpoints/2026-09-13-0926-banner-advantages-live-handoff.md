# Bandeau des avantages MilAura livre sur le live

Date : 2026-09-13 09:26 CEST

Statut : `FERME, BRANCHE POUSSEE, SHOPIFY LIVE VERIFIE`

## Livraison

Apres validation visuelle puis GO live explicites de Patrice, le bandeau superieur public presente trois avantages distincts :

1. expedition offerte en point relais des 30 euros d achat ;
2. cadeau offert des 50 euros d achat, a decouvrir dans le panier ;
3. remise de 15 pour cent appliquee automatiquement au panier des 80 euros d achat.

Chaque message commence par le repere `AVANTAGE MILAURA` en aigue-marine. Le bandeau reste quartz rose, le message principal reste prune et le compteur `1/3`, `2/3`, `3/3` indique la rotation.

## Deploiement

- branche source : `codex/milaura-certificates-rewards-20260910` ;
- commit fonctionnel : `449cabc1` ;
- theme live : `190430282075` ;
- fichier unique : `sections/milaura-announcement.liquid` ;
- commande ciblee : `shopify theme push` avec `--only`, `--nodelete`, `--strict` et `--allow-live` ;
- aucun Hero, template, panier, produit, prix, stock ou parametre Admin modifie.

## Verification

- preflight : le diff live vers la source contenait uniquement la refonte attendue du bandeau ;
- `python3 tools/check_copywriting.py` : PASS, 350 fichiers controles ;
- `shopify theme check --fail-level error` : PASS, zero erreur et 16 avertissements historiques hors lot ;
- `git diff --check` : PASS ;
- pullback live : fichier distant identique au fichier local, SHA-256 `ba461da8938441708afbf558b8b5af11ce89e39eb757fde315505870d13c56a5` ;
- QA publique a `390` et `1440 px` : bandeau visible, messages lisibles, compteur actif, Hero courant `Vos emotions ont du style.` preserve ;
- journal navigateur : aucune erreur ni aucun avertissement.

## Etat Git

La branche source est poussee. Le checkout principal d integration est volontairement reste intact : il contient des changements concurrents, est en retard sur sa branche distante et ne peut pas recevoir ce lot sans reconciliation separee.

## Suite

Mission 1 terminee. La mission suivante concerne le checkout Shopify et doit ouvrir un perimetre distinct avant toute modification.
