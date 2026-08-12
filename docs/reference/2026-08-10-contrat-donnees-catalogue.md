# Contrat canonique de donnees produit et catalogue MilAura

Date : 2026-08-10
Mise a jour : 2026-08-12, alignement catalogue V1 et pipeline produit
Statut : canonique pour tout nouveau produit et tout nouveau travail catalogue
Source machine : `config/catalogue-data-contract.json`

## 1. Regle De Priorite

Ce contrat est le contrat produit complet. Il remplace les variantes de cles proposees dans les briefs anterieurs.

Il doit etre utilise sans renommage intermediaire par :

- l'inventaire
- le pipeline de generation produit
- Shopify Admin
- le theme
- Merchant Center
- Pinterest
- les collections intelligentes
- les automatisations MilAura

Avant tout batch, le JSON produit, le quality gate et le draft Shopify doivent utiliser cette version complete.

## 2. Identite Produit

| Cle | Type | Regle |
| --- | --- | --- |
| `milaura.product_type_handle` | `single_line_text_field` | obligatoire, valeur canonique verifiee contre la nature physique du produit |
| `milaura.catalogue_family` | `single_line_text_field` | obligatoire, famille canonique de navigation |
| `milaura.materials` | `list.single_line_text_field` | au moins une matiere factuelle et observable pour un nouveau produit commercialisable |
| `milaura.colors` | `list.single_line_text_field` | au moins une couleur dominante factuelle et normalisee |
| `milaura.recipient_handles` | `list.single_line_text_field` | optionnel, navigation cadeau uniquement, sans ciblage stereotype |
| `milaura.content_updated_at` | `date` | date canonique de derniere verification des donnees produit |

Ne jamais deduire une matiere, une couleur ou une finition uniquement depuis un nom commercial ambigu.

## 3. Pierres Et Symbolique

| Cle | Type | Sens canonique | Regle |
| --- | --- | --- | --- |
| `milaura.stone_handle` | `single_line_text_field` | pierre principale | obligatoire des qu'un produit contient une pierre |
| `milaura.stone_handles` | `list.single_line_text_field` | pierres secondaires ou ensemble des pierres d'un produit multi-pierres | la pierre principale reste toujours dans `stone_handle` |
| `milaura.stone_benefits` | `single_line_text_field` | associations symboliques traditionnelles | libelle public exact : `Symbolique traditionnelle` ; aucune allegation medicale ni resultat garanti |
| `milaura.provenance` | `single_line_text_field` | pays ou region d origine | uniquement si la source fournisseur le documente explicitement ; rester vide sinon |

Exemple multi-pierres :

```json
{
  "milaura.stone_handle": "amethyste",
  "milaura.stone_handles": ["amethyste", "nacre"]
}
```

Pour un produit mono-pierre, `stone_handles` peut rester vide.

## 4. Intentions

| Cle | Type | Regle |
| --- | --- | --- |
| `milaura.primary_intention` | `single_line_text_field` | intention editoriale principale normalisee, sans promesse de resultat |
| `milaura.intention_handles` | `list.single_line_text_field` | intentions secondaires verifiees, maximum 5 |
| `milaura.intention_handle` | `single_line_text_field` | cle historique de compatibilite, ne doit pas contredire `primary_intention` |
| `milaura.energy_handle` | `single_line_text_field` | optionnel ; ne jamais le rendre obligatoire pour un nouveau produit |

L'absence de `energy_handle` n'est jamais un motif de rejet. Ne pas inventer une energie pour remplir le theme.

## 5. Naissance Et Mariage

| Cle | Type | Regle |
| --- | --- | --- |
| `milaura.birth_months` | `list.single_line_text_field` | uniquement selon une convention gemmologique ou editoriale documentee |
| `milaura.wedding_anniversary_years` | `list.single_line_text_field` | uniquement selon une source editoriale documentee |
| `milaura.occasion_handles` | `list.single_line_text_field` | occasions commerciales factuelles, sans creer une collection publique |

Une correspondance editoriale ne prouve ni le stock, ni la disponibilite, ni l'existence d'une landing publique.

## 6. Disponibilite Commercialisable

### `milaura.availability_mode`

Valeurs autorisees :

- `physical-stock` : stock physiquement detenu par MilAura et disponible
- `supplier-backed` : disponibilite fournisseur recente, fiable et compatible avec les contraintes de commande
- `made-to-order` : fabrication ou preparation apres commande, hors batch tant que son SLA propre n'est pas prouve

Le gate n'est plus `stock physique uniquement`. Le gate canonique est `disponibilite commercialisable verifiee`.

Un produit passe le gate uniquement si :

- `commercializable_verified=true`
- `availability_checked_at` contient une date recente
- le mode est `physical-stock`, ou le mode est `supplier-backed` avec fiabilite et contraintes fournisseur verifiees
- la promesse logistique applicable est prouvee

Pour `physical-stock` :

- quantite physique strictement positive
- inventaire Shopify suivi avec refus de vente au-dela du stock verifie
- expedition sous 24 heures ouvrees
- reception estimee sous 5 jours ouvres

Pour `supplier-backed` :

- disponibilite fournisseur datee et confirmee
- delai fournisseur documente et inferieur ou egal a 48 heures ouvrees
- minimum de commande, franco, cout d'achat, fret entrant et marge documentes
- inventaire Shopify initialise a zero avec vente continue uniquement apres passage du gate fournisseur
- expedition client sous 48 heures ouvrees
- reception estimee sous 5 jours ouvres

`supplier-backed` ne signifie jamais que MilAura peut acheter une petite commande chez le fournisseur a chaque vente. La fiabilite commerciale doit tenir compte des contraintes reelles de regroupement et de marge.

