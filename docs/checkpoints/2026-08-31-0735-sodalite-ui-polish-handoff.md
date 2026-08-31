# Handoff Rentrée / Septembre Sodalite, reprise du polish UI

Date : 2026-08-31 07:35 CEST

Statut produit selon Patrice : `ENVIRON 70 % - GROS DU DÉVELOPPEMENT FAIT - POLISH UI IMPORTANT OUVERT`

## Prompt de reprise court

```text
Salut Codex, reprends le polish UI Rentrée / Septembre Sodalite. Lis AGENTS.md puis uniquement docs/checkpoints/2026-08-31-0735-sodalite-ui-polish-handoff.md. Commence en lecture seule sur le live, capture 360/390/430/1440, échange avec moi et classe les défauts avant toute proposition de lot. Aucun code, thème, Admin, Ads ou live sans réservation et GO séparés.
```

Ne charge pas les anciens checkpoints Sodalite ni le gros plan global sauf blocage précis. Ce fichier remplace leurs états intermédiaires pour cette reprise de polish.

## Décision de Patrice au 2026-08-31

Patrice considère que le gros de la feature est développé, intégré et publié. Il signale néanmoins de nombreux problèmes visuels et demande un important polish UI, accompagné de quelques améliorations de développement. Son estimation actuelle est d'environ 70 %.

Cette appréciation produit prévaut sur les précédents statuts de fermeture technique. Les anciens `PASS` prouvent la stabilité, les routes et l'absence de débordement. Ils ne signifient pas que le rendu visuel actuel est accepté comme fini.

Les défauts visuels ne sont pas encore inventoriés précisément. La nouvelle session doit commencer par montrer le live à Patrice, recueillir ses remarques écran par écran et établir avec lui la liste priorisée avant de modifier quoi que ce soit.

## Vérité Git et propriétaires

- Dépôt canonique : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche canonique : `codex/milaura-integration`.
- Vérité observée au 2026-08-31 07:35 CEST : `HEAD = origin/codex/milaura-integration = 886c384661619099befd0c938c422d21a675c35e`.
- La clôture Sodalite `db5091bf27223b1544b1b48267c3f402239df4fe` est un ancêtre de ce HEAD.
- Le master reste la tâche `01a03e8e-aa31-76e1-937a-a4aeb6706c82`. Il est seul propriétaire de l'intégration et du live.
- Ce checkpoint est écrit depuis la branche historique `codex/milaura-rentree-sodalite-release-20260829`, uniquement parce que les documents canoniques sont occupés par le lot Mon Écrin. Le master doit intégrer sélectivement ce checkpoint.
- Le fichier utilisateur non suivi `docs/codex-handoff 2.md` ne doit jamais être modifié.

Commits de fermeture à connaître :

- `5912d55132650405760f99c08a49dc55ffd9e73a` : section de landing dédiée et liens permanents préparés.
- `8fb04658` : intégration de la release privée dédiée.
- `ad451429` : restauration du copy et du layout home validés.
- `bef6bdda` : restauration de l'état final vidéo et du libellé `Revoir`.
- `db5091bf27223b1544b1b48267c3f402239df4fe` : clôture canonique du live Sodalite.

Les anciens worktrees Sodalite encore présents sont historiques, gelés et sans droit d'écriture. La prochaine session doit utiliser une nouvelle branche et un nouveau worktree enregistrés dans `docs/workstreams.md` après réservation du master.

## État live vérifié

Vérification read-only du 2026-08-31 :

- thème live : `190430282075` ;
- thème de développement : `199421952347` ;
- thème privé Sodalite historique : `200259043675`, non publié ;
- `https://milaura.fr/` : HTTP 200 ;
- `https://milaura.fr/collections/selection-de-karine` : HTTP 200 ;
- `https://milaura.fr/collections/par-pierre-sodalite` : HTTP 200 ;
- `https://milaura.fr/collections/selection-aout-2026` : HTTP 200.

La campagne Sodalite est actuellement visible sur la home et dans la navigation. Le CTA et les liens desktop/mobile pointent vers la route permanente `/collections/selection-de-karine`, sans `?view=selection-de-karine`.

La collection Shopify `Selection de Karine`, ID `679358333275`, utilise le template `selection-de-karine`, contient 17 produits et est publiée sur Boutique en ligne uniquement. Sa route publique possède un canonical propre vers `/collections/selection-de-karine`.

La collection permanente `Sodalite`, ID `679358234971`, handle `par-pierre-sodalite`, reste publique avec les mêmes 17 produits. L'ancienne sélection d'août reste publique et inchangée. Aucune suppression ou redirection de `selection-aout-2026` n'a été exécutée.

## Ce qui fonctionne techniquement

