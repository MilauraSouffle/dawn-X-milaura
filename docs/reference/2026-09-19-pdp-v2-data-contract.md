# Contrat de données PDP V2 MilAura

Date : 2026-09-19
Statut : prêt pour raccord du workflow V6 et validation multi-familles, hors déploiement live
Propriétaire de la validation finale : Patrice Allié

## Décision

La PDP V2 est une page produit unique et adaptative. Sa coque de conversion reste identique pour toutes les familles. Les libellés, les données secondaires et le bloc technique s'adaptent à `milaura.catalogue_family`.

Elle consomme le metafield JSON `milaura.pdp_media_manifest` pour le routage des neuf images V6. Les textes ALT ne servent plus de marqueurs internes. Ils restent publics, propres et descriptifs.

Le contrat média est le suivant :

| Groupe | Slots | Destination PDP |
| --- | --- | --- |
| `commercial_gallery` | `H01_PRODUCT_COMPLETE` à `H05_WORN_SECOND_CONTEXT` | galerie du hero |
| `editorial_projection` | `H06_EDITORIAL_PROJECTION` | projection éditoriale hors galerie, après le bloc technique |
| `narrative_blocks` | E01, E02 et E03, dans cet ordre | détail produit, vérité technique, usage ou histoire sous le hero |

Les noms complets de slots peuvent rester propres à un profil de production. La PDP ne dépend pas des constantes Iris. Elle résout E01, E02 et E03 par leur position dans `groups.narrative_blocks`.

## Adaptation par famille

| `catalogue_family` | Titre principal | Onglets | Bloc technique |
| --- | --- | --- | --- |
| `bijou` | `Le bijou en détail` | `Le bijou` et `Les pierres` | `Fermoir, matières et finitions` |
| `pierre-mineral` | `Le minéral en détail` | `Le minéral` et `La pierre` | `Forme, dimensions et origine` |
| `bougie-senteur` | `La bougie en détail` | `La bougie` et `La senteur` | `Cire, mèche et combustion` |
| `rituel` | `Le produit en détail` | `Le produit` et `Son usage` | `Composition, dimensions et usage` |
| `soin` | `Le soin en détail` | `Le soin` et `Son usage` | `Composition et conseils d’utilisation` |
| `accessoire` | `Le produit en détail` | `Le produit`, puis `La pierre` ou `Son usage` | `Matières, dimensions et usage` |
| valeur absente ou inconnue | `Le produit en détail` | `Le produit` et `Son usage` | `Matières, dimensions et usage` |

`milaura.catalogue_family` reste la source canonique. `milaura.product_type_handle`, puis `product.type`, servent uniquement de fallback aux produits historiques sans famille.

## Compatibilité du catalogue actuel

Audit Shopify Admin en lecture seule réalisé le 2026-09-19 :

- 219 produits actifs ;
- 148 bijoux, 36 produits `pierre-mineral`, 20 produits `rituel`, 5 produits `bougie-senteur`, 5 produits `soin`, 3 accessoires et 2 produits sans famille ;
- 219 descriptions produit ;
- 219 `specifications` ;
- 219 `faq_json` ;
- 217 `materials` ;
- 200 produits avec pierre identifiée, dont 199 avec `stone_description` ;
- aucun `pdp_media_manifest` sur les produits actifs à cette date ;
- aucune donnée `gem_origin`, `gem_treatments` ou certificat sur les produits actifs ;
- 212 produits ont au moins cinq images, 150 au moins six, aucun n'en a neuf ;
- sept produits ont seulement trois ou quatre images.

La compatibilité transitoire est volontaire :

| Destination V2 sans manifeste | Image réutilisée |
| --- | --- |
| galerie H01 à H05 | cinq premières images produit, ou moins si le produit en possède moins |
| H06 | non affiché, car une image historique ne doit pas être qualifiée arbitrairement de projection éditoriale |
| E01 | image 7, sinon image 4, sinon image mise en avant |
| E02 | image 8, sinon image 5, sinon image mise en avant |
| E03 | image 9, sinon image 6, sinon image E01 |

La compatibilité média ne rend aucun produit vide. Les 219 produits actifs peuvent maintenant partager la PDP V2, y compris les 2 produits sans famille grâce au fallback par type. La qualité visuelle restera celle des médias historiques tant que chaque produit ne possède pas son manifeste V6.

Les templates `product.json` et `product.milaura-produit.json` reprennent la même structure que la vue de prévisualisation `product.milaura-pdp-v2.json`. Les 219 produits actifs utilisant déjà `milaura-produit`, aucune réaffectation produit par produit n'est nécessaire au lancement. Les nouveaux produits sans template explicite utilisent aussi la V2 via `product.json`.

## Données Shopify natives consommées

