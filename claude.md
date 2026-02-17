---
inclusion: always
---

# Steering File - Theme Milaura Shopify

> **Derniere mise a jour** : 26 janvier 2026
> **Etat d'avancement** : ~80-85% (pre-production)
> **Version Dawn** : 15.4.0

---

## Vue d'ensemble du projet

**Milaura** est un theme Shopify premium base sur Dawn 15.4.0, specialise dans la vente de bougies emotionnelles et bijoux en pierres precieuses. Le theme adopte une esthetique "Vision OS" avec glassmorphism, degrades dores et une approche luxueuse mais accessible.

### Identite visuelle
- **Palette principale** : Beiges chaleureux (#FDFBF7, #F2E8D5, #E6D8C0) avec accents dores (#C0A062)
- **Style** : Glassmorphism, cartes flottantes, effets de halo lumineux
- **Typographie** : Playfair Display (titres), Lato (corps), Dancing Script (script)
- **Approche** : Mobile-first, accessibilite WCAG AA, performance optimisee

### Persona cible
- **Femmes 25-45 ans** interessees par le bien-etre, la lithotherapie et l'aromatherapie
- **Recherche** : Reconnexion emotionnelle, rituels de self-care, objets de qualite
- **Valeurs** : Authenticite, artisanat francais, pierres naturelles certifiees

---

## Etat actuel du projet

### Ce qui est FAIT ✅
| Composant | Statut | Details |
|-----------|--------|---------|
| **28 Sections Milaura** | Complet | Toutes fonctionnelles + full customizer |
| **Customisation complete** | Complet | 24 sections avec settings taille/couleur/typo |
| **Page produit** | Complet | `product.milaura.json` avec 13 sections |
| **Homepage** | Complet | `index.json` avec 12 sections |
| **Quiz emotionnel** | Complet | 7 questions, 5 profils, full customizer |
| **Systeme de recos** | Fonctionnel | 4 snippets pierre-first |
| **Data model** | Configure | 3 metaobjects + seed data |
| **Hero Showcase** | Optimise | 4 onglets + dots + responsive tablette |
| **Navbar** | Complet | Badge quiz anime |

### Ce qui RESTE A FAIRE 🔧
1. **Pass UI/UX finale** (~15% du travail restant)
   - Coherence visuelle finale
   - Tests cross-browser
2. **Contenu produits** (~10%)
   - Photos produits de qualite
   - Descriptions emotionnelles
3. **Produits reels** (~5%)
   - Ajout des vrais produits Shopify
   - Mapping metafields

---

## Architecture technique

### Structure des fichiers
```
dawn-X-milaura/
├── assets/
│   ├── milaura.css              <- Styles centralises
│   └── [fichiers Dawn...]
├── sections/
│   └── milaura-*.liquid         <- 28 sections custom
├── snippets/
│   ├── milaura-recos-engine.liquid
│   ├── milaura-pdp-recos.liquid
│   ├── milaura-cart-recos.liquid
│   └── milaura-dashboard-recos.liquid
├── templates/
│   ├── product.milaura.json     <- Template produit principal
│   ├── index.json               <- Homepage
│   └── [autres templates...]
└── config/
    ├── metaobjects/             <- Definitions metaobjects
    ├── metafields/              <- Definitions metafields
    └── seed-data/               <- Donnees de reference
```

### Conventions de nommage
- **Sections** : `milaura-*.liquid`
- **Classes CSS** : `.milaura-*`
- **Variables CSS** : `--milaura-*`
- **IDs** : `Milaura*` (PascalCase)

---

## Sections Milaura (28 total)

### Homepage & Navigation
| Section | Fichier | Particularites |
|---------|---------|----------------|
| Navbar | `milaura-navbar.liquid` | Badge quiz anime |
| Announcement | `milaura-announcement.liquid` | Defilement + shimmer |
| Hero Showcase | `milaura-hero-showcase.liquid` | **4 onglets** + carrousel + dots + tablette |
| Hero Conversion | `milaura-hero-conversion.liquid` | CTA quiz |
| Benefits Explorer | `milaura-benefits-explorer.liquid` | Cartes interactives |
| Collection List | `milaura-collection-list.liquid` | Support video/image |
| Featured Products | `milaura-featured-products.liquid` | Grille 4 colonnes |
| Video Process | `milaura-video-process.liquid` | Video artisanat |
| Image Text | `milaura-image-text.liquid` | Bloc image/texte |
| Quiz | `milaura-quiz.liquid` | 7 questions, 5 profils |
| Testimonials | `milaura-testimonials.liquid` | Carrousel |
| Trust Badges | `milaura-trust-badges.liquid` | Blocs badge |
| Footer | `milaura-footer.liquid` | Liens, reseaux |

### Page Produit
| Section | Fichier | Particularites |
|---------|---------|----------------|
| Product Hero | `milaura-product-hero.liquid` | Galerie + badges + volume |
| Sticky Bar | `milaura-sticky-bar.liquid` | Apparait au scroll |
| Reassurance | `milaura-product-reassurance.liquid` | Bandeau badges |
| Tabs | `milaura-product-tabs.liquid` | Onglets desc/specs |
| Story | `milaura-product-story.liquid` | Histoire emotionnelle |
| Stone | `milaura-product-stone.liquid` | Hotspots interactifs |
| Scent | `milaura-product-scent.liquid` | Pyramide olfactive |
| Ritual | `milaura-product-ritual.liquid` | Etapes rituels |
| Craft | `milaura-product-craft.liquid` | Artisanat qualite |
| Reviews | `milaura-product-reviews.liquid` | Avis clients |
| Crosssell | `milaura-product-crosssell.liquid` | Recos pierre-first |
| FAQ | `milaura-product-faq.liquid` | Q/R accordeon |
| CTA Final | `milaura-product-cta-final.liquid` | Dernier CTA |

### Autres
| Section | Role |
|---------|------|
| Dashboard Recos | Recos compte client |
| PDP Recos | Wrapper recos PDP |

---

## Customisation complete des sections

**Toutes les sections (24/28) ont maintenant des settings complets :**

- 📏 **Tailles de texte** : Range sliders (px)
- 🎨 **Couleurs** : Color pickers pour tous les textes
- ✏️ **Typographies** : Select entre Playfair/Lato/Dancing Script
- 📝 **Contenus** : Tous les textes editables

**Sections sans settings supplementaires (deja completes) :**
- `milaura-quiz.liquid` - ~100 settings existants
- `milaura-navbar.liquid` - Deja parametre
- `milaura-dashboard-recommendations.liquid` - Simple wrapper
- `milaura-pdp-recommendations.liquid` - Simple wrapper

---

## Systeme de styles

### Variables CSS (milaura.css)
```css
:root {
  /* Couleurs */
  --milaura-gold: #C0A062;
  --milaura-gold-light: #E6C88B;
  --milaura-gold-dark: #8F723A;
  --milaura-beige: #FDFBF7;
  --milaura-text: #000000;

  /* Espacements */
  --milaura-spacing-xs: 6px;
  --milaura-spacing-sm: 12px;
  --milaura-spacing-md: 24px;
  --milaura-spacing-lg: 36px;
  --milaura-spacing-xl: 48px;

  /* Autres */
  --milaura-border-radius: 20px;
  --milaura-shadow-md: 0 15px 40px rgba(192, 160, 98, 0.25);
}
```

### Classes utilitaires
- `.milaura-btn` / `.milaura-btn-gold` : Boutons dores
- `.milaura-card` : Cartes avec hover dore
- `.milaura-glass` : Effet glassmorphism
- `.milaura-section-card` : Conteneur halo Vision OS
- `.milaura-cta` : Boutons CTA

---

## Data Model Shopify

### Metaobjects (3)
1. **`stone`** : 7 champs (handle, name, color, short_essentiel, benefits_bullets, ritual_steps, care)
2. **`scent`** : 7 champs (handle, name, description_short, notes_top/heart/base, mood)
3. **`emotional_profile`** : 10 champs (handle, name, candle_product, stone_handle, scent_handle, hero_copy, needs_bullets, ritual_morning/evening_steps)

### Product Metafields (6)
- `milaura.stone_handle` : Handle pierre
- `milaura.scent_handle` : Handle senteur (bougies)
- `milaura.product_type_handle` : Type produit
- `milaura.baseline` : Phrase emotionnelle
- `milaura.is_bestseller` : Fallback recos
- `milaura.energy_handle` : Energie (sauge)

### Customer Metafields (2)
- `milaura.quiz_history` : JSON historique quiz
- `milaura.last_profile_handle` : Dernier profil

---

## Responsive Design

### Breakpoints
| Breakpoint | Largeur | Cible |
|------------|---------|-------|
| Desktop | > 1024px | PC/Laptop |
| Tablette | 769px - 1024px | iPad/Tablettes |
| Mobile | ≤ 768px | Smartphones |
| Petit mobile | < 380px | iPhone SE, etc. |

### Hero Showcase - Optimisations recentes
- **4 onglets** : Pierres, Bijoux, Bougies, Rituels
- **Dots navigation** : Indicateurs cliquables sous le carrousel
- **Tablette** : Layout 35/65% optimise
- **Mobile** : Descriptions tronquees a 2 lignes
- **Petit mobile** : Descriptions cachees automatiquement
- **Option** : "Cacher descriptions sur mobile" dans customizer

---

## Regles de developpement

### Compatibilite Dawn
- Ne jamais modifier les fichiers Dawn directement
- Utiliser `!important` uniquement en cas de conflit
- Tester dans le customizer apres chaque modification

### Performance
- Images lazy loading (sauf hero)
- CSS critique inline dans sections
- Animations respectant `prefers-reduced-motion`
- Limite 50 produits pour les lookups recos

### Accessibilite
- Contraste WCAG AA (noir pur #000000)
- Navigation clavier complete
- ARIA labels sur elements interactifs
- Focus visible

### Validation Shopify
- ⚠️ Les `step` des range sliders doivent avoir **max 1 decimale**
- Utiliser des entiers + division dans le CSS si besoin de precision

---

## Prochaines etapes

### Priorite 1 : Finalisation UI
- [ ] Tests cross-browser (Safari, Firefox, Chrome)
- [ ] Verification responsive sur vrais appareils
- [ ] Performance Lighthouse > 90

### Priorite 2 : Contenu
- [ ] Photos produits haute qualite
- [ ] Descriptions emotionnelles
- [ ] Textes quiz et profils valides

### Priorite 3 : Production
- [ ] Ajouter vrais produits
- [ ] Mapper metafields
- [ ] Go-live checklist

---

## Fichiers de reference

- `HANDOVER-TECHNIQUE.md` : Guide technique complet
- `METAFIELDS-REFERENCE.md` : Reference complete metafields
- `LEGAL-PAGES-CONTENT.md` : Contenu pages legales

---

## Erreurs connues et solutions

| Erreur | Solution |
|--------|----------|
| "step must have 1 or less decimal digits" | Utiliser entiers dans schema, diviser par 10 dans CSS |
| "color_schemes is not valid" | Ne pas modifier settings_schema.json de Dawn |
| Recos ne s'affichent pas | Verifier collection "recos-pool" et metafields |

---

*Ce steering file est la source de verite pour le projet Milaura.*
