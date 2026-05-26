# Refonte Conversion MilAura : Spec Document

> Date : 2026-05-26
> Statut : Approuve
> Priorite : Landing Meta + Hero > Bundle Scratch > Quiz Pierre-first > Page Anniversaires (differ)

---

## 1. Contexte et objectifs

MilAura transite d'un positionnement bougie-first vers pierre/bijoux-first. Les bougies (~30 unites restantes) seront liquidees via une promo dediee, puis supprimees du catalogue. Le quiz emotionnel doit rediriger vers des pierres, pas des bougies.

En parallele, un audit NeuroCRO (Boost Conversion, avril 2026) a score le site 61/100 avec 4 faiblesses : hero a 4 CTA (paralysie), descriptions features-not-benefits, zero FAQ visible, reassurance cachee en footer. Le score "Declencheur d'achat" est a 48/100.

**Objectifs mesurables :**
- Taux de conversion LP Meta > 2% (benchmark cold traffic : 0.5-1.2%)
- AOV +15-20% via le bundle scratch
- Score NeuroCRO > 75/100 post-refonte

## 2. Architecture technique

### Approche : Sections modulaires + JSON templates

6 nouvelles sections Liquid reutilisables pour les landing pages, assemblees en templates JSON par produit.

```
sections/
  milaura-lp-hero.liquid          <- Hero single-benefit, zero nav
  milaura-lp-social-proof.liquid  <- Badges, avis, presse
  milaura-lp-story.liquid         <- Histoire fondatrice Karine
  milaura-lp-bundle-scratch.liquid <- Bundle scratch-to-reveal
  milaura-lp-objections.liquid    <- FAQ/objections inline accordeon
  milaura-lp-cta-final.liquid     <- Dernier CTA + reassurance, fond sombre

templates/
  page.lp-promo-bougies.json     <- Premiere LP (liquidation bougies)
  page.lp-bracelet-amethyste.json <- Declinaison bijoux (modele)

sections/ (modifies)
  milaura-hero-showcase.liquid    <- Nouveau mode single-product
  milaura-quiz.liquid             <- Refonte pierre-first
```

### Conventions
- Prefixe : `milaura-lp-*` pour les sections landing page
- Classes CSS : `.milaura-lp-*`
- Les LP n'affichent PAS la navbar classique : uniquement un logo centre cliquable (retour homepage) + aucun menu, aucun lien de navigation, aucun cart icon. L'objectif est zero distraction.
- Add to Cart via Ajax API Shopify (`/cart/add.js`)

## 3. Landing Page : structure et sections

### Sequence (de haut en bas, mobile-first)

| # | Section | Role | Data source |
|---|---------|------|-------------|
| 1 | LP Hero | Urgence + prix barre + CTA scroll | Product picker customizer |
| 2 | Social Proof | Etoiles 4.8/5, badges confiance | Settings customizer |
| 3 | Story fondatrice | Citation Karine (+18-27% cold traffic) | Settings texte + image |
| 4 | Bundle Scratch | 3 paliers + cartes a gratter gamifiees | Blocks schema |
| 5 | FAQ Objections | Accordeon 4-6 questions | Blocks schema |
| 6 | CTA Final | Fond sombre, urgence, bouton + reassurance | Product picker |

### 3.1 LP Hero (`milaura-lp-hero.liquid`)

**Design :**
- Zero navigation (pas de navbar, logo seul optionnel)
- Badge configurable (ex: "Edition limitee", "Bestseller")
- Compteur stock optionnel ("30 restantes")
- Image produit centree avec halo radial
- Headline single-benefit (Playfair Display)
- Sous-titre court (Lato)
- Prix barre + pourcentage de reduction
- 1 seul CTA dore (scroll vers bundle ou lien externe)
- Reassurance sous le CTA (livraison, artisanat, naturel)

**Settings schema :**
- `product` : product picker
- `headline` / `subtitle` : texte
- `badge_text` : texte (vide = cache)
- `show_stock_counter` : checkbox + `stock_count` : number
- `cta_text` : texte
- `cta_url` : url (vide = scroll vers bundle)

