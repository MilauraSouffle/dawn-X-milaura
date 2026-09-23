# Preview Home Occasion Automne 2026

Date : 2026-09-22 14:11 CEST

Statut : `PREVIEW PRIVEE PRETE, GO VISUEL PATRICE EN ATTENTE`

## Resultat

La section 2 de la page d accueil affiche maintenant une campagne Automne centree sur le grenat dans le theme Shopify prive `200259043675`, nomme `MilAura Sodalite Rentree Preview 2026-08-21`.

Le montage utilise :

- la video feuilles desktop en 16:9 ;
- la video feuilles mobile en 9:16 ;
- un bracelet grenat rhodolite actif ;
- un collier grenat rouge et des boucles grenat rouge utilises comme visuels decoratifs ;
- le titre `Le grenat pour entrer dans l automne` ;
- un CTA global `Decouvrir la selection d automne` vers la future URL permanente `/collections/selection-automne`.

Aucun lien individuel vers les huit nouveaux produits absents ou en brouillon n est rendu. Les images produit ne sont pas cliquables. La section ne doit pas passer live tant que la collection permanente n existe pas en HTTP 200 et que les produits voulus ne sont pas actifs et accessibles.

## Fichiers du lot

- `sections/milaura-selection-atelier.liquid`
- `templates/index.json`
- `assets/milaura-automne-2026-feuilles-desktop.mp4`
- `assets/milaura-automne-2026-feuilles-mobile.mp4`
- `assets/milaura-automne-2026-feuilles-desktop-poster.webp`
- `assets/milaura-automne-2026-feuilles-mobile-poster.webp`
- `assets/milaura-automne-2026-bracelet-rhodolite.webp`
- `assets/milaura-automne-2026-collier-grenat.webp`
- `assets/milaura-automne-2026-boucles-grenat.webp`
- `docs/reference/milaura-home-occasion-registry.json`
- `docs/workstreams.md`
- `docs/codex-handoff.md`
- ce checkpoint.

## Verification

- `shopify theme check` : 0 erreur, 16 avertissements historiques hors lot.
- `git diff --check` : PASS.
- JSON du registre : `jq empty` PASS.
- QA mobile `390 x 844` : titre, CTA et description visibles, largeur document 390 px pour 390 px de viewport, aucun debordement horizontal.
- QA responsive desktop : composition bijou, texte et CTA conformes ; media responsive charge.
- Video mobile : source mobile correcte, 8 secondes, `readyState=4`, aucune erreur media.
- Journal navigateur : aucune erreur ni alerte.
- Pullback theme prive : la section Liquid et les sept medias correspondent exactement aux fichiers locaux par SHA-256.
- Pullback `templates/index.json` : le bloc `bestsellers` est conforme. Shopify a retire six reglages du Hero qui ne sont pas declares dans l ancien schema `milaura-hero-portal` de ce theme de preview. Cette normalisation est limitee au theme prive et ne touche pas le live.

## Etat des systemes

- Theme live `190430282075` : non touche.
- Shopify Admin : non touche.
- Collection `/collections/selection-automne` : non creee ni configuree dans ce lot.
- Produits, stocks, prix et canaux : non touches.
- Ads et Pinterest : non touches.

## Prochaine gate

1. Patrice donne ou refuse le GO visuel de la section.
2. Apres GO visuel, verifier en lecture seule les neuf produits et la future collection.
3. Construire la landing permanente Automne, puis demander le GO Admin necessaire a sa creation ou son affectation.
4. Faire une recette privee complete de la landing et des liens.
5. Demander un GO live distinct.
6. Apres release publique verifiee, transmettre le brief Pinterest et Ads sans publication automatique.

## Reprise copiable

```text
Reprends la Home Occasion Automne de MilAura depuis docs/checkpoints/2026-09-22-1411-autumn-home-preview.md. La section 2 est prete sur le theme prive 200259043675 et attend le GO visuel de Patrice. Ne touche pas au live. Verifie d abord le statut public des neuf produits et l existence de /collections/selection-automne. Ne publie aucun lien individuel vers un produit absent, brouillon ou inaccessible. Apres GO visuel, construis la landing permanente Automne, fais la QA mobile et desktop, puis attends les GO Admin et live distincts. Preserve le slot Pierre du moment et tous les travaux concurrents.
```