| Donnée | Type Shopify | Exigence | Affichage | Fallback |
| --- | --- | --- | --- | --- |
| `product.id` | Product ID | obligatoire | preuve sociale temporaire approuvée, recommandations | aucun |
| `product.title` | texte natif | obligatoire | H1, achat rapide, sujet e-mail, ALT de secours | aucun |
| `product.description` | HTML natif | obligatoire | premier onglet produit, replié | bloc masqué si vide |
| `product.vendor` | texte natif | optionnel | surtitre du hero si activé dans le thème | masqué |
| `product.type` | texte natif | obligatoire | fallback du moteur de recommandations | `milaura.product_type_handle` prioritaire |
| `product.handle` | handle natif | obligatoire | recommandations et attributs de suivi | aucun |
| `product.collections` | liste native | optionnel | fallback de recommandations | catalogue global |
| `product.media` | liste de médias | au moins 1 en mode historique, 9 images en V6 | galerie et blocs éditoriaux | image mise en avant selon la matrice ci-dessus |
| `product.featured_media` | média natif | obligatoire en pratique | fallback E01, E02 et E03 | placeholder visuel |
| `product.featured_image` | image native | obligatoire en pratique | barre d'achat rapide et cartes recommandées | image absente |
| `product.has_only_default_variant` | booléen natif | obligatoire | masque ou affiche le sélecteur de variante | aucun |
| `product.selected_or_first_available_variant.id` | Variant ID | obligatoire | formulaires panier | aucun |
| `product.selected_or_first_available_variant.price` | money | obligatoire | prix hero et barre d'achat | aucun |
| `product.selected_or_first_available_variant.compare_at_price` | money | optionnel | prix barré | masqué |
| `product.selected_or_first_available_variant.available` | booléen | obligatoire | disponibilité et CTA | aucun |
| `product.variants[]` | liste de variantes | obligatoire | sélecteur, prix et disponibilité dynamiques | variante sélectionnée |
| `shop.money_format` | format boutique | obligatoire | rendu des prix côté JavaScript | format Shopify |
| `shop.enabled_payment_types` | liste boutique | optionnel | moyens de paiement en bas de page | bloc masqué si vide |

## Metafields consommés par la PDP V2

| Namespace et key | Type attendu | Exigence cible | Emplacement | Fallback |
| --- | --- | --- | --- | --- |
| `milaura.pdp_media_manifest` | `json` | obligatoire pour tout produit V6, optionnel pour l'historique | routage de H01 à H06 et E01 à E03 | compatibilité par position, sans H06 |
| `milaura.catalogue_family` | `single_line_text_field` | obligatoire | choisit les libellés et contenus de famille | `product_type_handle`, puis `product.type` |
| `milaura.product_type_handle` | `single_line_text_field` | obligatoire | fallback de famille et recommandations | `product.type` normalisé |
| `milaura.stone_name` | `single_line_text_field` | obligatoire pour un produit avec pierre | hero, bandeau factuel, onglet pierres | `stone_handle` humanisé |
| `milaura.stone_handle` | `single_line_text_field` | obligatoire pour un produit avec pierre | fallback du nom et recommandations | bloc masqué |
| `milaura.materials` | `list.single_line_text_field` | obligatoire | hero, fiche technique, recommandations | ligne masquée |
| `milaura.specifications` | `json` array `{label,value}` | obligatoire | hero, tableau produit, tableau technique | tableaux réduits aux autres données |
| `milaura.stone_description` | `multi_line_text_field` | obligatoire pour un produit avec pierre | onglet pierre de la famille concernée | texte masqué |
| `milaura.stone_benefits` | `single_line_text_field` | obligatoire pour un produit avec pierre | bienfaits en lithothérapie | ligne masquée |
| `milaura.qualite` | `single_line_text_field` | obligatoire | bandeau factuel et mise en avant qualité | élément masqué |
| `milaura.primary_intention` | `single_line_text_field` | obligatoire pour un produit avec intention | bandeau factuel et recommandations | `energy_handle`, puis élément masqué |
| `milaura.energy_handle` | `single_line_text_field` | optionnel, compatibilité historique | fallback de l'intention | élément masqué |
| `milaura.vertus` | `single_line_text_field` | obligatoire pour un produit avec intention | bandeau factuel, trois valeurs maximum | valeurs masquées |
| `milaura.gem_origin` | `single_line_text_field` | optionnel, preuve fournisseur requise | origine documentée dans les blocs pierres et technique | `milaura.provenance` |
| `milaura.provenance` | `single_line_text_field` | optionnel, champ historique | fallback d'origine et bandeau factuel | élément masqué |
| `milaura.gem_treatments` | `multi_line_text_field` | optionnel, information fournisseur uniquement | tableau technique | ligne masquée |
| `milaura.certificate_file` | `file_reference` | optionnel | liens certificat dans les blocs pierres, technique et réassurance | aucune affirmation de certificat |
| `milaura.certificate_lab` | `single_line_text_field` | requis seulement si un certificat et son laboratoire sont documentés | libellé du lien certificat | libellé neutre `Voir le certificat` |
| `milaura.certificate_reference` | `single_line_text_field` | optionnel | suffixe du lien certificat | référence omise |
| `milaura.faq_json` | `json` array `{question,answer}` | obligatoire | `Services & réponses`, six questions maximum et JSON-LD | trois questions globales du template |
| `milaura.scent_handle` | `single_line_text_field` | obligatoire pour une bougie parfumée | fallback du panneau `La senteur` | panneau réduit aux autres faits |
| `milaura.scent_notes` | `json` avec `top`, `heart`, `base` | recommandé pour une bougie parfumée | notes de tête, de cœur et de fond | `scent_handle` humanisé |
| `milaura.ritual_steps` | `json` array `{text}` | recommandé pour `rituel`, `soin` et produit d'usage | panneau `Son usage`, quatre étapes maximum | panneau réduit aux autres faits |
| `milaura.intention_handle` | `single_line_text_field` | optionnel, compatibilité historique | fallback des recommandations | aucune intention |
| `milaura.is_bestseller` | `boolean` | optionnel | attribut des cartes recommandées | `false` |

