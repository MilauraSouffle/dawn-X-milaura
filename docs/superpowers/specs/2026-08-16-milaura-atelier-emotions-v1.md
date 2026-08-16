# MilAura - L'Atelier des emotions V1

Date : 2026-08-16

Statut : specification d'implementation privee, produit pilote non commercialisable tant que les donnees physiques restent incompletes

Proprietaires des validations : Karine pour la faisabilite atelier, Patrice Allie pour le GO visuel et commercial

Theme autorise : copie non publiee dediee `200007713115`

## 1. Decision produit

La V1 automatise un seul niveau d'offre : un bracelet adulte a message, construit a partir de composants reellement disponibles dans l'atelier. Les autres niveaux restent visibles comme services distincts, sans donner l'impression qu'ils peuvent etre commandes instantanement.

1. `Composer mon bracelet` : configurateur borne et achetable lorsque le produit pilote, les variantes, les composants et les regles sont renseignes.
2. `Etre guidee par Karine` : demande guidee, sans prix ni delai automatique.
3. `Imaginer une piece singuliere` : prise de contact qualifiee, sans promesse de faisabilite.

Little Words Project reste une reference fonctionnelle pour la progression et la lisibilite des options. Son identite, ses textes, son vocabulaire, ses visuels et sa mise en page ne sont pas reutilises. Tiffany et Van Cleef restent des references de niveau de finition uniquement, sans copie de codes proprietaires.

## 2. Verite commerciale et etat verrouille

Le configurateur est actif uniquement si toutes les conditions suivantes sont vraies :

- un produit Shopify pilote est selectionne ;
- au moins une variante achetable existe ;
- la limite de caracteres est superieure a zero ;
- au moins une palette de perles reelle et disponible est configuree ;
- au moins une finition de lettres reelle et disponible est configuree ;
- chaque option publique porte un identifiant atelier stable ;
- Karine a valide la compatibilite physique de la combinaison pilote.

Si une condition manque, la page explique sobrement que la composition en ligne est en preparation. Elle n'affiche aucun prix, delai, stock, matiere, photo ou capacite inventes. L'editeur de theme affiche en plus la liste technique des elements manquants.

## 3. Travail de la page

La page doit produire une configuration sans ambiguite pour la cliente et pour Karine :

- le modele Shopify et sa variante ;
- la taille ;
- la palette de perles ;
- la finition de lettres ;
- le mot ou message ;
- le charm optionnel ;
- la note de montage optionnelle ;
- une version de contrat et un identifiant de configuration.

Les choix visibles sont restitues dans le panier, la commande et l'administration Shopify par des line item properties. Les donnees techniques commencent par `_` afin de rester masquees au client. Le prix et la disponibilite restent controles par le produit et la variante Shopify, jamais par JavaScript ou une propriete de ligne.

## 4. Direction visuelle

### 4.1 Sujet et geste signature

Le sujet est la composition d'un bracelet, pas un univers poetique abstrait. Le geste signature est le `fil de composition` : une ligne horizontale mesuree sur laquelle les choix reels apparaissent dans l'ordre de montage.

- aucun composant factice n'est dessine pour simuler une pierre, une lettre ou un charm ;
- une image de bloc configuree dans Shopify est utilisee comme preuve visuelle ;
- sans image, un repere textuel neutre indique le choix sans pretendre representer la matiere ;
- le mot est apercu lettre par lettre sur le fil, avec une mention claire `apercu indicatif` ;
- le fil reste vide et verrouille si le contrat de donnees n'est pas complet.

### 4.2 Palette

- surface Nacre `#FBF8F3` ;
- texte Encre prune `#2F222D` ;
- Aigue-marine `#6FA9A6` pour l'etat actif et le focus ;
- Or mat `#B9975B` pour un filet ou une action soulignee ;
- Amethyste `#7A4D82` pour un accent secondaire rare.

Toutes les valeurs d'implementation viennent de `assets/milaura-tokens.css`. Aucun hex ni `font-family` n'est ecrit dans les fichiers de la feature.

### 4.3 Typographie

- Gloock : H1 et titres d'etape, 24 px minimum ;
- Instrument Sans : instructions, champs, prix, erreurs, boutons et resume ;
- Dancing Script : une courte signature `compose par vous`, une seule presence sur la page ;
- aucune capitale espacee sur un texte long.

