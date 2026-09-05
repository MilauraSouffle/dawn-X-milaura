# Navigation regroupee sous les cartes pierres

Date : 2026-09-05.

Patrice rejette les chevrons juges invisibles sur les cotes des photos et demande une barre de mouvement, un indicateur et les fleches cliquables a l'emplacement du compteur sous chaque rangee. Cette decision remplace les precedents essais de commandes superposees. Cartes compactes et desktop deja valides a conserver.

Implementation dans trois fichiers : `sections/milaura-stone-directory.liquid`, `assets/milaura-stone-pages.css`, `assets/milaura-stone-directory.js`.

- Bloc en flux normal sous le rail : fleche precedente, barre avec segment mobile, compteur, fleche suivante. Zones tactiles 44 x 44 px, SVG 24 px avec trait 1.75 et tige horizontale pour une lecture plus nette. Fleches indisponibles visibles et desactivees.
- Barre de 3 px : fond aigue-marine pierre, segment encre prune. Le segment occupe un tiers pour trois cartes et se deplace en meme temps que le rail. Un seul index CSS porte l'etat du rail et de l'indicateur ; le nombre de cartes est calcule par rangee.
- Compteur annonce via aria-live ; barre decorative masquee aux lecteurs d'ecran. Aucun nouveau texte public.
- Suppression du DOM des anciens chevrons dans le viewport, de leurs classes, du placement absolu, de l'IntersectionObserver, de `is-hinted`, de la variable de direction et de l'animation d'appel.
- La barre contient un span explicite : cela respecte la regle Dawn qui masque les div vides, sans modifier ni surcharger le CSS global.
- Cartes de 286 px, photos, textes, desktop et comportement de navigation existant conserves. Aucun mecanisme tactile ajoute. Sans JavaScript, les 39 liens restent accessibles en pile verticale et les commandes sont masquees.

Base `c337a81a`, branche `codex/milaura-stone-bottom-navigation-20260905`. Themes reserves : preview `200974958939`, puis live `190430282075`. Preuves locales : `/private/tmp/milaura-bottom-navigation-20260905/`.

Recette preview du 2026-09-05 : conforme a 360, 390, 430, 768 et 1440 px. Les mesures et styles des 39 cartes sont identiques au live de depart. Navigation 1-2-3-2-1 sur les treize rangees a 390 px, synchronisation du segment et du compteur, limites des boutons, clic sur SVG, clavier, liens, mouvement reduit, redimensionnement et rechargement de section Shopify verifies. Sans JavaScript, les 39 liens restent accessibles. Captures 360 et 390 px inspectees. Aucun bouton superpose ni ancienne classe de chevron dans le DOM.

`git diff --check` et `node --check` conformes. Theme Check : 0 erreur, 16 avertissements historiques hors lot. Pullback preview : trois fichiers identiques.

Publication verifiee le 2026-09-05 a 17:38 CEST : source `29fb3ec9`, integration `7f3b20eb`, toutes deux poussees. Trois fichiers deployes sans suppression sur le live `190430282075`, pullback 3/3 identique. Recette publique 360/390/430/768/1440 conforme, incluant les treize rangees a 390 px et l'acces sans JS. Les mesures et styles des cartes sont inchanges. Capture publique 390 px inspectee : fleches visibles, indicateur sur le deuxieme tiers et compteur 2/3. Aucun controle sur iPhone physique revendique.

Worktree propre et integre retire ; branche source poussee conservee. Reservations des trois fichiers, de la preview et du live liberees. Les modifications concurrentes du checkout sont preservees. Preuves : `live-push.json`, `live-after/`, `live-qa.json` et captures sous le dossier temporaire indique plus haut. Capture durable : `/Users/paesano/.codex/visualizations/2026/09/05/01a0707d-afa2-7582-b289-2d9df6990e6a/milaura-navigation-sous-cartes.png`.
