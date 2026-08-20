# E3 - Tests controles des e-mails live

Date : 2026-08-20 16:45 CEST

## Decision

Le gate d attente passive de 24 heures est retire. Le trafic et le volume de commandes MilAura ne permettent pas de tirer une conclusion fiable d une periode sans evenement.

E3 est ferme sur un gate actif :

1. envoi d un test Shopify a `contact@milaura.fr` ;
2. retour immediat de chaque activite Messaging a l etat `Actif` ;
3. relecture finale de la liste des automatisations ;
4. validation visuelle de Patrice dans la boite de reception.

## E-mails valides et testes

| Objet | Use case | Etat apres test | Destinataire du test |
| --- | --- | --- | --- |
| `Ce produit vous appelait peut-être` | Relance d une consultation de produit abandonnee, uniquement pour un abonne au marketing par e-mail qui respecte les conditions de stock, d absence de progression et de pression commerciale | activite et parent `Actif` | `contact@milaura.fr` |
| `Votre panier MilAura vous attend` | Relance d un panier abandonne, uniquement pour un abonne au marketing par e-mail qui respecte les conditions de stock, d absence de progression et de pression commerciale | activite et parent `Actif` | `contact@milaura.fr` |
| `Complete your order` | Relance d un paiement abandonne sur la boutique en ligne, uniquement pour un abonne au marketing par e-mail apres 10 heures, si aucun achat ni checkout plus recent n existe et si le stock reste disponible | activite et parent `Actif` | `contact@milaura.fr` |
| `Confirmation du compte client` | Notification transactionnelle envoyee lorsqu un client termine l activation de son compte client classique | modele E2 relu ; Shopify confirme `E-mail de test envoyé avec succès` | `contact@milaura.fr` |

Aucun evenement client reel, aucune commande, aucun nouveau compte et aucun changement de consentement n ont ete provoques pour ces tests.

## Etat live final relu

- `E3 PREVIEW - Checkout abandonne - 2026-08-20` : `Actif` ;
- `Convertir la consultation de produit abandonnee` : `Actif` ;
- `Recuperer le panier abandonne` : `Actif` ;
- ancien `Recuperer le paiement abandonne` : `Inactif` ;
- `ARCHIVE - NE PAS ACTIVER - ancien checkout urgence` : `Inactif` ;
- `Remercier les clients apres leur achat` : `Inactif`.

Il n existe plus d e-mail anniversaire actif, plus d e-mail de bienvenue newsletter `BIENVENUE10`, et aucun e-mail post-achat n est actif dans Shopify Messaging.

## Perimetre encore non valide

Les notifications transactionnelles suivantes peuvent etre emises par Shopify selon leur evenement, mais leur contenu n a pas encore passe le lot E4 :

- invitation a creer un compte ;
- reinitialisation du mot de passe ;
- confirmation de commande ;
- confirmation et mise a jour d expedition ;
- annulation de commande ;
- remboursement ;
- carte-cadeau.

Elles ne sont pas incluses dans la liste des e-mails valides de ce checkpoint et aucun test ne leur a ete envoye.

## Suite canonique

1. `C1-0` : construire la preview des nouveaux comptes et verifier la parite sans basculer le live ;
2. `C1-1` : persistance serveur durable de Mon Ecrin avec consentement de personnalisation explicite et suppression ;
3. `E4` : auditer, corriger et tester les notifications transactionnelles ;
4. `E5` : inscription, post-achat et avis ;
5. `E6` : lifecycle long terme, delivrabilite et certification ;
6. `E7` : retour produit, idempotence, KV, domaine et secrets.

Les consentements cookies, personnalisation, e-mail et SMS restent distincts. La creation d un compte ne vaut pas consentement marketing. Les comptes live ne doivent pas basculer avant preview et tests de parite.
