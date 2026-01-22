---
title: "Section Hero - Page Produit Premium"
type: "shopify-section"
priority: "HIGH"
dependencies: ["price.liquid", "product-variant-options.liquid", "product-media-modal.liquid"]
---

# Section Hero - Page Produit

## 1) Vue d'ensemble

Section principale de la page produit avec :
- Galerie d'images produit (gauche)
- Informations produit + sélecteurs + CTA (droite)
- Badges de réassurance inline
- Sticky add-to-cart sur mobile

## 2) Structure visuelle (d'après IMG_9916)
┌─────────────────────────────────────────────┐
│  GALERIE (50%)    │   INFOS PRODUIT (50%)   │
│  ┌──────────┐     │   ┌─────────────────┐   │
│  │          │     │   │ Breadcrumb      │   │
│  │  Image   │     │   │ Titre produit   │   │
│  │ principale│    │   │ ★★★★★ (avis)    │   │
│  │          │     │   │                 │   │
│  └──────────┘     │   │ Prix (barré/actuel)│
│  [thumb][thumb]   │   │                 │   │
│                   │   │ Sélecteur variant│
│                   │   │ Quantité [- 1 +]│
│                   │   │                 │   │
│                   │   │ [AJOUTER PANIER]│
│                   │   │                 │   │
│                   │   │ 🚚 Livraison    │   │
│                   │   │ ✓ Garantie      │   │
│                   │   │ 💳 Paiement     │   │
│                   └─────────────────┘   │
└─────────────────────────────────────────────┘

## 3) Architecture Liquid

### Fichier à créer
`sections/milaura-product-hero.liquid`

### Blocs requis
1. **product_media** (images/vidéos)
2. **product_title** (titre + rating)
3. **product_price** (prix)
4. **product_variants** (sélecteurs)
5. **product_quantity** (quantité)
6. **product_cta** (bouton panier)
7. **trust_badges** (badges réassurance inline)

### Snippets à réutiliser
- `{% render 'price', product: product %}`
- `{% render 'product-variant-options', product: product %}`
- `{% render 'product-media-modal' %}`
- `{% render 'icon-accordion' %}` (pour collapse mobile)

## 4) Settings Schema

```json
{
  "name": "Hero Produit Premium",
  "settings": [
    {
      "type": "checkbox",
      "id": "enable_sticky_atc",
      "label": "Sticky Add-to-Cart (mobile)",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "show_breadcrumb",
      "label": "Afficher breadcrumb",
      "default": true
    },
    {
      "type": "range",
      "id": "image_ratio",
      "min": 0.5,
      "max": 1.5,
      "step": 0.1,
      "label": "Ratio image",
      "default": 1
    },
    {
      "type": "select",
      "id": "gallery_layout",
      "label": "Layout galerie",
      "options": [
        {"value": "thumbnails_left", "label": "Thumbnails gauche"},
        {"value": "thumbnails_bottom", "label": "Thumbnails bas"},
        {"value": "slider", "label": "Slider uniquement"}
      ],
      "default": "thumbnails_left"
    }
  ],
  "blocks": [
    {
      "type": "trust_badge",
      "name": "Badge réassurance",
      "settings": [
        {"type": "text", "id": "icon", "label": "Icône (emoji ou classe)"},
        {"type": "text", "id": "text", "label": "Texte"}
      ]
    }
  ]
}

```

## 5) Comportements JS nécessaires

* Zoom image au hover (desktop)
* Swipe galerie (mobile)
* Sync thumbnail ↔ image principale
* Sticky add-to-cart au scroll (mobile)
* Variant picker → update prix/image

## 6) Checklist d'intégration

[ ] Créer sections/milaura-product-hero.liquid
[ ] Tester avec produit ayant 3+ variants
[ ] Vérifier responsive (breakpoints : 768px, 1024px)
[ ] Valider accessibilité (aria-labels sur gallery)
[ ] Ajouter au template product.milaura.json
