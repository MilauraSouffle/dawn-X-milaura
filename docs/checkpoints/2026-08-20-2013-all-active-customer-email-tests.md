# E1-E3 fermes et tests de tous les e-mails clients

Date : 2026-08-20 20:13 CEST

## Decision Patrice

Patrice considere `E1`, `E2` et `E3` termines. Le chantier principal passe a `C1-0 - Preview nouveaux comptes`.

Cette fermeture ne vaut pas validation creative des notifications transactionnelles. Leur reprise visuelle et editoriale reste le lot `E4`.

## Destination des tests

Tous les tests ont ete envoyes a l adresse de contact de la boutique, hors depot Git.

Aucune vraie commande, aucun compte client, aucun consentement, aucun remboursement, aucun retour et aucun evenement marketing reel n ont ete crees pour ces tests.

## Shopify Messaging actif

Les trois versions finales E3 avaient deja ete envoyees apres correction :

1. consultation produit abandonnee : `Ce produit vous appelait peut-être` ;
2. panier abandonne : `Votre panier MilAura vous attend` ;
3. checkout abandonne : `Votre commande MilAura vous attend`.

Les trois parents et leurs activites avaient ete relus `Actif`. `BIENVENUE10`, l ancien checkout, l archive urgence et le post-achat Messaging restent inactifs ou supprimes.

## Notifications transactionnelles testees

Shopify expose 45 modeles clients declenchables. Un envoi test a ete soumis depuis chaque apercu Admin :

### Commandes, livraison et retrait

1. Confirmation de commande ;
2. Facture de commande provisoire ;
3. Confirmation d expedition ;
4. Prete pour le retrait en magasin ;
5. Retiree par le client ;
6. Commande en cours de livraison locale ;
7. Commande livree localement ;
8. Livraison locale manquee.

### Cartes, credit et exceptions

9. Nouvelle carte-cadeau ;
10. Recu de carte-cadeau ;
11. Credit en magasin emis ;
12. Facture de la commande ;
13. Commande modifiee ;
14. Commande annulee ;
15. Recu de paiement de la commande ;
16. Remboursement de commande ;
17. Lien de la commande.

### Paiements et POS

18. Erreur de paiement ;
19. Erreur de paiement en attente ;
20. Paiement en attente reussi ;
21. Rappel de paiement ;
22. Paiement abandonne POS ;
23. E-mail POS au client ;
24. Recu POS et mobile ;
25. Recu d echange POS ;
26. Recu de retour.

### Expedition, retours et annulations

27. Mise a jour du statut de l expedition ;
28. En cours de livraison ;
29. Livree ;
30. Retour cree ;
31. Etiquette de retour de commande creee ;
32. Demande de retour approuvee ;
33. Demande de retour refusee ;
34. Demande recue ;
35. Demande d annulation refusee.

### Comptes, paiement client et B2B

36. Invitation a creer un compte client ;
37. Bienvenue au compte client ;
38. Reinitialisation du mot de passe du compte client ;
39. Requete d ajout de moyen de paiement d un client ;
40. Demande de mise a jour du moyen de paiement du client ;
41. Demande de restauration du moyen de paiement du client ;
42. E-mail d acces B2B ;
43. Mise a jour du moyen de paiement de l emplacement B2B ;
44. Contacter le client ;
45. Confirmation de changement d adresse e-mail du client.

Le controle intermediaire et final n a montre aucune erreur Shopify et les fenetres d envoi se sont fermees apres soumission. Le lot 27 a 31 a ete renvoye apres une reinitialisation de la connexion de controle ; ces cinq objets peuvent donc apparaitre deux fois dans la boite.

## E-mails actifs sans test manuel

Trois rappels Shop sont coches actifs mais ne proposent ni apercu envoyable ni bouton de test :

- retour en stock ;
- baisse de prix ;
- abandon de navigation.

Aucun faux evenement client n a ete provoque pour les declencher. Le rappel de panier Shop reste decoche afin d eviter le doublon avec Shopify Messaging.

La double confirmation marketing n est pas cochee dans l ecran Notifications client et n a donc pas ete incluse parmi les e-mails actifs.

## Gate C1-0

Le depot theme ne contient aucune application Shopify ou extension Customer Accounts. Le depot prive Agentic-Ops n en contient pas non plus. C1-0 doit donc creer une nouvelle application privee et une extension pleine page `Mon Ecrin` sur un environnement de preview.

Interdictions maintenues :

- ne pas basculer les comptes live ;
- ne pas ajouter la persistance serveur definitive de C1-1 ;
- ne pas confondre creation de compte et consentement marketing ;
- ne pas fusionner `origin/main` dans le canonique theme ;
- ne pas toucher au cross-sell live, a l Atelier des emotions ou a ScratchToReveal.

