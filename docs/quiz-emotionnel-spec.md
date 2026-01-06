# Quiz Émotionnel Milaura — Spécification Complète

> Document généré lors de la session de brainstorming du 6 janvier 2026
> Statut : **Validé — Prêt pour implémentation**

---

## Table des matières

1. [Résumé exécutif](#1-résumé-exécutif)
2. [Profils émotionnels](#2-profils-émotionnels)
3. [Questions du quiz](#3-questions-du-quiz)
4. [Logique de scoring](#4-logique-de-scoring)
5. [Parcours utilisateur](#5-parcours-utilisateur)
6. [Copy complète](#6-copy-complète)
7. [Structure données Shopify](#7-structure-données-shopify)
8. [Extensions V2](#8-extensions-v2)

---

## 1. Résumé exécutif

### Objectif
Le quiz émotionnel Milaura est le cœur du funnel de conversion. Il recommande **une seule bougie émotionnelle** (jamais d'alternative) basée sur l'état émotionnel du visiteur.

### Produit
Chaque bougie est une combinaison fixe :
- **Senteur** créée par Maison Candella
- **Pierre naturelle** intégrée au fond de la bougie (visible)

### Caractéristiques quiz
| Paramètre | Valeur |
|-----------|--------|
| Nombre de questions | 6 |
| Durée cible | 30-60 secondes |
| Profils possibles | 5 |
| Format réponses | Texte + icône |
| Résultat | 1 bougie unique |

### Parcours
```
Homepage (teaser) → Quiz (6 questions) → Page résultat → Achat → Dashboard client
```

---

## 2. Profils émotionnels

### 2.1 Vue d'ensemble

| Handle | Nom | Senteur | Pierre | Besoin principal |
|--------|-----|---------|--------|------------------|
| `reconfort` | Réconfort | Néroli | Calcédoine bleue | Être enveloppé, rassuré |
| `protection` | Protection | Bois d'oud | Obsidienne noire | Se protéger, s'ancrer |
| `serenite` | Sérénité | Thé blanc | Améthyste | Calme intérieur, clarté |
| `elegance` | Élégance | Ambre gris | Quartz rose | Estime de soi, harmonie |
| `joie_de_vivre` | Joie de vivre | Fleur d'oranger | Aventurine verte | Optimisme, vitalité |

### 2.2 Profils détaillés

#### Réconfort (`reconfort`)
| Champ | Valeur |
|-------|--------|
| **Senteur** | Néroli |
| **Pierre** | Calcédoine bleue |
| **Besoin principal** | Être enveloppé, rassuré, soutenu |
| **Situation type** | Période de transition (changement de vie, rupture, reconversion, fatigue émotionnelle) |
| **Différenciateur** | Besoin de douceur et de soutien extérieur (≠ Sérénité = recentrage seul·e / ≠ Protection = renforcement face à l'extérieur) |
| **Mots-clés scoring** | vulnérable, transition, fatigué, soutien, douceur, rassuré |

#### Protection (`protection`)
| Champ | Valeur |
|-------|--------|
| **Senteur** | Bois d'oud |
| **Pierre** | Obsidienne noire |
| **Besoin principal** | Se protéger, s'ancrer, poser des limites |
| **Situation type** | Se sent exposé, envahi ou vidé par l'environnement (relations, travail, rythme) |
| **Différenciateur** | Besoin de barrière et d'ancrage face à l'extérieur (≠ Réconfort = besoin de soutien / ≠ Sérénité = besoin de calme intérieur) |
| **Mots-clés scoring** | envahi, drainé, limites, ancrage, sécurité, protéger |

#### Sérénité (`serenite`)
| Champ | Valeur |
|-------|--------|
| **Senteur** | Thé blanc |
| **Pierre** | Améthyste |
| **Besoin principal** | Calme intérieur, clarté, lâcher-prise |
| **Situation type** | Mental sursollicité (ruminations, stress, difficulté à décrocher ou dormir) |
| **Différenciateur** | Besoin de silence et de recentrage par soi-même (≠ Réconfort = besoin d'être soutenu / ≠ Protection = besoin de barrière) |
| **Mots-clés scoring** | mental, ruminations, stress, calme, clarté, lâcher-prise, dormir |

#### Élégance (`elegance`)
| Champ | Valeur |
|-------|--------|
| **Senteur** | Ambre gris |
| **Pierre** | Quartz rose |
| **Besoin principal** | Estime de soi, douceur envers soi, harmonie intérieure |
| **Situation type** | Besoin de se reconnecter à sa valeur personnelle, alignement intérieur |
| **Différenciateur** | Besoin d'amour de soi et d'harmonie (≠ Joie de vivre = besoin d'élan et d'énergie) |
| **Mots-clés scoring** | valeur, estime, douceur, harmonie, aligné, premium |

#### Joie de vivre (`joie_de_vivre`)
| Champ | Valeur |
|-------|--------|
| **Senteur** | Fleur d'oranger |
| **Pierre** | Aventurine verte |
| **Besoin principal** | Optimisme, vitalité émotionnelle, légèreté |
| **Situation type** | Se sent éteint, en routine ou en baisse de motivation |
| **Différenciateur** | Besoin d'élan et d'énergie positive (≠ Élégance = besoin de valeur personnelle et d'harmonie) |
| **Mots-clés scoring** | éteint, routine, motivation, optimisme, légèreté, vitalité, élan |

### 2.3 Matrice de discrimination rapide

| Si la personne dit... | Profil |
|-----------------------|--------|
| "Je traverse une période difficile" | Réconfort |
| "Je me sens envahi·e / vidé·e" | Protection |
| "Mon mental ne s'arrête jamais" | Sérénité |
| "Je manque de confiance en moi" | Élégance |
| "Je me sens éteint·e / en pilote automatique" | Joie de vivre |

---

## 3. Questions du quiz

### Q1 — Miroir émotionnel
**"Quelle phrase vous ressemble le plus en ce moment ?"**

| # | Réponse | Icône | Scoring |
|---|---------|-------|---------|
| A | "Je traverse une période fragile, j'ai besoin de douceur" | 🪫 | Réconfort +3 |
| B | "Mon mental tourne en boucle, j'ai besoin de calme" | 🌀 | Sérénité +3 |
| C | "Je me sens envahi·e, j'ai besoin de me protéger" | 🛡️ | Protection +3 |
| D | "Je me sens en décalage avec moi-même" | 🪞 | Élégance +3 |
| E | "Je suis en pilote automatique, j'ai perdu mon élan" | ⏸️ | Joie de vivre +3 |

---

### Q2 — Source du ressenti
**"Si vous deviez identifier la source, ce serait plutôt..."**

| # | Réponse | Icône | Scoring |
|---|---------|-------|---------|
| A | Une période de transition ou de changement | 🚪 | Réconfort +3 |
| B | Un environnement qui me draine | 🌫️ | Protection +3 |
| C | Un mental qui ne s'arrête jamais | 💭 | Sérénité +3 |
| D | Un manque de connexion à moi-même | 🪞 | Élégance +3 |
| E | Une routine qui m'éteint | ⏸️ | Joie de vivre +3 |

---

### Q3 — Besoin principal
**"Ce dont vous avez le plus besoin en ce moment ?"**

| # | Réponse | Icône | Scoring |
|---|---------|-------|---------|
| A | Être enveloppé·e, rassuré·e | 🤗 | Réconfort +3 |
| B | Poser des limites, me sentir en sécurité | 🏰 | Protection +3 |
| C | Du calme, du silence intérieur | 🤫 | Sérénité +3 |
| D | Me reconnecter à ma valeur | 💎 | Élégance +3 |
| E | Retrouver de l'élan et de la légèreté | 🎈 | Joie de vivre +3 |

---

### Q4 — Projection situationnelle
**"Après une journée éprouvante, vous avez envie de..."**

| # | Réponse | Icône | Scoring |
|---|---------|-------|---------|
| A | M'envelopper dans un cocon de douceur | 🧸 | Réconfort +3 |
| B | Me couper du monde et recharger seul·e | 🚪 | Protection +2, Sérénité +1 |
| C | Faire le vide, ne penser à rien | 🧘 | Sérénité +3 |
| D | Prendre soin de moi, me faire du bien | 🛁 | Élégance +3 |
| E | Retrouver une énergie positive | ✨ | Joie de vivre +3 |

---

### Q5 — Manque ressenti
**"Dernièrement, qu'est-ce qui vous manque le plus ?"**

| # | Réponse | Icône | Scoring |
|---|---------|-------|---------|
| A | Du soutien, de la présence bienveillante | 💛 | Réconfort +3 |
| B | Un espace à moi, préservé | 🏠 | Protection +3 |
| C | De la clarté, du recul | 🔭 | Sérénité +3 |
| D | De la confiance en moi | 🌟 | Élégance +3 |
| E | De l'enthousiasme, de la joie | 🎉 | Joie de vivre +3 |

---

### Q6 — Intention finale
**"Si cette bougie pouvait vous offrir une chose, ce serait..."**

| # | Réponse | Icône | Scoring |
|---|---------|-------|---------|
| A | Un sentiment de réconfort profond | 🕯️💙 | Réconfort +3 |
| B | Une sensation de protection et d'ancrage | 🕯️🖤 | Protection +3 |
| C | Une paix intérieure durable | 🕯️💜 | Sérénité +3 |
| D | Une reconnexion à ma beauté intérieure | 🕯️💗 | Élégance +3 |
| E | Un élan de vitalité et d'optimisme | 🕯️💚 | Joie de vivre +3 |

---

## 4. Logique de scoring

### 4.1 Calcul du score

```javascript
// Structure de scoring
const scores = {
  reconfort: 0,
  protection: 0,
  serenite: 0,
  elegance: 0,
  joie_de_vivre: 0
};

// Chaque réponse ajoute des points
// Exemple Q1.A : scores.reconfort += 3;

// Résultat = profil avec score max
const result = Object.keys(scores).reduce((a, b) =>
  scores[a] > scores[b] ? a : b
);
```

### 4.2 Gestion des égalités

**Priorité en cas d'ex-aequo :**
1. Réponse à Q6 (question d'intention) → profil correspondant gagne
2. Si toujours égalité → Réponse à Q3 (besoin direct) → profil correspondant gagne
3. Si toujours égalité → Premier profil dans l'ordre alphabétique

### 4.3 Seuils de confiance

| Score | Interprétation |
|-------|----------------|
| 15-18 pts | Correspondance très forte |
| 12-14 pts | Correspondance forte |
| 9-11 pts | Correspondance modérée |
| < 9 pts | Correspondance faible (rare) |

**Score max théorique** : 18 pts (6 questions × 3 pts)

### 4.4 Matrice de scoring complète

| Question | Option | Réconfort | Protection | Sérénité | Élégance | Joie de vivre |
|----------|--------|-----------|------------|----------|----------|---------------|
| Q1 | A | +3 | | | | |
| Q1 | B | | | +3 | | |
| Q1 | C | | +3 | | | |
| Q1 | D | | | | +3 | |
| Q1 | E | | | | | +3 |
| Q2 | A | +3 | | | | |
| Q2 | B | | +3 | | | |
| Q2 | C | | | +3 | | |
| Q2 | D | | | | +3 | |
| Q2 | E | | | | | +3 |
| Q3 | A | +3 | | | | |
| Q3 | B | | +3 | | | |
| Q3 | C | | | +3 | | |
| Q3 | D | | | | +3 | |
| Q3 | E | | | | | +3 |
| Q4 | A | +3 | | | | |
| Q4 | B | | +2 | +1 | | |
| Q4 | C | | | +3 | | |
| Q4 | D | | | | +3 | |
| Q4 | E | | | | | +3 |
| Q5 | A | +3 | | | | |
| Q5 | B | | +3 | | | |
| Q5 | C | | | +3 | | |
| Q5 | D | | | | +3 | |
| Q5 | E | | | | | +3 |
| Q6 | A | +3 | | | | |
| Q6 | B | | +3 | | | |
| Q6 | C | | | +3 | | |
| Q6 | D | | | | +3 | |
| Q6 | E | | | | | +3 |

---

## 5. Parcours utilisateur

### 5.1 Vue d'ensemble

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  HOMEPAGE   │────▶│    QUIZ     │────▶│  RÉSULTAT   │────▶│  DASHBOARD  │
│   Teaser    │     │  6 questions │     │ Page produit │     │   Client    │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

### 5.2 Homepage — Teaser Quiz

| Élément | Contenu |
|---------|---------|
| **Accroche** | "Et si une bougie était faite pour vous ?" |
| **Sous-texte** | "Découvrez la bougie émotionnelle qui vous correspond en 60 secondes" |
| **CTA** | "Faire le quiz" |
| **Visuel** | Les 5 bougies en arc / halo lumineux |
| **Placement** | Section héro ou juste après (above the fold mobile) |

### 5.3 Page Quiz

#### Écran intro
| Élément | Contenu |
|---------|---------|
| **Titre** | "Trouvez votre bougie émotionnelle" |
| **Promesse** | "6 questions pour découvrir la bougie créée pour votre état du moment" |
| **Durée** | "⏱️ 60 secondes" |
| **Réassurance** | "Chaque bougie associe une senteur unique et une pierre naturelle, pensées pour votre équilibre émotionnel" |
| **CTA** | "Commencer" |

#### Écrans questions (Q1-Q6)
```
┌────────────────────────────────────┐
│  Progress bar (●●●○○○)             │
├────────────────────────────────────┤
│                                    │
│  [Question]                        │
│                                    │
├────────────────────────────────────┤
│  ┌──────────────────────────────┐  │
│  │ [icône]  Réponse A           │  │
│  └──────────────────────────────┘  │
│  ┌──────────────────────────────┐  │
│  │ [icône]  Réponse B           │  │
│  └──────────────────────────────┘  │
│  ...                               │
│                                    │
│          [← Retour]                │
└────────────────────────────────────┘
```

**Comportement :**
- Clic sur réponse → transition auto vers question suivante
- Bouton "Retour" discret pour corriger
- Animation subtile entre questions (slide ou fade)
- Progress bar visuelle

#### Écran calcul
| Élément | Contenu |
|---------|---------|
| **Animation** | Loader élégant (bougie qui s'allume / halo qui pulse) |
| **Texte** | "Nous analysons vos réponses..." |
| **Durée** | 2-3 secondes |

### 5.4 Page Résultat

Structure des sections :

1. **Révélation** — Nom de la bougie, visuel, phrase personnalisée
2. **Explication** — Pourquoi cette bougie correspond (senteur + pierre)
3. **Rituel** — Mode d'emploi émotionnel (4 étapes)
4. **Réassurance** — Badges de confiance
5. **CTA** — Prix + Ajouter au panier
6. **Social proof** — Témoignages (optionnel V1)

### 5.5 Gestion rupture de stock

| Élément | Contenu |
|---------|---------|
| **Message** | "⚠️ Bientôt de retour" |
| **Explication** | "Cette bougie artisanale est en cours de fabrication." |
| **Action** | Champ email + bouton "Me prévenir" |
| **Alternative** | Aucune (promesse 1 bougie = 1 résultat) |

### 5.6 Dashboard Client

**Accès :** Compte client Shopify ou lien unique par email

**Sections V1 :**
- Ma bougie actuelle (résultat + date)
- Actions : Revoir résultat / Racheter
- Refaire le quiz
- Historique des résultats

---

## 6. Copy complète

### 6.1 Teaser Homepage

```
Accroche : "Et si une bougie était faite pour vous ?"
Sous-texte : "Découvrez la bougie émotionnelle qui vous correspond en 60 secondes"
CTA : "Faire le quiz"
```

### 6.2 Intro Quiz

```
Titre : "Trouvez votre bougie émotionnelle"
Sous-titre : "6 questions pour découvrir la bougie créée pour votre état du moment"
Durée : "⏱️ 60 secondes"
Réassurance : "Chaque bougie associe une senteur unique et une pierre naturelle, pensées pour votre équilibre émotionnel"
CTA : "Commencer"
```

### 6.3 Écran calcul

```
Texte : "Nous analysons vos réponses..."
```

### 6.4 Page Résultat — Par profil

#### Réconfort

```yaml
revelation:
  titre: "Votre bougie émotionnelle"
  nom: "RÉCONFORT"
  baseline: "La bougie qui vous enveloppe"
  phrase_perso: "Parce que vous traversez une période de transition et avez besoin d'être enveloppé·e et rassuré·e."

details:
  senteur: "Néroli"
  pierre: "Calcédoine bleue"

explication:
  titre: "Pourquoi cette bougie vous correspond"
  points:
    - "Le Néroli, extrait de la fleur d'oranger amer, est reconnu pour ses vertus apaisantes et réconfortantes. Son parfum enveloppant calme les tensions émotionnelles."
    - "La Calcédoine bleue est la pierre du réconfort par excellence. Elle apporte douceur et sérénité, comme une présence bienveillante à vos côtés."
    - "Cette combinaison a été pensée pour vous accompagner dans les moments où vous avez besoin de vous sentir soutenu·e."

rituel:
  titre: "Votre rituel Réconfort"
  etapes:
    - "Allumez votre bougie dans un moment calme, de préférence le soir"
    - "Prenez 3 respirations profondes et laissez vos épaules se relâcher"
    - "Laissez la senteur de Néroli vous envelopper comme une couverture douce"
    - "Une fois la bougie consumée, gardez la Calcédoine bleue comme talisman de réconfort"
  duree: "Durée de combustion : XX heures"

reassurance:
  - "Bougie artisanale, coulée à la main en France"
  - "Collaboration exclusive Maison Candella"
  - "Pierre naturelle certifiée, intégrée à la fabrication"
  - "Livraison offerte dès XX€"
```

#### Protection

```yaml
revelation:
  titre: "Votre bougie émotionnelle"
  nom: "PROTECTION"
  baseline: "La bougie qui vous ancre"
  phrase_perso: "Parce que vous vous sentez exposé·e et avez besoin de poser des limites pour vous recentrer."

details:
  senteur: "Bois d'oud"
  pierre: "Obsidienne noire"

explication:
  titre: "Pourquoi cette bougie vous correspond"
  points:
    - "Le Bois d'oud, précieux et profond, crée une atmosphère de sanctuaire. Son parfum boisé et enveloppant établit une frontière protectrice avec l'extérieur."
    - "L'Obsidienne noire est la pierre de protection par excellence. Elle absorbe les énergies négatives et renforce votre ancrage."
    - "Cette combinaison a été pensée pour créer un espace de sécurité où vous pouvez vous ressourcer."

rituel:
  titre: "Votre rituel Protection"
  etapes:
    - "Allumez votre bougie en début de soirée, quand vous rentrez chez vous"
    - "Visualisez une bulle protectrice qui se forme autour de votre espace"
    - "Laissez le Bois d'oud créer une barrière apaisante entre vous et le monde extérieur"
    - "Une fois la bougie consumée, gardez l'Obsidienne noire comme bouclier personnel"
  duree: "Durée de combustion : XX heures"

reassurance:
  - "Bougie artisanale, coulée à la main en France"
  - "Collaboration exclusive Maison Candella"
  - "Pierre naturelle certifiée, intégrée à la fabrication"
  - "Livraison offerte dès XX€"
```

#### Sérénité

```yaml
revelation:
  titre: "Votre bougie émotionnelle"
  nom: "SÉRÉNITÉ"
  baseline: "La bougie qui vous apaise"
  phrase_perso: "Parce que votre mental est sursollicité et que vous avez besoin de calme et de clarté."

details:
  senteur: "Thé blanc"
  pierre: "Améthyste"

explication:
  titre: "Pourquoi cette bougie vous correspond"
  points:
    - "Le Thé blanc, délicat et aérien, invite au lâcher-prise. Son parfum subtil calme le mental et favorise la clarté d'esprit."
    - "L'Améthyste est la pierre de la sérénité. Elle apaise les pensées agitées et facilite un sommeil réparateur."
    - "Cette combinaison a été pensée pour vous offrir un moment de pause dans le tumulte mental."

rituel:
  titre: "Votre rituel Sérénité"
  etapes:
    - "Allumez votre bougie 30 minutes avant le coucher"
    - "Éloignez-vous des écrans et installez-vous confortablement"
    - "Laissez le Thé blanc apaiser votre mental, pensée après pensée"
    - "Une fois la bougie consumée, placez l'Améthyste sous votre oreiller pour un sommeil serein"
  duree: "Durée de combustion : XX heures"

reassurance:
  - "Bougie artisanale, coulée à la main en France"
  - "Collaboration exclusive Maison Candella"
  - "Pierre naturelle certifiée, intégrée à la fabrication"
  - "Livraison offerte dès XX€"
```

#### Élégance

```yaml
revelation:
  titre: "Votre bougie émotionnelle"
  nom: "ÉLÉGANCE"
  baseline: "La bougie qui vous révèle"
  phrase_perso: "Parce que vous avez besoin de vous reconnecter à votre valeur et de cultiver la douceur envers vous-même."

details:
  senteur: "Ambre gris"
  pierre: "Quartz rose"

explication:
  titre: "Pourquoi cette bougie vous correspond"
  points:
    - "L'Ambre gris, chaud et sensuel, éveille l'estime de soi. Son parfum sophistiqué vous reconnecte à votre beauté intérieure."
    - "Le Quartz rose est la pierre de l'amour de soi. Elle ouvre le cœur à la bienveillance et à l'harmonie émotionnelle."
    - "Cette combinaison a été pensée pour vous rappeler votre valeur et cultiver une relation douce avec vous-même."

rituel:
  titre: "Votre rituel Élégance"
  etapes:
    - "Allumez votre bougie lors d'un moment dédié à vous-même (bain, soin, lecture)"
    - "Regardez la flamme et reconnectez-vous à ce qui vous rend unique"
    - "Laissez l'Ambre gris vous envelopper d'une aura de confiance"
    - "Une fois la bougie consumée, gardez le Quartz rose près de votre cœur"
  duree: "Durée de combustion : XX heures"

reassurance:
  - "Bougie artisanale, coulée à la main en France"
  - "Collaboration exclusive Maison Candella"
  - "Pierre naturelle certifiée, intégrée à la fabrication"
  - "Livraison offerte dès XX€"
```

#### Joie de vivre

```yaml
revelation:
  titre: "Votre bougie émotionnelle"
  nom: "JOIE DE VIVRE"
  baseline: "La bougie qui vous éveille"
  phrase_perso: "Parce que vous avez besoin de retrouver votre élan et de rallumer la flamme de l'enthousiasme."

details:
  senteur: "Fleur d'oranger"
  pierre: "Aventurine verte"

explication:
  titre: "Pourquoi cette bougie vous correspond"
  points:
    - "La Fleur d'oranger, lumineuse et joyeuse, réveille l'optimisme. Son parfum frais et fleuri invite à la légèreté."
    - "L'Aventurine verte est la pierre de la vitalité. Elle stimule l'enthousiasme et attire les opportunités positives."
    - "Cette combinaison a été pensée pour vous aider à sortir de la routine et retrouver votre énergie naturelle."

rituel:
  titre: "Votre rituel Joie de vivre"
  etapes:
    - "Allumez votre bougie le matin ou en début d'après-midi"
    - "Ouvrez les fenêtres et laissez entrer la lumière"
    - "Laissez la Fleur d'oranger éveiller votre envie de mouvement et de nouveauté"
    - "Une fois la bougie consumée, gardez l'Aventurine verte comme rappel de votre vitalité"
  duree: "Durée de combustion : XX heures"

reassurance:
  - "Bougie artisanale, coulée à la main en France"
  - "Collaboration exclusive Maison Candella"
  - "Pierre naturelle certifiée, intégrée à la fabrication"
  - "Livraison offerte dès XX€"
```

### 6.5 Gestion rupture stock

```
Titre : "[NOM BOUGIE] — Votre bougie émotionnelle"
Badge : "⚠️ Bientôt de retour"
Texte : "Cette bougie artisanale est en cours de fabrication. Soyez prévenu·e dès son retour :"
CTA : "Me prévenir"
Alternative : "📩 Recevoir mon résultat par email en attendant"
```

### 6.6 Dashboard Client

```
Titre : "Mon espace Milaura"
Salutation : "👋 Bonjour [Prénom]"

Section bougie actuelle :
  Titre : "Ma bougie actuelle"
  Info : "[NOM] — Quiz du [DATE]"
  CTA 1 : "Revoir mon résultat"
  CTA 2 : "Racheter cette bougie"

Section refaire quiz :
  Titre : "Refaire le quiz"
  Texte : "Votre état émotionnel évolue. Découvrez si une autre bougie vous correspond aujourd'hui."
  CTA : "Refaire le quiz"

Section historique :
  Titre : "Historique"
  Format : "• [DATE] — [NOM BOUGIE]"
```

---

## 7. Structure données Shopify

### 7.1 Metaobject : `emotional_profile`

```json
{
  "name": "Profil Émotionnel",
  "type": "emotional_profile",
  "fields": [
    { "key": "handle", "type": "single_line_text_field" },
    { "key": "name", "type": "single_line_text_field" },
    { "key": "candle_product", "type": "product_reference" },
    { "key": "scent", "type": "single_line_text_field" },
    { "key": "stone", "type": "single_line_text_field" },
    { "key": "core_need", "type": "single_line_text_field" },
    { "key": "situation", "type": "multi_line_text_field" },
    { "key": "differentiator", "type": "multi_line_text_field" },
    { "key": "keywords", "type": "list.single_line_text_field" },
    { "key": "result_copy", "type": "json" }
  ]
}
```

### 7.2 Metaobject : `quiz_question`

```json
{
  "name": "Question Quiz",
  "type": "quiz_question",
  "fields": [
    { "key": "order", "type": "number_integer" },
    { "key": "question_text", "type": "single_line_text_field" },
    { "key": "options", "type": "json" }
  ]
}
```

**Format options (JSON) :**
```json
[
  {
    "text": "Je traverse une période fragile, j'ai besoin de douceur",
    "icon": "🪫",
    "scoring": { "reconfort": 3 }
  },
  {
    "text": "Mon mental tourne en boucle, j'ai besoin de calme",
    "icon": "🌀",
    "scoring": { "serenite": 3 }
  }
]
```

### 7.3 Customer Metafields

| Namespace | Key | Type | Usage |
|-----------|-----|------|-------|
| `milaura` | `quiz_result` | `single_line_text_field` | Handle du profil actuel |
| `milaura` | `quiz_date` | `date` | Date du dernier quiz |
| `milaura` | `quiz_history` | `json` | Historique des résultats |

**Format quiz_history :**
```json
[
  { "date": "2026-01-15", "profile": "reconfort" },
  { "date": "2025-12-02", "profile": "serenite" }
]
```

---

## 8. Extensions V2

### 8.1 Diffuseur passif
- Nouveau type de produit avec même logique de profils
- Quiz étendu ou question de format en fin de quiz
- Mapping profil → diffuseur (même senteur, sans pierre)

### 8.2 Recommandation bijou complémentaire
- Après résultat bougie, suggestion de bijou avec la même pierre
- Cross-sell sur page résultat et dashboard

### 8.3 Suivi émotionnel
- Graphique d'évolution des profils dans le temps
- Notifications personnalisées selon patterns

### 8.4 Programme fidélité
- Points par quiz complété
- Récompenses pour ré-achats
- Statuts VIP

---

## Annexes

### A. Checklist implémentation

- [ ] Créer les 5 metaobjects `emotional_profile`
- [ ] Créer les 6 metaobjects `quiz_question`
- [ ] Développer section `milaura-quiz-teaser.liquid`
- [ ] Développer template `page.quiz.liquid`
- [ ] Développer template `page.quiz-result.liquid`
- [ ] Implémenter logique JS de scoring
- [ ] Créer customer metafields
- [ ] Développer section dashboard client
- [ ] Tester parcours complet
- [ ] Optimiser mobile
- [ ] Configurer notifications restock

### B. Références

- Steering file : `claude/steering/product-page-reference.md`
- Architecture thème : `CLAUDE.md`
- Session brainstorming : 6 janvier 2026

---

*Document généré par Mary, Business Analyst — Session BMAD*