`made-to-order` reste bloque pour le batch courant, sauf futur addendum prouvant son SLA.

## 7. Donnees De Fulfillment

Champs publics ou partageables avec le theme :

| Cle | Type | Regle |
| --- | --- | --- |
| `milaura.availability_mode` | `single_line_text_field` | mode canonique ci-dessus |
| `milaura.dispatch_sla_business_hours` | `number_integer` | `24` pour physical-stock, `48` pour supplier-backed verifie |
| `milaura.estimated_receipt_business_days` | `number_integer` | `5` pour un produit commercialisable dans le contrat actuel |

Champs operationnels prives du pipeline :

| Cle | Type | Regle |
| --- | --- | --- |
| `commercializable_verified` | boolean | doit etre `true` avant batch |
| `availability_checked_at` | date | date de verification reelle |
| `availability_evidence` | texte | preuve courte et auditable, sans secret |
| `physical_inventory_quantity` | entier ou null | obligatoire pour physical-stock |
| `supplier_reliability` | enum | `not-applicable`, `verified`, `unverified` ou `blocked` |
| `supplier_order_constraints_verified` | boolean | obligatoire et vrai pour supplier-backed |
| `supplier_lead_time_business_hours` | entier ou null | obligatoire pour supplier-backed |

Les references fournisseur, couts, marges, seuils et preuves detaillees restent prives. Ils ne doivent pas etre exposes dans le theme, les images ou les textes publics.

## 8. Promesse Logistique Validee

Formulations autorisees :

- produit en stock : `Expedition sous 24h ouvrees`
- produit sur commande : `Expedition sous 48h ouvrees`
- estimation commune : `Reception estimee sous 5 jours ouvres`

Formulation interdite :

- `Livraison sous 5 a 8 jours ouvres`

Mesurer apres les premieres commandes :

- temps entre commande et expedition
- temps entre expedition et reception
- taux de respect du SLA par `availability_mode`

Une promesse commerciale ne doit rester active que si les delais reels la confirment.

## 9. Images Produit

Tout nouveau produit porte doit avoir au minimum 6 images carrees, dont 2 images portees.

Ordre canonique :

1. couverture produit seule
2. porte rapproche pour le survol des cartes
3. macro signature
4. macro technique
5. contexte editorial produit
6. lifestyle porte en plan large

Une septieme image est possible si elle apporte une information reelle. Elle ne remplace aucun des six slots.

## 10. Sourcing P0

`aigue-marine` est la priorite P0 de sourcing.

Avant tout volume :

- identifier des produits aigue-marine reellement disponibles
- verifier pierre, traitement, origine si documentee, matieres et couleurs
- verifier cout, marge, contraintes fournisseur et promesse logistique
- conserver les candidats en prive tant que les preuves manquent

La priorite P0 n'autorise ni invention de stock, ni publication anticipee.

## 11. Champs Collection Pierre

| Cle | Type | Sens canonique | Regle |
| --- | --- | --- | --- |
| `milaura.stone_handle` | `single_line_text_field` | pierre principale de la collection | une collection pierre, un handle canonique |
| `milaura.stone_intro` | `rich_text_field` | introduction editoriale | texte factuel et propre a la pierre |
| `milaura.stone_composition` | `single_line_text_field` | composition minerale courte | uniquement apres verification d'une source exploitable |
| `milaura.stone_colors` | `list.single_line_text_field` | couleurs courantes | valeurs normalisees et observables |
| `milaura.stone_benefits` | `rich_text_field` | associations symboliques traditionnelles | libelle public exact : `Symbolique traditionnelle` |
| `milaura.comment_porter` | `rich_text_field` | conseils de port et de style | pas de promesse de resultat |
| `milaura.care` | `rich_text_field` | entretien prudent | ne pas inventer un traitement ou une resistance |
| `milaura.source_urls` | `list.url` | sources editoriales | URLs consultables et directement pertinentes |
| `milaura.content_updated_at` | `date` | derniere verification editoriale | seule date canonique pour ce contenu |
| `milaura.content_status` | `single_line_text_field` | etat editorial | `draft`, `ready` ou `approved` |
| `milaura.seo_primary_query` | `single_line_text_field` | requete principale | controle de cannibalisation, jamais garantie de classement |

## 12. Cles Rejetees

Ces cles ne doivent etre ni creees, ni proposees, ni ecrites :

- `primary_stone`
- `stone_symbolism`
- `updated_at` lorsqu'il designe la date editoriale

Un import contenant une de ces cles doit echouer avant toute mutation Shopify.

## 13. Frontiere De Mutation Du Pipeline Produit

Le catalogue V1 et ses hubs publics ont ete actives separement le 2026-08-12. La frontiere ci-dessous concerne uniquement les mutations automatiques du pipeline de generation produit :

- le pipeline ne modifie aucun hub public
- le pipeline ne cree, renomme, modifie ou active aucune collection publique
- le pipeline ne change aucune regle de collection intelligente publique
- le pipeline ne publie aucun produit automatiquement
- les produits crees par le pipeline restent en `DRAFT`
- les tests de nouveaux produits restent en preview privee

La taxonomie et l'inventaire restent la source de verite sur la nature physique du produit. Un handle historique ne suffit jamais a prouver une categorie commerciale.

## 14. Gouvernance

- Toute extension necessite une date, une definition Shopify et une mise a jour de la source machine.
- Aucun champ vide ne doit etre remplace par une information inventee.
- La preuve de disponibilite et la validation creative restent deux validations distinctes.
- Un batch est bloque tant que le schema, le quality gate, les prompts et l'import draft ne consomment pas ce contrat complet.
