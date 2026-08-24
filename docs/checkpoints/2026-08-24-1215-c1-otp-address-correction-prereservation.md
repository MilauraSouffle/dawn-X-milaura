# C1 Customer Accounts, correction unique de l adresse test

Date : 2026-08-24 12:15 CEST

Statut : `PRE-RESERVE - GO ADMIN PATRICE REQUIS AVANT EXECUTION`

## Verdict du preflight Mail M3

Verdict : `CHANGE_BEHAVIOR_UNVERIFIED`.

Shopify documente la modification et l enregistrement de l email client dans Admin, mais ne documente pas le destinataire ni le declenchement d une notification pour une modification par un employe. Pour une modification faite par le client, la nouvelle adresse doit etre verifiee. Une notification vers la nouvelle adresse est donc plausible ; une alerte vers l ancienne adresse ou les deux ne peut pas etre exclue.

Si la notification se declenche, elle n est pas connue comme desactivable hors Plus. Shopify impose aussi l unicite de l email client. Une variante `+` Gmail arrive dans la boite existante, mais Shopify peut refuser la sauvegarde si cette valeur exacte appartient deja a un autre profil.

Aucune mutation n a ete effectuee pendant M3.

## Decision master

Le master pre-reserve M4, correction Admin unique de la route email sur le seul compte synthetique RNO1. M4 ne demande aucun OTP. Le risque d une notification automatique vers l ancienne adresse, la nouvelle ou les deux doit etre accepte explicitement par Patrice avant la sauvegarde.

## Base, branche et worktree

Depot prive `Onora-studio/onora-ops` :

- base exacte : `ff6cc0616b9bedee2323a9c5d3a197659170f260` ;
- branche a creer apres GO : `codex/milaura-c1-otp-address-correction-20260824` ;
- worktree a creer apres GO : `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-otp-address-correction-20260824` ;
- tracking : `origin/codex/milaura-c1-otp-address-correction-20260824` ;
- branche et worktree verifies absents localement et sur origin avant pre-reservation.

Zone d ecriture Git exclusive apres GO :

`docs/milaura/shopify-admin-canonical/c1-otp-address-correction/**`

L application C1, le theme, les anciens lots et les fichiers Mail restent en lecture seule. Le rapport ne contient aucune adresse complete, identifiant client ou OTP.

## Proprietaires

- mutation Admin bornee et preuve : tache C1 `Planifier la refonte Mon Ecrin`, thread `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- generation de la cible controlee et observation Mail read-only : tache Mail `Planifier audit emails MilAura`, thread `01a02320-58bd-7981-8181-399c222a9f92` ;
- reservation, GO, integration et tout live : session master `01a0232d-93da-7101-837e-cd83108072f8`.

## Cible privee

La cible est une variante avec suffixe `+c1-rc-20260824` de la boite Gmail controlee inspectee pendant M0. Le proprietaire Mail la construit en memoire et la transmet uniquement a la tache C1 apres le GO. Elle ne figure ni dans Git, ni dans les preuves, ni dans les messages au master.

Avant toute edition, C1 recherche exactement cette valeur dans le seul dev store :

- si aucun autre profil ne l utilise, le gate d unicite est PASS ;
- si elle appartient deja a un autre profil, stop `TARGET_EMAIL_CONFLICT` ; aucune fusion, suppression ou autre variante improvisee ;
- si elle est deja la valeur du compte RNO1, stop et rendre `ALREADY_TARGETED` sans sauvegarde.

## Environnement et mutation autorisee apres GO

- seul store : `milaura-c1-preview.myshopify.com`, ID `107347837273` ;
- seule fiche : compte synthetique exact RNO1, confirme sans commande ;
- une seule edition : champ email ;
- une seule sauvegarde ;
- verification immediate de la valeur affichee apres reload ;
- observation Mail read-only, strictement ciblee, d une notification eventuelle ;
- aucun OTP demande dans M4.

La valeur precedente reste seulement dans la session Admin le temps de verifier la sauvegarde. Elle n est pas ecrite dans Git. Aucun rollback automatique : restaurer l ancienne valeur serait une seconde mutation susceptible de notifier et exige une nouvelle reservation et un nouveau GO.

## Interdictions

- aucune creation, suppression, fusion ou invitation de compte ;
- aucun autre champ, tag, note, adresse, consentement ou commande modifie ;
- aucune autre cliente ou commande inspectee hors recherche exacte d unicite ;
- aucune demande OTP ou email test ;
- aucun template, notification, Messaging, filtre ou reglage Mail modifie ;
- aucun GraphQL, API, scope, app dev, backend, tunnel ou `write_orders` ;
- aucun theme, deploy, release, C1-2, integration, publication ou live ;
- aucun rollback sans nouveau GO.

## Gates de sortie M4

| Gate | Condition |
| --- | --- |
| M4-0 | GO exact Patrice consigne, branche et worktree crees depuis la base exacte |
| M4-1 | compte RNO1 exact, synthetique, sans commande ; cible controlee et unique |
| M4-2 | seul champ email modifie, une seule sauvegarde |
| M4-3 | nouvelle valeur confirmee apres reload, sans l exposer |
| M4-4 | notification eventuelle classee ancienne, nouvelle, deux, aucune ou non verifiable |
| M4-5 | aucune demande OTP, rapport pousse, worktree propre et aligne |

Si une etape echoue, le lot s arrete sans autre mutation.

## GO exact requis

Patrice doit confirmer exactement :

`GO ADMIN C1 OTP - MODIFICATION UNIQUE DE L EMAIL DU COMPTE TEST, J ACCEPTE UNE NOTIFICATION SHOPIFY EVENTUELLE, SANS DEMANDE OTP`

Sans cette phrase, aucune branche, aucun worktree, aucune cible et aucune fiche Admin ne sont modifies.
