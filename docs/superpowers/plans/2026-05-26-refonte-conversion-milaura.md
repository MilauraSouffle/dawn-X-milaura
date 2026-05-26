# Refonte Conversion MilAura : Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build 6 landing page sections (including a gamified scratch-to-reveal bundle builder), refactor the homepage hero to single-product mode, and refactor the quiz to recommend stones instead of candles.

**Architecture:** Modular Shopify Liquid sections assembled via JSON templates. LP sections prefixed `milaura-lp-*`, CSS scoped via `#MilauraLP*-{{ section.id }}`, JS inline in sections. Zero external dependencies. Ajax Cart API for add-to-cart.

**Tech Stack:** Shopify Liquid, vanilla JS, HTML5 Canvas (scratch effect), CSS animations, Shopify Ajax Cart API (`/cart/add.js`)

**Spec:** `docs/superpowers/specs/2026-05-26-refonte-conversion-milaura-design.md`

**Deploy command:** `shopify theme push --store milaura-2 --theme 190430282075 --allow-live`

**Conventions (from CLAUDE.md):**
- Section files: `milaura-lp-*.liquid`
- CSS classes: `.milaura-lp-*`
- CSS variables: `--milaura-*` (defined in `assets/milaura.css`)
- IDs: `MilauraLP*` (PascalCase)
- Section-scoped CSS via `{% style %}` tags with `#MilauraLP[Name]-{{ section.id }}`
- Mobile-first: breakpoints at 768px (mobile), 1024px (tablet)
- Vouvoiement obligatoire, tiret cadratin interdit
- Rituels pierre: "Portez votre pierre" (jamais "tenez")

---

## File Map

### New files (Phase 1: Landing Page)
| File | Responsibility |
|------|---------------|
| `sections/milaura-lp-hero.liquid` | Hero single-benefit, zero nav, product picker, badge, stock counter |
| `sections/milaura-lp-social-proof.liquid` | Star rating, review count, trust badges |
| `sections/milaura-lp-story.liquid` | Founder quote with photo, name, title |
| `sections/milaura-lp-bundle-scratch.liquid` | 3-tier bundle builder + scratch-to-reveal cards (most complex) |
| `sections/milaura-lp-objections.liquid` | FAQ accordion with blocks |
| `sections/milaura-lp-cta-final.liquid` | Dark background final CTA with reassurance |
| `templates/page.lp-promo-bougies.json` | Assembles all 6 LP sections for candle promo |

### Modified files (Phase 2-3)
| File | Change |
|------|--------|
| `sections/milaura-hero-showcase.liquid` | Add `mode` setting ("single-product" vs "tabs"), new single-product HTML/CSS/JS |
| `sections/milaura-quiz.liquid` | Remove candle/scent refs, replace 3 tabs with Bracelet/Bague/Collier, update schema |

### Later (Phase 4)
| File | Responsibility |
|------|---------------|
| `templates/page.lp-bracelet-amethyste.json` | Declinaison LP bijoux (copy of promo-bougies with different settings) |

---

## Phase 1: Landing Page Promo Bougies

### Task 1: LP Hero Section

**Files:**
- Create: `sections/milaura-lp-hero.liquid`

This section displays: logo only (no nav), badge, stock counter, product image with halo, headline, subtitle, price with strikethrough, single CTA, and reassurance line.

- [ ] **Step 1: Create the section file with CSS**

```liquid
{% style %}
  #MilauraLPHero-{{ section.id }} {
    width: 100%;
    padding: 0;
    background: linear-gradient(180deg, var(--milaura-beige) 0%, #F2E8D5 100%);
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-inner {
    max-width: 600px;
    margin: 0 auto;
    padding: var(--milaura-spacing-md);
    text-align: center;
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-logo {
    display: block;
    margin: 0 auto var(--milaura-spacing-md);
    max-width: 120px;
    height: auto;
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-badges {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--milaura-spacing-sm);
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-badge {
    background: rgba(192, 160, 98, 0.15);
    color: var(--milaura-gold-dark);
    font-size: 0.7rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-stock {
    font-size: 0.75rem;
    color: var(--milaura-gold);
    font-weight: 600;
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-img-wrap {
    width: 220px;
    height: 240px;
    margin: 0 auto var(--milaura-spacing-md);
    background: radial-gradient(circle, rgba(192, 160, 98, 0.12), transparent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-img-wrap img {
    max-width: 160px;
    max-height: 200px;
    object-fit: contain;
    border-radius: var(--milaura-border-radius);
    box-shadow: 0 20px 40px rgba(192, 160, 98, 0.25);
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-headline {
    font-family: var(--milaura-font-heading);
    font-size: 1.6rem;
    color: var(--milaura-text);
    line-height: 1.2;
    margin-bottom: var(--milaura-spacing-xs);
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-headline span {
    color: var(--milaura-gold);
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-subtitle {
    font-family: var(--milaura-font-body);
    font-size: 0.85rem;
    color: #666;
    margin-bottom: var(--milaura-spacing-md);
    line-height: 1.5;
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-price {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: var(--milaura-spacing-sm);
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-price-current {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--milaura-text);
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-price-compare {
    font-size: 1rem;
    color: #999;
    text-decoration: line-through;
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-price-badge {
    background: #D4839E;
    color: white;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 10px;
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-cta {
    display: block;
    background: var(--milaura-gold);
    color: white;
    padding: 15px 24px;
    border-radius: 14px;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    box-shadow: var(--milaura-shadow-md);
    margin-bottom: var(--milaura-spacing-xs);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: none;
    cursor: pointer;
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 45px rgba(192, 160, 98, 0.35);
  }

  #MilauraLPHero-{{ section.id }} .lp-hero-reassurance {
    display: flex;
    justify-content: center;
    gap: 16px;
    font-size: 0.7rem;
    color: #aaa;
  }

  @media (min-width: 1024px) {
    #MilauraLPHero-{{ section.id }} .lp-hero-inner {
      max-width: 1000px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--milaura-spacing-lg);
      align-items: center;
      text-align: left;
      padding: var(--milaura-spacing-xl) var(--milaura-spacing-lg);
    }

    #MilauraLPHero-{{ section.id }} .lp-hero-logo {
      grid-column: 1 / -1;
      margin: 0 auto var(--milaura-spacing-md);
    }

    #MilauraLPHero-{{ section.id }} .lp-hero-content { order: 1; }
    #MilauraLPHero-{{ section.id }} .lp-hero-visual { order: 2; }

    #MilauraLPHero-{{ section.id }} .lp-hero-img-wrap {
      width: 280px;
      height: 300px;
      margin: 0 auto;
    }

    #MilauraLPHero-{{ section.id }} .lp-hero-img-wrap img {
      max-width: 200px;
      max-height: 260px;
    }

    #MilauraLPHero-{{ section.id }} .lp-hero-headline {
      font-size: 2.2rem;
    }

    #MilauraLPHero-{{ section.id }} .lp-hero-price {
      justify-content: flex-start;
    }

    #MilauraLPHero-{{ section.id }} .lp-hero-cta {
      display: inline-block;
    }

    #MilauraLPHero-{{ section.id }} .lp-hero-reassurance {
      justify-content: flex-start;
    }
  }
{% endstyle %}

<div id="MilauraLPHero-{{ section.id }}">
  <div class="lp-hero-inner">
    {%- if section.settings.logo != blank -%}
      <a href="{{ routes.root_url }}" class="lp-hero-logo-link" style="grid-column: 1 / -1; text-align: center;">
        <img
          class="lp-hero-logo"
          src="{{ section.settings.logo | image_url: width: 240 }}"
          alt="{{ shop.name }}"
          width="120"
          height="auto"
          loading="eager"
        >
      </a>
    {%- endif -%}

    <div class="lp-hero-content">
      <div class="lp-hero-badges">
        {%- if section.settings.badge_text != blank -%}
          <span class="lp-hero-badge">{{ section.settings.badge_text }}</span>
        {%- endif -%}
        {%- if section.settings.show_stock_counter -%}
          <span class="lp-hero-stock">🔥 {{ section.settings.stock_count }} restantes</span>
        {%- endif -%}
      </div>

      <h1 class="lp-hero-headline">{{ section.settings.headline }}</h1>
      <p class="lp-hero-subtitle">{{ section.settings.subtitle }}</p>

      {%- assign product = section.settings.product -%}
      {%- if product != blank -%}
        <div class="lp-hero-price">
          <span class="lp-hero-price-current">{{ product.price | money }}</span>
          {%- if product.compare_at_price > product.price -%}
            <span class="lp-hero-price-compare">{{ product.compare_at_price | money }}</span>
            {%- assign discount = product.compare_at_price | minus: product.price | times: 100 | divided_by: product.compare_at_price -%}
            <span class="lp-hero-price-badge">-{{ discount }}%</span>
          {%- endif -%}
        </div>
      {%- endif -%}

      <a
        href="{{ section.settings.cta_url | default: '#milaura-lp-bundle' }}"
        class="lp-hero-cta"
      >
        {{ section.settings.cta_text | default: 'Decouvrir' }}
      </a>

      <div class="lp-hero-reassurance">
        <span>🚚 Livraison offerte</span>
        <span>🇫🇷 Artisanat francais</span>
        <span>🌿 100% naturel</span>
      </div>
    </div>

    <div class="lp-hero-visual">
      {%- if product != blank and product.featured_image -%}
        <div class="lp-hero-img-wrap">
          <img
            src="{{ product.featured_image | image_url: width: 600 }}"
            alt="{{ product.title }}"
            width="300"
            height="375"
            loading="eager"
          >
        </div>
      {%- endif -%}
    </div>
  </div>
</div>

{% schema %}
{
  "name": "LP Hero",
  "tag": "section",
  "class": "milaura-lp-hero",
  "settings": [
    {
      "type": "image_picker",
      "id": "logo",
      "label": "Logo (centre, retour homepage)"
    },
    {
      "type": "product",
      "id": "product",
      "label": "Produit mis en avant"
    },
    {
      "type": "inline_richtext",
      "id": "headline",
      "label": "Titre principal",
      "default": "Votre rituel du soir <span>merite un ecrin.</span>"
    },
    {
      "type": "text",
      "id": "subtitle",
      "label": "Sous-titre",
      "default": "Bougie artisanale aux pierres naturelles. Derniere collection."
    },
    {
      "type": "text",
      "id": "badge_text",
      "label": "Badge (vide = cache)",
      "default": "Edition limitee"
    },
    {
      "type": "checkbox",
      "id": "show_stock_counter",
      "label": "Afficher le compteur stock",
      "default": true
    },
    {
      "type": "number",
      "id": "stock_count",
      "label": "Nombre en stock",
      "default": 30
    },
    {
      "type": "text",
      "id": "cta_text",
      "label": "Texte du bouton",
      "default": "Decouvrir cette bougie"
    },
    {
      "type": "url",
      "id": "cta_url",
      "label": "URL du bouton (vide = scroll vers bundle)"
    }
  ],
  "presets": [
    {
      "name": "LP Hero"
    }
  ]
}
{% endschema %}
```

