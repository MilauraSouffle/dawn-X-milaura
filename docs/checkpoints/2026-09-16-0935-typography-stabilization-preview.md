# Stabilisation typographique MilAura, preview du 2026-09-16 09:35 CEST

## Decision

MilAura conserve ses trois familles canoniques : Gloock 400 pour les grands titres editoriaux, Instrument Sans 400 a 700 pour les textes et fonctions, Dancing Script 500 ou 600 pour une signature courte. Aucun remplacement par une police generique n est justifie.

Le lot corrige le conflit entre la fondation deja correcte et les anciennes surcharges chargees apres elle. Il ne modifie ni les textes, ni la structure des pages, ni les images, ni la PDP.

## Corrections implementees

- Les graisses disponibles sont maintenant tokenisees de 400 a 700. Gloock reste strictement en 400.
- Le corps global est stabilise a 16 px avec un interligne de 1,6. L ancienne reduction mobile a 14,72 px est retiree.
- Les H1, H2 et H3 generiques consomment l echelle fluide canonique et Gloock 400, sans synthese de gras ou d italique.
- Le Hero accueil utilise Dancing Script 500, conforme a la charte.
- Sur mobile, les onglets fonctionnels des parcours et occasions passent en Instrument Sans 16 px et 600. Sur desktop, Gloock reste reserve a leur affichage editorial au-dessus de 24 px.
- Le prix, le nom du produit et l index matiere du Hero editorial utilisent Instrument Sans a des tailles lisibles. Gloock n est plus utilise pour un prix ou des metadonnees sous 24 px.
- Les graisses superieures a 700 sont retirees des portes de choix, du panier et du tiroir panier.
- Le H1 du panier passe de Gloock 600 simule a Gloock 400 reel.
- Une variable d interligne inexistante dans la selection Atelier est remplacee par le token H3 reel.
- Un test Node sans dependance verrouille les plages de graisse, le corps mobile, les titres generiques et les roles fonctionnels.

## Mesures navigateur

Accueil sur le theme non publie `201359720795` :

- 360 px : corps Instrument Sans 16 px / 25,6 px ; Hero Dancing Script 40 px / 500 ; onglets Instrument Sans 16 px / 600 ; zero debordement racine.
- 390 px : corps Instrument Sans 16 px / 25,6 px ; Hero Dancing Script 42,9 px / 500 ; metadonnees editoriales 13 a 16 px ; zero debordement racine.
- 430 px : largeur document egale a la largeur viewport ; polices chargees.
- 1440 px : corps Instrument Sans 16 px ; Hero Dancing Script 73,44 px / 500 ; onglets Gloock 30,96 px / 400 ; zero debordement racine.
- Panier 390 px : H1 Gloock 24 px / 400 ; titre d etat vide Gloock 28 px / 400 ; zero debordement racine.
- Journal navigateur : aucune erreur.

## Verification

- `node --test tests/typography-contract.test.mjs` : 4 tests, 4 PASS.
- `shopify theme check` : 0 erreur, 16 avertissements historiques hors lot.
- `git diff --check` : PASS.
- Recette visuelle effectuee sur accueil et panier, mobile-first puis desktop.
- Pullback cible depuis `201359720795` : 12 fichiers sur 12 identiques a la branche.

## Limites et gates

- Le theme public `190430282075` n a pas ete modifie.
- Le theme de preview documente auparavant, `199421952347`, n existe plus dans la liste Shopify. La recette utilise `201359720795`.
- `layout/theme.liquid` continue de rendre les anciennes declarations et le preconnect Shopify Fonts. Il est volontairement laisse intact car le workstream favoris le reserve encore en attente de validation visuelle.
- `sections/milaura-product-hero.liquid` contient encore des usages typographiques a corriger, dont le titre Gloock demande en 600. Le fichier reste hors edition : aucun debut de refonte PDP avant la fin et la validation du workflow creatif mannequins.
- La section locale `milaura-choice-doors` ne figure pas dans l etat distant du theme de preview. Ses changements ont passe le test statique mais demandent une recette visuelle quand cette section sera de nouveau rendue dans une preview alignee.
- Prochaine gate : validation visuelle de Patrice sur la preview. Integration puis live restent deux decisions separees.
