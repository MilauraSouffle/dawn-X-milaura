# Dossier inventaire pour l'architecture catalogue MilAura

Date : 2026-08-09
Destinataire : future session inventaire et création de produits
Nature des comptes : produits actifs et visibles dans Shopify, pas stock physique confirmé

## 1. Mission de la session inventaire

Avant de créer, fusionner ou promouvoir un produit :

1. rapprocher EAN, SKU, fournisseur, coût, quantité physique, photos et fiche Shopify ;
2. qualifier les doublons ;
3. normaliser type, pierre, variété, matière, couleur et dimensions ;
4. calculer marge et capacité de réassort ;
5. affecter les produits aux catégories cibles ;
6. identifier les trous de gamme ;
7. proposer des créations seulement après validation économique.

Ne pas conclure qu'un produit est disponible parce que l'inventaire Shopify est positif.

## 2. Baseline globale

| Indicateur | Valeur |
|---|---:|
| Actifs visibles | 261 |
| Inventaire Shopify positif | 260 |
| Inventaire Shopify nul | 1 |
| Produits sous 25 € | 194 |
| Produits de 25 à 49,99 € | 45 |
| Produits de 50 à 79,99 € | 15 |
| Produits à 80 € et plus | 7 |
| SKU présent sur au moins une variante | 223 |
| Code-barres présent sur au moins une variante | 7 |
| Type canonique renseigné | 249 |
| Pierre canonique renseignée | 195 |
| Intention renseignée | 40 |

Les tags matière sont très incomplets : 9 `argent-925`, 5 `dore`, 2 `acier-inoxydable`, 3 `nacre`, 1 `cuir` et 1 `cuir brun` ont été observés. Ils ne permettent pas encore des catégories matière fiables.

## 3. Catégories par type

| Catégorie | Actuels | Min publication | Prix actuels min / médian / max | Manques prioritaires | Matières, couleurs, destinataires, occasions | Photos | Règle et seuil | Priorité |
|---|---:|---:|---|---|---|---|---|---|
| Bracelets | 74 | 12 | 5,90 / 15,90 / 119,90 € | tailles, styles fins, fermoirs documentés, cohérence SKU | argent, acier, doré prouvés ; mixte si réel ; cadeau anniversaire | porté par taille, fermoir, perles avec échelle | `type=bracelet`, publier car seuil stock dépassé après audit qualité | P0 |
| Colliers | 12 par metafield, 14 membres publics | 8 | 14,90 / 20,90 / 44,90 € | longueurs, chaînes incluses, styles courts/longs | matières exactes ; femme/mixte selon design ; cadeau | buste, règle de longueur, fermoir | `type=collier`, réconcilier les 2 écarts avant règle | P0 |
| Boucles d'oreilles | 13 | 8 | 10,50 / 12,90 / 12,90 € | diversité prix, dormeuses/puces/créoles, matière tige | acier/argent/doré ; peau sensible seulement si preuve | paire, porté profil, fermoir macro | migrer `boucles` vers `boucles-oreilles`, 100 % qualifiées | P0 |
| Bagues | 3 bijoux confirmés, 21 valeurs techniques | 8 | 69,90 € observé sur les 3 bijoux confirmés | reclasser 18 baguettes minérales, puis tailles, ajustable ou non, largeur, matière | argent/acier/doré exact ; cadeau | main, profil, mesure interne | collection manuelle privée créée ; ne pas automatiser sur `type=bague` avant correction inventaire | P0 data |
| Pendentifs | 29 | 8 | 5,90 / 12,90 / 105,90 € | chaîne incluse ou non, bélière, dimensions, poids | matière exacte ; mixte selon modèle | porté, échelle, bélière | `type=pendentif`, comparer 29 aux 246 Admin incluant brouillons | P0 |
| Chaînes | 4 | 6 | 9,90 / 39,90 / 49,99 € | longueurs, mailles, compatibilité bélière | matière et placage exacts | porté et fermeture | garder support, ne pas pousser SEO avant 6 | P2 |

### Champs obligatoires type

