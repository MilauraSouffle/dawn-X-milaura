# Copy Nouveautes Home, cloture live du 2026-09-25 17:12 CEST

## Statut

`FERME, INTEGRE, POUSSE ET LIVE VERIFIE`

Patrice a valide le texte direct et donne le GO pour commit, push et deploiement live.

## Texte public final

- Surtitre : `Tout juste arrivés`
- Titre conserve : `Les nouveautés`
- Sous-titre : `Découvrez les derniers bijoux, minéraux et produits bien-être arrivés chez MilAura.`
- CTA conserve : `Voir toutes les nouveautés`

## Livraison

- Branche source : `codex/milaura-home-new-arrivals-copy-20260925`
- Commit source : `f109c61b`
- Branche d integration : `codex/milaura-integration`
- Merge d integration : `75519554`
- Theme public : `190430282075`
- Fichier deploye : `templates/index.json`
- Push Shopify : cible, `--allow-live --nodelete --strict`
- Pullback post-deploiement : identique `1/1`
- SHA-256 local et live : `e35d71c1f6efe799c94215587c0cbbfead44fe160248a67c80d3da6c53c085dc`

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
