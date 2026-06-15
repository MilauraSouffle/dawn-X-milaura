# Funnel par pierre - Vague 1 (template page pierre + quick wins) - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire un template de page collection "pierre" enrichi (intro editoriale + vertus + FAQ avec schema FAQPage), reutilisable, qui sert le SEO/GEO et la conversion, en reutilisant au maximum les sections MilAura existantes.

**Architecture:** Deux nouvelles sections Liquid (`milaura-collection-vertus`, `milaura-collection-faq`) qui lisent des metafields de collection `milaura.*` avec fallback gracieux vers les settings de section, plus un nouveau template JSON `collection.milaura-pierre.json` qui assemble hero + vertus + filtres + grille + FAQ + crosslinks (maillage) + CTA quiz + reassurance. Aucune dependance bloquante : les sections rendent du vide proprement si les metafields ne sont pas remplis. Le contenu (vertus, FAQ) est produit ensuite par le pipeline Camilla/Hermes (OPS), pas dans ce plan (DEV).

**Tech Stack:** Shopify Liquid (theme dawn-X-milaura), CSS section-scopee via `{% style %}`, JSON-LD FAQPage, Shopify CLI (`shopify theme check`, `shopify theme push --only`), validation JSON via ruby.

**Spec de reference:** `docs/superpowers/specs/2026-06-15-milaura-funnel-par-pierre-design.md`

---

## Contraintes projet (regles Codex, NON NEGOCIABLES)

- Repo tres sale et divergent (`main...origin/main` ahead/behind important). **Ne pas revert. Ne pas supposer une baseline propre. Ne pas committer le worktree global.**
- **Jamais de push global.** Uniquement `shopify theme push --only <fichiers>`.
- **Ne pas pousser directement sur le theme live `#190430282075` pour des fichiers NOUVEAUX (template + sections).** D'abord pousser sur un theme de preview/duplique, QA, puis seulement aller live apres validation Patrice.
- **Backup horodate avant toute modification d'un fichier existant** : `fichier.bak-pre-pierre-vague1-YYYYMMDDTHHMMSSZ`.
- Conventions theme : sections `milaura-*`, classes `.milaura-*`, variables `--milaura-*`, IDs `MilauraXxx` (PascalCase), CSS section-scopee via `{% style %}` avec `#MilauraXxx-{{ section.id }}`.
- **Mobile-first** (breakpoints 768px / 600px / 380px comme les sections existantes).
- **Vouvoiement obligatoire. Tiret cadratin interdit (ni `--` ni `—`).**
- Rituels pierre : "Portez votre pierre" (jamais "tenez").
- Aucune ecriture Shopify Admin dans ce plan (les metafields de collection = Wave 0 separee, validation Patrice).

## Etat des lieux verifie (2026-06-15)