- [ ] **Step 2: Verify in customizer**

Deploy and open the Shopify customizer. Create a test page, assign any page template, and add the section "LP Hero". Verify:
- Logo displays centered and links to homepage
- Badge and stock counter show/hide via settings
- Product picker loads image and price correctly
- Price strikethrough and discount badge calculate automatically
- CTA links correctly
- Desktop layout switches to 2-column grid above 1024px

Run: `shopify theme push --store milaura-2 --theme 190430282075 --allow-live`

- [ ] **Step 3: Commit**

```bash
git add sections/milaura-lp-hero.liquid
git commit -m "feat(lp): add LP hero section with single-benefit layout"
```

---

### Task 2: LP Social Proof Section

**Files:**
- Create: `sections/milaura-lp-social-proof.liquid`

Compact section: star rating, review count, 3 trust badges inline.

- [ ] **Step 1: Create the section file**

```liquid
{% style %}
  #MilauraLPProof-{{ section.id }} {
    padding: var(--milaura-spacing-sm) var(--milaura-spacing-md);
  }

  #MilauraLPProof-{{ section.id }} .lp-proof-inner {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    padding: var(--milaura-spacing-sm) var(--milaura-spacing-md);
    border: 1px solid rgba(192, 160, 98, 0.2);
    text-align: center;
  }

  #MilauraLPProof-{{ section.id }} .lp-proof-stars {
    color: var(--milaura-gold);
    font-size: 1.2rem;
    letter-spacing: 2px;
  }

  #MilauraLPProof-{{ section.id }} .lp-proof-count {
    font-size: 0.85rem;
    color: #333;
    margin: 4px 0 0;
  }

  #MilauraLPProof-{{ section.id }} .lp-proof-badges {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: var(--milaura-spacing-sm);
    font-size: 0.7rem;
    color: #888;
  }

  @media (min-width: 1024px) {
    #MilauraLPProof-{{ section.id }} .lp-proof-inner {
      max-width: 800px;
    }
  }
{% endstyle %}

<div id="MilauraLPProof-{{ section.id }}">
  <div class="lp-proof-inner">
    <div class="lp-proof-stars">★★★★★</div>
    <p class="lp-proof-count">
      <strong>{{ section.settings.rating }}</strong> sur {{ section.settings.review_count }} avis
    </p>
    <div class="lp-proof-badges">
      {%- for block in section.blocks -%}
        <span {{ block.shopify_attributes }}>{{ block.settings.icon }} {{ block.settings.label }}</span>
      {%- endfor -%}
    </div>
  </div>
</div>

{% schema %}
{
  "name": "LP Social Proof",
  "tag": "section",
  "class": "milaura-lp-social-proof",
  "settings": [
    {
      "type": "text",
      "id": "rating",
      "label": "Note",
      "default": "4.8/5"
    },
    {
      "type": "text",
      "id": "review_count",
      "label": "Nombre d'avis",
      "default": "127"
    }
  ],
  "blocks": [
    {
      "type": "badge",
      "name": "Badge",
      "settings": [
        {
          "type": "text",
          "id": "icon",
          "label": "Icone (emoji)",
          "default": "💎"
        },
        {
          "type": "text",
          "id": "label",
          "label": "Texte",
          "default": "Pierres certifiees"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "LP Social Proof",
      "blocks": [
        { "type": "badge", "settings": { "icon": "💎", "label": "Pierres certifiees" } },
        { "type": "badge", "settings": { "icon": "✅", "label": "Garantie 30j" } },
        { "type": "badge", "settings": { "icon": "🔒", "label": "Paiement securise" } }
      ]
    }
  ]
}
{% endschema %}
```

- [ ] **Step 2: Commit**

```bash
git add sections/milaura-lp-social-proof.liquid
git commit -m "feat(lp): add LP social proof section"
```

---

### Task 3: LP Story Section

**Files:**
- Create: `sections/milaura-lp-story.liquid`

Founder quote with circular photo, name, and title.

- [ ] **Step 1: Create the section file**

