# MilAura - Registre P0B des quatre produits reels

Date de creation : 2026-08-08 08:29 CEST

Statut : P0B valide pour la construction de la Selection de l'atelier par Patrice le 2026-08-08. Les couts exacts et les delais de remplacement restent a documenter avant acquisition payante.

## Objectif

Identifier quatre produits detenus dans l'atelier, rentables, presentables et ajoutables au panier sans ambiguite.

La disponibilite publique Shopify indique seulement qu'une variante est achetable en ligne. Elle ne prouve ni la quantite physique chez MilAura, ni le cout reel, ni le delai de remplacement.

## Quatre produits retenus

Patrice confirme le 2026-08-08 que ces quatre produits sont physiquement en stock et disposent d'une bonne marge. La quantite exacte, le cout HT et le delai de remplacement ne sont pas encore enregistres dans ce document.

| Produit retenu | Handle Shopify | Variante Shopify | SKU | Prix public au 2026-08-08 | Images live | Stock physique | Marge | Cout produit HT | Delai de remplacement | Statut P0B |
| --- | --- | ---: | --- | ---: | --- | --- | --- | --- | --- | --- |
| Bracelet Amazonite 6 mm | `bracelet-amazonite-1` | `52484224450907` | `3701459064489` | 29,90 EUR | 3 images | confirme par Patrice | bonne, confirmee par Patrice | a documenter | a documenter | valide pour la section |
| Distributeur Savon Lapis-Lazuli | `distributeur-savon-lapis-lazuli` | `52484694442331` | `3701459085101` | 72,90 EUR | 3 images | confirme par Patrice | bonne, confirmee par Patrice | a documenter | a documenter | valide pour la section |
| Bougie Joie - Aventurine verte | `bougie-joie-fleur-oranger-aventurine` | `52136875688283` | manquant dans le JSON public | 39,90 EUR | 3 images | confirme par Patrice | bonne, confirmee par Patrice | a documenter | a documenter | valide pour la section |
| Collier Jade | `collier-jade` | `52484315939163` | `3701459074570` | 20,90 EUR | 3 images | confirme par Patrice | bonne, confirmee par Patrice | a documenter | a documenter | valide pour la section |

## Rotation saisonniere

Ces produits sont un premier contenu, pas une selection figee. La section doit permettre de remplacer independamment chacun des quatre produits depuis l'editeur de theme Shopify, sans modification de code.

La rotation peut suivre les saisons, les stocks physiques, les marges et les priorites commerciales. Chaque remplacement doit respecter la meme gate P0B.

## Verification physique minimale

Pour chaque candidat retenu :

1. compter la quantite reellement presente dans l'atelier ;
2. confirmer que la piece en stock correspond aux photographies et a la variante Shopify ;
3. renseigner le cout d'achat HT unitaire ;
4. ajouter le transport entrant unitaire s'il n'est pas inclus ;
5. confirmer l'origine, le fournisseur et le certificat seulement s'ils sont documentes ;
6. renseigner le delai reel de remplacement ;
7. verifier l'etat et l'emballage de la piece qui sera photographiee ou expediee.

Format de reponse rapide :

`handle | quantite physique | cout HT | transport entrant | delai de remplacement | certificat oui/non`

## Gate avant la Selection de l'atelier

Un nouveau produit passe de `candidat` a `valide` uniquement si :

- la quantite physique est strictement positive ;
- la variante Shopify est identifiee sans ambiguite ;
- le cout et la marge sont connus ;
- le delai de remplacement est honnete ;
- les images correspondent au produit vendu ;
- l'ajout panier peut etre teste ;
- aucune affirmation d'origine ou de certification ne repose sur une supposition.

## Hors perimetre

La strategie de ventes complementaires sous PDP, apres ajout au panier ou dans le drawer est reportee a une session dediee de brainstorming et de conception. Elle ne fait pas partie de P0B ni de la construction immediate de la Selection de l'atelier.
