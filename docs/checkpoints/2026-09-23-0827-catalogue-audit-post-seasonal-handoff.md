# Handoff catalogue apres les releases Automne, Sodalite et selections saisonnieres

Date : 2026-09-23 08:27 CEST

Destinataire : session dediee `Audit exhaustif catalogue et categories du 2026-09-22`.

Objet : actualiser son constat du 2026-09-22 apres plusieurs releases publiques intervenues depuis, sans melanger ce chantier avec la nouvelle session de polish visuel ouverte par Patrice.

## Statut de ce handoff

`HANDOFF CATALOGUE PRET`. Aucun produit, stock, prix, statut, tag, metafield ou rattachement de collection n a ete modifie par la session qui ecrit ce document.

Ce document complete, mais ne remplace pas, le rapport initial :

`/Users/paesano/.codex/worktrees/catalogue-category-audit-20260922/dawn-X-milaura/docs/audits/2026-09-22-catalogue-category-completeness/REPORT.md`

## Etat Git a connaitre avant toute reprise

### Session catalogue existante

- Worktree : `/Users/paesano/.codex/worktrees/catalogue-category-audit-20260922/dawn-X-milaura`
- Branche : `codex/milaura-catalogue-category-audit-20260922`
- Base de l audit : `dffeb226`
- Commit local de l audit : `c5a41ff0ba567893915de214a2129cd0baff44d9`
- Etat controle le 2026-09-23 a 08:27 CEST : worktree propre
- Le commit `c5a41ff0` n est pas integre dans `origin/codex/milaura-integration` et aucune branche distante le contenant n a ete observee.

### Integration actuelle

- Branche : `codex/milaura-integration`
- HEAD pousse : `3f1e99c8a9439a6c98591e5160424d3c1eb3d020`
- Commit fonctionnel qui integre les lots saisonniers : `2ab64ef1711eebf49f1ddc67ce5811cfd19689e3`
- Documentation finale : `be67c9d3`, puis `3f1e99c8`
- Theme live : `190430282075`

Les branches ont diverge depuis `dffeb226` : le catalogue porte le commit documentaire `c5a41ff0`, tandis que l integration porte trois commits nouveaux. Ne pas merger, rebaser ou recopier des templates aveuglement. Comparer d abord les deux branches et conserver le rapport et ses six CSV sans restaurer les anciens fichiers theme.

Le checkout principal contient aussi des modifications concurrentes non committées dans `AGENTS.md`, `docs/project-state.md`, `docs/codex-handoff.md` et des fichiers Pinterest ou concours. Elles n appartiennent pas au catalogue et ne doivent pas etre staged, nettoyees ou reprises.

## Releases intervenues apres le constat du 2026-09-22

### 1. Selection d automne publique

- Collection manuelle : `Sélection d’automne : grenat & cornaline`
- ID Shopify : `681359311195`
- Route : `https://milaura.fr/collections/selection-automne`
- Template : `selection-automne`
- Canal : Boutique en ligne uniquement
- Produits publics : 10
- Publication et QA : 2026-09-23 06:46 CEST
- Checkpoint : `docs/checkpoints/2026-09-23-0646-autumn-live.md`

Produits de la collection :

1. `bracelet-iris-dore-en-aigue-marine-cornaline-et-grenat-4-mm`
2. `bracelet-dore-en-grenat-rhodolite-3-mm`
3. `bracelet-en-grenat-rouge-4-mm`
4. `bracelet-en-grenat-rouge-6-mm`
5. `bracelet-facette-en-grenat-rouge-4-mm`
6. `boucles-d-oreilles-pendantes-en-grenat-rouge-12-mm`
7. `collier-en-grenat-rouge-4-mm-45-cm`
8. `collier-en-grenat-rouge-6-mm-45-cm`
9. `bracelet-en-cornaline-10-mm-16-a-18-cm`
10. `boucles-d-oreilles-puces-en-cornaline-8-mm`

Important : cette collection de merchandising ne corrige pas la landing taxonomique `/collections/par-pierre-grenat`. Elle ne doit pas etre comptee comme un rattachement Grenat resolu.

### 2. Bibliotheque publique des selections saisonnieres

- Page Shopify : `Sélections saisonnières`
- ID : `168788197723`
- Route : `https://milaura.fr/pages/selections-saisonnieres`
- Template : `selections-saisonnieres`
- Visibilite : publique
- Le footer public pointe vers cette page.
- La page rend actuellement la Selection d automne et doit servir de bibliotheque durable aux campagnes encore utiles.

Cette route est une page, pas une collection. Elle doit rejoindre les futurs crawls de liens internes et de pages publiques, sans modifier le comptage des collections.

### 3. Sodalite rendue permanente

Route canonique : `https://milaura.fr/collections/par-pierre-sodalite`.

Corrections deja live :

