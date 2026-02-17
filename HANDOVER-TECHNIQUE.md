# Guide Technique Complet - Theme Milaura

> **Document de passation** - Tout ce qu'il faut savoir pour reprendre le projet
> **Derniere MAJ** : 26 janvier 2026
> **Avancement** : ~80-85%

---

## Table des matieres

1. [Vue d'ensemble](#1-vue-densemble)
2. [Architecture des fichiers](#2-architecture-des-fichiers)
3. [Templates JSON](#3-templates-json)
4. [Sections Milaura](#4-sections-milaura)
5. [Customisation des sections](#5-customisation-des-sections)
6. [Snippets](#6-snippets)
7. [Assets CSS/JS](#7-assets-cssjs)
8. [Data Model Shopify](#8-data-model-shopify)
9. [Configuration et activation](#9-configuration-et-activation)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Vue d'ensemble

### Le projet
Milaura est un theme Shopify premium base sur Dawn 15.4.0, specialise dans :
- **Bougies emotionnelles** : Bougies avec pierres integrees + senteurs
- **Bijoux en pierres** : Bracelets, colliers, bagues
- **Rituels bien-etre** : Sauge, coffrets

### Identite visuelle
- **Style** : "Vision OS" - glassmorphism, degrades dores, cartes flottantes
- **Palette** : Beiges (#FDFBF7, #F2E8D5) + Or (#C0A062)
- **Typo** : Playfair Display (titres), Lato (corps), Dancing Script (accents)

### Etat actuel
- **Avancement** : ~80-85%
- **Fonctionnel** : 28 sections, quiz, recos, full customizer
- **A faire** : Pass UI finale, contenu produits, produits reels

---

## 2. Architecture des fichiers

```
dawn-X-milaura/
│
├── assets/                          # CSS et JS
│   ├── milaura.css                  # Styles globaux Milaura
│   └── [fichiers Dawn...]           # Ne pas modifier
│
├── sections/                        # Sections Liquid
│   ├── milaura-*.liquid             # 28 sections custom (voir detail)
│   └── [sections Dawn...]           # Ne pas modifier
│
├── snippets/                        # Fragments reutilisables
│   ├── milaura-recos-engine.liquid  # Moteur de recommandations
│   ├── milaura-pdp-recos.liquid     # Affichage recos page produit
│   ├── milaura-cart-recos.liquid    # Affichage recos panier
│   ├── milaura-dashboard-recos.liquid # Affichage recos dashboard
│   └── [snippets Dawn...]           # Ne pas modifier
│
├── templates/                       # Templates JSON
│   ├── product.milaura.json         # Template produit principal
│   ├── index.json                   # Homepage
│   └── [autres templates...]
│
├── config/                          # Configuration data model
│   ├── metaobjects/                 # Definitions des metaobjects
│   ├── metafields/                  # Definitions des metafields
│   └── seed-data/                   # Donnees de reference
│
├── layout/
│   └── theme.liquid                 # Layout principal (fond Milaura)
│
├── .claude/                         # Config Claude Code (gitignored)
│   ├── settings.json                # Hooks et config
│   └── commands/                    # Commandes custom
│
└── [autres dossiers Dawn...]        # Ne pas modifier
```

---

## 3. Templates JSON

### product.milaura.json
**Role** : Template principal pour les pages produit
**Localisation** : `templates/product.milaura.json`
**Activation** : Admin Shopify > Produit > Theme template > Selectionner "milaura"

**Sections incluses (ordre d'affichage)** :
1. `hero` - Hero produit avec galerie
2. `sticky_bar` - Barre sticky "Ajouter au panier"
3. `reassurance` - Badges de reassurance
4. `tabs` - Onglets Description/Specs/Livraison
5. `crosssell` - Produits complementaires
6. `stone` - Focus sur la pierre (hotspots interactifs)
7. `scent` - Pyramide olfactive (bougies uniquement)
8. `ritual` - Etapes du rituel d'utilisation
9. `craft` - Artisanat et qualite
10. `reviews` - Avis clients
11. `faq` - Questions frequentes
12. `cta_final` - CTA de conversion final
13. `milaura_product_story` - Histoire du produit

### index.json
**Role** : Homepage du site
**Localisation** : `templates/index.json`

**Sections incluses** :
1. `milaura_hero_showcase` - Hero avec 4 onglets univers + carrousel
2. `hero` (milaura-hero-conversion) - CTA vers quiz
3. `collections` - Liste des collections
4. `featured_products` - Produits vedettes
5. `milaura_benefits_explorer` - Explorer les pierres par besoin
6. `milaura_video_process` - Video artisanat
7. `milaura_image_text` - Blocs image/texte
8. `milaura_quiz` - Quiz emotionnel complet
9. `testimonials` - Temoignages clients
10. `badges` - Trust badges

---

## 4. Sections Milaura (28 total)

### Homepage & Navigation

| Section | Fichier | Role | Particularites |
|---------|---------|------|----------------|
| **Navbar** | `milaura-navbar.liquid` | Navigation flottante | Badge quiz anime |
| **Announcement** | `milaura-announcement.liquid` | Barre d'annonce doree | Defilement + shimmer |
| **Hero Showcase** | `milaura-hero-showcase.liquid` | Hero principal | **4 onglets + dots + tablette** |
| **Hero Conversion** | `milaura-hero-conversion.liquid` | Hero CTA vers quiz | Badges reassurance |
| **Benefits Explorer** | `milaura-benefits-explorer.liquid` | Explorer pierres | Cartes interactives |
| **Collection List** | `milaura-collection-list.liquid` | Grille collections | Support video/image |
| **Featured Products** | `milaura-featured-products.liquid` | Grille produits | 4 colonnes desktop |
| **Video Process** | `milaura-video-process.liquid` | Video artisanat | URL video, titre |
| **Image Text** | `milaura-image-text.liquid` | Bloc image + texte | Layout configurable |
| **Quiz** | `milaura-quiz.liquid` | Quiz emotionnel | 7 questions, 5 profils, ~100 settings |
| **Testimonials** | `milaura-testimonials.liquid` | Carrousel temoignages | Blocs testimonial |
| **Trust Badges** | `milaura-trust-badges.liquid` | Badges de confiance | Blocs badge |
| **Footer** | `milaura-footer.liquid` | Pied de page | Liens, reseaux |

### Page Produit

| Section | Fichier | Role | Particularites |
|---------|---------|------|----------------|
| **Product Hero** | `milaura-product-hero.liquid` | Hero avec galerie | Layout galerie, badges, volume offer |
| **Sticky Bar** | `milaura-sticky-bar.liquid` | Barre fixe ATC | Apparait au scroll |
| **Reassurance** | `milaura-product-reassurance.liquid` | Bandeau badges | Blocs item |
| **Tabs** | `milaura-product-tabs.liquid` | Onglets description | Blocs description, specifications |
| **Story** | `milaura-product-story.liquid` | Histoire emotionnelle | Texte, lien quiz |
| **Stone** | `milaura-product-stone.liquid` | Focus pierre | Hotspots interactifs |
| **Scent** | `milaura-product-scent.liquid` | Pyramide olfactive | Notes tete/coeur/fond |
| **Ritual** | `milaura-product-ritual.liquid` | Etapes du rituel | Titre, sous-titre |
| **Craft** | `milaura-product-craft.liquid` | Artisanat qualite | Texte, badges |
| **Reviews** | `milaura-product-reviews.liquid` | Avis clients | Note moyenne, lien |
| **Crosssell** | `milaura-product-crosssell.liquid` | Produits complementaires | Recos pierre-first |
| **FAQ** | `milaura-product-faq.liquid` | Questions frequentes | Blocs Q/R accordeon |
| **CTA Final** | `milaura-product-cta-final.liquid` | Dernier CTA | Badges conversion |

### Autres

| Section | Fichier | Role |
|---------|---------|------|
| **Dashboard Recos** | `milaura-dashboard-recommendations.liquid` | Recos compte client |
| **PDP Recos** | `milaura-pdp-recommendations.liquid` | Wrapper recos PDP |

---

## 5. Customisation des sections

### Mise a jour 26 janvier 2026

**24 sections sur 28 ont maintenant des settings complets pour le customizer :**

#### Settings disponibles par section
- 📏 **Tailles de texte** : Range sliders en pixels
- 🎨 **Couleurs** : Color pickers pour tous les textes (titres, sous-titres, corps)
- ✏️ **Typographies** : Select entre Playfair Display / Lato / Dancing Script
- 📝 **Contenus** : Tous les textes editables

#### Organisation des settings (headers emoji)
```
📝 Contenu
✏️ Style / Typographie
🎨 Couleurs / Apparence
⚙️ Parametres
🖼️ Images / Media
🔗 Liens
📱 Options Mobile
```

#### Sections sans settings supplementaires
Ces sections etaient deja completes :
- `milaura-quiz.liquid` - ~100 settings couvrant tout
- `milaura-navbar.liquid` - Deja parametre
- `milaura-dashboard-recommendations.liquid` - Simple wrapper
- `milaura-pdp-recommendations.liquid` - Simple wrapper

#### Note technique importante
⚠️ **Validation Shopify** : Les valeurs `step` des range sliders doivent avoir **maximum 1 decimale**.
- ❌ `"step": 0.05` → Erreur
- ✅ `"step": 0.1` → OK
- ✅ `"step": 1` → OK

Solution pour rem avec precision : utiliser des entiers (ex: 8-15) et diviser par 10 dans le CSS :
```liquid
font-size: {{ section.settings.size | divided_by: 10.0 }}rem;
```

---

## 6. Snippets

### Systeme de recommandations

| Snippet | Role | Ou l'utiliser |
|---------|------|---------------|
| **milaura-recos-engine.liquid** | Moteur de calcul des recos | Inclus par les autres snippets |
| **milaura-pdp-recos.liquid** | Affichage recos page produit | Dans section crosssell |
| **milaura-cart-recos.liquid** | Affichage recos dans cart drawer | Dans cart-drawer.liquid |
| **milaura-dashboard-recos.liquid** | Affichage recos compte client | Dans account.liquid |

### Logique des recommandations

```
1. Recuperer stone_handle du produit actuel
2. Chercher dans collection "recos-pool" (max 50 produits)
3. Filtrer : meme pierre + type de produit different
4. Si < 2 resultats : fallback sur is_bestseller: true
5. Retourner max 2 produits
```

---

## 7. Assets CSS/JS

### milaura.css
**Role** : Styles globaux du theme Milaura

**Variables CSS principales** :
```css
--milaura-gold: #C0A062;        /* Or principal */
--milaura-gold-light: #E6C88B;  /* Or clair */
--milaura-gold-dark: #8F723A;   /* Or fonce */
--milaura-beige: #FDFBF7;       /* Fond clair */
--milaura-text: #000000;        /* Texte noir */
--milaura-border-radius: 20px;  /* Coins arrondis */
--milaura-spacing-sm: 12px;
--milaura-spacing-md: 24px;
--milaura-spacing-lg: 36px;
```

**Classes utilitaires** :
- `.milaura-btn` / `.milaura-btn-gold` : Boutons
- `.milaura-card` : Cartes avec hover
- `.milaura-glass` : Glassmorphism
- `.milaura-section-card` : Conteneur halo
- `.milaura-cta` : Boutons CTA

### Hero Showcase - Particularites

La section hero-showcase a ete optimisee avec :
- **4 onglets** : Pierres & mineraux, Bijoux & creations, Bougies & senteurs, Rituels & bien-etre
- **Dots navigation** : Indicateurs cliquables synchronises avec les onglets
- **Breakpoint tablette** (769-1024px) : Layout 35/65%
- **Mobile** : Descriptions tronquees a 2 lignes, option pour cacher
- **Petit mobile** (<380px) : Descriptions cachees automatiquement

---

## 8. Data Model Shopify

### Metaobjects (3 types)

#### stone (Pierre)
| Champ | Type | Role |
|-------|------|------|
| handle | single_line_text | Identifiant unique (ex: "calcedoine") |
| name | single_line_text | Nom affiche (ex: "Calcedoine bleue") |
| color | single_line_text | Couleur (ex: "Bleu doux") |
| short_essentiel | multi_line_text | Description 80-120 mots |
| benefits_bullets | list.single_line_text | 3 benefices |
| ritual_steps | list.single_line_text | 3-5 etapes rituel |
| care | single_line_text | Entretien |

**Donnees seed** : 5 pierres (calcedoine, obsidienne, amethyste, quartz-rose, aventurine)

#### scent (Senteur)
| Champ | Type | Role |
|-------|------|------|
| handle | single_line_text | Identifiant (ex: "neroli") |
| name | single_line_text | Nom (ex: "Neroli") |
| description_short | multi_line_text | Description 40-70 mots |
| notes_top | single_line_text | Notes de tete |
| notes_heart | single_line_text | Notes de coeur |
| notes_base | single_line_text | Notes de fond |
| mood | single_line_text | Phrase ambiance |

**Donnees seed** : 5 senteurs (neroli, bois-oud, the-blanc, ambre-gris, fleur-oranger)

#### emotional_profile (Profil emotionnel)
| Champ | Type | Role |
|-------|------|------|
| handle | single_line_text | Identifiant (ex: "reconfort") |
| name | single_line_text | Nom (ex: "Reconfort") |
| candle_product | product_reference | Bougie recommandee |
| candle_variant_id | single_line_text | ID variant si plusieurs |
| stone_handle | single_line_text | Handle pierre associee |
| scent_handle | single_line_text | Handle senteur associee |
| hero_copy | multi_line_text | Texte page resultat |
| needs_bullets | list.single_line_text | 3 besoins |
| ritual_morning_steps | list.single_line_text | Rituel matin |
| ritual_evening_steps | list.single_line_text | Rituel soir |

**Donnees seed** : 5 profils (reconfort, protection, serenite, elegance, joie-de-vivre)

### Product Metafields (6)

| Namespace.Key | Type | Role | Obligatoire |
|---------------|------|------|-------------|
| milaura.stone_handle | single_line_text | Handle pierre | Oui (bijoux, bougies) |
| milaura.scent_handle | single_line_text | Handle senteur | Oui (bougies) |
| milaura.product_type_handle | single_line_text | Type produit | Oui |
| milaura.baseline | single_line_text | Phrase emotionnelle | Non |
| milaura.is_bestseller | boolean | Fallback pour recos | Non |
| milaura.energy_handle | single_line_text | Energie (sauge) | Non |

### Customer Metafields (2)

| Namespace.Key | Type | Role |
|---------------|------|------|
| milaura.quiz_history | json | Historique quiz (array) |
| milaura.last_profile_handle | single_line_text | Dernier profil |

---

## 9. Configuration et activation

### Etape 1 : Creer les Metaobjects
1. Admin Shopify > Settings > Custom data > Metaobjects
2. Creer "stone" avec les 7 champs
3. Creer "scent" avec les 7 champs
4. Creer "emotional_profile" avec les 10 champs

### Etape 2 : Remplir les donnees seed
1. Content > Metaobjects > Stone > Add entry
2. Copier les donnees de config/seed-data/stones-seed.json
3. Repeter pour scent et emotional_profile

### Etape 3 : Definir les metafields produit
1. Settings > Custom data > Products
2. Ajouter les 6 metafields

### Etape 4 : Creer la collection recos-pool
1. Products > Collections > Create collection
2. Handle : "recos-pool"
3. Type : Manual
4. Ajouter 10-50 produits maximum

### Etape 5 : Mapper les produits
Pour chaque produit :
1. Ouvrir le produit > Custom data
2. Remplir stone_handle, product_type_handle
3. Pour bougies : remplir scent_handle

### Etape 6 : Assigner le template produit
1. Produit > Theme template
2. Selectionner "product.milaura"

---

## 10. Troubleshooting

### Les recos ne s'affichent pas
1. Verifier que la collection "recos-pool" existe
2. Verifier que les produits ont `stone_handle` rempli
3. Verifier que le snippet est inclus au bon endroit

### Le quiz ne fonctionne pas
1. Verifier la console pour erreurs JS
2. Verifier que les blocs "question" sont configures dans le customizer
3. Verifier que les produits sont assignes aux profils dans les settings

### Erreur de validation Shopify
```
"step must have 1 or less decimal digits"
```
→ Utiliser des entiers dans le schema et diviser par 10 dans le CSS

```
"color_schemes is not a valid attribute"
```
→ Ne pas modifier settings_schema.json de Dawn

### Performance lente
1. Verifier que recos-pool a < 50 produits
2. Verifier les images (lazy loading, taille optimisee)
3. Lancer Lighthouse pour diagnostiquer

### Le hero-showcase n'affiche pas 4 onglets
1. Dans le customizer, ajouter un 4e bloc "Univers"
2. Configurer : tab_label, icon, title, text, image, cta_label, cta_link

---

## Contacts et ressources

- **Steering file principal** : `CLAUDE.md`
- **Reference metafields** : `METAFIELDS-REFERENCE.md`
- **Contenu legal** : `LEGAL-PAGES-CONTENT.md`

---

*Document de passation - Theme Milaura - Janvier 2026*