- `product_type_handle` ;
- matière de la monture ;
- couleur de métal ;
- dimensions et poids ;
- taille ou longueur ;
- fermeture ;
- pierre principale et pierres secondaires ;
- chaîne incluse ou non ;
- entretien ;
- destinataire seulement s'il est utile et non stéréotypé.

## 4. Dix catégories pierre cibles

Le compte `bijoux` exclut pendules, bougies, savons, sphères et autres objets. Le seuil public est 5 bijoux et 2 types minimum, 8 bijoux préférés.

Couverture de la catégorie produit Shopify standard au 2026-08-09 après le lot témoin : 25 actifs avec une catégorie exploitable, 14 `Uncategorized`, 222 sans catégorie. Le lot de 20 bijoux est classé. La session inventaire doit généraliser seulement après contrôle de la nature réelle de chaque objet.

| Pierre | Produits totaux | Bijoux actuels | Types bijoux vus | Min | Familles manquantes | Gamme de prix recommandée | Couleurs/matières à documenter | Photos | Règle | Publication | Priorité |
|---|---:|---:|---|---:|---|---|---|---|---|---|---|
| Améthyste | 19 | 14 | bague, bracelet, collier, pendentif | 8 | boucles, gamme médiane cohérente | entrée 15-29, cœur 30-49, signature 50+ si marge | violet réel, argent/acier/doré | macro couleur, porté par type | `stone=amethyste` + famille bijoux | après réconciliation 14 vs 9 membres | P0 |
| Agate | 13 | 10 | bracelet, collier | 8 | bague, boucles, pendentif ; variété exacte | au moins 2 bandes de prix | couleur et variété d'agate | macros de chaque variété | `stone=agate` | après variété et photos | P1 |
| Quartz rose | 14 | 8 | bague, boucles, bracelet, collier | 8 | pendentif et gamme cadeau | 15-29, 30-49, 50+ si justifié | rose, transparence, matière | macro + porté | sélection manuelle privée ; future règle `stone=quartz-rose` + famille bijoux | éligible après contrôle | P1 |
| Jaspe | 12 | 9 | bague, bracelet | 8 | collier, pendentif, boucles ; variétés | au moins 2 bandes | variété, motif, rouge ou autre | série comparative | `stone=jaspe` | après séparation jaspe rouge | P1 |
| Aventurine | 13 | 8 | bague, boucles, bracelet, pendentif | 8 | collection cohérente par variété | au moins 2 bandes | générique vs verte à résoudre | macro inclusions et couleur | valeur canonique décidée après audit | bloquée par taxonomie | P0 data |
| Lapis-lazuli | 11 | 6 | bague, boucles, bracelet | 5 | collier, pendentif | entrée et cœur de gamme | bleu, pyrite, matière | macro distinction sodalite | `stone=lapis-lazuli` | possible après qualité contenu | P1 |
| Amazonite | 8 | 6 | bracelet, collier, pendentif | 5 | bague, boucles | entrée et cœur de gamme | bleu-vert, matière | macro + porté | `stone=amazonite` | possible après photos | P1 |
| Œil de tigre | 13 | 5 | bague, boucles, bracelet, pendentif | 5 | colliers ; profondeur par type | au moins 2 bandes | brun/doré naturel, matière | chatoyance sous plusieurs angles | `stone=oeil-de-tigre` | juste au seuil, préférer 8 | P1 |
| Sodalite | 9 | 5 | bague, pendentif | 5 | bracelet, collier, boucles | au moins 2 bandes | bleu veiné, matière | comparatif lapis | `stone=sodalite` | juste au seuil, ajouter diversité | P1 |
| Jade | 7 | 5 | bague, bracelet, collier | 5 | pendentif, boucles ; variété exacte | au moins 2 bandes | type de jade, couleur, traitement | macro et transparence | `stone=jade` après preuve variété | bloquée par qualification | P0 data |

La gamme de prix recommandée est un objectif de merchandising, pas une déclaration sur les coûts ou la demande. Une bande n'est remplie que si marge, qualité et réassort sont confirmés.

