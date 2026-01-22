---
title: "Section Description/Specs - Page Produit"
type: "shopify-section"
priority: "HIGH"
dependencies: ["collapsible-content.liquid"]
---

# Section Description avec Onglets

## 1) Vue d'ensemble (d'après IMG_9918)

Système d'onglets pour :
- Description produit
- Caractéristiques techniques
- Livraison & retours
- Avis clients (optionnel)

**Pattern UX :** Tabs desktop / Accordéons mobile

## 2) Structure visuelle
┌──────────────────────────────────────────┐
│ [Description] [Specs] [Livraison] [Avis] │
├──────────────────────────────────────────┤
│                                          │
│  Contenu de l'onglet actif               │
│  - Texte enrichi                         │
│  - Listes à puces                        │
│  - Images (optionnel)                    │
│                                          │
└──────────────────────────────────────────┘

## 3) Architecture Liquid

### Fichier à créer
`sections/milaura-product-tabs.liquid`

### Structure

```liquid
<div class="product-tabs">
  <div class="tabs-nav" role="tablist">
    {% for block in section.blocks %}
      <button role="tab" 
              aria-selected="{% if forloop.first %}true{% else %}false{% endif %}"
              data-tab="{{ block.id }}">
        {{ block.settings.tab_title }}
      </button>
    {% endfor %}
  </div>

  <div class="tabs-content">
    {% for block in section.blocks %}
      <div role="tabpanel" 
           id="tab-{{ block.id }}"
           {% unless forloop.first %}hidden{% endunless %}
           {{ block.shopify_attributes }}>
        
        {% case block.type %}
          {% when 'description' %}
            {{ product.description }}
          
          {% when 'specifications' %}
            <dl class="specs-list">
              {% for i in (1..10) %}
                {% assign label_key = 'spec_label_' | append: i %}
                {% assign value_key = 'spec_value_' | append: i %}
                {% if block.settings[label_key] != blank %}
                  <dt>{{ block.settings[label_key] }}</dt>
                  <dd>{{ block.settings[value_key] }}</dd>
                {% endif %}
              {% endfor %}
            </dl>
          
          {% when 'custom_content' %}
            {{ block.settings.content }}
        {% endcase %}
      </div>
    {% endfor %}
  </div>
</div>

<div class="product-accordions mobile-only">
  {% for block in section.blocks %}
    {% render 'collapsible-content',
      title: block.settings.tab_title,
      content: block.settings.content,
      open: forloop.first
    %}
  {% endfor %}
</div>

```

## 4) Settings Schema

```json
{
  "name": "Onglets Produit",
  "settings": [
    {
      "type": "checkbox",
      "id": "use_accordions_mobile",
      "label": "Accordéons sur mobile",
      "default": true
    }
  ],
  "blocks": [
    {
      "type": "description",
      "name": "📝 Description",
      "limit": 1,
      "settings": [
        {"type": "text", "id": "tab_title", "label": "Titre onglet", "default": "Description"}
      ]
    },
    {
      "type": "specifications",
      "name": "📊 Caractéristiques",
      "limit": 1,
      "settings": [
        {"type": "text", "id": "tab_title", "label": "Titre onglet", "default": "Caractéristiques"},
        {"type": "text", "id": "spec_label_1", "label": "Spec 1 - Label"},
        {"type": "text", "id": "spec_value_1", "label": "Spec 1 - Valeur"},
        {"type": "text", "id": "spec_label_2", "label": "Spec 2 - Label"},
        {"type": "text", "id": "spec_value_2", "label": "Spec 2 - Valeur"}
        // Répéter jusqu'à 10
      ]
    },
    {
      "type": "custom_content",
      "name": "✏️ Contenu libre",
      "settings": [
        {"type": "text", "id": "tab_title", "label": "Titre onglet"},
        {"type": "richtext", "id": "content", "label": "Contenu"}
      ]
    }
  ],
  "presets": [
    {
      "name": "Onglets Produit",
      "blocks": [
        {"type": "description"},
        {"type": "specifications"},
        {"type": "custom_content", "settings": {"tab_title": "Livraison & Retours"}}
      ]
    }
  ]
}

```

## 5) Comportements JS

```javascript
// Gérer le switch d'onglets
document.querySelectorAll('[role="tab"]').forEach(tab => {
  tab.addEventListener('click', (e) => {
    // Cacher tous les panels
    document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
      panel.hidden = true;
    });
    // Afficher le bon panel
    const targetId = e.target.dataset.tab;
    document.getElementById(`tab-${targetId}`).hidden = false;
    // Update aria-selected
    document.querySelectorAll('[role="tab"]').forEach(t => {
      t.setAttribute('aria-selected', 'false');
    });
    e.target.setAttribute('aria-selected', 'true');
  });
});

```

## 6) Checklist

[ ] Créer sections/milaura-product-tabs.liquid
[ ] Tester tabs → accordions (responsive)
[ ] Valider accessibilité (ARIA roles)
[ ] Intégrer dans template produit
