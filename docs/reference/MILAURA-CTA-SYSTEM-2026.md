# MilAura - Systeme CTA 2026

Date : 2026-08-06

Derniere mise a jour : 2026-08-08 08:06 CEST

Statut : direction validee et cadrage des symboles verrouille par Patrice le 2026-08-08

Reference complementaire obligatoire : `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md`.

## 1. Decision

MilAura utilise un seul systeme de CTA avec deux niveaux visuels. Les controles utilitaires ne font pas partie de ce systeme.

### Niveau principal

Usage : action commerciale dominante d'une section ou d'un ecran.

Exemples :

- decouvrir une selection ;
- ouvrir une landing pierre ;
- imaginer un bijou avec Karine ;
- ajouter au panier ;
- poursuivre vers le paiement.

Design :

- surface prune profonde `#2F222D`, utilisee par le dock et les grandes surfaces sombres ;
- prune d'action `#493246`, releve par `#52394D` et referme vers `#2F222D`, afin qu'un petit CTA se lise prune plutot que noir ;
- texte nacre `#FFFDF9` ;
- cercle or `#B9975B` ;
- fleche prune dans le cercle ;
- bordure prune ;
- hauteur minimale 48 px, cible 52 px sur desktop ;
- hover : fond transparent, texte prune, translation verticale legere et fleche decalee de 3 px ;
- focus visible turquoise `#6FA9A6` avec decalage de 5 px.

Le CTA de la section Aigue-marine est la reference creative initiale. Le dock mobile est la reference de prune profond. Le hero de marque, le CTA `Trouver ma pierre` et les CTA de fin des selections produits utilisent le prune d'action avec compensation optique pour les petites surfaces.

### Niveau editorial

Usage : action de lecture, exploration ou continuation qui ne doit pas concurrencer l'action commerciale principale.

Design :

- texte prune ;
- trait ou petite fleche or ;
- aucun gros fond ;
- vocabulaire direct et stable ;
- focus visible conforme au niveau principal.

Exemples :

- lire le guide ;
- decouvrir l'histoire de la pierre ;
- voir les conseils de Karine ;
- poursuivre dans le Journal.

## 2. Regles d'usage

1. Une section contient au maximum un CTA principal.
2. Un CTA conserve le meme libelle entre son affichage, sa destination et les evenements analytics.
3. Un CTA principal ne sert jamais a fermer une fenetre, filtrer, paginer ou ouvrir le compte.
4. Les controles utilitaires restent sobres et reconnaissables comme controles.
5. Le prune et l'or signalent une action MilAura. Ils ne sont pas utilises comme decoration repetee autour du bouton.
6. Les textes de CTA commencent par un verbe et decrivent la destination reelle.
7. Le mouvement est supprime avec `prefers-reduced-motion`.
8. Le double anneau croise or et aigue-marine est reserve au Cercle MilAura et aux cadres de photographies produit importantes.
9. Les controles utilitaires utilisent des symboles lineaires simples. Une fermeture est une croix or sans double anneau.

## 3. Libelles recommandes

| Contexte | Libelle principal |
| --- | --- |
| Hero de marque | `Decouvrir les creations` |
| Selection de l'atelier | `Decouvrir toute la selection` |
| Pierre du moment | `Decouvrir l'Aigue-marine` |
| Sur mesure | `Imaginer mon bijou` |
| Landing emotion | `Trouver ma pierre` |
| Fiche produit | `Ajouter au panier` |
| Panier | `Passer au paiement` |

## 4. Migration

Ordre de migration :

1. hero de marque ;
2. CTA des selections produits homepage ;
3. Pierre du moment ;
4. Sur mesure ;
5. cartes et pages collection ;
6. fiches produit ;
7. panier ;
8. Journal, Cercle et landings.

La migration reste ciblee. Ne pas remplacer globalement toutes les classes `.button` ou `.button--primary` depuis le checkout sale. Chaque surface est verifiee sur mobile et desktop avant publication.

## 5. Mesure

Evenements a conserver ou ajouter :

- impression de la section ;
- clic CTA ;
- destination ;
- produit selectionne ;
- ajout panier ;
- passage au paiement ;
- achat.

Le KPI d'un CTA est la progression vers l'etape suivante, pas son taux de survol.
