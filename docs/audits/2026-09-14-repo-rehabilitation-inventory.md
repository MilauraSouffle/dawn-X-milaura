# Inventaire de rehabilitation du depot - 2026-09-14

## Objet et limite

Ce document enregistre la premiere phase de la rehabilitation demandee par Patrice le 2026-09-14. Son but est de rendre le depot resistant a une nouvelle publication depuis un checkout ancien.

Cette phase ne supprime aucun worktree, aucune branche, aucun historique, aucun fichier de preview et ne modifie pas Shopify. Une suppression ne pourra commencer qu apres une liste de chemins explicite et un second GO de Patrice.

## Source canonique remise en place

- La branche distante d integration `origin/codex/milaura-integration` a ete avancee par fast-forward de `7d279bcc` a `89b7f83f` le 2026-09-14.
- `89b7f83f` est la source Git de la derniere correction live verifiee du CTA visiteur du quiz. Le theme public reste `190430282075`.
- Aucun historique distant n a ete reecrit et aucun push de theme global n a ete execute pendant cette rehabilitation.
- Le checkout d integration historique reste sur `00406d5a`, avec 3 commits propres a lui et 82 commits de retard par rapport a la branche distante apres le retablissement. Il ne doit plus servir a un `shopify theme push`.

## Filets de securite verifies

| Element | Emplacement ou ref | Empreinte SHA-256 / cible |
| --- | --- | --- |
| Bundle Git de toutes les refs | `/private/tmp/milaura-repo-rehabilitation-20260914.bundle` | `acd8ec3b1c5820837fcfac79f6d3e6f84daaed70cc4b2607239f39a1f44ec80a` |
| Correctif des fichiers suivis du checkout historique | `/private/tmp/milaura-integration-legacy-wip-tracked-20260914.patch` | `36107b20d5d758519d703650a3f5ea826d19a98c7cd8176c879f6104d4e5d959` |
| Archive des fichiers non suivis du checkout historique | `/private/tmp/milaura-integration-legacy-wip-untracked-20260914.tar.gz` | `f92cc033ab22c41cd080f0aecdebfcfa32e65025fd325c06756077cc0eac5656` |
| Ref locale de l ancien checkout | `archive/milaura-integration-local-00406d5-20260914` | `00406d5ab46a2d14588109f3f82157c913b3dd97` |
| Tag de surete de l ancien checkout | `safety/milaura-integration-legacy-20260914` | `00406d5a` |
| Tag de la derniere source live verifiee | `release/milaura-live-cta-20260914` | `89b7f83f3a348ddb3963f2610b31fb4126279064` |

Les trois archives sur `/private/tmp` sont des filets immediats, pas un stockage permanent. Elles ne doivent pas etre effacees tant que le checkout principal n a pas ete bascule sur la branche canonique et controle.

## Etat physique observe

- Git connait 48 worktrees. Le dossier gere `_worktrees` occupe environ 1,8 Go et contient 42 repertoires de travail.
- Le checkout principal est le seul checkout d integration historique. Il est volontairement laisse intact pour le moment, avec fichiers modifies et non suivis. Son contenu est couvert par les deux archives precedentes.
- Un enregistrement Git est deja orphelin : `/private/tmp/milaura-contest-social-links-20260909`. Sa cible n existe plus. Il est marque `prunable`, mais aucun `git worktree prune` n est execute dans cette phase.
- Deux worktrees hors du dossier gere sont sous `~/.codex/worktrees/` et un sous `/private/tmp`. Ils ne sont pas candidates au retrait automatique tant que leur proprietaire n a pas ete identifie.

## Previews et sorties locales

- `output/playwright` contient 173 fichiers ignores par Git et occupe environ 101 Mo. Ce sont des captures de recette, pas du code source ni un historique Git. Candidat au retrait uniquement apres conservation du sous-ensemble utile aux recettes encore ouvertes.
- `output/concepts/selection-aout-2026/` est suivi par Git et contient trois documents de maquette statique : `concept.css`, `home-preview.html`, `landing-preview.html`. Il ne doit pas etre efface au titre d un simple nettoyage de disque sans decision de produit.
- Les elements nommes `preview` suivis par Git sont majoritairement des checkpoints documentaires. Ils restent dans le depot car ils constituent les preuves de validation et de deploiement.
- `templates/page.milaura-stones-preview.json` est un ancien template de preview suivi. Aucune reference active n a ete trouvee durant l inventaire, mais sa suppression exige encore une verification Admin et storefront dediee.

## Regles qui seront appliquees apres bascule

1. Le checkout principal sera aligne sur `origin/codex/milaura-integration` et restera propre. Il ne sera plus une zone de travail fonctionnelle.
2. Chaque evolution passe par un worktree nomme, une branche et une reservation dans `docs/workstreams.md`. A la cloture, le worktree est retire avec `git worktree remove` seulement apres verification du merge et de la branche distante.
3. Une publication Shopify partira exclusivement de la source canonique ou du worktree explicitement designe. Elle utilisera une liste `--only`, `--nodelete`, un controle avant publication et un pullback apres publication. Aucun push global depuis un checkout ancien ou sale.
4. Les branches et l historique seront conserves au debut. Recuperer de l espace disque consiste d abord a retirer les copies de travail closes, pas a detruire des commits utiles.

## Prochains gates, sans ambiguite

### Gate A - bascule du checkout principal

Action proposee : mettre a l abri le WIP deja archive, puis realigner le checkout principal sur `origin/codex/milaura-integration` et verifier son statut propre. Aucun fichier client ne sera supprime : les archives et refs ci-dessus permettent un retour cible.

Cette action ne doit pas etre confondue avec le retrait des worktrees.

### Gate B - retrait lot A

Action proposee : retirer seulement des worktrees propres, clos et confirmes par Patrice, un chemin a la fois avec `git worktree remove`. Les branches et les tags restent en place. Les worktrees associes a la recuperation live du 2026-09-14, au Hero, aux certificats et a Mon Ecrin restent en attente pendant la premiere revue.

### Gate C - sorties et templates de preview

Action proposee : etablir un manifeste dedie pour `output/playwright`, les maquettes suivies et le template `page.milaura-stones-preview.json`, puis retirer uniquement les artefacts explicitement valides. Aucun de ces elements ne doit etre confondu avec les commits du depot.
