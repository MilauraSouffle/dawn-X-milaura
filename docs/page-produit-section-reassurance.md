---
title: "Section Réassurance - Page Produit"
type: "shopify-section"
priority: "MEDIUM"
dependencies: ["icon-accordion.liquid"]
---

# Section Réassurance

## 1) Vue d'ensemble (d'après IMG_9917)

Bande de réassurance affichant :
- 3 à 4 blocs icône + texte
- Layout horizontal (desktop) / vertical (mobile)
- Fond légèrement teinté ou bordure subtile

## 2) Structure visuelle
┌────────────────────────────────────────────┐
│  🚚               ✓                       │
│  Livraison    Garantie       Paiement      │
│  Offerte      30 jours       Sécurisé      │
└────────────────────────────────────────────┘

## 3) Architecture Liquid

### Fichier à créer
`sections/milaura-product-reassurance.liquid`

### Structure

```liquid
<div class="product-reassurance">
  {% for block in section.blocks %}
    <div class="reassurance-item" {{ block.shopify_attributes }}>
      {% if block.settings.icon_type == 'emoji' %}
        <span class="icon-emoji">{{ block.settings.icon }}</span>
      {% else %}
        {% render 'icon-accordion', icon: block.settings.icon %}
      {% endif %}
      <div class="reassurance-text">
        <h4>{{ block.settings.title }}</h4>
        <p>{{ block.settings.description }}</p>
      </div>
    </div>
  {% endfor %}
</div>

```

## 4) Settings Schema

```json
{
  "name": "Réassurance Produit",
  "settings": [
    {
      "type": "select",
      "id": "layout",
      "label": "Layout",
      "options": [
        {"value": "horizontal", "label": "Horizontal"},
        {"value": "grid", "label": "Grille 2x2"}
      ],
      "default": "horizontal"
    },
    {
      "type": "color",
      "id": "background_color",
      "label": "Couleur fond",
      "default": "#f9fafb"
    }
  ],
  "blocks": [
    {
      "type": "reassurance_item",
      "name": "Item réassurance",
      "limit": 4,
      "settings": [
        {
          "type": "select",
          "id": "icon_type",
          "label": "Type icône",
          "options": [
            {"value": "emoji", "label": "Emoji"},
            {"value": "liquid", "label": "Icône Liquid"}
          ],
          "default": "emoji"
        },
        {"type": "text", "id": "icon", "label": "Icône/Emoji", "default": "🚚"},
        {"type": "text", "id": "title", "label": "Titre", "default": "Livraison offerte"},
        {"type": "textarea", "id": "description", "label": "Description", "default": "Dès 50€ d'achat"}
      ]
    }
  ],
  "presets": [
    {
      "name": "Réassurance Produit",
      "blocks": [
        {"type": "reassurance_item", "settings": {"icon": "🚚", "title": "Livraison offerte", "description": "Dès 50€"}},
        {"type": "reassurance_item", "settings": {"icon": "✓", "title": "Garantie 30j", "description": "Satisfait ou remboursé"}},
        {"type": "reassurance_item", "settings": {"icon": "💳", "title": "Paiement sécurisé", "description": "SSL & 3D Secure"}}
      ]
    }
  ]
}

```

## 5) Checklist

[ ] Créer sections/milaura-product-reassurance.liquid
[ ] Tester avec 3 et 4 blocs
[ ] Responsive mobile (stack vertical)
[ ] Ajouter au template produit
