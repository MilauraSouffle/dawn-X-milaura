# Revue éditoriale Sol du lot `La pierre`

Date : 2026-09-07
Statut : audit indépendant terminé, lecture seule, aucune mutation Shopify ou Git

## Verdict

| Périmètre | PASS | À corriger | Total |
|---|---:|---:|---:|
| Lignes `set_stone_description`, décision complète texte + taxonomie | 200 | 21 | 221 |
| Dont texte éditorial seul | 203 | 18 | 221 |
| Dont cohérence des champs pierre | 218 | 3 | 221 |
| Exclusions `taxonomy_review_required` | 7 | 0 | 7 |
| **Total des décisions** | **207** | **21** | **228** |

Les 21 lignes à corriger sont détaillées dans `flagged.csv`. Les propositions sont des recommandations de revue : aucune n'a été écrite dans Shopify.

## Contrôles exécutés sur les 221 textes

- `221/221` descriptions respectent mécaniquement les 3 à 5 phrases et 240 à 900 caractères. La plage observée est de 242 à 422 caractères, avec 3 ou 4 phrases.
- `221/221` valeurs sont distinctes à l'identique.
- Aucun texte n'ajoute de promesse médicale, d'efficacité garantie, de certification ou de qualité non sourcée.
- La symbolique est contextualisée par `En lithothérapie` ou, pour les deux compositions non identifiées, par une formulation prudente qui refuse d'attribuer une vertu à un minéral inconnu.
- Les cinq pilotes validés par Patrice sont conservés à l'identique et passent la revue : `10696094056795`, `10696093172059`, `10696086454619`, `10521073385819`, `10669625966939`.
- Les deux compositions 7 chakras sans `stone_handle`, `10694375965019` et `10694312657243`, passent comme exceptions prudentes : elles décrivent l'ensemble visible, disent que la composition exacte n'est pas détaillée et n'inventent aucun minéral.

## Motifs des 21 corrections

| Motif principal, une ligne comptée une seule fois | Lignes |
|---|---:|
| Source insuffisante pour décrire l'apparence réelle | 1 |
| Contenu de construction du bijou dans l'onglet pierre | 1 |
| Formulation artificielle ou impropre autour de `présente une palette` | 8 |
| Phrase nominale sans verbe | 4 |
| Méta-commentaire sur le nom du produit à la place d'une information pierre | 1 |
| Orthographe ou typographie du nom de pierre | 3 |
| Liste `stone_handles` incomplète pour une composition prouvée | 3 |

### Priorité 1 : source insuffisante

- `10694373769563`, grenouille en quartz rose : le texte publié reconnaît que la teinte, la transparence et les détails de la pierre réelle restent à confirmer, puis affiche malgré tout une variation générique. Ce n'est pas une description vérifiée de la pierre. Action sûre : masquer temporairement l'onglet `La pierre` ou laisser `stone_description` vide jusqu'au contrôle de l'exemplaire physique. Ne pas remplacer ce texte par une apparence supposée.

### Priorité 2 : contenu ou français à reprendre

- `10693894406491` décrit un rang de perles et l'absence de métal. Ces informations relèvent du produit, pas de la pierre.
- `10685905011035`, `10685831545179`, `10685841965403`, `10685857726811`, `10685873619291`, `10685881123163`, `10685889380699`, `10685896753499` utilisent une construction de type `palette noir brillant` ou mélangent couleur et transparence dans une liste. Le rendu est artificiel et parfois grammaticalement impropre.
- `10357452669275`, `10358876209499`, `10358581166427`, `10357430649179` commencent par une phrase nominale sans verbe.
- `10694252396891` consacre une phrase au fait que le mot `chauffée` figure dans le nom, au lieu de décrire la pierre et ses variations.

### Priorité 3 : corrections ciblées

- `10357707014491` et `10359674765659` emploient `lapis lazuli` sans trait d'union dans la phrase de lithothérapie, alors que la forme canonique de la même description est `lapis-lazuli`.
- `10669950107995` écrit `d'afrique` au lieu de `d'Afrique`.
- `10488166220123` décrit le lapis-lazuli et l'onyx, mais `stone_handles` ne contient aucune liste secondaire. Ajouter `onyx` après confirmation du contrat de données, sans réécrire le texte.
- `10670434353499` décrit l'onyx et la pierre de lave, mais `stone_handles` contient seulement `onyx`. Ajouter `pierre-de-lave` après validation du slug canonique.
- `10669294158171` décrit aussi le cristal de roche, mais `stone_handles` contient seulement `sodalite`, `aigue-marine` et `lapis-lazuli`. Ajouter `cristal-de-roche`.

## Réserve de lot non bloquante

Cent vingt descriptions se terminent par l'une de cinq phrases de variation réutilisées à l'identique. Ce procédé rend le lot plus mécanique, mais je n'ai pas classé une ligne en échec sur ce seul motif lorsque les phrases précédentes nomment correctement la pierre, décrivent un aspect précis et reprennent la symbolique sourcée. Une réécriture massive de ces fins n'est pas justifiée sans décision créative de Patrice.

## Vérification séparée des sept exclusions de taxonomie

| Produit | Décision auditée | Verdict |
|---|---|---|
| `10693911839067`, Savon à la framboise | Retirer le faux `stone_name`, aucun minéral identifiable dans la source | PASS |
| `10693910004059`, Savon à l'argan | Retirer le faux `stone_name`, inclusion rose non identifiée | PASS |
| `10693916918107`, Savon à la verveine | Retirer le faux `stone_name`, inclusion brun doré non identifiée | PASS |
| `10693915738459`, Savon à la rose | Retirer le faux `stone_name`, inclusion claire non identifiée | PASS |
| `10693913772379`, Savon au miel | Retirer le faux `stone_name`, inclusion ocre non identifiée | PASS |
| `10669859209563`, Bracelet en palo santo | Reclasser en bois, le palo santo n'est pas une pierre | PASS |
| `10678649454939`, Plaque en tilleul | Reclasser en bois, le tilleul n'est pas une pierre | PASS |

Les sept exclusions ne proposent aucun `stone_description`, ce qui est la décision éditoriale sûre.

## Sources relues

- `docs/audits/2026-09-07-active-stone-copy-rewrite-queue.csv`
- `docs/audits/2026-09-07-active-stone-copy-rewrite-manifest.json`
- `docs/audits/2026-09-07-active-stone-copy-rewrite-preflight.md`
- `docs/audits/2026-09-07-active-stone-copy-rewrite-production.md`
- `docs/audits/2026-09-07-active-stone-copy-live-release.md`
- snapshot Shopify privé `/private/tmp/milaura-shopify-audit-20260907-stone-rewrite.json`
- guide canonique `docs/reference/2026-08-12-copywriting-milaura.md`
- contrat agent, prompt et quality gate privés du pipeline datés du 2026-09-07

## Limite de preuve

Cette revue contrôle les 228 décisions, le manifeste, la file et le snapshot source. Elle n'effectue pas un nouveau pullback Shopify après l'audit et ne modifie aucune donnée distante. Le rapport de mise en ligne voisin documente son propre pullback technique ; il reste distinct de cette validation éditoriale.
