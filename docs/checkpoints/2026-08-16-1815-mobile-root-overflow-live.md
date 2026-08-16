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

- Commit source et intégration canonique : `be96a5d11a888ee9123bb2c9ed0c244e363951cb`.
- Branche canonique poussée : `origin/codex/milaura-integration`.
- Thème live confirmé : `dawn-X-milaura/main`, ID `190430282075`.
- Push Shopify strict du seul fichier `assets/milaura-product-experience.css`, avec `--only`, `--nodelete`, `--strict` et `--allow-live`.
- Aucun thème de développement ni autre fichier thème modifié.
- Pullback frais : `/private/tmp/milaura-mobile-root-overflow-live-pullback-20260816.mvITBb`.
- Comparaison locale/live : `cmp` code `0`, 18 745 octets des deux côtés.
- SHA-256 locale/live : `359fc5986dcc8ddfb0fef6779b51704c32eb88ac9850662e985ee2df7b7729f1`.
- Heure de preuve du déploiement : 2026-08-16 21:16:56 CEST.

## QA publique finale

Contrôle réalisé après le déploiement sur le thème live, sans style injecté.

| Page | Viewport | Racine | Body | Pan racine forcé | Rail Services |
| --- | --- | --- | --- | --- | --- |
| Collier obsidienne noire | 360 px | 360 px | 360 px | 0 px | 1 470 px, déplacement interne 0 → 245 px |
| Collier obsidienne noire | 390 px | 390 px | 390 px | 0 px | 1 470 px, scroll interne conservé |
| Collier obsidienne noire | 430 px | 430 px | 430 px | 0 px | 1 470 px, scroll interne conservé |
| Boucles aigue-marine | 390 px | 390 px | 390 px | 0 px | 1 470 px, déplacement interne 0 → 245 px |
| Collection Aigue-marine | 390 px | 390 px | 390 px | 0 px | sans débordement racine |

À 390 px, la fiche obsidienne qui mesurait 959 px avant le correctif mesure désormais exactement 390 px. Une tentative explicite de `window.scrollTo(500, 0)` laisse `window.scrollX = 0` sur les deux fiches produit testées. Le rail Services conserve son propre débordement horizontal et reste donc balayable au doigt.

La console publique signale uniquement le blocage CSP/403 historique de `shop.app` et des avertissements de preload hors périmètre. Aucun message ne vise le correctif ou `assets/milaura-product-experience.css`.

## État de clôture

- Correctif fonctionnel en production.
- Déploiement ciblé et pullback bit à bit validés.
- QA mobile publique validée à 360, 390 et 430 px.
- Aucun risque fonctionnel restant identifié dans le périmètre du rail Services MilAura.
