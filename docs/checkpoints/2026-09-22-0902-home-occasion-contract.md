# Contrat Home Occasion et Pierre du moment

Date : 2026-09-22 09:02 CEST
Statut : `CONTRAT DOCUMENTAIRE PASS, IMPLEMENTATION AUTOMNE A OUVRIR`

## Decision validee

- La section 2 de la home devient le slot commercial recurrent `Home Occasion`.
- `sections/milaura-selection-atelier.liquid` reste son composant technique canonique. Ce nom n est pas un signal SEO public.
- Chaque grande occasion reutilise une URL permanente propre : Automne, Noel, Saint-Valentin, Fete des Meres et autres occasions validees.
- Une landing passee reste en HTTP 200, utile, indexable et reliee depuis le futur hub `Selections saisonnieres et idees cadeaux` lorsqu elle est `OFF_SEASON`.
- Aucun footer ou dossier public `Archives` n est cree.
- La section Aigue-marine plus basse devient le slot distinct `Pierre du moment` et pointe vers les pages permanentes `/collections/par-pierre-...`.
- La Sodalite quitte la section 2 mais reste une page pierre permanente. Son H1 saisonnier sera remplace dans le lot d implementation.

## Fichiers ecrits

- `AGENTS.md` : pointeur obligatoire de reprise ;
- `docs/reference/HOME-SECTION-2-OCCASIONS.md` : contrat humain canonique ;
- `docs/reference/milaura-home-occasion-registry.json` : registre machine ;
- `docs/codex-handoff.md` : prompt de reprise courant ;
- `docs/workstreams.md` : reservation et transfert des fichiers partages ;
- ce checkpoint.

## Verification

- worktree dedie cree depuis `origin/codex/milaura-integration` au commit `dffeb226` ;
- ancien worktree Aigue-marine propre ;
- `sections/milaura-selection-atelier.liquid` et `templates/index.json` identiques entre la branche Aigue-marine et l integration avant transfert ;
- JSON du registre valide avec `jq empty` ;
- `git diff --check` sans erreur ;
- sauvegarde prealable de `AGENTS.md` verifiee dans `/private/tmp/AGENTS.md.bak-pre-home-occasion-20260922-0902`.

## Non execute

- aucune modification de section Liquid ou template JSON Shopify ;
- aucune creation de collection ou page dans Shopify Admin ;
- aucune redirection ;
- aucun media Automne importe ;
- aucun theme prive ou public modifie ;
- aucun Ads, Pinterest ou autre reseau modifie.

## Prochaine etape

1. recevoir ou localiser les backgrounds Automne desktop et mobile ;
2. fixer la liste exacte des produits et leurs priorites ;
3. produire les hooks et CTA selon le guide copywriting MilAura ;
4. construire `sections/milaura-occasion-landing.liquid` et `templates/collection.milaura-occasion.json` ;
5. configurer la section 2 Automne sur un theme prive ;
6. presenter la preview mobile et bureau a Patrice avant toute integration ou live.

## Prompt de reprise

```text
Reprends le systeme Home Occasion de MilAura depuis docs/reference/HOME-SECTION-2-OCCASIONS.md et docs/reference/milaura-home-occasion-registry.json. Le contrat est valide, aucun code theme ni Shopify Admin n a encore ete modifie. Travaille dans le worktree codex/milaura-seasonal-occasion-system-20260922. La prochaine etape est la Selection d automne : retrouver les backgrounds desktop/mobile, obtenir la liste exacte des produits, construire la landing et configurer la section 2 sur un theme prive. Ne confonds pas ce lot avec Pierre du moment. Aucun live, Admin, Ads ou Pinterest sans gate explicite.
```
