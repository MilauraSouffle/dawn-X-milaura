# Hero accueil mode MilAura, mise en ligne finale

Date : 2026-09-09 12:04 CEST

Statut : `FERME, INTEGRE, POUSSE ET LIVE VERIFIE`

## Resultat public

- Surtitre : `Bijoux en pierres naturelles`, en aigue-marine claire.
- H1, ligne 1 : `Vos emotions`.
- H1, ligne 2 : `ont du style.`.
- Texte : `Choisissez votre bijou, votre pierre et ses vertus.`, en Dancing Script.
- CTA : `Voir tous les bijoux`, composant editorial MilAura partage avec filet or et cible tactile de 48 px.
- Destination : `https://milaura.fr/collections/bijoux-pierres-naturelles`.
- Desktop : `assets/milaura-home-hero-fashion-chloe-parure-desktop-v3b.webp`.
- Mobile : `assets/milaura-home-hero-fashion-chloe-parure-mobile-v4.webp`.

Le H1 est volontairement compose de deux lignes non separables. Sur mobile, sa largeur maximale est reduite pour laisser le regard de Chloe degage. Chloe soutient la parure et les quatre familles de bijoux restent visibles.

## Source et integration

- Branche source : `codex/milaura-home-hero-fashion-20260908`.
- Commit de creation : `96991f8f`.
- Commit de polish final : `ee2d4eff`.
- Branche source poussee sur `origin`.
- Branche `origin/codex/milaura-integration` avancee en fast-forward jusqu a `ee2d4eff` avant le deploiement.
- Aucun passage par le checkout principal sale et aucun changement concurrent embarque.

## Deploiement Shopify

- Theme public : `190430282075`, `dawn-X-milaura/main`.
- Le fichier Hero public avant deploiement correspondait exactement au blob d integration precedent `41e743a86a2170e72064b2c248acdef6b38354d1`. Aucun changement concurrent n a ete ecrase.
- Push cible avec suppression interdite, controle strict et autorisation live sur trois fichiers seulement :
  - `sections/milaura-hero-portal.liquid`
  - `assets/milaura-home-hero-fashion-chloe-parure-desktop-v3b.webp`
  - `assets/milaura-home-hero-fashion-chloe-parure-mobile-v4.webp`
- Pullback live : `3/3` identique bit a bit.

SHA-256 :

- Section : `37d20cc4c3042b69e169bfc9593d24310d5b94aefde09ae4c19ac477a3f7d8c3`.
- Desktop : `7b0fffe49366fba6568123e44fd99e843366296895a55de65dfa6a67cead62f1`.
- Mobile : `99324393c5f028733b2ee70f68847a858ac1d23692287181354dc321204a0a44`.

## Verification

- Controle copywriting : PASS, 339 fichiers controles.
- `shopify theme check` : 0 erreur, 16 avertissements historiques hors lot.
- Preview `201115566427` : section relue a l identique avant publication.
- QA publique : theme confirme `190430282075` aux largeurs `360`, `390`, `430` et `1440` px.
- Mobile : chaque ligne du H1 reste sur une seule ligne, le bord droit du titre reste a `259-263` px, les yeux de Chloe sont degages et aucun debordement horizontal n est present.
- Desktop : deux lignes exactes, image bureau active, texte en Dancing Script, CTA partage de 48 px et aucun debordement horizontal.
- Surtitre calcule : `rgb(185, 208, 204)`.
- CTA calcule : texte nacre, filet or de 2 px, capitales, destination correcte.
- Clic public du CTA : page `Bijoux & Pierres Naturelles` chargee a l URL attendue.
- Journal d erreurs navigateur : vide.

## Perimetre preserve

Aucun template, parametre Shopify Admin, produit, stock, prix, campagne, autre section ou autre theme n a ete modifie. L image mobile rejetee avec l oeil ferme reste exclue du theme et dans la Corbeille.
