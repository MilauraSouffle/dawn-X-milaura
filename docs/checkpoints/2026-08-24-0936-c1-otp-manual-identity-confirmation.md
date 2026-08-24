# C1 Customer Accounts, confirmation humaine de la route OTP

Date : 2026-08-24 09:36 CEST

Statut : `BLOCKED - MANUAL_IDENTITY_CONFIRMATION_REQUIRED`

## Conclusion master

M2 est `CORRELATION_BLOCKED` sans incident. La session Chrome contient un unique onglet Shopify Admin du bon dev store, ouvert directement sur l identifiant prive du compte synthetique RNO1. Chrome refuse toutefois la lecture automatisee de cet onglet avant toute extraction. La cible, l email et le zero commande ne peuvent donc pas etre verifies de maniere probante par la session.

Aucune empreinte Admin n a ete calculee. L empreinte Mail et la cle M2 sont declarees expirees et ne seront ni conservees ni reutilisees. Aucune navigation, donnee brute, mutation, demande OTP, email ou fichier n a ete produit.

Le master interdit tout nouveau contournement automatise. La prochaine action minimale appartient a Patrice et ne demande aucune transmission d adresse.

## Action Patrice

Dans l onglet Shopify Admin deja ouvert sur la fiche synthetique exacte :

1. regarder l adresse email de la fiche sans la copier dans Codex ;
2. verifier qu elle correspond a la boite Gmail controlee inspectee pendant M0 ;
3. considerer une adresse `boite+suffixe@gmail.com` comme correspondant a `boite@gmail.com` ;
4. ne rien modifier et ne pas cliquer sur Enregistrer ;
5. repondre au master avec une seule des valeurs suivantes :

- `ROUTE MATCH` : meme boite Gmail, avec ou sans suffixe `+` ;
- `ROUTE MISMATCH` : autre adresse ou autre boite ;
- `ROUTE CANNOT VERIFY` : l adresse n est pas visible ou le doute subsiste.

Ne pas envoyer l adresse complete, le suffixe, l identifiant client, une capture contenant des donnees personnelles ou un OTP.

## Frontieres maintenues

- lot C1 1A gele a `ff6cc0616b9bedee2323a9c5d3a197659170f260` ;
- aucun nouvel OTP ;
- aucune creation ou modification de compte ;
- aucune sauvegarde Admin ;
- aucun email test, filtre, alias ou routage modifie ;
- aucun app dev, backend, tunnel, GraphQL, scope, commande ou `write_orders` ;
- aucun deploy, release, C1-2, integration, publication ou live.

## Suite selon la reponse

- `ROUTE MATCH` : le master borne un lot de test avec une seule demande OTP observee en direct, puis demande un GO explicite avant l envoi ;
- `ROUTE MISMATCH` : le master borne un micro-lot Admin pour modifier uniquement l adresse du compte synthetique existant, puis demande un GO explicite avant sauvegarde ;
- `ROUTE CANNOT VERIFY` : le blocage reste ouvert et aucune action Shopify n est autorisee.

Aucun de ces lots n est autorise par ce checkpoint.
