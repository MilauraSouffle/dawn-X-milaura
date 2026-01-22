# Guide de Configuration Milaura - Page Produit Premium

## Vue d'ensemble

Le thème Milaura utilise **3 templates produit** :

| Template | Usage | Quand l'utiliser |
|----------|-------|------------------|
| `product` | Dawn standard | Produits simples sans storytelling |
| `product.milaura` | Ancienne version | **OBSOLETE - Ne pas utiliser** |
| `product.premium` | **NOUVEAU** | Produits phares avec expérience immersive |

---

## 1. Assigner le Template Premium à un Produit

### Dans Shopify Admin :

1. **Produits** → Sélectionne un produit
2. Colonne droite → **Template**
3. Choisis `product.premium`
4. **Enregistrer**

### Pour tous les produits d'un coup (bulk) :

1. **Produits** → Sélectionne tous
2. **Actions groupées** → **Modifier les produits**
3. Ajoute la colonne "Template"
4. Applique `product.premium` à tous

---

## 2. Configurer le Type de Produit

Le template s'adapte automatiquement selon le **Type de produit** :

| Type (dans Shopify) | Sections affichées |
|---------------------|-------------------|
| `Bijou`, `Bracelet`, `Collier`, `Bague` | Stone, Ritual (bijou), FAQ (bijou) |
| `Bougie` | Stone, Scent, Ritual (bougie), FAQ (bougie) |
| `Sauge`, `Encens` | Ritual (sauge), FAQ (sauge) |
| `Coffret`, `Bundle` | Ritual (coffret), FAQ (coffret) |

**Important** : Renseigne le champ "Type" de chaque produit pour activer les bonnes sections.

---

## 3. Créer les Metafields dans Shopify

### Accès : Paramètres → Données personnalisées → Produits → Ajouter une définition

### 3.1 Metafields TEXTE (simples)

| Nom | Namespace.key | Type | Exemple |
|-----|--------------|------|---------|
| Nom de la pierre | `milaura.stone_name` | Texte (1 ligne) | `Améthyste` |
| Description pierre | `milaura.stone_description` | Texte (multiligne) | `Pierre de sérénité par excellence...` |
| Histoire produit | `milaura.story_text` | Texte (multiligne) | `Cette création est née d'une envie...` |
| Baseline | `milaura.baseline` | Texte (1 ligne) | `Reconnecte-toi à ton essence` |
| Nom senteur | `milaura.scent_name` | Texte (1 ligne) | `Néroli & Fleur d'oranger` |
| Description senteur | `milaura.scent_description` | Texte (multiligne) | `Une senteur florale délicate...` |

### 3.2 Metafields LISTE (valeurs séparées)

| Nom | Namespace.key | Type | Exemple |
|-----|--------------|------|---------|
| Bénéfices pierre | `milaura.stone_benefits` | Liste de texte | `Apaise le mental`, `Favorise le sommeil`, `Équilibre émotionnel` |

### 3.3 Metafields IMAGE

| Nom | Namespace.key | Type | Usage |
|-----|--------------|------|-------|
| Image pierre macro | `milaura.stone_image` | Fichier (image) | Photo macro de la pierre (optionnel, sinon image produit) |

### 3.4 Metafields JSON (avancé)

| Nom | Namespace.key | Type |
|-----|--------------|------|
| Notes olfactives | `milaura.scent_notes` | JSON |
| Étapes rituels | `milaura.ritual_steps` | JSON |
| FAQ | `milaura.faq` | JSON |
| Produits crosssell | `milaura.crosssell_products` | Liste de produits |

---

## 4. Formats JSON pour les Metafields

### 4.1 Notes Olfactives (`milaura.scent_notes`)

```json
{
  "top": ["Bergamote", "Néroli", "Citron"],
  "heart": ["Fleur d'oranger", "Jasmin", "Rose"],
  "base": ["Bois de santal", "Musc blanc", "Vanille"]
}
```

### 4.2 Étapes Rituels (`milaura.ritual_steps`)

```json
[
  {
    "icon": "🌅",
    "text": "Choisis un moment calme, le matin ou avant de dormir"
  },
  {
    "icon": "💭",
    "text": "Pose une intention claire : que souhaites-tu aujourd'hui ?"
  },
  {
    "icon": "🕯️",
    "text": "Allume la bougie et observe la flamme quelques instants"
  },
  {
    "icon": "✨",
    "text": "Ferme les yeux, respire profondément et laisse l'énergie t'envelopper"
  }
]
```

