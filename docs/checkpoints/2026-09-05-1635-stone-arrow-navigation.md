# Annuaire : navigation par fleches et grille reguliere

Date : 2026-09-05 16:35 CEST.
Demande : Patrice abandonne le glissement tactile apres deux retours negatifs, demande des fleches translucides sur les cartes, une indication animee discrete et un code propre. Il rejette aussi le grand emplacement Aigue-marine sur desktop.

## Changement

- Mobile : une carte visible par rangee de trois ; boutons precedant/suivant sur les cotes de la photo, cibles 44 x 48 px, fond nacre translucide et compteur dessous. L'indication de trois pixels joue deux fois a l'apparition de la rangee et cesse au premier clic ; aucune animation en preference de mouvement reduit.
- Le changement de carte se fait par clic ou activation clavier du bouton. Le glissement tactile horizontal ne pilote plus les cartes. Le defilement vertical de la page reste disponible.
- Retrait du code de scroll, inertie, accrochage, capture de pointeur, mesures de positions et ecouteur de defilement. Les regles CSS correspondantes et l'ancien attribut de drag sont supprimes. Aucun ancien mecanisme cache ni variante de secours du swipe conserve.
- Les cartes hors ecran sont inertes et absentes du parcours lecteur d'ecran. Sans JavaScript, les 39 cartes sont affichees en pile ; les controles ne sont pas affiches. Les ecouteurs et l'observateur d'indication sont detaches au dechargement de section Shopify.
- Desktop : quatre colonnes regulieres, Aigue-marine au meme format que ses voisines ; deux colonnes sur tablette. Suppression de la classe conditionnelle `is-featured`, de ses styles et de son choix de taille d'image particulier. Liens alignes en bas des cartes ; photos et cadrages valides conserves.

Le grand emplacement venait du traitement automatique de la premiere carte du composant historique `milaura-catalogue-hub`, repris dans l'annuaire au commit `3785be3a`. L'audit d'implementation du 2026-09-05 mentionnait la conservation de la premiere carte editoriale. Aucune demande explicite de Patrice pour isoler l'Aigue-marine dans cet annuaire n'a ete retrouvee dans le contexte consulte ; ne pas lui attribuer ce choix.

## Perimetre

Trois fichiers : `sections/milaura-stone-directory.liquid`, `assets/milaura-stone-directory.js`, `assets/milaura-stone-pages.css`. Autres composants, photos source, catalogue, prix, stocks, canaux et Ads preserves. Les anciens rapports sont conserves comme historique, pas comme code actif.

## Validation privee

- Theme `200974958939`, controles sur le vrai storefront prive.
- 360/390/430 : fleches dans les bords de photo, avant/arriere, clics rapproches, bornes, bon lien de collection, absence de navigation par swipe et defilement vertical conformes. A 390, les treize rangees ont ete parcourues.
- Activation clavier, exclusion des cartes masquees du parcours clavier, preference de mouvement reduit, passage mobile/desktop/mobile et rechargement de section sans double ecouteur conformes.
- 768/1440 : cartes de meme largeur, Aigue-marine alignee a la premiere rangee ; 39 cartes accessibles sans JavaScript.
- Theme Check : zero erreur, 16 avertissements historiques hors lot. Syntaxe JS, diff et scan de retrait des anciens mecanismes conformes.
- Preuves hors Git : `/private/tmp/milaura-arrow-navigation-20260905/`, `private-qa.json`, captures `private-row-*.png`, `private-grid-*.png`, sauvegarde `live-before/`.

Limite : tests de navigateur isole, aucun controle de l'iPhone physique par Codex. Ne pas annoncer une recette utilisateur a partir de ces seuls controles.

## Publication du 2026-09-05 16:38 CEST

Source `c6ddfede`, integration `7c22cac0`, branches poussees. Les trois fichiers ont ete deployes sans suppression sur le theme live `190430282075`. Pullback prive 3/3 et pullback public 3/3 identiques. L'alignement final des liens des quatre premieres cartes desktop est verifie au pixel pres. Les preuves de recette publique sont conservees dans `live-qa.json` et les captures `live-row-*.png` / `live-grid-*.png` du meme dossier. Les anciens bilans positifs de gestes simules ne valent plus pour le fonctionnement utilisateur : le swipe est abandonne sur demande explicite de Patrice.