Les contrôles de fermeture du 2026-08-30 ont prouvé :

- home et landing sans overflow à 360, 390, 430 et 1440 px ;
- vidéo desktop et vidéo mobile servies selon le viewport ;
- vidéo home avec `loop=false`, gel sur l'état final, bouton et aria `Revoir`, relance explicite à zéro puis nouveau gel final ;
- copy home exact : `Septembre 2026`, `La sodalite`, `la pierre de votre rentrée` et texte de Karine ;
- Dancing Script prune sur le titre ;
- Bracelet Horus comme produit star ;
- landing avec 1 produit star et 16 cartes, soit 17 produits uniques ;
- destination permanente HTTP 200 et canonical propre ;
- navigation desktop/mobile et CTA home vers la route permanente ;
- ancienne route d'août toujours HTTP 200 ;
- Theme Check à 0 erreur, avec 16 warnings historiques hors lot ;
- pullbacks live identiques aux fichiers Git pour chaque push ciblé.

Ces preuves constituent un baseline technique. Elles ne ferment pas le nouveau polish visuel demandé par Patrice.

## Travail restant, sans présumer des défauts

Objectif : transformer la feature stable actuelle en expérience visuellement aboutie, sans rouvrir inutilement l'architecture ou les médias déjà livrés.

Ordre de reprise obligatoire :

1. Lecture seule de Git, des worktrees, des propriétaires et des trois thèmes Shopify.
2. Captures du live sur la home et la landing à 360, 390, 430 et 1440 px.
3. Captures des états vidéo début, fin fixe et relecture, ainsi que des jonctions hero, produit star, catalogue, header et dock mobile.
4. Revue avec Patrice. Noter ses défauts réels, les classer en P0, P1 ou P2 et distinguer UI, responsive, interaction et amélioration de développement.
5. Proposer le plus petit lot cohérent, avec liste exacte des fichiers et droits nécessaires.
6. Demander la réservation au master avant toute édition.
7. Construire et tester d'abord sur un thème privé autorisé. Le GO visuel Patrice, l'intégration master et le live restent des gates séparés.

Zones candidates à auditer, sans autorisation implicite de les modifier :

- `sections/milaura-selection-atelier.liquid` pour la section Sodalite de la home ;
- `sections/milaura-sodalite-landing.liquid` pour la landing dédiée ;
- `templates/index.json` et `templates/collection.selection-de-karine.json` pour leurs réglages exacts ;
- `assets/milaura-seasonal-media.js` uniquement si un défaut d'interaction est reproduit.

Ne pas inclure automatiquement les vidéos ou posters. Les médias actuels ont été validés et doivent rester intacts sauf demande explicite de Patrice. Ne pas réutiliser `sections/milaura-seasonal-collection.liquid` ou le template d'août pour corriger la nouvelle landing dédiée.

## Protections et gates

- Aucun Ads ne doit être lancé.
- Aucun nouveau crédit créatif ou génération vidéo sans GO explicite.
- La vidéo sociale 16:9 distincte évoquée pour Meta/Pinterest n'a pas été produite ni validée comme livrable final dans ce lot. La traiter séparément si Patrice la remet dans le scope.
- Aucun produit, prix, coût, stock, statut, ordre de collection ou contenu catalogue sans GO Admin exact.
- Aucun handle, canonical, redirection ou suppression de collection sans audit et gate SEO/Admin séparés.
- Ne jamais modifier ni rediriger `selection-aout-2026` sans audit Search Console, Analytics et backlinks, puis décision explicite de Patrice et du master.
- Ne jamais restaurer une route finale avec `?view=selection-de-karine`.
- Aucun push sur le développement, le live ou un thème privé avant réservation exacte du thème et des fichiers.
- Aucun document canonique ne doit être modifié depuis une session parallèle sans réservation.
- Le master reste seul propriétaire de l'intégration et du live.

## Premier retour attendu de la nouvelle session

Le premier retour à Patrice doit être court et uniquement factuel :

- état Git, worktrees, propriétaires et thèmes ;
- URLs et état live ;
- captures disponibles aux quatre largeurs ;
- liste des défauts explicitement signalés par Patrice, sans interprétation abusive ;
- proposition du plus petit lot ;
- fichiers et droits exacts à réserver au master.

La prochaine session ne doit pas commencer par coder. Elle doit d'abord regarder le live avec Patrice.

## État de cette clôture documentaire

- Aucun fichier thème modifié.
- Aucun push Shopify.
- Aucun Admin.
- Aucun Ads.
- Aucun produit, prix, stock, collection, handle ou redirection modifié.
- `docs/project-state.md`, `docs/codex-handoff.md` et `docs/workstreams.md` restent volontairement intacts car réservés au lot Mon Écrin pendant cette clôture.
