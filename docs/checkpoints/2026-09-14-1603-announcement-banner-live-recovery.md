# Retablissement cible du bandeau fixe des avantages

Date : 2026-09-14 16:03 CEST

Statut : `FERME, POUSSE ET LIVE VERIFIE`

## Constat et source retenue

Apres la recuperation controlee du theme live le 2026-09-14, Patrice a constate que le bandeau fixe affichait encore son ancienne version visuelle. La source recente attendue etait absente de la source globale de restauration : elle existe dans le commit valide en preview `449cabc1` du 2026-09-13.

Le perimetre a ete limite au seul fichier `sections/milaura-announcement.liquid`. Le fichier restaure contient le bandeau rose compact `AVANTAGE MILAURA`, ses trois messages, son compteur et sa commande de rotation. Aucune modification de produit, configuration, checkout, Flow, Hero, menu ou autre fichier de theme n a ete realisee.

## Sauvegarde, recette et publication

- Theme preview : `201359720795`.
- Theme public : `190430282075`.
- Copie du fichier live avant correction : `/private/tmp/milaura-live-banner-before-recovery-20260914/sections/milaura-announcement.liquid`.
- SHA-256 avant correction : `cfa81b0d1bdd7bda55373a0cd65a0809210205f8785cb6aaf2b13fcbc064f6f8`.
- Push preview puis push live, chacun avec le seul fichier `sections/milaura-announcement.liquid`, option `--nodelete`; le push live utilise aussi `--allow-live`.
- Pullback apres publication : `/private/tmp/milaura-live-banner-recovery-pullback-20260914/sections/milaura-announcement.liquid`.
- SHA-256 local et pullback live identiques : `ba461da8938441708afbf558b8b5af11ce89e39eb757fde315505870d13c56a5`.

## Verification

- `python3 tools/check_copywriting.py` : PASS, 349 fichiers controles.
- `shopify theme check --fail-level error` : 0 erreur, 16 avertissements historiques inchanges.
- Preview Shopify : rendu conforme a 390 et 1440 px, compteur et fleche de rotation verifies.
- Storefront public `https://milaura.fr/` : rendu conforme a 390 et 1440 px. Le bandeau affiche les avantages actuels, la fleche fait passer le compteur de `3/3` a `1/3`, puis les messages attendus. Journal navigateur vide.

## Reprise

La branche de preuve est `codex/milaura-banner-live-recovery-20260914`. Le checkout principal `codex/milaura-integration`, sale et en retard, reste intouche. Toute reprise doit partir de ce checkpoint et de la lecture publique du storefront. Ne jamais redeployer le checkout principal, ni faire un push complet, pour modifier le bandeau.
