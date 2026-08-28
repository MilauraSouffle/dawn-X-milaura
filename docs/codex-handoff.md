# Handoff Codex MilAura, Ruban V3 live

Date : 2026-08-28 10:20 CEST

## Etat de reprise

Ruban V3 est ferme, integre, pousse et live sur le theme `dawn-X-milaura/main`, ID `190430282075`.

Il affiche une seule proposition sur chaque PDP et conserve trois candidats ordonnes. Les images viennent exclusivement des galeries Shopify. Le produit consulte, les produits indisponibles, les produits deja au panier et ceux sans image sont exclus. Les replis descendent du match exact vers le match proche, l univers, la collection puis le catalogue global. Le Ruban ne doit jamais etre vide tant qu un autre produit eligible existe.

La video est hors chemin critique. Higgsfield reste le seul outil accepte pour une future phase video. Grok est exclu et aucune transformation du produit n est acceptable.

## Preuves

- Checkpoint complet : `docs/checkpoints/2026-08-28-1020-ruban-v3-gallery-live.md`.
- Source finale : `codex/milaura-ruban-v3-matrix-20260817` a `38497e4b`, branche locale et distante conservee.
- Canonique avant fermeture documentaire : `codex/milaura-integration` a `84185766`, propre et aligne a origin.
- Regression : 318 produits, 67 cibles eligibles, 318 sources sur 318 avec trois candidats et aucun vide.
- Hash : `8fbcace0721d1dad893782b67eff467481b2dc7011792e67e746b0c14bae75f3`.
- Tests : 17 Python sur 17, runtime JavaScript, syntaxe, Theme Check sans erreur et diff check PASS.
- Live : push cible de onze fichiers avec `--nodelete`, `--strict`, `--allow-live`.
- Pullback : 11 fichiers sur 11 identiques a Git.
- QA : aventurine exacte, promotion apres ajout panier, repli collection, source historiquement exclue, 390 et 1440 px sans debordement.
- Panier de QA final : vide.

## Recuperation

Sauvegarde des onze fichiers live precedents :

`/private/tmp/milaura-ruban-v3-live-backup-20260828-1010`

Pullback post-deploiement :

`/private/tmp/milaura-ruban-v3-live-pullback-20260828-1020`

La preference Shopify CLI anterieure est conservee ici :

`/Users/paesano/Library/Preferences/shopify-cli-theme-conf-nodejs.bak-20260828-1012`

Le worktree Ruban source a ete retire proprement. Ne pas le recreer sans nouveau lot.

## Prochaine action

Aucune action Ruban n est requise. Patrice peut controler le rendu live sur mobile et desktop. Son verdict creatif reste distinct du PASS technique.

Si Patrice signale une anomalie reproductible, commencer par une inspection publique en lecture seule, identifier le produit, la largeur, le contenu du panier et les candidats rendus, puis corriger uniquement les fichiers Ruban concernes. Ne pas rouvrir les videos, les metafields ou les anciens detourages sans nouveau GO explicite.

## Prompt de reprise copiable

```text
Reprends MilAura depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Lis AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md et docs/checkpoints/2026-08-28-1020-ruban-v3-gallery-live.md.

Ruban V3 est ferme et live sur le theme 190430282075. Son contrat est une proposition visible, trois candidats ordonnes, images reelles de galerie, exclusion du produit source, des indisponibles, du panier et des produits sans image, puis replis exact, proche, univers, collection et catalogue. Le Ruban ne doit jamais etre vide tant qu un autre produit eligible existe. Le pullback live est 11 sur 11 identique a Git et le panier de QA est vide.

Commence en lecture seule. Ne modifie Ruban que sur anomalie reproductible ou nouvelle demande explicite de Patrice. Le controle creatif Patrice, le PASS technique, les mutations Shopify et tout nouveau live restent des gates distinctes.
```
