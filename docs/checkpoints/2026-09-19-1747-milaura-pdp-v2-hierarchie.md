# MilAura PDP V2, hierarchie d achat du 2026-09-19

## Decision de Patrice

- Le bouton `Ajouter au panier` doit suivre immediatement le titre, le prix et la disponibilite. La grille de caracteristiques ne doit plus interrompre cette sequence.
- La preuve sociale `Plus de 129 clientes et clients ont deja choisi cette piece` precede la grille de caracteristiques.
- Le rail de pills issu des metafields reste seul entre le hero et le guide produit.
- Le rail sombre de services, certificats et paiements quitte cette separation et passe en fin de page, avant le footer.
- La mise en avant `Qualite AA - Tres elevee` reste uniquement dans l onglet `Les pierres`. Elle est retiree du detail de fabrication.
- Le H1 doit conserver la voix Gloock sans dominer le produit ni produire de derniere ligne orpheline.

## Implementation

- `sections/milaura-product-hero-v2.liquid` : deplacement de la grille des caracteristiques apres la preuve sociale.
- `sections/milaura-product-reassurance-v2.liquid` : ajout d un mode `facts` et d un mode `services` afin de rendre les deux rails dans des sections distinctes.
- `templates/product.milaura-pdp-v2.json` : rail `facts` apres le hero et nouvelle instance `services` apres le conseil MilAura, avant le footer et le sticky mobile.
- `sections/milaura-product-narrative-v2.liquid` : suppression du callout qualite du detail de fabrication.
- `assets/milaura-product-pdp-v2.css` : H1 borne a `var(--milaura-t-h3)`, largeur editoriale `24ch`, interligne H3 et composition equilibree. Le mode `facts` conserve une surface claire.
- `tests/pdp-v2-contract.test.mjs` : contrat d ordre du hero, modes des rails et unicite du callout qualite dans le guide.

## Validation technique

- `node --test tests/pdp-v2-contract.test.mjs` : PASS, `7/7`.
- `node --check assets/milaura-product-pdp-v2.js` : PASS.
- `git diff --check` : PASS.
- `shopify theme check` : PASS, zero erreur et seize warnings historiques hors lot.
- Push cible sur le theme prive `MilAura PDP V2 Preview 2026-09-19`, ID `201381216603`.
- Pullback dans `/private/tmp/milaura-pdp-v2-pullback.VPJuAs` : les cinq fichiers de theme modifies sont identiques octet par octet apres le second push du template, necessaire pour enregistrer les nouveaux settings apres la mise a jour du schema.
- Journal navigateur apres rechargement : aucune erreur et aucun warning.

## QA visuelle

### Mobile `390 x 844`

- Largeur du document egale a `390 px`, aucun debordement horizontal.
- Titre a `24 px`, interligne `29.04 px`, trois lignes equilibrees.
- CTA avant preuve sociale, preuve sociale avant grille des caracteristiques.
- Un rail de pills produit et un rail de services dans le DOM, a des emplacements differents.
- Une seule occurrence `.milaura-pdp-quality-callout`, visible dans `Les pierres`.
- Zero occurrence du callout qualite dans la section fabrication.
- Rail sombre visible apres le conseil MilAura et juste avant le footer.

### Desktop `1440 x 900`

- Largeur du document egale a `1440 px`, aucun debordement horizontal.
- Titre a `27.982 px`, trois lignes equilibrees, sans ligne finale isolee `4 mm`.
- Le bouton d achat reste visuellement prioritaire apres le prix.
- La preuve sociale et la grille technique restent secondaires et lisibles.

## Etat de release

- Preview : mise a jour et conservee ouverte sur `https://milaura.fr/products/bracelet-iris-dore-en-aigue-marine-cornaline-et-grenat-4-mm?view=milaura-pdp-v2&qa=v2`.
- Theme public `190430282075` : intact.
- Admin produit et medias : intacts.
- Les images visibles restent les medias actuels utilises en fallback. Les masters Iris V3 ne sont pas encore raccordes au produit Shopify.
- GO visuel final, integration Git, affectation Admin, release et live restent des gates distincts.

## Etat du worktree

- Deux fichiers non suivis, apparus hors du lot pendant la session, ont ete conserves sans modification, suppression ni staging :
  - `sections/milaura-product-narrative-v2 2.liquid`
  - `sections/milaura-product-reassurance-v2 2.liquid`
- Ils ne font pas partie de cette iteration et leur origine reste a clarifier avant nettoyage.
