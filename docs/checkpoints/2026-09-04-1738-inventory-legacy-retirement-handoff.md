# Handoff MilAura : retirer l'ancien catalogue, puis intégrer deux commandes

Date : 2026-09-04 17:38 CEST. Auteur : Codex, tâche `Reprendre inventaire MilAura`.
Statut : `PASSATION DOCUMENTEE ; RETRAIT LEGACY NON EXECUTE`.

## 1. Décision de Patrice et résultat attendu

Patrice a terminé sa revue et déclare avoir activé lui-même tous les produits qu'il considère finalisés. Les produits du Sheet restés en DRAFT le sont volontairement. Leur statut ne doit pas être modifié par déduction, même si leur contrôle technique est PASS.

[DECISION 2026-09-04] Le catalogue en ligne doit contenir uniquement les produits du Sheet canonique traités dans ce chantier d'inventaire et de création/enrichissement, toutes sessions confondues, puis les nouveaux articles acceptés ultérieurement. Le périmètre à protéger ne se limite ni au dernier lot de 47, ni aux créations de septembre, ni aux seuls nouveaux IDs.

[DECISION 2026-09-04] Tous les anciens produits hors de ce périmètre doivent quitter la vente, doublon ou non, y compris les savons. Ne conserver aucune ancienne fiche en ligne pour sa ressemblance avec une nouvelle, son prix, son SEO, son trafic, une sélection éditoriale ou une recommandation existante. Ne pas fusionner, convertir ou réenrichir ces anciennes fiches à la place du retrait demandé.

Patrice a d'abord dit « supprimer », puis précisé « désactiver ou passer en brouillon » et vouloir pouvoir récupérer lui-même certaines références. L'opération retenue est donc réversible : passer les anciens produits en DRAFT ; conserver leurs données et les produits déjà non actifs sans les réactiver. Pas de suppression définitive de masse. Les six suppressions définitives pour cadeaux déjà exécutées sont une exception close, non extensible.

Une éventuelle récupération d'un ancien produit appartiendra à Patrice, manuellement, puis à une session spécifique de mise au nouveau workflow. Ne proposer aucune exception de conservation commerciale pendant le nettoyage.

La demande présente autorise la rédaction de cette passation, pas l'exécution du retrait dans cette clôture. Le mandat de retrait est transmis à la future session : contrôle préalable des identités, sauvegarde, passage en DRAFT des seuls anciens produits, vérification. Si une identité n'est pas résolue, demander une clarification ciblée ; ne pas réouvrir la décision de retirer tous les anciens produits.

## 2. Vérité actuelle et limites

- Dernier lot : 47 DRAFT créés et contrôlés, 235 images, Sheet synchronisé le 2026-09-04 à 15:23. C'est une preuve historique de création, pas le statut actuel après les activations manuelles de Patrice.
- Six de ces fiches ont ensuite été supprimées définitivement à sa demande, avec six HTTP 200, six IDs absents, zéro variante au barcode exact et six URL publiques HTTP 404. Vérification terminée à 16:56:43 CEST.
- Les lignes Sheet 293 à 298 ont été réconciliées : 108 écritures ciblées, 270 cellules comparées, stocks physiques et coûts préservés. Disposition `customer-advantage`, action `excluded-non-sale`, pas de recréation.
- Les 41 autres fiches du dernier lot n'ont pas été mutées lors de ces suppressions. Leur état live n'a pas été relu ensuite. Ne pas les annoncer toutes DRAFT, toutes ACTIVE ou toutes publiques.
- Les nombres historiques 175/182/185 références, 456 unités, 708 produits Shopify et les anciennes positions de file ne constituent pas un inventaire actuel. Aucun total d'anciens produits à retirer n'est établi dans ce handoff.
- Le jeton utilisé pendant la création n'avait pas `read_publications`. Recontrôler les capacités de lecture au démarrage. Une URL publique et un statut ne prouvent pas tous les canaux de vente. Ne pas élargir des scopes sans autorisation.
- Aucun audit Shopify/Sheet global ni aucune mutation commerciale n'a été effectué pendant cette clôture documentaire. L'affirmation d'activation de tous les produits finalisés vient de Patrice ; l'audit live est le premier travail de la reprise.

## 3. Sources exactes à reprendre

Projet thème et documentation : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.

