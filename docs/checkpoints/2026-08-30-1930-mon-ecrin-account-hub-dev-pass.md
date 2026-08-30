# Mon Ecrin espace compte complet, PASS dev store

Date : 2026-08-30 19:30 CEST

## Autorisation et perimetre

Patrice a donne le GO exact `GO CORRECTIF MON ECRIN = ESPACE COMPTE COMPLET, DEV STORE D'ABORD, SANS LIVE`, puis a confirme `OUI ENREGISTRE DEV STORE`.

Le lot est reste borne a :

- la dev store `milaura-c1-preview.myshopify.com`, ID `107347837273` ;
- le theme prive `MilAura C1 Release Candidate 2026-08-23`, ID `205027279193` ;
- la preview Shopify App Dev de `MilAura Customer Accounts` ;
- le backend de preview `https://c1-preview-api.milaura.fr`.

Aucune release d'application, aucun theme production, aucun backend production et aucun live MilAura n'ont ete modifies.

## Resultat fonctionnel

Mon Ecrin est maintenant l'espace compte complet :

- le compte, les commandes, le profil et les adresses restent visibles avec ou sans diagnostic ;
- le Cercle MilAura reste presente comme `A venir`, sans inventer de points ni d'avantages ;
- un resultat de quiz explicitement enregistre est importe automatiquement ;
- le profil emotionnel, la pierre, le mantra, le rituel et la recommandation catalogue reelle apparaissent dans Mon Ecrin ;
- les entrees compte du theme prive ouvrent la page Mon Ecrin persistante ;
- le bouton de resultat du quiz enregistre le handoff puis ouvre directement Mon Ecrin.

Page Customer Accounts enregistree :

`https://shopify.com/107347837273/account/pages/01a04dd8-c889-76f4-ac40-b8aa7d2d48c0`

Elle est ajoutee au menu principal du compte client de la dev store sous le libelle `Mon Ecrin`. Son parametre backend est enregistre sur `https://c1-preview-api.milaura.fr`.

La page Shopify `Diagnostic emotionnel`, ID `721483989337`, a ete creee uniquement sur la dev store. Le test du template prive a utilise `?view=diagnostic-emotionnel` sans publier le theme prive.

## Test reel de bout en bout

Le compte de test `C1-1 Complet` a execute le quiz sur le theme prive. Resultat obtenu :

- profil : `Apaisement` ;
- pierre : `Calcedoine bleue` ;
- recommandation Shopify reelle : `Collier calcedoine bleue AA 4 mm`, `39,90 EUR`.

Le bouton `Enregistrer et ouvrir Mon Ecrin` a emis le handoff signe via l'App Proxy de preview. Mon Ecrin l'a reclame, ecrit dans les metachamps Customer Accounts et affiche. Apres rechargement complet, le diagnostic, les commandes, le profil, le Cercle MilAura et la recommandation etaient toujours presents. Aucun code incident `ME-*` n'etait affiche.

## Configuration de preview

La configuration App Dev utilise maintenant :

- `automatically_update_urls_on_dev = false` ;
- App Proxy `https://c1-preview-api.milaura.fr/v1/theme`.

Ce choix empeche Shopify App Dev de remplacer le proxy de preview par un tunnel local qui ne partage pas l'allowlist et les cles du backend de preview. La configuration production reste distincte et inchangee.

Le theme prive a recu huit fichiers cibles, puis un `config/settings_data.json` borne qui active le bridge prive et enregistre l'URL exacte de Mon Ecrin. Les neuf pullbacks sont identiques aux sources poussees.

## Git

- theme : branche `codex/milaura-mon-ecrin-account-hub-20260830`, commit fonctionnel `db77316b` ;
- application : branche `codex/milaura-mon-ecrin-account-hub-20260830`, commit `4bfaf32` ;
- les deux branches sont destinees a rester sans merge, release ou live avant un nouveau GO explicite.

## Validations

- application : `npm run check` PASS ;
- tests : `60/60` PASS hors sandbox ;
- build Shopify : PASS ;
- bundle extension : `63587 / 65536`, marge `1949` octets ;
- controle statique : boutique exacte, App Proxy signe, SQLite, scopes exacts, aucune voie Admin ni stockage navigateur ;
- theme : `git diff --check` PASS ;
- Theme Check du push cible : zero erreur ;
- push theme prive cible avec `--nodelete --strict` : PASS ;
- pullback des huit fichiers : `8/8 MATCH` ;
- pullback `config/settings_data.json` : `MATCH` ;
- navigation Customer Accounts : lien `Mon Ecrin` present et route persistante exacte ;
- QA desktop fonctionnelle reelle : PASS ;
- la capacite Chrome n'a pas applique l'override 390 px, donc le controle visuel mobile reste a faire par Patrice. Aucun PASS visuel mobile n'est revendique.

## Rollback dev store

- sauvegarde des huit fichiers avant push : `/private/tmp/milaura-c1-account-hub-prepush-20260830T1815-Pw3xxl` ;
- restauration des reglages du theme prive : `/private/tmp/milaura-c1-account-hub-config-rollback-20260830/settings_data.json` ;
- retirer `Mon Ecrin` du menu Customer Accounts et supprimer la page Customer Accounts seulement si Patrice demande explicitement le rollback ;
- supprimer la page Shopify `Diagnostic emotionnel` seulement sur demande explicite ;
- `shopify app dev clean` restaurerait la derniere release, mais ne doit pas etre lance tant que Patrice teste cette preview.

## Etat a la fermeture de ce lot

PASS technique sur dev store. Le correctif n'est ni merge, ni release, ni live. La preview, le backend de preview et le theme prive restent actifs pour la validation visuelle de Patrice.
