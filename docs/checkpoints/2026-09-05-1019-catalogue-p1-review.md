# MilAura : lot P1 prepare pour revue

Date : 2026-09-05 10:19 CEST. Proprietaire : Codex, tache `01a0708c-b881-7b41-bbf0-c0aa9d4ac367`.

Statut : `3 COLLIERS PRETS POUR REVUE ; CHAPELET EN ATTENTE DE PRECISION SOURCE ; ZERO ECRITURE DISTANTE`.

Mandat repris : `docs/checkpoints/2026-09-05-0941-catalogue-enrichment-dedicated-handoff.md`. Ce point d'avancement ne ferme pas le mandat catalogue.

## Relecture ciblee terminee

- Les 27 EAN physiques ont ete relus dans le Sheet canonique `1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM`, onglet `Inventaire canonique`, sheetId `1034959372`. Aucun audit global ni retrait rejoue.
- Les neuf IDs Shopify connus sont ACTIVE, suivis, DENY et aux quantites attendues. Les 18 autres EAN sont absents de Shopify d'apres des recherches exactes par barcode/SKU.
- Le stock physique P1 concorde, mais les colonnes Shopify du Sheet sont anciennes : obsidienne ligne 50 et quartz rose ligne 51 affichent DRAFT ; aventurine ligne 332 et chapelet ligne 326 restent NON AUDITE sans ID. Ne pas traiter ces statuts Sheet comme l'etat Shopify actuel. Synchroniser apres GO et pullback.
- Hematite `10685849862491`, variante `53946608517467`, EAN `3701459008254` : ACTIVE, 8,50 EUR, stock 12, cinq images et 29 metachamps MilAura. Galerie et description existantes presentees. Aucune regeneration ni modification du cadeau. Le fonctionnement de la remise reste celui atteste dans le checkpoint precedent ; pas de nouvelle lecture API de remise.

## Production P1

| EAN | ID / variante Shopify conserves | Stock | Texte | Galerie | Prix actuel / propose |
| --- | --- | ---: | --- | --- | --- |
| 3701459098132 | 10557516644699 / 53458136170843 | 4 | PASS | 5 PNG, PASS technique et fidelite | 14,90 / 15,00 EUR |
| 3701459098071 | 10557523099995 / 53458153537883 | 2 | PASS | 5 PNG, PASS technique et fidelite | 14,90 / 15,00 EUR |
| 3701459098088 | 10521073385819 / 53328069558619 | 2 | PASS | 5 PNG, PASS technique et fidelite | 14,90 / 15,00 EUR |
| 3667407018617 | 10522152436059 / 53337837109595 | 1 | PASS stade texte | NON PRODUITE, source incomplete | 38,90 / 39,00 EUR |

Les quatre handles historiques sont repris a l'identique. Chaque dossier contient descriptions, SEO, FAQ, conseils, caracteristiques, metachamps, preuves prix/unite/cout, plan images et rapports. Les prix proposes viennent du prix public CAN par piece authentifie et relu le 2026-09-05. Cout rendu unitaire repris de la colonne M du Sheet : 4,10 / 4,11 / 4,09 / 10,20 EUR. Aucun prix ni cout applique dans Shopify.

Les trois galeries utilisent le generateur natif, cinq slots canoniques, 1024 x 1024 PNG. Images natives originales conservees. Une nature morte obsidienne au cadrage incomplet a ete rejetee puis regeneree. Les incrustations du slot 4 proviennent d'un crop deterministe du meme porte, avec provenance et empreintes. Chloé porte obsidienne et aventurine ; Elena porte quartz rose. References modele utilisees pour l'identite uniquement.

Les quinze images finales ont ete ouvertes en pleine resolution et comparees aux references CAN. Les quatre photos source des colliers couvrent pendentif, vrai porte, chaine/fermoir/rallonge et detail oblique. Les contrôles structurels ne valent pas GO creatif Patrice.

## Blocage limite au chapelet

La photo CAN repliee ne permet pas de compter toutes les perles. Le fournisseur indique `Diametre : 78cm`, sans preciser tour de boucle ou longueur totale. Ces deux points ont ete demandes a Patrice. Aucun nombre de perles ni longueur globale invente ; aucune galerie generee depuis une construction presumee.

