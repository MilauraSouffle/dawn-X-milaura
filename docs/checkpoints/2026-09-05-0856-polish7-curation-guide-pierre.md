# Polish 7, curation des guides pierre

Date : 2026-09-05 08:56 CEST

## Perimetre valide

Finaliser la curation visuelle et editoriale des nouveaux guides Aigue-marine et Sodalite sur le theme prive `200259043675`. Le theme live `190430282075`, Shopify Admin, les affectations de templates et les pages categorie restent hors perimetre.

## Curation Aigue-marine

- `Vertus & symbolique` : macro du cylindre d'aigue-marine et de son montage dore, image 3 de la galerie des boucles d'oreilles.
- `Choisir & porter` : portrait rapproche d'Elena portant les boucles, image 2.
- `Entretien` : vue technique de la creole, de sa charniere et de l'anneau de liaison, image 4.
- Les textes et sources continuent de provenir des metafields de la collection Aigue-marine. Les trois panneaux restent presents dans le HTML initial.

## Curation Sodalite

- `Vertus & symbolique` : macro matiere du bracelet Horus, image 3.
- `Choisir & porter` : Chloé portant le bracelet en situation, image 5.
- `Entretien` : vue complete du bracelet sur une surface minerale claire, image 1.
- Les replis editoriaux expliquent les usages de bien-etre, les formats de pierres, les accords de couleur et les gestes d'entretien sans promesse medicale.

## Implementation reusable

- Chaque onglet accepte desormais une image personnalisee ou une image choisie dans la galerie d'un produit source.
- L'index de galerie est configurable dans l'editeur de theme.
- Le rendu media commun vit dans `snippets/milaura-stone-guide-media.liquid` pour eviter trois blocs Liquid dupliques.
- Une image de repli commune reste disponible si une galerie change ou si un produit n'est plus renseigne.

## Validation

- Controle copywriting : PASS, 287 fichiers controles.
- `git diff --check` : PASS.
- `shopify theme check` : aucun nouvel avertissement ni erreur ; 16 avertissements historiques dans huit fichiers hors lot.
- Preview privee : les six images attendues sont chargees depuis leurs fichiers Shopify distincts.
- Desktop 1440 x 900 : composition, hierarchie et cadrages valides sur Aigue-marine et Sodalite.
- Mobile 390 x 844 : trois onglets utilisables, portraits et macros correctement recadres, largeur document 390 px pour un viewport de 390 px.
- ARIA : un seul onglet selectionne et un seul panneau visible apres chaque interaction.
- Console navigateur : aucune erreur.
- Pullback Shopify des quatre fichiers de production : identique au checkout.

## Etat

- Preview curation terminee sur le theme prive `200259043675`.
- Aucun push sur le live `190430282075`.
- Aucun changement Shopify Admin.
- Gate suivant : GO visuel de Patrice, puis integration et live uniquement sur ordres distincts.

## Ajustement produit star, 2026-09-05 09:06 CEST

- Le produit star Aigue-marine est maintenant `bague-argent-925-modele-01-aigue-marine-bresil-aa-1-piece-lo`.
- Titre : `Bague Aigue-Marine Argent`.
- Texte : bague en argent 925, aigue-marine naturelle de qualite AA et nuances bleu clair cristallin, informations verifiees sur la fiche produit.
- Le bento utilise les trois images de la galerie, dans leur ordre 1, 2 et 3.
- Desktop et mobile 390 x 844 verifies, sans debordement ni erreur console.
- Pullback du template Aigue-marine identique au checkout.
- La fiche produit indiquait `Epuise` lors du controle public du 2026-09-05. Le choix du produit star est conserve conformement a la demande de Patrice.
