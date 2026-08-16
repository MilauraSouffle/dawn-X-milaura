# Sticky PDP et rail de reassurance mobile

Date : 2026-08-16 08:40 CEST

## Perimetre livre

- La sticky PDP prend desormais la position du bouton principal comme unique source de verite.
- Elle apparait lorsque le bouton `Ajouter au panier` du Hero est entierement depasse et disparait des qu'il revient au niveau de la fenetre.
- Sur mobile, la sticky recouvre le dock de 1 px pour supprimer toute fente de rendu.
- Le rail de reassurance mobile affiche `Balayez pour decouvrir` et une ligne aigue-marine dont le curseur suit la position reelle du rail.
- Aucun autoplay n'a ete ajoute. Le geste reste sous le controle du visiteur.

## Fichiers

- `sections/milaura-sticky-bar.liquid`
- `sections/milaura-dock.liquid`
- `sections/milaura-product-experience.liquid`
- `assets/milaura-product-experience.css`
- `assets/milaura-product-experience.js`

## Validation

- Theme de developpement Shopify `199421952347` uniquement.
- Push cible sans suppression, puis pullback : 5 fichiers sur 5 identiques octet par octet.
- `node --check assets/milaura-product-experience.js` : OK.
- `git diff --check` : OK.
- Shopify Theme Check : 0 erreur, 17 avertissements historiques dans 9 fichiers hors lot.
- QA responsive sur une vraie fiche produit : mobile 360, 390 et 430 px, desktop 1440 px.
- Sticky mobile : cachee avant le CTA, visible apres le CTA, cachee au retour, jonction sticky/dock mesuree a `-1 px`.
- Sticky desktop : cachee avant le CTA, visible apres le CTA, cachee au retour.
- Rail mobile : largeur visible `360 px`, largeur totale `1470 px`, progression mesuree de `0` a `0.4414` apres balayage.
- Indicateur masque sur desktop.
- Aucun debordement ajoute par ce lot.

## Etat et risques

- Theme live `190430282075` non modifie. Un GO visuel et un GO live explicites restent requis.
- Le debordement mobile du Ruban Vivant est visible sur la meme fiche mais appartient a la session dediee et n'a pas ete touche ici.
- Les seules erreurs console observees sont des echecs reseau Shopify de telemetrie et de banniere de confidentialite, sans erreur issue des fichiers du lot.

## Reference design

- Van Cleef & Arpels emploie une invitation au balayage, sans autoplay, avec une pagination tres discrete. MilAura reprend ce principe sous la forme d'une progression continue adaptee a sa charte.
