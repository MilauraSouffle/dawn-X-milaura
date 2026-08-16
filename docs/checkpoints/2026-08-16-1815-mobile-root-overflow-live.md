# Checkpoint mobile root overflow

Date : 2026-08-16 18:15 CEST

## Autorisation et périmètre

- Patrice a demandé le 2026-08-16 un correctif direct sur le live `190430282075`, sans thème de développement.
- Fichier thème exclusif : `assets/milaura-product-experience.css`.
- Documentation exclusive : ce checkpoint.
- Aucun fichier Ruban, PDP Liquid, Hero, Atelier, navigation, panier ou catalogue modifié.

## Diagnostic public avant correction

Page de preuve : `https://milaura.fr/products/collier-obsidienne-noire-boho-dore`.

À 390 px :

- `document.body.scrollWidth = 390` ;
- `document.documentElement.scrollWidth = 959` ;
- la racine pouvait être déplacée jusqu'à environ 500 px, créant la zone blanche latérale ;
- masquer le widget Google, la galerie, le panier, le dock ou le Ruban ne changeait pas les 959 px ;
- masquer `.milaura-product-proof` ou `.milaura-product-proof__track` ramenait immédiatement la racine à 390 px.

La cause exacte était le texte visuellement masqué `sous réserve d'éligibilité`, enfant de `.milaura-product-proof__text` dans une carte hors viewport du rail Services. Sa position absolue n'avait pas de contenant positionné local et contribuait au débordement de la racine.

## Correctif

Ajout de `position: relative` sur `.milaura-product-proof__text`.

Cette règle crée le contenant local attendu pour le texte accessible, sans modifier la largeur des cartes, sans masquer le débordement global et sans désactiver le scroll interne du rail.

## Validation avant intégration

| Viewport | Largeur racine | Largeur body | Scroll racine | Rail Services |
| --- | --- | --- | --- | --- |
| 360 px | 360 px | 360 px | 0 px | 1 470 px, scroll interne actif |
| 390 px | 390 px | 390 px | 0 px | 1 470 px, scroll interne actif |
| 430 px | 430 px | 430 px | 0 px | 1 470 px, scroll interne actif |

Le test à 390 px a également confirmé `railScrollLeft = 245` avec une racine à `scrollX = 0`.

`shopify theme check` a inspecté 292 fichiers sans erreur. Les 17 avertissements signalés concernent 9 fichiers historiques hors périmètre et aucun ne vise `assets/milaura-product-experience.css`.

## Déploiement

À compléter après intégration, push ciblé sur le live, pullback et QA publique finale.
