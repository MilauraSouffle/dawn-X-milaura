# C1 O2-A : amendement du preflight publication

Date : 2026-08-25 10:10 CEST

Statut : `AUTORISE - ZERO MUTATION - MEMES TROIS SCOPES`

## Fait constate

O2 a recu son GO exact. Branche, worktree et tracking sont crees depuis `99fdaea`, propres et alignes `0/0`.

Le schema Admin GraphQL 2026-10 des cinq mutations a ete valide en read-only. Les cinq documents et leurs variables sont figes et haches sans selection `code`.

Le preflight combine a ensuite ete rejete avant mutation et avant ajout de scope uniquement sur la requete `publications`. La configuration canonique ne contient pas `read_publications`, alors que Shopify exige ce droit pour lire la liste des publications.

Aucun scope temporaire, produit, publication, commande ou autre mutation n a ete cree. Aucun runtime ou listener n est actif.

## Cause du conflit de gate

Le checkpoint initial exigeait simultanement :

- les trois scopes temporaires absents ;
- l unique publication Online Store identifiee.

Ces deux exigences ne peuvent pas etre satisfaites dans une seule fenetre : `publications` exige `read_publications`. Shopify documente aussi qu un scope d ecriture inclut la lecture correspondante. `write_publications`, deja reserve par O2, suffit donc apres son activation. Il ne faut pas ajouter `read_publications` separement.

References officielles :

- `https://shopify.dev/docs/api/admin-graphql/latest/queries/publications` ;
- `https://shopify.dev/docs/api/usage/access-scopes` ;
- `https://shopify.dev/docs/apps/build/authentication-authorization/manage-access-scopes`.

## Decision master

Le master canonise l ordre suivant sans elargir O2 :

1. terminer le preflight read-only sans la requete `publications` ;
2. confirmer les trois scopes temporaires absents, le handle QA absent et RNO1 a zero commande ;
3. activer exactement `write_products`, `write_publications` et `write_orders` via la configuration O2 deja reservee ;
4. confirmer ces trois scopes actifs et aucun autre scope ajoute ;
5. lire immediatement `publications` grace au droit de lecture inclus dans `write_publications` ;
6. identifier sans ambiguite l unique publication Online Store du seul dev store ;
7. si zero ou plusieurs cibles plausibles, arreter avant `productSet` et revenir au master ;
8. seulement apres cette identification, poursuivre O2-2 selon le checkpoint initial.

Autorisation exacte :

`AUTORISATION MASTER C1 O2-A - PREFLIGHT SANS PUBLICATIONS AVANT SCOPE, PUIS ACTIVATION DES TROIS SCOPES DEJA RESERVES ET IDENTIFICATION READ-ONLY DE L UNIQUE PUBLICATION ONLINE STORE AVANT TOUTE MUTATION`

## Frontieres inchangees

- aucun `read_publications` ajoute explicitement ;
- aucun quatrieme scope ;
- aucun produit, publication ou commande avant identification non ambigue ;
- aucun retry d une mutation ;
- aucun fichier theme, Mail, catalogue, stock, deploy/release, integration ou live ;
- les gates de confirmation destructive, suppression et rollback O2 restent inchangees.

Cet amendement corrige seulement l ordre du preflight. Il ne donne aucun nouveau droit fonctionnel ou de mutation.
