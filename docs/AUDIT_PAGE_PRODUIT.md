# Audit Page Produit - Template Premium (`product.premium.json`)

## 1. Sections Actuelles
Voici la liste des sections actuellement utilisées dans le modèle `product.premium.json` de Milaura :

*   **`milaura-product-hero`** : En-tête de produit avec titre et accroche ("Reconnecte-toi à ton essence").
*   **`milaura-product-buy`** : Zone d'achat principale (Bouton d'ajout, quantité, badges de réassurance statiques).
*   **`milaura-product-story`** : Bloc narratif sur l'histoire du produit.
*   **`milaura-product-stone`** : Focus sur la pierre avec des "hotspots" interactifs (infobulles sur l'image).
*   **`milaura-product-scent`** : Section dédiée à la senteur (partenariat).
*   **`milaura-product-ritual`** : Guide d'utilisation / Rituel.
*   **`milaura-product-craft`** : Information sur l'artisanat et la qualité (Made in France).
*   **`milaura-product-gallery`** : Galerie d'images (lightbox, thumbnails).
*   **`milaura-product-reviews`** : Preuve sociale, note moyenne et lien vers les avis.
*   **`milaura-product-crosssell`** : Produits complémentaires ("Tu pourrais aussi aimer").
*   **`milaura-product-faq`** : Questions fréquentes (accordéon).
*   **`milaura-product-cta-final`** : Appel à l'action en bas de page pour rappeler l'achat.

## 2. Analyse des Manques (Benchmark "Nutrimuscle")
Pour atteindre un niveau d'expérience utilisateur (UX) et de conversion comparable à Nutrimuscle, les éléments suivants sont manquants ou perfectibles dans la configuration actuelle :

1.  **Sélecteur de Variantes Avancé ("Blocks")** :
    *   *Actuel* : La section `buy` semble standard.
    *   *Manque* : Un sélecteur visuel sous forme de "tuiles" ou de blocs (ex: pour choisir la taille, le poids, ou le type de pierre) avec affichage immédiat du stock et du prix par variante. Nutrimuscle utilise des blocs très clairs pour le choix des arômes/conditionnements.

2.  **Sticky Add-to-Cart (Ajout au panier persistant)** :
    *   *Actuel* : Il y a un `cta_final` en bas de page, mais pas de barre fixée en bas ou en haut de l'écran lors du défilement.
    *   *Manque* : Une barre "Sticky" qui apparaît dès que le bouton d'achat principal sort de l'écran. Elle doit permettre de choisir la variante et d'ajouter au panier sans remonter tout en haut.

3.  **Badges Dynamiques & Intelligents** :
    *   *Actuel* : Les badges dans `milaura-product-buy` sont configurés via des champs texte statiques (`badge_1`, `badge_2`...).
    *   *Manque* : Des badges générés dynamiquement via les Metafields ou les Tags du produit (ex: "Nouveau", "Best-seller", "Végan", "-20%"). Cela évite la saisie manuelle répétitive et assure la cohérence.

4.  **Barre de progression "Livraison Gratuite" (In-Cart ou Near-Cart)** :
    *   *Note* : Souvent présent chez Nutrimuscle pour inciter à l'upsell immédiat (gamification).

## 3. Plan d'Action : Évolution des Sections Existantes
Plutôt que de multiplier les fichiers sections, nous allons faire évoluer l'existant pour gagner en maintenabilité et en performance.

### A. Évolution de `milaura-product-buy.liquid`
**Objectif :** Transformer cette section en "Power Buy Box".
*   **Action 1 (Liquid/CSS)** : Implémenter le rendu des variantes sous forme de `radio buttons` stylisés en "Blocs" (Box Selectors).
    *   *Détail* : Si le produit a des variantes "Taille" ou "Poids", afficher des rectangles cliquables.
*   **Action 2 (Liquid)** : Remplacer les champs `settings.badge_x` par une logique de boucle sur `product.tags` ou l'affichage de metafields spécifiques (`product.metafields.custom.badges`).

### B. Fusion / Extension pour le Sticky Cart
**Objectif :** Ajouter la fonctionnalité Sticky sans créer une section `milaura-sticky-cart.liquid` isolée qui alourdirait le DOM au chargement initial si non nécessaire.
*   **Option Recommandée** : Ajouter le markup du Sticky Cart directement dans `milaura-product-buy.liquid` (ou `hero`), caché par défaut en CSS (`display: none` ou `transform: translateY(100%)`).
*   **JS (`global.js` ou script dédié)** : Un `IntersectionObserver` surveille le bouton d'achat principal. Quand il sort du viewport, le Sticky Cart glisse à l'écran.
*   **Avantage** : Réutilise le même formulaire de produit (ou le synchronise facilement) et charge les assets en même temps.

### C. Amélioration de `milaura-product-crosssell.liquid`
**Objectif** : Rendre le cross-sell plus incitatif.
*   **Action** : Ajouter une option "Ajout rapide" (Quick Add) directement sur les cartes produits de cette section, pour permettre l'achat d'accessoires sans quitter la page principale (via un appel AJAX à l'API Cart).

---
*Document généré par l'Architecte Shopify (Gemini CLI).*