### 4.4 Mobile 360 a 430 px

```text
┌────────────────────────────┐
│ L'ATELIER DES EMOTIONS     │
│ Composez votre bracelet    │
│ Une phrase utile           │
├────────────────────────────┤
│ 1 Choix  2 Message  3 Revue│
├────────────────────────────┤
│                            │
│  fil de composition        │
│ ── ○ ○ M O T ○ ○ ─────── │
│       apercu indicatif     │
│                            │
├────────────────────────────┤
│ ETAPE 1 SUR 3              │
│ Une question a la fois     │
│ ○ option reelle            │
│ ○ option reelle            │
│                            │
│ Retour          Continuer  │
└────────────────────────────┘
┌────────────────────────────┐
│ Resume   prix Shopify      │
│ Ajouter au panier          │
└────────────────────────────┘
```

Le resume fixe reste au-dessus du dock mobile existant. Il ne s'affiche qu'a l'etape de revue et ne masque jamais les champs. Toutes les cibles tactiles mesurent au moins 44 px.

### 4.5 Desktop 1200 a 1440 px

```text
┌──────────────────────────────────────────────────────────────────────┐
│ L'ATELIER DES EMOTIONS      Composez un bracelet a message           │
├────────────────────────────────────┬─────────────────────────────────┤
│                                    │ ETAPE 1 SUR 3                   │
│       fil de composition           │ Titre utile                     │
│ ───── ○ ○ M O T ○ ○ ───────────  │ options reelles                │
│       apercu indicatif             │ erreurs / aide                  │
│                                    │ Retour          Continuer       │
├────────────────────────────────────┼─────────────────────────────────┤
│ Les trois niveaux de service       │ Resume et prix Shopify          │
└────────────────────────────────────┴─────────────────────────────────┘
```

Le fil occupe la majorite de la scene. Les commandes restent sur fond transparent, separees par des filets fins. Il n'y a ni carte blanche, ni gros bouton rempli, ni gradient decoratif.

## 5. Auto-critique avant implementation

Premiere tentation refusee : une suite de cartes colorees avec des pastilles de pierres. Elle serait rapide mais generique, inventerait l'aspect des composants et masquerait le sujet.

Revision retenue : un atelier presque editorial, structure par le fil de composition et par des champs natifs accessibles. Les options s'appuient sur les photos reelles configurees par Karine. Le vide devient un etat volontaire et honnete, pas une illustration de remplacement.

Deuxieme tentation refusee : afficher les trois niveaux comme trois offres de meme poids. Cela diluerait le pilote et suggererait des capacites non validees.

Revision retenue : le niveau automatisable porte l'action principale. Les deux autres sont des portes de contact secondaires, avec un vocabulaire qui ne promet ni prix ni delai.

## 6. Parcours fonctionnel

### Etape 1 - Base du bracelet

- choisir la taille via une variante Shopify reelle ;
- choisir une palette disponible ;
- choisir une finition de lettres disponible ;
- conserver les composants indisponibles visibles uniquement si Karine veut expliquer leur retour, sinon les masquer.

### Etape 2 - Message et detail

- saisir le mot ou message ;
- appliquer la limite de caracteres configuree cote Liquid et cote navigateur ;
- refuser proprement les caracteres hors de l'alphabet configure ;
- choisir aucun charm ou un charm disponible ;
- ajouter une note courte sans information sensible.

### Etape 3 - Revue

- relire chaque choix en texte ;
- afficher le prix de la variante Shopify ;
- rappeler que l'apercu est indicatif ;
- demander une confirmation explicite de l'orthographe ;
- soumettre le formulaire Shopify standard vers `/cart/add`.

Sans JavaScript, les trois fieldsets restent visibles et le formulaire Shopify fonctionne. Avec JavaScript, la navigation progressive, l'apercu, la validation et le focus sont ameliores.

## 7. Contrat Shopify

### 7.1 Propriete publiques

