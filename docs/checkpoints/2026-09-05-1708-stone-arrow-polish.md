# Polish final des commandes mobiles des pierres

Date : 2026-09-05 17:08 CEST.

Demande : Patrice rejette le dessin et la position des fleches et demande une execution inspiree de Van Cleef & Arpels et Tiffany. Les cartes compactes et le desktop sont valides et restent inchanges.

Skills utilises : frontend-design, frontend-ui-ux-review et Playwright via le runtime deja installe, sans installation de dependance.

## References observees le 2026-09-05

- [Tiffany France](https://www.tiffany.fr/) : carrousel produits desktop avec petits chevrons nus, sans boite, autour d'une barre de progression sous les produits. Mobile : barre de progression et apercu des pieces suivantes, fleches produits masquees. Observation visuelle dans Chrome apres refus des cookies optionnels ; le navigateur de test etait bloque par leur CDN.
- [Van Cleef & Arpels](https://www.vancleefarpels.com/fr/fr/home.html) : carrousel produits avec pagination discrete, zones de commande transparentes et sans bordure. Zone Next desktop observee de 50 x 230 px ; commandes masquees dans la version mobile observee. La taille de la zone d'action ne devient pas une boite visible.

Adaptation au besoin MilAura : conserver la navigation explicite par fleches demandee par Patrice et reprendre le dessin sobre, sans copier le mecanisme tactile des references.

## Direction et implementation

- Palette et typographie existantes conservees : nacre, encre prune, aigue-marine et or mat via les tokens du theme. Aucun nouveau token ni changement de police.
- Un petit chevron de trait fin de chaque cote du rail, dans la marge nacree situee hors de la photo ; aucun bijou recouvert, y compris les bracelets qui traversent toute la largeur de l'image.
- SVG 20 x 20 px, dessin utile d'environ 6 x 12 px, trait 1.25 dans le viewBox 24. Cible tactile transparente de 44 x 44 px, entierement dans l'ecran.
- Commande indisponible masquee ; indication de 2 px une seule fois a l'apparition de la rangee, preference de mouvement reduit respectee. Retour d'appui discret.
- Largeur des cartes 286 px, gouttiere 16 px, compteur, photos, textes et rendu desktop inchanges. Aucun changement JavaScript, aucun code de swipe reintroduit.

Perimetre : `assets/milaura-stone-pages.css` et deux SVG de `sections/milaura-stone-directory.liquid`. Ancien fond translucide, bordure et positions interieures retires dans les regles existantes, sans ajouter de couche de surcharge.

Recette locale finale : 360/390/430/768/1440. Dimensions et styles calcules des 39 cartes identiques au live de depart. Navigation aller/retour des treize rangees a 390 px, clavier, mouvement reduit, redimensionnement et ouverture du lien de collection conformes. Les glyphes restent hors des photos, les cibles de 44 px entierement dans l'ecran. Captures controlees sur photos claires et sombres. Aucun debordement horizontal. Theme Check : 0 erreur, 16 avertissements historiques ; diff sans erreur. Simulation Chromium, pas de recette sur iPhone physique.

Publication et pullback finaux a consigner. Preuves locales : `/private/tmp/milaura-arrow-polish-20260905/`, rapport `candidate-qa.json` et captures. Preview panier `200974958939` non touchee.
