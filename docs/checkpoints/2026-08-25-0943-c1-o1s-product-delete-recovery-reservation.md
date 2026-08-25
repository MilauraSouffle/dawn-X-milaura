# C1 O1-SR : suppression minimale du produit test et rollback

Date : 2026-08-25 09:43 CEST

Statut : `RESERVE - RECOVERY UNIQUEMENT - AUCUN NOUVEAU GO DESTRUCTIF REQUIS`

## Situation

O1-S a passe son preflight, active temporairement `write_products`, `write_publications` et `write_orders`, puis cree un unique produit QA Obsidienne sur le seul dev store C1.

La premiere et unique tentative de `publishablePublish` a echoue a la validation GraphQL avant mutation. La selection demandait `userErrors { code field message }`, alors que le type generique `UserError` de l API Admin GraphQL 2026-10 expose seulement `field` et `message`. Zero publication et zero commande.

Patrice a ensuite confirme explicitement la suppression de l unique produit test. La premiere et unique tentative de `productDelete` a rencontre la meme erreur de validation avant mutation. Le produit test est donc encore present. Aucun autre objet n a ete touche.

La session a correctement stoppe conformement au checkpoint O1-S. App dev, backend et scopes temporaires restent actifs uniquement pour conserver la capacite de rollback.

## Decision master

Le master autorise une recovery minimale sur le meme produit deja couvert par la confirmation destructive de Patrice. Aucun nouveau GO destructif n est requis : la cible et l intention ne changent pas.

Autorisation exacte transmise a C1 :

`AUTORISATION MASTER C1 O1-SR - REQUETE PRODUCTDELETE MINIMALE CORRIGEE SUR L UNIQUE PRODUIT TEST DEJA CONFIRME, PUIS ROLLBACK INTEGRAL, AUCUNE AUTRE MUTATION`

Cette autorisation ne permet pas de retenter la publication, de creer une commande, de modifier le produit, de creer un autre produit ou de toucher un autre objet Shopify.

## Reservation

- proprietaire : C1 `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- depot prive : `Onora-studio/onora-ops` ;
- branche existante : `codex/milaura-c1-o1-seed-orders-qa-20260825` ;
- base et HEAD avant recovery : `ab21c0df5946cd8b79b782d075dd8d00e5044404` ;
- worktree existant : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-o1-seed-orders-qa-20260825` ;
- tracking : `origin/codex/milaura-c1-o1-seed-orders-qa-20260825`, aligne `0/0` ;
- seule zone suivie : `docs/milaura/shopify-admin-canonical/c1-o1-seed-orders-private-qa/**` ;
- aucun fichier theme, code RC, configuration canonique ou zone Mail modifiable.

Le product ID reste seulement dans l etat prive local ignore. Il ne peut etre affiche, documente ou commite.

## Mutation unique autorisee

La requete doit etre figee et hachee avant execution :

```graphql
mutation ProductDelete($input: ProductDeleteInput!) {
  productDelete(input: $input) {
    deletedProductId
    userErrors {
      field
      message
    }
  }
}
```

La seule variable autorisee est l ID prive de l unique produit cree par O1-S.

La documentation officielle Shopify confirme que `productDelete` exige `write_products`, retourne `deletedProductId` et `userErrors`, et que le type `UserError` expose `field` et `message` :

- `https://shopify.dev/docs/api/admin-graphql/2026-10/mutations/productDelete` ;
- `https://shopify.dev/docs/api/admin-graphql/2026-10/objects/UserError`.

## Gates

### O1SR-0 - Preflight read-only

- confirmer que le seul ID prive cible correspond toujours au produit QA O1-S par son handle et ses deux tags QA ;
- confirmer zero commande O1-S ;
- confirmer zero publication O1-S ;
- confirmer que le hash de la requete ne contient pas `code` ;
- ne restituer aucun ID brut.

Si une cible devient ambigue, arreter sans mutation.

### O1SR-1 - Suppression unique

- executer exactement une mutation `productDelete` ;
- exiger `userErrors` vide ;
- exiger que `deletedProductId` corresponde en memoire a l ID prive attendu ;
- aucune seconde tentative, meme en cas d erreur.

### O1SR-2 - Preuve d absence

- confirmer par l ID prive que le produit est absent ;
- confirmer que le handle QA est absent du dev store ;
- confirmer que son variant, son media et toute publication associee sont absents ;
- confirmer que RNO1 reste a zero commande.

### O1SR-3 - Rollback integral

- remettre la configuration app canonique et prouver `write_products`, `write_publications` et `write_orders` absents ;
- vider `backend_url` et confirmer la valeur vide apres reload ;
- remettre le flag du theme prive a `false` et le confirmer par pullback ;
- confirmer le theme `205027279193` toujours non publie ;
- purger diagnostic, consentements de test, handoffs, backend, stockage local et panier sans resurrection ;
- arreter app dev, backend et listeners ;
- supprimer les fichiers locaux temporaires et toute copie secrete ;
- conserver le conteneur stable arrete selon le cadre endpoint ;
- commiter et pousser uniquement le rapport expurge, avec worktree propre et tracking `0/0`.

## Verdict attendu

Si la suppression et le rollback passent :

`O1S-0 PASS - O1S-1 PASS - O1S-2 FAIL VALIDATION AVANT PUBLICATION - O1S-3/O1S-4 NOT RUN - O1SR DELETE PASS - ROLLBACK PASS`

RC7 et les etats commandes de RC8 restent ouverts. Le correctif de selection GraphQL pour publication et la reprise de la QA necessitent un nouveau micro-lot master separe apres audit du rapport ferme.

## Interdictions

- aucune seconde tentative de publication ;
- aucune creation de commande ou de produit ;
- aucune modification du produit test avant suppression ;
- aucun autre produit, client, compte, commande, stock, publication ou canal ;
- aucun Mail, notification, catalogue MilAura, theme, deploy, release, integration ou live ;
- aucun secret, email ou GID dans Git et les retours publics.
