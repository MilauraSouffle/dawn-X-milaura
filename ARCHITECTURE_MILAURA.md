# 🏗️ Plan d'Architecture Technique - Thème Milaura

**Date:** 2024  
**Base:** Dawn 15.4.0  
**Objectif:** Transformer Dawn en site e-commerce Milaura (bougies émotionnelles + bijoux en pierres) sans casser le thème d'origine.

---

## 📊 ÉTAT ACTUEL DU THÈME

### ✅ Sections Milaura Déjà Créées (5)

1. **`sections/milaura-announcement.liquid`**
   - Barre d'annonce dorée avec défilement
   - Style: Or mat (#C0A062) avec effet shimmer
   - ✅ Fonctionnel

2. **`sections/milaura-hero.liquid`**
   - Hero avec image et fondu vers le bas
   - Bouton flottant avec animation
   - ✅ Fonctionnel

3. **`sections/milaura-navbar.liquid`**
   - Navigation flottante style "Vision OS" (glassmorphism)
   - Logo, menu, icônes (recherche, compte, panier)
   - ✅ Fonctionnel

4. **`sections/milaura-featured-products.liquid`**
   - Grille de produits (4 colonnes desktop, 2 mobile)
   - Cartes avec effet hover (liseré doré)
   - ✅ Fonctionnel

5. **`sections/milaura-collection-list.liquid`**
   - Grille de collections (3 colonnes)
   - Support vidéo/image avec pied doré
   - ✅ Fonctionnel

### 🔧 Modifications Dawn Existantes

1. **`layout/theme.liquid`**
   - ✅ Fond beige doré radial ajouté (lignes 303-331)
   - ✅ Background-attachment: fixed pour effet continu
   - ⚠️ Styles inline dans `<style>` (à migrer vers milaura.css)

2. **`sections/main-product.liquid`**
   - ✅ Styles personnalisés pour page produit
   - ✅ Cadre doré autour des images produit
   - ✅ Fond glassmorphism pour la carte info
   - ⚠️ Styles inline (à migrer vers milaura.css)

### ❌ Manquants Critiques

1. **`assets/milaura.css`** — **À CRÉER**
   - Fichier centralisé pour styles génériques Milaura
   - Variables CSS (couleurs, typographies, espacements)
   - Classes utilitaires réutilisables

2. **Quiz Émotionnel** — **À CRÉER**
   - Section `milaura-quiz.liquid`
   - Logique de recommandation de pierres/bougies
   - Intégration avec collections Shopify

3. **Funnel de Conversion** — **À CRÉER**
   - Pages dédiées pour parcours d'achat optimisé
   - Sections de trust (témoignages, garanties)
   - Upsell/cross-sell

---

## 🎯 PLAN D'ARCHITECTURE PROPOSÉ

### Phase 1: Centralisation des Styles (PRIORITÉ)

**Objectif:** Créer `assets/milaura.css` et migrer les styles génériques.

#### 1.1 Créer `assets/milaura.css`

**Contenu à inclure:**

```css
/* ============================================
   MILAURA - STYLES GÉNÉRIQUES
   ============================================ */

/* --- Variables CSS --- */
:root {
  /* Couleurs Milaura */
  --milaura-gold: #C0A062;
  --milaura-gold-light: #E6C88B;
  --milaura-gold-dark: #A0854A;
  --milaura-beige: #FDFBF7;
  --milaura-beige-mid: #F2E8D5;
  --milaura-beige-dark: #E6D8C0;
  --milaura-text: #1A1A1A;
  --milaura-text-light: #666;
  
  /* Typographies */
  --milaura-font-heading: 'Playfair Display', serif;
  --milaura-font-body: 'Lato', sans-serif;
  --milaura-font-script: 'Dancing Script', cursive;
  
  /* Espacements */
  --milaura-spacing-xs: 10px;
  --milaura-spacing-sm: 20px;
  --milaura-spacing-md: 40px;
  --milaura-spacing-lg: 60px;
  --milaura-spacing-xl: 80px;
  
  /* Bordures */
  --milaura-border-radius: 20px;
  --milaura-border-radius-sm: 15px;
  --milaura-border-radius-lg: 50px;
  
  /* Ombres */
  --milaura-shadow-sm: 0 10px 25px rgba(0,0,0,0.05);
  --milaura-shadow-md: 0 15px 35px rgba(192, 160, 98, 0.2);
  --milaura-shadow-lg: 0 20px 50px rgba(192, 160, 98, 0.3);
}

/* --- Fond Global Milaura --- */
body.milaura-theme {
  background: radial-gradient(
    circle at top center,
    var(--milaura-beige) 0%,
    var(--milaura-beige-mid) 60%,
    var(--milaura-beige-dark) 100%
  ) !important;
  background-attachment: fixed !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  min-height: 100vh;
}

/* --- Boutons Milaura --- */
.milaura-btn {
  display: inline-block;
  padding: 18px 50px;
  background: rgba(255, 255, 255, 0.95);
  color: var(--milaura-text);
  font-family: var(--milaura-font-heading);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  border-radius: var(--milaura-border-radius-lg);
  text-decoration: none;
  border: 1px solid rgba(192, 160, 98, 0.5);
  box-shadow: var(--milaura-shadow-sm);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.milaura-btn:hover {
  background: #FFFFFF;
  color: var(--milaura-gold);
  border-color: var(--milaura-gold);
  box-shadow: var(--milaura-shadow-md);
  transform: scale(1.02);
}

.milaura-btn-primary {
  background: var(--milaura-gold);
  color: white;
  border-color: var(--milaura-gold);
}

.milaura-btn-primary:hover {
  background: var(--milaura-text);
  color: white;
}

/* --- Cartes Milaura --- */
.milaura-card {
  background: #ffffff;
  border-radius: var(--milaura-border-radius);
  padding: 15px;
  border: 2px solid transparent;
  box-shadow: var(--milaura-shadow-sm);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.milaura-card:hover {
  border-color: var(--milaura-gold);
  transform: translateY(-8px);
  box-shadow: var(--milaura-shadow-lg);
}

/* --- Glassmorphism --- */
.milaura-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

/* --- Typographies --- */
.milaura-heading {
  font-family: var(--milaura-font-heading);
  color: var(--milaura-gold);
  font-weight: 700;
}

.milaura-heading-script {
  font-family: var(--milaura-font-script);
  color: var(--milaura-gold);
}

.milaura-text {
  font-family: var(--milaura-font-body);
  color: var(--milaura-text);
}

/* --- Liseré Doré --- */
.milaura-border-gold {
  border: 3px solid var(--milaura-gold) !important;
  border-radius: var(--milaura-border-radius) !important;
  box-shadow: var(--milaura-shadow-md) !important;
}

/* --- Responsive --- */
@media screen and (max-width: 768px) {
  .milaura-btn {
    padding: 15px 30px;
    font-size: 0.8rem;
  }
}
```

#### 1.2 Migrer les styles inline

**Fichiers à nettoyer:**
- `layout/theme.liquid` (lignes 299-331) → migrer vers milaura.css
- `sections/main-product.liquid` (styles inline) → migrer vers milaura.css
- Sections Milaura existantes → extraire styles génériques vers milaura.css

#### 1.3 Intégrer milaura.css dans theme.liquid

Ajouter après `base.css`:
```liquid
{{ 'milaura.css' | asset_url | stylesheet_tag }}
```

---

### Phase 2: Optimisation Homepage

**Objectif:** Structurer la homepage avec sections Milaura optimisées.

#### 2.1 Template `templates/index.json`

**Structure proposée:**
1. `milaura-announcement` (barre dorée)
2. `milaura-hero` (hero principal)
3. `milaura-collection-list` (univers: bougies / bijoux)
4. `milaura-featured-products` (produits phares)
5. Section témoignages (à créer: `milaura-testimonials.liquid`)
6. Section garanties/trust (à créer: `milaura-trust-badges.liquid`)

#### 2.2 Nouvelles sections à créer

- **`milaura-testimonials.liquid`**
  - Témoignages clients avec avatars
  - Style: cartes glassmorphism
  
- **`milaura-trust-badges.liquid`**
  - Badges: "Livraison offerte", "Pierres certifiées", "Fabriqué en France"
  - Style: icônes + texte, alignement horizontal

---

### Phase 3: Templates Produits Optimisés

**Objectif:** Améliorer la conversion sur les pages produits.

#### 3.1 Template `templates/product.json`

**Sections à ajouter/optimiser:**
1. `main-product` (déjà modifié, à nettoyer)
2. `milaura-product-benefits.liquid` (nouveau)
   - Avantages: pierre certifiée, emballage cadeau, guide d'utilisation
3. `milaura-product-recommendations.liquid` (nouveau)
   - Produits complémentaires (ex: bougie + bijou)
4. `related-products` (Dawn existant, à garder)

#### 3.2 Nouvelles sections produits

- **`milaura-product-benefits.liquid`**
  - 3-4 icônes avec texte (certification, emballage, guide)
  - Style: cartes horizontales avec icônes dorées

- **`milaura-product-recommendations.liquid`**
  - Grille 2x2 de produits complémentaires
  - Basé sur tags/metafields Shopify

---

### Phase 4: Quiz Émotionnel

**Objectif:** Créer un quiz interactif pour recommander pierres/bougies.

#### 4.1 Section `milaura-quiz.liquid`

**Fonctionnalités:**
- 5-7 questions sur l'état émotionnel
- Logique de scoring (ex: stress → améthyste, amour → rose quartz)
- Résultat: collection recommandée + CTA vers produits

**Structure:**
- Questions avec boutons radio/images
- Barre de progression
- Animation de transition
- Résultat avec image + texte + bouton

**Intégration Shopify:**
- Utiliser metafields pour mapper émotions → collections
- Redirection vers collection recommandée

#### 4.2 Template `templates/page.quiz.json`

Créer une page dédiée pour le quiz (optionnel, peut être intégré dans homepage).

---

### Phase 5: Funnel de Conversion

**Objectif:** Optimiser le parcours d'achat.

#### 5.1 Pages à créer

1. **Landing Page Quiz** (`templates/page.quiz-landing.json`)
   - Hero avec CTA "Découvrir ma pierre"
   - Bénéfices du quiz
   - Témoignages

2. **Page Collection Optimisée** (améliorer `templates/collection.json`)
   - Filtres visuels (émotions, types de pierres)
   - Grille produits Milaura
   - Section "Pourquoi cette pierre?"

3. **Page Panier Optimisée** (améliorer `templates/cart.json`)
   - Upsell produits complémentaires
   - Trust badges
   - Garantie satisfaction

#### 5.2 Sections funnel

- **`milaura-upsell.liquid`**
  - Produits suggérés dans panier/checkout
  - Style: cartes compactes horizontales

- **`milaura-guarantee.liquid`**
  - Section garantie satisfaction
  - Icônes + texte rassurant

---

## 📁 STRUCTURE DE FICHIERS FINALE

```
dawn-X-milaura/
├── assets/
│   ├── milaura.css                    ← NOUVEAU (styles génériques)
│   └── [fichiers Dawn existants...]
│
├── sections/
│   ├── milaura-announcement.liquid    ← EXISTANT ✅
│   ├── milaura-hero.liquid            ← EXISTANT ✅
│   ├── milaura-navbar.liquid          ← EXISTANT ✅
│   ├── milaura-featured-products.liquid ← EXISTANT ✅
│   ├── milaura-collection-list.liquid ← EXISTANT ✅
│   ├── milaura-testimonials.liquid    ← À CRÉER
│   ├── milaura-trust-badges.liquid    ← À CRÉER
│   ├── milaura-product-benefits.liquid ← À CRÉER
│   ├── milaura-product-recommendations.liquid ← À CRÉER
│   ├── milaura-quiz.liquid            ← À CRÉER
│   ├── milaura-upsell.liquid          ← À CRÉER
│   ├── milaura-guarantee.liquid       ← À CRÉER
│   └── [sections Dawn...]              ← INTACTS
│
├── templates/
│   ├── index.json                     ← À OPTIMISER
│   ├── product.json                   ← À OPTIMISER
│   ├── collection.json                ← À OPTIMISER
│   ├── cart.json                      ← À OPTIMISER
│   ├── page.quiz.json                 ← À CRÉER
│   └── [templates Dawn...]            ← INTACTS
│
├── layout/
│   └── theme.liquid                   ← MODIFIÉ (ajout milaura.css)
│
└── [autres dossiers Dawn...]          ← INTACTS
```

---

## 🎨 CONVENTIONS DE CODE

### Nommage
- **Sections Milaura:** `milaura-*.liquid`
- **Classes CSS:** `.milaura-*`
- **IDs:** `Milaura*` (PascalCase)
- **Variables CSS:** `--milaura-*`

### Styles
- ✅ Styles génériques → `assets/milaura.css`
- ✅ Styles spécifiques section → `{% style %}` dans la section
- ❌ Éviter styles inline dans HTML

### Compatibilité Dawn
- ✅ Ne jamais modifier fichiers Dawn directement (sauf `theme.liquid` si nécessaire)
- ✅ Utiliser `!important` uniquement si conflit avec Dawn
- ✅ Tester dans le customizer Shopify après chaque modification

---

## 🚀 ORDRE D'IMPLÉMENTATION RECOMMANDÉ

1. **Phase 1** (Centralisation styles) — **URGENT**
   - Créer `milaura.css`
   - Migrer styles inline
   - Tester compatibilité

2. **Phase 2** (Homepage) — **PRIORITÉ**
   - Optimiser `index.json`
   - Créer sections manquantes (testimonials, trust-badges)

3. **Phase 3** (Produits) — **IMPORTANT**
   - Nettoyer `main-product.liquid`
   - Créer sections produits (benefits, recommendations)

4. **Phase 4** (Quiz) — **FONCTIONNALITÉ CLÉ**
   - Créer `milaura-quiz.liquid`
   - Intégrer logique de recommandation

5. **Phase 5** (Funnel) — **OPTIMISATION**
   - Créer pages et sections funnel
   - A/B testing recommandé

---

## ⚠️ POINTS D'ATTENTION

1. **Performance**
   - Minimiser les animations lourdes
   - Optimiser images (WebP, lazy loading)
   - Éviter trop de `backdrop-filter` (coûteux)

2. **Accessibilité**
   - Contraste couleurs (WCAG AA minimum)
   - Navigation clavier
   - ARIA labels sur quiz

3. **Mobile First**
   - Toutes sections doivent être responsive
   - Tester sur vrais appareils

4. **Customizer Shopify**
   - Tous les paramètres doivent être éditables
   - Utiliser `schema` correctement
   - Prévisualisation en temps réel

---

## 📝 NOTES TECHNIQUES

- **Dawn Version:** 15.4.0
- **Shopify Liquid:** Version actuelle
- **CSS:** Variables CSS natives (pas de préprocesseur)
- **JavaScript:** Vanilla JS (compatibilité maximale)

---

**Prochaine étape:** Valider ce plan, puis commencer Phase 1 (centralisation styles).

