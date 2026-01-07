# Différenciation Marché Milaura — Spécification Complète

> Document généré lors de la session de brainstorming du 6 janvier 2026
> Statut : **Validé — Prêt pour implémentation**

---

## Table des matières

1. [Positioning Statement](#1-positioning-statement)
2. [Les 5 angles différenciants](#2-les-5-angles-différenciants)
3. [Les 3 messages piliers](#3-les-3-messages-piliers)
4. [Matrice concurrents](#4-matrice-concurrents)
5. [Reasons to Believe (RTB)](#5-reasons-to-believe-rtb)
6. [Punchlines](#6-punchlines)
7. [Application dans le funnel](#7-application-dans-le-funnel)

---

## 1. Positioning Statement

### La phrase

> **"Milaura crée des bijoux et rituels en pierres naturelles pour accompagner vos émotions au quotidien."**

### Déconstruction

| Élément | Choix | Pourquoi |
|---------|-------|----------|
| **"crée"** | Pas "vend" | Artisanat, pas commerce |
| **"bijoux et rituels"** | Pas "bijoux et bougies" | Le produit = l'expérience |
| **"pierres naturelles"** | Pas "lithothérapie" | Accessible, pas ésotérique |
| **"accompagner vos émotions"** | Pas "bien-être" | Précis, émotionnel |
| **"au quotidien"** | Pas "pour les grandes occasions" | Rituel répété, pas achat unique |

### Versions courtes

| Contexte | Version |
|----------|---------|
| **Tagline** | "Bijoux & rituels en pierres naturelles" |
| **Bio réseaux** | "Des bijoux qui vous accompagnent. Des rituels qui vous ressemblent." |
| **Meta description** | "Milaura crée des bijoux en pierres naturelles pour accompagner vos émotions au quotidien. Découvrez votre pierre en 60 secondes." |

---

## 2. Les 5 angles différenciants

### Vue d'ensemble

| # | Angle | En une phrase |
|---|-------|---------------|
| 1 | **Intention, pas décoration** | Chaque bijou porte une intention émotionnelle, pas juste une pierre |
| 2 | **Pierre = clé de voûte** | La pierre est le fil rouge de toute l'expérience, du quiz au rituel |
| 3 | **Rituel, pas produit** | On n'achète pas un objet, on adopte un rituel quotidien |
| 4 | **Artisanat français tangible** | Collaboration nommée, traçabilité, pas de "fait main" vague |
| 5 | **Quiz comme porte d'entrée** | Expérience personnalisée qui guide, pas un catalogue à scroller |

---

### Angle 1 : Intention, pas décoration

**Ce qu'on dit** : "Chaque création Milaura est pensée pour une intention émotionnelle précise."

**Ce qu'on prouve** :
- 5 profils émotionnels définis (Réconfort, Protection, Sérénité, Élégance, Joie de vivre)
- Chaque produit est associé à un profil via metafield
- Le quiz recommande selon l'état émotionnel, pas selon le style

**Ce qu'on évite** :
- "Jolie pierre bleue" → on dit "Pierre du réconfort"
- Langage déco/mode → on parle énergie, équilibre, intention

**Application** :
- Noms de produits orientés intention ("Bracelet Réconfort" pas "Bracelet Calcédoine bleue")
- Descriptions centrées sur le besoin émotionnel
- Page produit : intention avant caractéristiques techniques

---

### Angle 2 : Pierre = clé de voûte

**Ce qu'on dit** : "La pierre est au cœur de chaque création. Elle n'est pas un détail."

**Ce qu'on prouve** :
- Page produit : section "La Pierre" est le pilier central
- Cross-sell basé sur la pierre (pas sur le style ou le prix)
- Bougies = pierre intégrée visible, pas cachée
- Recommandations pierre-first dans tout le funnel

**Ce qu'on évite** :
- Pierre comme prétexte marketing → la pierre est l'expérience
- Descriptions génériques → vertus spécifiques, sourcing clair

**Application** :
- Architecture template produit : pierre = section centrale
- Logique recos : `stone_handle` comme clé universelle
- Navigation : collections par pierre, pas seulement par type

---

### Angle 3 : Rituel, pas produit

**Ce qu'on dit** : "Vous n'achetez pas un bijou. Vous adoptez un rituel."

**Ce qu'on prouve** :
- Section "Votre Rituel" sur chaque page produit
- Emails post-achat qui accompagnent le rituel (J+0, J+7, J+30)
- Dashboard client centré sur "votre profil" et "vos rituels"
- Page merci qui dit "vous avez choisi un rituel, pas un produit"

**Ce qu'on évite** :
- Transactionnel pur → on finit l'expérience
- "Merci pour votre commande" froid → émotion continue

**Application** :
- 4 étapes de rituel sur chaque produit
- Vocabulaire : "adopter", "accueillir", "rituel", pas "acheter", "commander"
- Post-achat : continuation de l'expérience

---

### Angle 4 : Artisanat français tangible

**Ce qu'on dit** : "Créé en France, avec des partenaires que nous nommons."

**Ce qu'on prouve** :
- Collaboration Maison Candella (nommée, pas anonyme)
- "Coulé à la main dans notre atelier français"
- Pierres certifiées, sourcing traçable
- Pas de stock Aliexpress repackagé

**Ce qu'on évite** :
- "Artisanal" vague → noms, lieux, partenaires
- Claims invérifiables → preuves tangibles

**Application** :
- Mention Maison Candella sur pages bougies
- Section Artisanat avec badges concrets
- Page À propos avec photos atelier, équipe, partenaires

---

### Angle 5 : Quiz comme porte d'entrée

**Ce qu'on dit** : "Pas besoin de chercher. Votre bougie vous trouve."

**Ce qu'on prouve** :
- Quiz émotionnel en 60 secondes
- 1 seul résultat, pas une liste de suggestions
- Lien quiz → produit → rituel → dashboard
- Expérience guidée, pas catalogue infini

**Ce qu'on évite** :
- "Filtrer par pierre" comme seul parcours → le quiz est le hero
- Surcharge de choix → 1 bougie = 1 résultat

**Application** :
- Teaser quiz prominent sur homepage
- Quiz = section à part entière, pas un gadget
- Résultat = page produit personnalisée

---

## 3. Les 3 messages piliers

### Pilier 1 : L'intention

**Promesse** : "Chaque pierre porte une intention. Trouvez la vôtre."

**Preuves** :
- Quiz émotionnel → 1 résultat personnalisé
- 5 profils clairement définis
- Chaque fiche produit liée à une intention

**Où l'afficher** :
- Hero homepage
- Teaser quiz
- Section "La Pierre" page produit

**Ton** : Invitant, curieux, doux

---

### Pilier 2 : Le rituel

**Promesse** : "Plus qu'un bijou. Un rituel quotidien."

**Preuves** :
- Section rituel sur chaque produit
- Emails d'accompagnement post-achat
- Dashboard "Mes rituels"

**Où l'afficher** :
- Page produit (section dédiée)
- Page merci
- Emails J+0, J+7

**Ton** : Accompagnant, intime, poétique

---

### Pilier 3 : L'artisanat

**Promesse** : "Créé en France, avec des mains et des noms."

**Preuves** :
- Maison Candella (collaboration nommée)
- "Coulé à la main dans notre atelier"
- Pierres naturelles certifiées
- Photos atelier / making-of

**Où l'afficher** :
- Section Artisanat page produit
- Footer / page À propos
- Réassurance panier/checkout

**Ton** : Authentique, humble, factuel

---

## 4. Matrice concurrents

### Segments concurrents

| Segment | Exemples | Force | Faiblesse |
|---------|----------|-------|-----------|
| **Bijoux litho générique** | Etsy, Amazon, boutiques ésotériques | Prix bas, choix massif | Pas de storytelling, qualité variable, expérience froide |
| **Bijoux litho premium** | Atelier bijoutiers, marques artisanales | Qualité, artisanat | Prix élevés, pas de parcours émotionnel |
| **Bougies bien-être** | Diptyque, Loewe, marques DTC | Branding fort, premium | Pas de pierre, pas de bijou, one-shot |
| **Cadeaux bien-être** | Oh My Cream, Nature & Découvertes | Accessible, cadeau facile | Générique, pas d'intention, pas de suivi |

### Comment Milaura gagne

| Contre | On gagne parce que |
|--------|-------------------|
| **Litho générique** | Intention > catalogue. Rituel > produit. Qualité prouvée > claims vides. Quiz > scroll infini. |
| **Litho premium** | Prix accessible + expérience guidée. Pas besoin d'être expert pour choisir. |
| **Bougies bien-être** | Pierre intégrée = différenciation unique. Bijou = rituel quotidien portable. Cross-sell naturel. |
| **Cadeaux bien-être** | Personnalisation (quiz) > cadeau générique. Suivi post-achat > one-shot. Dashboard > rien. |

### Positionnement carte

```
                    PREMIUM
                       ↑
                       │
        Diptyque    MILAURA     Bijoutiers
        Loewe         ●         artisanaux
                       │
    ─────────────────────────────────────→
    GÉNÉRIQUE                    PERSONNALISÉ
                       │
        Amazon      Nature &
        Etsy        Découvertes
                       │
                       ↓
                  ACCESSIBLE
```

**Milaura = Premium accessible + Personnalisé**

### Tableau comparatif détaillé

| Critère | Litho générique | Litho premium | Bougies premium | Milaura |
|---------|-----------------|---------------|-----------------|---------|
| Prix | € | €€€ | €€ | €€ |
| Qualité | Variable | Haute | Haute | Haute |
| Personnalisation | ❌ | ❌ | ❌ | ✅ Quiz |
| Storytelling | ❌ | ⚠️ | ✅ | ✅ |
| Rituel | ❌ | ❌ | ⚠️ | ✅ |
| Suivi post-achat | ❌ | ❌ | ❌ | ✅ |
| Cross-sell cohérent | ❌ | ❌ | ❌ | ✅ |
| Pierre centrale | ⚠️ | ✅ | ❌ | ✅ |

---

## 5. Reasons to Believe (RTB)

### Les preuves à afficher dans le funnel

| RTB | Preuve tangible | Icône | Où l'afficher |
|-----|-----------------|-------|---------------|
| **Artisanat français** | "Fabriqué en France" | 🇫🇷 | Produit, panier, checkout |
| **Partenariat nommé** | "Collaboration Maison Candella" | 🕯️ | Produit (bougies), À propos |
| **Pierres certifiées** | "Pierre naturelle certifiée" | 💎 | Produit, section Pierre |
| **Livraison offerte** | "Livraison offerte dès 49€" | 📦 | Header, panier, checkout |
| **Retours gratuits** | "Retours gratuits 30 jours" | ↩️ | Produit, panier, checkout |
| **Paiement sécurisé** | "Paiement 100% sécurisé" | 🔒 | Checkout, panier |
| **Quiz personnalisé** | "60 secondes pour trouver votre rituel" | 🔮 | Homepage, teaser |
| **Accompagnement** | "On vous accompagne après l'achat" | 💬 | Page merci, emails |

### Formats d'affichage

#### Micro-réassurance (page produit, sous CTA)

```
✓ Livraison offerte dès 49€
✓ Retours gratuits 30 jours
✓ Pierre naturelle certifiée
```

#### Badges réassurance (panier)

```
🇫🇷 Fabriqué en France
🔒 Paiement 100% sécurisé
↩️ Retours gratuits 30 jours
```

#### Trust bar (footer ou checkout)

```
[🇫🇷 France] [💎 Pierres certifiées] [🔒 Paiement sécurisé] [↩️ Retours 30j]
```

---

## 6. Punchlines

### Hero / Homepage

| # | Punchline | Usage |
|---|-----------|-------|
| 1 | **"Et si une pierre était faite pour vous ?"** | Hero principal |
| 2 | **"Trouvez votre intention en 60 secondes"** | Teaser quiz |
| 3 | **"Des bijoux qui vous accompagnent. Des rituels qui vous ressemblent."** | Sous-titre hero |

### Page Produit

| # | Punchline | Usage |
|---|-----------|-------|
| 4 | **"Portez votre intention"** | Baseline bijou |
| 5 | **"La pierre qui vous correspond"** | Section Pierre |
| 6 | **"Plus qu'un bijou. Un rituel quotidien."** | Section Rituel |

### Panier / Checkout

| # | Punchline | Usage |
|---|-----------|-------|
| 7 | **"Vous êtes à un clic de votre rituel"** | CTA checkout |
| 8 | **"Complétez votre intention"** | Section recos panier |

### Page Merci

| # | Punchline | Usage |
|---|-----------|-------|
| 9 | **"Vous avez choisi bien plus qu'un produit"** | Titre page merci |
| 10 | **"Votre rituel commence maintenant"** | Sous-titre page merci |

### Variations additionnelles

| Contexte | Punchline |
|----------|-----------|
| Email J+0 | "Votre rituel est en préparation" |
| Email J+7 | "Comment se passe votre rituel ?" |
| Email J+30 | "Votre pierre au quotidien" |
| Panier vide | "Votre panier attend son premier rituel" |
| Erreur 404 | "Cette page s'est égarée. Pas vous." |
| Newsletter | "Rejoignez le rituel" |

---

## 7. Application dans le funnel

### Mapping messages → emplacements

| Emplacement | Message pilier | Punchline | RTBs |
|-------------|----------------|-----------|------|
| **Homepage hero** | Intention | "Et si une pierre était faite pour vous ?" | — |
| **Teaser quiz** | Intention | "Trouvez votre intention en 60 secondes" | Quiz 60s |
| **Page produit - Hero** | Intention | "[Nom pierre], la pierre du [intention]" | — |
| **Page produit - Pierre** | Intention | "La pierre qui vous correspond" | Pierre certifiée |
| **Page produit - Rituel** | Rituel | "Plus qu'un bijou. Un rituel quotidien." | — |
| **Page produit - Artisanat** | Artisanat | — | France, Candella, Certifié |
| **Page produit - CTA** | — | — | Livraison, Retours, Sécurisé |
| **Cart drawer** | — | "Complétez votre intention" | Livraison, Retours, Sécurisé |
| **Checkout** | Artisanat | — | Tous RTBs |
| **Page merci** | Rituel | "Vous avez choisi bien plus qu'un produit" | Accompagnement |
| **Email J+0** | Rituel | "Votre rituel est en préparation" | — |

### Checklist cohérence

- [ ] Chaque page a au moins 1 message pilier visible
- [ ] Chaque point de conversion a des RTBs
- [ ] Le ton est cohérent (doux, poétique, jamais agressif)
- [ ] Les punchlines sont utilisées aux bons endroits
- [ ] Aucun langage "vendeur" ou "promo agressive"

---

## Annexe : Ce qu'on ne dit JAMAIS

| ❌ Interdit | ✅ Alternative |
|-------------|---------------|
| "Achetez maintenant" | "Adopter ce rituel" |
| "Profitez de -20%" | (Pas de promo agressive) |
| "Best-seller" | "Le plus adopté" |
| "Livraison rapide" | "Livraison soignée en 3-5 jours" |
| "Satisfait ou remboursé" | "Retours gratuits 30 jours" |
| "Lithothérapie" | "Pierres naturelles" |
| "Pouvoirs de la pierre" | "Vertus" ou "Énergie" |
| "Magique" | "Accompagne" |

---

*Document généré par Mary, Business Analyst — Session BMAD*