```liquid
{% style %}
  #MilauraLPStory-{{ section.id }} {
    padding: 0 var(--milaura-spacing-md);
  }

  #MilauraLPStory-{{ section.id }} .lp-story-inner {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    padding: var(--milaura-spacing-md);
    border: 1px solid rgba(192, 160, 98, 0.2);
  }

  #MilauraLPStory-{{ section.id }} .lp-story-header {
    display: flex;
    align-items: center;
    gap: var(--milaura-spacing-sm);
    margin-bottom: var(--milaura-spacing-sm);
  }

  #MilauraLPStory-{{ section.id }} .lp-story-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }

  #MilauraLPStory-{{ section.id }} .lp-story-avatar-fallback {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--milaura-gold-light), var(--milaura-gold));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.65rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  #MilauraLPStory-{{ section.id }} .lp-story-name {
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--milaura-text);
  }

  #MilauraLPStory-{{ section.id }} .lp-story-title {
    font-size: 0.75rem;
    color: #888;
  }

  #MilauraLPStory-{{ section.id }} .lp-story-quote {
    font-size: 0.85rem;
    color: #444;
    line-height: 1.6;
    font-style: italic;
    margin: 0;
  }

  @media (min-width: 1024px) {
    #MilauraLPStory-{{ section.id }} .lp-story-inner {
      max-width: 800px;
    }
  }
{% endstyle %}

<div id="MilauraLPStory-{{ section.id }}">
  <div class="lp-story-inner">
    <div class="lp-story-header">
      {%- if section.settings.avatar != blank -%}
        <img
          class="lp-story-avatar"
          src="{{ section.settings.avatar | image_url: width: 100 }}"
          alt="{{ section.settings.name }}"
          width="50"
          height="50"
          loading="lazy"
        >
      {%- else -%}
        <div class="lp-story-avatar-fallback">{{ section.settings.name | truncate: 1, '' | upcase }}</div>
      {%- endif -%}
      <div>
        <div class="lp-story-name">{{ section.settings.name }}</div>
        <div class="lp-story-title">{{ section.settings.role }}</div>
      </div>
    </div>
    <p class="lp-story-quote">"{{ section.settings.quote }}"</p>
  </div>
</div>

{% schema %}
{
  "name": "LP Story Fondatrice",
  "tag": "section",
  "class": "milaura-lp-story",
  "settings": [
    {
      "type": "image_picker",
      "id": "avatar",
      "label": "Photo (ronde)"
    },
    {
      "type": "text",
      "id": "name",
      "label": "Nom",
      "default": "Karine Allie"
    },
    {
      "type": "text",
      "id": "role",
      "label": "Titre",
      "default": "Fondatrice Mil'Aura"
    },
    {
      "type": "textarea",
      "id": "quote",
      "label": "Citation",
      "default": "J'ai cree ces bougies comme des compagnons emotionnels. Chaque pierre est selectionnee pour sa vibration, chaque senteur pour son pouvoir d'evocation. C'est la derniere serie. Quand elles seront parties, elles seront parties."
    }
  ],
  "presets": [
    {
      "name": "LP Story Fondatrice"
    }
  ]
}
{% endschema %}
```

- [ ] **Step 2: Commit**

```bash
git add sections/milaura-lp-story.liquid
git commit -m "feat(lp): add LP founder story section"
```

---

### Task 4: LP Objections/FAQ Section

**Files:**
- Create: `sections/milaura-lp-objections.liquid`

Accordion FAQ with blocks. Pattern copied from `sections/milaura-product-faq.liquid` (lines 81-110 for block loop, lines 362-391 for JS toggle).

- [ ] **Step 1: Create the section file**

```liquid
{% style %}
  #MilauraLPFaq-{{ section.id }} {
    padding: 0 var(--milaura-spacing-md);
  }

  #MilauraLPFaq-{{ section.id }} .lp-faq-inner {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    padding: var(--milaura-spacing-md);
    border: 1px solid rgba(192, 160, 98, 0.2);
  }

  #MilauraLPFaq-{{ section.id }} .lp-faq-title {
    font-family: var(--milaura-font-heading);
    font-size: 1.1rem;
    color: var(--milaura-text);
    text-align: center;
    margin-bottom: var(--milaura-spacing-md);
  }

  #MilauraLPFaq-{{ section.id }} .lp-faq-item {
    border-bottom: 1px solid #eee;
  }

  #MilauraLPFaq-{{ section.id }} .lp-faq-item:last-child {
    border-bottom: none;
  }

  #MilauraLPFaq-{{ section.id }} .lp-faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    cursor: pointer;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--milaura-text);
    font-family: var(--milaura-font-body);
  }

  #MilauraLPFaq-{{ section.id }} .lp-faq-icon {
    color: var(--milaura-gold);
    font-size: 1.2rem;
    transition: transform 0.3s ease;
    flex-shrink: 0;
    margin-left: 12px;
  }

  #MilauraLPFaq-{{ section.id }} .lp-faq-question[aria-expanded="true"] .lp-faq-icon {
    transform: rotate(45deg);
  }

  #MilauraLPFaq-{{ section.id }} .lp-faq-answer {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    font-size: 0.8rem;
    color: #666;
    line-height: 1.6;
  }

  #MilauraLPFaq-{{ section.id }} .lp-faq-answer.is-open {
    max-height: 300px;
    padding-bottom: 12px;
  }

  @media (min-width: 1024px) {
    #MilauraLPFaq-{{ section.id }} .lp-faq-inner {
      max-width: 800px;
    }
  }
{% endstyle %}

<div id="MilauraLPFaq-{{ section.id }}">
  <div class="lp-faq-inner">
    <h2 class="lp-faq-title">{{ section.settings.title | default: 'Questions frequentes' }}</h2>
    {%- for block in section.blocks -%}
      <div class="lp-faq-item" {{ block.shopify_attributes }}>
        <button
          class="lp-faq-question"
          aria-expanded="false"
          aria-controls="lp-faq-answer-{{ block.id }}"
        >
          <span>{{ block.settings.question }}</span>
          <span class="lp-faq-icon">+</span>
        </button>
        <div class="lp-faq-answer" id="lp-faq-answer-{{ block.id }}">
          {{ block.settings.answer }}
        </div>
      </div>
    {%- endfor -%}
  </div>
</div>

<script>
  (function() {
    var container = document.getElementById('MilauraLPFaq-{{ section.id }}');
    if (!container) return;
    container.querySelectorAll('.lp-faq-question').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var expanded = this.getAttribute('aria-expanded') === 'true';
        var answerId = this.getAttribute('aria-controls');
        var answer = document.getElementById(answerId);
        this.setAttribute('aria-expanded', String(!expanded));
        if (answer) answer.classList.toggle('is-open', !expanded);
      });
    });
  })();
</script>

{% schema %}
{
  "name": "LP FAQ Objections",
  "tag": "section",
  "class": "milaura-lp-objections",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Titre",
      "default": "Questions frequentes"
    }
  ],
  "blocks": [
    {
      "type": "question",
      "name": "Question",
      "settings": [
        {
          "type": "text",
          "id": "question",
          "label": "Question"
        },
        {
          "type": "textarea",
          "id": "answer",
          "label": "Reponse"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "LP FAQ Objections",
      "blocks": [
        { "type": "question", "settings": { "question": "Pourquoi c'est la derniere serie ?", "answer": "Mil'Aura se recentre sur les bijoux en pierres naturelles. Ces bougies sont les dernieres de la collection. Une fois le stock epuise, elles ne seront plus reproduites." } },
        { "type": "question", "settings": { "question": "Les pierres sont-elles authentiques ?", "answer": "Chaque pierre est naturelle, selectionnee a la main et certifiee. Nous travaillons exclusivement avec des fournisseurs ethiques." } },
        { "type": "question", "settings": { "question": "Satisfait ou rembourse ?", "answer": "Vous disposez de 30 jours pour changer d'avis. Si le produit ne vous convient pas, nous vous remboursons integralement." } },
        { "type": "question", "settings": { "question": "Combien de temps pour la livraison ?", "answer": "Livraison en 48 a 72h en France metropolitaine. Chaque commande est preparee avec soin dans notre atelier." } }
      ]
    }
  ]
}
{% endschema %}
```

- [ ] **Step 2: Commit**

```bash
git add sections/milaura-lp-objections.liquid
git commit -m "feat(lp): add LP FAQ objections accordion section"
```

---

### Task 5: LP CTA Final Section

**Files:**
- Create: `sections/milaura-lp-cta-final.liquid`

Dark background, urgency headline, price, CTA button, reassurance.

- [ ] **Step 1: Create the section file**

