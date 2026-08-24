# C1 Customer Accounts, GO correction unique de l adresse test

Date : 2026-08-24 13:44 CEST

Statut : `GO ADMIN RECU - M4 ACTIVE`

## GO Patrice

Patrice a confirme exactement :

`GO ADMIN C1 OTP - MODIFICATION UNIQUE DE L EMAIL DU COMPTE TEST, J ACCEPTE UNE NOTIFICATION SHOPIFY EVENTUELLE, SANS DEMANDE OTP`

Ce GO accepte le risque borne d une notification Shopify automatique vers l ancienne adresse, la nouvelle ou les deux. Il n autorise aucun nouvel OTP.

## Perimetre active

Le cadre complet reste `docs/checkpoints/2026-08-24-1215-c1-otp-address-correction-prereservation.md`.

- depot prive `Onora-studio/onora-ops` ;
- base exacte `ff6cc0616b9bedee2323a9c5d3a197659170f260` ;
- branche `codex/milaura-c1-otp-address-correction-20260824` ;
- worktree `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-otp-address-correction-20260824` ;
- zone exclusive `docs/milaura/shopify-admin-canonical/c1-otp-address-correction/**` ;
- seul store `milaura-c1-preview`, ID `107347837273` ;
- seule fiche cliente synthetique RNO1, zero commande ;
- cible privee : variante `+c1-rc-20260824` de la boite Gmail controlee ;
- verification exacte d unicite avant edition ;
- seul champ email, une seule sauvegarde ;
- verification apres reload ;
- observation Mail read-only d une notification eventuelle ;
- rapport redige sans adresse, identifiant client ou OTP.

## Arrets obligatoires

- cible deja utilisee : `TARGET_EMAIL_CONFLICT`, aucune mutation ;
- cible deja presente sur RNO1 : `ALREADY_TARGETED`, aucune sauvegarde ;
- compte incorrect, non synthetique ou avec commande : `TARGET_ACCOUNT_INVALID` ;
- Admin non accessible : `ADMIN_SESSION_REQUIRED` ;
- sauvegarde refusee : stop sans contournement ;
- sauvegarde reussie mais valeur non confirmee : stop, aucun rollback automatique ;
- toute notification inattendue est consignee, jamais corrigee dans ce lot.

## Interdictions maintenues

- aucune creation, suppression, fusion ou invitation de compte ;
- aucun autre champ, cliente, commande, email test ou OTP ;
- aucun template, notification, Messaging, filtre ou reglage Mail ;
- aucun GraphQL, API, scope, app dev, backend, tunnel ou `write_orders` ;
- aucun rollback sans nouvelle reservation et nouveau GO ;
- aucun theme, deploy, release, C1-2, integration, publication ou live.

Le lot suivant, demande OTP unique observee, reste interdit jusqu au retour M4, audit master, reservation et GO distinct.
