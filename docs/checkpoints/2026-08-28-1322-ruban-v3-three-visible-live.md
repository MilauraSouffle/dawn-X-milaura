# Ruban V3, trois produits visibles et responsive live

Date : 2026-08-28 13:22 CEST
Branche canonique : `codex/milaura-integration`
Commit canonique fonctionnel : `51353dfb02eea462fb715b52fa6bc86c99a922ca`
Branche source conservee : `codex/milaura-ruban-v3-three-visible-20260828`
Commit source : `f2eb61a815795f4602d90869419561270e0f040c`
Theme live : `dawn-X-milaura/main`, ID `190430282075`

## Decision appliquee

Patrice a demande le 2026-08-28 d afficher les trois produits du Ruban, sans modifier la composition desktop au-dela de leur mise en grille, et d utiliser un carrousel leger sur mobile si necessaire.

Le moteur de choix, les gates, les replis et le catalogue n ont pas ete modifies. Le changement porte uniquement sur la presentation des trois candidats deja ordonnes :

- trois cartes a largeur egale sur desktop ;
- rail horizontal tactile avec scroll snap et apercu de la carte suivante sous 990 px ;
- fleches accessibles et progression existantes sur mobile ;
- aucun autoplay ;
- images reelles des galeries Shopify uniquement ;
- exclusion panier conservee ;
- Ruban jamais vide tant qu un autre produit eligible existe.

## Fichiers theme modifies et publies

- `assets/milaura-recommendations.js`
- `assets/milaura-recommendations.css`

Le JavaScript rend maintenant tous les candidats limites a trois et annonce le nombre reel de produits visibles. Le CSS transforme le Ruban PDP en grille de trois colonnes egales a partir de 990 px, masque les controles inutiles sur desktop et conserve le rail tactile sur tablette et mobile.

Aucun produit, stock, prix, collection, metafield, image, template, section, reglage Shopify Admin ou autre theme n a ete modifie.

## Verification locale

- 17 tests Python sur 17 : PASS.
- Test runtime JavaScript Ruban V3 : PASS.
- `node --check assets/milaura-recommendations.js` : PASS.
- Theme Check : 0 erreur, 16 avertissements historiques dans 8 fichiers hors Ruban.
- `git diff --check` : PASS.

## Deploiement et recuperation

Le live a ete confirme avant push : `dawn-X-milaura/main`, ID `190430282075`.

Sauvegarde des deux fichiers live precedents :

`/private/tmp/milaura-ruban-v3-three-visible-live-backup-20260828-1315`

Les deux fichiers de cette sauvegarde sont identiques au pullback du lot V3 precedent.

Push borne : `--only`, `--nodelete`, `--strict`, `--allow-live`.

Pullback post-deploiement :

`/private/tmp/milaura-ruban-v3-three-visible-live-pullback-20260828-1320`

Resultat : 2 fichiers sur 2 identiques bit a bit a Git.

SHA-256 live et Git :

- JavaScript : `c3f0efb36f26432c6237407052e3c62a2d21bd8db4b7a5fd9cd70c5935eb14b1`
- CSS : `045be2bb0fad99dc662ec6c412c6bf6aaa6e4eb68807672ac075888815bb5003`

## QA publique

PDP principale : `https://milaura.fr/products/collier-aventurine-verte-boho-dore`.

Avant panier :

- trois cartes visibles et trois candidats uniques ;
- bracelet aventurine verte Halo dore, bougie Joie aventurine verte et boucles d oreilles aventurine ;
- gates exact, proche et univers conservees ;
- trois images de galerie chargees, zero video ;
- desktop 1440 px : grille, trois cartes egales de 448 px, controles masques, aucun debordement racine ;
- tablette 820 px : rail de 1 136 px, cartes de 360 px, scroll snap actif, aucun debordement racine ;
- mobile 430 px : cartes de 360 px, rail et fleches actifs, aucun debordement racine ;
- mobile 390 px : cartes de 328 px, passage a la bougie par la fleche suivante valide, trois images chargees, aucun debordement racine ;
- mobile 360 px : cartes de 302 px, 58 px laisses pour suggerer la carte suivante, aucun debordement racine.

Test panier dans la session navigateur isolee :

- panier initial vide ;
- ajout temporaire du bracelet recommande ;
- le Ruban passe immediatement de trois a deux cartes ;
- la bougie et les boucles d oreilles restent visibles ;
- annonce accessible `2 produits proposes.` ;
- retrait cible du seul bracelet par sa cle de ligne ;
- panier final revenu a zero.

Cas de repli :

- plaque Fleur de Vie : trois cartes visibles, trois gates collection, images chargees, aucun vide ;
- pendentif Oeil de Sainte Lucie : trois cartes visibles, trois gates univers, images chargees, aucun vide.

Les deux erreurs console observees sont externes au Ruban : cadre `shop.app` bloque par CSP et ressource `chrome-error` en 403. Aucun defaut JavaScript Ruban n est observe.

Captures locales :

- desktop : `.playwright-cli/page-2026-08-28T11-18-16-204Z.png`
- mobile 390 px : `.playwright-cli/page-2026-08-28T11-19-24-418Z.png`

## Etat final

PASS technique, responsive, panier, integration, live et pullback.

Le worktree source a ete retire proprement apres verification de son alignement avec origin. La branche locale et distante est conservee comme preuve a `f2eb61a8`.

Le verdict visuel et commercial final de Patrice sur le live reste distinct. Une future phase video reste hors de ce lot et doit conserver Higgsfield uniquement, la fidelite exacte du produit et les images de galerie comme solution stable de repli.
