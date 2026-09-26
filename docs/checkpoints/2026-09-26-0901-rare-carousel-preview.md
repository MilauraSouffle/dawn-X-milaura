# Preview Home et landing Pieces rares du 2026-09-26

## Statut

- Etat : `PREVIEW PRIVEE PRETE, PASS TECHNIQUE, RELEASE-CANDIDATE, GO VISUEL PATRICE REQUIS`.
- Theme Shopify prive : `201935323483`, `MilAura Rare Carousel Preview 2026-09-26`.
- Preview : `https://milaura-2.myshopify.com?preview_theme_id=201935323483`.
- Theme public : `190430282075`, intact. Aucun fichier publie sur le live.
- Branche : `codex/milaura-rare-carousel-preview-20260926`.
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/rare-carousel-preview-20260926`.

## Resultat

- La Home affiche une section en deux moities sur bureau : carousel produit sur fond Nacre a gauche, photographie editoriale fixe a droite.
- Le carousel tourne sur le collier lapis-lazuli, les bracelets cyanite et zoisite, les boucles grenat et la geode amethyste. Chaque slide synchronise detourage, titre Shopify, matiere, benefice factuel, prix et lien produit.
- Sous `750px`, le panneau mannequin disparait et le carousel occupe toute la largeur.
- Le hero de la collection `pieces-rares` reutilise le meme master mannequin sur bureau et mobile, sans cadrage qui masque la composition.
- Le cast MilAura V6 retenu est `cast-f03-deep-warm`.
- Le master Higgsfield V2 est `TECHNICAL_PASS_VISUAL_GO_PENDING`. Il ne vaut pas GO visuel de Patrice.

## Production visuelle

- Element Higgsfield reusable : `405e537c-47d0-4679-a1ae-6cac88241058`, `Milaura-F03-V1`.
- Job V2 : `e25211a3-5836-49db-acb5-74216ac6253a`, modele `gpt_image_2`.
- Master : `docs/visuals/2026-09-26-rare-carousel-master-v2/masters/higgsfield-f03-selection-v2.png`, `2048 x 2048`, SHA-256 `5b29edef04ff9c0e03a35926a936238c59880596bc0f24fd3262083c7f202bb5`.
- Derivee theme : `assets/milaura-rare-pieces-f03-selection-v2.avif`, `1800 x 1800`, SHA-256 `4772ed83260b8e335b02a705cbaee75f88597911b4c93157761a948ca7981acc`.
- Les cinq detourages WebP ont ete produits avec le mode integre de suppression de fond, sans demande de reconstruction du produit. Le manifeste et les empreintes vivent dans `docs/visuals/2026-09-26-rare-carousel-reference/cutout-manifest.json`.

## Verification

- `git diff --check` : succes.
- `node --check assets/milaura-home-rare-carousel.js` : succes.
- JSON des templates et manifestes : parse valide.
- `shopify theme check` : `396` fichiers, `0` erreur, `16` avertissements preexistants hors lot.
- Formats des cinq detourages : WebP alpha `yuva420p`, `1254 x 1254`.
- Home controlee en preview a `320`, `390`, `768` et `1440px`.
- A `768 x 900`, grille `384px 384px`, panneau fixe visible `384px`, controles `321.56 x 88px`, cinq cibles `44 x 44px`, debordement horizontal `0`.
- Mobile : panneau mannequin masque, pause et reprise fonctionnelles, `aria-live` silencieux en autoplay et poli en pause.
- Landing controlee sur mobile et bureau avec le meme master complet.
- Console navigateur : aucune erreur.
- Pullback cible Shopify : egalite octet par octet, y compris le dernier correctif CSS tablette.
- Revue de finition independante : `PASS / RELEASE-CANDIDATE`, aucun residuel bloquant.

## Gates restants

- GO visuel explicite de Patrice sur le master mannequin et la composition globale.
- GO d integration distinct.
- GO release puis GO live distincts avant toute publication sur `190430282075`.
