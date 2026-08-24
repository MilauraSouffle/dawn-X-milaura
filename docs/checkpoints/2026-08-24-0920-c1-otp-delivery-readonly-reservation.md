# C1 Customer Accounts, diagnostic OTP Mail en lecture seule

Date : 2026-08-24 09:20 CEST

Statut : `RESERVE - AUDIT MAIL STRICTEMENT EN LECTURE SEULE AUTORISE`

## Decision master

Le retour C1 lot 1A au commit prive `ff6cc0616b9bedee2323a9c5d3a197659170f260` est conforme a la reservation. Le commit a pour parent exact `c877d630a8953a0cf1304c7392143288db110b99`, ajoute uniquement le rapport reserve et suit son distant `0/0`. RNO0, RNO1, RNO2, RNO5 et RNO6 sont PASS. RNO3 et RNO4 sont BLOCKED avant authentification car le code natif Shopify annonce comme envoye n est pas arrive dans la boite controlee.

Le rollback est ferme : flag du theme prive restaure a `false`, SQLite locale a zero handoff et zero purge, runtime, tunnel et listeners arretes. Aucun compte, commande, scope, Admin, email, deploy, release, integration ou live n a ete modifie.

RC4 ne ferme pas et RC8 ne progresse pas. Le lot C1 1A est gele. Le master ouvre seulement le diagnostic Mail M0 ci-dessous. Aucune nouvelle demande OTP et aucune mutation d adresse ne sont autorisees.

## Proprietaires

- diagnostic Mail M0 : Codex, tache `Planifier audit emails MilAura`, thread `01a02320-58bd-7981-8181-399c222a9f92` ;
- C1 bloque et lecture seule : tache `Planifier la refonte Mon Ecrin`, thread `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- integration, decisions, Admin mutable et tout live : session master, thread `01a0232d-93da-7101-837e-cd83108072f8` ;
- aucun autre proprietaire n inspecte ou ne modifie la boite, le compte synthetique, Mail ou C1 pendant ce diagnostic.

## Git, fichiers et environnements

Ce diagnostic est sans branche, sans worktree et sans fichier ecrit.

- aucun commit, push ou modification de `docs/workstreams.md` par Mail ;
- branche Mail fermee `codex/milaura-e4-e6-mail-20260821` a `add705ffdb7de3da8b44e936e70cfa50b9b670ea`, strictement en lecture seule ;
- branche C1 lot 1A a `ff6cc0616b9bedee2323a9c5d3a197659170f260`, strictement en lecture seule ;
- aucun theme Shopify, app dev, backend, tunnel ou serveur a lancer ;
- aucun acces necessaire au live MilAura, au theme `190430282075` ou au developpement general `199421952347`.

Le rapport revient par message au master. Le master seul canonise le resultat.

## Surfaces de lecture autorisees

La tache Mail peut inspecter uniquement :

1. la boite controlee par Patrice deja ouverte dans une session autorisee, avec une recherche ciblee sur les messages d authentification Shopify autour de l essai du 2026-08-24 ;
2. `Tous les messages`, spam, corbeille, quarantaine et categories, uniquement pour les resultats correspondant a Shopify ou au code de connexion ;
3. les regles de filtrage, transfert, alias et routage applicables a cette boite, en lecture seule ;
4. la documentation officielle du fournisseur de messagerie pour verifier le support des suffixes `+` ;
5. la documentation officielle Shopify utile pour qualifier l emetteur et les limites de livraison du code natif.

La tache ne lit pas les messages sans rapport avec cette recherche. Elle ne copie ni ne restitue l adresse complete, le code, le corps du message, les expediteurs personnels ou tout contenu prive non necessaire.

Si aucune session de boite controlee n est deja accessible, elle s arrete avec `MAILBOX_ACCESS_REQUIRED`. Elle ne demande pas, ne lit pas et ne stocke aucun mot de passe.

## Interdictions

- aucune nouvelle demande de code Shopify ;
- aucun envoi d email test ;
- aucune modification de filtre, transfert, alias, quarantaine ou parametre de boite ;
- aucune modification d adresse du compte synthetique ;
- aucune creation ou suppression de compte ;
- aucune mutation Shopify Admin, Customer Accounts, Mail, Messaging ou notification ;
- aucun fichier Mail, C1, theme ou integration modifie ;
- aucun compte, commande, `write_orders`, app dev, deploy, release, C1-2, publication ou live ;
- aucun contact Shopify Support dans ce lot.

## Questions a trancher

1. Le message existe-t-il dans la boite, le spam, la quarantaine ou une autre categorie ?
2. Une regle locale ou fournisseur l a-t-elle deplace, rejete ou mis en quarantaine ?
3. Le fournisseur supporte-t-il officiellement le suffixe `+` utilise par le compte synthetique ?
4. Existe-t-il une trace de rejet, bounce, suppression ou route inconnue sans exposer de donnee personnelle ?
5. Le blocker est-il classe `DELIVERED_HIDDEN`, `PROVIDER_QUARANTINED`, `ALIAS_ROUTE_BLOCKED`, `NO_MAIL_TRACE` ou `MAILBOX_ACCESS_REQUIRED` ?

## Retour attendu

Le proprietaire Mail retourne au master :

- classification exacte parmi les cinq statuts ci-dessus ;
- heure approximative et dossier de reception, si le message existe, sans OTP ni adresse ;
- domaine de l emetteur et objet rediges si necessaires a la preuve ;
- preuve officielle du support ou non-support du suffixe `+` ;
- regle ou quarantaine en cause, si visible, sans la modifier ;
- plus petit prochain lot recommande ;
- confirmation qu aucun message, reglage, compte ou fichier n a ete modifie.

## Decision apres M0

- `DELIVERED_HIDDEN` ou `PROVIDER_QUARANTINED` : corriger le parcours humain ou la regle de reception dans un lot Mail separe, puis demander un nouveau GO avant de relancer un OTP ;
- `ALIAS_ROUTE_BLOCKED` : proposer un micro-lot Admin distinct pour remplacer uniquement l adresse du compte synthetique existant par une boite controlee et prouvee livrable, sans creer de compte ;
- `NO_MAIL_TRACE` : ne pas conclure a une panne C1 ; preparer soit un test de livraison borne vers une adresse prouvee, soit une demande Shopify Support, chacun avec reservation et GO distincts ;
- `MAILBOX_ACCESS_REQUIRED` : demander a Patrice uniquement l ouverture de la boite controlee, sans demander de secret.

Aucune de ces suites n est autorisee par cette reservation.
