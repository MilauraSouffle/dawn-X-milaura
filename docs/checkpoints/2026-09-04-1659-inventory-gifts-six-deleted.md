# MilAura : six fiches supprimées, stock privé cadeaux

Décision Patrice et exécution : 2026-09-04. Réconciliation privée terminée à 16:59 CEST.

Ce checkpoint complète et remplace l'état courant du bilan de création `2026-09-04-1523-inventory-final47-drafts.md`. Celui-ci reste une preuve historique de la création des 47 DRAFT, pas un état actuel de Shopify.

## Décision et résultat

Patrice a explicitement demandé la suppression définitive de six fiches à prix provisoire nul, après identification visuelle. Il conserve ces stocks physiques pour les offrir dans les colis, hors vente. Aucun prix commercial ni conditionnement de vente n'est désormais à arbitrer pour ces six références.

| Produit supprimé | EAN | ID produit supprimé | ID variante supprimé | Ligne Sheet | Quantité physique conservée |
| --- | --- | --- | --- | --- | --- |
| Améthyste du Brésil, 40 à 50 mm | 3701459060016 | 10694393790811 | 53971965870427 | 293 | 1 |
| Améthyste du Brésil AA, 20 à 30 mm | 3701459003600 | 10694393889115 | 53971969278299 | 294 | 10 |
| Aventurine verte, 40 à 60 mm | 3701459060023 | 10694394118491 | 53971969900891 | 295 | 3 |
| Calcédoine bleue sur gangue, 30 à 40 mm | 3701459049356 | 10694395363675 | 53971993755995 | 296 | 2 |
| Obsidienne noire, format à confirmer | 3701459060122 | 10694395724123 | 53971994542427 | 297 | 5 |
| Quartz rose du Brésil, 30 à 40 mm | 3701459023387 | 10694396739931 | 53971995820379 | 298 | 18 |

Les quantités sont les valeurs d'inventaire conservées, pas une certification d'un nombre de pierres à l'unité. Le conflit historique de conditionnement de l'obsidienne n'a pas été arbitré.

## Preuve Shopify

- Avant toute suppression : rapprochement du manifeste, du Sheet et de Shopify par ID produit, ID variante, EAN et SKU. Les six fiches étaient DRAFT, à 0,00 EUR, avec les stocks attendus et cinq images.
- Sauvegarde privée complète des six réponses produit REST, données GraphQL, métachamps produit et variante, niveaux d'inventaire, manifeste et cellules Sheet. Assets locaux d'origine conservés.
- Relecture des six fiches, puis nouvelle relecture immédiate avant chaque DELETE. Empreinte du produit inchangée depuis sa sauvegarde.
- Six DELETE exacts ont répondu HTTP 200 entre 16:56:30 et 16:56:39 CEST. Aucun DELETE répété.
- Contrôle final terminé à 16:56:43 CEST : six IDs produit absents, zéro variante au barcode exact pour chaque EAN, six URL publiques HTTP 404.
- Aucun autre produit muté. Aucune activation, publication, modification de canal, de thème, de publicité ou de stock physique.

Suppression définitive : les anciens IDs ne peuvent pas être rétablis par une annulation Shopify. Les données privées conservées sont une sauvegarde de référence, pas une restauration automatique. Toute recréation future exigerait une nouvelle autorisation explicite.

## Sheet et exclusion des prochaines créations

