# C1 Customer Accounts, correlation OTP depuis Admin read-only

Date : 2026-08-24 09:29 CEST

Statut : `RESERVE - LECTURE ADMIN BORNEE SANS EXPOSITION D ADRESSE`

## Decision master

M1 est `CORRELATION_BLOCKED` sans incident : le fichier local ignore C1 contient six alias techniques et identifiants prives, mais aucune adresse email. La tache C1 n a utilise aucune autre source et n a retourne aucune valeur personnelle. La tache Mail a recu l ordre d arreter le calcul avec la cle precedente.

La seule source minimale qui relie l identifiant synthetique qualifie a sa destination de connexion est la fiche de ce compte dans le dev store Shopify. Le master ouvre M2 : lecture bornee d une seule fiche cliente synthetique dans Shopify Admin, sans mutation, puis comparaison par empreinte HMAC avec l identite de la boite Gmail controlee.

Cette lecture ne donne aucun droit Admin mutable, Customer Accounts, envoi ou reprise C1.

## Proprietaires

- fiche cliente synthetique dans Admin read-only : tache C1 `Planifier la refonte Mon Ecrin`, thread `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- identite de la boite Gmail controlee : tache Mail `Planifier audit emails MilAura`, thread `01a02320-58bd-7981-8181-399c222a9f92` ;
- cle ephemere, comparaison et decision : session master, thread `01a0232d-93da-7101-837e-cd83108072f8` ;
- master reste seul proprietaire de toute mutation Admin, integration ou live.

## Environnement borne

- seul store : `milaura-c1-preview.myshopify.com`, ID `107347837273` ;
- une seule fiche : le compte synthetique exact deja qualifie RNO1 par son identifiant prive local ;
- seulement une session Shopify Admin deja authentifiee et autorisee ;
- seulement la session Gmail controlee deja ouverte pendant M0 ;
- aucune branche, aucun worktree, aucun fichier, aucun commit ;
- C1 `ff6cc061`, Mail `add705ff` et integration en lecture seule.

Si aucune session Shopify Admin autorisee n est deja ouverte, C1 retourne `ADMIN_SESSION_REQUIRED`. Aucun mot de passe, code ou nouvelle connexion ne sont demandes.

## Lecture C1 autorisee

1. lire localement, sans l afficher, l identifiant prive exact du compte RNO1 ;
2. ouvrir directement sa fiche dans l Admin du seul dev store ;
3. verifier en lecture seule qu il s agit du compte synthetique cible et qu il reste sans commande ;
4. lire l adresse email de cette seule fiche sans l afficher ;
5. normaliser et calculer l empreinte dans la meme session ;
6. fermer la fiche sans sauvegarde ni mutation.

Aucune liste clientes, autre fiche, commande, adresse postale, note, tag ou donnee personnelle n est inspectee.

## Lecture Mail autorisee

Mail lit uniquement l identite de la boite Gmail controlee deja ouverte, sans rechercher ou ouvrir de message. Il normalise et calcule son empreinte dans sa propre session.

## Normalisation et sortie

La normalisation est celle de M1 : trim, minuscules, suppression du suffixe `+`, canonisation Gmail ou Googlemail avec suppression des points, puis HMAC-SHA-256 UTF-8 avec la nouvelle cle ephemere transmise hors Git par le master.

C1 retourne seulement :

- `ADMIN_HMAC=<64 hex>` ;
- `plus_suffix_present=true|false` ;
- `normalization=gmail|workspace|other` ;
- `target_verified=true` ;
- `orders_zero=true`.

Mail retourne seulement :

- `MAIL_HMAC=<64 hex>` ;
- `normalization=gmail|workspace|other` ;
- `source_read=true`.

Ni adresse, ni domaine complet, ni local-part, ni identifiant client, ni OTP ne sont retournes. La cle et les empreintes ne sont pas ecrites dans Git.

## Interdictions

- aucune modification ou sauvegarde de la fiche cliente ;
- aucune creation, suppression ou changement d adresse de compte ;
- aucune demande OTP ou email test ;
- aucune lecture d une autre cliente ou commande ;
- aucun filtre, alias, transfert ou reglage Gmail modifie ;
- aucun app dev, backend, tunnel, GraphQL Admin, scope ou API ;
- aucun compte, commande, `write_orders`, notification, Messaging, deploy, release, C1-2, integration, publication ou live ;
- aucune conservation de la cle apres le retour.

## Verdict master

- empreintes identiques : `ROUTE_IDENTITY_MATCH` ; le prochain lot possible sera une seule demande OTP observee en direct, avec GO explicite ;
- empreintes differentes : `ROUTE_IDENTITY_MISMATCH` ; aucun nouvel OTP, puis proposition d un changement d adresse unique sur le compte synthetique avec GO Admin explicite ;
- Admin ou boite inaccessible, cible non verifiable ou donnee invalide : `CORRELATION_BLOCKED` ; aucune autre action.

Cette reservation ne donne aucun droit sur le lot suivant.
