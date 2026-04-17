# Milaura Homepage CRO — Pilier Déclencheur — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remonter le score du pilier Déclencheur d'achat de 48/100 vers 65+/100 via CTA unique, garantie visible, FAQ objections, sur le site live milaura.fr, avec mesure Azura à J+7 et rollback possible en < 2 min.

**Architecture:** Surgical live. 3 fichiers modifiés (hero-showcase, trust-bar, index.json) + 1 nouveau (homepage-faq). Zéro refonte visuelle. Backward-compat total sur les settings existants (rollback = vider le customizer, pas besoin de redéployer). Push sur thème unpublished d'abord, QA, puis push live.

**Tech Stack:** Shopify Liquid, Dawn 15.4.0 theme base, Shopify CLI (`shopify theme push`), git. Pas de framework de test automatisé — les "tests" sont des QA manuels sur URL preview Shopify.

**Spec de référence:** `docs/superpowers/specs/2026-04-17-milaura-cro-homepage-declencheur-design.md`

---

## File Structure

### Fichiers à créer
- `sections/milaura-homepage-faq.liquid` — nouvelle section accordéon FAQ homepage (5 questions par défaut, JSON-LD FAQPage)
- `docs/superpowers/specs/2026-04-17-milaura-cro-homepage-baseline.md` — snapshot métriques Azura 7j pré-push pour comparaison J+7

### Fichiers à modifier
- `sections/milaura-hero-showcase.liquid` — update `quiz_cta_label` default + ajout setting `suppress_block_ctas` + ajout setting `primary_heading` / `primary_subheading` + ajout `secondary_links_richtext`
- `sections/milaura-trust-bar.liquid` — ajout d'un block par défaut "Satisfait ou remboursé 30j" en 1ère position du preset
- `templates/index.json` — retirer `hero-conversion` de l'order, ajouter un bloc `milaura-homepage-faq` avant `testimonials`, ajouter block garantie à trust-bar si absent

