# C1 O2-B : amendement du preflight produits

Date : 2026-08-25 10:12 CEST

Statut : `AUTORISE - ZERO MUTATION - MEMES TROIS SCOPES`

## Fait constate

Apres l amendement O2-A, le preflight read-only sans publications a rencontre la meme limite sur `products`. La configuration canonique ne contient pas `read_products`, requis pour lire les produits Admin.

Les controles accessibles avant scope sont PASS :

- `write_products`, `write_publications` et `write_orders` absents ;
- RNO1 exact et zero commande ;
- Mail pret ;
- schema, documents et hashes PASS, sans selection `code`.

La cloture O1-S/O1-SR a `99fdaea03889d9dcd9fc6e240f338cb0698b0863` prouve le handle QA absent. La branche O2 part exactement de ce commit et reste propre `0/0`, sans scope, mutation ou runtime depuis. Cette preuve est donc recevable avant scope.

## Cause et decision master

Shopify exige `read_products` pour lire les produits et documente que `write_products` inclut automatiquement cette lecture. Aucun `read_products` explicite ni quatrieme scope n est necessaire.

Le master canonise l ordre final du preflight :

1. avant scope, confirmer les trois write scopes absents, RNO1 exact et zero commande, Mail pret, schema et hashes PASS ;
2. accepter comme preuve heritee du handle absent la cloture `99fdaea`, puisque O2 en derive sans mutation ;
3. activer exactement `write_products`, `write_publications` et `write_orders` ;
4. confirmer ces trois scopes actifs et aucun autre scope ajoute ;
5. lire immediatement `products` et `publications` avec les droits de lecture inclus ;
6. reconfirmer le handle QA absent et identifier l unique publication Online Store ;
7. si le handle existe ou si la publication est ambigue, arreter avant `productSet` ;
8. seulement si les deux controles passent, poursuivre O2-2.

Autorisation exacte :

`AUTORISATION MASTER C1 O2-B - PREUVE HERITEE DU HANDLE ABSENT A 99FDAEA AVANT SCOPE, PUIS RECONTROLE PRODUCTS ET PUBLICATIONS APRES LES TROIS SCOPES DEJA RESERVES, AVANT TOUTE MUTATION`

References officielles :

- `https://shopify.dev/docs/api/admin-graphql/latest/queries/products` ;
- `https://shopify.dev/docs/api/admin-graphql/latest/objects/Product` ;
- `https://shopify.dev/docs/apps/build/authentication-authorization/manage-access-scopes`.

## Frontieres inchangees

- aucun `read_products` ou `read_publications` ajoute explicitement ;
- aucun quatrieme scope ;
- aucune mutation avant les deux controles post-scope ;
- aucun changement des payloads, objets, gates destructives ou rollback O2 ;
- aucun theme, Mail, catalogue, stock, deploy/release, integration ou live.

Cet amendement corrige uniquement l ordre des lectures protegees par scope.
