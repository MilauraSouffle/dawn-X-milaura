# Homepage MilAura, restructuration live

Date : 2026-09-23 17:48 CEST

## Decision et gates

Patrice a valide visuellement la nouvelle Home puis a donne le GO explicite pour commit, push et deploiement live le 2026-09-23.

- GO visuel : recu.
- GO live : recu.
- Branche de fonctionnalite : `codex/milaura-css-foundations-20260923`.
- Commits de fonctionnalite : `05912f8f` puis `fdf7f19d`.
- Branche canonique : `codex/milaura-integration`, fast-forward vers `fdf7f19d` puis push sur origin.
- Theme public : `190430282075`.
- Theme prive de recette : `201797534043`.

## Perimetre publie

Dix fichiers seulement ont ete deployes sur le theme public :

- `assets/milaura-home-editorial.css`
- `assets/milaura-home-karine-selection.css`
- `assets/milaura-home-occasions.css`
- `assets/milaura-home-paths.css`
- `layout/theme.liquid`
- `sections/milaura-featured-products.liquid`
- `sections/milaura-hero-portal.liquid`
- `sections/milaura-home-editorial.liquid`
- `sections/milaura-selection-atelier.liquid`
- `templates/index.json`

Le push Shopify a utilise `--allow-live --nodelete --strict` et dix options `--only`. Aucun push complet et aucune suppression distante.

## Sauvegarde et pullback

- Snapshot cible avant deploiement : `/private/tmp/milaura-home-live-before-20260923-WCqjb3`.
- Pullback apres deploiement : `/private/tmp/milaura-home-live-after-20260923-DMQfch`.
- Comparaison bit a bit entre la source et le pullback : `10/10` fichiers identiques.

## Validation technique

- `git diff --check 43a50ce4..fdf7f19d` : PASS.
- `templates/index.json` : JSON valide.
- Theme Check : 0 erreur et 16 avertissements historiques hors lot.
- Aucun avertissement Theme Check dans les fichiers modifies.

## QA publique

Route controlee : `https://milaura.fr/?pb=0`, sans preview bar.

Mobile `390 x 844` :

- largeur document `390px`, aucun debordement horizontal ;
- un seul H1 : `Grenat & cornaline les couleurs de l automne` ;
- huit sections visibles dans l ordre valide ;
- sept jonctions consecutives mesurees a `0px` ;
- ancien hero aigue-marine de `641px` ;
- bandeau final de `436px`, sans image, avec deux actions.

Bureau `1440 x 900` :

- largeur document `1440px`, aucun debordement horizontal ;
- un seul H1 et sept H2 ;
- sept jonctions consecutives mesurees a `0px` ;
- ancien hero aigue-marine de `648px` ;
- bandeau final de `312px`, sans image, avec deux actions ;
- console navigateur : aucune erreur ni alerte.

Surfaces confirmees sur le live :

- trois parcours : blanc pur `rgb(255, 255, 255)` ;
- selection de Karine : blanc pur `rgb(255, 255, 255)` ;
- best-sellers : mineral `rgb(220, 235, 232)` ;
- nouveautes : blanc pur `rgb(255, 255, 255)` ;
- occasions : quartz rose `rgb(240, 217, 224)` ;
- bandeau guides : Nacre `rgb(251, 248, 243)`.

## Resultat fonctionnel et visuel

- La campagne Automne est le hero principal et porte le seul H1.
- Les trois facons de choisir forment la section 2 sur fond blanc.
- L ancien hero aigue-marine devient un interlude de marque compacte en section 3 et porte un H2.
- La selection de Karine passe sur fond blanc.
- Les best-sellers conservent le fond mineral.
- Les nouveautes passent sur fond blanc.
- La section date passe sur fond quartz rose.
- La derniere section devient un bandeau Nacre minimal, sans photographie, texte long ni carte article.
- Les traits et espaces entre sections sont supprimes.

## Exclusions et etat du checkout

Aucun produit, prix, stock, media produit, collection, Shopify Admin, Search and Discovery, commande ou Ads n a ete modifie. Les fichiers documentaires et exports concurrents deja sales dans le checkout d integration ont ete preserves sans reset, clean ou ajout global.
