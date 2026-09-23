# Architecture CSS MilAura 2026

Date : 2026-09-23

Statut : contrat de migration progressive

Propriétaire de la validation visuelle : Patrice Allié

## Objectif

Le thème conserve Dawn comme fondation technique, mais les surfaces MilAura ne doivent plus dépendre d'une accumulation de règles globales, de blocs CSS Liquid et de correctifs de spécificité.

Le polish visuel sert de véhicule de migration. Une surface est consolidée au moment où elle est retravaillée, puis son ancien CSS est supprimé. Il n'y a pas de réécriture globale aveugle.

## État de départ constaté le 2026-09-23

- `assets/milaura-tokens.css` est la source canonique des couleurs, familles, tailles et espacements.
- `assets/milaura.css` est une couche de compatibilité historique de 1 632 lignes. Elle contient encore des règles globales et des `!important` qui peuvent neutraliser les composants récents.
- 89 fichiers CSS représentent 32 401 lignes.
- 92 fichiers Liquid contenaient encore un bloc de style inline avant le pilote.
- 656 occurrences de `!important` existent dans les CSS du thème, dont 387 dans `assets/milaura.css`.
- Le moteur de landing Sodalite contenait 708 lignes de CSS dans sa section Liquid.
- La section saisonnière de la Home contenait 769 lignes de CSS dans sa section Liquid.
- La sélection de Karine contenait 161 lignes de CSS dans sa section Liquid.

Ces nombres sont une dette de départ, pas une cible à nettoyer en une seule opération.

## Ordre de chargement

L'ordre actuel reste explicite :

1. `base.css` pour Dawn ;
2. `milaura-tokens.css` pour la charte et les variables ;
3. `milaura.css` comme compatibilité historique ;
4. les composants partagés, notamment cartes, titres et actions ;
5. les assets propres à chaque surface, chargés par leur section Liquid.

Les CSS de surface sont chargés après les couches globales. Ils peuvent donc reprendre la maîtrise sans augmenter artificiellement la spécificité ni ajouter de `!important`.

Le projet n'utilise pas `@layer` pendant cette migration. Les règles Dawn non encapsulées auraient priorité sur les règles placées dans une couche, ce qui créerait une nouvelle source de surprises.

## Responsabilités

### Tokens

`assets/milaura-tokens.css` contient uniquement les primitives et rôles sémantiques partagés : couleurs, typographies, espacements, rayons, ombres, transitions et focus.

Aucune couleur hexadécimale ni famille de police ne doit être déclarée dans une section ou un nouvel asset de surface.

### Fondation historique

`assets/milaura.css` reste chargé tant que toutes les anciennes surfaces ne sont pas migrées.

Règles de gel :

- aucune nouvelle fonctionnalité dans ce fichier ;
- aucun nouveau sélecteur de composant ;
- aucun nouveau `!important` ;
- chaque migration retire les règles historiques devenues sans consommateur ;
- les règles globales `body`, titres et wrappers seront retirées uniquement après validation de pages représentatives.

### Composants partagés

- `assets/milaura-card.css` possède les cartes produit ;
- `assets/milaura-actions.css` possède les actions et CTA ;
- `assets/milaura-section-heading.css` possède les titres réutilisables ;
- `assets/milaura-product-pdp-v2.css` possède l'expérience PDP V2.

Un composant n'est extrait que lorsque le même usage existe au moins trois fois. Deux éléments visuellement proches mais de fonctions différentes restent séparés.

### Surfaces

Une surface complexe possède un asset dédié et un namespace explicite. Le Liquid contient le HTML, les réglages Shopify et les variables réellement dynamiques. Il ne contient plus de grand bloc `{% style %}`.

Pilote du 2026-09-23 :

- `assets/milaura-destination-landing.css` pour Sodalite et Automne ;
- `assets/milaura-home-seasonal.css` pour la campagne saisonnière de la Home ;
- `assets/milaura-home-karine-selection.css` pour la sélection de Karine.

## Contrat pour tout nouveau CSS

- zéro nouvelle couleur hexadécimale hors tokens ;
- zéro nouvelle famille de police en dur hors tokens ;
- zéro nouveau `!important` ;
- zéro nouveau gros bloc de style dans une section Liquid ;
- aucun sélecteur global `body`, `p`, `h1`, `h2`, `.button` ou `.card` dans un asset de surface ;
- un namespace de racine par surface ;
- les propriétés dynamiques passent par une variable CSS posée sur le nœud racine ;
- une règle visuelle n'appartient qu'à un seul fichier ;
- le produit et la photographie restent prioritaires ;
- mobile 360, 390 et 430 px contrôlé avant le bureau 1440 px.

Le contrôle local est `python3 tests/css_contract_test.py`.

## Migration par parcours

1. Landing Sodalite et Automne, Home Automne et sélection de Karine.
2. Autres landings pierre après validation visuelle du moteur partagé.
3. Homepage, une section à la fois.
4. Collections génériques et hubs.
5. Panier, compte et anciennes surfaces restantes.
6. Réduction finale de `assets/milaura.css` lorsque chaque consommateur est identifié.

Chaque lot doit supprimer le CSS qu'il remplace. Une extraction sans suppression de l'ancienne source est incomplète.

## Source visuelle et gates

Le thème public `190430282075` est la référence visuelle constatée le 2026-09-23. Les previews existantes ont plusieurs versions de retard et ne sont pas utilisées comme vérité.

Une recette future suit cet ordre :

1. comparer les fichiers locaux ciblés au thème public ;
2. remettre un thème privé à niveau par push ciblé ;
3. vérifier Liquid, Theme Check et le contrat CSS ;
4. contrôler 360, 390, 430 et 1440 px ;
5. obtenir le GO visuel de Patrice ;
6. intégrer ;
7. publier uniquement après un GO live séparé ;
8. effectuer un pullback ciblé et une QA publique.
