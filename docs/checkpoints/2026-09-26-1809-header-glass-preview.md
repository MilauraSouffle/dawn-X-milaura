# Header verre Home, preview privee

Date : 2026-09-26 18:09 CEST

Statut : `PREVIEW PRIVEE PRETE, PASS TECHNIQUE, GO VISUEL PATRICE REQUIS`

## Demande

Restaurer le header transparent de la Home avec un leger blur, apres sa regression vers une bande Nacre presque opaque lors de l integration du carousel Pieces rares.

## Cause confirmee

Le fichier `assets/milaura-home-rare-carousel.css`, ajoute au commit `5af91fa8`, forcait la surface `.nav-inner` a `88 %` Nacre sur toute la Home. Le header centralise utilisait un verre a `16 %` Nacre avec un blur de `12px`.

## Correctif

- fond ramene de `88 %` a `16 %` Nacre ;
- blur conserve a `12px` ;
- saturation alignee sur la navigation partagee a `112 %` ;
- geometrie, liens, icones, sticky et carousel inchanges.

## Preuves

- Theme prive : `201956753755`, `MilAura Header Glass Preview 2026-09-26`.
- Preview : `https://milaura-2.myshopify.com?preview_theme_id=201956753755`.
- Bureau `1440 x 900` : header `84px`, fond calcule `16 %` Nacre, blur `12px`, hero Automne visible sous le header, largeur document `1440px`.
- Mobile `390 x 844` : header `62px`, fond calcule `16 %` Nacre, blur `12px`, largeur document `390px`.
- Aucune erreur Liquid observee.
- `python3 tests/css_contract_test.py` : PASS.
- `git diff --check` : PASS.
- `shopify theme check` : 0 erreur, 16 avertissements historiques hors lot.
- Pullback du CSS : identique bit a bit, SHA-256 `c38ff3d6f2e5033747d69cad35563ce83731218ce463c8ce7013277995fc9ee2`.

## Gates

- GO visuel Patrice requis.
- Aucun commit d integration, aucune publication live.
- Theme public `190430282075` intact.