Le texte peut etre relu. Les controles finaux du chapelet restent explicitement FAIL/PENDING a cause des images absentes et de la fidelite non certifiee. Ne pas transformer ce resultat en PASS de lot.

## Artefacts durables et controles

Revue ouverte dans le navigateur Codex : `http://127.0.0.1:8765/REVIEW.html`. Serveur limite a 127.0.0.1 ; il ne constitue pas une publication. Le fichier HTML fonctionne aussi depuis le dossier copie avec ses chemins relatifs.

Dossier de travail et revue :

`/Users/paesano/.codex/visualizations/2026/09/05/01a0708c-b881-7b41-bbf0-c0aa9d4ac367/catalogue-p1/`

Copie canonique privee, 124 fichiers verifies par SHA-256 :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-05-p1-enrichment-review/`

Points d'entree : `REVIEW.html`, `batch-manifest.json`, `mutation-preview.json`, `validation-report.json`, `shopify-before.json`, `sheet-before.json`, `generation-manifest.json` ; puis un dossier par EAN.

Verification : `quality_gate.check(stage=text)` sur quatre produits ; contrat final, `image_quality_check`, `visual_quality_gate_v4`, `editorial_quality_gate_v4` avec preuves sur les trois colliers : PASS. Quatre titres/handles distincts. 56 references image de la revue presentes. Page chargee, pas d'image visible en erreur ni de debordement a la largeur observee ; agrandissement et fermeture verifies.

## Gates et suite exacte

1. Attendre le retour de Patrice sur textes, galeries et prix des trois colliers, puis son GO d'ecriture. Rien n'est autorise par simple PASS technique. Le manifeste conserve `shopify_write_authorized=false` et `sheet_write_authorized=false`.
2. Recuperer les precisions du chapelet et produire sa galerie. Demande distincte en attente : maintenir ou regenerer la galerie hematite apres revue de l'existante.
3. Apres GO, relire les trois/four produits exacts et leurs lignes Sheet, appliquer les champs enrichis en place, verifier les nouveaux medias avant remplacement des anciens, pullback puis Sheet exact. Preserver IDs, variantes, handles, ACTIVE, stocks et collections sans rapport. Ne jamais utiliser un create produit pour P1.
4. Enchainer P2 par petits lots selon le checkpoint 09:41 : 18 nouvelles fiches, DRAFT uniquement, prix/unite a prouver. Aucun ACTIVE, publication, Ads ou feed par inference. Les 55 fiches legacy a zero et les cinq galeries acceptees restent hors lot.

Attention technique : les fichiers de preparation respectent le schema generique avec `shopify.status=DRAFT`. Ce champ est un garde-fou du contrat de brouillon, pas une instruction de passer P1 en DRAFT. `preserve_existing_handle=true` est renseigne. L'updater generique peut aussi toucher collections et inventaire : ne pas l'executer tel quel. `mutation-preview.json` borne les IDs et champs proposes ; il n'execute aucune mutation.

## Git et live

Seuls la section P1 de `docs/workstreams.md` et ce checkpoint sont modifies par cette session dans le depot theme. Les modifications concurrentes des workflows, AGENTS, project-state, handoff, autres sections du registre et fichiers non suivis sont preservees. Documentation seulement sur `codex/milaura-integration` ; aucun fichier theme, aucun push Shopify, aucun produit, stock, prix, Sheet, remise ou canal modifie.

## Reprise

Reprendre depuis ce checkpoint et ouvrir la revue privee. Lire d'abord les nouvelles reponses de Patrice. Si GO visuel/texte/prix et GO ecriture explicites pour les trois colliers : relecture exacte des IDs et lignes Sheet, mise a jour en place sans toucher statuts/handles/stocks, pullback et synchronisation. Sinon appliquer ses retours aux artefacts prives. Garder le chapelet en attente des deux faits source et l'hematite intacte tant que la regeneration n'est pas demandee. Ne pas rejouer la collecte des 27 EAN ni un audit general.
