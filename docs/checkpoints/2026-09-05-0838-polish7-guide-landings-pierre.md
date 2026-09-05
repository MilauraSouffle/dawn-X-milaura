# Polish 7, guide des landings pierre

Date : 2026-09-05 08:38 CEST

## Demande

Remplacer le texte SEO brut de la landing Aigue-marine par une section editoriale inspiree de `Tout savoir sur cette piece` sur les PDP. Ajouter la meme structure a la landing Sodalite apres les cartes produits, sans toucher aux pages categorie pierre.

## Implementation

- Nouvelle section reutilisable : `sections/milaura-stone-guide.liquid`.
- Reutilisation directe de `assets/milaura-product-experience.css` et `assets/milaura-product-experience.js` pour conserver la structure, les onglets, le clavier et le responsive de la PDP.
- Trois onglets : `Vertus & symbolique`, `Choisir & porter`, `Entretien`.
- Les metafields `milaura.*` de la collection source restent prioritaires et sont rendus dans le HTML initial avec `metafield_tag` pour les champs riches.
- La landing Aigue-marine remplace l ancien bloc `milaura-collection-vertus` par le nouveau guide apres le catalogue.
- La landing Sodalite ajoute le guide apres le catalogue et lit la collection permanente `par-pierre-sodalite` comme source. Les replis editoriaux reprennent uniquement des informations deja publiees sur la landing et la PDP Horus.

## Fichiers du lot

- `sections/milaura-stone-guide.liquid`
- `templates/collection.milaura-campaign-aigue.json`
- `templates/collection.selection-de-karine.json`
- `docs/workstreams.md`
- `docs/checkpoints/2026-09-05-0838-polish7-guide-landings-pierre.md`

## Validation

- `shopify theme check` : PASS pour le lot, 16 avertissements historiques dans huit autres fichiers.
- `git diff --check` : PASS.
- Aucun code couleur hexadecimal, aucune police en dur et aucun tiret cadratin dans les trois fichiers de production du lot.
- Preview ciblee sur le theme prive `200259043675` avec `--nodelete --strict`.
- Pullback des trois fichiers deployes : identique au checkout.
- Navigateur desktop 1440 x 900 : Aigue-marine affiche un guide, aucun ancien bloc brut, trois panneaux alimentes par les metafields.
- Navigateur mobile 390 x 844 : Sodalite affiche le titre, les trois onglets et le panneau `Choisir & porter` sans debordement ; bascule ARIA verifiee.
- Console navigateur : aucune erreur.

## Etat de livraison

- Branche : `codex/milaura-stone-guides-polish7-20260905`.
- Commit de production : `ac3f0f7f feat: add reusable stone landing guide`.
- Branche poussee sur GitHub.
- Preview privee seulement. Aucun push sur le theme live `190430282075`.
- Aucun changement Shopify Admin et aucune affectation de template.

## Gate suivant

Attendre le GO visuel de Patrice. L integration dans `codex/milaura-integration`, l affectation eventuelle du template Aigue-marine dans Shopify Admin et le push live sont des gates distincts.