- Template collection MilAura existant : `templates/collection.milaura-collection.json` assemble `hero, subcategories, filters, grid, crosslinks, cta, reassurance`.
- `sections/milaura-collection-hero.liquid` rend le titre en "dynamic island" + emet le JSON-LD `CollectionPage + ItemList + BreadcrumbList`. **Il ne rend AUCUNE intro editoriale visible** (`collection.description` n'est utilise que dans le champ description du JSON-LD).
- **Aucun metafield de collection defini** (`config/metafields/` ne contient que produit + client). **Aucun usage de `collection.metafields.*` dans le theme.**
- Sections reutilisables disponibles : `milaura-collection-grid`, `milaura-collection-filters`, `milaura-collection-crosslinks` (maillage), `milaura-collection-cta` (quiz), `milaura-product-reassurance`, `milaura-collection-subcategories`.
- **FAQ collection inexistante** : seul `milaura-product-faq.liquid` existe (niveau produit). L'audit live a confirme l'absence de `FAQPage` sur les pages collection. C'est le principal manque GEO.

## Decisions de scope

- **`aggregateRating` PDP : RETIRE de la Vague 1.** La boutique a 2 ventes totales, donc quasi aucun avis. Cabler un `aggregateRating` sans avis reels produit un schema invalide (erreur Google). A reporter quand il y aura des avis Judge.me reels.
- **Titres de collection / accents : tache Admin, pas DEV.** Le `<title>` public vient du SEO title Shopify (`Recherche > Referencement` de la collection), pas du theme. Documente en fin de plan comme action Admin (Patrice ou pipeline), hors code.
- Les nouvelles sections lisent les metafields de collection `milaura.stone_intro`, `milaura.stone_benefits`, `milaura.comment_porter`, `milaura.stone_faq` SI ils existent, sinon fallback settings de section, sinon rendu vide. Les definitions de ces metafields = Wave 0.

## File Structure

| Fichier | Responsabilite |
|---------|----------------|
| `sections/milaura-collection-vertus.liquid` | NOUVEAU. Intro editoriale + bloc vertus + bloc "comment porter", alimente par metafields collection avec fallback settings. Rend du vide si aucun contenu. Pas de JSON-LD. |
| `sections/milaura-collection-faq.liquid` | NOUVEAU. Accordeon FAQ accessible (aria-expanded) + JSON-LD `FAQPage`. Q/R via blocks customizer (fallback) et/ou metafield collection. JSON-LD emis uniquement si au moins une Q/R. |
| `templates/collection.milaura-pierre.json` | NOUVEAU. Assemble hero + vertus + filters + grid + faq + crosslinks + cta + reassurance. |

Aucun fichier existant n'est modifie dans la Vague 1 (les nouvelles sections et le nouveau template sont additifs). C'est volontaire : zero risque de regression sur les collections actuelles.

---

## Task 1 : Section vertus collection

**Files:**
- Create: `sections/milaura-collection-vertus.liquid`

- [ ] **Step 1 : Creer la section avec rendu conditionnel + fallback**

Creer `sections/milaura-collection-vertus.liquid` avec ce contenu complet :

```liquid
{%- comment -%}
  MILAURA COLLECTION VERTUS
  Intro editoriale + vertus + comment porter pour les pages "par pierre".
  Source de contenu prioritaire : metafields de collection milaura.*
  Fallback : settings de section. Si tout est vide, la section ne rend rien.
{%- endcomment -%}

{%- liquid
  assign mf_intro = collection.metafields.milaura.stone_intro.value
  assign mf_benefits = collection.metafields.milaura.stone_benefits.value
  assign mf_wear = collection.metafields.milaura.comment_porter.value

  assign intro = mf_intro | default: section.settings.intro_text
  assign benefits = mf_benefits | default: section.settings.benefits_text
  assign wear = mf_wear | default: section.settings.wear_text

  assign has_content = false
  if intro != blank or benefits != blank or wear != blank
    assign has_content = true
  endif
-%}

{%- if has_content -%}
{%- style -%}
  #MilauraCollectionVertus-{{ section.id }} {
    padding: var(--milaura-spacing-md, 32px) var(--milaura-spacing-sm, 16px);
    background: {{ section.settings.background_color }};
  }
  #MilauraCollectionVertus-{{ section.id }} .milaura-vertus__inner {
    max-width: 760px;
    margin: 0 auto;
  }
  #MilauraCollectionVertus-{{ section.id }} .milaura-vertus__intro {
    font-size: 16px;
    line-height: 1.7;
    color: var(--milaura-text, #333);
    text-align: center;
  }
  #MilauraCollectionVertus-{{ section.id }} .milaura-vertus__block {
    margin-top: var(--milaura-spacing-md, 32px);
  }
  #MilauraCollectionVertus-{{ section.id }} .milaura-vertus__heading {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    color: var(--milaura-text, #1b1b1b);
    margin: 0 0 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  #MilauraCollectionVertus-{{ section.id }} .milaura-vertus__body {
    font-size: 15px;
    line-height: 1.7;
    color: var(--milaura-text, #444);
  }
  #MilauraCollectionVertus-{{ section.id }} .milaura-vertus__body ul {
    padding-left: 1.2em;
    margin: 0;
  }
  #MilauraCollectionVertus-{{ section.id }} .milaura-vertus__body li {
    margin-bottom: 6px;
  }
  @media screen and (max-width: 768px) {
    #MilauraCollectionVertus-{{ section.id }} {
      padding: var(--milaura-spacing-sm, 20px) var(--milaura-spacing-xs, 14px);
    }
    #MilauraCollectionVertus-{{ section.id }} .milaura-vertus__heading {
      font-size: 19px;
    }
  }
{%- endstyle -%}

<section
  id="MilauraCollectionVertus-{{ section.id }}"
  class="milaura-collection-vertus milaura-section"
  aria-label="A propos de {{ collection.title | escape }}"
>
  <div class="milaura-vertus__inner">
    {%- if intro != blank -%}
      <div class="milaura-vertus__intro rte">{{ intro }}</div>
    {%- endif -%}

    {%- if benefits != blank -%}
      <div class="milaura-vertus__block">
        <h2 class="milaura-vertus__heading">
          <span aria-hidden="true">💎</span>
          {{ section.settings.benefits_heading | default: 'Les vertus de cette pierre' }}
        </h2>
        <div class="milaura-vertus__body rte">{{ benefits }}</div>
      </div>
    {%- endif -%}

    {%- if wear != blank -%}
      <div class="milaura-vertus__block">
        <h2 class="milaura-vertus__heading">
          <span aria-hidden="true">✨</span>
          {{ section.settings.wear_heading | default: 'Comment porter votre pierre' }}
        </h2>
        <div class="milaura-vertus__body rte">{{ wear }}</div>
      </div>
    {%- endif -%}
  </div>
</section>
{%- endif -%}

{% schema %}
{
  "name": "Collection Vertus",
  "tag": "section",
  "class": "milaura-section",
  "settings": [
    {
      "type": "paragraph",
      "content": "Contenu prioritaire = metafields de collection (milaura.stone_intro, milaura.stone_benefits, milaura.comment_porter). Les champs ci-dessous servent de repli si les metafields sont vides."
    },
    {
      "type": "richtext",
      "id": "intro_text",
      "label": "Intro (repli)"
    },
    {
      "type": "text",
      "id": "benefits_heading",
      "label": "Titre vertus",
      "default": "Les vertus de cette pierre"
    },
    {
      "type": "richtext",
      "id": "benefits_text",
      "label": "Vertus (repli)"
    },
    {
      "type": "text",
      "id": "wear_heading",
      "label": "Titre comment porter",
      "default": "Comment porter votre pierre"
    },
    {
      "type": "richtext",
      "id": "wear_text",
      "label": "Comment porter (repli)"
    },
    {
      "type": "color",
      "id": "background_color",
      "label": "Couleur de fond",
      "default": "#ffffff"
    }
  ],
  "presets": [
    { "name": "Collection Vertus" }
  ]
}
{% endschema %}
```

- [ ] **Step 2 : Valider la section avec theme check**

Run: `shopify theme check --fail-level error sections/milaura-collection-vertus.liquid`
Expected: 0 offense bloquante (warnings historiques hors scope acceptes).

- [ ] **Step 3 : Valider le JSON du schema**

Run:
```bash
ruby -rjson -e 'c=File.read("sections/milaura-collection-vertus.liquid"); m=c.match(/\{% schema %\}(.+?)\{% endschema %\}/m); JSON.parse(m[1]); puts "schema JSON OK"'
```
Expected: `schema JSON OK`

- [ ] **Step 4 : Commit (fichier nouveau uniquement)**

```bash
git add sections/milaura-collection-vertus.liquid
git commit -m "feat(pierre): section vertus collection (intro + vertus + comment porter, metafield-driven)"
```

---

## Task 2 : Section FAQ collection avec schema FAQPage

**Files:**
- Create: `sections/milaura-collection-faq.liquid`

- [ ] **Step 1 : Creer la section accordeon + JSON-LD FAQPage**

Creer `sections/milaura-collection-faq.liquid` avec ce contenu complet :

```liquid
{%- comment -%}
  MILAURA COLLECTION FAQ
  Accordeon accessible + JSON-LD FAQPage pour les pages "par pierre".
  Q/R via blocks customizer. JSON-LD emis uniquement si au moins un bloc question.
{%- endcomment -%}

{%- assign question_blocks = section.blocks | where: 'type', 'question' -%}

{%- if question_blocks.size > 0 -%}
{%- style -%}
  #MilauraCollectionFaq-{{ section.id }} {
    padding: var(--milaura-spacing-md, 32px) var(--milaura-spacing-sm, 16px);
    background: {{ section.settings.background_color }};
  }
  #MilauraCollectionFaq-{{ section.id }} .milaura-faq__inner {
    max-width: 760px;
    margin: 0 auto;
  }
  #MilauraCollectionFaq-{{ section.id }} .milaura-faq__title {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    text-align: center;
    color: var(--milaura-text, #1b1b1b);
    margin: 0 0 var(--milaura-spacing-md, 28px);
  }
  #MilauraCollectionFaq-{{ section.id }} .milaura-faq__item {
    border-bottom: 1px solid rgba(0,0,0,0.08);
  }
  #MilauraCollectionFaq-{{ section.id }} .milaura-faq__q {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    padding: 16px 32px 16px 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--milaura-text, #1b1b1b);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  #MilauraCollectionFaq-{{ section.id }} .milaura-faq__icon {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    transition: transform 0.25s ease;
    color: var(--milaura-gold, #C0A062);
  }
  #MilauraCollectionFaq-{{ section.id }} .milaura-faq__q[aria-expanded="true"] .milaura-faq__icon {
    transform: rotate(45deg);
  }
  #MilauraCollectionFaq-{{ section.id }} .milaura-faq__a {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
  }
  #MilauraCollectionFaq-{{ section.id }} .milaura-faq__a[data-open="true"] {
    max-height: 600px;
  }
  #MilauraCollectionFaq-{{ section.id }} .milaura-faq__a-inner {
    padding: 0 0 16px;
    font-size: 15px;
    line-height: 1.7;
    color: var(--milaura-text, #444);
  }
  @media (prefers-reduced-motion: reduce) {
    #MilauraCollectionFaq-{{ section.id }} .milaura-faq__icon,
    #MilauraCollectionFaq-{{ section.id }} .milaura-faq__a {
      transition: none;
    }
  }
  @media screen and (max-width: 768px) {
    #MilauraCollectionFaq-{{ section.id }} {
      padding: var(--milaura-spacing-sm, 20px) var(--milaura-spacing-xs, 14px);
    }
    #MilauraCollectionFaq-{{ section.id }} .milaura-faq__title {
      font-size: 21px;
    }
  }
{%- endstyle -%}

<section
  id="MilauraCollectionFaq-{{ section.id }}"
  class="milaura-collection-faq milaura-section"
  aria-label="{{ section.settings.title | escape }}"
>
  <div class="milaura-faq__inner">
    <h2 class="milaura-faq__title">{{ section.settings.title }}</h2>

    {%- for block in question_blocks -%}
      <div class="milaura-faq__item" {{ block.shopify_attributes }}>
        <button
          class="milaura-faq__q"
          type="button"
          aria-expanded="false"
          aria-controls="MilauraFaqA-{{ section.id }}-{{ forloop.index }}"
        >
          <span>{{ block.settings.question }}</span>
          <svg class="milaura-faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <div class="milaura-faq__a" id="MilauraFaqA-{{ section.id }}-{{ forloop.index }}" data-open="false">
          <div class="milaura-faq__a-inner rte">{{ block.settings.answer }}</div>
        </div>
      </div>
    {%- endfor -%}
  </div>
</section>

<script>
  (function () {
    var root = document.getElementById('MilauraCollectionFaq-{{ section.id }}');
    if (!root) return;
    root.querySelectorAll('.milaura-faq__q').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        var panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) panel.setAttribute('data-open', String(!expanded));
      });
    });
  })();
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {%- for block in question_blocks -%}
    {
      "@type": "Question",
      "name": {{ block.settings.question | json }},
      "acceptedAnswer": {
        "@type": "Answer",
        "text": {{ block.settings.answer | strip_html | json }}
      }
    }{% unless forloop.last %},{% endunless %}
    {%- endfor -%}
  ]
}
</script>
{%- endif -%}

{% schema %}
{
  "name": "Collection FAQ",
  "tag": "section",
  "class": "milaura-section",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Titre",
      "default": "Questions frequentes"
    },
    {
      "type": "color",
      "id": "background_color",
      "label": "Couleur de fond",
      "default": "#f9f7f4"
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
          "type": "richtext",
          "id": "answer",
          "label": "Reponse"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Collection FAQ",
      "blocks": [
        { "type": "question" },
        { "type": "question" },
        { "type": "question" }
      ]
    }
  ]
}
{% endschema %}
```

- [ ] **Step 2 : Valider avec theme check**

Run: `shopify theme check --fail-level error sections/milaura-collection-faq.liquid`
Expected: 0 offense bloquante.

- [ ] **Step 3 : Valider le JSON du schema**

Run:
```bash
ruby -rjson -e 'c=File.read("sections/milaura-collection-faq.liquid"); m=c.match(/\{% schema %\}(.+?)\{% endschema %\}/m); JSON.parse(m[1]); puts "schema JSON OK"'
```
Expected: `schema JSON OK`

- [ ] **Step 4 : Commit**

```bash
git add sections/milaura-collection-faq.liquid
git commit -m "feat(pierre): section FAQ collection avec accordeon accessible + JSON-LD FAQPage"
```

---

## Task 3 : Template page pierre

**Files:**
- Create: `templates/collection.milaura-pierre.json`

- [ ] **Step 1 : Creer le template en assemblant les sections**

Creer `templates/collection.milaura-pierre.json` (base sur `collection.milaura-collection.json`, avec `vertus` ajoute apres le hero et `faq` ajoute avant les crosslinks) :

```json
{
  "sections": {
    "hero": {
      "type": "milaura-collection-hero",
      "settings": {
        "show_breadcrumb": true,
        "show_count": true,
        "show_cursor": true,
        "title_font": "'Dancing Script', cursive",
        "title_size": 27
      }
    },
    "vertus": {
      "type": "milaura-collection-vertus",
      "settings": {
        "background_color": "#ffffff"
      }
    },
    "filters": {
      "type": "milaura-collection-filters",
      "settings": {
        "enable_filtering": true,
        "enable_sorting": true
      }
    },
    "grid": {
      "type": "milaura-collection-grid",
      "settings": {
        "products_per_page": 12,
        "columns": 4,
        "show_vendor": false,
        "show_badges": true
      }
    },
    "faq": {
      "type": "milaura-collection-faq",
      "settings": {
        "title": "Questions frequentes",
        "background_color": "#f9f7f4"
      }
    },
    "crosslinks": {
      "type": "milaura-collection-crosslinks",
      "settings": {
        "title": "Explorez nos univers",
        "menu": "main-menu",
        "show_intentions": true
      }
    },
    "cta": {
      "type": "milaura-collection-cta",
      "settings": {
        "title": "Vous n'avez pas trouve votre pierre ?",
        "text": "Decouvrez notre quiz emotionnel pour trouver la creation qui vous correspond vraiment.",
        "primary_button_label": "Trouver ma pierre idéale",
        "primary_button_link": "shopify://pages/diagnostic-emotionnel",
        "secondary_button_label": "Voir toutes les collections",
        "secondary_button_link": "shopify://collections",
        "title_size": 32,
        "title_color": "#1b1b1b",
        "text_size": 16,
        "text_color": "#666666"
      }
    },
    "reassurance": {
      "type": "milaura-product-reassurance",
      "blocks": {
        "item_1": { "type": "item", "settings": { "icon_type": "emoji", "icon_emoji": "🇫🇷", "icon_name": "", "title": "Artisanat Francais", "description": "Creations faites main en France" } },
        "item_2": { "type": "item", "settings": { "icon_type": "emoji", "icon_emoji": "💎", "icon_name": "", "title": "Pierres Certifiees", "description": "Authenticite garantie" } },
        "item_3": { "type": "item", "settings": { "icon_type": "emoji", "icon_emoji": "🚚", "icon_name": "", "title": "Livraison Offerte", "description": "Des 39€ d'achat" } },
        "item_4": { "type": "item", "settings": { "icon_type": "emoji", "icon_emoji": "💝", "icon_name": "", "title": "Emballage Cadeau", "description": "Offert sur demande" } }
      },
      "block_order": ["item_1", "item_2", "item_3", "item_4"],
      "settings": {
        "background_color": "#f9f7f4",
        "title_size": 14,
        "title_color": "#1a1a1a",
        "subtitle_size": 12,
        "subtitle_color": "#666666",
        "inline_mode": true,
        "padding_top": 16,
        "padding_bottom": 16
      }
    }
  },
  "order": [
    "hero",
    "vertus",
    "filters",
    "grid",
    "faq",
    "crosslinks",
    "cta",
    "reassurance"
  ]
}
```

- [ ] **Step 2 : Valider le JSON du template**

Run: `ruby -rjson -e 'JSON.parse(File.read("templates/collection.milaura-pierre.json")); puts "template JSON OK"'`
Expected: `template JSON OK`

- [ ] **Step 3 : Theme check global (cible sur les nouveaux fichiers + template)**

Run: `shopify theme check --fail-level error`
Expected: 0 offense bloquante (les warnings historiques hors scope sont tolere, verifier qu'aucune nouvelle erreur ne vient des 3 fichiers crees).

- [ ] **Step 4 : Commit**

```bash
git add templates/collection.milaura-pierre.json
git commit -m "feat(pierre): template page pierre (hero + vertus + grid + faq + crosslinks + cta + reassurance)"
```

---

## Task 4 : QA sur theme de preview (PAS live)

**Files:** aucun (operation de deploiement + verification)

- [ ] **Step 1 : Identifier un theme de preview (duplique), jamais le live**

Run: `shopify theme list`
Choisir un theme de developpement/preview existant, ou en creer un par duplication via l'admin. Noter son ID dans `<PREVIEW_THEME_ID>`. **Ne jamais utiliser `190430282075` (live) a cette etape.**

- [ ] **Step 2 : Pousser uniquement les 3 nouveaux fichiers sur le theme de preview**

Run:
```bash
shopify theme push --theme <PREVIEW_THEME_ID> --nodelete --only sections/milaura-collection-vertus.liquid --only sections/milaura-collection-faq.liquid --only templates/collection.milaura-pierre.json
```
Expected: Success, 3 fichiers pousses.

- [ ] **Step 3 : Assigner une collection pierre de test au template (Admin, action Patrice)**

Dans Shopify Admin, sur la collection `par-pierre-amethyste`, choisir le template `milaura-pierre` (menu Theme template de la collection). A faire sur le theme de preview uniquement.

- [ ] **Step 4 : Verifier le rendu live de preview via curl**

Run (remplacer par l'URL preview fournie par `shopify theme push`) :
```bash
curl -s -L "<PREVIEW_URL>/collections/par-pierre-amethyste" -o /tmp/mil_pierre_preview.html
echo "FAQPage present:"; grep -c 'FAQPage' /tmp/mil_pierre_preview.html
echo "Section vertus presente:"; grep -c 'milaura-collection-vertus' /tmp/mil_pierre_preview.html
echo "Section faq presente:"; grep -c 'milaura-collection-faq' /tmp/mil_pierre_preview.html
echo "Pas d'erreur Liquid:"; grep -c 'Liquid error' /tmp/mil_pierre_preview.html
```
Expected: FAQPage >= 1, vertus >= 1, faq >= 1, Liquid error = 0.

- [ ] **Step 5 : Valider le JSON-LD FAQPage genere**

Run:
```bash
ruby -e 'require "json"; h=File.read("/tmp/mil_pierre_preview.html"); m=h.scan(/<script type="application\/ld\+json">(.+?)<\/script>/m).map(&:first); m.each{|b| begin; j=JSON.parse(b); puts "OK: #{Array(j["@type"]).join(",")}"; rescue=>e; puts "INVALID JSON-LD: #{e.message}"; end}'
```
Expected: une ligne `OK: FAQPage` parmi les blocs, aucun `INVALID JSON-LD`.

- [ ] **Step 6 : QA visuel mobile (browse tool ou /browse)**

Verifier sur viewport 390px : pas de debordement horizontal (`scrollWidth == clientWidth`), accordeon FAQ ouvre/ferme, intro vertus lisible. Desktop : layout coherent. Capturer 2 screenshots (mobile + desktop) pour validation Patrice.

- [ ] **Step 7 : Gate de validation Patrice avant live**

Presenter a Patrice : URL preview + 2 screenshots + resultat des checks. **Ne pas pousser live sans son go explicite.** La mise en live (push `--only` vers `190430282075` + assignation du template sur les collections pierre en Admin) se fait dans une etape distincte, apres validation.

---

## Actions hors-DEV (a tracer, pas executees dans ce plan)

Ces actions ne sont pas du code et ne sont pas executees ici. Elles sont listees pour le suivi.

### Quick wins Admin (Patrice ou pipeline OPS)
- [ ] Corriger le SEO title des collections pierre dans Shopify Admin (`Recherche > Modifier le referencement` de la collection). Exemple pour `par-pierre-amethyste` : titre SEO du type "Amethyste : vertus, signification et bijoux | MilAura". Corriger aussi l'accent manquant ("Amethyste" -> "Amethyste" avec accent dans le nom public si souhaite).

### Wave 0 (prerequis Admin, validation Patrice, hors Vague 1)
- [ ] Creer les definitions de metafields de COLLECTION dans Shopify Admin : `milaura.stone_intro` (rich text), `milaura.stone_benefits` (rich text), `milaura.comment_porter` (rich text), `milaura.stone_faq` (selon design retenu). Sans ces definitions, les sections fonctionnent en mode "repli settings" mais le pilotage par le pipeline OPS n'est pas possible.

### OPS (pipeline Camilla/Hermes, hors DEV)
- [ ] Produire le contenu vertus + FAQ par pierre et remplir les metafields de collection. Voir spec, frontiere DEV vs OPS.

---

## Self-Review (couverture spec)

- Spec "intro editoriale (vertus + comment porter)" -> Task 1 (section vertus, metafield-driven).
- Spec "bloc FAQ pierre cable en FAQPage" -> Task 2 (section FAQ + JSON-LD FAQPage). Comble le manque GEO confirme a l'audit.
- Spec "grille produits + reassurance + CTA quiz + cross-sell par intention" -> Task 3 (template assemble grid + reassurance + cta quiz + crosslinks pour le maillage).
- Spec "maillage" -> `milaura-collection-crosslinks` inclus dans le template (Task 3). Le maillage PDP -> pierre et intention -> pierre est en Vague 3 (hors Vague 1, conforme au decoupage en vagues).
- Spec "aggregateRating si avis confirmes" -> retire explicitement (decisions de scope) : pas d'avis reels, schema invalide sinon. A reprendre quand avis Judge.me reels.
- Spec "fix titles/accents collections" -> documente en action Admin (hors DEV, pas de code theme).
- Spec contrainte "mobile-first, vouvoiement, pas de cadratin, push --only, pas de live sans validation" -> respecte dans toutes les tasks + section contraintes.
- Dependance metafields collection inexistants -> gere par fallback gracieux (sections rendent du vide si vide) + tracee en Wave 0.
