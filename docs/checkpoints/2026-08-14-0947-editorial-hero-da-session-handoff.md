# Handoff final - Direction artistique des Heroes MilAura

Date : 2026-08-14 09:47 CEST

Statut : session fermee, travail live, depot propre avant ecriture de ce handoff.

## Resultat livre

- dix destinations live avec des Heroes editoriaux GPT Image 2 ;
- vingt WebP : dix desktop et dix mobile ;
- trois hubs : Naissance, Mariage et Bijoux par pierre ;
- sept collections : Bagues, Amethyste, Aigue-marine, Agate, Quartz rose, Lapis-lazuli et Amazonite ;
- ancienne composition a trois cadres et filet decoratif retires ;
- ancien Hero conserve en repli pour les collections non mappees ;
- aucun produit, prix, stock, menu ou statut Shopify modifie.

## Direction artistique transmise

Le produit exact domine. La scene raconte la destination par la lumiere, la matiere et la couleur. Le texte reste en HTML dans une zone de respiration. Le premium vient du cadrage et de la retenue, sans symbole generique, glassmorphism, collage CSS, grosse pilule ou surface d'or.

Le contrat complet, la cartographie des pages, les dimensions, le prompt GPT Image 2 et le prompt de reprise sont dans :

`docs/prompts/2026-08-14-hero-destination-da-reprise.md`

La source canonique de direction artistique reste :

`docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`

## Etat Shopify confirme le 2026-08-14

- theme live : `190430282075` ;
- theme de developpement : `199421952347` ;
- pullback live du lot : 23 fichiers sur 23 identiques bit a bit ;
- verification publique fraiche a 09:47 CEST : dix HTTP 200, un H1, aucun `noindex` et deux assets Hero par route ;
- Theme Check du lot : 0 erreur, 29 avertissements historiques ;
- les erreurs console observees le 2026-08-13 concernaient uniquement le cadre Shop App bloque par sa politique CSP.

## Etat Git avant le commit de fermeture

- branche : `codex/milaura-integration` ;
- base de fermeture : `f4b0674b` ;
- divergence locale/origin : `0/0` ;
- un seul worktree actif : le checkout d'integration ;
- commit de production Heroes : `0d6d5c42` ;
- integration : `a3c26aaa` ;
- miroir Shopify : `65b04a08` ;
- reconciliation non-modifiante : `75c8171d` ;
- dernier commit documentaire avant ce handoff : `f4b0674b`.

## Prochains lots design recommandes

1. Reduire le bandeau d'engagement mobile vers 56 px sans perdre les trois preuves essentielles.
2. Reprendre le Hero homepage immersif avec une image forte ou une video reelle courte, sans mannequin IA.
3. Corriger seulement les cadrages des Heroes de destination qui recevraient un retour visuel precis de Patrice.
4. Ajouter Amethyste au hub Bijoux par pierre si la destination manque encore dans le contenu.
5. Polir les cross-sells Mariage et Naissance sans les supprimer.

Chaque lot doit avoir son propre worktree, ses fichiers reserves et son GO visuel. Ne pas regrouper le bandeau homepage, le Hero homepage et les Heroes de destination dans une seule session.

## Risques et limites restants

- le bandeau d'engagement reste trop haut sur mobile selon Patrice ;
- le Hero homepage immersif reste un lot distinct ;
- GSC, GA4, Merchant Center, Pinterest et le parcours reel du point relais ne sont pas valides par cette session ;
- le consentement masque naturellement une partie du Hero lors de la premiere visite, mais il ne constitue pas un defaut du Hero ;
- toute nouvelle image doit etre controlee visuellement par Patrice avant le live.

## Reprise exacte

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md`, `docs/prompts/2026-08-14-hero-destination-da-reprise.md` et `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`. Les dix Heroes de destination, l'UI sitewide et le carrousel Nouveautes sont live. Commence en lecture seule, declare un seul lot et son worktree, puis applique la hierarchie produit, scene, texte, action. Aucun live sans GO explicite de Patrice.