```liquid
{% style %}
  #MilauraLPCta-{{ section.id }} {
    padding: 0 var(--milaura-spacing-md) var(--milaura-spacing-md);
  }

  #MilauraLPCta-{{ section.id }} .lp-cta-inner {
    max-width: 600px;
    margin: 0 auto;
    background: linear-gradient(135deg, #1a1a2e, #2d2d44);
    border-radius: 16px;
    padding: var(--milaura-spacing-lg) var(--milaura-spacing-md);
    text-align: center;
  }

  #MilauraLPCta-{{ section.id }} .lp-cta-headline {
    font-family: var(--milaura-font-heading);
    font-size: 1.3rem;
    color: var(--milaura-gold-light);
    margin-bottom: var(--milaura-spacing-xs);
  }

  #MilauraLPCta-{{ section.id }} .lp-cta-subtitle {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: var(--milaura-spacing-md);
  }

  #MilauraLPCta-{{ section.id }} .lp-cta-price {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: var(--milaura-spacing-md);
  }

  #MilauraLPCta-{{ section.id }} .lp-cta-price-current {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  #MilauraLPCta-{{ section.id }} .lp-cta-price-compare {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: line-through;
  }

  #MilauraLPCta-{{ section.id }} .lp-cta-button {
    display: block;
    background: var(--milaura-gold);
    color: white;
    padding: 16px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }

  #MilauraLPCta-{{ section.id }} .lp-cta-button:hover {
    transform: translateY(-2px);
  }

  #MilauraLPCta-{{ section.id }} .lp-cta-reassurance {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: var(--milaura-spacing-sm);
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.5);
  }

  @media (min-width: 1024px) {
    #MilauraLPCta-{{ section.id }} .lp-cta-inner {
      max-width: 800px;
      padding: var(--milaura-spacing-xl);
    }
  }
{% endstyle %}

<div id="MilauraLPCta-{{ section.id }}">
  <div class="lp-cta-inner">
    <h2 class="lp-cta-headline">{{ section.settings.headline }}</h2>
    <p class="lp-cta-subtitle">{{ section.settings.subtitle }}</p>

    {%- assign product = section.settings.product -%}
    {%- if product != blank -%}
      <div class="lp-cta-price">
        <span class="lp-cta-price-current">{{ product.price | money }}</span>
        {%- if product.compare_at_price > product.price -%}
          <span class="lp-cta-price-compare">{{ product.compare_at_price | money }}</span>
        {%- endif -%}
      </div>
    {%- endif -%}

    <button
      type="button"
      class="lp-cta-button"
      id="lp-cta-atc-{{ section.id }}"
      {%- if product != blank and product.selected_or_first_available_variant %}
        data-variant-id="{{ product.selected_or_first_available_variant.id }}"
      {%- endif %}
    >
      {{ section.settings.cta_text | default: 'Commander maintenant' }}
    </button>

    <div class="lp-cta-reassurance">
      <span>🔒 Paiement securise</span>
      <span>🚚 Livraison 48h</span>
      <span>✅ Garantie 30j</span>
    </div>
  </div>
</div>

<script>
  (function() {
    var btn = document.getElementById('lp-cta-atc-{{ section.id }}');
    if (!btn) return;
    btn.addEventListener('click', function() {
      var variantId = this.dataset.variantId;
      if (!variantId) return;
      this.disabled = true;
      this.textContent = 'Ajout en cours...';
      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: [{ id: parseInt(variantId), quantity: 1 }] })
      })
      .then(function(r) { return r.json(); })
      .then(function() { window.location.href = '/cart'; })
      .catch(function() {
        btn.disabled = false;
        btn.textContent = '{{ section.settings.cta_text | default: "Commander maintenant" }}';
      });
    });
  })();
</script>

{% schema %}
{
  "name": "LP CTA Final",
  "tag": "section",
  "class": "milaura-lp-cta-final",
  "settings": [
    {
      "type": "product",
      "id": "product",
      "label": "Produit"
    },
    {
      "type": "text",
      "id": "headline",
      "label": "Titre urgence",
      "default": "Il n'en reste que 30."
    },
    {
      "type": "text",
      "id": "subtitle",
      "label": "Sous-titre",
      "default": "Une fois epuisees, cette collection disparait definitivement."
    },
    {
      "type": "text",
      "id": "cta_text",
      "label": "Texte du bouton",
      "default": "Commander maintenant"
    }
  ],
  "presets": [
    {
      "name": "LP CTA Final"
    }
  ]
}
{% endschema %}
```

- [ ] **Step 2: Deploy and test the 5 simple sections together**

Run: `shopify theme push --store milaura-2 --theme 190430282075 --allow-live`

Open customizer, create a new page with any template. Add sections in order: LP Hero, LP Social Proof, LP Story, LP FAQ, LP CTA Final. Verify each renders correctly and settings work.

- [ ] **Step 3: Commit**

```bash
git add sections/milaura-lp-cta-final.liquid
git commit -m "feat(lp): add LP CTA final section with dark background"
```

---

### Task 6: Bundle Scratch-to-Reveal Section (Part 1 : structure + tiers)

**Files:**
- Create: `sections/milaura-lp-bundle-scratch.liquid`

This is the most complex section. We split it into 3 parts: structure/tiers, scratch canvas mechanics, and add-to-cart integration.

- [ ] **Step 1: Create section with CSS + tier selection HTML**

Create the file with the full CSS, tier selection UI, and placeholder for scratch zone. The CSS covers all 3 states (tier selected, scratching, all revealed). The HTML includes tier cards, color picker, and the scratch zone container.

The section is large (~600 lines). Structure:
1. `{% style %}` block: all CSS for tiers, scratch cards, confetti, recap
2. HTML: tier cards, color swatches, scratch zone with cards, recap area, CTA
3. `<script>`: state machine (tier selection, scratch logic, cart integration)
4. `{% schema %}`: product picker, tier blocks, gift blocks

Due to complexity, implement the full section in this step. Key CSS classes:
- `.lp-bundle-tier` / `.lp-bundle-tier.is-selected` : tier cards
- `.lp-bundle-card` / `.lp-bundle-card.is-locked` / `.lp-bundle-card.is-revealed` : scratch cards
- `.lp-bundle-confetti` : confetti animation overlay
- `.lp-bundle-recap` : summary with gift list and total

Key JS components:
- `BundleScratch` class managing state
- `initCanvas(card)` : creates Canvas overlay with gold fill
- `handleScratch(e)` : touch/mouse erase via `destination-out` composite
- `checkRevealThreshold(card)` : counts transparent pixels, triggers reveal at 60%
- `revealCard(card)` : auto-complete animation + confetti + update recap
- `selectTier(tierIndex)` : updates locked/unlocked cards
- `addToCart()` : POST to `/cart/add.js` with quantity + variant + properties

