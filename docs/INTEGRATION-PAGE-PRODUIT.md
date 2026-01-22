---
title: "Intégration Complète - Page Produit Premium"
type: "guide"
priority: "CRITICAL"
---

# Guide d'Intégration - Page Produit Premium

## 1) Vue d'ensemble

Tu vas créer un nouveau template produit utilisant les 3 sections custom :
- `milaura-product-hero.liquid`
- `milaura-product-reassurance.liquid`
- `milaura-product-tabs.liquid`

## 2) Étapes d'intégration

### Étape 1 : Créer le template JSON

**Fichier :** `templates/product.milaura.json`

```json
{
  "sections": {
    "hero": {
      "type": "milaura-product-hero",
      "settings": {
        "enable_sticky_atc": true,
        "show_breadcrumb": true,
        "gallery_layout": "thumbnails_left"
      },
      "blocks": {
        "badge_1": {
          "type": "trust_badge",
          "settings": {
            "icon": "🚚",
            "text": "Livraison offerte dès 50€"
          }
        },
        "badge_2": {
          "type": "trust_badge",
          "settings": {
            "icon": "✓",
            "text": "Garantie 30 jours"
          }
        }
      },
      "block_order": ["badge_1", "badge_2"]
    },
    "reassurance": {
      "type": "milaura-product-reassurance",
      "settings": {
        "layout": "horizontal",
        "background_color": "#f9fafb"
      },
      "blocks": {
        "item_1": {
          "type": "reassurance_item",
          "settings": {
            "icon": "🚚",
            "title": "Livraison offerte",
            "description": "Dès 50€ d'achat"
          }
        },
        "item_2": {
          "type": "reassurance_item",
          "settings": {
            "icon": "✓",
            "title": "Garantie 30 jours",
            "description": "Satisfait ou remboursé"
          }
        },
        "item_3": {
          "type": "reassurance_item",
          "settings": {
            "icon": "💳",
            "title": "Paiement sécurisé",
            "description": "SSL & 3D Secure"
          }
        }
      },
      "block_order": ["item_1", "item_2", "item_3"]
    },
    "tabs": {
      "type": "milaura-product-tabs",
      "blocks": {
        "description": {
          "type": "description"
        },
        "specs": {
          "type": "specifications",
          "settings": {
            "spec_label_1": "Poids",
            "spec_value_1": "150g",
            "spec_label_2": "Dimensions",
            "spec_value_2": "10 x 5 x 3 cm"
          }
        },
        "shipping": {
          "type": "custom_content",
          "settings": {
            "tab_title": "Livraison & Retours",
            "content": "<p>Contenu livraison ici</p>"
          }
        }
      },
      "block_order": ["description", "specs", "shipping"]
    }
  },
  "order": ["hero", "reassurance", "tabs"]
}

```

### Étape 2 : Créer les fichiers sections

Dans `/sections/`, crée :

* `milaura-product-hero.liquid`
* `milaura-product-reassurance.liquid`
* `milaura-product-tabs.liquid`
*(Utilise le contenu des 3 premiers fichiers .md)*

### Étape 3 : Assigner le template

Dans l'admin Shopify :

1. Produit → Paramètres → Thème de template
2. Sélectionner `product.milaura`
3. Sauvegarder

## 3) Ordre de développement recommandé

**Jour 1 :**

* [ ] `milaura-product-hero.liquid` (section critique)
* [ ] Tester avec 1 produit réel

**Jour 2 :**

* [ ] `milaura-product-reassurance.liquid`
* [ ] `milaura-product-tabs.liquid`
* [ ] Créer `product.milaura.json`

**Jour 3 :**

* [ ] Tests responsive (mobile/tablet/desktop)
* [ ] Validation accessibilité
* [ ] Optimisation performance (lazy-load images)

## 4) Snippets à vérifier/adapter

Tu as déjà ces snippets dans `/snippets/` :

* `price.liquid` → OK, utilise-le tel quel
* `product-variant-options.liquid` → Vérifier le style
* `product-media-modal.liquid` → OK
* `icon-accordion.liquid` → OK pour tabs mobile

## 5) CSS nécessaire

Ajoute dans `assets/milaura-product.css` :

```css
/* Hero Grid */
.product-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

 @media (max-width: 768px) {
  .product-hero {
    grid-template-columns: 1fr;
  }
}

/* Réassurance */
.product-reassurance {
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  background: var(--color-background-secondary);
}

.reassurance-item {
  text-align: center;
  max-width: 200px;
}

/* Tabs */
.tabs-nav {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
}

.tabs-nav button {
  padding: 1rem 2rem;
  border: none;
  background: none;
  cursor: pointer;
}

.tabs-nav button[aria-selected="true"] {
  border-bottom: 2px solid var(--color-primary);
  font-weight: 600;
}

 @media (max-width: 768px) {
  .tabs-nav { display: none; }
  .tabs-content { display: none; }
  .product-accordions { display: block; }
}

```

## 6) KPIs à mesurer

| Métrique | Avant | Cible | Outil |
| --- | --- | --- | --- |
| Taux de conversion produit | [PLACEHOLDER] | +15% | Shopify Analytics |
| Taux d'ajout au panier | [PLACEHOLDER] | +20% | Google Analytics |
| Temps moyen sur page | [PLACEHOLDER] | +30s | GA4 |
| Taux de rebond | [PLACEHOLDER] | -10% | GA4 |

## 7) Checklist finale

**Avant mise en prod :**

* [ ] Test sur 5 produits différents (variants, sans variants, rupture)
* [ ] Test devices (iPhone, Android, iPad, Desktop)
* [ ] Validation accessibilité (Wave, Lighthouse)
* [ ] Performance (PageSpeed > 85)
* [ ] Backup du template actuel

**Après mise en prod :**

* [ ] Monitoring 48h (erreurs console, Analytics)
* [ ] A/B test pendant 2 semaines si possible
* [ ] Collecter feedback utilisateurs

## 8) Points de vigilance

⚠️ **Galerie images** : Dawn utilise `product-media-gallery`, vérifie la compatibilité avec ton layout custom.
⚠️ **Sticky ATC mobile** : Peut entrer en conflit avec le header sticky, teste le z-index.
⚠️ **Variants** : Si +10 variantes, passe en dropdown plutôt que boutons.
⚠️ **Performance** : Lazy-load les images thumbnails (pas la 1ère).

## 9) Commandes Gemini CLI

Lance Gemini avec :

```bash
gemini
```

Puis demande-lui :

> "Crée la section milaura-product-hero.liquid en utilisant le fichier docs/page-produit-section-hero.md comme référence. Réutilise les snippets existants (price, product-variant-options). Assure-toi que le schema JSON soit valide."