[Sheet canonique, lignes 293 à 298](https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit#gid=1034959372&range=A293:AS298).

108 écritures cellulaires ciblées, 270 cellules comparées avant et après. Quantités physiques A, EAN/source, achats, coûts, prix de travail vides, calculs financiers et photos fournisseur conservés. Aucun déplacement ni suppression de ligne.

- P : `HORS VENTE - cadeaux surprise dans les colis - décision Patrice 2026-09-04`.
- C : formule d'origine conservée dans une branche, précédée d'un garde-fou HORS VENTE ; affiche `RÉSERVÉ AUX CADEAUX COLIS - HORS VENTE`.
- X, Y, AA, AB, AC, AD, AE, AF, AG, AI et AM : miroir Shopify vidé, liens obsolètes retirés.
- Z : `SUPPRIMÉ - HORS VENTE`. AK : validation photo sans objet pour ces produits hors vente.
- AP : preuve de suppression avec anciens IDs exacts. AQ : exclusion et interdiction de recréer. AR : formule d'origine conservée avec garde-fou cadeaux colis.
- AN : `NON - SHOPIFY ABSENT`. AO : `NON - VOIR FEED`.

Formats visuels, notes cellulaires et validations inchangés. Seules les métadonnées des douze liens Shopify vidés ont été supprimées automatiquement avec leurs valeurs. Aucune erreur de formule. Vérification par API native ; inspection visuelle du Sheet dans un navigateur non réalisée, l'accès authentifié étant indisponible lors de la passe précédente.

Le manifeste privé classe les six références `catalogue_disposition=customer-advantage`, `classification=excluded-non-sale`, `action=excluded-non-sale`. Les anciens IDs restent dans l'historique, les IDs courants sont nuls, le statut est DELETED. Les stocks et coûts restent inchangés. Le créateur historique exige `action=create-draft` : ces six références ne satisfont plus ce prérequis. Le snapshot source historique les excluait déjà pour cadeaux.

Les 41 autres objets produit du manifeste sont strictement inchangés. Leur statut live n'a pas été réaudité pendant cette intervention ciblée ; ne pas affirmer que les 41 sont encore DRAFT.

## Décisions visuelles, sans intervention sur les fiches

Consignées séparément dans le registre privé. Aucune écriture Shopify ni Sheet sur ces cinq références pendant cette passe.

- Grenouille en quartz rose 50 mm, EAN 3701459064779, ID 10694373769563, ligne 287 : visuel accepté par Patrice. Cette acceptation n'est pas une activation ni une publication. Elle ne transforme pas rétroactivement l'absence de photo source exacte en contrôle de fidélité PASS.
- Calendrier Réf. 69927, EAN 3701459069927, ID 10694307709275, ligne 268 : visuels refusés.
- Calendrier Réf. 69910, EAN 3701459069910, ID 10694309445979, ligne 269 : visuels refusés.
- Calendrier Réf. 66896, EAN 3701459066896, ID 10694309871963, ligne 270 : visuels refusés.
- Coffret découverte purification, EAN 3701459055838, ID 10694313541979, ligne 278 : visuels refusés.

Les quatre refusés sont laissés en brouillon conformément à la décision de Patrice, sans intervention. Attendre les vraies photos de ses produits physiques lors d'une prochaine session. Ni régénération, ni réécriture, ni activation, ni publication avant cette reprise et son autorisation.

## Preuves privées

Racine : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-03-inventory-final-47-v4-1/`.

- `manifest.json` : état courant et exclusions.
- `decisions-2026-09-04-gifts-six/manifest-before.json` : sauvegarde avant changement.
- `decisions-2026-09-04-gifts-six/decisions.json` : six suppressions et cinq décisions visuelles.
- `decisions-2026-09-04-gifts-six/before-<EAN>.json` et `delete-<EAN>.json` : sauvegardes et reçus exacts.
- `decisions-2026-09-04-gifts-six/verification-165643.json` : absence Shopify et HTTP public 404.
- `decisions-2026-09-04-gifts-six/sheet-before.json`, `sheet-after.json`, `sheet-requests.json`, `sheet-verification.json` : réconciliation ciblée.
- Scripts de suppression et de réconciliation archivés dans ce même dossier. Ce sont des preuves d'exécution, pas des instructions de relance.

## Reprise

Repartir de ce checkpoint et du registre privé de décisions. Les six cadeaux ne sont plus des produits absents à créer. Pour les trois calendriers et le coffret, attendre les vraies photos de Patrice et une demande de reprise. La grenouille a son GO visuel uniquement. Aucune nouvelle création, activation ou publication n'est autorisée par cette clôture.

Documentation de cette passe : ce checkpoint et la seule ligne FINAL47 de `docs/workstreams.md`. Changements concurrents du dépôt préservés. Aucun commit, push ou déploiement effectué.