```liquid
{% style %}
  #MilauraLPBundle-{{ section.id }} {
    padding: 0 var(--milaura-spacing-md);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-inner {
    max-width: 600px;
    margin: 0 auto;
    background: linear-gradient(135deg, var(--milaura-beige), #F2E8D5);
    border-radius: 16px;
    padding: var(--milaura-spacing-md);
    border: 1px solid rgba(192, 160, 98, 0.3);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-header {
    text-align: center;
    margin-bottom: var(--milaura-spacing-md);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-header h2 {
    font-family: var(--milaura-font-heading);
    font-size: 1.15rem;
    color: var(--milaura-text);
    margin-bottom: 4px;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-header p {
    font-size: 0.75rem;
    color: #888;
  }

  /* --- TIERS --- */
  #MilauraLPBundle-{{ section.id }} .lp-bundle-tiers {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: var(--milaura-spacing-md);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier {
    background: white;
    border-radius: 12px;
    padding: 10px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid transparent;
    cursor: pointer;
    transition: border-color 0.2s ease, opacity 0.2s ease;
    position: relative;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier:hover {
    border-color: rgba(192, 160, 98, 0.3);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier.is-selected {
    border-color: var(--milaura-gold);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier:not(.is-selected) {
    opacity: 0.7;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier-check {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: white;
    flex-shrink: 0;
    margin-right: 8px;
    transition: all 0.2s ease;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier.is-selected .lp-bundle-tier-check {
    background: var(--milaura-gold);
    border-color: var(--milaura-gold);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier-left {
    display: flex;
    align-items: center;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier-label {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--milaura-text);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier-sub {
    font-size: 0.7rem;
    color: var(--milaura-gold);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier-price {
    font-size: 0.9rem;
    font-weight: 700;
    text-align: right;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier-compare {
    font-size: 0.7rem;
    color: #999;
    text-decoration: line-through;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-tier-badge {
    position: absolute;
    top: -8px;
    right: 12px;
    background: var(--milaura-gold);
    color: white;
    font-size: 0.55rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 10px;
    text-transform: uppercase;
  }

  /* --- SCRATCH ZONE --- */
  #MilauraLPBundle-{{ section.id }} .lp-bundle-scratch-zone {
    text-align: center;
    margin-bottom: var(--milaura-spacing-sm);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-scratch-label {
    font-size: 0.7rem;
    color: var(--milaura-gold);
    letter-spacing: 1px;
    margin-bottom: var(--milaura-spacing-xs);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-scratch-wrap {
    background: white;
    border-radius: 12px;
    padding: var(--milaura-spacing-sm);
    border: 1px solid rgba(192, 160, 98, 0.2);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-scratch-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-scratch-title {
    font-family: var(--milaura-font-heading);
    font-size: 0.9rem;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-scratch-counter {
    font-size: 0.7rem;
    background: rgba(192, 160, 98, 0.1);
    padding: 2px 8px;
    border-radius: 8px;
    color: var(--milaura-gold-dark);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-cards {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card {
    width: 80px;
    height: 90px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    flex-shrink: 0;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: white;
    border: 1px solid rgba(192, 160, 98, 0.3);
    border-radius: 10px;
    padding: 4px;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card-icon {
    font-size: 1.2rem;
    margin-bottom: 2px;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card-name {
    font-size: 0.55rem;
    font-weight: 700;
    color: #333;
    line-height: 1.2;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card-value {
    font-size: 0.55rem;
    color: var(--milaura-gold);
    margin-top: 2px;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card canvas {
    position: absolute;
    inset: 0;
    border-radius: 10px;
    z-index: 2;
    touch-action: none;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card.is-locked {
    cursor: default;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card.is-locked .lp-bundle-card-content {
    background: linear-gradient(135deg, #aaa, #888);
    border-color: transparent;
    color: #ccc;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card.is-locked .lp-bundle-card-icon {
    font-size: 0.9rem;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card.is-locked .lp-bundle-card-name {
    color: #ccc;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-card.is-revealed canvas {
    display: none;
  }

  /* --- CONFETTI --- */
  @keyframes milauraConfettiFall {
    0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(100px) rotate(720deg); opacity: 0; }
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-confetti-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    animation: milauraConfettiFall 1.2s ease-out forwards;
    pointer-events: none;
    z-index: 10;
  }

  /* --- UPSELL NUDGE --- */
  #MilauraLPBundle-{{ section.id }} .lp-bundle-nudge {
    text-align: center;
    margin-top: 10px;
    padding: 8px;
    background: rgba(192, 160, 98, 0.08);
    border-radius: 8px;
    font-size: 0.7rem;
    color: var(--milaura-gold);
  }

  /* --- RECAP --- */
  #MilauraLPBundle-{{ section.id }} .lp-bundle-recap {
    display: none;
    margin-top: 10px;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-recap.is-visible {
    display: block;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-recap-total {
    text-align: center;
    padding: 8px;
    background: rgba(192, 160, 98, 0.06);
    border-radius: 8px;
    margin-bottom: 12px;
    font-size: 0.75rem;
    color: #666;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-recap-total strong {
    color: var(--milaura-gold);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-recap-line {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #666;
    padding: 3px 0;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-recap-line.is-gift {
    color: #6BAF7B;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-recap-final {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    font-weight: 700;
    padding-top: 8px;
    margin-top: 8px;
    border-top: 1px solid #eee;
  }

  /* --- CTA --- */
  #MilauraLPBundle-{{ section.id }} .lp-bundle-cta {
    margin-top: var(--milaura-spacing-md);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-atc {
    display: block;
    width: 100%;
    background: var(--milaura-gold);
    color: white;
    padding: 16px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    text-align: center;
    border: none;
    cursor: pointer;
    box-shadow: var(--milaura-shadow-md);
    transition: transform 0.2s ease;
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-atc:hover {
    transform: translateY(-2px);
  }

  #MilauraLPBundle-{{ section.id }} .lp-bundle-reassurance {
    text-align: center;
    font-size: 0.7rem;
    color: #aaa;
    margin-top: 8px;
  }

  @media (min-width: 1024px) {
    #MilauraLPBundle-{{ section.id }} .lp-bundle-inner {
      max-width: 800px;
    }
  }
{% endstyle %}

<div id="MilauraLPBundle-{{ section.id }}" id-anchor="milaura-lp-bundle">
  <div class="lp-bundle-inner">
    <div class="lp-bundle-header">
      <h2>{{ section.settings.title | default: 'Composez votre coffret' }}</h2>
      <p>{{ section.settings.subtitle | default: 'Plus vous commandez, plus vous deverrouillez de cadeaux' }}</p>
    </div>

    <!-- TIERS -->
    <div class="lp-bundle-tiers" id="lp-bundle-tiers-{{ section.id }}">
      {%- assign tier_index = 0 -%}
      {%- for block in section.blocks -%}
        {%- if block.type == 'tier' -%}
          <div
            class="lp-bundle-tier{% if tier_index == 0 %} is-selected{% endif %}"
            data-tier-index="{{ tier_index }}"
            data-tier-pieces="{{ block.settings.pieces }}"
            data-tier-price="{{ block.settings.price }}"
            data-tier-cards="{{ block.settings.cards_unlocked }}"
            {{ block.shopify_attributes }}
          >
            {%- if block.settings.badge != blank -%}
              <span class="lp-bundle-tier-badge">{{ block.settings.badge }}</span>
            {%- endif -%}
            <div class="lp-bundle-tier-left">
              <div class="lp-bundle-tier-check">✓</div>
              <div>
                <div class="lp-bundle-tier-label">{{ block.settings.label }}</div>
                <div class="lp-bundle-tier-sub">{{ block.settings.sub_label }}</div>
              </div>
            </div>
            <div style="text-align: right;">
              <div class="lp-bundle-tier-price">{{ block.settings.price | append: ' €' }}</div>
              {%- if block.settings.compare_price != blank -%}
                <div class="lp-bundle-tier-compare">{{ block.settings.compare_price | append: ' €' }}</div>
              {%- endif -%}
            </div>
          </div>
          {%- assign tier_index = tier_index | plus: 1 -%}
        {%- endif -%}
      {%- endfor -%}
    </div>

    <!-- SCRATCH ZONE -->
    <div class="lp-bundle-scratch-zone">
      <div class="lp-bundle-scratch-label">✨ CADEAUX MYSTERE ✨</div>
      <div class="lp-bundle-scratch-wrap">
        <div class="lp-bundle-scratch-header">
          <span class="lp-bundle-scratch-title">Mystery gifts</span>
          <span class="lp-bundle-scratch-counter" id="lp-bundle-counter-{{ section.id }}">0/0 revele</span>
        </div>
        <div class="lp-bundle-cards" id="lp-bundle-cards-{{ section.id }}">
          {%- assign gift_index = 0 -%}
          {%- for block in section.blocks -%}
            {%- if block.type == 'gift' -%}
              <div
                class="lp-bundle-card is-locked"
                data-gift-index="{{ gift_index }}"
                data-gift-name="{{ block.settings.name }}"
                data-gift-value="{{ block.settings.value }}"
                data-gift-icon="{{ block.settings.icon }}"
                data-gift-min-tier="{{ block.settings.min_tier }}"
                {{ block.shopify_attributes }}
              >
                <div class="lp-bundle-card-content">
                  <div class="lp-bundle-card-icon">🔒</div>
                  <div class="lp-bundle-card-name">Verrouille</div>
                </div>
              </div>
              {%- assign gift_index = gift_index | plus: 1 -%}
            {%- endif -%}
          {%- endfor -%}
        </div>
        <div class="lp-bundle-nudge" id="lp-bundle-nudge-{{ section.id }}" style="display: none;"></div>
        <div class="lp-bundle-recap" id="lp-bundle-recap-{{ section.id }}"></div>
      </div>
    </div>

    <!-- CTA -->
    <div class="lp-bundle-cta">
      <button type="button" class="lp-bundle-atc" id="lp-bundle-atc-{{ section.id }}">
        Ajouter au panier
      </button>
      <div class="lp-bundle-reassurance">🔒 Paiement securise · ✅ Garantie 30j</div>
    </div>
  </div>
</div>
```

