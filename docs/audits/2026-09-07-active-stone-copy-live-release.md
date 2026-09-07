# Mise en ligne des contenus `La pierre`

Date : 2026-09-07 16:52 CEST
Statut : LIVE, contrôle technique PASS

## Résultat

- `228` produits du manifeste contrôlés avant et après écriture.
- `221` descriptions `milaura.stone_description` écrites dans Shopify.
- `7` anomalies sans pierre réelle corrigées sans texte inventé.
- `8` metachamps supprimés sur ces anomalies : `7` valeurs `stone_name` et l'ancienne `stone_description` du bracelet en bois de palo santo.
- `227` produits sont restés ACTIVE.
- `1` produit, la bague aigue-marine `10488132108635`, avait été passé en DRAFT avant le préflight final. Son statut DRAFT a été strictement conservé.
- aucun prix, stock, statut, média, titre, handle, URL publique ou rattachement de collection n'a changé pendant le batch.

## Lecture côté thème

- `201` produits utilisent actuellement l'onglet public `La pierre` et disposent maintenant d'un contenu pierre pertinent.
- `20` autres produits ont reçu la même donnée pierre structurée, mais leur deuxième onglet actuel est adapté à leur type de produit, par exemple senteur, usage ou histoire.
- les `7` faux contenus pierre ne sont plus comptés comme une pierre par le thème.
- un bijou sans pierre réelle affiche maintenant `Son histoire` au lieu d'un onglet `La pierre` vide ou trompeur.

## Vérifications

- manifeste : `221` actions `set_stone_description` et `7` actions `taxonomy_review_required` ;
- textes : `242` à `422` caractères, `3` à `4` phrases, `221` valeurs uniques ;
- cinq pilotes validés par Patrice conservés à l'identique ;
- préflight Shopify : PASS sur les `228` identités et valeurs existantes ;
- pullback Shopify : PASS sur les `228` produits ;
- Theme Check : `0` erreur, `16` avertissements historiques hors périmètre ;
- thème live : `190430282075` ;
- hash local et pullback du fichier `sections/milaura-product-experience.liquid` : `42570a29d5da28acacdd4db8a7847500ecbd0c491d4f7d1383c67d3816e98dd9` ;
- storefront Horus : le nouveau texte sur la sodalite est rendu dans `La pierre` et l'ancien texte produit n'y apparaît plus ;
- storefront palo santo et savon framboise : `Son histoire` est rendu, sans faux onglet `La pierre`.

## Preuves privées

Les snapshots avant et après ainsi que le résultat machine sont archivés dans :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-07-active-stone-copy-rewrite/live/`
