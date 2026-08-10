# Metafields Milaura - Référence Rapide

Mise à jour canonique : 2026-08-10

Le contrat prioritaire est `docs/reference/2026-08-10-contrat-donnees-catalogue.md`. `milaura.stone_handle` contient la pierre principale. `milaura.stone_handles` contient les pierres secondaires ou l'ensemble des pierres d'un produit multi-pierres. `milaura.stone_benefits` conserve la clé technique existante et le libellé public `Symbolique traditionnelle`.

## Création dans Shopify Admin

**Chemin** : Paramètres → Données personnalisées → Produits → Ajouter une définition

---

## Liste Complète des Metafields

### Metafields TEXTE

| Nom affiché | Namespace et clé | Type | Obligatoire |
|-------------|------------------|------|-------------|
| Nom de la pierre | `milaura.stone_name` | Texte sur une ligne | Recommandé |
| Description pierre | `milaura.stone_description` | Texte sur plusieurs lignes | Optionnel |
| Symbolique traditionnelle | `milaura.stone_benefits` | Texte sur une ligne | Recommandé |
| Histoire du produit | `milaura.story_text` | Texte sur plusieurs lignes | Optionnel |
| Baseline/Accroche | `milaura.baseline` | Texte sur une ligne | Optionnel |
| Nom de la senteur | `milaura.scent_name` | Texte sur une ligne | Bougies only |
| Description senteur | `milaura.scent_description` | Texte sur plusieurs lignes | Bougies only |

### Metafields JSON

| Nom affiché | Namespace et clé | Type | Obligatoire |
|-------------|------------------|------|-------------|
| Notes olfactives | `milaura.scent_notes` | JSON | Bougies only |
| Étapes du rituel | `milaura.ritual_steps` | JSON | Optionnel |
| FAQ personnalisée | `milaura.faq` | JSON | Optionnel |

### Metafields RÉFÉRENCE

| Nom affiché | Namespace et clé | Type | Obligatoire |
|-------------|------------------|------|-------------|
| Image macro pierre | `milaura.stone_image` | Fichier | Optionnel |
| Produits crosssell | `milaura.crosssell_products` | Liste de produits | Recommandé |

---

## Templates JSON - Copier/Coller

### Notes Olfactives (Bougies)

```json
{
  "top": ["Bergamote", "Néroli"],
  "heart": ["Fleur d'oranger", "Jasmin"],
  "base": ["Bois de santal", "Musc blanc"]
}
```

### Étapes Rituels (4 max)

```json
[
  {"icon": "🌅", "text": "Choisis un moment calme"},
  {"icon": "💭", "text": "Pose une intention claire"},
  {"icon": "🕯️", "text": "Allume la bougie"},
  {"icon": "✨", "text": "Respire et laisse l'énergie t'envelopper"}
]
```

### FAQ (8 max)

```json
[
  {"question": "La pierre est-elle naturelle ?", "answer": "Oui, 100% naturelle."},
  {"question": "Comment l'entretenir ?", "answer": "Nettoie avec un chiffon doux."}
]
```

---

## Exemples de Valeurs par Type de Produit

### BIJOU (Bracelet Améthyste)

| Metafield | Valeur |
|-----------|--------|
| `stone_name` | Améthyste |
| `stone_benefits` | `Sérénité`, `Clarté`, `Introspection`, présentées comme associations traditionnelles |
| `stone_description` | Pierre de sérénité par excellence, l'améthyste apaise les pensées agitées et favorise un sommeil réparateur. |
| `story_text` | Ce bracelet est né d'une envie simple : offrir un compagnon quotidien qui rappelle l'importance de prendre soin de soi. |
| `baseline` | Reconnecte-toi à ta sérénité intérieure |

### BOUGIE (Bougie Sérénité)

| Metafield | Valeur |
|-----------|--------|
| `stone_name` | Améthyste |
| `stone_benefits` | `Sérénité`, `Clarté`, `Introspection`, présentées comme associations traditionnelles |
| `scent_name` | Néroli & Fleur d'oranger |
| `scent_description` | Une senteur florale délicate qui transporte instantanément vers un état de calme profond. |
| `scent_notes` | `{"top":["Néroli","Bergamote"],"heart":["Fleur d'oranger","Jasmin"],"base":["Musc blanc","Bois de cèdre"]}` |
| `story_text` | Cette bougie a été créée pour accompagner tes moments de pause. La pierre d'améthyste intégrée continue à diffuser son énergie même après que la cire ait fondu. |

### SAUGE (Bâton de Sauge Californienne)

| Metafield | Valeur |
|-----------|--------|
| `stone_name` | — (pas de pierre) |
| `story_text` | La sauge blanche de Californie est utilisée depuis des millénaires pour purifier les espaces et les énergies. Ce bâton artisanal est séché naturellement. |

---

## Validation JSON

Avant de coller du JSON dans Shopify, vérifie avec : **jsonlint.com**

Erreurs courantes :
- Guillemets manquants `"text"` pas `text`
- Virgule en trop après le dernier élément
- Caractères spéciaux non échappés (`\"` pour guillemets dans le texte)

---

## Ordre de Priorité pour la Config

1. **Minimum vital** : `stone_name` + `stone_benefits`
2. **Impact moyen** : `story_text` + `baseline`
3. **Bougies** : `scent_name` + `scent_notes`
4. **Avancé** : `ritual_steps` + `faq` + `crosssell_products`
