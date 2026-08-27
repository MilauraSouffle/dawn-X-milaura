# Handoff Codex MilAura, reprise inventaire et workflow produit V3

Date : 2026-08-27 19:01 CEST

## Mission de la prochaine session

Reprendre l'inventaire dans une nouvelle session dediee, sans relire l'ancienne conversation archivee et sans relancer automatiquement le catalogue. Commencer en lecture seule, recontroler les faits qui peuvent avoir change, rendre un point simple a Patrice puis obtenir des priorites et des GO bornes.

Le master MilAura conserve seul la gouvernance Git, l'integration theme et le live. La session inventaire possede le dialogue produit, la reconciliation EAN, la creation locale, les controles visuels et les mutations catalogue explicitement autorisees.

## Lecture obligatoire

1. `/Users/paesano/Documents/MilAura website/dawn-X-milaura/AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/checkpoints/2026-08-27-1901-inventory-v3-final-handoff.md`
5. `docs/checkpoints/2026-08-27-1805-chapelets-v3-modal-produit.md`
6. `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/AGENTS.md`
7. le `README.md`, le contrat produit, le runbook, le workflow V3 et les prompts du meme workspace
8. les ledgers pilote 10 et file 175 indiques dans le checkpoint final

Le checkpoint du 2026-08-27 a 19:01 est exhaustif : liste des 20 DRAFT, 15 prix bloques, dix references du lot 06, produits repris, refus resolus, attentes physiques, chemins Camilla, sauvegardes et validations.

## Etat ferme au 2026-08-27

- 60 identites EAN traitees.
- 40 `ACTIVE`, 20 `DRAFT` au controle Shopify vers 18:45 CEST.
- 125 references non traitees : 110 en file, 15 `BLOCKED_PRICE`.
- Reprise exacte : lot 06, positions 51 a 60, prepare localement, zero ecriture Shopify.
- Boucles Ornel `10670433993051` : `DRAFT`, validation physique Patrice attendue.
- Bague aigue-marine `10669860192603` : `DRAFT`, validation physique Patrice attendue.
- Chapelet obsidienne `10669418283355` et chapelet sodalite `10522152436059` : cinq images V3, encore `DRAFT`.
- Huit brouillons Sodalite ont cinq images V3 et restent `DRAFT`.
- Pendentif coeur sodalite `10357637546331` : V3 complet, `ACTIVE`.
- Galet anti-stress aventurine `10669957775707` : controle physique resolu, titre corrige, `ACTIVE`.
- Bracelet Iris `10669947781467`, EAN `3667407021495` : V3 valide par Patrice puis `ACTIVE`, benchmark canonique.

Les statuts Shopify peuvent changer lorsque Patrice active des brouillons. Toujours les rafraichir en lecture seule avant de produire un nouveau bilan.

## Workflow visuel V3 definitif

Galerie de cinq images finales :

1. cover produit seul sur pierre claire ;
2. vraie macro produit, jamais une seconde vue entiere ;
3. nature morte produit seul franchement contrastee ;
4. scene humaine calme avec macro portee integree dans un rectangle horizontal arrondi ;
5. scene humaine vive, distincte et sans encart.

Regles : trois slots produit seul, deux slots humains, meme mannequin, 70 % Chloé et 30 % Elena par produit, Chloé par defaut, galerie permanente sans saison, generation slot par slot, fidelite des composants et proportions, peau photographique, anatomie continue des epaules aux mains. Une image jolie mais infidele est refusee.

Le benchmark exact est le Bracelet Iris. Sources, anciennes tentatives, images finales et plan :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/outputs/bracelet-iris-dore-cornaline-grenat-rouge-aigue-marine-aa/`

Camilla dispose de la meme doctrine, du pipeline V1.3, du benchmark et des preuves Sodalite sur `hermes-milaura-control`. Les tests locaux et conteneur ont passe `PIPELINE_LOCAL_TESTS_PASSED`. Ne pas retomber sur les anciens documents V1 ou V2 a six images.

## Gates

- PASS technique : ne vaut aucun GO creatif ni Shopify.
- GO creation locale : autorise seulement la preparation et la generation locale.
- GO visuel Patrice : valide une galerie donnee.
- GO Shopify : autorise une mutation produit explicitement bornee.
- GO stock : distinct et obligatoire pour toute quantite.
- GO publication : distinct et obligatoire pour `ACTIVE` ou un canal public.

Un produit deja actif ou une galerie historique a six images n'est jamais repris automatiquement.

## Git et live

- Depot : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche : `codex/milaura-integration`.
- Base propre avant ce handoff : `196c5c395ab60ff346fd9ffa1718200b169aeab5`.
- `origin/main` reste un miroir Shopify incomplet, jamais a fusionner aveuglement.
- Theme live : `190430282075`.
- Theme developpement : `199421952347`.
- Modal `Photos et variations naturelles` deja live, source `68a4fa72`.
- Aucun produit, stock, statut, collection ou theme Shopify n'a ete modifie pendant la cloture.
- `/Users/paesano/Documents/Agentic-Ops` est tres dirty avec des chantiers concurrents. Ne rien nettoyer, restaurer, indexer ni committer globalement.

## Prompt de reprise copiable

```text
Reprends l'inventaire MilAura au 2026-08-27 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura, dans une nouvelle session dediee. Ne relis pas l'ancienne conversation archivee et ne relance aucun batch automatiquement.

Lis integralement AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md et docs/checkpoints/2026-08-27-1901-inventory-v3-final-handoff.md. Lis ensuite les sources canoniques du workspace /Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation et ses deux ledgers.

Commence en lecture seule. Recontrole Shopify et le Sheet par EAN exact. Le snapshot de fermeture est : 60 identites traitees, 40 ACTIVE, 20 DRAFT, 125 non traitees dont 110 en file et 15 BLOCKED_PRICE. La reprise exacte est le lot 06 positions 51 a 60, prepare localement mais sans aucune ecriture Shopify. Ornel 10670433993051 et la bague aigue-marine 10669860192603 attendent la validation physique Patrice.

Le workflow V3 definitif contient cinq images : trois produit seules, scene calme avec macro portee integree, scene vive distincte. Galerie permanente, generation et controle slot par slot, fidelite des proportions et anatomie comme gates dures. Bracelet Iris 10669947781467 est le benchmark. Camilla a le meme workflow et le pipeline V1.3 sur le VPS.

Rends d'abord un etat des lieux court a Patrice et demande ses priorites sur les 20 brouillons, les validations physiques, les chapelets, les 15 prix manquants et le rythme du lot 06. Ne modifie rien avant ses GO. Separe toujours GO creation locale, GO visuel, GO Shopify, GO stock et GO publication.
```
