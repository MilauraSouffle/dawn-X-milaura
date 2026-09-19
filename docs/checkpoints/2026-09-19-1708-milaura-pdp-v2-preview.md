# MilAura PDP V2, preview technique du 2026-09-19

## Decision et perimetre

- Patrice a confirme que le workflow creatif est cadre, que ses photos sont disponibles et que la PDP doit maintenant fournir le contrat d affichage au futur workflow d enrichissement.
- Le pilote officiel est le `Bracelet Iris dore en aigue-marine, cornaline et grenat 4 mm`.
- La PDP V2 est construite dans le worktree isole `/Users/paesano/Documents/MilAura website/_worktrees/pdp-v2-20260919`, branche `codex/milaura-pdp-v2-20260919`, depuis `a30844b1`.
- Le checkout d integration sale est reste intact. Aucun produit Admin, media produit, affectation de template ou theme public n a ete modifie.

## Architecture livree

Ordre de lecture et de conversion :

1. galerie produit H01 a H06 ;
2. titre, prix, disponibilite, variante eventuelle, quantite et ajout au panier ;
3. preuve sociale MilAura discrete et conservee ;
4. rail de reassurance pleine largeur servant de separation ;
5. trois chapitres ouverts E01, E02 et E03, sans onglet ni lien d ancre ;
6. recommandations, conseil humain et achat rapide mobile.

Le texte long sort totalement du hero. Les informations produit restent accessibles en un scroll, dans des sections ouvertes. Le design applique les tokens MilAura, Gloock pour les titres editoriaux et Instrument Sans pour les fonctions d achat.

## Contrat media pour le pipeline

La PDP consomme neuf slots canoniques :

| Slot | Ratio attendu | Fonction |
| --- | --- | --- |
| H01 | 4:5 | Produit complet seul et immediatement inspectable |
| H02 | 4:5 | Porte, echelle reelle, produit dominant |
| H03 | 4:5 | Seconde vue produit |
| H04 | 4:5 | Macro signature |
| H05 | 4:5 | Seconde situation portee |
| H06 | 4:5 | Projection editoriale |
| E01 | 1:1 | Detail bijou et matiere |
| E02 | 1:1 | Verite technique, construction et finition |
| E03 | 2:3 | Recit porte, avec crop mobile 4:5 prepare |

Le raccord Shopify est volontairement simple : chaque alt media contient `[MILAURA:H01]` a `[MILAURA:H06]` ou `[MILAURA:E01]` a `[MILAURA:E03]`. La galerie canonique n est activee que lorsque les six slots H sont presents. Avant cela, elle affiche les six premiers medias existants. Les chapitres E utilisent les positions 7 a 9, puis 4 a 6, comme fallback temporaire.

## Fichiers du lot

- `assets/milaura-product-pdp-v2.css`
- `assets/milaura-product-pdp-v2.js`
- `sections/milaura-product-hero-v2.liquid`
- `sections/milaura-product-reassurance-v2.liquid`
- `sections/milaura-product-narrative-v2.liquid`
- `sections/milaura-product-sticky-v2.liquid`
- `templates/product.milaura-pdp-v2.json`
- `tests/pdp-v2-contract.test.mjs`
- `docs/workstreams.md`
- `docs/checkpoints/2026-09-19-1708-milaura-pdp-v2-preview.md`

## Preview Shopify

- Theme non publie : `MilAura PDP V2 Preview 2026-09-19`.
- ID : `201381216603`.
- URL pilote : `https://milaura.fr/products/bracelet-iris-dore-en-aigue-marine-cornaline-et-grenat-4-mm?view=milaura-pdp-v2` avec la session de preview du theme `201381216603` active.
- Theme public reste intact : `190430282075`.
- Les sept fichiers distants ont ete relus par `shopify theme pull` dans `/private/tmp/milaura-pdp-v2-pullback-20260919-qa` et compares octet par octet aux sources locales. Resultat : `7/7` identiques.

## Validation technique

- `node --test tests/pdp-v2-contract.test.mjs` : `5/5 PASS`.
- `node --check assets/milaura-product-pdp-v2.js` : PASS.
- `git diff --check` : PASS.
- `shopify theme check` : zero erreur, seize warnings historiques dans huit fichiers hors lot.
- Journal navigateur de la preview : aucune erreur, aucun warning.

## QA visuelle et fonctionnelle

Mobile `390 x 844` :

- largeur document `390`, aucun debordement horizontal ;
- hero et rail de reassurance `390` ;
- galerie de six vues, image `390 x 487,5` selon le ratio 4:5 ;
- titre a `24 px`, hauteur mesuree `78,47 px` ;
- pagination testee de la vue 1 a la vue 2, compteur passe a `2` et rail decale de `390 px` ;
- quantite testee de `1` a `2` puis retour a `1` ;
- achat rapide mobile affiche apres sortie du panneau d achat, avec `aria-hidden=false` ;
- rail de reassurance puis chapitres editoriaux ouverts conformes.

Desktop `1440 x 900` :

- largeur document `1440`, aucun debordement horizontal ;
- grille hero mesuree a environ `902 / 394 px` ;
- titre a `39,974 px` ;
- galerie deux colonnes, panneau d achat fixe dans son flux et CTA visible dans le premier ecran ;
- achat rapide mobile correctement masque.

## Risques et gates restants

1. Les neuf masters Iris V3 ne sont pas encore charges sur le produit Shopify. La preview affiche donc les anciennes images par fallback. Cette preview valide la structure, pas le rendu photographique final.
2. La description Shopify visible indique encore trois lignes et deux chaines paralleles, alors que le Truth Pack V3 retient exactement deux brins portables. Le workflow d enrichissement doit corriger cette donnee avant toute integration ou publication.
3. Le workflow creatif doit raccorder son manifeste V3 a `product_enrichment.json`, charger les neuf medias et appliquer les balises de slots dans les alt.
4. La branche de stabilisation typographique reste une validation distincte. La PDP V2 utilise deja les tokens canoniques et pourra heriter de cette branche lors de l integration.
5. Le PASS technique est acquis. Le GO visuel de Patrice, l integration Git, l affectation Admin, la release et le live restent des decisions distinctes.
6. L objectif de conversion de 10 % est un objectif commercial, pas une garantie technique. Il devra etre mesure apres publication avec une periode et un volume de sessions suffisants.

## Prochaine action apres GO visuel

Charger un vrai produit issu du nouveau workflow avec ses neuf masters et ses donnees enrichies, l ouvrir sur ce template, puis refaire la QA mobile et desktop sur le contenu final. Aucune publication live ne doit etre deduite de cette validation.