### Fichiers à ne PAS toucher
- `assets/milaura.css` (zéro refonte style, on réutilise classes existantes)
- `sections/milaura-hero-conversion.liquid` (fichier conservé, juste retiré de l'order index.json)
- Tous les autres sections, snippets, templates, assets.

---

## Task 1: Pre-flight — vérifier existence des routes et collections

**Files:**
- Consult: `templates/page.diagnostic-emotionnel.json` (route `/pages/diagnostic-emotionnel`)
- Consult: Shopify Admin > Collections (via CLI ou manuellement)

- [ ] **Step 1.1 : Vérifier l'existence du template quiz**

Run: `ls -la "templates/page.diagnostic-emotionnel.json"`
Expected: fichier existe, route `/pages/diagnostic-emotionnel` valide.

Si absent : stopper le plan et créer la page d'abord.

- [ ] **Step 1.2 : Vérifier l'existence des collections `pierres` et `bougies`**

Run:
```bash
shopify theme list --store milaura-2 2>/dev/null | head -5
```

Puis via Shopify Admin web ou API : vérifier `/collections/pierres` et `/collections/bougies`.

Si absentes : adapter les secondary_links au Step 3.5 vers les collections existantes (ex : `/collections/all`, `/collections/mineraux`).

**Livrable** : confirmation écrite (dans le commit du Task 2) des URLs définitives à utiliser pour `secondary_links`.

- [ ] **Step 1.3 : Commit**

Rien à committer pour cette tâche (pure vérification). Passer à Task 2.

---

## Task 2: Capturer baseline métriques + créer le doc

**Files:**
- Create: `docs/superpowers/specs/2026-04-17-milaura-cro-homepage-baseline.md`

- [ ] **Step 2.1 : Demander à Karine/Azura les métriques des 7 derniers jours**

Métriques à récupérer depuis Shopify Admin > Analytics > Online store conversion (ou via Azura) :
- Sessions homepage (`/`)
- Total sessions site
- Clics vers `/pages/diagnostic-emotionnel` (depuis homepage si filtrable, sinon total)
- Sessions avec "product added to cart"
- Commandes totales
- Taux de conversion global (commandes / sessions)
- Taux de rebond homepage

Fenêtre : **2026-04-10 → 2026-04-16 inclus** (7 jours pleins pré-push).

- [ ] **Step 2.2 : Créer le doc baseline**

Create file `docs/superpowers/specs/2026-04-17-milaura-cro-homepage-baseline.md` :

```markdown
# Milaura Homepage — Baseline métriques pré-push

> Date snapshot : 2026-04-17
> Fenêtre mesurée : 2026-04-10 au 2026-04-16 (7 jours)
> Source : Shopify Admin Analytics + rapport Azura quotidien

## Métriques

| Métrique | Valeur 7j | Moyenne /jour |
|---|---|---|
| Sessions homepage (/) | [À remplir] | [À remplir] |
| Total sessions site | [À remplir] | [À remplir] |
| Clics vers /pages/diagnostic-emotionnel | [À remplir] | [À remplir] |
| Sessions add-to-cart | [À remplir] | [À remplir] |
| Commandes | [À remplir] | [À remplir] |
| Taux de conversion global | [À remplir] % | - |
| Taux de rebond homepage | [À remplir] % | - |

## Critères GO/NO-GO J+7 (2026-04-24)

- **GO keep** : conversion +5% ou plus OU clics quiz +50% ou plus vs cette baseline
- **Neutre** : conversion ±3%, clics quiz +10% à +50% → garder et itérer
- **ROLLBACK** : conversion -5% ou plus, OU rebond +10% ou plus, OU clics collections -40% ou plus

## Notes

- Volume probablement faible → pas de signif statistique, décision au feeling business
- Azura relève les mêmes métriques chaque matin J+1 à J+7, compare à cette baseline
```

Remplir les 7 valeurs effectives (ne pas laisser les `[À remplir]` — si Azura n'a pas les chiffres exacts, mettre une estimation honnête annotée).

- [ ] **Step 2.3 : Commit**

```bash
git add docs/superpowers/specs/2026-04-17-milaura-cro-homepage-baseline.md
git commit -m "docs(cro): baseline métriques homepage 7j pré-push

Fenêtre 2026-04-10 à 2026-04-16. Référence pour comparaison J+7
(pilier Déclencheur d'achat, audit NeuroCRO).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Créer `sections/milaura-homepage-faq.liquid`

**Files:**
- Create: `sections/milaura-homepage-faq.liquid`

Cette section est inspirée de `milaura-product-faq.liquid` mais simplifiée : pas de logique `product_type`, pas de fallback par type — uniquement blocks répétables avec 5 questions par défaut dans le preset.

- [ ] **Step 3.1 : Créer le fichier avec structure + rendu accordéon**

Create file `sections/milaura-homepage-faq.liquid` with content:

```liquid
{% comment %}
  MILAURA HOMEPAGE FAQ
  Accordéon FAQ homepage, objections universelles.
  SEO : JSON-LD FAQPage scoped à {{ shop.url }}#faq
  Réutilise les classes .milaura-product-faq__* pour cohérence visuelle
{% endcomment %}

<section
  id="MilauraHomepageFaq-{{ section.id }}"
  class="milaura-product-faq milaura-homepage-faq"
  data-section-id="{{ section.id }}"
>
  <div class="milaura-product-faq__container milaura-section-card">

    {%- if section.settings.show_title -%}
      <h2 class="milaura-product-faq__title">
        {{ section.settings.title }}
      </h2>
    {%- endif -%}

    {%- if section.settings.subtitle != blank -%}
      <p class="milaura-homepage-faq__subtitle">{{ section.settings.subtitle }}</p>
    {%- endif -%}

    <div class="milaura-product-faq__accordion">
      {%- for block in section.blocks -%}
        {%- if block.type == 'question' -%}
          <div class="milaura-product-faq__item" {{ block.shopify_attributes }}>
            <button
              type="button"
              class="milaura-product-faq__question"
              data-faq-toggle="{{ forloop.index }}"
              aria-expanded="false"
              aria-controls="faq-answer-{{ section.id }}-{{ forloop.index }}"
            >
              <span>{{ block.settings.question }}</span>
              <svg class="milaura-product-faq__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <div
              id="faq-answer-{{ section.id }}-{{ forloop.index }}"
              class="milaura-product-faq__answer"
              data-faq-answer="{{ forloop.index }}"
              hidden
            >
              <div class="milaura-product-faq__answer-inner">
                {{ block.settings.answer }}
              </div>
            </div>
          </div>
        {%- endif -%}
      {%- endfor -%}
    </div>

  </div>
</section>

{%- if section.settings.enable_schema and section.blocks.size > 0 -%}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "{{ shop.url }}#faq",
    "mainEntity": [
      {%- for block in section.blocks -%}
        {%- if block.type == 'question' -%}
          {
            "@type": "Question",
            "name": {{ block.settings.question | json }},
            "acceptedAnswer": {
              "@type": "Answer",
              "text": {{ block.settings.answer | strip_html | json }}
            }
          }{% unless forloop.last %},{% endunless %}
        {%- endif -%}
      {%- endfor -%}
    ]
  }
  </script>
{%- endif -%}

<style>
  .milaura-homepage-faq__subtitle {
    text-align: center;
    color: var(--milaura-text-light, rgba(27, 27, 27, 0.72));
    font-family: var(--milaura-font-body, 'Lato', sans-serif);
    margin: -16px 0 var(--milaura-spacing-lg, 36px) 0;
  }
</style>

{% schema %}
{
  "name": "Milaura Homepage FAQ",
  "tag": "section",
  "class": "section milaura-homepage-faq-section",
  "enabled_on": {
    "templates": ["index"]
  },
  "settings": [
    {
      "type": "header",
      "content": "Titre"
    },
    {
      "type": "checkbox",
      "id": "show_title",
      "label": "Afficher le titre",
      "default": true
    },
    {
      "type": "text",
      "id": "title",
      "label": "Titre",
      "default": "Vos questions, nos réponses"
    },
    {
      "type": "text",
      "id": "subtitle",
      "label": "Sous-titre (optionnel)",
      "default": "Tout ce que vous devez savoir avant de commander."
    },
    {
      "type": "header",
      "content": "SEO"
    },
    {
      "type": "checkbox",
      "id": "enable_schema",
      "label": "Activer JSON-LD FAQPage (rich results Google)",
      "default": true
    }
  ],
  "blocks": [
    {
      "type": "question",
      "name": "Question",
      "limit": 10,
      "settings": [
        {
          "type": "text",
          "id": "question",
          "label": "Question",
          "default": "Votre question ?"
        },
        {
          "type": "richtext",
          "id": "answer",
          "label": "Réponse",
          "default": "<p>Votre réponse.</p>"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Milaura Homepage FAQ",
      "blocks": [
        {
          "type": "question",
          "settings": {
            "question": "Vos pierres sont-elles authentiques ?",
            "answer": "<p>Oui. Chaque pierre est certifiée naturelle, sélectionnée auprès de fournisseurs vérifiés et accompagnée d'une fiche d'origine. Aucune pierre synthétique, aucune teinture.</p>"
          }
        },
        {
          "type": "question",
          "settings": {
            "question": "Comment savoir quelle pierre choisir ?",
            "answer": "<p>Notre diagnostic émotionnel (quiz 2 min) vous oriente selon votre ressenti actuel. Chaque commande inclut aussi un guide d'usage personnalisé selon votre profil.</p>"
          }
        },
        {
          "type": "question",
          "settings": {
            "question": "Si la pierre ne me convient pas ?",
            "answer": "<p>Vous avez 30 jours pour la retourner. Remboursement intégral, retour gratuit en France métropolitaine. Aucune question posée.</p>"
          }
        },
        {
          "type": "question",
          "settings": {
            "question": "Combien de temps pour la livraison ?",
            "answer": "<p>Expédition sous 48h depuis la France. Livraison 2 à 4 jours ouvrés. Suivi par email à chaque étape.</p>"
          }
        },
        {
          "type": "question",
          "settings": {
            "question": "Les bougies sont-elles artisanales ?",
            "answer": "<p>Oui, coulées à la main dans notre atelier en France. Cire végétale, parfums naturels, mèche coton pure. Aucun additif pétrochimique.</p>"
          }
        }
      ]
    }
  ]
}
{% endschema %}
```

- [ ] **Step 3.2 : Vérifier syntaxe Liquid**

Run:
```bash
shopify theme check sections/milaura-homepage-faq.liquid 2>&1 | tail -20
```
Expected: aucune erreur, warnings cosmétiques acceptables. Si erreurs liquid : les corriger avant de continuer.

- [ ] **Step 3.3 : Commit**

```bash
git add sections/milaura-homepage-faq.liquid
git commit -m "feat(homepage): nouvelle section FAQ objections universelles

Accordéon 5 questions par défaut (authenticité, choix, retour,
livraison, bougies). JSON-LD FAQPage pour rich results Google.
Réutilise les classes .milaura-product-faq__* pour cohérence.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Ajouter badge garantie au preset de `milaura-trust-bar.liquid`

**Files:**
- Modify: `sections/milaura-trust-bar.liquid` (schema presets, lines ~247-282)

Le block type `badge` existe déjà. On ajoute juste un 5ème block par défaut en 1ère position du preset. Zéro changement de rendu liquid, zéro changement de CSS.

- [ ] **Step 4.1 : Ajouter le block garantie au preset**

Modify `sections/milaura-trust-bar.liquid`, dans la section `"presets"`, ajouter le nouveau block en position 1 :

```json
  "presets": [
    {
      "name": "Milaura Trust Bar",
      "blocks": [
        {
          "type": "badge",
          "settings": {
            "icon": "🛡️",
            "text": "Satisfait ou remboursé 30j"
          }
        },
        {
          "type": "badge",
          "settings": {
            "icon": "🇫🇷",
            "text": "Artisanat Français"
          }
        },
        {
          "type": "badge",
          "settings": {
            "icon": "💎",
            "text": "Pierres Certifiées"
          }
        },
        {
          "type": "badge",
          "settings": {
            "icon": "🚚",
            "text": "Livraison Offerte dès 39€"
          }
        },
        {
          "type": "badge",
          "settings": {
            "icon": "💝",
            "text": "Emballage Cadeau"
          }
        }
      ]
    }
  ]
```

Edit avec l'outil Edit sur le bloc `"presets"` existant. Le old_string à remplacer = le tableau `blocks` actuel (4 badges, commençant par "🇫🇷 Artisanat Français"), le new_string = le tableau ci-dessus (5 badges, commençant par "🛡️ Satisfait ou remboursé 30j").

**Important** : cette modif change uniquement le **preset** (valeurs par défaut lors de l'ajout initial). Les instances déjà existantes dans `index.json` gardent leurs blocks actuels — elles devront être éditées dans Task 6.

- [ ] **Step 4.2 : Vérifier syntaxe**

Run:
```bash
shopify theme check sections/milaura-trust-bar.liquid 2>&1 | tail -10
```
Expected: aucune erreur JSON.

- [ ] **Step 4.3 : Commit**

```bash
git add sections/milaura-trust-bar.liquid
git commit -m "feat(trust-bar): ajout badge garantie satisfait ou remboursé 30j

Preset updated (5 badges au lieu de 4). Garantie en 1ère position,
les 4 badges existants conservés. Backward-compat total : les
instances déjà dans les templates gardent leurs blocks actuels.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Refonte CTA hero-showcase — settings + rendu

**Files:**
- Modify: `sections/milaura-hero-showcase.liquid`
  - Schema: autour ligne 1650-2070 (nouveaux settings)
  - Rendu liquid : autour ligne 1284-1349 (CTA rendering)
  - Les settings `quiz_cta_label` (ligne 1872) et `cta_label` par block (ligne 1994) existent déjà — on les garde et on contrôle leur affichage avec un nouveau toggle.

### Stratégie

Plutôt que d'ajouter un gros bloc de nouveaux settings, on fait **3 modifs chirurgicales** :

1. Changer le `default` du setting `quiz_cta_label` existant → "Faire le quiz (2 min) →"
2. Ajouter un NOUVEAU setting `suppress_block_ctas` (checkbox, default true) → masque les CTA par onglet quand coché
3. Ajouter un NOUVEAU setting `secondary_links_richtext` (richtext, default les deux liens collections) → affiché sous le CTA primaire
4. Modifier le rendu liquid pour :
   - Envelopper le block CTA dans `{% unless section.settings.suppress_block_ctas %}...{% endunless %}`
   - Ajouter le rendu de `secondary_links_richtext` sous le quiz CTA existant

- [ ] **Step 5.1 : Lire les zones précises avant édition**

Lire la section schema du hero autour du `quiz_cta_label` (lignes 1860-1900) :

Run:
```bash
sed -n '1860,1900p' "sections/milaura-hero-showcase.liquid"
```
Expected: voir le block de settings contenant `quiz_cta_label` avec son default actuel.

Lire le rendu liquid du CTA (lignes 1280-1360) :

Run:
```bash
sed -n '1280,1360p' "sections/milaura-hero-showcase.liquid"
```
Expected: voir les deux zones de CTA (block.settings.cta_label + section.settings.quiz_cta_label).

Noter les strings exacts pour les Edit des steps suivants.

- [ ] **Step 5.2 : Modifier le default de `quiz_cta_label`**

Edit `sections/milaura-hero-showcase.liquid` :

- old_string : (le default actuel du setting `quiz_cta_label`, à identifier au Step 5.1 — typiquement `"default": "Tester mon profil émotionnel"` ou similaire)
- new_string : `"default": "Faire le quiz (2 min) →"`

Si le default est déjà "Faire le quiz..." ou similaire, pas d'action. Sinon remplacer précisément.

- [ ] **Step 5.3 : Ajouter le setting `suppress_block_ctas`**

Edit `sections/milaura-hero-showcase.liquid` — dans le schema, ajouter un nouveau setting juste APRÈS le setting `quiz_cta_label`. Repérer la fermeture du bloc `quiz_cta_label` (un `},`) et y insérer :

```json
    {
      "type": "header",
      "content": "CRO — CTA unique (recommandé)"
    },
    {
      "type": "checkbox",
      "id": "suppress_block_ctas",
      "label": "Masquer les boutons par onglet univers (1 seul CTA primaire)",
      "info": "Active pour laisser UNIQUEMENT le bouton quiz en CTA primaire. Recommandé pour réduire la paralysie décisionnelle.",
      "default": true
    },
    {
      "type": "richtext",
      "id": "secondary_links_richtext",
      "label": "Liens secondaires sous le CTA primaire (optionnel)",
      "info": "Affichés en texte discret sous le bouton quiz.",
      "default": "<p>Ou : <a href=\"/collections/pierres\">explorer les pierres</a> · <a href=\"/collections/bougies\">voir les bougies</a></p>"
    },
    {
      "type": "text",
      "id": "primary_heading",
      "label": "Titre principal (override du tab par défaut)",
      "info": "Laisser vide pour conserver le titre actuel du hero.",
      "default": "Trouvez la pierre qui vous ressemble, en 2 minutes."
    },
    {
      "type": "text",
      "id": "primary_subheading",
      "label": "Sous-titre principal (override)",
      "info": "Laisser vide pour conserver le sous-titre actuel.",
      "default": "Pierres naturelles certifiées, sélectionnées à la main. Livrées avec un guide d'usage personnalisé."
    },
```

**IMPORTANT** : les URLs `/collections/pierres` et `/collections/bougies` doivent avoir été confirmées au Task 1.2. Si elles n'existent pas, remplacer par les URLs réelles (ex : `/collections/mineraux`, `/collections/all`) AVANT d'insérer ce bloc.

- [ ] **Step 5.4 : Modifier le rendu liquid des CTA par onglet (suppression conditionnelle)**

Edit `sections/milaura-hero-showcase.liquid`, autour ligne 1314.

Identifier le bloc :
```liquid
{%- if block.settings.cta_link != blank and block.settings.cta_label != blank -%}
  [...render du CTA du block...]
{%- endif -%}
```

L'envelopper dans un `unless` :
```liquid
{%- unless section.settings.suppress_block_ctas -%}
  {%- if block.settings.cta_link != blank and block.settings.cta_label != blank -%}
    [...render du CTA du block — inchangé...]
  {%- endif -%}
{%- endunless -%}
```

Si `suppress_block_ctas` est `true` (default), les 4 boutons par onglet disparaissent du rendu. Seul le CTA quiz existant reste visible.

- [ ] **Step 5.5 : Ajouter le rendu de `secondary_links_richtext` sous le CTA quiz**

Edit `sections/milaura-hero-showcase.liquid`, après la ligne rendant le CTA quiz (autour ligne 1349, le `<span class="hero-quiz-cta-text">...</span>`).

Repérer le `</button>` ou `</a>` de fermeture du CTA quiz, et juste APRÈS sa fermeture (hors du bouton), ajouter :

```liquid
{%- if section.settings.secondary_links_richtext != blank -%}
  <div class="hero-quiz-secondary-links">
    {{ section.settings.secondary_links_richtext }}
  </div>
{%- endif -%}
```

Puis ajouter le CSS minimal pour ces liens dans le bloc `{% style %}` en haut du fichier (autour ligne 40) ou dans un `<style>` inline après :

```css
.hero-quiz-secondary-links {
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
  color: rgba(27, 27, 27, 0.65);
}
.hero-quiz-secondary-links a {
  color: rgba(27, 27, 27, 0.85);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.hero-quiz-secondary-links a:hover {
  color: var(--milaura-gold-dark, #8F723A);
}
```

- [ ] **Step 5.6 : Vérifier syntaxe**

Run:
```bash
shopify theme check sections/milaura-hero-showcase.liquid 2>&1 | tail -20
```
Expected: aucune erreur. Warnings cosmétiques acceptables.

- [ ] **Step 5.7 : Commit**

```bash
git add sections/milaura-hero-showcase.liquid
git commit -m "feat(hero): CTA primaire unique + suppression CTA par onglet

Nouveau setting suppress_block_ctas (default true) masque les 4
boutons par onglet univers. Le quiz CTA existant devient le seul
CTA primaire, avec liens secondaires texte sous le bouton. Nouveau
copy : 'Faire le quiz (2 min) →'. Titre/sous-titre override via
primary_heading / primary_subheading. Backward-compat : tout
désactivable via le customizer sans redéploiement.

Pilier Déclencheur d'achat (audit NeuroCRO 2026-04-16).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Mettre à jour `templates/index.json`

**Files:**
- Modify: `templates/index.json`

### Changements requis
1. Dans l'instance `milaura-trust-bar`, ajouter le block guarantee en 1ère position (l'instance existante ne bénéficie pas du preset nouveau).
2. Supprimer le bloc `milaura-hero-conversion` de l'objet `sections` ET de l'array `order`.
3. Ajouter une nouvelle section `milaura-homepage-faq` dans `sections`, insérée dans `order` juste avant `milaura-testimonials`.

- [ ] **Step 6.1 : Localiser les clés dans index.json**

Run:
```bash
grep -n "milaura-trust-bar\|milaura-hero-conversion\|milaura-testimonials" "templates/index.json"
```
Expected: trois lignes avec les clés de sections correspondantes. Noter :
- Clé de la section trust-bar (ex : `"milaura-trust-bar"` ou `"milaura_trust_bar_XXXXX"`)
- Clé de hero-conversion
- Clé de testimonials + sa position dans `order`

- [ ] **Step 6.2 : Ajouter le block garantie à l'instance trust-bar**

Edit `templates/index.json`. Dans l'objet `sections[<clé-trust-bar>].blocks`, ajouter un nouveau block en 1ère position :

```json
"guarantee_badge": {
  "type": "badge",
  "settings": {
    "icon": "🛡️",
    "text": "Satisfait ou remboursé 30j"
  }
},
```

Et dans l'array `block_order` de cette instance, ajouter `"guarantee_badge"` en 1ère position.

Le format exact dépend du JSON actuel — utiliser l'outil Edit avec un old_string qui inclut suffisamment de contexte pour être unique (ex : les 2 lignes au début du bloc trust-bar blocks).

- [ ] **Step 6.3 : Retirer `milaura-hero-conversion` de `order`**

Edit `templates/index.json`. Dans le tableau `order`, retirer l'entrée correspondant à hero-conversion.

Exemple de transformation :
```json
// Avant
"order": [
  "milaura-hero-showcase",
  "milaura-trust-bar",
  "milaura-hero-conversion",
  "milaura-featured-products",
  ...
]
// Après
"order": [
  "milaura-hero-showcase",
  "milaura-trust-bar",
  "milaura-featured-products",
  ...
]
```

**Ne PAS supprimer** la définition de l'objet dans `sections` — on la garde pour permettre un rollback rapide. La section sera simplement ignorée par Shopify.

- [ ] **Step 6.4 : Ajouter la section `milaura-homepage-faq`**

Edit `templates/index.json`. Dans `sections`, ajouter un nouvel objet :

```json
"milaura-homepage-faq": {
  "type": "milaura-homepage-faq",
  "blocks": {
    "faq-1": {
      "type": "question",
      "settings": {
        "question": "Vos pierres sont-elles authentiques ?",
        "answer": "<p>Oui. Chaque pierre est certifiée naturelle, sélectionnée auprès de fournisseurs vérifiés et accompagnée d'une fiche d'origine. Aucune pierre synthétique, aucune teinture.</p>"
      }
    },
    "faq-2": {
      "type": "question",
      "settings": {
        "question": "Comment savoir quelle pierre choisir ?",
        "answer": "<p>Notre diagnostic émotionnel (quiz 2 min) vous oriente selon votre ressenti actuel. Chaque commande inclut aussi un guide d'usage personnalisé selon votre profil.</p>"
      }
    },
    "faq-3": {
      "type": "question",
      "settings": {
        "question": "Si la pierre ne me convient pas ?",
        "answer": "<p>Vous avez 30 jours pour la retourner. Remboursement intégral, retour gratuit en France métropolitaine. Aucune question posée.</p>"
      }
    },
    "faq-4": {
      "type": "question",
      "settings": {
        "question": "Combien de temps pour la livraison ?",
        "answer": "<p>Expédition sous 48h depuis la France. Livraison 2 à 4 jours ouvrés. Suivi par email à chaque étape.</p>"
      }
    },
    "faq-5": {
      "type": "question",
      "settings": {
        "question": "Les bougies sont-elles artisanales ?",
        "answer": "<p>Oui, coulées à la main dans notre atelier en France. Cire végétale, parfums naturels, mèche coton pure. Aucun additif pétrochimique.</p>"
      }
    }
  },
  "block_order": ["faq-1", "faq-2", "faq-3", "faq-4", "faq-5"],
  "settings": {
    "show_title": true,
    "title": "Vos questions, nos réponses",
    "subtitle": "Tout ce que vous devez savoir avant de commander.",
    "enable_schema": true
  }
},
```

Puis dans `order`, insérer `"milaura-homepage-faq"` juste AVANT `"milaura-testimonials"`.

- [ ] **Step 6.5 : Valider le JSON**

Run:
```bash
python3 -m json.tool "templates/index.json" > /dev/null && echo "JSON valide" || echo "JSON INVALIDE"
```
Expected: `JSON valide`. Si invalide, Edit à nouveau pour corriger la syntaxe.

Run aussi :
```bash
shopify theme check templates/index.json 2>&1 | tail -10
```
Expected: aucune erreur critique.

- [ ] **Step 6.6 : Commit**

```bash
git add templates/index.json
git commit -m "chore(homepage): retire hero-conversion, ajoute FAQ + garantie

- milaura-hero-conversion retiré de order (fichier source conservé)
- milaura-homepage-faq ajouté avant testimonials (5 questions défaut)
- milaura-trust-bar : badge garantie 30j ajouté en 1ère position
  sur l'instance homepage (preset déjà modifié, cette instance
  existait avant donc édition manuelle)

Pilier Déclencheur d'achat (audit NeuroCRO 2026-04-16).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Push sur thème brouillon + QA complet

**Files:** aucun (déploiement)

- [ ] **Step 7.1 : Identifier le thème brouillon cible**

Run:
```bash
shopify theme list --store milaura-2
```
Expected: liste des thèmes. Identifier un thème avec role "unpublished" utilisable pour le preview, ou en créer un :

Si aucun unpublished disponible, créer un duplicata du thème live :
```bash
# via Shopify Admin > Online Store > Themes > Duplicate (manuel)
# OU via CLI si supporté
```

Noter le `THEME_ID` du thème brouillon.

- [ ] **Step 7.2 : Push sur le thème brouillon**

Run:
```bash
shopify theme push --store milaura-2 --theme <THEME_ID_BROUILLON>
```

**INTERDIT** : utiliser `--allow-live` à cette étape. Le push doit aller sur un thème unpublished.

Expected: déploiement sans erreur. Noter l'URL preview générée.

- [ ] **Step 7.3 : QA desktop — checklist**

Ouvrir l'URL preview dans Chrome desktop (1440+ px). Vérifier visuellement :

- [ ] Hero affiche UN SEUL CTA primaire : "Faire le quiz (2 min) →"
- [ ] Les 4 onglets univers n'affichent PLUS de bouton sous la description
- [ ] Sous le CTA quiz, les 2 liens secondaires texte sont visibles et cliquables (pierres / bougies)
- [ ] Le titre et sous-titre du hero correspondent au nouveau copy (si `primary_heading` est rempli)
- [ ] Trust-bar juste sous le hero affiche 5 badges, garantie "🛡️ Satisfait ou remboursé 30j" en 1er
- [ ] Le clic sur le CTA quiz route vers `/pages/diagnostic-emotionnel`
- [ ] Les liens secondaires routent vers `/collections/pierres` et `/collections/bougies` (200 OK, pas de 404)
- [ ] Plus bas dans la page, avant les témoignages, la section FAQ s'affiche avec 5 questions accordéon cliquables
- [ ] Section hero-conversion absente
- [ ] Aucune régression visible sur les autres sections

- [ ] **Step 7.4 : QA mobile — checklist**

Ouvrir l'URL preview sur mobile réel (iPhone) OU via Chrome DevTools device mode (iPhone SE 375px, iPhone 14 Pro).

- [ ] CTA primaire "Faire le quiz..." lisible et cliquable sur iPhone SE (pas de débordement texte)
- [ ] Trust-bar 5 badges : wrap OK (2 lignes acceptables), lisibles
- [ ] FAQ accordéon fonctionne au touch
- [ ] Aucun scroll horizontal parasite

- [ ] **Step 7.5 : QA schema JSON-LD**

Tester le JSON-LD FAQPage :
- Copier le HTML rendu de la page preview
- Coller dans https://search.google.com/test/rich-results
- Expected: FAQPage détecté, 5 questions reconnues, zéro erreur

Alternativement, inspecter la page (Ctrl+U) et chercher `"@type": "FAQPage"` pour valider que le script est bien présent.

- [ ] **Step 7.6 : Si QA échoue : revert + investigate**

Si une des vérifications ci-dessus échoue : ne PAS push en live. Retourner au Task concerné, corriger, re-commit, re-push sur le thème brouillon, re-QA.

Si QA OK : passer au Task 8.

---

## Task 8: Push en production + smoke test

**Files:** aucun (déploiement)

- [ ] **Step 8.1 : Confirmer l'heure de push**

Idéal : pousser en heure creuse (matin tôt ou nuit). Éviter les pics de trafic probables (soir 19-22h).

Vérifier qu'il n'y a aucune commande en cours de checkout visible côté Shopify Admin > Orders. Si oui, attendre quelques minutes.

- [ ] **Step 8.2 : Push vers le thème live**

Run:
```bash
shopify theme push --store milaura-2 --theme 190430282075 --allow-live
```

**Attention** : `--allow-live` est requis mais c'est l'étape irréversible sans revert. Seulement après Task 7 validé.

Expected: déploiement sans erreur sur milaura.fr.

- [ ] **Step 8.3 : Smoke test production**

Ouvrir https://milaura.fr dans un onglet en navigation privée (cache vide). Vérifier la même checklist qu'au Step 7.3 mais sur le live :

- [ ] Hero OK, CTA unique visible
- [ ] Trust-bar 5 badges
- [ ] FAQ présente avant testimonials
- [ ] Clic CTA quiz → `/pages/diagnostic-emotionnel` fonctionne
- [ ] Ajout au panier d'un produit fonctionne toujours (tester 1 produit au hasard)
- [ ] Checkout fonctionne toujours (pousser 1 fois le "Commander" pour arriver à Shopify checkout, sans finaliser)

Si smoke test échoue : **rollback immédiat** (Step 8.4).

- [ ] **Step 8.4 : [Conditionnel] Rollback si smoke test échoue**

Si une régression bloque une fonction critique (checkout cassé, 500 errors, page blanche) :

```bash
# Revert des 4 commits de modif
cd "/Users/paesano/Documents/MilAura website/dawn-X-milaura"
git revert HEAD~3..HEAD --no-edit  # revert Task 6, 5, 4, 3 (adapter le range selon les commits)
shopify theme push --store milaura-2 --theme 190430282075 --allow-live
```

Temps total : < 2 min. Puis re-diagnostiquer le problème hors-prod.

- [ ] **Step 8.5 : Commit tag de release**

Si smoke test OK :
```bash
git tag -a cro-declencheur-v1 -m "Release CRO pilier Déclencheur — pushed prod 2026-04-17"
git push origin cro-declencheur-v1
```

---

## Task 9: Brief Azura pour mesure J+7

**Files:**
- Create/Modify: le brief WhatsApp d'Azura (hors du repo, à faire via canal normal)

- [ ] **Step 9.1 : Rédiger le message à Azura / Karine**

Envoyer (WhatsApp ou canal habituel) :

```
Focus mesure prochains 7 jours (jusqu'au 2026-04-24) :

Compare chaque matin aux 7 jours pré-push (fenêtre 2026-04-10 au 2026-04-16,
chiffres dans docs/superpowers/specs/2026-04-17-milaura-cro-homepage-baseline.md).

Remonte en priorité :
1. Clics vers /pages/diagnostic-emotionnel (quiz entries)
2. Sessions avec add-to-cart
3. Commandes totales
4. Taux de conversion global

Si à J+3 : chute de conversion >5% ou rebond +10% → me notifier immédiatement.
Si à J+7 : on décide ensemble GO keep / itérer / rollback.
```

- [ ] **Step 9.2 : Noter la date de review J+7**

Ajouter dans calendrier ou todo : **Review J+7 = 2026-04-24**.

Checklist à préparer pour ce jour-là :
- [ ] Récupérer les 7 derniers jours de métriques Azura
- [ ] Comparer à la baseline
- [ ] Appliquer les critères GO / Neutre / ROLLBACK
- [ ] Si ROLLBACK : exécuter Step 8.4
- [ ] Si GO : commencer à planifier Phase 2 (pilier Motivation + Capacité cognitive)

---

## Self-Review Checklist (post-plan-creation)

Après avoir écrit ce plan, vérifier :

- [x] **Couverture spec** : chaque section du spec est couverte par au moins un task ci-dessus (hero refactor → Task 5, FAQ → Task 3, trust-bar → Task 4, reorder index → Task 6, mesure → Tasks 2 + 9, rollback → Task 8.4).
- [x] **Placeholders** : les `[À remplir]` du Step 2.2 sont intentionnels (valeurs humaines). Pas d'autres TBD/TODO. Le `<THEME_ID_BROUILLON>` du Step 7.1 est nommé comme variable, pas un placeholder caché.
- [x] **Cohérence types** : `suppress_block_ctas`, `primary_heading`, `primary_subheading`, `secondary_links_richtext` sont cohérents entre Step 5.3 et Step 5.4/5.5.
- [x] **Routes** : `/pages/diagnostic-emotionnel` confirmée au Task 1.1. `/collections/pierres` et `/collections/bougies` à confirmer au Task 1.2, avec instruction explicite de remplacer si absentes.
- [x] **Commits fréquents** : chaque task a son commit, 6 commits logiques au total + 1 tag.

---

## Phase 2 (hors scope — si GO J+7)

Plan de suite possible si cette phase 1 donne un GO :
- Pilier Motivation : réécriture descriptions produits format "Bénéfice + preuve" + témoignages enrichis
- Pilier Capacité cognitive : scénarios d'usage concrets dans benefits-explorer + glossaire infobulles
- Refonte structure : passer de 13 à 7 sections homepage (supprimer doublons featured-products, réduire image-text)
