# Handoff Codex MilAura, reprise master allegee

Date : 2026-08-31 07:41 CEST

Statut : `REFONTE GLOBALE ENVIRON 70 % SELON PATRICE - SOCLE DEVELOPPE - POLISH ET AMELIORATIONS CIBLEES OUVERTS`

## Prompt de reprise

```text
Salut Codex, reprends le travail du master MilAura. Lis AGENTS.md puis uniquement docs/checkpoints/2026-08-31-0741-master-orchestrator-handoff.md. Tu es le chef d orchestre : verifie l etat courant, suis le plan, protege les proprietaires, rappelle-moi ce qui est oublie et recadre seulement si necessaire. Ne refais pas le travail des sessions specialistes et ne lance aucune mutation. Mon Ecrin et Rentree Sodalite repartent chacun dans une session fraiche depuis leurs handoffs du 31/08.
```

La phrase courte `Salut Codex, reprends le travail du master, check le handoff du 31/08` doit conduire au checkpoint ci-dessus.

## Doctrine de travail

Le master orchestre, verifie et maintient le plan. Il ne doit plus devenir un goulot d etranglement entre Patrice et les sessions specialistes.

La session qui travaille directement avec Patrice execute son lot de bout en bout dans un perimetre reserve : audit, code, QA, commit, push, preview, documentation et deploiement cible apres les GO explicites. Si elle doit integrer ou deployer, le master lui attribue temporairement cette execution pour son seul lot. Le master controle ensuite le handoff et actualise le plan sans rejouer toutes les etapes.

Les gates restent separees : PASS technique, GO visuel Patrice, integration, Admin ou release, puis live.

## Trois priorites

1. Reprendre `Rentree / Septembre Sodalite` dans une session fraiche : live actuel, environ 70 %, audit visuel mobile-first avec Patrice puis petits lots. Handoff : `docs/checkpoints/2026-08-31-0735-sodalite-ui-polish-handoff.md`.
2. Reprendre `Mon Ecrin` dans une session fraiche : fondation live, environ 70 %, reproduire et prioriser les erreurs puis polish UI et corrections bornees. Handoff : `docs/checkpoints/2026-08-31-0734-mon-ecrin-70-percent-handoff.md`.
3. Continuer l inventaire en parallele depuis le Sheet canonique, sans que le master l execute et sans attendre sa fin theorique pour preparer le SEO/AEO/GEO et l acquisition.

## Ensuite

- ouvrir SEO/AEO/GEO et la readiness Ads apres stabilisation des principaux P1 visuels et des routes permanentes ;
- continuer Pinterest organique sans attendre les Ads ;
- paid large seulement apres stock reel, cout complet, marge, feed, tracking, consentement et parcours de conversion verifies ;
- Atelier des emotions et Pierres de naissance restent des chantiers ulterieurs non bloquants ;
- Ruban V3 est ferme et live ; Mail ne se rouvre que sur besoin precis.

## Verite technique courte

- Depot : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche : `codex/milaura-integration`.
- `origin/main` est un miroir Shopify incomplet, interdit de merge aveugle.
- Handoff Mon Ecrin integre par `0a325aee`.
- Handoff Sodalite integre selectivement par `3c7fc828`.
- Live : `190430282075`.
- Developpement : `199421952347`.
- Prive Sodalite historique : `200259043675`.
- Fichier utilisateur a preserver : `docs/codex-handoff 2.md`.

## Etat produit date

Photographie du 2026-08-30, a rafraichir avant toute action catalogue : 182 references physiques, 447 unites, 96 `ACTIVE`, 2 `DRAFT`, 84 absentes et 36 corrections de contenu `PASS 36/36`.

La campagne Sodalite est live sur la home, la navigation et `/collections/selection-de-karine`. L ancienne route `/collections/selection-aout-2026` reste publique. Ne pas la supprimer ou la rediriger sans audit SEO, Analytics et backlinks.

Mon Ecrin est live avec `milaura-customer-accounts-7` et le backend `https://mon-ecrin-api.milaura.fr`, mais son verdict produit reste 70 % selon Patrice.

## Regle de reprise

Le nouveau master commence en lecture seule, rend un point court avec trois priorites maximum, puis attend une demande concrete. Il n execute ni inventaire, ni correction, ni integration, ni live par deduction.