| Propriete | Valeur |
| --- | --- |
| `Atelier - Modèle` | titre du produit pilote |
| `Atelier - Taille` | titre de variante |
| `Atelier - Palette` | libelle client de la palette |
| `Atelier - Mot` | saisie normalisee en majuscules |
| `Atelier - Lettres` | libelle client de la finition |
| `Atelier - Charm` | `Aucun` ou libelle client |
| `Atelier - Note` | note optionnelle, longueur bornee |
| `Atelier - Orthographe confirmée` | `Oui` |

### 7.2 Proprietes techniques masquees

| Propriete | Valeur |
| --- | --- |
| `_atelier_config_id` | UUID genere dans le navigateur |
| `_atelier_config_version` | `2026-08-16.v1` |
| `_atelier_palette_id` | identifiant stable du bloc palette |
| `_atelier_letter_finish_id` | identifiant stable du bloc lettres |
| `_atelier_charm_id` | identifiant stable du bloc charm ou vide |
| `_atelier_config_json` | JSON compact des identifiants et valeurs necessaires au montage |

Le JSON technique ne contient ni email, ni nom, ni telephone, ni texte d'analytics. Le message et la note existent deja dans les proprietes publiques et ne sont pas republies dans un outil de mesure.

## 8. Contrat de donnees physiques

Chaque composant doit etre inventorie avant activation :

| Champ | Obligatoire | Regle |
| --- | --- | --- |
| `component_id` | oui | identifiant stable, jamais recycle |
| `type` | oui | `palette`, `letter_finish` ou `charm` |
| `public_label` | oui | nom factuel compris par la cliente |
| `internal_label` | oui | reference de rangement atelier |
| `photo_reference` | oui | photo du composant exact |
| `physical_quantity` | oui | quantite comptee a la date d'inventaire |
| `unit` | oui | perle, lettre, charm, sachet ou lot |
| `reserved_quantity` | oui | quantite deja engagee |
| `alert_threshold` | oui | seuil de controle avant rupture |
| `diameter_mm` | selon type | mesure au pied a coulisse |
| `hole_mm` | selon type | compatibilite avec le fil |
| `weight_g` | selon type | poids unitaire ou du lot precise |
| `material_claim` | oui | seulement si prouve par fournisseur |
| `supplier_reference` | oui | reference ou facture source |
| `unit_cost_ex_tax` | oui | cout rendu atelier, methode documentee |
| `compatible_with_pilot` | oui | validation physique Karine |
| `assembly_consumption` | oui | quantite moyenne par bracelet pilote |
| `available_for_sale` | oui | decision explicite, pas deduite du stock brut |
| `counted_at` | oui | date absolue YYYY-MM-DD |
| `counted_by` | oui | Patrice ou Karine |

Le gabarit d'inventaire durable sera ajoute dans `docs/reference/` avec une ligne vide par composant et les valeurs autorisees.

## 9. Accessibilite et interaction

- fieldsets et legends natifs ;
- radios visuellement explicites, utilisables au clavier ;
- focus avec le token MilAura ;
- erreurs associees au champ et annoncees dans une live region ;
- retour de focus sur le titre d'etape apres navigation ;
- aucun choix base uniquement sur une couleur ou une photo ;
- `prefers-reduced-motion` supprime les transitions non essentielles ;
- le mot saisi n'est jamais publie en analytics ;
- les actions restent compréhensibles sans icone.

## 10. Definition de termine de la V1 technique

La V1 technique est terminee quand :

1. le theme dedie non publie est nomme et enregistre dans `docs/workstreams.md` ;
2. les nouveaux fichiers Atelier passent Theme Check et `git diff --check` ;
3. le parcours fonctionne sans JavaScript puis en mode progressif avec JavaScript ;
4. le verrouillage bloque toute commande incomplete ;
5. une configuration de test utilisant uniquement des donnees physiques validees arrive dans le panier, la commande test et l'administration ;
6. Karine peut modifier produit, limites, options, images et disponibilites dans l'editeur de theme sans code ;
7. les captures 360, 390, 430 et 1440 px sont relues ;
8. Patrice donne un GO visuel explicite ;
9. une commande test est montee physiquement par Karine sans interpretation ;
10. le GO live est donne separement.

La fin du code n'est pas la fin du produit. Sans donnees physiques et montage pilote, le resultat reste une preview privee verrouillee.
