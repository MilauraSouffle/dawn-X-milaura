# Rentree Sodalite : pause a 70 %

Date : 2026-08-22 16:45 CEST
Reprise demandee : 2026-08-31
Decisionnaire visuel : Patrice Allié

## Decision

Patrice met en pause la section temporaire `Rentree / septembre`, destinee a remplacer la selection d aout. Le chantier est estime a `70 %` : il constitue une base de reprise, mais la section complete ne convient pas encore et ne possede aucun GO visuel final.

La photographie fixe Sodalite est retenue pour avancer. L animation V3 est abandonnee comme direction courante : le composite et l animation produit ne sont pas au niveau attendu. Ne pas relancer une video ou une nouvelle generation sans demande explicite de Patrice.

## Etat exact du lot

- branche : `codex/milaura-rentree-sodalite-20260821` ;
- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/rentree-sodalite-20260821` ;
- base commune avec l integration : `94d33800047c790962158bf18cef009ef4693dd4` ;
- HEAD de pause : `47cc3e627277f22b115ded88baa7762e7b989967` ;
- distant : aligne avec `origin/codex/milaura-rentree-sodalite-20260821` ;
- worktree : propre ;
- theme prive non publie : `MilAura Sodalite Rentree Preview 2026-08-21`, ID `200259043675` ;
- preview home : `https://milaura-2.myshopify.com/?preview_theme_id=200259043675#MilauraSelection-template--30113046200667__bestsellers` ;
- live `190430282075` : intact ;
- developpement `199421952347` : intact ;
- aucun Admin, collection reelle, redirect, feed ou Ads.

Le dernier commit remplace le film par une image fixe pleine largeur, sans voile ni texte superpose. Le contenu commercial reste dans un bandeau Nacre sous l image. Aucun MP4, bouton pause ou script video n est charge par cette configuration.

## Media fixe retenu

Source validee par Patrice :

`/Users/paesano/.codex/generated_images/01a0233a-331a-76a1-bb15-789a93098f2b/exec-1885766f-5185-4f30-998d-d7e2bdc0ecb5.png`

- source : `1672 x 941`, SHA-256 `0379129d19d3c80d1f54ed2022ff4844a5630c5e8349e124d559aa4145d7cd66` ;
- desktop optimise : `assets/milaura-rentree-sodalite-hero-v3-desktop-poster.webp`, `1672 x 941`, SHA-256 `5e6bfe9aa864df801a577c07167cfe19564ff3a2d60c95537164549b92a47e31` ;
- mobile optimise sans recadrage : `assets/milaura-rentree-sodalite-hero-v3-mobile-poster.webp`, `1280 x 720`, SHA-256 `56353399328ff4b48dfa136b6a3734bf83cde1bb6396ecd3d791107eda4c7815`.

## Fichiers de la branche

Quatorze chemins different de la base `94d33800` :

1. `templates/index.json` ;
2. `templates/collection.selection-de-karine.json` ;
3. `snippets/milaura-nav-curated-links.liquid` ;
4. `sections/milaura-selection-atelier.liquid` ;
5. `sections/milaura-seasonal-collection.liquid` ;
6. `assets/milaura-selection-rentree-sodalite.webp` ;
7. `assets/milaura-seasonal-media.js` ;
8. `assets/milaura-rentree-sodalite-chapelet-porte.webp` ;
9. `assets/milaura-rentree-sodalite-chloe-6s-4x5.mp4` ;
10. `assets/milaura-rentree-sodalite-chloe-poster-4x5.webp` ;
11. `assets/milaura-rentree-sodalite-hero-v3-desktop.mp4` ;
12. `assets/milaura-rentree-sodalite-hero-v3-mobile.mp4` ;
13. `assets/milaura-rentree-sodalite-hero-v3-desktop-poster.webp` ;
14. `assets/milaura-rentree-sodalite-hero-v3-mobile-poster.webp`.

Les MP4 V3 restent presents mais ne sont plus references. Ne pas les supprimer pendant la pause. L ordre des rails de la home reste gele. Le rail commercial `Nouveautes / Meilleures ventes / Promotions` reste hors scope.

## Validations terminees

- branche commitee, poussee et alignee au commit `47cc3e62` ;
- `git diff --check` : passe ;
- JSON de `templates/index.json` : valide ;
- ordre des rails de la home : inchange ;
- Theme Check : `0 erreur`, `16 avertissements preexistants hors lot` ;
- push cible des quatre fichiers de la version fixe sur le theme prive : reussi avec `--nodelete --strict` ;
- QA navigateur reelle a `1440`, `430`, `390` et `360` px : image desktop/mobile correcte, aucun overflow, aucune video, aucun bouton pause et aucune erreur console ;
- la photographie est servie par les deux assets WebP attendus.

Le pullback final des quatre fichiers n a pas pu etre ferme : Shopify CLI renvoie `Failed to access local storage (set): RangeError: Maximum call stack size exceeded`. Deux tentatives de lecture ont produit la meme erreur. Ne pas supprimer le dossier `~/Library/Preferences/shopify-cli-theme-conf-nodejs` et ne pas reset ou clean la configuration. Ce defaut local doit etre resolu de facon non destructive avant toute future preuve de synchronisation.

## Ce qui reste a faire le 2026-08-31

1. Reprendre en lecture seule depuis ce checkpoint, `docs/workstreams.md` et le worktree propre a `47cc3e62`.
2. Montrer la preview actuelle a Patrice et recueillir au maximum trois corrections visuelles prioritaires. Ne pas repartir sur une nouvelle direction complete sans demande explicite.
3. Conserver la photo fixe comme media par defaut. Polir la composition, le rythme, l accroche et la transition avec les sections voisines jusqu au GO visuel final.
4. Reauditer les produits reellement publies en Sodalite, leurs variantes, le stock physique et Shopify, les couts rendus, les marges, les photos et les dates.
5. Remplacer les produits d aout temporaires de la landing hybride par la liste finale Sodalite. La landing actuelle ne constitue pas une landing catalogue fidele.
6. Choisir l architecture mensuelle finale autour de `selection-de-karine`, puis preparer le remplacement d aout sans toucher au live tant que les gates produit, visuel et commercial ne sont pas fermes.
7. Resoudre le pullback Shopify CLI sans suppression de preferences, puis refaire push cible, pullback exact et QA privee.
8. Demander separement un `GO INTEGRATION`, un `GO ADMIN/COLLECTION` si necessaire, puis un `GO LIVE`. Le feed, les redirects et les Ads restent des gates distincts.

## Gates fermes pendant la pause

- aucune edition de la branche ou du theme prive avant la reprise du 2026-08-31 ou une nouvelle demande explicite de Patrice ;
- aucune integration ;
- aucun theme live ;
- aucun Admin Shopify, produit, stock, prix ou collection ;
- aucun redirect, feed, Pinterest Ads, Meta Ads ou Google Ads ;
- aucun GO visuel final deduit du statut `70 %`.

## Message de reprise simple

```text
Reprenons la section temporaire Rentree / septembre qui doit remplacer la selection d aout. Lis d abord docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md et docs/workstreams.md, puis verifie en lecture seule la branche codex/milaura-rentree-sodalite-20260821, le worktree associe et le theme prive 200259043675. La base actuelle est a 70 %, sans GO visuel final ni GO live. Garde la photo fixe validee, ne relance pas l animation, et commence par me montrer l etat exact puis les trois corrections visuelles prioritaires pour terminer la section.
```
