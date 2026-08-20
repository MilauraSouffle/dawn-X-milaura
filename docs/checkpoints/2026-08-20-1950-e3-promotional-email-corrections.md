# E3 - Correction francaise et avantages dans les relances

Date : 2026-08-20 19:50 CEST

## Autorisation

Patrice a confirme `CONFIRMÉ CORRECTION E3 + TESTS` apres avoir refuse le sujet anglais du checkout et demande un avantage commercial mesurable dans les relances avant achat.

## Clarification sur les autres e-mails

Les notifications transactionnelles Shopify n ont pas ete desactivees par E3. Activation de compte, bienvenue compte, reinitialisation du mot de passe, confirmation de commande, expedition, annulation, remboursement et carte cadeau peuvent toujours etre emises par leur evenement.

E4 reste necessaire pour reprendre et valider leur contenu. Les objets volontairement inactifs ou supprimes restent :

- ancien checkout `68816896347` ;
- archive checkout urgence ;
- anniversaire ;
- newsletter `BIENVENUE10` ;
- remerciement post-achat Shopify Messaging.

## Reductions Shopify confirmees avant modification

- `MILAURA-RELAIS30` : livraison offerte pour un tarif de point relais eligible des 30 EUR ;
- `MILAURA15-80` : remise de 15 % des 80 EUR, cumulable avec la livraison ;
- `VINTED10` : actif mais exclu des relances, car le nom est hors marque et la remise ne comporte pas de minimum.

Aucun nouveau code n a ete cree.

## Contenu live final

### Consultation produit

- sujet : `Ce produit vous appelait peut-être` ;
- apercu : `Retrouvez cette création et profitez de la livraison offerte en point relais dès 30 €.` ;
- avantage : `MILAURA-RELAIS30` des 30 EUR ;
- titre interne corrige : `Ce produit vous appelait peut-être` ;
- parent `72198390107` et activite `208689070427` relus `Actif`.

### Panier

- sujet : `Votre panier MilAura vous attend` ;
- apercu : `Retrouvez votre panier et profitez de vos avantages selon son montant.` ;
- avantages : `MILAURA-RELAIS30` des 30 EUR et `MILAURA15-80` des 80 EUR ;
- cumul annonce des 80 EUR sous reserve d un mode de livraison eligible ;
- accents corriges dans `Sélection sauvegardée` et `restée de côté` ;
- parent `68816961883` et activite `204165480795` relus `Actif`.

### Checkout

- ancien sujet : `Complete your order` ;
- sujet live final : `Votre commande MilAura vous attend` ;
- apercu : `Reprenez votre paiement et profitez de vos avantages selon le montant de votre commande.` ;
- avantages : `MILAURA-RELAIS30` des 30 EUR et `MILAURA15-80` des 80 EUR ;
- CTA conserve : `Finaliser votre commande` ;
- parent `73633464667` et activite `210569822555` relus `Actif`.

## Tests et preuves

- un test de chaque version finale a ete accepte par Shopify Messaging et envoye a l adresse de contact de la boutique ;
- aucune commande, aucun compte, aucun evenement client reel et aucun changement de consentement n ont ete provoques ;
- la liste finale Messaging montre les trois parents consultation, panier et checkout actifs ;
- ancien checkout et archive urgence restent inactifs ;
- les sources Liquid finales browse et cart correspondent bit a bit aux sources versionnees apres ajout du saut de ligne final ;
- validation JSON, `verify_baseline.py` et `git diff --check` passes dans le depot prive.

Preuve privee : branche `codex/milaura-e3-lifecycle-actif-20260820`, commit `62132a8` pousse sur `Onora-studio/onora-ops`.

## Etat du plan

E3 est de nouveau ferme techniquement. La validation visuelle en boite de reception appartient a Patrice. C1-0 ne commence qu apres son verdict sur les trois nouveaux tests.

Aucun fichier de theme, aucun theme Shopify, aucun produit, aucun compte client et aucune notification transactionnelle n ont ete modifies dans cette correction.