Contrat de saisie obligatoire : `docs/reference/2026-08-10-contrat-donnees-catalogue.md`. L'inventaire écrit `stone_handle` pour la pierre principale et `stone_handles` uniquement pour les pierres secondaires ou les produits multi-pierres. Les dix-huit baguettes actives à sortir du public sont listées dans `docs/reference/2026-08-10-baguettes-retrait-catalogue-public.md` et ne doivent pas être mutées avant le contrôle dédié.

## 5. Pierres demandées mais sous le seuil

| Pierre | Bijoux actuels | Besoin pour atteindre 5 | Types à créer ou sourcer | Statut | Priorité |
|---|---:|---:|---|---|---|
| Cornaline | 4 | 1 minimum, 3 préférés | bracelet et collier | handle réservé | P2 |
| Tourmaline | 4 | qualifier noire, puis 1 à 4 | bague, collier, boucles | ne pas promettre `tourmaline noire` sans preuve | P1 data |
| Pierre de lune | 2 | 3 minimum | bracelet, bague, boucles | réservée | P2 |
| Labradorite | 1 | 4 minimum | bracelet, collier, pendentif, bague | réservée | P2 |
| Citrine | 1 | 4 minimum | bracelet, bague, collier, pendentif | réservée | P2 |
| Aigue-marine | 2 | 3 minimum | bracelet, collier, boucles | réservée, utile pour mars | P2 |
| Péridot | 2 | 3 minimum | bague, pendentif, boucles | réservée, utile pour août | P2 |
| Jaspe rouge | 2 | 3 minimum | bracelet, bague, boucles | page publique actuellement trop mince | P1 |

## 6. Intentions

Les comptes actuels sont insuffisants et le champ ne couvre que 40 produits.

| Intention actuelle | Total | Bijoux | Min groupe public | Manques | Règle cible | Priorité |
|---|---:|---:|---:|---|---|---|
| Sommeil | 6 | 6 | 8 et 3 types | 2 à 4 bijoux, diversité | liste d'intentions contrôlée | P1 |
| Clarté | 5 | 5 | regrouper avec confiance/énergie seulement après validation | diversité | liste | P2 |
| Confiance | 4 | 4 | 8 | 4 bijoux et types | liste | P2 |
| Stress | 4 | 3 | renommer en calme, sans promesse de santé | 5 bijoux | liste | P0 wording |
| Amour | 2 | 2 | 8 | 6 bijoux | liste | P2 |
| Ancrage | 2 | 2 | 8 | 6 bijoux | liste | P2 |
| Protection | 2 | 2 | 8 | 6 bijoux | liste | P2 |
| Énergie | 1 | 1 | 8 | 7 bijoux | liste | P3 |

Les familles `douceur`, `intuition`, `créativité` et `nouveaux départs` ne disposent pas encore d'une couverture fiable. La future session peut proposer des affectations, mais une personne doit les relire produit par produit.

Champs et photos : intention primaire, intentions secondaires, justification éditoriale, type, couleur, photo portée, scène de rituel non médicale. Occasion : moment pour soi ou cadeau, pas un problème de santé.

## 7. Pierres de naissance

| Mois | Correspondance GIA principale ou multiple | Bijoux MilAura observés | Seuil landing | Manques | Priorité |
|---|---|---:|---:|---|---|
| Janvier | grenat | 0 identifié | 6 | 6 bijoux, 2 types | P3 |
| Février | améthyste | 14 | 6 | sélection, photos cadeau, contenu | P1 |
| Mars | aigue-marine, héliotrope | 2 aigue-marine | 6 | 4 bijoux | P2 |
| Avril | diamant | 0 | 6 | hors positionnement actuel | P3 |
| Mai | émeraude | 1 | 6 | 5 bijoux | P3 |
| Juin | perle, alexandrite, pierre de lune | 2 pierre de lune, nacre non équivalente | 6 | produits exacts, ne pas substituer nacre à perle | P2 |
| Juillet | rubis | 0 | 6 | hors offre | P3 |
| Août | péridot, spinelle, sardonyx | 2 péridot, 1 spinelle | 6 | 3 bijoux et diversité | P2 |
| Septembre | saphir | 0 | 6 | ne pas substituer lapis | P3 |
| Octobre | opale, tourmaline | 1 opale, 4 tourmaline non toutes noires | 6 | qualification et diversité | P2 |
| Novembre | topaze, citrine | 1 topaze, 1 citrine | 6 | 4 bijoux | P2 |
| Décembre | turquoise, tanzanite, zircon | 1 turquoise | 6 | 5 bijoux | P3 |

