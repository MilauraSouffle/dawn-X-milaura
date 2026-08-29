# PDP mobile Option B, integration et live

Date : 2026-08-29
Heure de fermeture : 14:00 CEST

## Verdict

`PASS, INTEGRE ET LIVE`

Patrice a donne successivement les GO exacts `GO VISUEL PDP MOBILE OPTION B` puis `GO LIVE PDP MOBILE OPTION B`. Le lot est integre dans le canonique et publie sur le theme live. Aucun produit, stock, prix, Shopify Admin ou autre theme n a ete modifie.

## Git et perimetre

- source : `fd62b8b8c3bc8916fba02d08fa0602d05fd0fd9b` ;
- integration : `5c858765` ;
- documentation du GO visuel : `056a1380` ;
- fichier unique : `sections/milaura-product-hero.liquid` ;
- worktree source propre, aligne et gele ;
- `codex/milaura-integration` propre et aligne avec origin avant le live.

## Shopify

- theme live : `190430282075` ;
- theme de developpement QA : `199421952347` ;
- theme Rentree `200259043675` intact ;
- preflight live avant push identique au canonique precedent, SHA-256 `286804271506eebee7371636c4f6278d9d019b6e86a5d8b52583ff6016081f34` ;
- push du seul fichier avec `--only`, `--nodelete`, `--strict` et autorisation live ;
- pullback final identique au canonique, SHA-256 `7eec5ecff0e58aaf14cfeb391f0fd43e90fa2381fef5573584460fb786170d0c`.

## Resultat

Sur mobile jusqu a 768 px, le titre, le prix et les caracteristiques precedent la galerie. La zone d achat suit la galerie, puis la preuve sociale et les informations. Le DOM ne duplique ni H1, ni prix de header, ni preuve sociale. A partir de 769 px, la composition historique reste conservee.

## QA publique

- Bougie Serenite Amethyste : 360 x 800, 390 x 844, 430 x 932 et 1440 x 1000 ;
- Bracelet Alba : titre long controle a 430 x 932 ;
- largeur du document egale au viewport a toutes les largeurs ;
- un H1, un prix de header et une preuve sociale ;
- ordre visuel mobile confirme par les positions titre, prix, galerie, achat, preuve sociale et informations ;
- desktop 1440 conforme aux positions du baseline prive ;
- galerie Alba : clic suivant reussi, `scrollLeft` egal a la largeur du rail et dot 2 active ;
- Theme Check : zero erreur, seize avertissements historiques dans huit fichiers hors lot ;
- aucune erreur console propre au lot. Deux erreurs Shopify globales `shop.app` CSP et 403 ont ete observees sur la bougie ; Alba a termine avec zero erreur.

Preuve visuelle publique : `/private/tmp/milaura-pdp-live-qa-artifacts-20260829-1359/page-2026-08-29T11-59-31-317Z.png`.

## Etat final

Le lot est ferme. Le theme de developpement et la reservation du fichier sont liberes. Le live reste sous la propriete exclusive du master pour toute evolution future.