### 4.3 FAQ (`milaura.faq`)

```json
[
  {
    "question": "La pierre est-elle vraiment naturelle ?",
    "answer": "Oui, chaque pierre est naturelle et sélectionnée à la main. Les variations de couleur sont normales et garantissent l'authenticité."
  },
  {
    "question": "Comment entretenir mon bijou ?",
    "answer": "Évite le contact avec l'eau, les parfums et produits chimiques. Nettoie doucement avec un chiffon doux."
  },
  {
    "question": "Puis-je le porter tous les jours ?",
    "answer": "Absolument ! Le bijou est conçu pour t'accompagner au quotidien."
  },
  {
    "question": "Quelle est la taille du bracelet ?",
    "answer": "Nos bracelets sont ajustables. Consulte le guide des tailles pour plus de détails."
  }
]
```

---

## 5. Configurer les Hotspots (Section Pierre)

Les hotspots sont configurés dans le **Customizer Shopify** :

1. **Personnaliser** → Ouvre un produit avec template `product.premium`
2. Section **Milaura Product Stone** → Ajoute des blocs "Hotspot"
3. Pour chaque hotspot :
   - **Position X** : 0-100 (% depuis la gauche)
   - **Position Y** : 0-100 (% depuis le haut)
   - **Texte tooltip** : Description au survol

**Conseil** : Place 2-3 hotspots maximum pour ne pas surcharger l'image.

---

## 6. Configurer les Reviews

La section Reviews affiche des avis statiques configurés dans le Customizer :

1. **Personnaliser** → Section **Milaura Product Reviews**
2. Configure :
   - **Note moyenne** : ex. `4.8`
   - **Nombre d'avis** : ex. `127`
3. Ajoute des blocs "review" avec :
   - Auteur
   - Texte
   - Note (1-5)
   - Date

**Pour des avis dynamiques** : Intègre Judge.me ou Loox (modification du code requise).

---

## 7. Configurer les Produits Crosssell

Deux méthodes :

### Méthode 1 : Via Metafield (recommandé)
1. Crée le metafield `milaura.crosssell_products` (type: Liste de produits)
2. Pour chaque produit, sélectionne 2 produits complémentaires

### Méthode 2 : Automatique (fallback)
Si aucun metafield, la section affiche automatiquement 2 produits de la même collection.

---

## 8. Récapitulatif : Configuration Minimale vs Complète

### Configuration MINIMALE (5 min)

1. Assigner template `product.premium`
2. Renseigner le **Type de produit** (Bijou, Bougie, etc.)
3. Ajouter des **images produit** de qualité

→ Les sections afficheront des textes par défaut.

### Configuration COMPLÈTE (15 min/produit)

1. Tout ce qui précède +
2. Metafields texte : `stone_name`, `stone_description`, `story_text`
3. Metafield liste : `stone_benefits`
4. Si bougie : `scent_name`, `scent_description`, `scent_notes` (JSON)
5. Optionnel : `ritual_steps` (JSON), `faq` (JSON), `crosssell_products`

---

## 9. Checklist Produit Premium

```
[ ] Template = product.premium
[ ] Type de produit renseigné (Bijou/Bougie/Sauge/Coffret)
[ ] 4-6 images produit haute qualité
[ ] Image principale = macro de la pierre/bougie
[ ] stone_name renseigné
[ ] stone_benefits (3 valeurs minimum)
[ ] story_text (2-3 paragraphes émotionnels)
[ ] Si bougie : scent_notes JSON
[ ] Hotspots configurés dans Customizer (2-3)
[ ] Crosssell products sélectionnés (2 produits)
```

---

## 10. Dépannage

### "La section Pierre ne s'affiche pas"
→ Vérifie que le **Type de produit** est renseigné

### "Les hotspots ne fonctionnent pas"
→ Configure-les dans le Customizer, pas via metafields

### "La section Scent ne s'affiche pas"
→ Normal ! Elle s'affiche uniquement si Type = `Bougie`

### "Les rituels affichent le texte par défaut"
→ Ajoute le metafield `ritual_steps` au format JSON

### "Le crosssell affiche des produits random"
→ Ajoute le metafield `crosssell_products` avec 2 produits sélectionnés

---

## Besoin d'aide ?

- **Customizer** : Toutes les sections ont des paramètres éditables (titres, textes, options)
- **Metafields** : Les valeurs par défaut fonctionnent, mais le contenu personnalisé est plus impactant
- **JSON** : Utilise un validateur comme jsonlint.com avant de coller

