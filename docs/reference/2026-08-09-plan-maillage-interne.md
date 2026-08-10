# Plan de maillage interne MilAura

Date : 2026-08-09

## 1. Objectif

Relier chaque produit à une catégorie de type, une pierre et au maximum une intention principale, tout en gardant une hiérarchie compréhensible pour les personnes et les moteurs.

## 2. Hiérarchie de liens

| Source | Liens obligatoires | Liens optionnels | À éviter |
|---|---|---|---|
| Accueil | hub bijoux, hub pierres, hub choix | naissance, mariage lorsqu'ils sont publiés | cartes vers collection vide ou paramètre indexable |
| Hub bijoux | 5 types, hub pierres | guide matières, entretien | liens vers tags legacy |
| Collection type | hub bijoux, pierres réellement présentes, PDP | guide taille ou longueur | toutes les pierres sans stock |
| Hub pierres | 10 collections publiques | guide intentions | handles réservés |
| Collection pierre | hub pierres, types présents, 2 pierres proches, PDP | mois/année pertinent | 10 liens génériques identiques sur chaque page |
| Hub intention | hub pierres, groupes publiés | article explicatif | promesse de résultat |
| Hub naissance | 12 blocs informatifs et pierres documentées | pages mois uniquement après inventaire et seuil | enfants vides ou simplement réservés |
| Hub mariage | correspondances documentées | pages année uniquement après inventaire et seuil | confusion avec cadeau de mariage |
| Article | une collection cible principale, 2 contenus connexes | PDP exemple | grille commerciale complète copiée |
| PDP | collection type, collection pierre, guide entretien | intention principale, article spécifique | tags, recherches internes, pages faibles |

## 3. Fil d'Ariane

Modèle recommandé :

- produit : `Accueil > Bijoux > Type > Produit` ;
- collection type : `Accueil > Bijoux > Type` ;
- collection pierre : `Accueil > Bijoux par pierre > Pierre` ;
- naissance : `Accueil > Pierres de naissance > Mois` ;
- mariage : `Accueil > Anniversaires de mariage > Année`.

Shopify ne fournit pas toujours un parent unique pour un produit appartenant à plusieurs collections. Le schema BreadcrumbList doit refléter le fil visible choisi, sans fabriquer plusieurs hiérarchies simultanées.

## 4. Blocs de liens contextuels

### 4.1 Collection type

Sous la grille :

- `Choisir par pierre` avec 4 à 6 pierres présentes dans la collection ;
- guide spécifique : taille de bracelet, longueur de collier, taille de bague ou type de fermoir ;
- `Voir tous les bijoux en pierres naturelles`.

### 4.2 Collection pierre

Après l'introduction :

- ancres vers bracelets, colliers, bagues ou pendentifs présents ;
- `Comparer avec` deux pierres ayant une différence factuelle ou esthétique ;
- un lien vers l'entretien ;
- un lien vers le mois ou l'année seulement si la correspondance est documentée.

### 4.3 Fiche produit

Près des caractéristiques :

- `Voir tous les <type>` ;
- `Voir les bijoux en <pierre>` ;
- `Comment entretenir ce bijou` ;
- une intention seulement si le metafield est renseigné et le texte prudent.

## 5. Ancres recommandées

Utiliser des ancres descriptives et variées naturellement :

- `bracelets en pierres naturelles` ;
- `bijoux en améthyste` ;
- `voir les colliers en amazonite` ;
- `comprendre les pierres de naissance` ;
- `cadeaux pour 25 ans de mariage`.

Éviter `cliquez ici`, les listes de mots-clés et les ancres identiques répétées artificiellement.

## 6. Menus et footer

Le footer est hors périmètre de mutation de cette session. Recommandation à transmettre après GO :

- navigation principale : Bijoux, Par pierre, Choisir, Nouveautés ;
- sous-menu Bijoux : cinq types ;
- sous-menu Par pierre : dix pierres publiques maximum ;
- hubs naissance et mariage dans Guides ou Idées cadeaux lorsqu'ils sont publiés ;
- aucun handle réservé dans les menus.

## 7. Articles existants

Les articles améthyste, purification, débutants et autres contenus du sitemap doivent être relus pour :

- attribuer leurs affirmations ;
- supprimer les promesses médicales ;
- désigner une collection cible unique ;
- ajouter une date de mise à jour ;
- éviter de reprendre le H1 d'une collection.

## 8. Déploiement et contrôle

1. générer un graphe des liens avant changement ;
2. ajouter les liens sur les routes de preview ;
3. contrôler les réponses 200 et canonicals ;
4. vérifier qu'aucun lien ne pointe vers une collection non publiée ;
5. contrôler le fil visible et le BreadcrumbList ;
6. recrawler après publication ;
7. suivre pages découvertes, pages indexées et requêtes après 28 et 90 jours.

## 9. KPI

- 100 % des PDP bijoux reliées à un type public ;
- 100 % des PDP avec pierre renseignée reliées à une collection publique ou au hub ;
- zéro lien interne vers une collection vide ou non publiée ;
- zéro URL tag legacy dans les liens internes ;
- profondeur maximale visée : 3 clics depuis l'accueil pour une collection, 4 pour une PDP ;
- baisse du nombre de pages orphelines mesurée par crawl.
