---
inclusion: always
---

# Steering File - Theme Milaura Shopify

> **Derniere mise a jour** : 24 janvier 2026
> **Etat d'avancement** : ~70-75% (pre-production)
> **Version Dawn** : 15.4.0

---

## Vue d'ensemble du projet

**Milaura** est un theme Shopify premium specialise dans la vente de bougies emotionnelles et bijoux en pierres precieuses. Le theme adopte une esthetique "Vision OS" avec glassmorphism, degrades dores et une approche luxueuse mais accessible.

### Persona cible
- **Femmes 25-45 ans** interessees par le bien-etre, la lithotherapie et l'aromatherapie
- **Recherche** : Reconnexion emotionnelle, rituels de self-care, objets de qualite
- **Valeurs** : Authenticite, artisanat francais, pierres naturelles certifiees

### Objectifs V1
1. Experience premium mobile-first
2. Funnel quiz emotionnel -> produit -> achat fluide
3. Recommandations intelligentes pierre-first
4. Performance Lighthouse > 90

---

## Etat actuel du projet

### Ce qui est FAIT
| Composant | Statut | Details |
|-----------|--------|---------|
| Sections Milaura | 28 sections | Toutes fonctionnelles |
| Page produit | Template complet | `product.milaura.json` avec 13 sections |
| Homepage | Complete | `index.json` avec 12 sections |
| Quiz emotionnel | Integre | 7 questions dans homepage |
| Systeme de recos | Fonctionnel | 4 snippets pierre-first |
| Data model | Configure | 3 metaobjects + seed data |
| Styles | Centralises | `milaura.css` + quiz CSS |

### Ce qui RESTE A FAIRE
1. **Pass UI/UX majeure** (~30% du travail restant)
   - Coherence visuelle entre sections
   - Micro-interactions et animations
   - Responsive fine-tuning
2. **Contenu produits** (~20%)
   - Redaction descriptions emotionnelles
   - Photos produits de qualite
3. **Produits reels** (~10%)
   - Ajout des vrais produits Shopify
   - Mapping metafields

---

## Architecture technique

### Structure des fichiers
```
dawn-X-milaura/
├── assets/
│   ├── milaura.css              <- Styles centralises
│   ├── milaura-quiz.css         <- Styles quiz
│   ├── milaura-quiz.js          <- Logique quiz
│   ├── milaura-quiz-config.js   <- Config questions
│   └── milaura-quiz-result.css  <- Styles resultats
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

### Sections Milaura (28 total)

**Homepage & Navigation :**
- `milaura-navbar.liquid` - Navigation glassmorphism
- `milaura-announcement.liquid` - Barre d'annonce doree
- `milaura-hero-showcase.liquid` - Hero avec onglets
- `milaura-hero-conversion.liquid` - Hero CTA quiz
- `milaura-benefits-explorer.liquid` - Explorer les pierres
- `milaura-collection-list.liquid` - Grille collections
- `milaura-featured-products.liquid` - Produits vedettes
- `milaura-video-process.liquid` - Video artisanat
- `milaura-image-text.liquid` - Bloc image/texte
- `milaura-quiz.liquid` - Quiz emotionnel complet
- `milaura-testimonials.liquid` - Temoignages
- `milaura-trust-badges.liquid` - Badges confiance
- `milaura-footer.liquid` - Pied de page

**Page Produit :**
- `milaura-product-hero.liquid` - Hero produit avec galerie
- `milaura-sticky-bar.liquid` - Barre sticky ATC
- `milaura-product-reassurance.liquid` - Badges reassurance
- `milaura-product-tabs.liquid` - Onglets description/specs
- `milaura-product-story.liquid` - Histoire du produit
- `milaura-product-stone.liquid` - Focus pierre avec hotspots
- `milaura-product-scent.liquid` - Pyramide olfactive
- `milaura-product-ritual.liquid` - Etapes du rituel
- `milaura-product-craft.liquid` - Artisanat & qualite
- `milaura-product-reviews.liquid` - Avis clients
- `milaura-product-crosssell.liquid` - Cross-sell
- `milaura-product-faq.liquid` - FAQ produit
- `milaura-product-cta-final.liquid` - CTA final

**Autres :**
- `milaura-dashboard-recommendations.liquid` - Recos dashboard
- `milaura-pdp-recommendations.liquid` - Recos PDP

### Conventions de nommage
- **Sections** : `milaura-*.liquid`
- **Classes CSS** : `.milaura-*`
- **Variables CSS** : `--milaura-*`
- **IDs** : `Milaura*` (PascalCase)

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
- `.milaura-btn` : Boutons glassmorphism
- `.milaura-card` : Cartes avec hover dore
- `.milaura-glass` : Effet glassmorphism
- `.milaura-section-card` : Conteneur halo Vision OS

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

## Systeme de recommandations

### Logique pierre-first
1. Recuperer `stone_handle` du produit actuel
2. Filtrer produits avec meme pierre + type different
3. Limiter a 2 recos max
4. Fallback : produits `is_bestseller: true`

### Points de contact
- **PDP** : Section crosssell
- **Cart drawer** : Avant checkout
- **Dashboard client** : Base sur profil quiz

### Collection source
- **`recos-pool`** : Max 50 produits (limite performance)

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
- Limite 50 produits pour les lookups

### Accessibilite
- Contraste WCAG AA (noir pur #000000)
- Navigation clavier complete
- ARIA labels sur elements interactifs
- Focus visible

---

## Prochaines etapes

### Priorite 1 : Pass UI/UX
- [ ] Audit coherence visuelle globale
- [ ] Harmoniser espacements et typographie
- [ ] Micro-interactions et hover states
- [ ] Mobile responsive fine-tuning
- [ ] Performance Lighthouse > 90

### Priorite 2 : Contenu
- [ ] Rediger descriptions produits
- [ ] Preparer photos haute qualite
- [ ] Valider textes quiz et profils

### Priorite 3 : Production
- [ ] Ajouter vrais produits
- [ ] Mapper metafields
- [ ] Tests cross-browser
- [ ] Go-live checklist

---

## Fichiers de reference

- `METAFIELDS-REFERENCE.md` : Reference complete metafields
- `LEGAL-PAGES-CONTENT.md` : Contenu pages legales
- `AGENTS.md` : Configuration agents Claude

---

*Ce steering file est la source de verite pour le projet Milaura.*
