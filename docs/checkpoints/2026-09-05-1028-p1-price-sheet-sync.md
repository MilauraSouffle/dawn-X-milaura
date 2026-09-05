# MilAura P1 : maintien des prix et synchronisation du Sheet

Date : 2026-09-05 10:28 CEST. Proprietaire : Codex, tache `01a0708c-b881-7b41-bbf0-c0aa9d4ac367`.

Instruction Patrice : conserver 14,90 EUR au lieu de 15 EUR et autorisation explicite de mettre le Sheet a jour. Une question asynchrone demande si ce GO couvre aussi les textes et visuels Shopify ; aucune reponse recue au moment de ce checkpoint.

## Execute et verifie

- Les trois payloads colliers utilisent desormais `price=14.90`, un `source.owner_price_override` date du 2026-09-05 et attribue a Patrice Allie, et `price_mutation_allowed=false`. Le prix conseille CAN de 15 EUR reste conserve comme preuve fournisseur. Le contrat final passe pour les trois payloads corriges.
- Shopify a ete relu uniquement sur les trois IDs P1 : ACTIVE, prix 14,90 EUR, suivi actif, DENY, stocks 4/2/2 et handles historiques. Aucune mutation Shopify.
- Sheet `1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM`, onglet `Inventaire canonique`, sheetId `1034959372` : lignes 50 (obsidienne), 51 (quartz rose), 332 (aventurine) synchronisees. Identifiants, statuts, titres actuels, URL publiques/Admin, SKU/barcodes, pierres, collections et image actuelles, preuves et date mis a jour. Prix TTC de travail O50/O51/O332 = 14,90 EUR ; source P = Shopify TTC. Source CAN et disponibilite renseignees pour l'aventurine.
- La formule C332 tient maintenant compte du rapprochement X332 pour afficher `VENDRE LE STOCK PHYSIQUE`, sans rester bloquee sur `FICHE A RAPPROCHER`. Toutes les autres formules existantes sont identiques.
- 23 requetes atomiques, 48 cellules visees, pullback CellData : valeurs attendues, stock physique A, couts, autres formules, validations et styles preserves. Huit URL ont recu automatiquement un lien natif strictement egal a leur valeur ; aucune autre difference de format. Le premier rapport strict signalait ces liens comme differences, puis `sheet-sync-verification-final.json` les verifie et conclut PASS.
- Les statuts photo AK restent inchanges. Les formules feed indiquent `NON - PHOTO NON VALIDEE` ; aucune eligibilite Ads ou publication inferee. `availability_mode` reste absent de Shopify : AG n'a pas ete rempli artificiellement. AF conserve ses anciennes quantites, sous son libelle historique non fiable.
- La revue privee affiche 14,90 EUR, trois lignes Sheet synchronisees et Shopify en attente. Chargement et absence d'image visible en erreur verifies dans le navigateur. Le rendu Google natif necessite une connexion dans le navigateur Codex ; verification des valeurs/formules/styles faite via le connecteur CellData sans demander de nouvelle authentification.

## Preuves

Dossier de travail : `/Users/paesano/.codex/visualizations/2026/09/05/01a0708c-b881-7b41-bbf0-c0aa9d4ac367/catalogue-p1/`.

Copie canonique : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-05-p1-enrichment-review/`.

139 fichiers verifies par SHA-256 ; 22 fichiers ajoutes ou actualises depuis la revue initiale. Versions remplacees conservees dans `.sync-backups/2026-09-05-102823/`.

Fichiers nouveaux ou actualises utiles : `price-decision-2026-09-05.json`, `shopify-before-sheet-sync.json`, `sheet-before-authorized-sync.json`, `sheet-sync-request.json`, `sheet-sync-response.json`, `sheet-after-authorized-sync.json`, `sheet-sync-verification-final.json`, `batch-manifest.json`, `mutation-preview.json`, trois `product_enrichment.json`, `REVIEW.html`.

## Suite et limites

Le Sheet reflète le contenu actuellement present dans Shopify, pas les nouveaux enrichissements prives. Le GO Shopify n'est pas presume depuis l'autorisation nommant uniquement le Sheet. Attendre la reponse a la question deja posee. Si GO Shopify explicite : mettre a jour les trois fiches en place avec les textes/galeries presentes, conserver 14,90 EUR, IDs, variantes, handles, ACTIVE et stocks, verifier puis actualiser le Sheet avec les nouveaux contenus. Ne pas repeter la synchronisation actuelle en aveugle.

Le chapelet reste en attente du nombre total de perles et du sens des 78 cm. Hematite et cadeau intacts ; nouvelle galerie non autorisee. Les 18 P2 restent a traiter apres le lot en cours. Aucun theme, produit, stock, prix Shopify, remise, canal ou Ads modifie.

Documentation Git : seuls ce checkpoint et la ligne d'etat P1 du registre sont a committer. Les modifications concurrentes du checkout d'integration restent preservees. La proposition de prix 15 EUR des checkpoints precedents est remplacee par la decision presente pour les trois colliers uniquement.
