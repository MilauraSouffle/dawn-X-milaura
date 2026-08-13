# MilAura - Systeme CTA 2026

Date : 2026-08-06

Derniere mise a jour : 2026-08-13 18:40 CEST

Statut : direction validee, affinee par Patrice le 2026-08-13 vers une interface plus fine et moins remplie

Reference complementaire obligatoire : `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md`.

Direction d'interface obligatoire : `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`.

## 1. Decision

MilAura utilise un seul systeme de CTA avec deux niveaux visuels. Les controles utilitaires ne font pas partie de ce systeme.

### Niveau principal de conversion

Usage : action commerciale dominante d'une section ou d'un ecran.

Exemples :

- decouvrir une selection ;
- ouvrir une landing pierre ;
- imaginer un bijou avec Karine ;
- ajouter au panier ;
- poursuivre vers le paiement.

Ce niveau est reserve aux moments ou l'action doit etre immediatement identifiable : CTA principal de PDP, panier et paiement. Il n'est pas reproduit sur chaque carte produit.

Design :

- surface prune profonde `#2F222D`, utilisee par le dock et les grandes surfaces sombres ;
- prune d'action `#493246`, releve par `#52394D` et referme vers `#2F222D`, afin qu'un petit CTA se lise prune plutot que noir ;
- texte nacre `#FFFDF9` ;
- detail or `#B9975B` limite a un filet, une bordure ou une petite fleche ;
- bordure fine et geometrie contenue ;
- hauteur minimale 48 px, cible 52 px sur desktop ;
- aucun volume, gradient decoratif, double anneau ou ombre lourde ;
- hover : variation de contraste et mouvement tres leger ;
- focus visible turquoise `#6FA9A6` avec decalage de 5 px.

Le dock mobile est la reference de prune profond pour une action de conversion. `Trouver ma pierre` reste l'exception cabochon documentee. Le Hero et les selections editoriales utilisent en priorite le niveau editorial, sauf justification de conversion explicite.

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

### Niveau carte produit

Usage : selecteur de quantite et ajout panier dans une grille ou une selection.

Design :

- fond transparent ;
- informations regroupees directement sous la photographie ;
- selecteur structure par un filet aigue-marine, sans boite visible ;
- action d'ajout structuree par un filet or, sans gros rectangle ;
- libelle Instrument Sans, etats hover, focus, loading et disabled explicites ;
- cible tactile de 44 px recommandee, 40 px minimum ;
- aucune pastille prune massive.

Reference validee : `sections/milaura-selection-atelier.liquid`, decision du 2026-08-13.

## 2. Regles d'usage

1. Une section contient au maximum un CTA principal.
2. Un CTA conserve le meme libelle entre son affichage, sa destination et les evenements analytics.
3. Un CTA principal ne sert jamais a fermer une fenetre, filtrer, paginer ou ouvrir le compte.
4. Les controles utilitaires restent sobres et reconnaissables comme controles.
5. Le prune et l'or signalent une action MilAura. L'or souligne ; il n'est pas utilise comme remplissage decoratif repete.
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
5. cartes et pages collection, en reprenant d'abord le niveau carte produit valide ;
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
