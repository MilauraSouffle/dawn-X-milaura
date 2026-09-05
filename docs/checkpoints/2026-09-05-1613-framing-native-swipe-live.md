# Cadrages valides et inertie native des carrousels

Date : 2026-09-05 16:13 CEST.
Statut : INTEGRE, POUSSE ET LIVE sur le theme Shopify `190430282075`.

## Decision et livraison

Patrice valide les cadrages et demande leur commit, push et deploiement. Il juge le premier correctif de glissement insuffisamment fluide sur son iPhone. Ce retour invalide toute conclusion de recette utilisateur obtenue a partir du seul test simule precedent.

- Cadrages : source `d7e8f7af`, integration `911e206d`, trois CSS deployes et pullback 3/3 identique. Les photos entieres validees restent telles quelles.
- Fluidite : source `6ba3120e`, integration `34bf06ca`, deux fichiers deployes. Le theme prive `200974958939` a aussi ete actualise pour eviter une ancienne version via le lien de preview, avec pullback 2/2 identique.
- Etat final live : quatre fichiers relus, tous identiques a la branche canonique. Les modifications concurrentes du checkout sont preservees.

Fichiers live du lot : `assets/milaura-card.css`, `assets/milaura-home-paths.css`, `assets/milaura-stone-pages.css`, `assets/milaura-stone-directory.js`.

## Changement du glissement

Le premier correctif prenait le controle du pointeur, deplacait le rail a chaque mouvement et choisissait une destination au relachement. Le second laisse le navigateur gerer le geste horizontal et son inertie. L'accrochage aux cartes passe en proximite ; il ne force plus chaque arret. Le defilement vertical et le zoom restent autorises.

Les positions des cartes sont mesurees au chargement et au redimensionnement. Pendant le glissement, le compteur et les fleches ne sont modifies que lorsque leur etat change, au maximum une fois par image d'animation. Les fleches visent une carte precise et respectent la reduction des animations. Les images ne peuvent pas declencher un deplacement natif d'image.

Sources techniques consultees le 2026-09-05 : [MDN touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/touch-action) et [MDN scroll-snap-type](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type). Elles documentent la delegation des gestes au navigateur et l'accrochage par proximite. Aucune cause precise propre a Safari sur l'iPhone de Patrice n'est revendiquee.

## Verification

- Theme Check : zero erreur, 16 avertissements historiques. Syntaxe JavaScript et diff conformes.
- Cadrages publics controles en 390/1440 : trois choix de l'accueil, photo produit partagee, aucun debordement. Captures publiques relues.
- Gestes tactiles CDP sur Chromium, 360/390/430, processeur ralenti x4 : mouvement rapide puis inertie, glissement lent continu, retour sur la zone texte, defilement vertical, absence d'ouverture accidentelle, fleches, derniere carte, toucher ouvrant la bonne collection.
- Sur les vrais fichiers publics, le rail poursuit sa course de 79/106/130 px dans les 90 ms suivant le relachement du geste rapide. Ce sont des mesures du navigateur de recette, pas des mesures sur l'iPhone physique.
- Pendant les gestes controles : zero ecriture JavaScript de la position de scroll, zero capture de pointeur, zero lecture des rectangles du rail et des cartes ; six mutations utiles de controles pour la sequence.
- Desktop 1440, passage 1440 -> 390 -> 1440 et preference de mouvement reduit conformes. Les 39 cartes restent presentes.

Preuves hors Git : `/private/tmp/milaura-smooth-20260905/`, en particulier `live-smooth-qa.json`, `local-smooth-qa.json`, `photo-public-qa.json`, `photo-live-*.png`, `theme-check.json`, `live-final/`. Utilisation du Playwright deja installe, aucune dependance ajoutee.

## Limite et reprise

Codex n'a pas teste l'iPhone physique. La fluidite ressentie reste a confirmer par Patrice apres actualisation ; ne pas convertir les mesures Chromium en validation Safari utilisateur. Si le retour reste negatif, relever le carrousel exact et le navigateur avant une nouvelle modification.

Les cadrages sont valides et live, aucune nouvelle retouche photo a deduire. Les autres grandes photos editoriales restent un lot distinct. Aucun catalogue, prix, stock, galerie, affectation Admin, canal ni Ads modifie. Branche source conservee ; worktree termine retire proprement apres verification de son integration et de son etat propre.
