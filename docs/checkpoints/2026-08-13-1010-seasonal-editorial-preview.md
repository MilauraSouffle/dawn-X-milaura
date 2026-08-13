# Refonte editoriale de la selection saisonniere

Date : 2026-08-13 10:10 CEST
Branche : `codex/milaura-seasonal-editorial-20260813`
Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/seasonal-editorial-20260813`
Statut : pret a integrer apres GO visuel de Patrice

## Objectif valide

Patrice a demande une refonte UI de la section homepage `La selection de Karine` et de sa page de destination. Les priorites etaient les suivantes :

- supprimer le grand bandeau degrade prune ;
- construire un composant de titre reutilisable pour uniformiser les sections ;
- conserver les nouvelles cartes tres visuelles sans masquer les photos produit ;
- retirer la redondance entre `La selection de Karine` et `La selection de l'ete` ;
- prolonger le decor mer jusqu'en haut de la page de destination, derriere la navigation ;
- obtenir un rendu premium, mobile-first et plus editorial.

Le lot a ete developpe en parallele de la passe de fondation design de Claude, dans un worktree declare et sur des fichiers exclusifs. La fondation de Claude etait deja integree dans l'ancetre de cette branche avant les modifications UI.

## Fichiers du lot

- `assets/milaura-card.css` ;
- `assets/milaura-section-heading.css` ;
- `snippets/milaura-section-heading.liquid` ;
- `sections/milaura-selection-atelier.liquid` ;
- `sections/milaura-seasonal-collection.liquid` ;
- `templates/collection.selection-aout-2026.json`.

Aucun produit, stock, prix, menu, collection Shopify ou metafield n'a ete modifie.

## Changements UI

### Titre reutilisable

- nouveau composant `milaura-section-heading` avec label, titre, texte optionnel, alignement et niveau H1 ou H2 ;
- titre en Gloock, label en Instrument Sans ;
- signature graphique discrete avec ligne doree et point aigue-marine ;
- largeur, rythme vertical et tailles adaptes au mobile et au desktop ;
- aucun cartouche opaque ni degrade prune.

### Homepage

- remplacement du bandeau scinde prune par une composition editoriale centree ;
- fond lagon et texture nacree conserves de facon calme, sans masque sombre ;
- hierarchie simplifiee : `AOUT 2026`, `La selection de Karine`, puis une phrase courte ;
- cartes produits entierement photographiques ;
- nom, prix et ajout rapide places sous l'image, sur le fond de la section ;
- CTA de destination simplifie en lien souligne ;
- espace mobile superieur augmente apres controle visuel pour eviter toute collision avec la navigation fixe.

### Page de destination

- suppression du double intitulé `La selection de l'ete` ;
- un seul H1 : `La selection de Karine` ;
- Hero lagon plein cadre sous le bandeau d'engagement et derriere la navigation ;
- disparition de la bande blanche vide entre la navigation et le Hero ;
- grille produit sur fond Nacre, sans panneau informatif superpose a la photo ;
- 2 colonnes sur mobile, 3 sur tablette et 4 sur desktop ;
- bouton d'ajout rapide de 44 px minimum sur mobile.

## Commits de code

- `9af09aef` : `feat: redesign seasonal editorial surfaces` ;
- `67f55cca` : `style: clear mobile seasonal heading`.

## Deploiement de controle

Theme Shopify de developpement : `199421952347` (`Development (c105a8-mac-1)`).

Six fichiers ont ete pousses de facon ciblee sur le theme de developpement. Le correctif final d'espacement mobile a ensuite ete pousse seul sur `sections/milaura-selection-atelier.liquid`.

Lien de previsualisation :

`https://milaura-2.myshopify.com?preview_theme_id=199421952347`

Le theme live `190430282075` n'a pas ete touche par ce lot. Aucun push live n'est autorise avant le GO visuel explicite de Patrice.

## Validation technique

- `git diff --check` : reussi ;
- template JSON : valide ;
- `shopify theme check --fail-level error` : 0 erreur ;
- Theme Check global : 29 avertissements historiques dans 12 fichiers ;
- pullback frais apres le push initial : 6 fichiers sur 6 identiques bit a bit ;
- pullback frais apres le correctif mobile : `sections/milaura-selection-atelier.liquid` identique bit a bit ;
- un echec intermediaire de pull venait des preferences Shopify CLI (`RangeError: Maximum call stack size exceeded`) ; le nouveau dossier de pullback a confirme le deploiement.

## Controle visuel

Desktop homepage :

- quatre cartes visibles ;
- aucune information produit superposee a la photo ;
- aucun debordement horizontal.

Mobile homepage :

- titre degage sous la navigation fixe ;
- aucun debordement horizontal ;
- photos dominantes et informations hors image.

Desktop page de destination :

- Hero a `88 px`, directement sous le bandeau d'engagement ;
- un seul H1 ;
- aucun intitulé saisonnier redondant ;
- vingt produits, zero panneau informatif superpose ;
- aucun debordement horizontal.

Mobile page de destination :

- Hero a `102 px`, derriere la navigation mobile ;
- un seul H1 ;
- grille en deux colonnes de `175 px` dans le viewport teste ;
- ajout rapide `44 x 44 px` ;
- zero panneau informatif superpose et aucun debordement horizontal.

## Decision attendue

Patrice doit verifier dans la previsualisation :

1. la nouvelle signature de titre reutilisable ;
2. la lisibilite et le rythme de la section homepage sur mobile et desktop ;
3. le Hero de la page `La selection de Karine` sous la navigation ;
4. les cartes dont la photo reste totalement visible ;
5. la grille produit mobile en deux colonnes.

Apres GO visuel, le proprietaire d'integration pourra integrer les commits, relancer les controles, pousser uniquement les six fichiers cibles sur le live, effectuer un pullback frais et fermer le workstream.
