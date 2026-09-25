# Pièces rares et géode cathédrale live

Date : 2026-09-25 13:46 CEST

## Résultat

- Collection Shopify `682086859099`, handle `pieces-rares`, publiée sur la Boutique en ligne.
- Suffixe de template Shopify confirmé : `milaura-pieces-rares`.
- Produit vedette `10764374081883`, handle `geode-cathedrale-en-amethyste-19-9-kg`, statut `ACTIVE`, neuf médias contractuels, stock 1, prix public 1 299 EUR.
- Collection de sept produits : la géode vedette et les six références validées par Patrice.
- Portail Home turquoise, navigation et landing éditoriale actifs sur le thème public `190430282075`.
- Dimensions publiques de la pièce : `39,5 × 23 × 14 cm`.

## Publication et preuves

- Fichiers de thème publiés de façon ciblée, avec `--allow-live --nodelete --strict`.
- Dernier pullback de `templates/collection.milaura-pieces-rares.json` strictement identique au fichier local.
- `node --test tests/rare-pieces-landing.test.mjs` : 4 tests sur 4 réussis.
- `git diff --check` : réussi.
- `shopify theme check --path . --fail-level error` : aucune erreur, seize avertissements historiques hors périmètre.
- QA publique desktop puis mobile `390 × 844` : hiérarchie, image contractuelle, CTA, pièce vedette, six cartes catalogue et navigation vérifiés.
- Aucune largeur parasite : `documentElement.scrollWidth === innerWidth` sur la Home et la landing à 390 px.
- Consoles navigateur Home et landing : aucune erreur ni avertissement.

## Incident détecté et corrigé

La collection était publiée mais son `template_suffix` Shopify était encore vide, ce qui servait le catalogue générique. Le suffixe `milaura-pieces-rares` a été attribué et relu via l'API Shopify. La route publique sert maintenant la landing dédiée.

## Limite restante

La fiche produit annonce une livraison par transporteur privé à 59,90 EUR. La présence de cette règle dans le checkout Shopify n'a pas été testée dans ce lot et reste un contrôle commerce distinct avant une commande réelle.

## Contrat photo

Aucune création IA de la géode. Les médias sont les photographies de la pièce réellement vendue. Les retouches autorisées restent limitées au fond, au détourage, à l'exposition, à la balance des blancs et à la netteté, sans modifier la forme, la couleur, les cristaux, les inclusions, les dimensions ou l'état réel.
