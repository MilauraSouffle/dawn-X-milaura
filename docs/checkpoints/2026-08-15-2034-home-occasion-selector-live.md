# Homepage cadeaux : selecteur occasion live

Date : 2026-08-15 20:34 CEST

## Resultat

Le vide blanc sous les deux photographies desktop est supprime. La section presente maintenant deux choix permanents, `Cadeau de naissance` et `Cadeau de mariage`, puis un seul contenu a la fois sous le selecteur.

## Git

- branche de lot : `codex/milaura-occasion-selector-20260815` ;
- commit fonctionnel : `20cd404c` (`feat: add homepage occasion selector`) ;
- integration : fast-forward sur `codex/milaura-integration` ;
- branche de lot et branche d'integration poussees sur `origin`.

## Deploiement Shopify

- preview validee : theme `199957807451` ;
- live publie : theme `190430282075` ;
- fichiers live pousses sans suppression :
  - `sections/milaura-home-occasions.liquid` ;
  - `assets/milaura-home-occasions.css` ;
  - `assets/milaura-home-occasions.js` ;
- sauvegarde avant live : `/private/tmp/milaura-occasion-live-backup-20260815.eFT4bv` ;
- pullback live : `/private/tmp/milaura-occasion-live-pullback-20260815.SoPFvJ` ;
- concordance du pullback : 3 fichiers sur 3 identiques.

## Verification live

- requete HTTP publique non authentifiee : les deux libelles, l'attribut racine et `milaura-home-occasions.js` sont servis ;
- desktop 1440 x 1000 : un seul panneau, image et media a 458 px, aucun vide blanc, aucun debordement horizontal ;
- bascule vers `Cadeau de mariage` : selection, focus et panneau synchronises ;
- mobile 390 x 844 : deux choix cote a cote, un seul panneau, image et media a 246 px, aucun debordement ;
- aucune erreur console contenant `occasion` ou `milaura-home-occasions` ;
- `git diff --check` et controle syntaxique JavaScript valides ;
- Theme Check : 0 erreur, 17 avertissements historiques dans 9 fichiers hors perimetre.

## Perimetre preserve

Aucun template, asset image, Hero, navigation, dock, Ruban Vivant, PDP, panier, collection ou produit n'a ete modifie dans ce lot.
