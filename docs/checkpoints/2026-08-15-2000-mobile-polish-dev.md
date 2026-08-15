# Checkpoint mobile polish, 2026-08-15 20:00 CEST

## Perimetre

Lot design strictement limite aux six fichiers suivants :

- `sections/milaura-dock.liquid`
- `sections/milaura-navbar.liquid`
- `assets/milaura-navigation.css`
- `assets/milaura-navigation.js`
- `assets/milaura.css`
- `sections/milaura-hero-portal.liquid`

Aucun changement sur les recommandations, la PDP, la sticky produit, le panier, le drawer, les collections, les produits ou les images sources.

## Corrections implementees

- Etat actif du dock remplace par un halo quartz rose floute, sans rectangle blanc.
- Libelle et icone `Cercle` remplaces par `Compte` dans le dock.
- Fonds des sections rendus bord a bord sur mobile et tablette, avec les marges internes conservees par les conteneurs de contenu.
- Cadrage mobile du Hero ancre en bas pour conserver la geode rouge entiere.
- En-tete du panneau mobile complete avec le logo, `MilAura` et `Bijoux & emotions`.
- Liens vedettes des sous-menus affiches en aigue-marine sur le fond prune.
- Ouverture du menu forcee en haut du panneau, y compris apres un defilement precedent.

## Validation technique

- `git diff --check` : conforme.
- `node --check assets/milaura-navigation.js` : conforme.
- `shopify theme check` : 0 erreur, 17 avertissements historiques dans 9 fichiers hors perimetre.
- Push cible vers le theme de developpement `199421952347` : 6 fichiers, sans suppression.
- Pullback depuis `199421952347` vers `/private/tmp/milaura-mobile-polish-dev-pullback-20260815.JMkBsT` : 6 fichiers sur 6 identiques bit a bit.

## Validation visuelle

- 430 px : Hero entier, dock `Compte`, Best Sellers a 430 px sur 430 px et padding externe nul.
- 390 px : dock Contact actif rose, fond transparent, halo floute, aucune largeur horizontale parasite.
- 360 px : Hero entier, geode rouge visible, largeur document egale a 360 px.
- Menu mobile : logo 48 px, slogan visible, panneau ouvert a `scrollTop = 0`, puis retour a `scrollTop = 0` apres fermeture et reouverture.
- 1440 px : Hero desktop inchange, dock masque, largeur document et sections egales a 1440 px.

## Etat de diffusion

- Theme de developpement : a jour.
- Git : commit fonctionnel `7e92776a` pousse sur `codex/milaura-mobile-polish-20260815`.
- Live `190430282075` : non touche par ce lot, en attente du GO visuel explicite de Patrice.

## Preview

`https://milaura-2.myshopify.com?preview_theme_id=199421952347`
