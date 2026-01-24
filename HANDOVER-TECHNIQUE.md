# Guide Technique Complet - Theme Milaura

> **Document de passation** - Tout ce qu'il faut savoir pour reprendre le projet
> **Derniere MAJ** : 24 janvier 2026

---

## Table des matieres

1. [Vue d'ensemble](#1-vue-densemble)
2. [Architecture des fichiers](#2-architecture-des-fichiers)
3. [Templates JSON](#3-templates-json)
4. [Sections Milaura](#4-sections-milaura)
5. [Snippets](#5-snippets)
6. [Assets CSS/JS](#6-assets-cssjs)
7. [Data Model Shopify](#7-data-model-shopify)
8. [Configuration et activation](#8-configuration-et-activation)
9. [Troubleshooting](#9-troubleshooting)

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
- **Typo** : Playfair Display (titres), Lato (corps)

### Etat actuel
- **Avancement** : ~70-75%
- **Fonctionnel** : Structure, sections, quiz, recommandations
- **A faire** : Pass UI/UX, contenu produits, produits reels

---

## 2. Architecture des fichiers

```
dawn-X-milaura/
│
├── assets/                          # CSS et JS
│   ├── milaura.css                  # Styles globaux Milaura
│   ├── milaura-quiz.css             # Styles du quiz
│   ├── milaura-quiz.js              # Logique quiz (navigation, scoring)
│   ├── milaura-quiz-config.js       # Questions et reponses du quiz
│   ├── milaura-quiz-result.css      # Styles page resultat
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
│   │   ├── stone-definition.json
│   │   ├── scent-definition.json
│   │   └── emotional-profile-definition.json
│   ├── metafields/                  # Definitions des metafields
│   │   ├── product-metafields-definition.json
│   │   └── customer-metafields-definition.json
│   └── seed-data/                   # Donnees de reference
│       ├── stones-seed.json         # 5 pierres
│       ├── scents-seed.json         # 5 senteurs
│       ├── emotional-profiles-seed.json # 5 profils quiz
│       └── products-mapping-template.json
│
├── layout/
│   └── theme.liquid                 # Layout principal (modifie pour fond Milaura)
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
**Activation** : Automatique (c'est la homepage)

**Sections incluses** :
1. `milaura_hero_showcase` - Hero avec onglets univers
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

| Section | Fichier | Role | Configuration |
|---------|---------|------|---------------|
| **Navbar** | `milaura-navbar.liquid` | Navigation flottante glassmorphism | Customizer > Header |
| **Announcement** | `milaura-announcement.liquid` | Barre d'annonce doree | Texte, lien, couleur |
| **Hero Showcase** | `milaura-hero-showcase.liquid` | Hero avec onglets et carrousel | Blocs "universe" pour chaque onglet |
| **Hero Conversion** | `milaura-hero-conversion.liquid` | Hero CTA vers quiz | Texte, bouton, badges reassurance |
| **Benefits Explorer** | `milaura-benefits-explorer.liquid` | Explorer pierres par besoin emotionnel | Blocs "benefit" avec pierre/description |
| **Collection List** | `milaura-collection-list.liquid` | Grille de collections | Blocs "category" |
| **Featured Products** | `milaura-featured-products.liquid` | Grille produits vedettes | Collection source, nombre |
| **Video Process** | `milaura-video-process.liquid` | Video artisanat | URL video, titre |
| **Image Text** | `milaura-image-text.liquid` | Bloc image + texte | Image, texte, layout |
| **Quiz** | `milaura-quiz.liquid` | Quiz emotionnel complet | 7 blocs "question", config profils |
| **Testimonials** | `milaura-testimonials.liquid` | Carrousel temoignages | Blocs "testimonial" |
| **Trust Badges** | `milaura-trust-badges.liquid` | Badges de confiance | Blocs "badge" |
| **Footer** | `milaura-footer.liquid` | Pied de page | Liens, reseaux sociaux |

### Page Produit

| Section | Fichier | Role | Configuration |
|---------|---------|------|---------------|
| **Product Hero** | `milaura-product-hero.liquid` | Hero avec galerie media | Layout galerie, badges, volume offer |
| **Sticky Bar** | `milaura-sticky-bar.liquid` | Barre fixe ATC au scroll | Texte bouton, message marketing |
| **Reassurance** | `milaura-product-reassurance.liquid` | Bandeau badges | Blocs "item" avec icone/texte |
| **Tabs** | `milaura-product-tabs.liquid` | Onglets description/specs | Blocs description, specifications, content |
| **Story** | `milaura-product-story.liquid` | Histoire emotionnelle | Texte, lien quiz |
| **Stone** | `milaura-product-stone.liquid` | Focus pierre avec hotspots | Image, hotspots, benefices |
| **Scent** | `milaura-product-scent.liquid` | Pyramide olfactive | Notes tete/coeur/fond, partenaire |
| **Ritual** | `milaura-product-ritual.liquid` | Etapes du rituel | Titre, sous-titre |
| **Craft** | `milaura-product-craft.liquid` | Artisanat qualite | Texte, badges |
| **Reviews** | `milaura-product-reviews.liquid` | Avis clients | Note moyenne, nombre, lien |
| **Crosssell** | `milaura-product-crosssell.liquid` | Produits complementaires | Titre, sous-titre |
| **FAQ** | `milaura-product-faq.liquid` | Questions frequentes | Blocs Q/R via schema |
| **CTA Final** | `milaura-product-cta-final.liquid` | Dernier CTA conversion | Titre, badges |

### Autres

| Section | Fichier | Role |
|---------|---------|------|
| **Dashboard Recos** | `milaura-dashboard-recommendations.liquid` | Recos sur compte client |
| **PDP Recos** | `milaura-pdp-recommendations.liquid` | Wrapper recos page produit |

---

## 5. Snippets

### Systeme de recommandations

| Snippet | Role | Ou l'utiliser |
|---------|------|---------------|
| **milaura-recos-engine.liquid** | Moteur de calcul des recos (logique pierre-first) | Inclus par les autres snippets |
| **milaura-pdp-recos.liquid** | Affichage recos sur page produit | Dans section crosssell ou main-product |
| **milaura-cart-recos.liquid** | Affichage recos dans cart drawer | Dans cart-drawer.liquid |
| **milaura-dashboard-recos.liquid** | Affichage recos sur compte client | Dans account.liquid |

### Logique des recommandations

```
1. Recuperer stone_handle du produit actuel
2. Chercher dans collection "recos-pool" (max 50 produits)
3. Filtrer : meme pierre + type de produit different
4. Si < 2 resultats : fallback sur is_bestseller: true
5. Retourner max 2 produits
```

### Integration

Pour activer les recos dans le cart drawer :
```liquid
{% comment %} Dans snippets/cart-drawer.liquid, avant le bouton checkout {% endcomment %}
{% render 'milaura-cart-recos' %}
```

---

## 6. Assets CSS/JS

### milaura.css
**Role** : Styles globaux du theme Milaura
**Variables CSS principales** :
```css
--milaura-gold: #C0A062;        /* Or principal */
--milaura-gold-light: #E6C88B;  /* Or clair */
--milaura-beige: #FDFBF7;       /* Fond clair */
--milaura-text: #000000;        /* Texte noir */
--milaura-border-radius: 20px;  /* Coins arrondis */
```

### milaura-quiz.js
**Role** : Logique du quiz emotionnel
- Gestion navigation entre questions
- Calcul du scoring
- Affichage des resultats
- Stockage sessionStorage

### milaura-quiz-config.js
**Role** : Configuration des questions du quiz
- 7 questions avec 4 reponses chacune
- Mapping reponse -> profil emotionnel
- Contenu des profils (description, produit, mantra)

---

## 7. Data Model Shopify

### Metaobjects (3 types)

#### stone (Pierre)
**Role** : Contenu des pierres (affiche sur PDP, quiz)
**Champs** :
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
**Role** : Contenu des senteurs (bougies uniquement)
**Champs** :
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
**Role** : Profils quiz (resultat + recommandation bougie)
**Champs** :
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
| milaura.product_type_handle | single_line_text | Type (bracelet, collier, bougie...) | Oui |
| milaura.baseline | single_line_text | Phrase emotionnelle hero | Non |
| milaura.is_bestseller | boolean | Fallback pour recos | Non |
| milaura.energy_handle | single_line_text | Energie (sauge) | Non |

### Customer Metafields (2)

| Namespace.Key | Type | Role |
|---------------|------|------|
| milaura.quiz_history | json | Historique quiz (array) |
| milaura.last_profile_handle | single_line_text | Dernier profil |

---

## 8. Configuration et activation

### Etape 1 : Creer les Metaobjects
1. Admin Shopify > Settings > Custom data > Metaobjects
2. Creer "stone" avec les 7 champs (voir config/metaobjects/stone-definition.json)
3. Creer "scent" avec les 7 champs
4. Creer "emotional_profile" avec les 10 champs

### Etape 2 : Remplir les donnees seed
1. Content > Metaobjects > Stone > Add entry
2. Copier les donnees de config/seed-data/stones-seed.json
3. Repeter pour scent et emotional_profile

### Etape 3 : Definir les metafields produit
1. Settings > Custom data > Products
2. Ajouter les 6 metafields (voir config/metafields/product-metafields-definition.json)

### Etape 4 : Creer la collection recos-pool
1. Products > Collections > Create collection
2. Handle : "recos-pool"
3. Type : Manual
4. Ajouter 10-50 produits maximum

### Etape 5 : Mapper les produits
Pour chaque produit :
1. Ouvrir le produit > Custom data
2. Remplir stone_handle (ex: "calcedoine")
3. Remplir product_type_handle (ex: "bracelet")
4. Pour bougies : remplir scent_handle

### Etape 6 : Assigner le template produit
1. Produit > Theme template
2. Selectionner "product.milaura"

### Etape 7 : Creer la page quiz (optionnel)
Si quiz sur page separee :
1. Pages > Add page
2. Template : page.quiz (si existe)
3. Handle : "quiz-emotionnel"

---

## 9. Troubleshooting

### Les recos ne s'affichent pas
1. Verifier que la collection "recos-pool" existe
2. Verifier que les produits ont `stone_handle` rempli
3. Verifier que le snippet est inclus au bon endroit

### Le quiz ne fonctionne pas
1. Verifier que milaura-quiz.js est charge
2. Verifier la console pour erreurs JS
3. Verifier que les blocs "question" sont configures

### Les metaobjects ne s'affichent pas
1. Verifier les handles (lowercase, pas d'accents)
2. Verifier le lookup Liquid : `shop.metaobjects.stone['calcedoine']`
3. Verifier que les champs obligatoires sont remplis

### Performance lente
1. Verifier que recos-pool a < 50 produits
2. Verifier les images (lazy loading, taille optimisee)
3. Lancer Lighthouse pour diagnostiquer

---

## Contacts et ressources

- **Steering file principal** : `CLAUDE.md`
- **Reference metafields** : `METAFIELDS-REFERENCE.md`
- **Contenu legal** : `LEGAL-PAGES-CONTENT.md`

---

*Document de passation - Theme Milaura - Janvier 2026*
