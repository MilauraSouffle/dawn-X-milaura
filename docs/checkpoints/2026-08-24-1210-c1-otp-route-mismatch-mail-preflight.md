# C1 Customer Accounts, route OTP mismatch et preflight Mail

Date : 2026-08-24 12:10 CEST

Statut : `ROUTE MISMATCH CONFIRME - PREFLIGHT MAIL READ-ONLY RESERVE`

## Verdict route

Patrice a communique au master l adresse de destination affichee par Shopify. Le master ne la recopie pas dans les preuves. La destination est un alias avec suffixe `+` sous le domaine MilAura, tandis que M0 a inspecte une boite Gmail controlee distincte. Les deux routes ne correspondent pas.

Verdict : `ROUTE MISMATCH`.

L absence de message dans la boite Gmail est donc expliquee sans prouver une panne Shopify, Gmail ou C1. Le lot C1 1A reste gele. Aucun nouvel OTP n est demande vers l ancienne route.

## Decision master

La correction minimale probable consiste a remplacer uniquement l adresse du compte synthetique existant par une variante avec suffixe `+` de la boite Gmail controlee, sans creer de compte. Cette action est une mutation Admin et peut declencher une notification de changement d email. Le master ne l autorise pas avant un preflight Mail read-only et un GO explicite de Patrice.

## Proprietaires

- preflight notification et delivrabilite : tache Mail `Planifier audit emails MilAura`, thread `01a02320-58bd-7981-8181-399c222a9f92` ;
- compte C1 synthetique gele : tache C1 `Planifier la refonte Mon Ecrin`, thread `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` ;
- decision, reservation Admin, integration et live : session master `01a0232d-93da-7101-837e-cd83108072f8`.

## Preflight Mail M3 autorise

Le proprietaire Mail travaille sans branche, worktree ou fichier et peut consulter uniquement :

1. la documentation officielle Shopify sur la modification de l email d une fiche cliente avec les nouveaux comptes clients ;
2. les preuves Mail canoniques fermees a `add705ffdb7de3da8b44e936e70cfa50b9b670ea` ;
3. la documentation officielle Gmail sur les suffixes `+` deja qualifiee ;
4. les contraintes d unicite ou de conflit d adresse documentees par Shopify ;
5. les conditions de rollback vers l ancienne valeur, sans l afficher.

Questions obligatoires :

- une sauvegarde Admin de l email declenche-t-elle un message vers l ancienne adresse, la nouvelle ou les deux ?
- ce message peut-il etre desactive dans le cadre du dev store non Plus ?
- la nouvelle adresse doit-elle etre unique parmi les clientes Shopify ?
- une variante `+` Gmail est-elle adaptee a ce compte synthetique sans creer une nouvelle boite ?
- quel rollback est possible si la sauvegarde echoue ou si l OTP reste absent ?

## Interdictions

- aucune lecture ou ecriture du compte dans Shopify Admin ;
- aucune adresse complete, suffixe, identifiant client ou OTP dans le retour ;
- aucune demande OTP, envoi test ou email ;
- aucune modification de compte, adresse, notification, Mail ou Gmail ;
- aucun app dev, backend, tunnel, GraphQL, API, scope, commande ou `write_orders` ;
- aucun fichier, commit, deploy, release, C1-2, integration, publication ou live ;
- aucun contact Shopify Support.

## Retour attendu

Le proprietaire Mail retourne :

- `CHANGE_SILENT_CONFIRMED`, `CHANGE_NOTIFICATION_EXPECTED` ou `CHANGE_BEHAVIOR_UNVERIFIED` ;
- destinataire probable de toute notification, redige sans adresse ;
- preuve officielle et limite de confiance ;
- contrainte d unicite ;
- rollback recommande ;
- confirmation de zero mutation.

## Gate suivant

Apres ce retour, le master pourra borner un micro-lot Admin sur une seule fiche synthetique et une seule adresse cible controlee. La sauvegarde exigera un GO exact de Patrice. Le nouvel OTP restera un lot suivant, avec un autre GO, apres preuve de la nouvelle route.

Ce checkpoint ne donne aucun droit de mutation.