**Message match Meta Ads :** le headline et l'image doivent mirrorer l'ad. Karine change ces champs dans le customizer sans toucher au code.

### 3.2 Social Proof (`milaura-lp-social-proof.liquid`)

- Note etoiles + nombre d'avis
- 3 badges inline (pierres certifiees, garantie 30j, paiement securise)
- Optionnel : logos presse ou certifications

### 3.3 Story fondatrice (`milaura-lp-story.liquid`)

- Photo Karine (rond, 50px)
- Nom + titre "Fondatrice Mil'Aura"
- Citation en italique (texte configurable)
- Donnees 2026 : les pages avec histoire fondatrice convertissent 15-28% mieux sur cold traffic

### 3.4 Bundle Scratch-to-Reveal (`milaura-lp-bundle-scratch.liquid`)

**C'est le composant le plus complexe du projet.**

**3 paliers configurables :**

| Palier | Exemple promo bougies | Cartes debloquees |
|--------|----------------------|-------------------|
| 1 piece | 49,90 (barre 89,90) | 1 carte scratchable, 2 locked |
| 2 pieces | 89,80 (barre 179,80) | 3 cartes scratchables |
| Pack Famille (3) | 119,70 (barre 269,70) | 5 cartes scratchables |

**Mecaniques :**
- Scratch effect : HTML5 Canvas overlay dore, erase via touch/mouse (composite `destination-out`)
- Seuil de reveal : ~60% de surface grattee declenche auto-complete + animation confetti CSS
- Chaque cadeau revele affiche : icone, nom, valeur percue (+X,XX euros)
- Upsell nudge dynamique : "Passez a 2 bougies pour deverrouiller les 3 cadeaux"
- Recap final : liste des cadeaux + valeur totale offerte + prix final
- CTA "Ajouter au panier" avec prix

**Cadeaux exemple (Promo bougies) :**
1. Livraison gratuite (+9,90)
2. Pochon velours (+14,90)
3. Mini mineral (+12,90)
4. Pierre roulee bonus (+8,90) [palier 3 only]
5. Code -10% prochain achat [palier 3 only]

**Settings schema :**
- `product` : product picker
- Blocks "tier" : label, pieces, prix, prix barre, nombre de cartes
- Blocks "gift" : icone, nom, valeur, image, tier minimum requis
- `color_picker` : couleurs variantes (swatch circles)

**Implementation technique :**
- Ajax Cart API (`/cart/add.js`) avec quantite + variant_id + properties (gifts)
- Etat des cartes grattees en `sessionStorage` (pas perdu au refresh)
- Le palier selectionne met a jour dynamiquement les cartes locked/unlocked
- Les cartes precedemment grattees restent revelees au changement de palier
- Animation confetti : particules CSS `@keyframes` (pas de librairie externe)

### 3.5 FAQ Objections (`milaura-lp-objections.liquid`)

- Accordeon classique, 4-6 questions
- Blocks schema (question + reponse par block)
- Questions promo bougies : "Pourquoi c'est la derniere serie ?", "Les pierres sont-elles authentiques ?", "Satisfait ou rembourse ?", "Combien de temps pour la livraison ?"

### 3.6 CTA Final (`milaura-lp-cta-final.liquid`)

