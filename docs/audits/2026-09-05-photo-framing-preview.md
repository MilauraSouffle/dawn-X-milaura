# Cadrage des cartes : proposition privee

Date : 2026-09-05 15:48 CEST.
Statut au 2026-09-05 16:10 CEST : CADRAGES VALIDES PAR PATRICE, INTEGRES ET LIVE.
Branche : `codex/milaura-touch-framing-20260905`.
Theme prive : `200974958939`.
Apercu : https://milaura.fr/?preview_theme_id=200974958939

## Probleme observe

Le screenshot iPhone de Patrice montre le pendentif du collier coupe dans le choix par bijou de l'accueil. La photo source contient bien le bijou entier. A 390 px, l'ancien cadre de 308 x 231 px recoupait 25 % de la hauteur de la photo carree. Le meme composant recoupait aussi les photos verticales du choix par pierre et de Karine.

Dans l'annuaire, la premiere grande carte desktop et les cadres mobiles imposaient un recadrage. Les cartes produit partagees utilisaient un format 4/5 sur des galeries principalement carrees et agrandissaient la seconde photo au survol.

## Proposition

- Accueil : cadre carre sur mobile, photos entieres centrees, espace libre transparent et retrait du zoom au survol. Sur desktop, geometrie du panneau conservee.
- Annuaire : photos entieres, cadres mobiles carres, retrait du zoom au survol. Les 39 cartes et les rangees de trois restent en place.
- Cartes produit partagees : cadres carres pour les photos de galerie, images entieres et fondu de la seconde photo sans agrandissement. Les medias detoures et les videos gardent leurs regles propres ; les mises en page plus specifiques de recommandations restent prioritaires.

Fichiers visuels : `assets/milaura-home-paths.css`, `assets/milaura-stone-pages.css`, `assets/milaura-card.css`.
Aucune source photo, galerie Shopify, information catalogue ni affectation Admin modifiee.

## Verification

- Theme prive confirme avec son identifiant dans le storefront et son role `unpublished` dans Shopify CLI.
- Cinq fichiers relus et identiques : les trois fichiers du correctif tactile plus les deux autres feuilles CSS de ce lot.
- Recette navigateur isolee 390/1440 : trois choix de l'accueil, annuaire, landing Aigue-marine, catalogue bijoux et fiche Horus.
- 39 cartes presentes dans l'annuaire. Aucun debordement horizontal de page.
- Cadrage CSS de 49 cartes produit controle a chaque largeur, captures representatives et changement de photo au survol desktop verifies.
- Theme Check : zero erreur, 16 avertissements historiques. Diff conforme.
- Preuves hors Git : `/private/tmp/milaura-touch-framing-20260905/`, `private-photo-qa.json`, `private-*.png`, `photo-theme-check.json` et `private-after/`.

## Limites et suite

Cette proposition corrige trois familles partagees. Elle ne signifie pas que chaque photo du site a ete retouchee ou validee individuellement. Les grandes images d'ouverture, les panneaux editoriaux des fiches et les destinations des autres hubs utilisent encore des cadrages propres, a revoir par composition si Patrice demande la suite. Les photos deja coupees dans leur fichier source devront etre remplacees ou preparees individuellement.

Le correctif tactile est deja live au commit d'integration `3074ae39`, avec pullback 3/3 et tests de gestes simules 360/390/430 conformes. L'iPhone physique de Patrice reste le controle final du symptome qu'il a signale ; aucune reproduction Safari physique n'est revendiquee.

Publication executee le 2026-09-05 apres GO visuel et GO deploiement explicites : source `d7e8f7af`, integration `911e206d` poussee sur `codex/milaura-integration`, trois CSS ci-dessus deployes sur `190430282075`. Pullback 3/3 identique. Preuves : `/private/tmp/milaura-smooth-20260905/photo-live-after/`. Ne pas pousser tout le theme prive, dont le template de preview conserve ses parametres propres.

Le retour iPhone de Patrice juge le premier correctif tactile insuffisamment fluide. La correction suivante retire le pilotage du geste par JavaScript, conserve l'inertie native et limite les mises a jour du compteur aux changements utiles. Ce retour remplace toute interpretation du premier controle simule comme une validation de fluidite sur l'iPhone physique.
