# MilAura - Handoff Codex actif

Date de mise a jour : 2026-08-15 13:34 CEST

## Etat de reprise

La nouvelle experience fiche produit est live sur le theme `190430282075` apres GO visuel et GO live explicites de Patrice. Elle complete le Hero et la sticky bar existants avec une bande fine de services et paiements, un guide en trois portes, puis un service conseiller apres le Ruban Vivant.

Le lot de six fichiers a ete integre en fast-forward jusqu'a `ceaeb1e7`, pousse sur `origin/codex/milaura-integration`, deploye avec `--nodelete`, puis confirme par un pullback live 6/6 identique octet par octet.

Le moteur de recommandations et le Ruban Vivant n'ont pas ete modifies par ce lot. Patrice signale maintenant un P0 : le Ruban fonctionne mal sur mobile et les images paraissent pales, presque floues et fortement degradees. Avec 80 % du trafic sur mobile, ce correctif devient le prochain chantier prioritaire.

## Parcours PDP live

1. Hero produit existant ;
2. sticky bar existante ;
3. bande de services, preuves et paiements reels ;
4. guide produit en trois portes ;
5. Ruban Vivant existant ;
6. service conseiller MilAura.

Les portes s'adaptent aux bijoux, mineraux, bougies et rituels. Les certificats sont conditionnes aux donnees du produit. Klarna est conditionne au moyen de paiement Shopify. Le conseiller donne acces au telephone, a l'e-mail et a la page contact.

## Git, themes et worktrees

- depot : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- integration : `codex/milaura-integration` ;
- commit fonctionnel PDP : `9762d1b8` ;
- commit de preuve preview : `ceaeb1e7` ;
- theme de developpement : `199421952347` ;
- theme live : `190430282075` ;
- worktree PDP : retire proprement apres integration et validation live ;
- worktree Recommandations historique : retire ;
- prochaine session Ruban : creer une nouvelle branche et un nouveau worktree, puis declarer ses fichiers dans `docs/workstreams.md`.

## Validation PDP live

- push Shopify strict limite a six fichiers, sans suppression ;
- pullback live 6/6 identique ;
- HTML public sans cookie : HTTP 200, aucun artefact de preview ;
- ordre public confirme : experience, Ruban, conseiller ;
- mobile 390 px : trois tabs, cible `#ProductTabs`, rail de preuves interne scrollable ;
- clic et clavier `ArrowRight` : `aria-selected` correct ;
- page maintenue a `scrollX = 0` pendant les interactions testees ;
- aucune erreur JavaScript applicative observee ;
- aucune mutation de produit, stock, prix, publication, panier ou moyen de paiement.

## Nettoyage et dette explicite

Les templates ont perdu 640 lignes de definitions anciennes et inactives. Les anciennes sections ne sont plus rendues.

Douze fichiers sources historiques restent dans le depot mais ne sont plus references. Leur suppression physique est un lot destructif distinct, a faire seulement apres controle exhaustif et autorisation explicite.

## P0 Ruban Vivant mobile

La prochaine session doit :

1. reproduire le probleme sur 360, 390 et 430 px ;
2. tester gestes tactiles, pause, reprise, clic, quantite, ajout panier et mouvement reduit ;
3. mesurer dimensions, poids, alpha, compression et ratio d'affichage des sept detourages ;
4. comparer les detourages aux vraies photos des huit references ;
5. corriger le layout mobile ;
6. remplacer ou regenerer uniquement les images dont la source est insuffisante ;
7. obtenir un nouveau GO visuel sur le theme de developpement avant tout live.

Un filtre de nettete CSS n'est pas une correction suffisante sans diagnostic de la source.

## Autres risques ouverts

- `shop.description` alimente le JSON-LD avec un claim global LFG non prouve ;
- collection Œil de tigre avec quatre bijoux actifs au dernier controle ;
- 18 baguettes minerales a retirer apres controles ;
- 13 anciennes collections sans metas definitives ;
- GSC, GA4, Merchant Center et Pinterest non verifies ;
- mesure d'usage de Navigation V2 et des recommandations encore absente.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/reference/2026-08-12-repository-workflow.md`
5. `docs/reference/2026-08-12-copywriting-milaura.md`
6. `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`
7. `docs/checkpoints/2026-08-15-1155-ruban-vivant-live.md`
8. `docs/checkpoints/2026-08-15-1334-pdp-experience-live-handoff.md`

## Interdits de reprise

- ne pas modifier un fichier reserve dans `docs/workstreams.md` ;
- ne pas pousser le theme complet ;
- ne pas retoucher Hero, sticky, panier, drawer ou nouveaux composants PDP sans preuve de conflit ;
- ne pas masquer la degradation des images par un simple filtre CSS ;
- ne pas regenerer un bijou sans reference produit et controle de fidelite ;
- ne pas confondre validation technique, GO visuel et GO live.

## Prompt de reprise copiable

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md`, `docs/checkpoints/2026-08-15-1155-ruban-vivant-live.md` et `docs/checkpoints/2026-08-15-1334-pdp-experience-live-handoff.md`. La nouvelle experience PDP est live sur `190430282075`, avec pullback 6/6 identique. Priorite P0 exclusive : auditer puis corriger le Ruban Vivant sur mobile 360, 390 et 430 px, ainsi que la paleur et le flou de ses images. Commence en lecture seule, declare un worktree dedie et reserve uniquement les fichiers du moteur de recommandations. Ne touche pas aux composants PDP, Hero, sticky, panier ou drawer sans preuve de conflit. Controle les dimensions et la compression des sources avant toute regeneration. Preview sur `199421952347`, aucun live sans nouveau GO visuel explicite de Patrice.
