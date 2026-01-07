# Page Produit Milaura — Spécification Complète

> Document généré lors de la session de brainstorming du 6 janvier 2026
> Statut : **Validé — Prêt pour implémentation**

---

## Table des matières

1. [Principes fondateurs](#1-principes-fondateurs)
2. [Architecture des sections](#2-architecture-des-sections)
3. [Spécification mobile-first](#3-spécification-mobile-first)
4. [Détail des sections](#4-détail-des-sections)
5. [Logique conditionnelle par type](#5-logique-conditionnelle-par-type)
6. [Micro-interactions](#6-micro-interactions)
7. [Structure données Shopify](#7-structure-données-shopify)
8. [Checklist implémentation](#8-checklist-implémentation)

---

## 1. Principes fondateurs

### 1.1 Vision

Une page produit qui se vit comme une **expérience émotionnelle premium**, digne des plus grandes références e-commerce, avec une âme propre à Milaura.

### 1.2 Trois piliers de conception

| Pilier | Règle absolue |
|--------|---------------|
| **Intention-first** | Le template est centré sur l'émotion et l'énergie, pas sur un type de produit. La pierre/énergie est le pilier central. |
| **Mobile-first** | Si une section n'est pas évidente, fluide et désirable sur mobile, elle n'existe pas en desktop. |
| **Template unique** | Un seul template modulaire, avec des blocs conditionnels selon le type de produit. |

### 1.3 Direction artistique

| Axe | Inspiration | Application Milaura |
|-----|-------------|---------------------|
| **Structure** | Apple | Hero immersif, scroll progressif, révélation des sections |
| **Mots** | Aesop | Textes sobres, poétiques, respirants, jamais agressifs |
| **Âme** | Diptyque | Storytelling, rituel, dimension sensorielle |
| **Émotion** | Milaura | Chaleur, douceur, reconnexion à soi |

### 1.4 Ce que Milaura n'est PAS

- ❌ Un vendeur de bougies (le bijou est le cœur du catalogue)
- ❌ Une boutique ésotérique classique
- ❌ Un e-commerce froid et transactionnel

### 1.5 Ce que la page doit transmettre

- ✅ Chaque produit a une intention, une énergie
- ✅ La pierre est l'élément central et différenciant
- ✅ L'achat est une décision émotionnelle accompagnée
- ✅ Le produit fait partie d'un rituel, pas juste d'une transaction

---

## 2. Architecture des sections

### 2.1 Vue d'ensemble (ordre mobile)

```
┌─────────────────────────────────────────┐
│ 1. HERO IMMERSIF                        │  ← Toujours
├─────────────────────────────────────────┤
│ 2. BLOC ACHAT (sticky bottom)           │  ← Toujours
├─────────────────────────────────────────┤
│ 3. HISTOIRE / INTENTION                 │  ← Toujours
├─────────────────────────────────────────┤
│ 4. LA PIERRE / L'ÉNERGIE ★ PILIER       │  ← Toujours (adapté)
├─────────────────────────────────────────┤
│ 5. LA SENTEUR                           │  ← Conditionnel (bougies)
├─────────────────────────────────────────┤
│ 6. LE RITUEL                            │  ← Toujours (adapté)
├─────────────────────────────────────────┤
│ 7. L'ARTISANAT                          │  ← Toujours
├─────────────────────────────────────────┤
│ 8. GALERIE                              │  ← Toujours
├─────────────────────────────────────────┤
│ 9. SOCIAL PROOF                         │  ← Toujours (si avis)
├─────────────────────────────────────────┤
│ 10. CROSS-SELL                          │  ← Toujours
├─────────────────────────────────────────┤
│ 11. FAQ                                 │  ← Toujours
├─────────────────────────────────────────┤
│ 12. CTA FINAL                           │  ← Toujours
└─────────────────────────────────────────┘
```

### 2.2 Hiérarchie des sections (importance)

| Niveau | Sections | Rôle |
|--------|----------|------|
| **Critique** | Hero, Bloc Achat, Pierre/Énergie | Conversion directe |
| **Essentiel** | Histoire, Rituel, Artisanat | Différenciation, confiance |
| **Support** | Galerie, Social Proof, Cross-sell | Réassurance, panier moyen |
| **Utilitaire** | FAQ, CTA Final | Objections, dernière chance |
| **Conditionnel** | Senteur | Bougies uniquement |

---

## 3. Spécification mobile-first

### 3.1 Règle d'or

> **Le desktop est une version plus respirante du parcours mobile, pas l'inverse.**

### 3.2 Contraintes mobile (80% du trafic)

| Contrainte | Règle |
|------------|-------|
| **Largeur** | 100% viewport, marges 16px |
| **Touch targets** | Minimum 44x44px |
| **Scroll** | Vertical uniquement (sauf carrousels) |
| **Texte** | 16px minimum, line-height 1.5 |
| **Sections** | Courtes, 1 idée par section |
| **Animations** | Subtiles, respectent `prefers-reduced-motion` |

### 3.3 Adaptations desktop

| Mobile | Desktop |
|--------|---------|
| Bloc achat sticky bottom | Sidebar sticky droite |
| Sections empilées | Grilles 2 colonnes où pertinent |
| Carrousels swipe | Grilles visibles |
| Textes compacts | Textes plus respirants |
| Hero 100vh | Hero 80vh avec espace |

### 3.4 Breakpoints

```css
/* Mobile first */
:root {
  --bp-tablet: 768px;
  --bp-desktop: 1024px;
  --bp-wide: 1440px;
}
```

---

## 4. Détail des sections

### SECTION 1 : Hero Immersif

**Rôle** : Captiver dès la première seconde. Entrée dans un univers, pas une fiche produit.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│      [IMAGE PLEIN CADRE]        │
│      Produit en contexte        │
│      100vh viewport             │
│                                 │
│                                 │
│         ─────────────           │
│                                 │
│         CALCÉDOINE              │
│    "La pierre du réconfort"     │
│                                 │
│         Bracelet • Or           │
│                                 │
│              ↓                  │
│                                 │
└─────────────────────────────────┘
```

#### Spécifications

| Élément | Mobile | Desktop |
|---------|--------|---------|
| **Image** | 100vh, object-fit cover | 80vh, plus d'espace |
| **Overlay** | Dégradé bas 40% opacité | Idem |
| **Nom produit** | Playfair Display, 32px | 48px |
| **Baseline** | 18px, 2 lignes max | 24px |
| **Sous-titre** | Pierre • Type | Idem |
| **Scroll cue** | Flèche animée | Idem |
| **Loading** | Eager (above the fold) | Idem |

#### Contenu par type de produit

| Type | Nom affiché | Baseline | Sous-titre |
|------|-------------|----------|------------|
| **Bijou** | Nom de la pierre | Intention émotionnelle | Type bijou • Matériau |
| **Bougie** | Nom de la bougie | Intention émotionnelle | Senteur • Pierre |
| **Sauge** | "Sauge blanche" | Intention (purification) | Origine |
| **Coffret** | Nom du coffret | Promesse | X pièces |

---

### SECTION 2 : Bloc Achat

**Rôle** : Accès permanent à l'achat sans interrompre l'expérience.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  49€    [AJOUTER AU PANIER]     │
│                                 │
│  ↑ Tap pour voir les options    │
│                                 │
└─────────────────────────────────┘

Expanded:
┌─────────────────────────────────┐
│  BRACELET CALCÉDOINE            │
│  49 €                           │
│                                 │
│  Taille : [S] [M] [L]           │
│                                 │
│  [   AJOUTER AU PANIER   ]      │
│                                 │
│  ✓ Livraison offerte dès 50€   │
│  ✓ Retours gratuits 30 jours    │
└─────────────────────────────────┘
```

#### Desktop

```
┌──────────────────────────┐
│  BRACELET CALCÉDOINE     │
│                          │
│  49 €                    │
│                          │
│  Taille                  │
│  [S] [M] [L]             │
│                          │
│  Quantité                │
│  [-] 1 [+]               │
│                          │
│  [AJOUTER AU PANIER]     │
│                          │
│  ✓ Livraison offerte     │
│  ✓ Retours 30 jours      │
│  ✓ Paiement sécurisé     │
└──────────────────────────┘
```

#### Spécifications

| Élément | Mobile | Desktop |
|---------|--------|---------|
| **Position** | Fixed bottom, z-index 100 | Sticky sidebar droite |
| **État initial** | Compact (prix + CTA) | Toujours expanded |
| **Expand** | Tap anywhere sur la bar | N/A |
| **Variantes** | Sélecteur taille si applicable | Idem |
| **Quantité** | Masqué en compact | Toujours visible |
| **Réassurance** | 2 lignes max | 3 badges |

#### États spéciaux

| État | Affichage |
|------|-----------|
| **Promo** | Prix barré + nouveau prix en couleur |
| **Stock faible** | Badge "Plus que X en stock" |
| **Rupture** | "Bientôt disponible" + champ notification |
| **Pré-commande** | "Pré-commander" + date estimée |

---

### SECTION 3 : Histoire / Intention

**Rôle** : Connecter émotionnellement. Expliquer l'intention du produit.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  "La Calcédoine bleue           │
│   accompagne ceux qui           │
│   traversent des moments        │
│   de transition.                │
│                                 │
│   Elle apporte douceur          │
│   et réconfort, comme           │
│   une présence bienveillante    │
│   à vos côtés."                 │
│                                 │
│  ─────────                      │
│                                 │
│  🔮 Ce bijou correspond au      │
│     profil "Réconfort" du       │
│     quiz émotionnel.            │
│                                 │
│  [Découvrir mon profil →]       │
│                                 │
└─────────────────────────────────┘
```

#### Spécifications

| Élément | Valeur |
|---------|--------|
| **Texte** | 3-5 phrases, style Aesop (sobre, poétique) |
| **Ton** | Empathique, jamais vendeur |
| **Lien quiz** | Discret, présent si produit lié à un profil |
| **Animation** | Fade-in au scroll |
| **Fond** | Neutre (beige clair Milaura) |

#### Template texte par type

**Bijou :**
> "La [Pierre] accompagne ceux qui [besoin émotionnel]. Elle [bénéfice principal], comme [métaphore douce]."

**Bougie :**
> "Cette bougie a été créée pour les moments où [situation]. Quand [contexte], quand [contexte], quand [besoin simple]."

**Sauge :**
> "La sauge blanche est utilisée depuis des siècles pour [intention]. Elle [bénéfice], créant [résultat]."

---

### SECTION 4 : La Pierre / L'Énergie ★ PILIER

**Rôle** : Section centrale du template. Met en avant l'élément différenciant.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │      [PHOTO PIERRE]       │  │
│  │       Macro, HD           │  │
│  │                           │  │
│  │         (●)  (●)          │  │
│  │       Hotspots            │  │
│  │                           │  │
│  └───────────────────────────┘  │
│                                 │
│  CALCÉDOINE BLEUE               │
│  Pierre du réconfort            │
│                                 │
│  ┌───────────────────────────┐  │
│  │ ○ Apaise les tensions     │  │
│  │   émotionnelles           │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ ○ Favorise la douceur     │  │
│  │   envers soi              │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ ○ Accompagne les          │  │
│  │   transitions de vie      │  │
│  └───────────────────────────┘  │
│                                 │
│  "Portée contre la peau,        │
│   la Calcédoine bleue           │
│   diffuse son énergie           │
│   tout au long de la journée."  │
│                                 │
└─────────────────────────────────┘
```

#### Desktop (2 colonnes)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌───────────────────────┐    CALCÉDOINE BLEUE                 │
│  │                       │    Pierre du réconfort               │
│  │    [PHOTO PIERRE]     │                                      │
│  │                       │    ● Apaise les tensions             │
│  │       (●)  (●)        │      émotionnelles                   │
│  │                       │    ● Favorise la douceur             │
│  └───────────────────────┘      envers soi                      │
│                               ● Accompagne les transitions      │
│                                 de vie                          │
│                                                                 │
│  "Portée contre la peau, la Calcédoine bleue diffuse           │
│   son énergie tout au long de la journée."                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Spécifications

| Élément | Mobile | Desktop |
|---------|--------|---------|
| **Image** | Pleine largeur, ratio 1:1 | 50% largeur, sticky léger |
| **Hotspots** | 2-3 points cliquables | Idem, hover activé |
| **Nom pierre** | 24px, Playfair | 32px |
| **Bénéfices** | Cards empilées, 3 max | Liste avec icônes |
| **Texte** | 2-3 phrases | Idem, plus respirant |

#### Hotspots (micro-interactions)

| Hotspot | Révèle |
|---------|--------|
| **Centre pierre** | "Pierre naturelle, sélectionnée à la main" |
| **Bord** | "Énergie : [chakra associé]" |
| **Couleur** | "Sa teinte [bleu/rose/verte] symbolise [signification]" |

#### Adaptation par type

| Type | Titre section | Contenu |
|------|---------------|---------|
| **Bijou** | "[Nom Pierre]" | Focus sur vertus et port quotidien |
| **Bougie** | "La pierre de votre bougie" | Pierre révélée + talisman après |
| **Sauge** | "L'énergie de la sauge" | Propriétés purifiantes |
| **Coffret** | "Les énergies du coffret" | Liste des pierres incluses |

---

### SECTION 5 : La Senteur (conditionnel)

**Rôle** : Expérience olfactive pour les bougies uniquement.

#### Condition d'affichage

```liquid
{% if product.type == 'Bougie' %}
  {% render 'section-senteur' %}
{% endif %}
```

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  NÉROLI                         │
│  L'essence du réconfort         │
│                                 │
│  ┌───────────────────────────┐  │
│  │  Tête      Cœur     Fond  │  │
│  │  ────      ────     ────  │  │
│  │  Fleur     Néroli   Musc  │  │
│  │  d'oranger          blanc │  │
│  └───────────────────────────┘  │
│                                 │
│  "Le Néroli enveloppe comme     │
│   une étreinte. Son parfum      │
│   solaire apaise instantanément.│
│                                 │
│  ─────────                      │
│  En collaboration avec          │
│  Maison Candella                │
│                                 │
└─────────────────────────────────┘
```

#### Spécifications

| Élément | Valeur |
|---------|--------|
| **Pyramide** | 3 colonnes (Tête/Cœur/Fond) |
| **Notes** | Noms simples, pas de jargon |
| **Texte** | Description sensorielle, 2-3 phrases |
| **Partenaire** | Logo Maison Candella discret |

---

### SECTION 6 : Le Rituel

**Rôle** : Transformer l'utilisation en moment sacré.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  VOTRE RITUEL                   │
│                                 │
│  ┌─────┐                        │
│  │  1  │  Choisissez un moment  │
│  │ 🌅  │  calme de la journée   │
│  └─────┘                        │
│                                 │
│  ┌─────┐                        │
│  │  2  │  Posez une intention   │
│  │ 💭  │  claire pour vous      │
│  └─────┘                        │
│                                 │
│  ┌─────┐                        │
│  │  3  │  Portez votre bijou    │
│  │ 💎  │  contre la peau        │
│  └─────┘                        │
│                                 │
│  ┌─────┐                        │
│  │  4  │  Touchez-le quand vous │
│  │ ✨  │  avez besoin de son    │
│  └─────┘  énergie               │
│                                 │
└─────────────────────────────────┘
```

#### Spécifications

| Élément | Valeur |
|---------|--------|
| **Étapes** | 4 maximum |
| **Format** | Numéro + icône + texte court |
| **Animation** | Apparition séquentielle au scroll |
| **Ton** | Actionnable mais poétique |

#### Rituels par type de produit

**Bijou :**
1. Choisissez un moment calme
2. Posez une intention claire
3. Portez le bijou contre la peau
4. Touchez-le pour vous reconnecter

**Bougie :**
1. Allumez dans un moment calme
2. Prenez 3 respirations profondes
3. Laissez la senteur vous envelopper
4. Gardez la pierre comme talisman

**Sauge :**
1. Ouvrez une fenêtre
2. Allumez l'extrémité
3. Laissez la fumée purifier l'espace
4. Posez une intention de renouveau

**Coffret :**
1. Découvrez chaque pièce
2. Ressentez leur énergie
3. Créez votre rituel personnel
4. Alternez selon vos besoins

---

### SECTION 7 : L'Artisanat

**Rôle** : Prouver la qualité sans être pompeux.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  FABRIQUÉ AVEC INTENTION        │
│                                 │
│  ┌─────────┐ ┌─────────┐        │
│  │ 🇫🇷      │ │ 💎      │        │
│  │ Fabriqué│ │ Pierre  │        │
│  │ en      │ │ naturelle│       │
│  │ France  │ │ certifiée│       │
│  └─────────┘ └─────────┘        │
│                                 │
│  ┌─────────┐ ┌─────────┐        │
│  │ ✋      │ │ 🌿      │        │
│  │ Fait    │ │ Matériaux│       │
│  │ main    │ │ durables │       │
│  └─────────┘ └─────────┘        │
│                                 │
│  "Chaque pièce Milaura est      │
│   créée avec soin dans notre    │
│   atelier français."            │
│                                 │
└─────────────────────────────────┘
```

#### Spécifications

| Élément | Valeur |
|---------|--------|
| **Badges** | 4 maximum, grille 2x2 |
| **Format** | Icône + 2 mots |
| **Texte** | 1-2 phrases max |
| **Ton** | Factuel, chaleureux |

#### Badges par type

| Type | Badges |
|------|--------|
| **Bijou** | France, Pierre certifiée, Fait main, Or/Argent 925 |
| **Bougie** | France, Cire végétale, Maison Candella, Pierre incluse |
| **Sauge** | Origine contrôlée, Séchage naturel, Rituel ancestral |

---

### SECTION 8 : Galerie

**Rôle** : Montrer le produit sous tous les angles.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  ┌───────────────────────────┐  │
│  │    [IMAGE LIFESTYLE]      │  │
│  │    Swipe pour voir plus   │  │
│  └───────────────────────────┘  │
│                                 │
│  ○ ○ ● ○ ○  (pagination)        │
│                                 │
└─────────────────────────────────┘
```

#### Desktop

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              [GRANDE IMAGE LIFESTYLE]                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐               │
│  │ Détail  │ │ Porté   │ │ Packag. │ │ ▶️ Vidéo│               │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Spécifications

| Élément | Mobile | Desktop |
|---------|--------|---------|
| **Format** | Carrousel swipe | Grande image + thumbnails |
| **Images** | 4-6 max | Idem |
| **Vidéo** | Optionnelle, 30s max | Idem |
| **Lightbox** | Tap = fullscreen | Click = zoom |

---

### SECTION 9 : Social Proof

**Rôle** : Rassurer par les pairs.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  CE QU'ELLES EN DISENT          │
│                                 │
│  ⭐⭐⭐⭐⭐ 4.9 (127 avis)         │
│                                 │
│  ┌───────────────────────────┐  │
│  │ "Ce bracelet ne me quitte │  │
│  │  plus. Je le touche dès   │  │
│  │  que j'ai besoin de       │  │
│  │  réconfort."              │  │
│  │                           │  │
│  │  — Marie L.               │  │
│  │    Profil Réconfort       │  │
│  └───────────────────────────┘  │
│                                 │
│  ← ● ○ ○ →                      │
│                                 │
│  [Voir tous les avis →]         │
│                                 │
└─────────────────────────────────┘
```

#### Spécifications

| Élément | Valeur |
|---------|--------|
| **Note** | Stars + chiffre + nombre |
| **Témoignages** | 3-5 sélectionnés, carrousel |
| **Format** | Citation + prénom + profil quiz (si lié) |
| **Lien** | Vers page ou modal avis complets |

---

### SECTION 10 : Cross-sell

**Rôle** : Augmenter le panier avec cohérence.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  COMPLÉTEZ VOTRE RITUEL         │
│                                 │
│  ┌────────────┐ ┌────────────┐  │
│  │  [BOUGIE]  │ │  [BIJOU]   │  │
│  │            │ │            │  │
│  │ Réconfort  │ │ Collier    │  │
│  │ 49€        │ │ 39€        │  │
│  │ [Ajouter]  │ │ [Ajouter]  │  │
│  └────────────┘ └────────────┘  │
│        ← Swipe →                │
│                                 │
└─────────────────────────────────┘
```

#### Règles de recommandation

| Produit affiché | Recommandation 1 | Recommandation 2 |
|-----------------|------------------|------------------|
| **Bijou** | Bougie même pierre | Autre bijou même pierre |
| **Bougie** | Bijou même pierre | Bougie profil complémentaire |
| **Sauge** | Bougie purification | Bijou ancrage |
| **Coffret** | Bijou complémentaire | Bougie complémentaire |

#### Spécifications

| Élément | Valeur |
|---------|--------|
| **Maximum** | 2 produits |
| **CTA** | "Ajouter" directement au panier |
| **Mobile** | Scroll horizontal |
| **Desktop** | 2 cards côte à côte |

---

### SECTION 11 : FAQ

**Rôle** : Lever les objections, SEO.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  QUESTIONS FRÉQUENTES           │
│                                 │
│  ┌───────────────────────────┐  │
│  │ ▸ La pierre est-elle      │  │
│  │   vraiment naturelle ?    │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ ▾ Comment entretenir      │  │
│  │   mon bijou ?             │  │
│  ├───────────────────────────┤  │
│  │ Nettoyez délicatement     │  │
│  │ avec un chiffon doux.     │  │
│  │ Évitez l'eau et les       │  │
│  │ produits chimiques.       │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │ ▸ Quelle taille choisir ? │  │
│  └───────────────────────────┘  │
│                                 │
└─────────────────────────────────┘
```

#### FAQ par type

**Bijou :**
- La pierre est-elle naturelle ?
- Comment choisir ma taille ?
- Comment entretenir mon bijou ?
- Puis-je le porter sous la douche ?

**Bougie :**
- Comment récupérer la pierre ?
- Quelle est la durée de combustion ?
- La pierre est-elle vraiment naturelle ?
- Comment optimiser la combustion ?

**Sauge :**
- Comment utiliser la sauge ?
- Est-ce que ça sent fort ?
- Combien de temps dure un bâton ?

---

### SECTION 12 : CTA Final

**Rôle** : Dernière chance de conversion.

#### Mobile (référence)

```
┌─────────────────────────────────┐
│                                 │
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │   BRACELET CALCÉDOINE     │  │
│  │           49 €            │  │
│  │                           │  │
│  │  [  AJOUTER AU PANIER  ]  │  │
│  │                           │  │
│  │  ✓ Livraison offerte      │  │
│  │  ✓ Retours 30 jours       │  │
│  │                           │  │
│  └───────────────────────────┘  │
│                                 │
└─────────────────────────────────┘
```

---

## 5. Logique conditionnelle par type

### 5.1 Matrice des sections

| Section | Bijou | Bougie | Sauge | Coffret |
|---------|-------|--------|-------|---------|
| 1. Hero | ✅ | ✅ | ✅ | ✅ |
| 2. Bloc Achat | ✅ | ✅ | ✅ | ✅ |
| 3. Histoire | ✅ | ✅ | ✅ | ✅ |
| 4. Pierre/Énergie | ✅ Pierre | ✅ Pierre bougie | ✅ Énergie sauge | ✅ Liste pierres |
| 5. Senteur | ❌ | ✅ | ❌ | ⚡ Si contient bougie |
| 6. Rituel | ✅ Port | ✅ Combustion | ✅ Purification | ✅ Découverte |
| 7. Artisanat | ✅ | ✅ | ✅ | ✅ |
| 8. Galerie | ✅ | ✅ | ✅ | ✅ |
| 9. Social Proof | ✅ | ✅ | ✅ | ✅ |
| 10. Cross-sell | ✅ | ✅ | ✅ | ✅ |
| 11. FAQ | ✅ | ✅ | ✅ | ✅ |
| 12. CTA Final | ✅ | ✅ | ✅ | ✅ |

### 5.2 Détection du type (Liquid)

```liquid
{% assign product_type = product.type | downcase %}

{% case product_type %}
  {% when 'bijou', 'bracelet', 'collier', 'bague' %}
    {% assign template_type = 'bijou' %}
  {% when 'bougie' %}
    {% assign template_type = 'bougie' %}
  {% when 'sauge', 'encens' %}
    {% assign template_type = 'sauge' %}
  {% when 'coffret', 'bundle' %}
    {% assign template_type = 'coffret' %}
  {% else %}
    {% assign template_type = 'bijou' %}
{% endcase %}
```

---

## 6. Micro-interactions

### 6.1 Hotspots pierre

| Action | Résultat |
|--------|----------|
| **Mobile tap** | Tooltip apparaît, reste 3s |
| **Desktop hover** | Tooltip apparaît au survol |
| **Animation** | Pulse léger sur les points |

### 6.2 Scroll animations

| Section | Animation |
|---------|-----------|
| **Hero** | Parallax léger sur image |
| **Histoire** | Fade-in du texte |
| **Pierre** | Slide-in de la photo |
| **Rituel** | Apparition séquentielle des étapes |
| **Artisanat** | Fade-in des badges |

### 6.3 Respect des préférences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 7. Structure données Shopify

### 7.1 Metafields produit

| Namespace | Key | Type | Usage |
|-----------|-----|------|-------|
| `milaura` | `baseline` | `single_line_text_field` | Phrase émotionnelle hero |
| `milaura` | `stone_name` | `single_line_text_field` | Nom de la pierre |
| `milaura` | `stone_benefits` | `list.single_line_text_field` | 3 bénéfices |
| `milaura` | `stone_description` | `multi_line_text_field` | Texte pierre |
| `milaura` | `stone_image` | `file_reference` | Photo macro pierre |
| `milaura` | `ritual_steps` | `json` | 4 étapes du rituel |
| `milaura` | `scent_name` | `single_line_text_field` | Nom senteur (bougies) |
| `milaura` | `scent_notes` | `json` | Pyramide olfactive |
| `milaura` | `emotional_profile` | `metaobject_reference` | Lien vers profil quiz |
| `milaura` | `story_text` | `multi_line_text_field` | Texte section histoire |
| `milaura` | `faq` | `json` | Questions/réponses |
| `milaura` | `crosssell_products` | `list.product_reference` | Produits recommandés |

### 7.2 Format ritual_steps (JSON)

```json
[
  { "icon": "🌅", "text": "Choisissez un moment calme de la journée" },
  { "icon": "💭", "text": "Posez une intention claire pour vous" },
  { "icon": "💎", "text": "Portez votre bijou contre la peau" },
  { "icon": "✨", "text": "Touchez-le quand vous avez besoin de son énergie" }
]
```

### 7.3 Format scent_notes (JSON)

```json
{
  "top": ["Fleur d'oranger fraîche"],
  "heart": ["Néroli", "Pétale de rose"],
  "base": ["Musc blanc", "Bois de santal"]
}
```

### 7.4 Format faq (JSON)

```json
[
  {
    "question": "La pierre est-elle vraiment naturelle ?",
    "answer": "Oui, chaque pierre est naturelle et sélectionnée à la main."
  }
]
```

---

## 8. Checklist implémentation

### 8.1 Fichiers à créer

- [ ] `sections/milaura-product-hero.liquid`
- [ ] `sections/milaura-product-buy.liquid`
- [ ] `sections/milaura-product-story.liquid`
- [ ] `sections/milaura-product-stone.liquid`
- [ ] `sections/milaura-product-scent.liquid`
- [ ] `sections/milaura-product-ritual.liquid`
- [ ] `sections/milaura-product-craft.liquid`
- [ ] `sections/milaura-product-gallery.liquid`
- [ ] `sections/milaura-product-reviews.liquid`
- [ ] `sections/milaura-product-crosssell.liquid`
- [ ] `sections/milaura-product-faq.liquid`
- [ ] `sections/milaura-product-cta-final.liquid`
- [ ] `templates/product.milaura.json`

### 8.2 Styles

- [ ] Ajouter variables CSS dans `milaura.css`
- [ ] Styles hero immersif
- [ ] Styles bloc achat sticky (mobile + desktop)
- [ ] Styles hotspots et tooltips
- [ ] Styles carrousels
- [ ] Styles accordéon FAQ
- [ ] Animations scroll (respect reduced-motion)

### 8.3 JavaScript

- [ ] Sticky buy bar mobile (expand/collapse)
- [ ] Hotspots interactions
- [ ] Scroll animations (IntersectionObserver)
- [ ] Galerie lightbox
- [ ] Carrousels (swipe mobile)

### 8.4 Données

- [ ] Créer metafields définitions
- [ ] Remplir metafields pour produits existants
- [ ] Configurer cross-sell par produit

### 8.5 Tests

- [ ] Test mobile (vrais appareils)
- [ ] Test desktop
- [ ] Test accessibilité (navigation clavier, contrastes)
- [ ] Test performance (Lighthouse > 90)
- [ ] Test dans customizer Shopify

---

## Annexes

### A. Références design

| Marque | Élément à retenir |
|--------|-------------------|
| Apple | Structure, scroll progressif, révélation |
| Aesop | Ton éditorial, sobriété |
| Diptyque | Storytelling, rituel |
| Glossier | Social proof, friendly |

### B. Liens internes

- Quiz émotionnel : `docs/quiz-emotionnel-spec.md`
- Steering product page : `claude/steering/product-page-reference.md`
- Architecture thème : `CLAUDE.md`

---

*Document généré par Mary, Business Analyst — Session BMAD*
