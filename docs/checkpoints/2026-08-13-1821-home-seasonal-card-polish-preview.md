# Polish de la selection d'aout sur la homepage, apercu

Date : 2026-08-13 18:21 CEST
Derniere iteration : 2026-08-13 18:29 CEST

## Decision visuelle

Patrice refuse le petit trait turquoise court et epais ajoute en bas de la section. Le comportement attendu est le filet historique aigue-marine, fin et sur toute la largeur. Aucun nouveau separateur ne doit etre ajoute en haut de la section.

Les photographies produit sont conservees comme surface principale. Un cadre mineral fin englobe maintenant chaque carte complete : photographie, titre, prix, selecteur de quantite et ajout panier.

La premiere proposition ajoutait un fond nacre sous la photographie et utilisait encore deux controles rectangulaires. Patrice l'a refusee : elle recreait la bande blanche a supprimer et rappelait les boutons natifs de Dawn. La deuxieme proposition remplace ce panneau par une carte totalement transparente et transforme les controles en actions soulignees.

## Direction retenue

- cadre exterieur de 1 px en aigue-marine claire ;
- rayon de 20 px, fond totalement transparent et aucune ombre sur le cadre ;
- photographie non masquee, arrondis et ombre photographique d'origine restaures ;
- informations et achat integres dans le meme objet visuel ;
- selecteur de 36 px sur desktop, sans boite, fond, ombre ni rayon, ponctue par un simple filet aigue-marine ;
- CTA `Ajouter` de 36 px, sans rectangle, pose sur un filet or et colore en aigue-marine au survol ;
- cibles tactiles de 40 px sur mobile sans augmenter la masse visuelle ;
- alignement des controles en bas malgre les titres sur une ou deux lignes ;
- filet de fin de section de 1 px, aigue-marine et pleine largeur.

Le lot n'ajoute aucune valeur de couleur ou police en dur. Tous les choix utilisent les tokens MilAura existants.

## Fichiers

- `sections/milaura-selection-atelier.liquid`
- `assets/milaura-section-heading.css`

`assets/milaura-card.css` et le snippet d'achat restent inchanges : les nouveaux styles sont limites a la selection de la homepage et ne modifient pas les cartes des autres pages.

## Git

- Branche : `codex/milaura-home-seasonal-card-polish-20260813`.
- Premiere proposition : `ecde21b4` (`style: refine homepage seasonal product cards`).
- Deuxieme proposition transparente : `6234c625` (`style: remove seasonal card panels`).
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/home-seasonal-card-polish-20260813`.

## Shopify

- Theme de developpement : `Development (c105a8-mac-1)`, ID `199421952347`.
- Push strict limite aux deux fichiers du lot : reussi.
- Pullback dans un dossier frais : 2 fichiers sur 2 identiques bit a bit au commit.
- Theme live `190430282075` : non modifie par ce lot.

## Validation

- `git diff --check` : OK.
- `shopify theme check --fail-level error` : 0 erreur, 29 avertissements historiques hors lot.
- Homepage de developpement : 4 cartes, aucun debordement horizontal et aucune erreur console.
- Mesures desktop 1280 x 720 : carte 284 px de large, fond transparent, cadre 1 px, rayon 20 px, selecteur et CTA 36 px de haut.
- Styles calcules : aucun fond sur la carte, le selecteur ou le CTA ; aucun contour rectangulaire sur les deux controles ; filets inferieurs aigue-marine et or conformes.
- Filet bas : 1 px de haut, 1280 px de large sur un viewport de 1280 px.
- Interaction quantite : passage de 1 a 2 puis retour a 1 confirme ; aucun ajout panier effectue pendant le controle.
- Les styles mobiles conservent un rail tactile, une carte minimale de 254 px et des controles compacts ; le live attend le GO visuel de Patrice.

## Autorisation restante

Patrice doit verifier le rendu du theme de developpement. Aucun deploiement live ni integration dans la branche canonique ne doit avoir lieu avant son GO explicite.