- Fond sombre (gradient #1a1a2e vers #2d2d44)
- Headline urgence en dore
- Sous-titre en blanc translucide
- Prix barre
- Bouton CTA dore
- Reassurance (paiement securise, livraison 48h, garantie 30j)

## 4. Hero Homepage : single-product rotatif

**Modification de `milaura-hero-showcase.liquid`** : ajout d'un mode "single-product" qui remplace le mode 4 onglets actuel.

**Design mobile :**
- Badge configurable + compteur stock
- Image produit centree avec halo
- Headline single-benefit (Playfair)
- Sous-titre court
- Prix barre + badge reduction
- 1 CTA dore vers la landing page dediee
- Reassurance sous le CTA

**Design desktop :**
- Layout 2 colonnes : texte a gauche, produit a droite
- Memes elements que mobile, dispositions adaptees

**Settings schema :**
- `mode` : select ("single-product" / "tabs" pour backward compat)
- `product` : product picker
- `headline` / `subtitle` : texte
- `badge_text` : texte
- `show_stock_counter` : checkbox + `stock_count`
- `cta_text` : texte
- `cta_url` : url vers la landing page

**Fonctionnement operationnel :** Karine change le produit de la semaine en 30 secondes dans le customizer. Le produit du hero matche l'ad Meta qui tourne en parallele.

## 5. Quiz emotionnel : refonte pierre-first

**Fichier : `milaura-quiz.liquid` (~2785 lignes)**

### Ce qui est supprime
- Onglet "Bougie" dans les resultats (ligne ~1137)
- Bloc "Votre senteur" dans le duo (lignes ~1193-1197)
- Titre "Votre Duo & son Alchimie"
- References aux bougies dans les textes de rituels ("Allumez votre bougie")
- Champ `scent` dans chaque profileData
- Product picker `profile_*_product` (bougie) dans le schema

### Ce qui est conserve
- 5 profils (apaisement, protection, serenite, amour, chance)
- 7 questions et scoring identiques
- Textes de lecture a froid (description, moodLabel, etc.)
- Couleurs par profil (colorAccent, colorAccentRgb)
- Icones par profil
- Sauvegarde quiz_history et last_profile_handle

### Ce qui est ajoute/modifie
- **Pierre = hero du resultat** : bloc mis en avant avec nom de la pierre + benefices
- **3 onglets Bracelet / Bague / Collier** remplacent Bougie / Pierre / Rituel
- **3 product pickers par profil** dans le schema :
  - `profile_*_bracelet_product`
  - `profile_*_bague_product`
  - `profile_*_collier_product`
- **CTA principal** : "Decouvrir mon [bracelet/bague/collier]" (colore selon profil)
- **Lien secondaire** : "voir tous les bijoux [Pierre]" vers la collection filtree
- **Rituels adaptes** : "Portez votre pierre" / "Profitez des bienfaits de votre pierre" (jamais "tenez")
- **Bloc rituel** conserve mais sans mention bougie

### Mapping pierres par profil (inchange)
| Profil | Pierre | Couleur accent |
|--------|--------|----------------|
| Apaisement | Calcedoine bleue | #6BA3C7 |
| Protection | Obsidienne noire | #4A4A4A |
| Serenite | Amethyste | #9B7EC8 |
| Amour | Quartz rose | #D4839E |
| Chance | Aventurine verte | #6BAF7B |

## 6. Ordre d'implementation

| Phase | Composant | Estimation | Dependances |
|-------|-----------|------------|-------------|
| 1a | Sections LP (hero, social proof, story, objections, CTA) | 4h | Aucune |
| 1b | Bundle scratch-to-reveal | 8h | Aucune (parallele avec 1a) |
| 1c | Template `page.lp-promo-bougies.json` | 1h | 1a + 1b |
| 2 | Hero homepage single-product | 3h | Aucune |
| 3 | Quiz pierre-first | 4h | Aucune |
| 4 | Template LP bijoux (declinaison) | 1h | 1a + 1b |
| 5 | Page anniversaires mariage | Differe | A specifier |

**Total estime : ~21h de dev**

## 7. Donnees CRO 2026 integrees

Sources de la recherche web (etude 2000 pages, oct 2025 - mars 2026) :
- Single-stat hero : **+18% conversion** vs hero classique
- Video en hero LP : **-7% conversion** (video = dans l'ad, pas sur la LP)
- Pages a 1 CTA : **~13.5% conversion**
- Histoire fondatrice : **+15-28%** sur cold traffic
- Free gifts > reductions equivalentes de **40% en valeur percue**
- Gamified bundles : **+12-20% AOV**
- 94-98% du trafic Meta est mobile, charge < 2s obligatoire
- Message match ad/LP = non-negociable

## 8. Elements hors scope (differes)

- Page anniversaires de mariage : a specifier dans une session ulterieure
- Re-enrichissement des 764 produits (pipeline Gemini)
- Judge.me pour vrais avis (post-lancement)
- Google Merchant Center
- Templates LP pour chaque pierre (post promo bougies)