This step creates the visual structure. The `<script>` follows in the next step.

- [ ] **Step 2: Commit structure**

```bash
git add sections/milaura-lp-bundle-scratch.liquid
git commit -m "feat(lp): add bundle scratch-to-reveal section structure and CSS"
```

---

### Task 7: Bundle Scratch-to-Reveal (Part 2 : JavaScript engine)

**Files:**
- Modify: `sections/milaura-lp-bundle-scratch.liquid` (append script + schema)

- [ ] **Step 1: Add the JavaScript engine and schema**

Append the `<script>` and `{% schema %}` blocks to the end of `milaura-lp-bundle-scratch.liquid`. The JS engine handles:

1. **Tier selection**: clicking a tier updates `selectedTier`, toggles `.is-selected`, calls `updateCards()`
2. **updateCards()**: for each gift card, if `min_tier <= selectedTierIndex`, unlock it (remove `.is-locked`, show scratch canvas or revealed state). Otherwise lock it.
3. **initCanvas(card)**: creates a `<canvas>` sized to the card, fills it with gold gradient, attaches touch/mouse event listeners
4. **handleScratch(e)**: on touchmove/mousemove while pressed, draws circles with `globalCompositeOperation = 'destination-out'` to erase the gold
5. **checkReveal(card)**: reads canvas pixel data, counts transparent pixels. If > 60% transparent, calls `revealCard(card)`
6. **revealCard(card)**: adds `.is-revealed`, removes canvas, shows gift content (icon, name, value), spawns confetti particles, updates counter and recap
7. **updateRecap()**: builds the line-by-line summary (product price + gifts + total)
8. **addToCart()**: POST `/cart/add.js` with variant_id, quantity from selected tier, and gift names as line item properties
9. **sessionStorage**: saves revealed cards per section so refresh doesn't lose state

Key code structure:

```javascript
(function() {
  var sid = '{{ section.id }}';
  var container = document.getElementById('MilauraLPBundle-' + sid);
  if (!container) return;

  var GOLD_COLOR_1 = '#E6C88B';
  var GOLD_COLOR_2 = '#C0A062';
  var REVEAL_THRESHOLD = 0.6;
  var STORAGE_KEY = 'milaura-bundle-' + sid;

  var state = {
    selectedTierIndex: 0,
    revealedGifts: loadState(),
    tiers: [],
    gifts: []
  };

  // Parse tier and gift data from DOM data attributes
  // ...tier parsing from .lp-bundle-tier elements...
  // ...gift parsing from .lp-bundle-card elements...

  // Tier click handlers
  // ...selectTier(index) implementation...

  // Canvas scratch engine
  // ...initCanvas, handleScratch, checkReveal, revealCard...

  // Confetti
  // ...spawnConfetti(card) creates 20 particles with random colors/positions...

  // Recap and cart
  // ...updateRecap, addToCart via fetch /cart/add.js...

  // Session persistence
  // ...loadState/saveState with sessionStorage...

  // Init
  selectTier(0);
})();
```

Write the full JS (~200 lines) into the section file before the schema block. Then add the schema:

```json
{
  "name": "LP Bundle Scratch",
  "tag": "section",
  "class": "milaura-lp-bundle-scratch",
  "settings": [
    { "type": "product", "id": "product", "label": "Produit" },
    { "type": "text", "id": "title", "label": "Titre", "default": "Composez votre coffret" },
    { "type": "text", "id": "subtitle", "label": "Sous-titre", "default": "Plus vous commandez, plus vous deverrouillez de cadeaux" }
  ],
  "blocks": [
    {
      "type": "tier",
      "name": "Palier",
      "settings": [
        { "type": "text", "id": "label", "label": "Label", "default": "1 Bougie" },
        { "type": "text", "id": "sub_label", "label": "Sous-label", "default": "Livraison offerte" },
        { "type": "number", "id": "pieces", "label": "Nombre de pieces", "default": 1 },
        { "type": "text", "id": "price", "label": "Prix", "default": "49,90" },
        { "type": "text", "id": "compare_price", "label": "Prix barre", "default": "89,90" },
        { "type": "number", "id": "cards_unlocked", "label": "Cartes debloquees", "default": 1 },
        { "type": "text", "id": "badge", "label": "Badge (vide = cache)" }
      ]
    },
    {
      "type": "gift",
      "name": "Cadeau",
      "settings": [
        { "type": "text", "id": "icon", "label": "Icone (emoji)", "default": "📦" },
        { "type": "text", "id": "name", "label": "Nom", "default": "Livraison gratuite" },
        { "type": "text", "id": "value", "label": "Valeur affichee", "default": "+9,90 €" },
        { "type": "number", "id": "min_tier", "label": "Palier minimum (0, 1, 2...)", "default": 0 }
      ]
    }
  ],
  "presets": [
    {
      "name": "LP Bundle Scratch",
      "blocks": [
        { "type": "tier", "settings": { "label": "1 Bougie", "sub_label": "Livraison offerte", "pieces": 1, "price": "49,90", "compare_price": "89,90", "cards_unlocked": 1 } },
        { "type": "tier", "settings": { "label": "2 Bougies", "sub_label": "+ jusqu'a 3 cadeaux", "pieces": 2, "price": "89,80", "compare_price": "179,80", "cards_unlocked": 3, "badge": "Populaire" } },
        { "type": "tier", "settings": { "label": "Pack Famille", "sub_label": "+ tous les cadeaux", "pieces": 3, "price": "119,70", "compare_price": "269,70", "cards_unlocked": 5 } },
        { "type": "gift", "settings": { "icon": "📦", "name": "Livraison gratuite", "value": "+9,90 €", "min_tier": 0 } },
        { "type": "gift", "settings": { "icon": "👜", "name": "Pochon velours", "value": "+14,90 €", "min_tier": 0 } },
        { "type": "gift", "settings": { "icon": "💎", "name": "Mini mineral", "value": "+12,90 €", "min_tier": 0 } },
        { "type": "gift", "settings": { "icon": "🪨", "name": "Pierre roulee", "value": "+8,90 €", "min_tier": 2 } },
        { "type": "gift", "settings": { "icon": "🎁", "name": "Code -10%", "value": "Prochain achat", "min_tier": 2 } }
      ]
    }
  ]
}
```

- [ ] **Step 2: Deploy and test scratch interaction**

Run: `shopify theme push --store milaura-2 --theme 190430282075 --allow-live`

Test on mobile (or Chrome DevTools mobile emulation):
1. Select tier 1: verify 1 card is scratchable, rest locked
2. Scratch the card: verify gold erases on touch/drag
3. Verify auto-reveal triggers at ~60% scratched
4. Verify confetti animation plays
5. Select tier 2: verify locked cards become scratchable
6. Verify previously revealed cards stay revealed
7. Scratch all cards: verify recap appears with totals
8. Click Add to Cart: verify product added with correct quantity
9. Refresh page: verify revealed state persists (sessionStorage)