Règle : `birth_months` renseigné à partir d'une table versionnée et sourcée. Seule la landing février est aujourd'hui éligible en stock. Les autres restent des sections du hub.

## 8. Anniversaires de mariage

| Année | Tradition française ciblée | Signal catalogue actuel | Min | Familles manquantes | Matière/couleur | Destinataire/occasion | Photos | Priorité |
|---:|---|---|---:|---|---|---|---|---|
| 4 | cire | 5 bougies émotionnelles | 6 | 1 cadeau ou coffret cohérent | cire et composition prouvées | couple | bougie allumée, emballage | P2 |
| 17 | rose | 9 bijoux quartz rose | 6 | sélection et message cadeau | rose réel, matières | femme, homme ou couple selon modèle | porté + paquet | P2 |
| 25 | argent | 9 tags `argent-925` | 6 | vérifier chacun, tailles et types | argent 925 prouvé | cadeau anniversaire | poinçon/détail si vrai, porté | P1 |
| 40 | émeraude | 1 bijou émeraude | 6 | 5 bijoux ou interprétation clairement nommée | vert ne signifie pas émeraude | couple | macro pierre | P3 |
| 42 | nacre | 3 tags nacre | 6 | 3 bijoux | nacre exacte, entretien | cadeau | irisation, porté | P2 |
| 48 | améthyste | 14 bijoux | 6 | sélection cadeau et disponibilité | violet, matières | couple | cadeau + portés | P1 |
| 50 | or | 5 tags `dore`, pas preuve d'or massif | 6 | produits en matière exacte | distinguer or, plaqué or et doré | couple | détail matière | P0 conformité |

Règle : `wedding_anniversary_years` n'est rempli qu'après validation de la matière ou de la pierre. Pour les pages année, préférer une sélection manuelle et relue.

## 9. Photos minimales par produit

1. image principale sur fond simple ;
2. vue portée ;
3. macro de la pierre ;
4. macro de la fermeture ou monture ;
5. échelle ou dimensions ;
6. emballage réel ;
7. variante couleur si elle change réellement.

Pour Google et Pinterest, ne pas superposer faux badge, remise ou texte promotionnel sur l'image principale du flux.

## 10. Qualité des données

### Tags de compatibilité temporaire

`type:<handle>`, `pierre:<handle>`, `intention:<handle>`, `matiere:<handle>`, `occasion:<handle>`.

Ils ne sont pas la source finale. Ils servent à la migration et sont générés depuis les metafields, pas saisis librement.

### Metafields obligatoires

- type canonique ;
- pierre principale et pierres secondaires ;
- variété exacte ;
- matière et finition ;
- couleur ;
- dimensions, poids, taille ;
- origine et traitement seulement avec preuve ;
- intentions contrôlées ;
- mois de naissance ;
- années de mariage ;
- instructions d'entretien ;
- références fournisseur, SKU, EAN et coût dans l'espace privé approprié.

## 11. Gate de publication catégorie

Une catégorie passe de réservée à publique lorsque :

- seuil produit atteint avec stock physique confirmé ;
- au moins 80 % des produits ont toutes les données obligatoires ;
- 100 % ont prix, matière, dimensions et photos minimales ;
- la règle a été comparée à une liste attendue ;
- le contenu unique est validé ;
- la landing mobile est validée visuellement par Patrice ;
- schema, canonical, sitemap et flux sont conformes ;
- aucune affirmation non prouvée ;
- mesure et consentement sont prêts avant Ads.

## 12. Sortie attendue de la future session

- fichier de rapprochement produit par produit ;
- liste des doublons confirmés et non confirmés ;
- stock physique et marge par SKU ;
- couverture de chaque catégorie cible ;
- plan de créations P0/P1/P2/P3 ;
- liste des photos manquantes ;
- export des valeurs normalisées ;
- collections prêtes à la preview, jamais publiées sans GO.