Workspace produit privé : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`.

Sheet : [MILAURA - Inventaire physique canonique](https://docs.google.com/spreadsheets/d/1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM/edit#gid=1034959372), ID `1QrtP77A-6FUmzOaOdD9U5CigCbrRpDWH5GTb7N1NUbM`, onglet `Inventaire canonique`, sheetId `1034959372`. Lire ses métadonnées et ses en-têtes avant toute lecture/écriture bornée. Les numéros de ligne historiques ne remplacent pas l'EAN.

Dans le workspace produit, rapprocher au minimum ces familles de preuves, jamais un seul manifeste :

| Source relative au workspace privé | Rôle |
| --- | --- |
| `data/catalogue-batches/2026-08-25-physical-stock-175/ledger.json` | Historique consolidé des créations et remises à niveau, avec IDs existants réutilisés |
| `data/catalogue-batches/2026-08-25-physical-stock-175/consolidated-185.json` et `source/sheet-positive-185.json` | Correspondances historiques, non source de stock actuel |
| `data/catalogue-batches/2026-08-25-physical-stock-175/batches/`, `legacy-active/`, `draft-update-07/`, `next-10-2026-08-29/` | Preuves des premières sessions, produits enrichis sur d'anciens IDs, lots suivants |
| `data/catalogue-batches/2026-09-01-inventory-next-10-v4/manifest.json` | Lot V4 précédent, dont chaîne dorée et contrôle cross-sell |
| `data/catalogue-batches/2026-09-01-inventory-next-10-v4-lot-22/manifest.json` | Lot 22 |
| `data/catalogue-batches/2026-09-02-inventory-next-10-v4-1-lot-23/manifest.json` | Lot 23, dix créations et pullbacks |
| `data/catalogue-batches/2026-09-03-inventory-final-47-v4-1/manifest.json` | État privé courant FINAL47, six exclusions cadeaux ; pas les sous-manifestes `parts/` historiques |
| `data/catalogue-batches/2026-09-03-inventory-final-47-v4-1/delivery-verified-2026-09-04.json` | 47 identités créées, preuve historique avant les six suppressions |
| `data/catalogue-batches/2026-09-03-inventory-final-47-v4-1/decisions-2026-09-04-gifts-six/decisions.json` | Six suppressions et cinq décisions visuelles de Patrice |

Le dossier `legacy-active/` peut contenir des fiches anciennes effectivement retravaillées et acceptées dans le nouvel inventaire. Son nom ne les classe pas automatiquement parmi les produits à retirer. De même, un ID ancien ou une galerie historique acceptée à six images n'est pas un motif de retrait si l'identité est canonique et traitée/validée dans ce chantier. Exemple historique : Ornel, ID 10670433993051, accepté avec six images. Ne pas confondre conformité technique V4.1 rétroactive et appartenance au catalogue validé.

Checkpoints utiles, relatifs au repo thème :

- `docs/checkpoints/2026-08-28-1815-inventory-71-active-v3-handoff.md`
- `docs/checkpoints/2026-08-29-1621-inventory-seven-active-next-ten-handoff.md`
- `docs/checkpoints/2026-08-30-0906-inventory-next-ten-content-fix.md`
- `docs/checkpoints/2026-08-30-1130-inventory-active-catalogue-content-fix.md`
- `docs/checkpoints/2026-09-01-1219-inventory-v4-ten-active-crosssell.md`
- `docs/checkpoints/2026-09-01-1457-inventory-v4-lot-22-drafts.md`
- `docs/checkpoints/2026-09-02-1046-inventory-v4-1-lot-23-drafts.md`
- `docs/checkpoints/2026-09-04-1523-inventory-final47-drafts.md`
- `docs/checkpoints/2026-09-04-1659-inventory-gifts-six-deleted.md`

Les preuves sous `/private/tmp` mentionnées par d'anciens checkpoints peuvent disparaître. Chercher les reçus durables et refaire la lecture live nécessaire, jamais inventer un statut faute de fichier temporaire.

## 4. Première mission : retrait de tout l'ancien catalogue

### A. Établir les listes en lecture seule

1. Lire les AGENTS applicables, ce handoff, le Sheet frais, puis l'ensemble paginé des produits Shopify de la boutique exacte `milaura-2` / `milaura.fr`, tous statuts. Pas seulement les 250 derniers, une collection, les actifs ou un export historique.
2. Construire une liste complète des IDs canoniques protégés à partir du Sheet ET des preuves de toutes les sessions. Pour chaque produit : ligne actuelle, EAN/SKU, ID produit, IDs variante, nom lisible, statut live, publication/URL prouvées et preuve du traitement. Séparer les nouveaux actifs des nouveaux DRAFT volontaires.
3. Un même EAN peut exister sur un ancien ID et un nouvel ID : protéger uniquement l'identité canonique prouvée ; retirer l'ancien doublon. Ni le titre, ni le handle, ni la date de création, ni le nombre d'images, ni la présence seule d'un EAN ne suffit pour décider.
4. Figer une liste distincte des anciens IDs à passer en DRAFT, des anciens IDs déjà hors vente et des identités ambiguës. Les six cadeaux supprimés ne doivent figurer ni dans les créations à refaire ni dans les produits à activer.
5. Vérifier que les listes protégée et à retirer sont disjointes et que le classement couvre tout le catalogue. Résoudre les identités ambiguës avant les mutations les concernant. Présenter un bilan avec noms et liens Admin, pas uniquement des EAN. Aucun total de ce handoff ne remplace ce calcul.

### B. Exécuter le retrait réversible et vérifier

- Sauvegarder les six champs d'identité/statut essentiels et les données complètes utiles au retour arrière, ainsi que les canaux observables, dans une zone privée datée. Prévoir un journal avant/après par ID.
- Relire immédiatement chaque cible et les exclusions avant mutation. Passer seulement les anciens produits actifs en DRAFT, sans réécrire titres, textes, SEO, handles, prix, coûts, médias, métachamps ou stocks. Les anciens déjà DRAFT/ARCHIVED restent hors vente, sans conversion inutile.
- Ne jamais utiliser une mise à jour de masse basée uniquement sur « non présent dans le dernier lot » ou « créé avant septembre ». Aucun DELETE de masse, aucune fusion, aucune réactivation et aucun zéro artificiel sur les stocks.
- Vérifier l'état persistant par ID, l'absence de fiche publique achetable, les collections/recherche, recommandations Ruban/Mon Écrin et canaux/feed accessibles. Ne pas lancer de commande ni de dépense de test. Signaler les propagations différées Meta/Google/Pinterest ou capacités manquantes sans prétendre un PASS global.
- Les liens Home, pages, Search & Discovery et anciens placements peuvent encore viser des références retirées : relever les destinations cassées, sans conserver l'ancien produit pour les masquer et sans modifier automatiquement le thème ou les mappings protégés. Demander un lot correctif ciblé si nécessaire.
- Recontrôler les IDs protégés : statuts actifs/brouillons inchangés, aucun changement de stock, prix, contenu, SEO, handles, cinq images ou galerie historique acceptée, métachamps et canaux. Une activation manuelle survenue en parallèle impose une nouvelle comparaison, pas son annulation.
- Synchroniser ensuite le Sheet et les registres sur les seuls faits vérifiés, en conservant formules, coûts, quantités physiques et preuves. Livrer la liste lisible des anciens retirés et le nombre réellement calculé.

Critères de fermeture : zéro ancien ID encore actif ou achetable sur les surfaces contrôlées ; zéro produit canonique modifié par erreur ; zéro brouillon volontaire activé ; reçus complets. Si un canal n'est pas vérifiable, nommer précisément cette limite.

## 5. Exceptions et décisions à ne pas perdre

| Référence | Décision du 2026-09-04 | Identité |
| --- | --- | --- |
| Grenouille en quartz rose 50 mm | Visuel accepté. Aucun GO d'activation à déduire ; lire le statut actuel décidé par Patrice. | EAN 3701459064779, ID 10694373769563, ancienne ligne 287 |
| Calendrier Réf. 69927 | Refusé, ne pas intervenir avant réception des vraies photos. | EAN 3701459069927, ID 10694307709275, ancienne ligne 268 |
| Calendrier Réf. 69910 | Même décision. | EAN 3701459069910, ID 10694309445979, ancienne ligne 269 |
| Calendrier Réf. 66896 | Même décision. | EAN 3701459066896, ID 10694309871963, ancienne ligne 270 |
| Coffret découverte purification | Même décision. | EAN 3701459055838, ID 10694313541979, ancienne ligne 278 |

La validation de la grenouille ne transforme pas rétroactivement l'absence de photo source exacte en contrôle de fidélité PASS. Les quatre refusés restent des produits du nouvel inventaire protégés, malgré leurs visuels refusés et leur statut DRAFT volontaire. Tous les autres DRAFT canoniques volontaires sont également protégés.

Les six cadeaux, supprimés et exclus :

| Produit | EAN | Ancien ID supprimé |
| --- | --- | --- |
| Améthyste Brésil 40 à 50 mm | 3701459060016 | 10694393790811 |
| Améthyste Brésil AA 20 à 30 mm | 3701459003600 | 10694393889115 |
| Aventurine verte 40 à 60 mm | 3701459060023 | 10694394118491 |
| Calcédoine bleue sur gangue 30 à 40 mm | 3701459049356 | 10694395363675 |
| Obsidienne noire, format à confirmer | 3701459060122 | 10694395724123 |
| Quartz rose Brésil 30 à 40 mm | 3701459023387 | 10694396739931 |

Les quantités physiques conservées sont respectivement 1, 10, 3, 2, 5 et 18, sans qualification nouvelle des unités/conditionnements. Ne pas recréer ces produits.

## 6. Deuxième mission : les deux commandes de cette semaine

Après le retrait des anciens produits, Patrice transmettra la liste des deux commandes passées cette semaine. Listes, dates précises, factures, prix et quantités ne sont pas fournis à cette clôture. Ne rien inventer et ne pas chercher dans ses messages privés par défaut.

À réception : intégrer les achats dans le Sheet canonique et les onglets d'achat pertinents, identifier les nouvelles références et le réassort exact des références déjà canoniques. Préserver les lignes d'achat historiques ; vérifier EAN, unité/lot, quantité reçue, coût et prix documenté. Une quantité commandée n'est pas une quantité physique reçue.

- Réassort d'un produit déjà canonique : rattacher à son ID exact, sans créer une deuxième fiche du nouvel inventaire.
- Article présent seulement dans l'ancien catalogue : laisser l'ancienne fiche DRAFT, puis appliquer le workflow courant pour sa nouvelle fiche canonique. Les savons ne bénéficient d'aucune exception.
- Nouvelle référence réelle : ajout au Sheet et préparation complète sous workflow V4.1, puis DRAFT après GO portant sur la liste identifiée. Le souhait « mettre sur le site » est l'objectif final, pas une autorisation de publier silencieusement une galerie future non vue par Patrice.

Les anciens GO FINAL47, l'exception des cinq sources visuelles et l'autorisation temporaire des six prix nuls sont épuisés. Ils n'autorisent aucun nouveau produit, prix nul ou visuel provisoire. Activation/publication futures restent soumises à un GO explicite ou à l'action manuelle de Patrice.

Workflow à lire dans le workspace privé : `AGENTS.md` et `docs/milaura-product-agent-contract.md`. Copywriting : skill `onora-copywriting` et guide du repo `docs/reference/2026-08-12-copywriting-milaura.md`. Création d'images : skills applicables, source produit exacte, cinq images et contrôle pleine résolution, prix/unité/coût/stock/SEO/handles/métachamps et pullback par IDs.

Exigence créative maintenue : Chloé/Elena sont des ancres d'identité, jamais des tenues à copier. Contraste lisible tenue-produit, pas de tee-shirt gris repris du fichier de référence, pas d'accessoires concurrents. Scènes calmes avec douceur et présence végétale ou organique aux slots 3/4 ; lifestyle distinct au slot 5 ; échelle, montage, couleur, nombre de composants et anatomie vérifiés. Ne pas reprendre rétroactivement les galeries acceptées sans demande.

## 7. Clôture, Git et périmètres conservés

- Cette clôture écrit uniquement la documentation de reprise et son miroir Obsidian. Elle ne retire aucun ancien produit et ne modifie ni Sheet, ni Shopify, ni thème, ni Ads.
- Avant clôture : repo thème sur `codex/milaura-integration`, HEAD `2570a6b0536ad8e419e6c14b78422f6a250ed3a8`, aligné sur son upstream local ; index vide. CI, AGENTS, docs partagées et plusieurs fichiers non suivis étaient déjà modifiés. Préserver les HEIC et `docs/codex-handoff 2.md`.
- Agentic-Ops : branche `main`, en retard de 49 commits selon les refs locales, 313 lignes de statut avec de nombreux travaux concurrents. Aucune synchronisation ni mutation Git de ce dépôt. Le workspace produit privé reste hors versionnement.
- Les changements de documentation inventaire sont à versionner seuls : aucune inclusion des autres changements des fichiers partagés. Aucune fusion de `origin/main`, aucun reset/clean et aucun déploiement. Le reste du checkout peut demeurer sale sans appartenir au lot.
- Les sauvegardes pré-handoff et états Git sont dans `/private/tmp/milaura-handoff-20260904-KZPCdA/`. Ce dossier temporaire n'est pas la source de reprise. Les checkpoints, le Sheet, les preuves privées et le miroir Obsidian le sont.
- Aucun changement de mémoire Codex n'est demandé. Le miroir Obsidian suffit pour cette passation.

## Prompt de reprise à copier

```text
Reprends le catalogue MilAura depuis docs/checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md. Commence en lecture seule : Sheet canonique, Shopify paginé et preuves de toutes les sessions d'inventaire. Identifie par EAN et IDs exacts tous les produits canoniques à protéger, y compris les anciens IDs réenrichis et tous les brouillons volontaires. Patrice a activé manuellement les produits qu'il considère finalisés. Puis retire de la vente tous les autres anciens produits en les passant en DRAFT, sans suppression définitive, même en cas de doublon ou de savon. Sauvegarde, journalise et vérifie le retrait et l'absence de modification des produits protégés. Les six cadeaux sont déjà supprimés et ne doivent pas être recréés. Grenouille quartz rose validée ; trois calendriers et coffret refusés, intouchables avant les vraies photos. Après ce nettoyage, attends les listes des deux commandes fournisseur que Patrice transmettra, puis intègre achats/réassorts/nouvelles références au Sheet et au workflow V4.1. Aucun nouveau produit, activation ou publication sans GO adapté ; aucun thème ou Ads dans ce lot. Préserve les travaux Git concurrents.
```
