# Système de Recommandations Milaura — Spécification Complète

> Document généré lors de la session de brainstorming du 6 janvier 2026
> Statut : **Validé — Prêt pour implémentation**

---

## Table des matières

1. [Principes fondateurs](#1-principes-fondateurs)
2. [Architecture par point de contact](#2-architecture-par-point-de-contact)
3. [Logique de recommandation](#3-logique-de-recommandation)
4. [Détail par point de contact](#4-détail-par-point-de-contact)
5. [Composant Card Reco](#5-composant-card-reco)
6. [Structure données Shopify](#6-structure-données-shopify)
7. [Implémentation technique](#7-implémentation-technique)
8. [Gestion des cas limites](#8-gestion-des-cas-limites)
9. [Roadmap V1 → V2](#9-roadmap-v1--v2)
10. [Checklist implémentation](#10-checklist-implémentation)

---

## 1. Principes fondateurs

### 1.1 Règles d'or

| Principe | Règle absolue |
|----------|---------------|
| **Pierre = clé d'entrée** | Toute recommandation part de la pierre ou de l'énergie. Scale à 2000+ produits. |
| **Bijou-first** | Le bijou est le cœur du catalogue. La bougie est le produit d'appel via le quiz. |
| **Quiz = bougies uniquement** | Le quiz recommande 1 bougie, jamais un autre type de produit. |
| **2 produits max** | Jamais plus. Au-delà = paralysie de décision. |
| **Mobile-first** | Cards compactes, ajout direct, 2 visibles max à l'écran. |

### 1.2 Priorité des règles de recommandation

```
PRIORITÉ 1 : Même pierre (stone_handle)
     ↓ (si pas de résultat ou déjà affiché)
PRIORITÉ 2 : Même énergie (energy_handle) — pour produits sans pierre
     ↓ (si pas de résultat)
PRIORITÉ 3 : Type croisé (bijou → bougie si profil lié)
     ↓ (si pas de résultat)
PRIORITÉ 4 : Même profil émotionnel (si metafield dispo)
     ↓ (si pas de résultat)
FALLBACK : Bestsellers disponibles
```

### 1.3 Ce que le système ne fait PAS en V1

- ❌ Collections automatiques par pierre (V1.5)
- ❌ Recommandations post-achat sur page confirmation (V2)
- ❌ Emails de recommandation automatisés (V2)
- ❌ Complémentarité émotionnelle avancée (V2, quand data disponible)

---

## 2. Architecture par point de contact

### 2.1 Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────────┐
│                         V1 — PRIORITAIRE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  A. PAGE PRODUIT       B. RÉSULTAT QUIZ      C. PANIER         │
│  ┌─────────────┐       ┌─────────────┐       ┌─────────────┐   │
│  │ 2 produits  │       │ 1 bougie    │       │ 1-2 produits│   │
│  │ même pierre │       │ + 1 bijou   │       │ même pierre │   │
│  │ type croisé │       │ même pierre │       │ ou bestsell │   │
│  └─────────────┘       └─────────────┘       └─────────────┘   │
│                                                                 │
│  F. DASHBOARD CLIENT                                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Basé sur profil quiz + historique achats               │   │
│  │ 2 produits max                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                         V2 — PLANIFIÉ                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  D. POST-ACHAT                         E. EMAIL                 │
│  ┌─────────────┐                    ┌─────────────┐            │
│  │ Confirmation│                    │ J+7, J+30   │            │
│  │ Cross-sell  │                    │ Relance     │            │
│  └─────────────┘                    └─────────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Récapitulatif

| Point de contact | Version | Nb recos | Logique principale |
|------------------|---------|----------|-------------------|
| Page produit | V1 | 2 | Même pierre + type croisé |
| Résultat quiz | V1 | 1+1 | 1 bougie (résultat) + 1 bijou même pierre |
| Panier | V1 | 1-2 | Même pierre que panier + bestsellers |
| Dashboard | V1 | 2 | Basé profil + historique |
| Post-achat | V2 | 2 | Cross-sell complémentaire |
| Email | V2 | 1-2 | Séquence J+7, J+30, J+60 |

---

## 3. Logique de recommandation

### 3.1 Matrice par type de produit affiché

| Produit affiché | Reco 1 (priorité) | Reco 2 | Notes |
|-----------------|-------------------|--------|-------|
| **Bijou** | Bijou même pierre (autre type) | Bijou même pierre (même type, autre modèle) | Type croisé : bracelet → collier |
| **Bijou avec profil** | Bijou même pierre | Bougie du profil | Profil = metafield lié |
| **Bougie** | Bijou même pierre | Bijou même pierre (autre type) | Monétisation bijou |
| **Sauge / sans pierre** | Bijou même `energy_handle` | Bougie même `energy_handle` | Configurable par metafield |
| **Coffret** | Bijou complémentaire | Bougie complémentaire | Basé sur contenu du coffret |

### 3.2 Produits sans pierre : `energy_handle`

Pour les produits sans pierre (sauge, encens, certains coffrets), on utilise un metafield `energy_handle` qui pointe vers une énergie/intention configurable.

**Exemples :**
| Produit | energy_handle | Recos générées |
|---------|---------------|----------------|
| Sauge blanche | `protection` | Bijoux Obsidienne, Bougie Protection |
| Encens purification | `serenite` | Bijoux Améthyste, Bougie Sérénité |
| Coffret découverte | `reconfort` | Bijoux Calcédoine |

**Avantage** : Pas de mapping figé. Chaque produit peut être configuré individuellement.

### 3.3 Fallback bestsellers

Quand les règles prioritaires ne donnent pas 2 résultats :

```
SI recos.length < 2:
  compléter avec bestsellers
  .filter(disponibles)
  .filter(pas déjà dans recos)
  .filter(pas le produit actuel)
  .limit(2 - recos.length)
```

**Identification bestsellers** : Metafield `is_bestseller: true` sur les produits concernés.

---

## 4. Détail par point de contact

### 4.1 Page Produit (A)

**Emplacement** : Section "Complétez votre rituel" (section 10 du template produit)

#### Sur un bijou

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  COMPLÉTEZ VOTRE RITUEL                                         │
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐                    │
│  │  [COLLIER        │  │  [BAGUE          │                    │
│  │   CALCÉDOINE]    │  │   CALCÉDOINE]    │                    │
│  │  59€             │  │  39€             │                    │
│  │  [+ Ajouter]     │  │  [+ Ajouter]     │                    │
│  └──────────────────┘  └──────────────────┘                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Logique :**
```
produit.type == bijou

stone = produit.metafields.milaura.stone_handle
type_actuel = produit.metafields.milaura.product_type_handle

reco_1 = chercher bijou où:
  - stone_handle == stone
  - product_type_handle != type_actuel
  - available == true
  - id != produit.id

reco_2 = chercher bijou où:
  - stone_handle == stone
  - id != produit.id
  - id != reco_1.id
  - available == true

SI produit.metafields.milaura.emotional_profile existe:
  profile = produit.metafields.milaura.emotional_profile
  reco_2 = bougie du profil (remplace)
```

#### Sur une bougie

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  PORTEZ VOTRE INTENTION                                         │
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐                    │
│  │  [BRACELET       │  │  [COLLIER        │                    │
│  │   CALCÉDOINE]    │  │   CALCÉDOINE]    │                    │
│  │  39€             │  │  59€             │                    │
│  │  [+ Ajouter]     │  │  [+ Ajouter]     │                    │
│  └──────────────────┘  └──────────────────┘                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Logique :**
```
produit.type == bougie

stone = produit.metafields.milaura.stone_handle

reco_1 = chercher bijou où:
  - stone_handle == stone
  - product_type_handle == "bracelet" (priorité) OU premier dispo
  - available == true

reco_2 = chercher bijou où:
  - stone_handle == stone
  - product_type_handle != reco_1.type
  - available == true
```

#### Sur un produit sans pierre (sauge, etc.)

**Logique :**
```
produit.type == sauge OU stone_handle == null

energy = produit.metafields.milaura.energy_handle

// Mapper energy vers stone
stone_mapping = {
  "protection": "obsidienne",
  "serenite": "amethyste",
  "reconfort": "calcedoine",
  "elegance": "quartz-rose",
  "joie": "aventurine"
}

stone = stone_mapping[energy]

// Suite identique aux autres produits
reco_1 = bijou stone_handle == stone
reco_2 = bougie stone_handle == stone OU bijou autre type
```

---

### 4.2 Page Résultat Quiz (B)

**Contexte** : L'utilisateur a terminé le quiz. La bougie est le produit principal. On suggère 1 bijou complémentaire.

**Hiérarchie** : Focus sur la bougie (CTA principal) + 1 bijou en suggestion secondaire.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [SECTIONS RÉVÉLATION BOUGIE, EXPLICATION, RITUEL, CTA...]     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PORTEZ VOTRE INTENTION                                         │
│                                                                 │
│  La Calcédoine bleue de votre bougie existe aussi              │
│  en bijou, pour vous accompagner au quotidien.                 │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                                                          │  │
│  │  [IMAGE BRACELET]                                        │  │
│  │                                                          │  │
│  │  BRACELET CALCÉDOINE                                     │  │
│  │  "Portez votre réconfort"                                │  │
│  │                                                          │  │
│  │  39€                    [+ AJOUTER AU PANIER]            │  │
│  │                                                          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  [Voir tous les bijoux Calcédoine →]                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Logique :**
```
profile = résultat_quiz (ex: "reconfort")
bougie = bougie du profil (produit principal, déjà affiché au-dessus)
stone = profile.stone (ex: "calcedoine")

reco_bijou = chercher bijou où:
  - stone_handle == stone
  - product_type_handle == "bracelet" (priorité)
  - available == true

SI reco_bijou == null:
  reco_bijou = bestseller bijou disponible
```

**Pourquoi 1 seul bijou ?**
- Focus sur la bougie (résultat du quiz)
- 1 suggestion = claire, pas de surcharge
- Lien "Voir tous" pour ceux qui veulent explorer

---

### 4.3 Panier (C)

**Objectif** : Dernière chance d'augmenter le panier, sans friction.

#### Mobile

```
┌─────────────────────────────────┐
│  VOTRE PANIER                   │
│                                 │
│  ┌───────────────────────────┐  │
│  │ Bracelet Calcédoine  39€  │  │
│  │ Qté: 1           [Suppr]  │  │
│  └───────────────────────────┘  │
│                                 │
│  ─────────────────────────────  │
│                                 │
│  AVANT DE FINALISER             │
│                                 │
│  ┌────────────┐ ┌────────────┐  │
│  │ [COLLIER]  │ │ [BOUGIE]   │  │
│  │ Calcédoine │ │ Réconfort  │  │
│  │ 59€        │ │ 49€        │  │
│  │ [+Ajouter] │ │ [+Ajouter] │  │
│  └────────────┘ └────────────┘  │
│                                 │
│  ─────────────────────────────  │
│                                 │
│  Sous-total: 39€                │
│  [COMMANDER]                    │
│                                 │
└─────────────────────────────────┘
```

**Logique :**
```
produits_panier = cart.items

// Extraire les pierres uniques du panier
pierres_panier = produits_panier
  .map(p => p.metafields.milaura.stone_handle)
  .filter(Boolean)
  .unique()

// Extraire les types déjà dans le panier par pierre
types_par_pierre = {}
POUR CHAQUE p IN produits_panier:
  stone = p.metafields.milaura.stone_handle
  type = p.metafields.milaura.product_type_handle
  SI stone:
    types_par_pierre[stone].push(type)

recos = []

// Pour chaque pierre du panier, recommander ce qui manque
POUR CHAQUE stone IN pierres_panier:
  types_deja = types_par_pierre[stone]

  // Si pas de bijou de cette pierre → recommander bijou
  SI !types_deja.includes_any(['bracelet', 'collier', 'bague']):
    ajouter bijou stone à recos

  // Si pas de bougie de cette pierre → recommander bougie
  SI !types_deja.includes('bougie'):
    ajouter bougie stone à recos

  SI recos.length >= 2: break

// Si pas assez de recos, compléter avec bestsellers
SI recos.length < 2:
  bestsellers = produits.is_bestseller == true
    .filter(available)
    .filter(pas dans panier)
    .filter(pas dans recos)

  recos += bestsellers.slice(0, 2 - recos.length)

recos = recos.slice(0, 2)
```

**Règles spéciales :**
- Jamais recommander un produit déjà dans le panier
- Si panier contient bijou + bougie même pierre → pas de reco pour cette pierre
- Prioriser la pierre du produit le plus cher dans le panier

---

### 4.4 Dashboard Client (F)

**Contexte** : L'utilisateur a un compte, potentiellement un résultat quiz et un historique d'achats.

```
┌─────────────────────────────────────────────────────────────────┐
│  MON ESPACE MILAURA                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Section Ma bougie / Refaire le quiz...]                      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  POUR VOUS                                                      │
│                                                                 │
│  Basé sur votre profil Réconfort                               │
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐                    │
│  │  [BRACELET       │  │  [COLLIER        │                    │
│  │   CALCÉDOINE]    │  │   CALCÉDOINE]    │                    │
│  │  39€             │  │  59€             │                    │
│  │  [Découvrir]     │  │  [Découvrir]     │                    │
│  └──────────────────┘  └──────────────────┘                    │
│                                                                 │
│  [Explorer tous les bijoux →]                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Logique :**
```
SI customer.metafields.milaura.quiz_result existe:
  profile = customer.metafields.milaura.quiz_result
  stone = profile.stone

  // Récupérer produits déjà achetés
  deja_achetes = customer.orders.flatMap(o => o.line_items.product_id)

  recos = chercher bijoux où:
    - stone_handle == stone
    - available == true
    - id NOT IN deja_achetes
  .limit(2)

SINON:
  // Pas de quiz → bestsellers
  recos = bestsellers.filter(available).limit(2)
```

---

## 5. Composant Card Reco

### 5.1 Design mobile-first

```
┌─────────────────────────────────┐
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │      [IMAGE PRODUIT]      │  │
│  │       Ratio 1:1           │  │
│  │       160x160px           │  │
│  │                           │  │
│  └───────────────────────────┘  │
│                                 │
│  Bracelet Calcédoine            │  ← 14px, 2 lignes max
│  39€                            │  ← 16px, bold
│                                 │
│  [     + AJOUTER     ]          │  ← 44px height, full width
│                                 │
└─────────────────────────────────┘

Largeur totale: 160px mobile / 200px desktop
```

### 5.2 Spécifications

| Élément | Mobile | Desktop |
|---------|--------|---------|
| **Largeur card** | 160px | 200px |
| **Image** | 1:1, 160x160, lazy load | 200x200 |
| **Nom produit** | 14px, 2 lignes max, ellipsis | 16px |
| **Prix** | 16px, font-weight 600 | 18px |
| **Bouton** | 44px height, 100% width | Idem |
| **Gap entre cards** | 12px | 16px |
| **Container** | Scroll horizontal | Grille 2 colonnes |

### 5.3 États du bouton

| État | Label | Style |
|------|-------|-------|
| **Default** | "+ Ajouter" | Background doré, texte blanc |
| **Loading** | Spinner | Même background, spinner blanc |
| **Success** | "✓ Ajouté" | Background vert, 2s puis reset |
| **Rupture** | "Indisponible" | Grisé, désactivé |

### 5.4 Comportement scroll mobile

```css
.milaura-recos-container {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 8px; /* pour la scrollbar */
}

.milaura-reco-card {
  flex: 0 0 160px;
  scroll-snap-align: start;
}

/* Desktop : grille */
@media (min-width: 768px) {
  .milaura-recos-container {
    display: grid;
    grid-template-columns: repeat(2, 200px);
    overflow-x: visible;
  }
}
```

---

## 6. Structure données Shopify

### 6.1 Metafields produit

| Namespace | Key | Type | Description | Obligatoire |
|-----------|-----|------|-------------|-------------|
| `milaura` | `stone_handle` | `single_line_text_field` | Handle normalisé de la pierre | Oui (bijoux, bougies) |
| `milaura` | `energy_handle` | `single_line_text_field` | Handle d'énergie/intention (sauge, etc.) | Si pas de pierre |
| `milaura` | `product_type_handle` | `single_line_text_field` | Type normalisé (bracelet, collier, bougie...) | Oui |
| `milaura` | `emotional_profile` | `metaobject_reference` | Lien vers profil quiz | Optionnel |
| `milaura` | `is_bestseller` | `boolean` | Flag bestseller pour fallback | Optionnel |

### 6.2 Valeurs normalisées

#### stone_handle
```
calcedoine
obsidienne
amethyste
quartz-rose
aventurine
lapis-lazuli
oeil-de-tigre
turquoise
...
```

#### energy_handle
```
protection
serenite
reconfort
elegance
joie
purification
ancrage
...
```

#### product_type_handle
```
bracelet
collier
bague
boucles
bougie
sauge
encens
coffret
```

### 6.3 Mapping energy → stone

Pour les produits sans pierre, mapping configurable :

```json
{
  "protection": "obsidienne",
  "serenite": "amethyste",
  "reconfort": "calcedoine",
  "elegance": "quartz-rose",
  "joie": "aventurine",
  "purification": "amethyste",
  "ancrage": "obsidienne"
}
```

Stocké dans : `shop.metafields.milaura.energy_stone_mapping` (JSON)

---

## 7. Implémentation technique

### 7.1 Contraintes de performance

| Contrainte | Règle |
|------------|-------|
| **Scan max** | 50 produits par recherche (éviter boucles infinies) |
| **Cache** | Résultats cachés par produit/contexte (session storage) |
| **Lazy load** | Images en lazy load |
| **Évolution** | Prévoir migration vers API Search & Recommendation |

### 7.2 Snippet principal

**Fichier** : `snippets/milaura-recommendations.liquid`

```liquid
{% comment %}
  Snippet: milaura-recommendations.liquid

  Params:
    - context: 'product' | 'cart' | 'quiz_result' | 'dashboard'
    - product: product object (pour context 'product')
    - quiz_profile: profile handle (pour context 'quiz_result')
    - limit: number (default 2)
    - scan_limit: number (default 50)
{% endcomment %}

{% assign limit = limit | default: 2 %}
{% assign scan_limit = scan_limit | default: 50 %}
{% assign recos = '' | split: '' %}
{% assign scanned = 0 %}

{% comment %} ===== CONTEXT: PRODUCT ===== {% endcomment %}
{% if context == 'product' %}

  {% assign current_stone = product.metafields.milaura.stone_handle %}
  {% assign current_energy = product.metafields.milaura.energy_handle %}
  {% assign current_type = product.metafields.milaura.product_type_handle %}
  {% assign current_profile = product.metafields.milaura.emotional_profile %}

  {% comment %} Si pas de pierre, utiliser energy mapping {% endcomment %}
  {% if current_stone == blank and current_energy != blank %}
    {% assign energy_mapping = shop.metafields.milaura.energy_stone_mapping %}
    {% if energy_mapping %}
      {% assign current_stone = energy_mapping[current_energy] %}
    {% endif %}
  {% endif %}

  {% comment %} Chercher produits même pierre {% endcomment %}
  {% if current_stone != blank %}
    {% for p in collections.all.products %}
      {% if scanned >= scan_limit %}{% break %}{% endif %}
      {% assign scanned = scanned | plus: 1 %}

      {% assign p_stone = p.metafields.milaura.stone_handle %}
      {% assign p_type = p.metafields.milaura.product_type_handle %}

      {% if p_stone == current_stone and p.id != product.id and p.available %}
        {% comment %} Priorité: type différent {% endcomment %}
        {% if p_type != current_type %}
          {% unless recos contains p %}
            {% assign recos = recos | push: p %}
          {% endunless %}
        {% endif %}
      {% endif %}

      {% if recos.size >= limit %}{% break %}{% endif %}
    {% endfor %}
  {% endif %}

  {% comment %} Si pas assez, compléter avec même pierre même type {% endcomment %}
  {% if recos.size < limit and current_stone != blank %}
    {% assign scanned = 0 %}
    {% for p in collections.all.products %}
      {% if scanned >= scan_limit %}{% break %}{% endif %}
      {% assign scanned = scanned | plus: 1 %}

      {% assign p_stone = p.metafields.milaura.stone_handle %}

      {% if p_stone == current_stone and p.id != product.id and p.available %}
        {% unless recos contains p %}
          {% assign recos = recos | push: p %}
        {% endunless %}
      {% endif %}

      {% if recos.size >= limit %}{% break %}{% endif %}
    {% endfor %}
  {% endif %}

  {% comment %} Si profil émotionnel, ajouter bougie du profil {% endcomment %}
  {% if current_profile != blank and recos.size < limit %}
    {% assign profile_handle = current_profile.system.handle %}
    {% for p in collections.all.products %}
      {% assign p_profile = p.metafields.milaura.emotional_profile.system.handle %}
      {% assign p_type = p.metafields.milaura.product_type_handle %}

      {% if p_profile == profile_handle and p_type == 'bougie' and p.available %}
        {% unless recos contains p %}
          {% assign recos = recos | push: p %}
          {% break %}
        {% endunless %}
      {% endif %}
    {% endfor %}
  {% endif %}

{% comment %} ===== CONTEXT: CART ===== {% endcomment %}
{% elsif context == 'cart' %}

  {% comment %} Extraire pierres du panier {% endcomment %}
  {% assign cart_stones = '' | split: '' %}
  {% assign cart_product_ids = '' | split: '' %}

  {% for item in cart.items %}
    {% assign item_stone = item.product.metafields.milaura.stone_handle %}
    {% if item_stone != blank %}
      {% unless cart_stones contains item_stone %}
        {% assign cart_stones = cart_stones | push: item_stone %}
      {% endunless %}
    {% endif %}
    {% assign cart_product_ids = cart_product_ids | push: item.product.id %}
  {% endfor %}

  {% comment %} Recommander bijoux des pierres du panier {% endcomment %}
  {% for stone in cart_stones %}
    {% if recos.size >= limit %}{% break %}{% endif %}

    {% for p in collections.all.products %}
      {% if scanned >= scan_limit %}{% break %}{% endif %}
      {% assign scanned = scanned | plus: 1 %}

      {% assign p_stone = p.metafields.milaura.stone_handle %}
      {% assign p_type = p.metafields.milaura.product_type_handle %}

      {% if p_stone == stone and p.available %}
        {% unless cart_product_ids contains p.id %}
          {% unless recos contains p %}
            {% if p_type == 'bracelet' or p_type == 'collier' or p_type == 'bague' %}
              {% assign recos = recos | push: p %}
            {% endif %}
          {% endunless %}
        {% endunless %}
      {% endif %}

      {% if recos.size >= limit %}{% break %}{% endif %}
    {% endfor %}
  {% endfor %}

{% comment %} ===== CONTEXT: QUIZ_RESULT ===== {% endcomment %}
{% elsif context == 'quiz_result' %}

  {% comment %} Chercher 1 bijou même pierre que le profil {% endcomment %}
  {% assign profile_stone = quiz_profile.stone_handle %}

  {% for p in collections.all.products %}
    {% if scanned >= scan_limit %}{% break %}{% endif %}
    {% assign scanned = scanned | plus: 1 %}

    {% assign p_stone = p.metafields.milaura.stone_handle %}
    {% assign p_type = p.metafields.milaura.product_type_handle %}

    {% if p_stone == profile_stone and p_type == 'bracelet' and p.available %}
      {% assign recos = recos | push: p %}
      {% break %}
    {% endif %}
  {% endfor %}

  {% comment %} Fallback: premier bijou même pierre {% endcomment %}
  {% if recos.size == 0 %}
    {% for p in collections.all.products %}
      {% assign p_stone = p.metafields.milaura.stone_handle %}
      {% assign p_type = p.metafields.milaura.product_type_handle %}

      {% if p_stone == profile_stone and p.available %}
        {% if p_type == 'bracelet' or p_type == 'collier' or p_type == 'bague' %}
          {% assign recos = recos | push: p %}
          {% break %}
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endif %}

{% endif %}

{% comment %} ===== FALLBACK BESTSELLERS ===== {% endcomment %}
{% if recos.size < limit %}
  {% for p in collections.all.products %}
    {% if p.metafields.milaura.is_bestseller and p.available %}
      {% unless recos contains p %}
        {% if context == 'cart' %}
          {% unless cart_product_ids contains p.id %}
            {% assign recos = recos | push: p %}
          {% endunless %}
        {% else %}
          {% if product == blank or p.id != product.id %}
            {% assign recos = recos | push: p %}
          {% endif %}
        {% endif %}
      {% endunless %}
    {% endif %}

    {% if recos.size >= limit %}{% break %}{% endif %}
  {% endfor %}
{% endif %}

{% comment %} ===== AFFICHAGE ===== {% endcomment %}
{% if recos.size > 0 %}
  <div class="milaura-recos">
    <div class="milaura-recos__container">
      {% for reco in recos limit: limit %}
        {% render 'milaura-reco-card', product: reco %}
      {% endfor %}
    </div>
  </div>
{% endif %}
```

### 7.3 Snippet card

**Fichier** : `snippets/milaura-reco-card.liquid`

```liquid
{% comment %}
  Snippet: milaura-reco-card.liquid

  Params:
    - product: product object
{% endcomment %}

<div class="milaura-reco-card" data-product-id="{{ product.id }}">
  <a href="{{ product.url }}" class="milaura-reco-card__image-link">
    {% if product.featured_image %}
      <img
        src="{{ product.featured_image | image_url: width: 400 }}"
        alt="{{ product.title | escape }}"
        loading="lazy"
        width="200"
        height="200"
        class="milaura-reco-card__image"
      >
    {% else %}
      {{ 'product-1' | placeholder_svg_tag: 'milaura-reco-card__image milaura-reco-card__image--placeholder' }}
    {% endif %}
  </a>

  <div class="milaura-reco-card__content">
    <a href="{{ product.url }}" class="milaura-reco-card__title">
      {{ product.title }}
    </a>

    <div class="milaura-reco-card__price">
      {{ product.price | money }}
    </div>

    {% if product.available %}
      <button
        type="button"
        class="milaura-reco-card__add-btn"
        data-variant-id="{{ product.selected_or_first_available_variant.id }}"
        onclick="MilauraRecos.addToCart(this)"
      >
        <span class="milaura-reco-card__add-btn-text">+ Ajouter</span>
        <span class="milaura-reco-card__add-btn-loading" hidden>
          {% render 'icon-spinner' %}
        </span>
        <span class="milaura-reco-card__add-btn-success" hidden>✓ Ajouté</span>
      </button>
    {% else %}
      <button type="button" class="milaura-reco-card__add-btn milaura-reco-card__add-btn--disabled" disabled>
        Indisponible
      </button>
    {% endif %}
  </div>
</div>
```

### 7.4 JavaScript

**Fichier** : `assets/milaura-recos.js`

```javascript
const MilauraRecos = {
  async addToCart(button) {
    const variantId = button.dataset.variantId;
    const textEl = button.querySelector('.milaura-reco-card__add-btn-text');
    const loadingEl = button.querySelector('.milaura-reco-card__add-btn-loading');
    const successEl = button.querySelector('.milaura-reco-card__add-btn-success');

    // État loading
    button.disabled = true;
    textEl.hidden = true;
    loadingEl.hidden = false;

    try {
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: parseInt(variantId),
          quantity: 1
        })
      });

      if (!response.ok) throw new Error('Erreur ajout panier');

      // État success
      loadingEl.hidden = true;
      successEl.hidden = false;
      button.classList.add('milaura-reco-card__add-btn--success');

      // Mettre à jour le compteur panier (si header cart existe)
      this.updateCartCount();

      // Reset après 2s
      setTimeout(() => {
        successEl.hidden = true;
        textEl.hidden = false;
        button.disabled = false;
        button.classList.remove('milaura-reco-card__add-btn--success');
      }, 2000);

    } catch (error) {
      console.error('Erreur ajout panier:', error);
      loadingEl.hidden = true;
      textEl.hidden = false;
      button.disabled = false;
    }
  },

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();

      // Mettre à jour tous les compteurs panier
      document.querySelectorAll('[data-cart-count]').forEach(el => {
        el.textContent = cart.item_count;
      });
    } catch (error) {
      console.error('Erreur mise à jour panier:', error);
    }
  }
};
```

### 7.5 Styles

**Fichier** : `assets/milaura-recos.css` (ou dans `milaura.css`)

```css
/* ===== CONTAINER ===== */
.milaura-recos {
  padding: var(--milaura-spacing-md) 0;
}

.milaura-recos__container {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 8px;
  margin: 0 -16px;
  padding-left: 16px;
  padding-right: 16px;
}

@media (min-width: 768px) {
  .milaura-recos__container {
    display: grid;
    grid-template-columns: repeat(2, 200px);
    gap: 16px;
    overflow-x: visible;
    margin: 0;
    padding: 0;
  }
}

/* ===== CARD ===== */
.milaura-reco-card {
  flex: 0 0 160px;
  scroll-snap-align: start;
  background: var(--milaura-beige);
  border-radius: var(--milaura-border-radius);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

@media (min-width: 768px) {
  .milaura-reco-card {
    flex: none;
  }
}

.milaura-reco-card:hover {
  box-shadow: var(--milaura-shadow-md);
}

/* ===== IMAGE ===== */
.milaura-reco-card__image-link {
  display: block;
  aspect-ratio: 1;
  overflow: hidden;
}

.milaura-reco-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.milaura-reco-card:hover .milaura-reco-card__image {
  transform: scale(1.05);
}

/* ===== CONTENT ===== */
.milaura-reco-card__content {
  padding: 12px;
}

.milaura-reco-card__title {
  display: block;
  font-size: 14px;
  line-height: 1.3;
  color: var(--milaura-text);
  text-decoration: none;
  margin-bottom: 4px;

  /* 2 lignes max avec ellipsis */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.milaura-reco-card__price {
  font-size: 16px;
  font-weight: 600;
  color: var(--milaura-text);
  margin-bottom: 8px;
}

/* ===== BUTTON ===== */
.milaura-reco-card__add-btn {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--milaura-gold);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
}

.milaura-reco-card__add-btn:hover:not(:disabled) {
  background: var(--milaura-gold-dark);
}

.milaura-reco-card__add-btn:disabled {
  cursor: not-allowed;
}

.milaura-reco-card__add-btn--disabled {
  background: #ccc;
  color: #666;
}

.milaura-reco-card__add-btn--success {
  background: #2ecc71;
}

/* ===== LOADING SPINNER ===== */
.milaura-reco-card__add-btn-loading svg {
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## 8. Gestion des cas limites

### 8.1 Rupture de stock

| Situation | Comportement |
|-----------|--------------|
| Produit reco en rupture | Ne pas afficher, passer au suivant |
| Toutes recos prioritaires en rupture | Afficher bestsellers disponibles |
| Tous bestsellers en rupture | Masquer la section reco |

### 8.2 Pas de metafield stone_handle

| Situation | Comportement |
|-----------|--------------|
| Produit sans `stone_handle` ni `energy_handle` | Utiliser fallback bestsellers |
| `energy_handle` présent mais pas dans mapping | Log warning, fallback bestsellers |

### 8.3 Produit déjà dans le panier

- Ne jamais recommander un produit déjà dans le panier
- Filter systématique dans le contexte `cart`

### 8.4 Nouveau produit sans data

- Si metafields pas remplis → fallback bestsellers automatique
- Pas de section vide (graceful degradation)

---

## 9. Roadmap V1 → V2

### V1 (immédiat)

- [x] Page produit : 2 recos même pierre
- [x] Résultat quiz : 1 bijou même pierre
- [x] Panier : 1-2 recos intelligentes
- [x] Dashboard : basé sur profil quiz
- [x] Metafields `stone_handle`, `energy_handle`, `is_bestseller`
- [x] Snippet + JS + CSS

### V1.5 (data clean)

- [ ] Collections automatiques par pierre
- [ ] Migration des recos vers collections (plus performant)
- [ ] Analytics sur taux de clic recos

### V2 (planifié)

- [ ] Page confirmation post-achat
- [ ] Séquence email J+7, J+30, J+60
- [ ] Complémentarité émotionnelle (mapping profils)
- [ ] A/B testing des recos
- [ ] API Search & Recommendation Shopify

---

## 10. Checklist implémentation

### Fichiers à créer

- [ ] `snippets/milaura-recommendations.liquid`
- [ ] `snippets/milaura-reco-card.liquid`
- [ ] `assets/milaura-recos.js`
- [ ] Styles dans `assets/milaura.css` ou fichier dédié

### Metafields à configurer

- [ ] Définition `milaura.stone_handle` (single_line_text_field)
- [ ] Définition `milaura.energy_handle` (single_line_text_field)
- [ ] Définition `milaura.product_type_handle` (single_line_text_field)
- [ ] Définition `milaura.is_bestseller` (boolean)
- [ ] Définition `shop.milaura.energy_stone_mapping` (json)

### Données à remplir

- [ ] `stone_handle` sur tous les bijoux
- [ ] `stone_handle` sur toutes les bougies
- [ ] `energy_handle` sur sauge/encens
- [ ] `product_type_handle` sur tous les produits
- [ ] `is_bestseller` sur 5-10 produits

### Intégration

- [ ] Inclure snippet dans section produit (section 10)
- [ ] Inclure snippet dans page résultat quiz
- [ ] Inclure snippet dans cart drawer / page panier
- [ ] Inclure snippet dans template dashboard

### Tests

- [ ] Test sur bijou → affiche 2 bijoux même pierre
- [ ] Test sur bougie → affiche 2 bijoux même pierre
- [ ] Test sur sauge → affiche recos basées sur energy_handle
- [ ] Test panier → recos cohérentes, pas de doublons
- [ ] Test rupture → fallback bestsellers
- [ ] Test mobile → scroll horizontal fluide
- [ ] Test ajout panier AJAX → feedback correct

---

## Annexes

### A. Liste des pierres Milaura

```
calcedoine      → Réconfort
obsidienne      → Protection
amethyste       → Sérénité
quartz-rose     → Élégance
aventurine      → Joie de vivre
lapis-lazuli    → [à définir]
oeil-de-tigre   → [à définir]
turquoise       → [à définir]
...
```

### B. Mapping energy → stone

```json
{
  "protection": "obsidienne",
  "serenite": "amethyste",
  "reconfort": "calcedoine",
  "elegance": "quartz-rose",
  "joie": "aventurine",
  "purification": "amethyste",
  "ancrage": "obsidienne"
}
```

### C. Liens internes

- Quiz émotionnel : `docs/quiz-emotionnel-spec.md`
- Page produit : `docs/page-produit-spec.md`

## Annexe A. Notes d’implémentation V1 (à lire avant dev)

Cette annexe verrouille les décisions techniques et UX pour éviter les pièges de performance et de cohérence sur un catalogue large (bijoux majoritaires, bougie produit d’appel).

### A1. Performance et fiabilité (interdits)

* Interdit de baser les recommandations sur un scan de l’ensemble du catalogue (ex: boucle sur collections.all.products), même avec un scan_limit.
* Motif : non déterministe (tu peux ne jamais tomber sur les bons produits), et risque de perf instable à mesure que le catalogue grossit.

### A2. V1 scalable sans collections auto (solution recommandée)

Objectif : recommandations déterministes, rapides, et maintenables, sans “chercher” dans 2000 produits.

Approche V1 :

* Créer un “index de recos” maintenu côté admin via metaobjects.
* Chaque entrée d’index correspond à une stone_handle (ou energy_handle) et contient des listes de produits (handles) classées par type.

Exemple de metaobject (conceptuel) :

* milaura.reco_index

  * key_handle (ex: "calcedoine", ou "sauge")
  * kind ("stone" ou "energy")
  * products_all (liste de produits)
  * products_bracelet, products_collier, products_bague, products_bougie (listes optionnelles)
  * fallback_bestsellers (liste)

Rendu Liquid :

* On récupère 2 produits via leurs handles (all_products[handle]), donc zéro scan, zéro surprise.
* On applique ensuite les règles (type croisé, pas déjà au panier, dispo, etc.) sur une liste courte (10 à 30 max), ce qui garantit perf et pertinence.

Maintenance :

* Au début : index rempli manuellement sur les 20 pierres les plus importantes.
* Ensuite : index alimenté par script interne (hors repo) si besoin.

### A3. energy_handle et mapping (JSON)

* Les produits sans pierre utilisent energy_handle (ex: "purification", "ancrage", etc.).
* Le mapping energy_handle → stone_handle (si utilisé) doit être lu proprement depuis un metafield JSON.
* Attention : selon Shopify, le metafield JSON doit être récupéré via .value et parsé (selon le format renvoyé).
* Règle : si le mapping ne renvoie rien, on tombe sur fallback_bestsellers de la catégorie, pas sur une recherche catalogue.

### A4. Règle quiz (à ne pas casser)

* Le quiz recommande 1 seule bougie, point.
* Sur la page résultat, le bijou n’est pas présenté comme une “reco quiz”, mais comme une suggestion secondaire.
* Hiérarchie UI : CTA principal = bougie, le bijou est un bloc “prolonger l’intention” plus bas, discret, optionnel.

### A5. Variantes et add to cart (bijoux)

* Ajout AJAX direct autorisé uniquement si le produit a une variante unique, ou si aucune option critique n’est à choisir.
* Si tailles (bague) ou options importantes : bouton = “choisir” (redirige fiche produit), pour éviter l’ajout d’une mauvaise variante.
* Règle : aucune recommandation ne doit ajouter un produit “au hasard” sans choix explicite quand c’est nécessaire.

### A6. Conventions front (cohérence du thème)

* JavaScript : IIFE, pas de variables globales exposées.
* Respect prefers-reduced-motion : animations désactivables.
* Styles : centralisés dans assets/milaura.css, pas de CSS éparpillé.
* Objectif : une base propre et maintenable, compatible avec le steering du thème.

### A7. Critères d’acceptation V1 (checklist)

* Les recos sont déterministes (à inputs identiques, mêmes outputs).
* Aucun scan global catalogue.
* Max 2 recommandations visibles par emplacement.
* Aucun produit déjà présent dans le panier n’est recommandé.
* Produits en rupture non affichés.
* Mobile first : cards compactes, CTA clair, pas de friction.
* Sur bagues et produits à choix, pas d’ajout direct sans sélection.

Fin de l’annexe.


---

*Document généré par Mary, Business Analyst — Session BMAD*