- [ ] **Step 3: Commit**

```bash
git add sections/milaura-lp-bundle-scratch.liquid
git commit -m "feat(lp): add scratch-to-reveal JS engine and schema to bundle section"
```

---

### Task 8: JSON Template Assembly

**Files:**
- Create: `templates/page.lp-promo-bougies.json`

Assembles all 6 LP sections into the promo bougies landing page.

- [ ] **Step 1: Create the JSON template**

```json
{
  "sections": {
    "lp_hero": {
      "type": "milaura-lp-hero",
      "settings": {
        "headline": "Derniere chance. <span>30 bougies restantes.</span>",
        "subtitle": "Votre rituel de reconnexion emotionnelle, artisanat francais, pierres naturelles certifiees.",
        "badge_text": "Edition limitee",
        "show_stock_counter": true,
        "stock_count": 30,
        "cta_text": "Decouvrir l'offre"
      }
    },
    "lp_social_proof": {
      "type": "milaura-lp-social-proof",
      "settings": {
        "rating": "4.8/5",
        "review_count": "127"
      },
      "blocks": {
        "badge_1": { "type": "badge", "settings": { "icon": "💎", "label": "Pierres certifiees" } },
        "badge_2": { "type": "badge", "settings": { "icon": "✅", "label": "Garantie 30j" } },
        "badge_3": { "type": "badge", "settings": { "icon": "🔒", "label": "Paiement securise" } }
      },
      "block_order": ["badge_1", "badge_2", "badge_3"]
    },
    "lp_story": {
      "type": "milaura-lp-story",
      "settings": {
        "name": "Karine Allie",
        "role": "Fondatrice Mil'Aura",
        "quote": "J'ai cree ces bougies comme des compagnons emotionnels. Chaque pierre est selectionnee pour sa vibration, chaque senteur pour son pouvoir d'evocation. C'est la derniere serie. Quand elles seront parties, elles seront parties."
      }
    },
    "lp_bundle": {
      "type": "milaura-lp-bundle-scratch",
      "settings": {
        "title": "Composez votre coffret",
        "subtitle": "Plus vous commandez, plus vous deverrouillez de cadeaux"
      },
      "blocks": {
        "tier_1": { "type": "tier", "settings": { "label": "1 Bougie", "sub_label": "Livraison offerte", "pieces": 1, "price": "49,90", "compare_price": "89,90", "cards_unlocked": 1 } },
        "tier_2": { "type": "tier", "settings": { "label": "2 Bougies", "sub_label": "+ jusqu'a 3 cadeaux", "pieces": 2, "price": "89,80", "compare_price": "179,80", "cards_unlocked": 3, "badge": "Populaire" } },
        "tier_3": { "type": "tier", "settings": { "label": "Pack Famille", "sub_label": "+ tous les cadeaux", "pieces": 3, "price": "119,70", "compare_price": "269,70", "cards_unlocked": 5 } },
        "gift_1": { "type": "gift", "settings": { "icon": "📦", "name": "Livraison gratuite", "value": "+9,90 €", "min_tier": 0 } },
        "gift_2": { "type": "gift", "settings": { "icon": "👜", "name": "Pochon velours", "value": "+14,90 €", "min_tier": 0 } },
        "gift_3": { "type": "gift", "settings": { "icon": "💎", "name": "Mini mineral", "value": "+12,90 €", "min_tier": 0 } },
        "gift_4": { "type": "gift", "settings": { "icon": "🪨", "name": "Pierre roulee", "value": "+8,90 €", "min_tier": 2 } },
        "gift_5": { "type": "gift", "settings": { "icon": "🎁", "name": "Code -10%", "value": "Prochain achat", "min_tier": 2 } }
      },
      "block_order": ["tier_1", "tier_2", "tier_3", "gift_1", "gift_2", "gift_3", "gift_4", "gift_5"]
    },
    "lp_faq": {
      "type": "milaura-lp-objections",
      "settings": {
        "title": "Questions frequentes"
      },
      "blocks": {
        "q1": { "type": "question", "settings": { "question": "Pourquoi c'est la derniere serie ?", "answer": "Mil'Aura se recentre sur les bijoux en pierres naturelles. Ces bougies sont les dernieres de la collection. Une fois le stock epuise, elles ne seront plus reproduites." } },
        "q2": { "type": "question", "settings": { "question": "Les pierres sont-elles authentiques ?", "answer": "Chaque pierre est naturelle, selectionnee a la main et certifiee. Nous travaillons exclusivement avec des fournisseurs ethiques." } },
        "q3": { "type": "question", "settings": { "question": "Satisfait ou rembourse ?", "answer": "Vous disposez de 30 jours pour changer d'avis. Si le produit ne vous convient pas, nous vous remboursons integralement." } },
        "q4": { "type": "question", "settings": { "question": "Combien de temps pour la livraison ?", "answer": "Livraison en 48 a 72h en France metropolitaine. Chaque commande est preparee avec soin dans notre atelier." } }
      },
      "block_order": ["q1", "q2", "q3", "q4"]
    },
    "lp_cta": {
      "type": "milaura-lp-cta-final",
      "settings": {
        "headline": "Il n'en reste que 30.",
        "subtitle": "Une fois epuisees, cette collection disparait definitivement.",
        "cta_text": "Commander maintenant"
      }
    }
  },
  "order": ["lp_hero", "lp_social_proof", "lp_story", "lp_bundle", "lp_faq", "lp_cta"]
}
```

- [ ] **Step 2: Create the Shopify page and assign template**

After deploying, go to Shopify Admin > Pages > Add page:
- Title: "Promo Bougies"
- Template: `page.lp-promo-bougies`
- URL handle: `promo-bougies`

Then open the customizer for that page, select the bougie product in both the LP Hero and LP CTA Final product pickers, and upload Karine's photo in the Story section.

Run: `shopify theme push --store milaura-2 --theme 190430282075 --allow-live`

- [ ] **Step 3: Full end-to-end test**

Open `milaura.fr/pages/promo-bougies` on mobile. Walk through:
1. Hero loads with product image, price, badge, stock counter
2. CTA scrolls down to bundle section
3. Social proof displays correctly
4. Story section shows Karine's photo and quote
5. Bundle tiers are selectable, scratch cards work
6. FAQ accordion opens/closes
7. Final CTA adds product to cart and redirects to `/cart`
8. Page loads under 2 seconds on 4G (Chrome DevTools throttling)

- [ ] **Step 4: Commit**

```bash
git add templates/page.lp-promo-bougies.json
git commit -m "feat(lp): add promo bougies landing page template"
```

---

## Phase 2: Hero Homepage Single-Product

### Task 9: Add single-product mode to hero showcase

**Files:**
- Modify: `sections/milaura-hero-showcase.liquid`

Add a `mode` setting that switches between the existing tab-based hero and a new single-product layout. The existing code stays intact (backward compatible). When `mode == 'single-product'`, render the single-product hero HTML instead.

- [ ] **Step 1: Add the mode setting to the schema**

In the schema's `settings` array (around line ~2300), add at the top:

```json
{
  "type": "select",
  "id": "mode",
  "label": "Mode d'affichage",
  "options": [
    { "value": "tabs", "label": "Onglets (4 univers)" },
    { "value": "single-product", "label": "Produit unique" }
  ],
  "default": "tabs"
}
```

Then add the single-product settings after it:

```json
{ "type": "header", "content": "Mode Produit Unique" },
{ "type": "product", "id": "sp_product", "label": "Produit mis en avant" },
{ "type": "inline_richtext", "id": "sp_headline", "label": "Titre", "default": "Votre rituel du soir <span>merite un ecrin.</span>" },
{ "type": "text", "id": "sp_subtitle", "label": "Sous-titre" },
{ "type": "text", "id": "sp_badge_text", "label": "Badge", "default": "Edition limitee" },
{ "type": "checkbox", "id": "sp_show_stock", "label": "Afficher compteur stock", "default": true },
{ "type": "number", "id": "sp_stock_count", "label": "Stock restant", "default": 30 },
{ "type": "text", "id": "sp_cta_text", "label": "Texte CTA", "default": "Decouvrir" },
{ "type": "url", "id": "sp_cta_url", "label": "URL CTA (vers landing page)" }
```

- [ ] **Step 2: Add the conditional rendering in HTML**

At the very start of the HTML section (after `{% style %}`), wrap the existing hero markup in a conditional. The LP hero CSS from Task 1 can be reused as reference, but the homepage hero should use the existing `milaura-section-card` pattern.

```liquid
{%- if section.settings.mode == 'single-product' -%}
  <!-- SINGLE PRODUCT HERO (new) -->
  <!-- Reuse CSS classes from LP hero adapted to homepage context -->
  <!-- ... single-product hero HTML identical to LP hero structure ... -->
  <!-- but within the existing milaura-section-card wrapper for consistency -->
{%- else -%}
  <!-- EXISTING TAB HERO (untouched) -->
  <!-- ... all existing hero markup ... -->
{%- endif -%}
```

Write the full single-product hero HTML inside the conditional, adapting the LP hero design to fit within the homepage's `milaura-section-card` container. Use `section.settings.sp_*` for all settings.

- [ ] **Step 3: Deploy, switch mode in customizer, verify**

Run: `shopify theme push --store milaura-2 --theme 190430282075 --allow-live`

Open customizer on homepage. In the hero showcase section settings, switch "Mode d'affichage" to "Produit unique". Select a product, set headline, CTA URL. Verify:
- Single-product hero renders correctly on mobile and desktop
- Switching back to "Onglets" restores the original hero
- CTA links to the landing page URL

- [ ] **Step 4: Commit**

```bash
git add sections/milaura-hero-showcase.liquid
git commit -m "feat(hero): add single-product mode to homepage hero showcase"
```

---

## Phase 3: Quiz Pierre-First

### Task 10: Remove candle/scent references from quiz

**Files:**
- Modify: `sections/milaura-quiz.liquid`

Surgical changes to the quiz result section. The questions and scoring remain untouched.

- [ ] **Step 1: Replace the 3 result tabs**

In the HTML (around line ~1136-1140), replace the existing tabs:

```liquid
<!-- OLD -->
<button class="quiz-rpt-tab active" data-tab="candle">🕯️ Bougie</button>
<button class="quiz-rpt-tab" data-tab="stone">💎 Pierre</button>
<button class="quiz-rpt-tab" data-tab="ritual">✨ Rituel</button>
```

With:

```liquid
<!-- NEW -->
<button class="quiz-rpt-tab active" data-tab="bracelet">💎 Bracelet</button>
<button class="quiz-rpt-tab" data-tab="bague">💍 Bague</button>
<button class="quiz-rpt-tab" data-tab="collier">✨ Collier</button>
```

- [ ] **Step 2: Remove the "Votre senteur" duo card**

In the HTML (around lines ~1193-1197), remove the scent card from the duo block. Also rename the duo title:

```liquid
<!-- OLD -->
<h4 class="quiz-reveal-duo-title">Votre Duo &amp; son Alchimie</h4>
```

Replace with:

```liquid
<h4 class="quiz-reveal-duo-title">Votre Pierre</h4>
```

Remove the entire scent duo card div (lines ~1193-1197).

- [ ] **Step 3: Update profileData in JavaScript**

In each of the 5 profile objects (lines ~1252-1444):

1. Remove the `scent` property
2. Rename `product` to `candleProduct` (or remove entirely)
3. Rename `stoneProduct` to `braceletProduct`
4. Add `bagueProduct` and `collierProduct` (from new schema settings)
5. Update ritual texts: replace "Allumez votre bougie" with "Portez votre pierre" or "Profitez des bienfaits de votre pierre"

Example for `apaisement`:

```javascript
apaisement: {
  // ... existing label, displayName, moodLabel, description, bullets ...
  ritual: "1. " + {{ section.settings.profile_apaisement_ritual_1 | default: "Portez votre pierre. Fermez les yeux." | json }} + ...
  stone: "Calcedoine bleue",
  // scent removed
  braceletProduct: {% if section.settings.profile_apaisement_bracelet_product %}{...}{% else %}null{% endif %},
  bagueProduct: {% if section.settings.profile_apaisement_bague_product %}{...}{% else %}null{% endif %},
  collierProduct: {% if section.settings.profile_apaisement_collier_product %}{...}{% else %}null{% endif %}
}
```

- [ ] **Step 4: Update the tab-switching JS function**

Find the function that handles tab clicks (search for `data-tab` or `quiz-rpt-tab`). Update it to switch between `braceletProduct`, `bagueProduct`, `collierProduct` instead of `product`, `stoneProduct`, `ritualProduct`.

Also update the CTA text generation to say "Decouvrir mon bracelet" / "Decouvrir ma bague" / "Decouvrir mon collier".

Add a secondary link under the CTA: "voir tous les bijoux [stone name]" linking to the collection filtered by stone.

- [ ] **Step 5: Update the schema settings**

In the schema (around lines ~2150-2400), for each of the 5 profiles:

1. Remove `profile_*_product` (candle product picker)
2. Rename `profile_*_stone_product` to `profile_*_bracelet_product`
3. Add `profile_*_bague_product` (product picker)
4. Add `profile_*_collier_product` (product picker)
5. Update ritual default texts

- [ ] **Step 6: Deploy and test all 5 profiles**

Run: `shopify theme push --store milaura-2 --theme 190430282075 --allow-live`

Open the quiz page. Complete the quiz for each profile:
1. Verify no mention of "bougie" or "senteur" anywhere
2. Verify 3 tabs show Bracelet / Bague / Collier
3. Verify tab switching changes product image, title, price, CTA
4. Verify CTA says "Decouvrir mon bracelet" etc.
5. Verify ritual text says "Portez votre pierre" not "Allumez votre bougie"
6. Verify the stone hero block displays correctly
7. Verify "voir tous les bijoux [Pierre]" link works

- [ ] **Step 7: Commit**

```bash
git add sections/milaura-quiz.liquid
git commit -m "refactor(quiz): convert to pierre-first, remove candle/scent references"
```

---

## Phase 4: LP Bijoux Declinaison

### Task 11: Create bijoux landing page template

**Files:**
- Create: `templates/page.lp-bracelet-amethyste.json`

Copy the promo bougies template and adjust settings for a bracelet product. This serves as the model for all future bijoux LPs.

- [ ] **Step 1: Copy and adapt the template**

Duplicate `page.lp-promo-bougies.json`, change:
- Hero headline, subtitle, badge for bracelet context
- Bundle tiers adapted for bijoux pricing
- FAQ questions adapted for bijoux
- CTA headline adapted

- [ ] **Step 2: Commit**

```bash
git add templates/page.lp-bracelet-amethyste.json
git commit -m "feat(lp): add bracelet amethyste landing page template"
```

---

## Verification Checklist

After all phases, verify:
- [ ] All 6 LP sections render correctly in customizer
- [ ] Bundle scratch works on iOS Safari, Android Chrome, desktop Chrome/Firefox/Safari
- [ ] Touch events work on mobile (scratch gesture)
- [ ] Canvas scratch doesn't conflict with page scroll (need to prevent default on canvas only)
- [ ] All LP pages load under 2s on 4G throttling
- [ ] Hero homepage switches between tab mode and single-product mode without breaking
- [ ] Quiz shows zero references to bougies/senteurs
- [ ] Quiz result tabs correctly switch between 3 product types
- [ ] Add to Cart works from both LP CTA Final and Bundle Scratch
- [ ] sessionStorage persists scratch state across page refresh
- [ ] All text uses vouvoiement, zero tiret cadratin