- aucune mention `Rentrée` ou `Septembre 2026` ;
- contenu recentre sur la pierre et les bijoux ;
- medias responsives `landing-v2` conserves ;
- ancien contenu saisonnier et ancien template `collection.selection-de-karine.json` retires ;
- dans `Pierres de A à Z`, Sodalite pointe maintenant vers `/collections/par-pierre-sodalite` avec `Voir les bijoux`.

Le constat du rapport initial selon lequel Sodalite n avait pas de lien et annoncait une destination encore en attente est donc resolu.

En revanche, aucun rattachement produit Shopify n a ete ajoute par cette release. Une extraction publique du 2026-09-23 confirme toujours 9 produits uniques sur la landing :

- `bague-doree-en-sodalite-taille-54`
- `boucles-d-oreilles-dorees-en-sodalite-36-mm`
- `boucles-d-oreilles-loa-argentees-en-sodalite-25-mm`
- `bracelet-clea-dore-en-sodalite-8-mm`
- `bracelet-dore-en-sodalite-et-pierres-bleues`
- `bracelet-halo-dore-en-sodalite-4-mm`
- `bracelet-horus-dore-en-sodalite-6-mm`
- `collier-dore-en-sodalite-facettee-38-a-43-cm`
- `pendentif-sodalite`

Les trois lacunes catalogue du rapport restent donc ouvertes :

- `bracelet-dore-en-sodalite-6-mm`
- `bracelet-dore-en-sodalite-perles-de-6-mm`
- `collier-argente-en-sodalite-a-pampilles`

### 4. Selection de Karine et navigation

- La Home remplace l ancienne mise en avant Aigue-marine par `La sélection de Karine`.
- Les trois cartes pointent vers `/collections/selection-de-karine`.
- Le menu `Cadeaux` pointe vers cette meme collection sur desktop et mobile.
- L ancien lien `Rentrée en Sodalite` a disparu.
- Le template legacy `templates/collection.selection-de-karine.json`, qui contenait encore la campagne Sodalite datee, a ete supprime intentionnellement du source et du theme live.

Ne pas recreer ce template. La route `selection-de-karine` est maintenant une destination de merchandising permanente et doit etre relue dans le nouvel inventaire public.

### 5. Systeme saisonnier durable

Le contrat courant est :

- `Home Occasion` sert de slot recurrent pour Noel, Saint-Valentin, Automne ou une autre operation ;
- une landing centree sur une pierre peut devenir permanente et rejoindre `Pierres de A à Z` ;
- le registre machine est `docs/reference/milaura-home-occasion-registry.json` ;
- le contrat fonctionnel est `docs/reference/HOME-SECTION-2-OCCASIONS.md` ;
- le manifeste Automne est `docs/campaigns/automne/manifest.md`.

Ces fichiers sont maintenant dans l integration et doivent etre lus avant toute correction touchant les destinations saisonnieres, Karine, Sodalite ou la Home.

## Delta exact par rapport au rapport du 2026-09-22

| Constat du rapport initial | Etat au 2026-09-23 08:27 CEST | Action catalogue |
| --- | --- | --- |
| 69 collections publiques | Une nouvelle collection publique `selection-automne` a ete creee | Refaire l extraction, ne pas conserver 69 comme total courant |
| 49 fiches A a Z, 9 liens | Sodalite est maintenant reliee, aucun autre lot n a relie les 30 autres landings | Recompter et regenerer `guide-a-z-entries-49.csv` |
| Sodalite sans lien et texte faux | Resolu en theme et live | Retirer ce point du backlog |
| Sodalite 9 produits visibles sur 12 attendus | Toujours 9 produits uniques, aucun rattachement change | Ajouter les 3 produits apres controle Admin |
| Grenat absent de A a Z | Toujours ouvert | Ajouter la lettre G et l entree Grenat |
| Grenat 1 produit visible sur 8 attendus | Toujours ouvert | Ajouter les 7 actifs a `par-pierre-grenat` |
| Deux brouillons Grenat a preparer | Toujours ouverts et exclus de la landing Automne | Preparer les rattachements sans les activer |
| 43 rattachements actifs manquants plus 1 arbitrage | Aucun rattachement corrige par les releases saisonnieres | Reextraire puis corriger, sans supposer que le CSV est encore exhaustif |
| 31 landings existantes non reliees depuis A a Z | Sodalite est la seule correction confirmee | Recalculer le reliquat, probablement 30 avant nouvelles variations |
| `Bols chantants` publique et vide | Hors perimetre des releases | Toujours a arbitrer |
| Deux liens internes racine en 404 | Hors perimetre des releases | Toujours a corriger dans les deux sections identifiees |
| Absence de JSON-LD Product sur les PDP V2 | Hors perimetre des releases | Toujours a traiter dans un lot technique separe |
| Huit compteurs internes `piece_count` obsoletes | Hors perimetre des releases | Toujours a recalculer ou retirer avant tout nouvel affichage |

## Ce qui n a pas ete modifie

Les lots Automne, Sodalite et bibliotheque saisonniere n ont modifie aucun :

