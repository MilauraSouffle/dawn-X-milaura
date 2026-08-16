# MilAura, Ruban de parure V2

Date : 2026-08-16

Statut : implementation et QA locale terminees, aucune preview Shopify, aucune integration, aucun live

Proprietaire du GO visuel et du GO live : Patrice Allié

## 1. Decision

Le Ruban de parure V2 remplace la bibliotheque fixe de huit produits sur les fiches produit. Il ne montre que des complements renseignes dans Shopify Search & Discovery.

Il ne transforme jamais une recommandation `related` en complement. Si aucun complement credible n existe pour le produit courant ou les produits du panier, la section reste masquee.

Cette specification remplace les sections PDP 4.1, 5.3, 5.4 et 5.5 de `2026-08-14-milaura-recommendation-atelier.md`. Les autres contextes du moteur partage restent inchanges.

## 2. Personne, contexte et travail a accomplir

- Personne : cliente qui consulte une fiche bijou MilAura sur mobile en priorite.
- Contexte : elle vient de choisir une piece, peut avoir un panier en cours et peut avoir consulte d autres bijoux avec son consentement.
- Travail : identifier rapidement une piece qui complete vraiment son choix, comprendre pourquoi elle est proposee et pouvoir l ajouter sans interrompre la fiche produit.

## 3. Regles commerciales

1. Source obligatoire : API Shopify Product Recommendations avec `intent=complementary`.
2. Source principale : produit courant.
3. Contexte transactionnel : produits deja presents au panier.
4. Historique recent : departage seulement, apres consentement de preference.
5. Exclusions : produit courant, tout produit deja au panier, produit indisponible et doublon.
6. Maximum PDP : cinq produits.
7. Minimum : un complement. Avec zero complement, aucune section de remplissage.
8. Les URL Shopify et leurs parametres de recommandation sont conserves.

## 4. Classement

Le score ne cree jamais de candidat. Il classe uniquement les complements deja valides dans Search & Discovery.

| Signal | Score |
| --- | ---: |
| complement du produit courant | 100 |
| complement d une ligne panier | 40 par ligne distincte |
| ordre renvoye par l API | 10 a 1 |
| produit recemment consulte avec consentement | 8 |

Un candidat compatible avec plusieurs sources panier remonte naturellement. Un produit recent qui n est pas un complement valide ne peut pas entrer dans le Ruban.

## 5. Raisons affichees

- produit courant : `Selectionnee pour completer cette piece.`
- panier : `Selectionnee pour completer un article de votre panier.`
- produit courant et panier : `Selectionnee pour completer cette piece et votre panier.`

Ces formulations de travail restent soumises au GO visuel et commercial de Patrice avant live.

## 6. Direction visuelle

### Plan compact

- Couleurs : fond transparent, encre prune, filets aigue-marine, progression or mat.
- Typographie : Gloock pour le titre, Instrument Sans pour produit, prix, raison et actions.
- Composition : rail pleine largeur, trois a cinq objets verticaux, produit suivant visible sur mobile.
- Signature : un filet de progression aigue-marine parcouru par un segment or synchronise avec la piece active.
- Mouvement : entree unique et breve au chargement. Aucun defilement automatique et aucune boucle.

### Regles

1. Le produit reste entier. Le detourage utilise `milaura.recommendation_cutout` quand une image validee existe.
2. Le media catalogue standard est le fallback de tous les produits.
3. Le nom, le prix, la raison et l action restent visibles. Aucun premier clic n est detourne pour selectionner une carte.
4. Le rail utilise le scroll horizontal natif et `scroll-snap`.
5. Mobile : largeur de carte `84vw`, bornee a 360 px, avec apercu suivant.
6. Les fleches mesurent 44 px, le focus est visible et les fleches clavier deplacent la piece active.
7. `prefers-reduced-motion` supprime l animation d entree et les transitions.

## 7. Matrice de preuve a saisir apres levee du gate

Toutes les references ci-dessous etaient publiques et disponibles lors du controle storefront du 2026-08-16. La saisie Search & Discovery reste une mutation Shopify distincte et n est pas effectuee dans le lot local.

| Source | Complements de preuve |
| --- | --- |
| `10557516644699`, collier obsidienne noire boho dore | `10357431206235`, boucles obsidienne noire ; `10357456601435`, bracelet obsidienne flocon de neige |
| `10637459095899`, bracelet dore en aigue-marine | `10637436584283`, boucles dorees en aigue-marine ; `10637054738779`, bague ouverte doree en aigue-marine |
| `10637436977499`, bague argent 925 et amethyste | `10637436715355`, collier argente en amethyste ; `10357448540507`, bracelet amethyste rubanee |

La matrice doit etre relue produit par produit par Patrice avant saisie. Une meme pierre ne suffit pas a prouver une parure coherente : type de piece, couleur de metal, prix, disponibilite et photographie doivent etre compatibles.

## 8. Media produit

Le contrat ajoute le metafield image `milaura.recommendation_cutout`. Il sert uniquement a une image produit detouree, fidele au SKU et validee visuellement.

Les dix correspondances d assets historiques restent temporairement en fallback pour ne pas degrader les references deja produites. Elles doivent migrer vers le metafield, puis le `case` historique pourra etre supprime dans un lot donnees cible.

## 9. Mesure

Evenements conserves et enrichis :

- `milaura:recommendation_impression` avec produit, signal et score ;
- `milaura:recommendation_click` avec position, signal et score ;
- `milaura:recommendation_add` conserve pour l ajout panier.

KPI principal : taux d ajout attache aux recommandations, cible de travail `+60 % relatif` contre la periode de reference. Cette cible ne signifie pas `+60 % de ventes totales`.

Garde-fous : conversion PDP principale, AOV, LCP, CLS, INP, taux d erreur ajout panier et abandon panier.

Le theme publie les evenements mais aucun consommateur Pixel n est confirme dans le depot. Le plan de mesure n est donc complet qu apres verification ou creation du pixel Shopify correspondant.

## 10. Gate du 2026-08-16 a 08:38 CEST

- le theme de developpement `199421952347` appartient au lot Sticky proof ;
- Ruban V2 reste strictement local ;
- aucun push vers ce theme ou un autre theme ;
- aucune integration dans le checkout principal ;
- aucun live ;
- la prochaine preview exige la liberation du theme ou l attribution d un theme prive distinct dans `docs/workstreams.md`.

## 11. Criteres avant demande de GO visuel

1. Theme Check sans nouvelle alerte.
2. Tests moteur : produit courant, panier, multi-source, historique, indisponible, doublon et vide.
3. QA reelle sur le theme attribue a 360, 390, 430, 820 et 1440 px.
4. Ajout panier, variantes, navigation produit, clavier et focus valides.
5. Aucun debordement horizontal de page.
6. Controle des medias exacts sur les trois familles de preuve.
7. Pullback cible identique au commit de preview.
8. GO visuel explicite de Patrice avant toute discussion live.
