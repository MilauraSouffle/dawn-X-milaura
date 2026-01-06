---
inclusion: always
---

# 🏗️ Steering File - Thème Milaura Shopify

## Vue d'ensemble du projet

**Milaura** est un thème Shopify premium basé sur Dawn 15.4.0, spécialisé dans la vente de bougies émotionnelles et bijoux en pierres précieuses. Le thème adopte une esthétique "Vision OS" avec glassmorphism, dégradés dorés et une approche luxueuse mais accessible.

### Identité visuelle
- **Palette principale** : Beiges chaleureux (#FDFBF7, #F2E8D5, #E6D8C0) avec accents dorés (#C0A062)
- **Style** : Glassmorphism, cartes flottantes, effets de halo lumineux
- **Typographie** : Playfair Display (titres), Lato (corps), Dancing Script (script)
- **Approche** : Mobile-first, accessibilité WCAG AA, performance optimisée

## Architecture technique

### Structure des fichiers
```
dawn-X-milaura/
├── assets/
│   ├── milaura.css                    ← Styles centralisés Milaura
│   └── [fichiers Dawn standards...]
├── sections/
│   ├── milaura-*.liquid               ← Sections custom Milaura
│   └── [sections Dawn standards...]
├── templates/
│   ├── *.json                         ← Templates optimisés
│   └── [templates Dawn standards...]
└── [autres dossiers Dawn intacts...]
```

### Conventions de nommage
- **Sections Milaura** : `milaura-*.liquid`
- **Classes CSS** : `.milaura-*`
- **IDs** : `Milaura*` (PascalCase)
- **Variables CSS** : `--milaura-*`

## Système de styles

### Variables CSS centralisées (milaura.css)
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
  --header-height-offset: 96px;
  --milaura-border-radius: 20px;
  --milaura-shadow-md: 0 15px 40px rgba(192, 160, 98, 0.25);
}
```

### Classes utilitaires principales
- `.milaura-btn` : Boutons avec effet glassmorphism
- `.milaura-card` : Cartes avec hover doré
- `.milaura-glass` : Effet glassmorphism
- `.milaura-section-card` : Conteneur avec halo Vision OS
- `.milaura-border-gold` : Liseré doré

### Fond global "Vision OS"
Le thème utilise un dégradé radial fixe appliqué au body avec des halos glassmorphism sur les sections principales.

## Sections Milaura existantes

### 1. milaura-hero-showcase.liquid
- Hero interactif avec onglets et carrousel
- Bandeau doré avec logo "chapeau"
- Grille responsive (40/60 desktop, stack mobile)
- Transitions smooth et autoplay intelligent

### 2. milaura-benefits-explorer.liquid
- Exploration des bénéfices avec cartes interactives
- Layout adaptatif selon le nombre de bénéfices
- Animations au scroll et hover effects

### 3. milaura-collection-list.liquid
- Grille de collections avec support vidéo/image
- Pied doré et effets hover sophistiqués

### 4. milaura-featured-products.liquid
- Grille produits (4 colonnes desktop, 2 mobile)
- Cartes avec liseré doré au hover

### 5. milaura-announcement.liquid
- Barre d'annonce dorée avec défilement
- Effet shimmer subtil

## Responsive design

### Breakpoints
- **Desktop** : > 1024px
- **Tablet** : 769px - 1024px  
- **Mobile** : ≤ 768px

### Optimisations mobile
- Typographie réduite de 8% (19px → 14.72px)
- Marges latérales fines (15px)
- Header réduit de 15% avec scaleY(0.85)
- Carrousels horizontaux avec scroll-snap
- Padding des cartes réduit de 30%

## Intégration Shopify

### Schema patterns
Toutes les sections utilisent des schemas Shopify complets avec :
- Headers pour organiser les paramètres
- Types appropriés (text, textarea, image_picker, url, etc.)
- Valeurs par défaut cohérentes
- Support des blocs pour le contenu dynamique

### Liquid best practices
- Utilisation de `{{ block.shopify_attributes }}` pour l'éditeur
- Fallbacks pour les images avec `placeholder_svg_tag`
- Gestion des états vides avec conditions Liquid
- Optimisation des images avec `image_url: width:`

## Performance et accessibilité

### Performance
- Images lazy loading sauf hero (loading: 'eager')
- CSS critique inline dans les sections
- Animations respectant `prefers-reduced-motion`
- Optimisation des backdrop-filter (coûteux)

### Accessibilité
- Contraste WCAG AA respecté (noir pur #000000)
- Navigation clavier complète
- ARIA labels et roles appropriés
- Focus visible sur tous les éléments interactifs
- Text-shadow pour lisibilité sur fonds dorés

## JavaScript patterns

### Structure recommandée
```javascript
(function () {
  const sectionId = '{{ section.id }}';
  const root = document.getElementById('Section-' + sectionId);
  if (!root) return;
  
  // Respect des préférences utilisateur
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Logique de la section...
})();
```

### Bonnes pratiques
- IIFE pour éviter les conflits globaux
- Vérification de l'existence des éléments
- Respect de `prefers-reduced-motion`
- Event delegation quand approprié
- Cleanup des timers et listeners

## Règles de développement

### Compatibilité Dawn
- ✅ Ne jamais modifier les fichiers Dawn directement (sauf theme.liquid si nécessaire)
- ✅ Utiliser `!important` uniquement en cas de conflit avec Dawn
- ✅ Tester dans le customizer Shopify après chaque modification
- ✅ Préserver la fonctionnalité des sections Dawn existantes

### Styles
- ✅ Styles génériques → `assets/milaura.css`
- ✅ Styles spécifiques → `{% style %}` dans la section
- ❌ Éviter les styles inline dans le HTML
- ✅ Utiliser les variables CSS pour la cohérence

### Testing
- Tester sur vrais appareils mobiles
- Vérifier dans le customizer Shopify
- Valider l'accessibilité (contraste, navigation clavier)
- Tester les performances (Lighthouse)

## Fonctionnalités spécifiques Milaura

### Quiz émotionnel (à implémenter)
- Recommandation de pierres/bougies selon l'état émotionnel
- 5-7 questions avec scoring
- Intégration avec collections Shopify via metafields

### Système de recommandations
- Produits complémentaires (bougie + bijou)
- Basé sur tags/metafields Shopify
- Upsell dans panier et pages produit

### Trust elements
- Badges : "Livraison offerte", "Pierres certifiées", "Fabriqué en France"
- Témoignages avec avatars
- Garantie satisfaction

## Ordre d'implémentation recommandé

1. **Styles centralisés** : Finaliser milaura.css
2. **Homepage** : Optimiser index.json avec sections existantes
3. **Pages produit** : Améliorer templates/product.json
4. **Quiz émotionnel** : Nouvelle section interactive
5. **Funnel conversion** : Pages et sections d'optimisation

## Notes importantes

- **Version Dawn** : 15.4.0 (maintenir la compatibilité)
- **Approche** : HTML-first, JavaScript minimal et progressif
- **Customizer** : Tous les paramètres doivent être éditables
- **SEO** : Utiliser les balises sémantiques appropriées
- **Internationalisation** : Support des locales Shopify

---

*Ce steering file doit être mis à jour à chaque évolution majeure du thème.*