## Décisions explicites sur les champs historiques

| Champ | Décision définitive pour la V2 |
| --- | --- |
| `milaura.story_text` | non affiché. Le champ historique contient parfois des répétitions ou des contradictions avec la vérité produit. Il ne doit pas bloquer la création d'un produit V6. |
| `milaura.benefits_json` | non affiché. Les bénéfices génériques actuels doublonnent les spécifications et affaiblissent la page. Il reste disponible pour d'autres modules. |
| `milaura.ritual_steps` | consommé uniquement dans le panneau d’usage des produits qui ne sont pas pilotés par un panneau pierre ou senteur. Il n'est jamais rendu par défaut sur un bijou. |

## Règles média du manifeste

Le metafield `milaura.pdp_media_manifest` doit être de type `json` et contenir :

- `schema_version` ;
- `groups.commercial_gallery` avec exactement cinq IDs H01 à H05 ;
- `groups.editorial_projection` avec exactement H06 ;
- `groups.narrative_blocks` avec exactement trois IDs, dans l'ordre E01 détail produit, E02 vérité technique, E03 usage ou histoire ;
- `slots` avec exactement neuf objets ;
- pour chaque slot : `slot_id`, `destination`, `presentation_class`, `shopify_image_id`, `shopify_position`, `url`, `alt_text`, `width_px`, `height_px`, `canonical_ratio`, `crop_profiles` et les données de preuve déjà prévues par le workflow.

Depuis le 2026-09-23, un slot peut aussi déclarer `display_renditions`. La clé de surface `pdp_gallery` peut fournir un `shopify_image_id` distinct du master. Le thème résout d'abord cette rendition pour la galerie PDP, puis retombe sur `shopify_image_id` du master. Le master reste immuable et la rendition ne compte jamais comme un master. Pour H01 V6.4, le master reste carré `1:1`; une rendition PDP `4:5` doit provenir d'une extension déterministe du fond, sans recadrer ni régénérer le produit.

La PDP résout d'abord l'image par `shopify_image_id`, puis par `shopify_position` si nécessaire. Elle ne lit jamais le slot depuis l'ALT. `alt_text` est utilisé uniquement comme texte alternatif public.

## Textes statiques du template

Restent globaux et administrables dans le template :

- libellés d'interface : disponibilité, quantité, variante, ajout au panier, description, tableaux, certificats et FAQ ;
- matrice de titres par famille et titre global `Services & réponses` ;
- note sur les variations naturelles ;
- préparation à Metz, délai d'expédition, retours, paiements et conseil 6j/7 ;
- bloc de Karine et coordonnées ;
- titres et sous-titres de recommandations ;
- trois questions de service utilisées uniquement en fallback de `faq_json`.

## Textes alimentés produit par produit

Doivent venir du produit ou de ses metafields :

- titre, description, variantes, prix et disponibilité ;
- famille catalogue, type produit, pierres, senteur, matières, dimensions et spécifications ;
- description des pierres et bienfaits en lithothérapie ;
- qualité, intention et vertus ;
- origine et traitements seulement lorsqu'ils sont documentés ;
- certificat, laboratoire et référence seulement lorsqu'ils sont rattachés au produit ;
- FAQ propre au produit ;
- ALT descriptifs des neuf images V6.

## Condition de passage au live

Le live reste bloqué jusqu'au GO explicite de Patrice sur la preview après contrôle mobile et desktop d'au moins un produit de chaque famille. Le déploiement final doit pousser les fichiers nommés de la V2 et les deux templates canoniques. Comme les produits actifs utilisent déjà `milaura-produit`, la bascule est immédiate au niveau du thème et ne nécessite pas de mutation Admin en masse. Le workflow V6 peut enrichir les produits progressivement sans dépendre d'une migration simultanée du catalogue.