- produit ;
- prix ;
- stock ;
- statut ACTIVE ou DRAFT ;
- tag produit ;
- metafield produit ;
- rattachement aux collections par pierre ;
- rattachement aux collections commerciales `type + pierre` ;
- recommandation Search and Discovery ;
- Ads ou Pinterest.

Le recensement produits du 2026-09-22 reste donc un bon point de comparaison, mais il doit etre relu en direct avant mutation a cause des travaux paralleles possibles.

## Nettoyage theme a ne pas annuler

Douze anciens medias Sodalite orphelins, total `18 571 046` octets, et le template legacy `collection.selection-de-karine.json` ont ete supprimes du theme live. Les quatre medias `milaura-rentree-sodalite-landing-v2-*` restent actifs et servent la landing permanente.

Ne restaurer aucun ancien media `hero-v3`, `hero-v4`, `chloe`, `chapelet-porte` ou `landing-desktop-v1`. Ne pas restaurer l ancien template Karine.

Preuve finale : `docs/checkpoints/2026-09-23-0807-saisonnier-sodalite-karine-live.md`.

## Ordre de reprise recommande pour la session catalogue

1. Commencer en lecture seule et lire son propre `REPORT.md`, puis le present handoff et les deux checkpoints live du 2026-09-23.
2. Comparer `c5a41ff0` a `origin/codex/milaura-integration` sans merge ou rebase aveugle.
3. Refaire les extractions Admin et publiques avant de modifier les CSV, car le snapshot `69 collections`, `49 fiches` et `9 liens` est date.
4. Regenerer les six matrices avec le nouvel etat public, y compris `selection-automne`, `selection-de-karine`, Sodalite reliee et la page des selections saisonnieres.
5. Confirmer que les lacunes de rattachement produits sont toujours exactes. La verification publique Sodalite confirme deja que ses trois manquants restent ouverts.
6. Proposer un lot P1 borne pour les rattachements actifs et l annuaire, avec preview, controle Admin et GO live distincts.
7. Garder les brouillons DRAFT. Un rattachement a une collection n autorise aucune activation.
8. Traiter JSON-LD Product, liens 404, collection vide et arbitrages de taxonomie comme lots distincts si leurs fichiers ou gates different.
9. Ignorer la session de polish visuel ouverte par Patrice. Elle n est ni une dependance ni une destinataire de ce handoff. Ne pas attendre de message de reprise de sa part.

## Prompt de reprise a copier dans la session catalogue

```text
Reprends l audit catalogue MilAura depuis ton rapport du 2026-09-22 au commit local c5a41ff0, puis lis le handoff actuel : /Users/paesano/Documents/MilAura website/dawn-X-milaura/docs/checkpoints/2026-09-23-0827-catalogue-audit-post-seasonal-handoff.md. Commence en lecture seule. Ton audit est base sur dffeb226 alors que l integration poussee est maintenant 3f1e99c8 et le theme live 190430282075. Ne merge et ne rebase rien aveuglement. Depuis ton audit, la collection publique selection-automne ID 681359311195 et la page selections-saisonnieres ID 168788197723 ont ete creees, la Home utilise La selection de Karine, le menu Cadeaux pointe vers selection-de-karine, et Sodalite est devenue permanente et cliquable depuis Pierres de A a Z. En revanche, aucun produit, tag, metafield ou rattachement de collection n a ete modifie : Grenat reste absent de A a Z et par-pierre-grenat reste incomplet ; Sodalite reste a 9 produits uniques sur 12 et ses 3 rattachements manquants restent ouverts. Reextrais l Admin et le storefront, regenere les six matrices avant toute correction, puis propose un lot P1 borne. Garde les 7 brouillons DRAFT. Ne restaure jamais l ancien template collection.selection-de-karine.json ni les anciens medias Sodalite supprimes. Preserve les changements concurrents et ne touche pas a la session de polish visuel, qui est totalement separee.
```

## Preuves et references

- Audit source : `/Users/paesano/.codex/worktrees/catalogue-category-audit-20260922/dawn-X-milaura/docs/audits/2026-09-22-catalogue-category-completeness/REPORT.md`
- Automne Admin : `docs/checkpoints/2026-09-22-1959-autumn-collection-admin.md`
- Automne live : `docs/checkpoints/2026-09-23-0646-autumn-live.md`
- Saisonnier, Sodalite et Karine live : `docs/checkpoints/2026-09-23-0807-saisonnier-sodalite-karine-live.md`
- Contrat saisonnier : `docs/reference/HOME-SECTION-2-OCCASIONS.md`
- Registre saisonnier : `docs/reference/milaura-home-occasion-registry.json`

## Limite documentaire de cette fermeture

`docs/project-state.md` et `docs/codex-handoff.md` contiennent deja des changements non committes appartenant a un chantier Pinterest concurrent. Ils ne sont ni ecrases ni staged par ce handoff. Le present checkpoint et sa note Obsidian sont les sources de reprise dediees au catalogue.
