# Homepage cadeaux : selecteur occasion et correction du vide desktop

Date : 2026-08-15 20:28 CEST

## Perimetre

- `sections/milaura-home-occasions.liquid`
- `assets/milaura-home-occasions.css`
- nouveau `assets/milaura-home-occasions.js`
- aucun changement de template, d'image source, de navigation, de Hero, de dock, de PDP, de panier ou de produit

## Diagnostic confirme

Sur le theme de preview `199957807451`, le conteneur media desktop imposait 520 px de hauteur tandis que le `picture` et l'image rendue occupaient environ 468 px. Les quelque 52 px restants apparaissaient comme un cadre blanc vide sous chaque photographie.

## Implementation

- remplacement des deux cartes simultanees par deux onglets cote a cote : `Cadeau de naissance` et `Cadeau de mariage` ;
- un seul panneau cadeau affiche a la fois afin de reduire le sur-scroll ;
- langage visuel aligne sur la section `Trois facons de choisir` : numerotation, filets or, titre Gloock et fleche active ;
- media et image contraints a la meme hauteur sur desktop, tablette et mobile ;
- navigation accessible par clic, `ArrowLeft`, `ArrowRight`, `Home` et `End`, avec `aria-selected`, `aria-controls` et roving `tabindex` ;
- reinitialisation compatible avec le rechargement de section dans l'editeur Shopify ;
- repli sans JavaScript qui masque les onglets et restitue les deux panneaux.

## Validation preview

Theme : `MilAura Navigation V2 2026-08-14` (`199957807451`).

- desktop 1440 x 1000 : un seul panneau visible, image et media a 458 px de hauteur, aucun debordement horizontal ;
- bascule Naissance / Mariage : etats actifs et panneaux synchronises ;
- clavier : `ArrowLeft` replace le focus et la selection sur l'onglet precedent ;
- mobile 390 x 844 : deux onglets cote a cote, un seul panneau, media et image a 246 px, aucun debordement ;
- mobile 360 x 800 : libelles sur deux lignes sans debordement, un seul panneau, aucun debordement de document ;
- tablette 820 x 900 : onglets cote a cote et panneau unique ;
- `git diff --check` : propre ;
- `node --check assets/milaura-home-occasions.js` : valide ;
- `shopify theme check` : 0 erreur, 17 avertissements historiques dans 9 fichiers hors perimetre ;
- pullback preview : 3 fichiers sur 3 identiques aux fichiers locaux ;
- erreurs console relevees : echecs reseau Shopify `privacy-banner` et `shop_events_listener`, sans erreur issue du composant.

## Autorisation et prochaine action

Patrice a donne son GO explicite le 2026-08-15 pour commit, push et deploiement direct sur le theme live `190430282075`. Le push live doit rester cible aux trois fichiers du composant, avec sauvegarde puis pullback de verification.
