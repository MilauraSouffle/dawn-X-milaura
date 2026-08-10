# Contrat canonique de données catalogue MilAura

Date : 2026-08-10
Statut : canonique pour les nouveaux travaux catalogue
Source machine : `config/catalogue-data-contract.json`

## 1. Règle de priorité

Ce contrat remplace les variantes de clés proposées dans les briefs antérieurs. Il doit être utilisé sans renommage intermédiaire par l'inventaire, Shopify Admin, le thème, Merchant Center, Pinterest, les collections intelligentes et les automatisations MilAura.

## 2. Champs produit

| Clé | Type | Sens canonique | Règle |
|---|---|---|---|
| `milaura.stone_handle` | `single_line_text_field` | pierre principale du produit | obligatoire dès qu'un produit contient une pierre |
| `milaura.stone_handles` | `list.single_line_text_field` | pierres secondaires ou ensemble des pierres d'un produit multi-pierres | la pierre principale reste toujours renseignée dans `stone_handle` |
| `milaura.stone_benefits` | `single_line_text_field` | associations symboliques traditionnelles | libellé public exact : `Symbolique traditionnelle` ; aucune allégation médicale ni résultat garanti |

### Cas multi-pierres

Pour un produit composé d'améthyste principale et de nacre secondaire :

```json
{
  "milaura.stone_handle": "amethyste",
  "milaura.stone_handles": ["amethyste", "nacre"]
}
```

Pour un produit mono-pierre, `stone_handle` suffit. `stone_handles` peut rester vide.

## 3. Champs collection pierre

| Clé | Type | Sens canonique | Règle |
|---|---|---|---|
| `milaura.stone_handle` | `single_line_text_field` | pierre principale de la collection | une collection pierre, un handle canonique |
| `milaura.stone_intro` | `rich_text_field` | introduction éditoriale | texte factuel et propre à la pierre |
| `milaura.stone_composition` | `single_line_text_field` | composition minérale courte | uniquement après vérification d'une source exploitable |
| `milaura.stone_colors` | `list.single_line_text_field` | couleurs courantes | valeurs normalisées et observables |
| `milaura.stone_benefits` | `rich_text_field` | associations symboliques traditionnelles | libellé public exact : `Symbolique traditionnelle` |
| `milaura.comment_porter` | `rich_text_field` | conseils de port et de style | pas de promesse de résultat |
| `milaura.care` | `rich_text_field` | entretien prudent | ne pas inventer un traitement ou une résistance |
| `milaura.source_urls` | `list.url` | sources éditoriales | URLs consultables et directement pertinentes |
| `milaura.content_updated_at` | `date` | dernière vérification éditoriale | seule date canonique pour ce contenu |
| `milaura.content_status` | `single_line_text_field` | état éditorial | `draft`, `ready` ou `approved` |
| `milaura.seo_primary_query` | `single_line_text_field` | requête principale de la collection | sert au contrôle de cannibalisation, pas à garantir un classement |

## 4. Clés rejetées

Ces clés ne doivent être ni créées, ni proposées, ni écrites par un import :

- `primary_stone` ;
- `stone_symbolism` ;
- `updated_at` lorsqu'il désigne la date éditoriale d'une collection.

Un import contenant une de ces clés doit échouer en validation avant toute mutation Shopify.

## 5. Consommateurs

| Consommateur | Clés de segmentation | Usage autorisé |
|---|---|---|
| inventaire | `stone_handle`, `stone_handles` | qualification de la pierre principale et des compositions multiples |
| collections intelligentes | `stone_handle`, famille et type produit | prévisualisation privée, puis comparaison des membres avant activation |
| Merchant Center | `stone_handle`, `stone_handles`, matières et catégorie Shopify | labels personnalisés seulement si les valeurs sont présentes et vérifiées |
| Pinterest | mêmes clés que Merchant | groupes catalogue uniquement pour des destinations publiques et alimentées |
| automatisations | clés exactes de ce contrat | aucune traduction vers une autre nomenclature |
| thème Shopify | champs collection listés ci-dessus | rendu conditionnel, sans texte de remplissage |

## 6. Gouvernance

- La taxonomie et l'inventaire restent la source de vérité sur la nature physique du produit.
- Un handle technique historique ne suffit pas à prouver une catégorie commerciale.
- Toute extension du contrat nécessite une version datée, une définition Shopify et une mise à jour de la source machine.
- Aucun champ vide ne doit être remplacé par une information inventée.
