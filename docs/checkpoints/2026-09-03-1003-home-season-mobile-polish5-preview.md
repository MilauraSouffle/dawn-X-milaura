# Preview Polish 5 Home, campagne Sodalite mobile

Date : 2026-09-03 10:03 CEST
Statut : preview privee prete pour validation visuelle de Patrice

## Demande

Faire comprendre la section video Sodalite des son apparition sur mobile. Avant le lot, la video carree occupait 390 px puis le sur-titre, le titre et le CTA commencaient sous le media. Avec les interfaces fixes, le sens de la campagne n apparaissait qu apres un second scroll.

Le prochain lot sur la visibilite globale des titres, sur-titres et CTA reste exclu.

## Implementation

- un seul H1 et un seul CTA sont conserves dans le DOM
- le sur-titre et le titre utilisent un conteneur editorial unique superpose au bas du media mobile
- le CTA partage la premiere ligne de la grille avec le media et reste actionnable en bas a gauche
- le descriptif long reste dans le flux normal, directement sous la video
- le bouton `Rejouer` passe en haut a droite sur mobile pour ne pas entrer en concurrence avec le CTA
- un voile nacre fonctionnel renforce la lisibilite du texte sans ajouter de panneau ni modifier le film
- le desktop conserve son overlay et sa composition existants
- aucun texte, template, media ou JavaScript n a ete modifie

## Fichiers

- `sections/milaura-selection-atelier.liquid`
- `docs/workstreams.md`
- `docs/checkpoints/2026-09-03-1003-home-season-mobile-polish5-preview.md`

## Verification

- `git diff --check` : PASS
- `shopify theme check --path .` : 0 erreur, 16 avertissements historiques hors lot
- preview privee : theme `200259043675`
- controle visuel reel : 360 px, 390 px, 430 px et 1440 px
- overflow horizontal : 0 px aux quatre largeurs
- mobile 360 px : titre et CTA ne se chevauchent pas, espace mesure 18 px
- CTA de section : un seul, hauteur tactile 44 px
- video mobile : lecture au scroll puis fin fixe a 10,04 s, bouton `Rejouer` visible en haut a droite
- desktop : copie toujours en position absolue sur le media, hauteur media 810 px a 1440 px
- erreurs console propres au lot : aucune ; seuls des echecs reseau Shopify Analytics et Privacy Banner lies au navigateur de test ont ete observes
- pullback prive bit a bit : PASS, SHA-256 `ef33d207dec5d55f8ddd119486c556dbfa03dff327d5599219bee49067e404de`

## Deploiement

Le fichier de section a ete pousse uniquement sur le theme prive `200259043675` avec `--only`, `--nodelete` et `--strict`.

Le theme live `190430282075` n a pas ete modifie. Integration et live restent bloques jusqu aux GO explicites de Patrice.
