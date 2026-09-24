# Hero Home Automne V6 en preview

Date : 2026-09-24 09:30 CEST

Statut : `PREVIEW TECHNIQUE PASS, GO VISUEL PATRICE EN ATTENTE, NON LIVE`

## Direction appliquee

- Deux bracelets depassent du bord gauche et restent volontairement coupes.
- Une seule branche nue entre depuis la droite.
- Le bracelet en cornaline 8 mm et le bracelet dore en grenat rhodolite 3 mm pendent sous cette branche. Le bois traverse leurs ouvertures et leur point bas suit la gravite.
- Le bracelet Iris repose au premier plan sur un socle bas en pierre sombre.
- Les boucles en grenat reposent directement dans la flaque.
- Le bord inferieur de la flaque est hors cadre sur bureau et mobile afin qu elle paraisse posee au sol.
- Les feuilles attachees aux branches et la forme de goutte fermee restent exclues.

## References produit

- Bracelet dore en amethyste, cornaline et cristal de roche.
- Bracelet en cornaline 8 mm.
- Bracelet dore en cornaline facettee, reference retenue pour le bracelet dore en cornaline.
- Bracelet Iris dore en aigue-marine, cornaline et grenat 4 mm.
- Bracelet dore en grenat rhodolite 3 mm.
- Boucles d oreilles pendantes en grenat rouge 12 mm.

Les produits actifs et leurs images publiques ont ete verifies sur `milaura.fr` avant la generation.

## Actifs V6

- `assets/milaura-automne-2026-puddle-earrings-desktop-v6.webp`
- `assets/milaura-automne-2026-puddle-earrings-mobile-v6.webp`
- `assets/milaura-automne-2026-branch-bracelets-desktop-v6.webp`
- `assets/milaura-automne-2026-branch-bracelets-mobile-v6.webp`
- `assets/milaura-automne-2026-left-bracelets-v6.webp`
- `assets/milaura-automne-2026-iris-stone-plinth-v6.webp`

Generation : outil Imagegen natif, six appels distincts, transparence alpha confirmee. Le montage utilise quatre calques independants dans `sections/milaura-selection-atelier.liquid` et `assets/milaura-home-seasonal.css`.

## Verification

- Theme prive : `201797534043`.
- Preview : `https://milaura-2.myshopify.com?preview_theme_id=201797534043`.
- Bureau : `1440 x 900`, aucun debordement horizontal, navigation lisible, aucun bijou dans le menu.
- Mobile : `390 x 844`, aucun debordement horizontal, quatre calques complets, composition distincte du texte.
- Video : `loop=true`, `paused=false`, `readyState=4` pendant la QA.
- Images : quatre calques charges, aucune image cassee.
- JavaScript valide, template JSON valide apres retrait de son en-tete de commentaire Shopify et `git diff --check` sans erreur.
- Theme Check : zero erreur, seize avertissements historiques hors lot.
- Journal navigateur : aucune erreur ; seules les informations de hot reload desactive du theme prive sont presentes.
- Pullback : neuf fichiers actifs sur neuf identiques au worktree.
- Theme public `190430282075`, Shopify Admin, landing Automne et medias V3 intouches.

Captures locales :

- `/private/tmp/milaura-autumn-hero-v4-20260924/desktop-1440x900-v6-clean3.png`
- `/private/tmp/milaura-autumn-hero-v4-20260924/mobile-390x844-v6-clean-final.png`

## Gate suivante

Attendre le GO visuel explicite de Patrice avant integration, commit de release ou publication live.
