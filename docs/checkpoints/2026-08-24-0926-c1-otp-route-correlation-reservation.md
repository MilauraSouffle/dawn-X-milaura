# C1 Customer Accounts, correlation privee de la route OTP

Date : 2026-08-24 09:26 CEST

Statut : `RESERVE - CORRELATION READ-ONLY SANS EXPOSITION D ADRESSE`

## Decision master

Le diagnostic Mail M0 retourne `NO_MAIL_TRACE` : zero resultat Shopify ou Customer Accounts dans Tous les messages, spam, corbeille et categories de la boite controlee. Aucun message prive n a ete ouvert. La documentation officielle Google confirme le routage des suffixes `+` vers la boite Gmail correspondante, et Shopify confirme que Customer Accounts envoie un code unique a six chiffres par email.

Il n existe aucune preuve de quarantaine, rejet fournisseur ou alias invalide. Avant d autoriser un nouvel envoi, le master doit fermer une seule ambiguite : l adresse du compte synthetique utilisee par C1 correspond-elle exactement, apres normalisation Gmail, a la boite controlee inspectee par Mail ?

Le master ouvre une correlation read-only a deux proprietaires. Aucune adresse complete ne sort de sa session source. Les deux proprietaires calculent la meme empreinte HMAC avec une cle ephemere transmise hors Git par le master. Le master compare seulement les empreintes.

## Proprietaires

- identite cible C1 : tache `Planifier la refonte Mon Ecrin`, thread `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- identite de la boite controlee : tache `Planifier audit emails MilAura`, thread `01a02320-58bd-7981-8181-399c222a9f92` ;
- cle ephemere, comparaison et decision : session master, thread `01a0232d-93da-7101-837e-cd83108072f8` ;
- aucun autre proprietaire ne lit ou ne traite les identites.

## Git, fichiers et environnements

- aucune branche, aucun worktree et aucun fichier ;
- C1 lot 1A reste gele a `ff6cc0616b9bedee2323a9c5d3a197659170f260` ;
- Mail reste gele a `add705ffdb7de3da8b44e936e70cfa50b9b670ea` ;
- integration reste la seule source canonique ;
- aucune donnee brute, empreinte ou cle ephemere n est ecrite dans Git ;
- aucun Shopify, Admin, theme, app dev, backend, tunnel ou serveur.

## Donnees strictement autorisees

La tache C1 peut lire localement, sans l afficher, uniquement l adresse du compte synthetique deja qualifie en RNO1 dans son fichier ignore existant.

La tache Mail peut lire, sans l afficher, uniquement l identite de la boite Gmail controlee deja ouverte pendant M0.

Chaque tache transforme son adresse dans sa propre session et retourne seulement :

- l empreinte HMAC-SHA-256 ;
- `plus_suffix_present: true|false` pour C1 seulement ;
- `normalization: gmail|workspace|other` sans domaine complet ;
- `source_read: true` ou un blocker explicite.

Ni le local-part, ni le domaine complet, ni l adresse, ni le GID, ni un OTP ne sont retournes.

## Normalisation commune obligatoire

1. supprimer les espaces exterieurs et passer en minuscules ;
2. separer le local-part et le domaine au dernier `@` ;
3. retirer du local-part le premier `+` et tout ce qui le suit ;
4. si le domaine est `gmail.com` ou `googlemail.com`, retirer aussi les points du local-part et canoniser le domaine en `gmail.com` ;
5. pour tout autre domaine, conserver les points et le domaine minuscule ;
6. reconstruire `local@domain` ;
7. calculer HMAC-SHA-256 de cette chaine UTF-8 avec la cle ephemere fournie par le master ;
8. retourner uniquement l empreinte hexadecimale.

Si l adresse ne contient pas exactement un `@`, la tache retourne `INVALID_LOCAL_IDENTITY` sans afficher la valeur.

## Interdictions

- aucune adresse ou donnee brute dans un message, outil, log, preuve ou fichier ;
- aucune nouvelle demande OTP ou envoi test ;
- aucune mutation Gmail, filtre, alias, transfert ou quarantaine ;
- aucune mutation du compte synthetique ou de son adresse ;
- aucun Shopify Admin, Customer Accounts, notification ou Messaging ;
- aucun compte, commande, `write_orders`, app dev, deploy, release, C1-2, integration, publication ou live ;
- aucune conservation de la cle apres le retour.

## Verdict master

- empreintes identiques : `ROUTE_IDENTITY_MATCH` ; le prochain lot possible sera une seule nouvelle demande OTP observee en direct, avec GO explicite et rollback, sans autre mutation ;
- empreintes differentes : `ROUTE_IDENTITY_MISMATCH` ; aucun nouvel OTP, puis proposition d un micro-lot Admin pour changer uniquement l adresse du compte synthetique existant, avec GO explicite ;
- une source inaccessible ou invalide : `CORRELATION_BLOCKED` ; aucun nouvel OTP et demande d une action minimale a Patrice ;
- aucune autre conclusion n est autorisee.

Cette reservation ne donne aucun droit sur le lot suivant.
