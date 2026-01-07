# Roadmap V1 Milaura — Plan d'Exécution

> Document généré le 7 janvier 2026
> Statut : **Prêt pour exécution**
> PM : John

---

## Table des matières

1. [Vue d'ensemble](#1-vue-densemble)
2. [Phase 0 : Fondations Data](#2-phase-0--fondations-data)
3. [Phase 1 : Core Experience](#3-phase-1--core-experience)
4. [Phase 2 : Funnel de Conversion](#4-phase-2--funnel-de-conversion)
5. [Phase 3 : Post-Achat & Contenu](#5-phase-3--post-achat--contenu)
6. [Phase 4 : Polish & Lancement](#6-phase-4--polish--lancement)
7. [Gantt simplifié](#7-gantt-simplifié)
8. [Critères de succès V1](#8-critères-de-succès-v1)
9. [Ce qui n'est PAS dans V1](#9-ce-qui-nest-pas-dans-v1)

---

## ⚠️ RÈGLE VERROUILLÉE : QUIZ BOUGIE-ONLY

**Cette règle est absolue et non négociable en V1.**

### Le quiz en V1

✅ **CE QUE LE QUIZ FAIT** :
- Recommande **1 seule bougie** (pierre + senteur)
- Affiche cette bougie sur la page résultat
- Permet d'ajouter cette bougie au panier
- **C'est tout. Rien d'autre.**

❌ **CE QUE LE QUIZ NE FAIT PAS** :
- Ne navigue PAS dans le catalogue bijoux
- Ne recommande PAS de bijou sur la page résultat
- Ne scanne PAS le catalogue pour "trouver le meilleur produit"
- N'affiche PAS de suggestions complémentaires (recos bijoux, etc.)

### Principe "One Choice"

Le résultat du quiz = **1 bougie, point final.**

Les recommandations bijoux (pierre complémentaire) existent ailleurs :
- ✅ PDP (section crosssell)
- ✅ Cart drawer
- ✅ Dashboard client
- ❌ **PAS** sur la page résultat quiz

### Évolution V2 (si activité fonctionne)

Le quiz passera de **bougie** à **diffuseur passif**.
- Même logique : 1 diffuseur recommandé
- Même pierre + même intention
- Pas de montée en "20+ pierres" comme objectif principal
- Focus = changer le type de produit recommandé (bougie → diffuseur)

### Data model : extensible sans refonte

Le metaobject `emotional_profile` (Phase 0) doit permettre de changer le produit recommandé **sans refonte** :
- V1 : `recommended_product` = bougie
- V2 : `recommended_product` = diffuseur passif
- Champ produit flexible (product_reference), pas figé sur "candle"

---

## 1. Vue d'ensemble

### 1.1 Objectif V1

Lancer le plus beau Shopify 2026 avec :
- Expérience premium mobile-first
- Funnel quiz → produit → panier → achat fluide
- Recommandations intelligentes pierre-first
- Contenu émotionnel cohérent
- Performance et scalabilité garanties

### 1.2 Périmètre V1

| Inclus ✅ | Exclu ❌ (V2) |
|----------|--------------|
| 5 pierres, 5 profils, 5 senteurs | 20+ pierres |
| Quiz 6 questions | Complémentarité émotionnelle avancée |
| Page produit 12 sections | Collections automatiques par pierre |
| Recos sur 4 points de contact | Emails automatisés post-achat |
| Homepage + quiz + produit + panier | Blog et contenu régulier |
| À propos + FAQ | Témoignages vidéo |
| Emails transactionnels de base | Analytics avancés et A/B testing |

### 1.3 Contraintes critiques

| Contrainte | Impact |
|------------|--------|
| **Mobile-first absolu** | 80% du trafic, design mobile puis desktop |
| **Aucun scan catalogue** | Index metaobjects obligatoire pour recos |
| **Performance Lighthouse > 90** | Lazy loading, optimisation images |
| **Source de vérité unique** | Metaobjects → metafields, jamais l'inverse |
| **Zéro claim médical** | Validation éditoriale PM systématique |

### 1.4 Architecture des dépendances

```
PHASE 0 : Data Model
    ↓
PHASE 1 : Core Experience (Page produit, Homepage, Recos)
    ↓
PHASE 2 : Funnel (Quiz, Résultat, Cart)
    ↓
PHASE 3 : Post-Achat (Dashboard, Emails, Contenu)
    ↓
PHASE 4 : Polish (Tests, Perf, Launch)
```

---

## 2. Phase 0 : Fondations Data

**Durée estimée** : 3 jours
**Bloque** : Tout le reste
**Responsable** : Dev + PM

### 2.1 Objectifs

- Créer la structure de données Shopify complète
- Remplir le contenu pour les 5 pierres/profils/senteurs
- Configurer les metafields produits
- Créer l'index de recommandations

### 2.2 Tâches

#### 2.2.1 Metaobjects (Shopify Admin)

- [ ] **Créer metaobject `stone`**
  - 17 champs (cf. contenu-editorial-spec.md §8.3)
  - Validation : handle, name, short_essentiel, benefits_bullets obligatoires

- [ ] **Créer metaobject `profile`**
  - 10 champs (cf. contenu-editorial-spec.md §8.3)
  - Validation : tous champs obligatoires sauf quotes et complementary_profile

- [ ] **Créer metaobject `scent`**
  - 7 champs (cf. contenu-editorial-spec.md §8.3)
  - Validation : tous champs obligatoires sauf notes pyramide

- [ ] **Créer metaobject `emotional_profile` (quiz)**
  - **CRITIQUE : Objet central UNIQUE du projet**
  - ⚠️ **C'EST LE SEUL objet "profil" du projet** (pas d'autre objet `profile` en parallèle)
  - Utilisé pour : Quiz, Dashboard, Narration, Emails
  - **CRITIQUE : Data model extensible bougie → diffuseur**
  - Structure :
    - `handle` (ex: "reconfort")
    - `name` (ex: "Réconfort")
    - `primary_stone` (metaobject_reference → `stone`)
    - `primary_scent` (metaobject_reference → `scent`)
    - `recommended_product` (product_reference) ← **FLEXIBLE, pas "candle_product"**
    - `product_type_v1` (single_line: "bougie") ← pour traçabilité
    - `hero_copy`, `needs_bullets`, `ritual_morning_steps`, `ritual_evening_steps`
  - **Règle V1** : `recommended_product` pointe vers la bougie du profil
  - **Règle V2** : `recommended_product` pointera vers le diffuseur (changement admin, zéro refonte code)
  - **Règle anti-duplication** : Aucun autre metaobject "profile" ne doit être créé

- [ ] **Créer metaobject `quiz_question`**
  - 3 champs (cf. quiz-emotionnel-spec.md §7.2)
  - JSON options avec scoring

- [ ] **Créer metaobject `reco_index`** (CRITIQUE pour perf)
  - **Note** : Utilisé pour recos PDP et cart drawer UNIQUEMENT
  - **PAS utilisé sur page résultat quiz V1** (quiz = 1 bougie, aucune reco)
  - Structure :
    - `key_handle` (ex: "calcedoine")
    - `kind` ("stone" ou "energy")
    - `products_all` (liste product references)
    - `products_bracelet`, `products_collier`, `products_bague`, `products_bougie`
    - `fallback_bestsellers`
  - **V1** : Champs upsell optionnels/désactivés pour résultat quiz (principe "one choice")
  - **Utilisation V1** : Crosssell PDP, cart drawer uniquement

#### 2.2.2 Metafields Produits

- [ ] **Définir metafields produit**
  - `milaura.stone` (metaobject_reference → `stone`)
  - `milaura.profile` (metaobject_reference → `profile`)
  - `milaura.scent` (metaobject_reference → `scent`)
  - `milaura.stone_handle` (single_line_text_field)
  - `milaura.energy_handle` (single_line_text_field)
  - `milaura.product_type_handle` (single_line_text_field)
  - `milaura.is_bestseller` (boolean)
  - `milaura.baseline` (single_line_text_field)
  - Tous les autres (cf. page-produit-spec.md §7.1)

- [ ] **Définir metafield shop**
  - `milaura.energy_stone_mapping` (json)

#### 2.2.3 Contenu des 5 pierres

Pour chaque pierre (Calcédoine, Obsidienne, Améthyste, Quartz rose, Aventurine) :

- [ ] Remplir metaobject `stone` complet
  - Rédaction validée par PM (conformité ton + zéro claim médical)
  - Photos macro haute qualité uploadées

#### 2.2.4 Contenu des 5 profils

Pour chaque profil (Réconfort, Protection, Sérénité, Élégance, Joie de vivre) :

- [ ] Remplir metaobject `profile` complet
  - Lier à `stone` et `scent` correspondants
  - Validation copy PM

#### 2.2.5 Contenu des 5 senteurs

Pour chaque senteur (Néroli, Bois d'oud, Thé blanc, Ambre gris, Fleur d'oranger) :

- [ ] Remplir metaobject `scent` complet
  - Notes pyramide
  - Description courte validée

#### 2.2.6 Mapping Produits Existants

- [ ] Mapper tous produits bijoux V1 avec metafields
  - `stone_handle`, `product_type_handle`, `is_bestseller`
  - Référence `stone` metaobject

- [ ] Mapper toutes bougies V1 avec metafields
  - `stone_handle`, `scent`, `profile`

- [ ] Remplir index `reco_index` pour les 5 pierres
  - Listes produits par type
  - Bestsellers fallback

#### 2.2.7 Quiz Data

- [ ] Créer 5 metaobjects `emotional_profile` (identiques aux `profile` ou liés ?)
- [ ] Créer 6 metaobjects `quiz_question` avec options JSON
  - Scoring complet (cf. quiz-emotionnel-spec.md §4.4)

### 2.3 Critères d'acceptation Phase 0

- [ ] 5 metaobjects `stone` remplis et validés
- [ ] 5 metaobjects `profile` remplis et validés
- [ ] 5 metaobjects `scent` remplis et validés
- [ ] 5 metaobjects `reco_index` remplis (1 par pierre)
- [ ] 6 metaobjects `quiz_question` créés avec scoring
- [ ] Tous metafields produits définis dans Shopify
- [ ] 10+ produits mappés avec leurs metafields
- [ ] Validation PM sur conformité éditoriale (zéro claim médical)
- [ ] Test de requête metaobject fonctionnel dans le thème

### 2.4 Bloquants

- [ ] Accès admin Shopify configuré
- [ ] Photos produits et pierres en haute qualité disponibles
- [ ] Validation copy par PM terminée

---

## 3. Phase 1 : Core Experience

**Durée estimée** : 7 jours
**Dépend de** : Phase 0 complète
**Bloque** : Phase 2 et 3

### 3.1 Objectifs

- Page produit premium fonctionnelle
- Homepage avec teaser quiz
- Système de recommandations opérationnel
- Expérience mobile impeccable

### 3.2 Tâches

#### 3.2.1 Page Produit (12 sections)

**Ordre d'implémentation** :

1. **Sections critiques d'abord** (bloquent conversion)
   - [ ] `sections/milaura-product-hero.liquid`
     - Hero immersif 100vh mobile
     - Nom pierre + baseline émotionnelle
     - Loading eager

   - [ ] `sections/milaura-product-buy.liquid`
     - Sticky bottom mobile, sidebar desktop
     - États : compact/expanded mobile
     - Variantes + quantité
     - Réassurance (3 badges)

   - [ ] `sections/milaura-product-stone.liquid` ★ PILIER
     - Image macro pierre pleine largeur
     - Hotspots (2-3) avec tooltips
     - 3 bénéfices (depuis metaobject)
     - Texte court
     - Adaptation bijou/bougie/sauge

2. **Sections essentielles** (différenciation)
   - [ ] `sections/milaura-product-story.liquid`
     - Histoire/intention 3-5 phrases
     - Lien quiz si profil lié

   - [ ] `sections/milaura-product-ritual.liquid`
     - 4 étapes avec icônes
     - Animation séquentielle scroll
     - Rituels différenciés par type produit

   - [ ] `sections/milaura-product-craft.liquid`
     - 4 badges artisanat
     - Grille 2x2 mobile
     - Texte court

3. **Sections support** (réassurance, panier)
   - [ ] `sections/milaura-product-scent.liquid` (conditionnel bougies)
     - Pyramide olfactive 3 colonnes
     - Logo Maison Candella

   - [ ] `sections/milaura-product-gallery.liquid`
     - Carrousel swipe mobile
     - Grille + thumbnails desktop
     - Lightbox

   - [ ] `sections/milaura-product-reviews.liquid`
     - Stars + note + nombre
     - Carrousel témoignages
     - Lien vers tous avis

   - [ ] `sections/milaura-product-crosssell.liquid`
     - Wrapper pour snippet recos (voir §3.2.2)

   - [ ] `sections/milaura-product-faq.liquid`
     - Accordéon
     - FAQ par type produit

   - [ ] `sections/milaura-product-cta-final.liquid`
     - Dernière chance conversion
     - CTA + réassurance

4. **Template JSON**
   - [ ] `templates/product.milaura.json`
     - Ordre des 12 sections
     - Settings par défaut
     - Logique conditionnelle (scent si bougie)

#### 3.2.2 Système de Recommandations

**Fichiers** :
- [ ] `snippets/milaura-recommendations.liquid`
  - Contextes : product, cart, quiz_result, dashboard
  - Logique index-based (PAS de scan catalogue)
  - Fallback bestsellers
  - Limite 2 produits max
  - (cf. recommandations-spec.md §7.2 pour code complet)

- [ ] `snippets/milaura-reco-card.liquid`
  - Format mobile 160px, desktop 200px
  - Image lazy load
  - CTA "Ajouter" AJAX
  - États : default, loading, success, rupture

- [ ] `assets/milaura-recos.js`
  - Fonction `addToCart()`
  - Update cart count
  - Feedback visuel 2s

- [ ] Styles recos dans `assets/milaura.css`
  - Scroll horizontal mobile
  - Grid 2 cols desktop
  - États bouton

**Intégration** :
- [ ] Section crosssell PDP utilise snippet
- [ ] (Phase 2) Cart drawer utilise snippet
- [ ] (Phase 2) Page résultat quiz utilise snippet
- [ ] (Phase 3) Dashboard utilise snippet

#### 3.2.3 Homepage

- [ ] **Section hero homepage**
  - Création de `sections/milaura-hero-homepage.liquid`
  - Messaging : "Et si une pierre était faite pour vous ?"
  - Visuel : 5 bougies en halo
  - CTA vers quiz

- [ ] **Section teaser quiz**
  - `sections/milaura-quiz-teaser.liquid`
  - "Trouvez votre intention en 60 secondes"
  - Visuel : les 5 profils
  - CTA "Faire le quiz"
  - Placement above the fold mobile

- [ ] **Template homepage**
  - `templates/index.json`
  - Ordre : Hero → Teaser Quiz → [sections existantes Dawn si besoin]

#### 3.2.4 Styles & Micro-interactions

- [ ] **Variables CSS** dans `assets/milaura.css`
  - Palette complète (or, beiges, ombres)
  - Espacements
  - Borders, shadows

- [ ] **Classes utilitaires**
  - `.milaura-btn`, `.milaura-card`, `.milaura-glass`
  - `.milaura-section-card` (halo Vision OS)

- [ ] **Animations scroll**
  - IntersectionObserver pour fade-in
  - Respect `prefers-reduced-motion`

- [ ] **Hotspots pierre**
  - Tooltips mobile (tap, 3s)
  - Tooltips desktop (hover)

### 3.3 Critères d'acceptation Phase 1

- [ ] Page produit 12 sections opérationnelles
- [ ] Toutes sections consomment metaobjects correctement
- [ ] Section Pierre affiche contenu depuis `stone` metaobject
- [ ] Recommandations affichent 2 produits pertinents (même pierre)
- [ ] Aucun scan `collections.all.products` (utilise index)
- [ ] Homepage avec hero + teaser quiz
- [ ] Mobile-first : test sur iPhone et Android réels
- [ ] Sticky buy bar fonctionne (compact/expand)
- [ ] Ajout panier AJAX fonctionne sur recos
- [ ] Lighthouse mobile > 85 (objectif 90 en Phase 4)
- [ ] Pas d'erreur console
- [ ] Customizer Shopify fonctionnel (toutes sections éditables)

### 3.4 Tests prioritaires

- [ ] Test page produit bijou → affiche pierre + 2 recos bijoux
- [ ] Test page produit bougie → affiche pierre + senteur + 2 recos bijoux
- [ ] Test produit sans stock → bouton "Indisponible"
- [ ] Test mobile scroll → sections fluides, sticky bar fonctionne
- [ ] Test hotspots → tooltips s'affichent
- [ ] Test recommandations → index retourne les bons produits

---

## 4. Phase 2 : Funnel de Conversion

**Durée estimée** : 5 jours
**Dépend de** : Phase 1 complète
**Bloque** : Phase 3

### 4.1 Objectifs

- Quiz émotionnel fonctionnel
- Page résultat quiz personnalisée
- Cart drawer avec recos intelligentes
- Funnel Homepage → Quiz → Résultat → Achat fluide

### 4.2 Tâches

#### 4.2.1 Quiz Émotionnel

**Page quiz** :
- [ ] `templates/page.quiz.liquid`
  - Écran intro (promesse, durée, réassurance, CTA)
  - 6 écrans questions (progress bar, options avec icônes)
  - Écran calcul (loader 2-3s)
  - Navigation retour discrète

- [ ] `assets/milaura-quiz.js`
  - Gestion navigation entre questions
  - Stockage réponses (sessionStorage)
  - Calcul scoring (cf. quiz-emotionnel-spec.md §4.1)
  - Gestion égalités (Q6 > Q3 > alphabétique)
  - Redirect vers page résultat avec profil

- [ ] **Styles quiz** dans `assets/milaura.css`
  - Cards options mobile (full width, 44px min)
  - Progress bar
  - Animations transitions (slide ou fade)
  - Loader élégant (bougie pulse ?)

**Données quiz** :
- [ ] Consommer metaobjects `quiz_question`
- [ ] Parser JSON options + scoring
- [ ] Lier résultat à `emotional_profile` metaobject

#### 4.2.2 Page Résultat Quiz

**⚠️ RÈGLE CRITIQUE : Résultat = 1 bougie, RIEN D'AUTRE**

- [ ] `templates/page.quiz-result.liquid`
  - **Section 1 : Révélation**
    - Nom bougie + visuel
    - Phrase personnalisée (depuis `profile.hero_copy`)

  - **Section 2 : Explication**
    - Pourquoi cette bougie (senteur + pierre)
    - Texte depuis metaobjects `scent` et `stone`

  - **Section 3 : Rituel**
    - 4 étapes depuis `profile.ritual_*`

  - **Section 4 : Réassurance**
    - Badges (France, Candella, Pierre certifiée, Livraison)

  - **Section 5 : CTA Principal**
    - Bougie (prix + ajouter panier)
    - **C'EST TOUT. Fin de la page.**

  - ❌ **PAS de Section 6 "Suggestion Bijou"**
  - ❌ **PAS de recos supplémentaires**
  - ❌ **PAS de "Vous aimerez aussi"**
  - ✅ Principe "One Choice" respecté : le quiz recommande 1 bougie, point final.

- [ ] **Gestion rupture stock bougie** ⚠️ SORTIE DE CRISE UX
  - **Message principal** : "Cette bougie est en cours de fabrication"
  - **CTA primaire** : "Me prévenir quand elle revient" (champ email/SMS + bouton submit)
  - **CTA secondaire** : "Revenir à l'accueil" (lien vers homepage)
  - **Optionnel** : "Recevoir mon résultat par email en attendant" (sauvegarde profil)
  - ⚠️ **PAS de "Voir d'autres bougies"** (principe one choice)
  - ⚠️ **PAS de reco alternative produit** (le quiz recommande cette bougie, point)
  - ✅ **Liste d'attente = sauve les leads** sans tuer one choice

- [ ] **Sauvegarde résultat client** (si connecté)
  - Customer metafield `milaura.quiz_result` (handle profil)
  - Customer metafield `milaura.quiz_date`
  - Customer metafield `milaura.quiz_product_id` (ID bougie recommandée)
  - Historique JSON `milaura.quiz_history`

#### 4.2.3 Cart Drawer avec Recos

- [ ] **Modifier/Créer cart drawer**
  - Soit modifier Dawn cart drawer existant
  - Soit créer `sections/milaura-cart-drawer.liquid`

- [ ] **Contenu drawer** :
  - Liste items panier
  - Section "Avant de finaliser" (recos)
  - Snippet `milaura-recommendations.liquid` contexte `cart`
  - Sous-total
  - CTA "Commander" (vers checkout)

- [ ] **Logique recos panier**
  - Extraire pierres du panier
  - Recommander ce qui manque (bijou si pas de bijou, bougie si pas de bougie)
  - Max 2 produits
  - Filtrer produits déjà dans panier
  - Fallback bestsellers si besoin

- [ ] **Trigger drawer**
  - Ajout produit → ouvre drawer
  - Clic icône panier header → ouvre drawer

### 4.3 Critères d'acceptation Phase 2

- [ ] Quiz 6 questions fonctionnel
- [ ] Scoring calcule le bon profil (test cas limites égalité)
- [ ] Page résultat affiche contenu personnalisé (nom, texte, rituel)
- [ ] **Page résultat affiche UNIQUEMENT la bougie** (principe one choice respecté)
- [ ] **AUCUNE reco bijou sur page résultat** (validé par PM)
- [ ] Rupture stock bougie gérée (liste d'attente + CTA retour accueil, pas de reco alternative)
- [ ] Résultat sauvegardé dans customer metafields (si connecté)
- [ ] Cart drawer affiche 1-2 recos pertinentes (bijoux même pierre)
- [ ] Recos panier ne dupliquent pas produits déjà présents
- [ ] Ajout panier depuis recos met à jour compteur
- [ ] Funnel complet testable : Homepage → Quiz → Résultat (bougie seule) → Panier → Checkout
- [ ] Mobile-first : tous écrans quiz fluides sur mobile

### 4.4 Tests prioritaires

- [ ] Test quiz complet avec chaque profil → affiche 1 bougie seule
- [ ] Test égalité scoring (vérifier règles tiebreaker)
- [ ] Test rupture stock sur résultat quiz → liste d'attente (email) + "Revenir à l'accueil", pas de reco alternative
- [ ] **Test critique** : Page résultat quiz n'affiche AUCUN bijou (validation PM)
- [ ] Test ajout bougie depuis résultat → drawer s'ouvre avec recos bijoux
- [ ] Test panier avec bijou + bougie → recos pertinentes (cart drawer)
- [ ] Test panier vide → recos bestsellers (cart drawer)

---

## 5. Phase 3 : Post-Achat & Contenu

**Durée estimée** : 4 jours
**Dépend de** : Phase 2 complète

### 5.1 Objectifs

- Dashboard client opérationnel
- Pages contenu (À propos, FAQ)
- Emails transactionnels de base
- Expérience post-achat cohérente

### 5.2 Tâches

#### 5.2.1 Dashboard Client

- [ ] `templates/customers/account.liquid` (ou custom)
  - **Section "Mon profil"**
    - Résultat quiz actuel (si existe)
    - Date du quiz
    - Bouton "Refaire le quiz"

  - **Section "Pour vous"**
    - Snippet recos contexte `dashboard`
    - 2 produits basés sur profil quiz
    - Lien "Explorer tous les bijoux"

  - **Section "Historique quiz"** (optionnel V1)
    - Liste résultats passés
    - Format : Date + Profil

  - **Section "Mes commandes"**
    - Liste commandes standard Shopify

#### 5.2.2 Page À propos

- [ ] `templates/page.about.liquid` (ou page standard Shopify)
  - **Notre intention** (2-3 paragraphes)
  - **Pourquoi nous existons** (constat + solution)
  - **Notre approche** (3 blocs : Intention, Pierre, Artisanat)
  - **L'équipe** (court, humain)
  - **Nos partenaires** (Maison Candella, fournisseurs)
  - **Contact** (email)
  - (cf. contenu-editorial-spec.md §5 pour copy)

- [ ] Rédaction validée PM
- [ ] Photos équipe + atelier (si dispo V1, sinon placeholder)

#### 5.2.3 FAQ Globale

- [ ] `templates/page.faq.liquid`
  - Accordéon par thème :
    1. 🕯️ Bougies (4-5 questions)
    2. 💎 Pierres & Bijoux (5 questions)
    3. 🔮 Quiz & Profils (3 questions)
    4. 📦 Livraison & Retours (4 questions)
    5. 💳 Paiement (2 questions)
    6. 📧 Support (1 question)
  - (cf. contenu-editorial-spec.md §6 pour contenu)

- [ ] Rédaction 15-20 Q/R minimum
- [ ] JavaScript accordéon (1 ouverte à la fois)
- [ ] SEO (schema FAQ si possible)

#### 5.2.4 Emails Transactionnels

**Customisation templates Shopify** :

- [ ] **Email confirmation commande (J+0)**
  - Objet : "Votre rituel est en préparation ✨"
  - Récap commande
  - Bloc "En attendant votre colis" (rituel pierre)
  - Lien tracking
  - (cf. contenu-editorial-spec.md Annexe pour template)

- [ ] **Email expédition**
  - Objet : "Votre rituel est en route"
  - Tracking
  - Message court

- [ ] **Email J+7** (optionnel V1, nécessite Klaviyo/outil tiers ?)
  - "Comment se passe votre rituel ?"
  - Conseils utilisation
  - Lien contact

> **Note** : Emails J+7 et J+30 peuvent nécessiter Klaviyo ou Shopify Flow. À décider si V1 ou V1.5.

#### 5.2.5 Pages Légales & Footer

- [ ] Footer Milaura (si pas fait en Phase 1)
  - Liens : À propos, FAQ, Contact, CGV, Mentions légales
  - Trust bar : France, Pierres certifiées, Paiement sécurisé, Retours 30j

- [ ] Pages légales (templates standards Shopify)
  - CGV
  - Politique confidentialité
  - Mentions légales

### 5.3 Critères d'acceptation Phase 3

- [ ] Dashboard affiche profil quiz + 2 recos personnalisées
- [ ] Historique quiz sauvegardé et affiché
- [ ] Page À propos rédigée, validée, publiée
- [ ] FAQ 15+ Q/R rédigée et publiée
- [ ] Email confirmation personnalisé avec bloc rituel
- [ ] Footer avec tous liens légaux
- [ ] Navigation cohérente (header avec liens À propos, FAQ)

### 5.4 Tests prioritaires

- [ ] Test dashboard client connecté avec quiz complété
- [ ] Test dashboard sans quiz → message invitation
- [ ] Test FAQ accordéon mobile
- [ ] Test commande → email J+0 reçu avec bon contenu

---

## 6. Phase 4 : Polish & Lancement

**Durée estimée** : 3 jours
**Dépend de** : Phases 1, 2, 3 complètes

### 6.1 Objectifs

- Performance optimisée (Lighthouse > 90)
- Tests complets mobile + desktop
- Validation accessibilité
- Prêt pour lancement

### 6.2 Tâches

#### 6.2.1 Performance

- [ ] **Images**
  - Lazy loading partout (sauf hero)
  - Format WebP + fallback
  - Sizing approprié (srcset)

- [ ] **CSS**
  - Minification
  - Critical CSS inline si nécessaire
  - Suppression CSS inutilisé

- [ ] **JavaScript**
  - Minification
  - Defer non-critique
  - Pas de JS bloquant render

- [ ] **Lighthouse audit**
  - Mobile > 90
  - Desktop > 95
  - SEO > 95
  - Accessibility > 90
  - Best Practices > 90

#### 6.2.2 Tests Cross-Browser & Devices

- [ ] **Mobile**
  - iPhone (Safari)
  - Android (Chrome)
  - Tailles : 375px, 414px, 390px

- [ ] **Desktop**
  - Chrome, Firefox, Safari, Edge
  - Résolutions : 1280px, 1440px, 1920px

- [ ] **Tablet** (optionnel)
  - iPad Safari

#### 6.2.3 Accessibilité

- [ ] Navigation clavier complète
- [ ] Focus visible sur tous éléments interactifs
- [ ] ARIA labels appropriés
- [ ] Contraste WCAG AA (noir pur #000000 sur beiges)
- [ ] Text-shadow pour lisibilité sur fonds dorés
- [ ] Alt text toutes images
- [ ] Formulaires avec labels corrects

#### 6.2.4 SEO

- [ ] Meta titles + descriptions (homepage, produits, pages)
- [ ] Structured data produits
- [ ] Schema FAQ
- [ ] Sitemap XML
- [ ] robots.txt

#### 6.2.5 Analytics & Tracking

- [ ] Google Analytics 4 configuré
- [ ] Events :
  - Quiz démarré
  - Quiz complété
  - Profil résultat
  - Ajout panier (source : quiz, reco, PDP)
  - Achat
- [ ] Pixels conversion (Meta, Google Ads si applicable)

#### 6.2.6 QA Finale

**Checklist exhaustive** :

- [ ] Funnel complet testable sans erreur
- [ ] Tous metaobjects affichent contenu correct
- [ ] Recommandations pertinentes sur 4 points de contact
- [ ] Quiz scoring correct (5 tests profils)
- [ ] Emails transactionnels corrects
- [ ] Dashboard fonctionne (connecté + non connecté)
- [ ] Panier + checkout standard Shopify fonctionnels
- [ ] Pages légales accessibles
- [ ] Footer liens tous valides
- [ ] Aucune erreur console
- [ ] Aucun lien brisé
- [ ] Customizer Shopify : toutes sections éditables
- [ ] Performance Lighthouse validée
- [ ] Accessibilité validée

#### 6.2.7 Documentation

- [ ] Guide admin Shopify pour le PM
  - Comment modifier metaobjects
  - Comment ajouter un nouveau produit
  - Comment ajouter une nouvelle pierre (V1.5)
  - Comment gérer les recos

- [ ] Documentation technique (pour futur dev)
  - Architecture fichiers
  - Conventions nommage
  - Logique recommandations
  - Metaobjects structure

### 6.3 Critères d'acceptation Phase 4

- [ ] Lighthouse mobile > 90 sur 3 pages clés (homepage, PDP, quiz)
- [ ] Tests cross-browser sans bug bloquant
- [ ] Navigation clavier complète
- [ ] Aucun claim médical présent (audit PM)
- [ ] Analytics tracking fonctionnel
- [ ] QA checklist 100% validée
- [ ] Documentation admin rédigée

### 6.4 Go / No-Go Lancement

**Critères bloquants** :
- [ ] Funnel quiz → achat fonctionne à 100%
- [ ] Performance Lighthouse mobile > 85 minimum
- [ ] Aucune erreur console critique
- [ ] Emails transactionnels fonctionnels
- [ ] Paiement + checkout Shopify opérationnels
- [ ] Validation PM sur copy (zéro claim médical)

**Nice-to-have (peuvent glisser en V1.1)** :
- [ ] Témoignages (si pas prêts)
- [ ] Photos atelier (si pas dispo)
- [ ] Email J+7 automatisé (si nécessite Klaviyo)

---

## 7. Gantt simplifié

```
┌─────────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐
│             │  J1  │  J2  │  J3  │  J4  │  J5  │  J6  │  J7  │  J8  │  J9  │ J10  │
├─────────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ Phase 0     │ ████ │ ████ │ ████ │      │      │      │      │      │      │      │
│ Data        │      │      │      │      │      │      │      │      │      │      │
├─────────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ Phase 1     │      │      │      │ ████ │ ████ │ ████ │ ████ │ ████ │ ████ │ ████ │
│ Core Exp    │      │      │      │      │      │      │      │      │      │      │
├─────────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ Phase 2     │      │      │      │      │      │      │      │      │ ████ │ ████ │
│ Funnel      │      │      │      │      │      │      │      │      │      │      │
└─────────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘

┌─────────────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┬──────┐
│             │ J11  │ J12  │ J13  │ J14  │ J15  │ J16  │ J17  │ J18  │
├─────────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ Phase 2     │ ████ │ ████ │ ████ │      │      │      │      │      │
│ (suite)     │      │      │      │      │      │      │      │      │
├─────────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ Phase 3     │      │      │      │ ████ │ ████ │ ████ │ ████ │      │
│ Post-Achat  │      │      │      │      │      │      │      │      │
├─────────────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ Phase 4     │      │      │      │      │      │      │      │ ████ │
│ Polish      │      │      │      │      │      │      │      │      │
└─────────────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┴──────┘

┌─────────────┬──────┬──────┬──────┐
│             │ J19  │ J20  │ J21  │
├─────────────┼──────┼──────┼──────┤
│ Phase 4     │ ████ │ ████ │      │
│ (suite)     │      │      │      │
├─────────────┼──────┼──────┼──────┤
│ LANCEMENT   │      │      │ 🚀   │
└─────────────┴──────┴──────┴──────┘
```

**Durée totale estimée** : 21 jours (3 semaines)

**Jalons critiques** :
- J3 : Data model complet et validé
- J10 : Page produit + recos fonctionnels
- J13 : Funnel quiz opérationnel
- J17 : Contenu complet
- J20 : QA finale validée
- J21 : **LANCEMENT** 🚀

---

## 8. Critères de succès V1

### 8.1 Fonctionnels

- [ ] **Funnel complet** : Homepage → Quiz → Résultat → PDP → Panier → Checkout sans friction
- [ ] **Recommandations** : 4 points de contact fonctionnels, pertinence pierre-first validée
- [ ] **Performance** : Lighthouse mobile > 90, temps chargement < 3s
- [ ] **Mobile-first** : Expérience fluide sur iPhone et Android
- [ ] **Data model** : Metaobjects alimentent tout le contenu, zéro duplication

### 8.2 Business

- [ ] **Taux complétion quiz** : > 60% (objectif)
- [ ] **Taux ajout panier depuis quiz** : > 25%
- [ ] **Taux clic recos** : > 10%
- [ ] **Panier moyen** : +15% vs sans recos (à mesurer post-lancement)
- [ ] **Taux conversion mobile** : > 2%

### 8.3 Qualitatifs

- [ ] **Cohérence marque** : Ton éditorial respecté partout, zéro claim médical
- [ ] **Différenciation** : 5 angles différenciants visibles dans le parcours
- [ ] **Qualité perçue** : Feedback utilisateurs "premium", "différent", "accompagnant"

---

## 9. Ce qui n'est PAS dans V1

### 9.1 V1.5 (1-2 mois post-lancement)

- Collections automatiques par pierre (navigation alternative)
- Extension à 10 pierres (vs 5 en V1)
- Témoignages vidéo
- Blog + contenu régulier
- Analytics avancés (heatmaps, session replay)
- Emails automatisés J+7, J+30 (nécessite Klaviyo)

### 9.2 V2 (si l'activité fonctionne)

**Objectif principal** : **Quiz recommande diffuseur passif au lieu de bougie**
- Changement admin simple : `emotional_profile.recommended_product` pointe vers diffuseur
- Même pierre, même intention, nouveau format
- Zéro refonte code (data model extensible prévu Phase 0)

**Important** : **Les 5 bougies V1 restent vendables**
- ✅ Bougies accessibles via catalogue, collections, PDP classiques
- ✅ Bougies peuvent être recommandées sur PDP bijoux (crosssell)
- ✅ Bougies peuvent être recommandées dans cart drawer
- ❌ Bougies ne sont plus recommandées par le quiz (remplacées par diffuseurs)
- **Cohérence** : Quiz = produit d'appel (diffuseur V2), Catalogue = monétisation complète

**Secondaire** :
- Page confirmation post-achat avec recos
- Complémentarité émotionnelle avancée (profils croisés)
- A/B testing recos
- Programme fidélité
- Dashboard insights émotionnels (graphiques évolution profils)
- API Search & Recommendation Shopify

**PAS l'objectif V2** :
- ❌ Montée en "20+ pierres" (pas prioritaire)
- ❌ Quiz multi-produits (toujours 1 seul produit recommandé)

### 9.3 V3+ (long terme)

- Marketplace pierres (scalabilité 100+ pierres si besoin)
- Application mobile
- Suivi émotionnel (notifications personnalisées)
- Statuts VIP

---

## Annexe A : Risques & Mitigations

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| **Contenu pas prêt à temps** | Moyenne | Élevé | PM rédige en Phase 0 parallèlement au dev, validation itérative |
| **Performance < 90** | Faible | Moyen | Lazy loading systématique, audit Phase 1 et 4 |
| **Scan catalogue perf** | Élevé si pas d'index | Critique | Index metaobjects obligatoire Phase 0, bloquant |
| **Bugs recos** | Moyenne | Élevé | Tests unitaires logique, QA exhaustive Phase 4 |
| **Rupture stock bougies quiz** | Moyenne | Moyen | Gestion notification email Phase 2, communication transparente |
| **Accessibilité non conforme** | Faible | Moyen | Audit Phase 4, navigation clavier testée |
| **Claims médicaux** | Moyenne | Critique | Validation PM systématique, checklist conformité Phase 0 et 4 |

---

## Annexe B : Équipe & Ressources

| Rôle | Responsabilités | Phase critique |
|------|-----------------|----------------|
| **PM (John)** | Roadmap, priorisation, validation contenu, QA finale | Toutes |
| **Dev Front** | Sections Liquid, CSS, JS, intégration Shopify | 1, 2, 3, 4 |
| **Dev Data** | Metaobjects, metafields, index recos, mapping produits | 0, 1 |
| **Content** | Rédaction pierres/profils/senteurs, À propos, FAQ, emails | 0, 3 |
| **Design/UX** | Validation mobile-first, micro-interactions (si nécessaire) | 1, 4 |
| **QA** | Tests cross-browser, devices, accessibilité, performance | 4 |

**Ressources nécessaires** :
- Accès admin Shopify avec permissions metaobjects
- Photos produits haute qualité (macro pierres, lifestyle)
- Copy validé pour 5 pierres, 5 profils, 5 senteurs
- Compte Google Analytics 4
- (Optionnel) Compte Klaviyo si emails J+7/J+30 en V1

---

## Annexe C : Checklist Go-Live

### Pré-lancement (J-7)

- [ ] Backup complet thème actuel
- [ ] Test commande réelle (mode test Shopify Payments)
- [ ] **Test quiz complet** : vérifier que page résultat affiche UNIQUEMENT la bougie (pas de bijou)
- [ ] Configuration domaine + SSL
- [ ] Emails transactionnels testés (commande test)
- [ ] Pages légales publiées
- [ ] Google Analytics tracking vérifié
- [ ] Sitemap soumis Google Search Console

### Jour du lancement (J)

- [ ] Basculement thème Milaura en live
- [ ] Vérification homepage, PDP, quiz, panier
- [ ] Test commande réelle (petit montant)
- [ ] Monitoring erreurs (console Shopify, Google Analytics)
- [ ] Communication lancement (réseaux sociaux, newsletter si applicable)

### Post-lancement (J+1 à J+7)

- [ ] Monitoring quotidien performance Lighthouse
- [ ] Analyse taux complétion quiz
- [ ] Analyse taux clic recos
- [ ] Feedback utilisateurs (email, support)
- [ ] Hotfixes si bugs critiques

---

*Roadmap générée par John, Product Manager — 7 janvier 2026*
