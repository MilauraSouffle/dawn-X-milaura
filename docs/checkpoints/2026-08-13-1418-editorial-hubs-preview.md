# Hubs editoriaux MilAura, apercu avant GO visuel

Date : 2026-08-13 14:18 CEST

## Statut

- Branche : `codex/milaura-editorial-hubs-20260813`
- Dernier commit code : `bee8ec13`
- Theme Shopify de developpement : `199421952347`
- Theme live : `190430282075`, non modifie par ce lot
- Etat : pret pour le GO visuel de Patrice, aucune autorisation live encore donnee

## Perimetre exclusif

- `assets/milaura-catalogue-hub.css`
- `assets/milaura-catalogue-hub.js`
- `sections/milaura-catalogue-hub.liquid`
- `templates/page.milaura-cadeaux-mariage.json`
- `templates/page.milaura-pierres-naissance.json`
- `templates/page.milaura-bijoux-pierre.json`
- ce checkpoint

Aucun produit, prix, stock, metafield, menu ou contenu Shopify Admin n'a ete modifie.

## Direction visuelle livree

Le composant partage suit une direction de joaillerie editoriale d'atelier : composition asymetrique, grandes images produit reelles, fonds mineraux calmes, titres Gloock, signatures Dancing Script courtes et informations fonctionnelles en Instrument Sans.

Les trois pages gardent une identite propre :

- Mariage : nacre chaud, fil dore et accent amethyste.
- Pierres de naissance : univers amethyste et parcours par mois.
- Bijoux par pierre : univers aigue-marine et destinations colorees par famille de pierre.

Le Hero, les engagements, les titres de section, les reperes, les selections produit et les destinations reposent sur un seul composant reutilisable et les tokens MilAura. Aucun hex, `font-family`, glassmorphism ou `color-mix` local n'a ete ajoute.

## Contenu et interactions

### Cadeaux d'anniversaire de mariage

- 7 reperes : 4, 17, 25, 40, 42, 48 et 50 ans.
- 25 ans ouvert par defaut.
- Lien direct depuis 48 ans vers la collection amethyste.
- 3 produits reels, avec cartes editoriales, quantite et ajout panier existants.

### Pierres de naissance

- 12 mois accessibles dans un rail horizontal.
- Fevrier ouvert par defaut avec l'amethyste.
- Mars relie a la collection aigue-marine.
- 4 produits reels.

### Bijoux par pierre

- 5 collections publiques illustrees par leurs produits reels.
- Aigue-marine mise en avant dans une carte editoriale large.
- Quartz rose, lapis-lazuli, amazonite et agate reunis dans une grille compacte sur desktop et un rail tactile sur mobile.

Les onglets sont utilisables a la souris, au clavier et au toucher. Sans JavaScript, tous les contenus restent accessibles. Avec JavaScript, un seul panneau est affiche.

## Validation technique

- `git diff --check` : OK.
- 3 templates JSON parses : OK.
- `node --check assets/milaura-catalogue-hub.js` : OK.
- `shopify theme check --fail-level error` : 0 erreur, 29 avertissements historiques dans 12 fichiers hors perimetre.
- Push Shopify strict et cible : succes.
- Pullback frais du theme de developpement : 6 fichiers sur 6 identiques bit a bit.

## Validation navigateur

Desktop, viewport 1440 x 1000 :

| Page | H1 | Main | Main imbrique | Debordement | Donnees visibles |
| --- | ---: | ---: | ---: | --- | --- |
| Mariage | 1 | 1 | 0 | non | 3 produits, 1 panneau actif |
| Naissance | 1 | 1 | 0 | non | 4 produits, 1 panneau actif |
| Bijoux par pierre | 1 | 1 | 0 | non | 5 destinations, 8 images dans le hub |

Mobile, viewport 390 x 844 :

- 1 H1 par page.
- Aucun `main` imbrique.
- Aucun debordement horizontal du document.
- 2 cartes produit par ligne.
- Rails horizontaux pour engagements, mois ou annees, et destinations pierre.
- Le changement `25 ans` vers `48 ans` affiche uniquement `Noces d'amethyste`.
- Le changement `Fevrier` vers `Mars` affiche uniquement `Aigue-marine` avec le bon lien collection.

## Collision distante observee et recuperee

Pendant la validation, une autre operation a remplace le theme de developpement entier : les deux nouveaux assets avaient disparu et les quatre autres fichiers etaient revenus a leur ancienne version. Le registre indiquait pourtant que le theme `199421952347` etait reserve a ce lot.

Action prise : aucun changement local ou Git n'a ete perdu. Les six fichiers exacts ont ete repousses, les templates ont ete repousses une seconde fois apres installation du nouveau schema, puis un nouveau pullback a confirme 6 sur 6 fichiers identiques.

Risque restant : une nouvelle publication globale sur le theme de developpement peut encore ecraser cet apercu. Les autres sessions doivent respecter la reservation du theme ou utiliser un autre theme d'aperçu.

## Liens a valider par Patrice

- `https://milaura.fr/pages/cadeaux-anniversaire-de-mariage?preview_theme_id=199421952347`
- `https://milaura.fr/pages/pierres-de-naissance?preview_theme_id=199421952347`
- `https://milaura.fr/pages/bijoux-par-pierre?preview_theme_id=199421952347`

Points visuels demandes : Hero desktop et mobile, lisibilite des signatures, rythme du guide, cartes produit, grille des quatre pierres secondaires et rail tactile mobile.

Apres GO explicite : integration par le proprietaire d'integration, push strict des six fichiers sur le live, pullback 6 sur 6 et controle des trois routes publiques.
