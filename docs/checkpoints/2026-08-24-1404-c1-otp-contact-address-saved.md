# C1 OTP, adresse de contact du compte test corrigee

Date : 2026-08-24 14:04 CEST

## Verdict

`ADDRESS_ROUTE_CORRECTED - OTP NOT REQUESTED`

Le compte synthetique RNO1 du dev store `milaura-c1-preview`, ID `107347837273`, utilise maintenant la boite MilAura existante `contact@milaura.fr`. La sauvegarde est confirmee apres rechargement dans Shopify Admin.

## Autorisation

Patrice a donne le GO exact :

`GO ADMIN C1 OTP - REMPLACER UNIQUEMENT L EMAIL DU COMPTE TEST PAR CONTACT@MILAURA.FR, J ACCEPTE UNE NOTIFICATION SHOPIFY EVENTUELLE, SANS DEMANDE OTP`

Ce GO autorisait un seul champ sur une seule fiche synthetique, sans demande OTP.

## Preuves observees

- bon dev store et fiche `C1-1 Complet` ;
- balises `MILAURA_C1_1_COMPLETE` et `MILAURA_C1_1_TEST` ;
- zero commande et `0,00 EUR` depense avant la sauvegarde ;
- Patrice a effectue manuellement la sauvegarde du seul champ email ;
- apres rechargement, Shopify affiche `contact@milaura.fr` dans les coordonnees ;
- le calendrier Shopify consigne le changement de la precedente adresse synthetique avec suffixe `+` vers `contact@milaura.fr` ;
- zero commande et `0,00 EUR` restent affiches apres la sauvegarde.

L ancienne cible Gmail envisagee pendant M3 et M4 a ete annulee et n a jamais ete enregistree. Le worktree prive M4 reste un artefact documentaire bloque a `78bc9ca350736aab569dad5c21d825ba76cced21`, sans mutation Admin executee par cette tache.

## Interdictions maintenues

- aucun OTP demande ;
- aucune commande, autre cliente, scope, API, app dev, tunnel ou backend ;
- aucun email, template ou reglage Mail modifie ;
- aucun deploy, release, bascule de comptes, theme, integration ou live ;
- aucune conclusion sur une notification eventuelle, non observee dans ce lot.

## Gate suivant

La correction d adresse est fermee. Le prochain lot doit etre reserve separement pour une unique demande OTP observee en direct sur `contact@milaura.fr`, puis seulement pour la reprise RNO3 et RNO4. Aucun OTP sans nouveau GO exact de Patrice.
