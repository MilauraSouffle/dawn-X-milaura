# Checkpoint MilAura - baseline G1 terminée

Date : 2026-08-07 17:35 CEST

Projet : MilAura Shopify

Thème live : `dawn-X-milaura/main`, ID `190430282075`

## Résultat

La réconciliation G1 est terminée. La nouvelle base de développement est séparée de l'ancien checkout, fondée sur le dernier miroir Shopify/GitHub et publiée sur une branche dédiée.

- worktree : `/Users/paesano/Documents/MilAura website/dawn-X-milaura-reconcile-2026-08-07` ;
- branche locale et distante : `codex/milaura-reconcile-2026-08-07` ;
- base miroir Shopify : `b55b7494` ;
- commit baseline : `ac49b85b chore: establish clean live baseline`.

## Contenu du baseline

- tout le code Liquid, JSON, CSS et JavaScript du miroir live ;
- 20 assets publics réellement référencés par le thème ;
- `AGENTS.md` et `.shopifyignore` ;
- neuf documents actifs de contexte, plan, spécifications et reprise.

Le commit ne contient aucun workflow produit, secret, `.env`, UGC privé, sauvegarde, prototype live non référencé ou matériau d'automatisation.

## Validations

- `git fetch origin --prune` : `origin/main` toujours sur `b55b7494` avant le commit ;
- `shopify theme check` : 267 fichiers inspectés, 0 erreur et 29 avertissements historiques ;
- `git diff --check` : aucune erreur ;
- chacun des 20 assets publics ajouté possède au moins une référence dans le thème ;
- aucun fichier supérieur à 10 Mo dans le lot ;
- recherche de clés et fichiers secrets : aucun résultat ;
- push GitHub réussi sur `origin/codex/milaura-reconcile-2026-08-07`.

## Ancien checkout conservé

L'ancien checkout `/Users/paesano/Documents/MilAura website/dawn-X-milaura` reste intact sur `main` au commit `252f31b5`, avec ses changements locaux, ses 21 écarts métier à reprendre par lots, ses outils produit et ses matériaux privés.

Aucun `reset`, `clean`, merge global, déplacement ou suppression n'a été exécuté. Il ne doit plus servir de base aux nouveaux développements.

## Camilla

Le workflow produit de Camilla est une copie autonome sur le VPS, montée en lecture-écriture dans `hermes-milaura-control` sous `/opt/data/milaura-generation-nouveau-produit`.

Le contrôle du 2026-08-07 confirme le runbook, le skill, l'environnement Python, les références Chloé et Elena ainsi que les accès OpenAI, Shopify et fournisseur. Shopify reste forcé en brouillon et la publication automatique reste désactivée.

G1 n'a apporté aucune modification au VPS.

## Reprise

1. Utiliser uniquement le worktree propre pour les nouveaux lots.
2. Lancer P0A : économie réelle des paliers panier et cumuls Shopify.
3. Auditer le reliquat Scratch de `/cart` dans ce même lot.
4. Identifier ensuite quatre produits physiques et rentables pour la Sélection de l'atelier.
