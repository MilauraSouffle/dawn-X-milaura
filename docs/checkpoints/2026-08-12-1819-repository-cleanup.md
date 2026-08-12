# Checkpoint nettoyage et gouvernance du depot MilAura

Date : 2026-08-12 18:19 CEST
Statut : clos techniquement le 2026-08-12 18:22 CEST

## Demande

Obtenir un depot principal propre, supprimer les etats locaux flottants, expliquer les quatre fichiers en conflit apparent, sortir le clone `dawn-X-milaura 2` de la zone active et etablir une methode fiable pour plusieurs sessions paralleles.

## Etat initial audite

Depot principal :

- branche `codex/milaura-reconcile-2026-08-07`
- 37 fichiers suivis modifies
- 8 entrees non suivies
- aucun fichier staged
- HEAD et GitHub identiques avant consolidation sur `69bbab5a`
- `git fsck` reussi
- Theme Check : 0 erreur, 29 avertissements historiques

Clone secondaire :

- chemin `/Users/paesano/Documents/MilAura website/dawn-X-milaura 2`
- clone Git complet independant de 3,4 Go
- HEAD `252f31b51fd714cbbe93c33293f32895635c8c82`
- 75 entrees suivies modifiees et 87 entrees non suivies
- 29 commits devant et 338 derriere sa reference locale obsolete `origin/main`
- secrets et credentials presents mais non lus
- pipeline produit de juin remplace par le pipeline actif dans Agentic-Ops

## Classification des 37 fichiers

Les modifications n'etaient pas aleatoires :

1. 31 fichiers storefront et logistique, dont 27 identiques bit a bit au theme live.
2. 5 fichiers de contrat produit et catalogue alignes avec le pipeline CAN/Camilla actif.
3. `.gitignore`, qui ne couvrait pas tous les temporaires locaux.

## Les quatre fichiers signales

| Fichier | Modification classee | Decision |
| --- | --- | --- |
| `sections/milaura-product-hero.liquid` | pills pierre, symbolique, qualite et provenance, seuil 30 EUR, plus socle PDP-P0 deja committe | conserver et versionner ; partie PDP reste developpement uniquement |
| `templates/index.json` | deux libelles livraison 39 EUR remplaces par point relais 30 EUR | conserver et versionner ; pas de deploiement live pendant ce nettoyage |
| `templates/page.lp-promo-bougies.json` | vrai CTA produit, seuil 30 EUR, FAQ 24 h et 3 a 5 jours | conserver ; fichier identique au live |
| `templates/product.milaura-produit.json` | logistique 30 EUR, normalisation Shopify, plus socle PDP-P0 | conserver et versionner ; partie PDP reste developpement uniquement |

## Actions realisees

- 31 fichiers storefront committes dans `9220031e`.
- Contrat produit complet commite dans `6c4e6de4`.
- Procedure de parallelisation, registre et archive committes dans `4853db6e`.
- `milaura.provenance` ajoute aux definitions canoniques car le pipeline actif le produit deja sous preuve fournisseur.
- Frontiere publique clarifiee : elle s'applique au pipeline produit, pas au catalogue V1 deja public.
- Temporaires, sauvegardes et assets rejetes deplaces dans une archive recuperable de 18 Mo.
- Clone secondaire deplace intact dans une archive recuperable de 3,4 Go.
- Quatre branches historiques preservees par tags `archive/2026-08-12/*`, puis retirees de GitHub.
- Branche permanente renommee `codex/milaura-integration`.
- Historique du miroir Shopify `main` rattache par `952d7587` avec conservation exacte de l'arbre source audite.
- GitHub ramene a deux branches actives : `main` et `codex/milaura-integration`.

## Archive

- clone obsolete : `/Users/paesano/Documents/MilAura website/_archives/2026-08-12-repo-cleanup/obsolete-clones/dawn-X-milaura-2-obsolete`
- fichiers du depot principal : `/Users/paesano/Documents/MilAura website/_archives/2026-08-12-repo-cleanup/primary-untracked`
- manifest : `docs/reference/2026-08-12-obsolete-repository-archive.md`

Aucune suppression definitive n'a ete effectuee.

## Shopify

Aucun push Shopify n'a ete execute pendant ce nettoyage.

- Les 27 fichiers deja live ont ete versionnes.
- Les deux libelles `templates/index.json` restent a deployer dans un lot cible si souhaite.
- PDP-P0 reste uniquement sur le theme de developpement.
- Aucun produit, stock, prix ou statut de publication n'a ete modifie.

## Validations deja effectuees

- `git diff --check` reussi
- `git fsck` reussi avant consolidation
- JSON du contrat et des definitions de metafields valides
- Theme Check : 283 fichiers, 0 erreur, 29 avertissements historiques
- pullback live cible utilise pour classer les fichiers theme
- politique publique Shopify verifiee
- tags d'archive distants verifies avant suppression des branches historiques
- GitHub verifie a deux branches actives apres nettoyage

## Validation finale

- `git status --porcelain` : 0 entree
- `git diff --check` et `git diff --cached --check` : reussis
- `git fsck --full --no-dangling` : reussi, aucune corruption
- `git worktree list` : un seul worktree, le checkout principal
- recherche des secrets suivis : aucun `.env`, `credentials/`, `auth.json`, `.mcp.json` ou `config.env` suivi
- contrats JSON : valides
- Theme Check : 283 fichiers, 0 erreur, 29 avertissements historiques dans 12 fichiers
- comparaison avec `origin/main` : 0 commit propre a `main`, l'integration contient tout son historique
- archive obsolete et archive des fichiers locaux : presentes

Le dernier push et la comparaison du SHA GitHub sont effectues apres le commit de fermeture de ce checkpoint. Ils ne modifient aucun fichier Shopify.
