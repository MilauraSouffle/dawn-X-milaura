# Copy Best-sellers Home, cloture live du 2026-09-25 17:06 CEST

## Statut

`FERME, INTEGRE, POUSSE ET LIVE VERIFIE`

Patrice a confirme le maintien du surtitre dans la hierarchie visuelle commune et a donne le GO pour commit, push et deploiement live.

## Texte public final

- Surtitre : `Les incontournables`
- Titre : `Les best-sellers MilAura`
- Sous-titre : `Découvrez les bijoux, les minéraux et les produits bien-être les plus choisis chez MilAura.`
- L accord `choisis` est au masculin pluriel avec `produits`.

## Livraison

- Branche source : `codex/milaura-home-bestsellers-copy-20260925`
- Commit source : `729abada`
- Branche d integration : `codex/milaura-integration`
- Merge d integration : `5c1a654d`
- Theme public : `190430282075`
- Fichier deploye : `templates/index.json`
- Push Shopify : cible, `--allow-live --nodelete --strict`
- Pullback post-deploiement : identique `1/1`
- SHA-256 local et live : `793ba6f49c4b87c346c2fbcf13e470ac8d2d75d1f878ac4091b4ac03079cb5ed`

## Verification

- Baseline live avant deploiement identique a la branche d integration
- JSON Shopify : PASS
- `git diff --check` : PASS
- Contrat CSS : PASS
- Theme Check : zero erreur, seize avertissements historiques hors lot
- Mobile `390 x 844` : trois textes presents, largeur utile `358px`, aucun debordement horizontal
- Bureau `1440 x 900` : trois textes presents, aucun debordement horizontal
- Console navigateur : vide
- Lecture HTTP publique hors cookie de preview : trois textes exacts confirmes
- Aucun produit, prix, stock, media produit, Shopify Admin, navigation ou Ads modifie
