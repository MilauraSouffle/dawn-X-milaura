# Checkpoint MilAura - réconciliation complète du dépôt

Date : 2026-08-07 18:25 CEST

Projet : MilAura Shopify

Thème live : `dawn-X-milaura/main`, ID `190430282075`

## Résultat

La réconciliation G1 est entièrement terminée. Le chemin canonique contient maintenant un checkout Git propre, aligné avec sa branche distante et prêt pour les prochains lots. L'ancien checkout sale est archivé intégralement sous un nom daté. Les workflows, outputs, modèles, photos, documents et secrets locaux utiles ont été séparés dans un workspace privé hors Git avant la bascule.

Aucun déploiement Shopify n'a été effectué pendant cette phase de réconciliation.

## Checkout actif

- chemin : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche : `codex/milaura-reconcile-2026-08-07` ;
- HEAD : `ff5712dd0a7cf6900e1e8a4dcd4e7fa2ebd71f9b` ;
- branche distante : même commit ;
- divergence : `0 ahead`, `0 behind` ;
- statut : propre ;
- secret ou matériau privé détecté dans le checkout actif : aucun.

Commits de la base propre :

1. `ac49b85b chore: establish clean live baseline` ;
2. `b6b7fce9 docs: close G1 reconciliation` ;
3. `ff5712dd chore: preserve useful legacy theme work`.

## Migration ciblée du thème

Le recomptage direct a trouvé 25 chemins hors anciens assets de prototypes. Six fichiers encore utiles ont été migrés :

1. `config/metafields/product-metafields-definition.json` ;
2. `sections/main-search.liquid` ;
3. `sections/milaura-contact.liquid` ;
4. `sections/milaura-collection-faq.liquid` ;
5. `sections/milaura-collection-vertus.liquid` ;
6. `templates/collection.milaura-pierre.json`.

Les 19 autres écarts ont été classés comme sérialisation sans intérêt métier ou comme version historique moins sûre que la base live. Le classement complet est conservé sous :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/THEME-DIFF-CLASSIFICATION-2026-08-07.md`

## Workspace privé

Chemin :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace`

Contenu :

- workflow de génération produit moderne ;
- outputs et audits de produits ;
- références Chloé et Elena ;
- données privées historiques et automatisations ;
- 832 dossiers d'images finales ;
- photos bougies et références visuelles ;
- documents internes et modèles d'emails ;
- prototypes historiques ;
- secrets locaux nécessaires, hors Git.

Exclusions volontaires : `.venv/`, `__pycache__/`, `*.pyc`, `.DS_Store`, caches et dépendances tierces reproductibles.

## Vérification des copies

- corpus `credentials` : 2 741 fichiers utiles source, 2 741 fichiers destination ;
- placeholders iCloud dans la destination privée : 0 ;
- contrôle `rsync --checksum --dry-run` du corpus : aucune différence ;
- workflow produit : 171 fichiers actifs utiles source et destination ;
- photos bougies : 16 fichiers source et destination ;
- documents internes : 63 fichiers source et destination ;
- modèles d'emails : 20 fichiers source et destination ;
- autres copies ciblées : identiques octet par octet ou sans différence de fichier au contrôle checksum ;
- `.env` du workflow produit : copie identique octet par octet, permissions `600` ;
- `.env` historique du thème : copie identique octet par octet, permissions `600` ;
- contenu des secrets : jamais affiché.

Le workspace privé est ignoré par l'allowlist Git du dépôt Agentic-Ops. Son statut Git ciblé est vide.

## Archive récupérable

Ancien checkout :

`/Users/paesano/Documents/MilAura website/dawn-X-milaura-archive-2026-08-07`

L'archive conserve :

- l'ancien `main` à `252f31b5` ;
- sa divergence historique `ahead 29`, `behind 338` ;
- les modifications suivies ;
- les fichiers non suivis ;
- les prototypes et fichiers de travail non repris.

Aucun reset, clean ou effacement global n'a été utilisé. Le worktree lié temporaire a été retiré uniquement après vérification d'un clone indépendant propre et du commit distant.

## Camilla et le VPS

Camilla reste indépendante de cette bascule locale :

- montage VPS inchangé : `/opt/data/milaura-generation-nouveau-produit` ;
- workflow, scripts, modèles et accès déjà validés restent disponibles ;
- brouillon Shopify obligatoire et publication automatique désactivée ;
- aucun fichier VPS modifié pendant cette phase.

Le runbook local pointe maintenant vers le workspace privé et conserve séparément le chemin VPS.

## Validation finale

- `shopify theme check` : 270 fichiers, 0 erreur, 29 avertissements historiques ;
- `git diff --check` : aucune erreur ;
- `git status` : propre avant la rédaction de ce checkpoint ;
- HEAD local et distant identiques ;
- worktree Git unique au chemin canonique ;
- aucun déploiement Shopify.

## Reprise

Le dépôt est prêt pour un développement normal depuis le chemin canonique. Prochain lot : `P0A`, calcul de la contribution panier dans le pire scénario et vérification des cumuls Shopify, puis choix de quatre produits physiquement présents et rentables.
