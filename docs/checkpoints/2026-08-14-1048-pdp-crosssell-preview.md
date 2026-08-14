# MilAura - Polish PDP et cross-sell

Date : 2026-08-14 10:48 CEST

Statut : implementation et validation technique terminees sur le theme de developpement `199421952347`. Aucun deploiement live.

## Perimetre

- CTA principal et selecteur de quantite du hero produit ;
- titre, logique de recommandation et rail du cross-sell PDP ;
- rail partage de la section homepage `Ca vient d'arriver` ;
- gestion des quantites et des ajouts partiels lies au stock dans le tiroir panier.

## Direction appliquee

- le CTA principal PDP reste une action transactionnelle contenue, mais devient prune plat, sans gradient, capsule de prix, cercle aigue-marine ni ombre lourde ;
- le panneau d'achat devient transparent avec un filet aigue-marine ;
- la quantite devient un controle transparent souligne avec des cibles tactiles de 44 px ;
- les cartes restent transparentes, photographiques, bordees d'un filet aigue-marine et utilisent l'action `Ajouter` soulignee d'or ;
- le titre generique et son sous-titre gris sont remplaces par une titraille contextuelle, par exemple `D'autres colliers`, `D'autres creations en Amethyste` ou `Selection de Karine` / `A associer a ce produit` ;
- une seule famille coherente de recommandations est affichee, avec quatre produits maximum.

## Rail partage

Les nouveaux fichiers `assets/milaura-product-rail.css` et `assets/milaura-product-rail.js` portent le comportement reutilisable :

- scroll tactile, scroll-snap, points de navigation et clavier sur mobile et tablette ;
- fleches de 44 px uniquement lorsque le contenu deborde sur desktop ;
- centrage sans faux carrousel lorsque le rail contient trois cartes ;
- grille quatre colonnes sur desktop pour la section homepage ;
- recalcul via `ResizeObserver`, focus visible et respect de `prefers-reduced-motion`.

## Panier

Le quick add transmet la quantite selectionnee. Si Shopify limite la quantite pour cause de stock mais ajoute tout de meme les unites disponibles avec une reponse `422`, le composant :

- detecte l'ajout reel ;
- affiche `Stock ajoute` au lieu de `Reessayer` ;
- rafraichit et ouvre le tiroir panier ;
- annonce le message de disponibilite ;
- restaure ensuite les etats `aria-busy` et interactifs.

## Verification

- `git diff --check` : OK ;
- `node --check assets/cart-drawer.js` : OK ;
- `node --check assets/milaura-product-rail.js` : OK ;
- `shopify theme check` : 0 erreur, 28 avertissements historiques dans 11 fichiers hors perimetre ;
- JSON du template produit : valide apres retrait du commentaire Shopify ;
- PDP desktop 1440 px : CTA prune plat de 50 px, panneau transparent, quantite 112 px et boutons de 44 px ;
- cross-sell desktop : trois cartes centrees, aucun faux debordement ;
- cross-sell mobile 390 px : `clientWidth` 360 px, `scrollWidth` 1010 px, scroll-snap actif, points visibles et navigation vers la deuxieme carte confirmee ;
- homepage desktop 1440 px : huit produits en grille, `clientWidth` et `scrollWidth` a 1352 px ;
- homepage mobile 390 px : `clientWidth` 360 px, `scrollWidth` 2624 px, scroll tactile et point 2 actifs ;
- selection saisonniere mobile : `clientWidth` 390 px, `scrollWidth` 1100 px et scroll horizontal confirme ;
- ajout principal PDP de deux unites : confirme, puis panier vide ;
- ajout rapide avec stock limite : reponse Shopify `422`, une unite disponible ajoutee, tiroir ouvert, message `Stock ajoute`, et panier vide apres le test ;
- pullback du theme de developpement : 16 fichiers sur 16 identiques octet pour octet au worktree.

Les seules erreurs console restantes pendant le preview sont le blocage de l'iframe Shop dans l'environnement de previsualisation et la reponse reseau `422` attendue lors du test volontaire de depassement de stock. Aucun `MilAura quick add request failed` n'est emis apres le correctif.

## Captures

- hero desktop : `.playwright-cli/element-2026-08-14T08-40-18-126Z.png` ;
- cross-sell desktop : `.playwright-cli/element-2026-08-14T08-40-19-642Z.png` ;
- cross-sell mobile : `.playwright-cli/element-2026-08-14T08-41-03-700Z.png`.

## Restant

- validation visuelle de Patrice sur le theme de developpement ;
- integration dans `codex/milaura-integration` seulement apres cette validation ;
- aucun push live avant un nouveau GO live explicite de Patrice pour ce lot.
