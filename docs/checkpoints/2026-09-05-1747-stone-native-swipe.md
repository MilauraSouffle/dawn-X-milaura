# Swipe ajoute au footer de navigation valide

Date : 2026-09-05.

Patrice demande explicitement de pouvoir glisser au doigt en complement des fleches sous les cartes, sans aucun changement de design. Cette demande remplace l'exclusion du swipe dans les bilans precedents. La base visuelle de reference est le footer publie au lot `29fb3ec9`, integration `7f3b20eb`, documentation `a6eff85f`.

Implementation limitee a `assets/milaura-stone-directory.js` et `assets/milaura-stone-pages.css` :

- Le viewport devient un conteneur de defilement horizontal natif, avec alignement obligatoire sur les cartes et un arret par carte. La largeur 286 px, les ecarts, la marge de 18 px et le footer sont conserves. Une reserve de defilement en fin de rail permet aussi d'aligner la derniere carte a 18 px.
- L'ancien translateX du rail et sa transition sont retires. Aucun pilotage du mouvement au toucher, aucun preventDefault, aucune capture du doigt, aucune bibliotheque ajoutee au theme.
- Le listener passif de scroll lit la position pour deplacer le segment de la barre en continu et actualiser compteur et boutons. Les fleches appellent le defilement du meme viewport ; les appuis rapides restent ordonnes. Les gestes naturels peuvent reprendre la main.
- Les trois liens de chaque rangee restent accessibles : suppression de l'ancien masquage inert/aria-hidden des cartes non selectionnees. La carte recevant le focus est alignee sans animation pour que son lien soit entierement visible. Le raccourci macOS Option-Tab a ete verifie pour parcourir les liens dans les deux moteurs de recette.
- Mesures uniquement a l'initialisation et au changement de largeur, mouvement reduit respecte pour les fleches, ecouteurs et observateur detaches au dechargement Shopify.
- Aucun Liquid, texte, image, template ou composant desktop modifie. La page sans JS conserve ses cartes empilees.

Base de branche `a6eff85f`, branche `codex/milaura-stone-native-swipe-20260905`, worktree `/Users/paesano/Documents/MilAura website/_worktrees/stone-native-swipe-20260905`. Preview reservee `200974958939`, live `190430282075` ; preview panier `200990818651` hors lot. Preuves temporaires : `/private/tmp/milaura-native-swipe-20260905/`.

Recette locale puis Shopify preview du 2026-09-05 : Chromium 360/390/430/768/1440 et WebKit 390/1440 conformes. Comparaison des dimensions, polices, espacements, couleurs et cadrages des 39 cartes et des commandes identique a la base publique. Gestes tactiles via protocole Chromium sur les treize rangees, aller-retour avec fleches, suivi avant relachement, geste sur texte avec CPU x4 et defilement vertical conformes. Captures Chromium et WebKit 390 px inspectees. Le test clavier a revele une carte partiellement visible : alignement explicite au focus ajoute puis controle. Les appuis rapides repetes, le clavier, les liens, le mouvement reduit, les changements de largeur et le rechargement Shopify passent la recette finale.

Geste bref depuis l'apercu de la carte suivante, annulation puis reprise avec fleche et acces aux 39 liens sans JS verifies. Instrumentation navigateur : zero appel JavaScript a scrollTo pendant le geste tactile. Pas de recette sur iPhone physique revendiquee. Theme Check 0 erreur, 16 avertissements historiques hors lot ; `git diff --check` et `node --check` conformes. Pullback preview final : 2/2 fichiers identiques.

References techniques consultees le 2026-09-05 : [CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type) et [touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/touch-action). WebKit revision 2336 (version navigateur 26.5), fixe par le runtime existant Playwright 1.62.1, telecharge dans le dossier temporaire pour la recette. Aucun npm ni nouvelle dependance de projet.

Publication verifiee le 2026-09-05 a 17:55 CEST : source `a9e4dcb5`, integration `e2236d13`, toutes deux poussees. Deux assets deployes sans suppression sur `190430282075`, pullback 2/2 identique. Le lot panier concurrent integre avant le merge est conserve. Recette publique Chromium 360/390/430/768/1440 et WebKit 390/1440 conforme. Les treize rangees ont ete parcourues par gestes tactiles simules et fleches ; le rendu des cartes et commandes correspond a la base validee. Geste rapide, annulation, CPU x4, defilement vertical, navigation clavier, mouvement reduit, rechargement Shopify et acces sans JS verifies sur la page publique.

Preuves finales : `live-qa.json`, `live-webkit-qa.json`, `live-edge-qa.log`, `live-push.json`, `live-after/` et captures dans le dossier temporaire. Capture durable : `/Users/paesano/.codex/visualizations/2026/09/05/01a0707d-afa2-7582-b289-2d9df6990e6a/milaura-swipe-mobile.png`. Worktree propre et integre retire, branche source poussee conservee ; reservations des deux assets, de la preview et du live liberees. Travaux concurrents preserves.
