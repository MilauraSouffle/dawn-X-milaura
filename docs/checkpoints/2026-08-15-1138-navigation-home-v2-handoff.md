# Handoff Navigation et homepage V2

Date : 2026-08-15 11:38 CEST
Projet : MilAura Shopify
Branche d'integration : `codex/milaura-integration`
Theme live : `190430282075`
Statut : lot ferme, integre, pousse Git et publie avec GO explicite de Patrice

## Resultat public

Navigation V2 est live avec six familles principales : `Nouveautés`, `Bijoux`, `Pierres`, `Rituels & bien-être`, `Cadeaux` et `Guides`.

Decisions structurelles appliquees :

- les bougies sont une sous-categorie de `Rituels & bien-être`, jamais une entree principale ;
- `Pierre de naissance` vit dans `Cadeaux`, sans doublon dans `Pierres` ;
- `Pierres` ouvre vers tous les bijoux par pierre, le guide A à Z, l'histoire et la symbolique, le choix selon l'émotion et six pierres prioritaires ;
- les six pierres prioritaires sont Améthyste, Quartz rose, Œil de tigre, Lapis-lazuli, Aigue-marine et Aventurine ;
- `Le Cercle MilAura` reste l'espace compte, pas une section de homepage.

La section 3 de la homepage est live avec trois parcours : `Choisir par bijou`, `Choisir par pierre` et `Me laisser guider`. Le grand fond aigue-marine a ete retire. La signature visuelle repose sur trois cadres ouverts Or mat, sans trait inferieur, avec panneaux et photographies compacts.

## Mutations Shopify Admin

Deux collections existantes ont ete publiees sur le canal Boutique en ligne. Aucun produit n'a ete modifie.

| ID Shopify | Handle | Publication Boutique en ligne | Membres controles |
| --- | --- | --- | ---: |
| `678216892763` | `par-pierre-oeil-de-tigre` | `2026-08-15T10:31:48+02:00` | 4 bijoux actifs |
| `678216925531` | `par-pierre-aventurine` | `2026-08-15T10:31:49+02:00` | 7 bijoux actifs |

Les produits en brouillon, stocks, prix, titres, handles et metafields produit n'ont pas ete touches. Les baguettes et objets hors bijou restent exclus des deux selections.

## Deploiements theme

Le lot Navigation V2 a ete pousse sans suppression sur le theme live avec 23 fichiers cibles. La liste exhaustive vit dans `docs/checkpoints/2026-08-15-1039-navigation-home-v2-live.md`. Pullback : 23/23 identiques au canonique local.

Le polish final de la section 3 a ensuite ete limite a :

- `assets/milaura-home-paths.css` ;
- `sections/milaura-home-paths.liquid`.

Pullback initial : 2/2 identiques. Le correctif de focus clavier a ensuite ete pousse sur le seul CSS, puis controle par un pullback 1/1 identique.

Aucun deploiement live supplementaire n'a ete realise pendant l'ecriture de ce handoff.

## Git

- commits de lot Navigation et collections : jusqu'a `bd2a0f20` ;
- merge Navigation V2 : `ddb0ca90` ;
- documentation de l'activation : `30c16918` ;
- commit section 3 : `979e0223` ;
- merge section 3 : `5bc962ac` ;
- correctif focus : `486d6cae` ;
- merge correctif focus : `2a77605f` ;
- documentation du polish : `fae10a9f` ;
- branche de lot : `codex/milaura-navigation-home-v2-20260814`, conservee localement et sur origin ;
- worktree Navigation V2 : retire proprement apres confirmation que `486d6cae` est ancetre de `codex/milaura-integration`.

## Validation finale

- validation JSON : succes ;
- `git diff --check` : succes ;
- Theme Check : 293 fichiers, 0 erreur, 18 avertissements historiques hors lot ;
- theme public detecte : `190430282075` ;
- routes Œil de tigre et Aventurine : HTTP 200 et canoniques propres ;
- sitemap : deux routes presentes ;
- desktop 1440 px : mega-menu Pierres complet et trois panneaux de la section 3 verifies ;
- mobile 390 et 360 px : aucun debordement horizontal, libelles lisibles et un seul panneau visible ;
- navigation clavier : fleches gauche et droite, focus Or mat et selection ARIA valides ;
- erreurs JavaScript pendant le parcours : aucune ;
- homepage : un seul H1.

## Etat concurrent preserve

Le seul worktree encore actif est :

`/Users/paesano/Documents/MilAura website/_worktrees/recommendation-system-20260814`

Branche : `codex/milaura-recommendation-system-20260814`.

Sept fichiers y sont modifies et appartiennent a la tache Recommandations :

- `assets/milaura-recommendations.css` ;
- `assets/milaura-recommendations.js` ;
- `sections/milaura-recommendations.liquid` ;
- `snippets/milaura-recommendation-card.liquid` ;
- `snippets/milaura-recommendation-shell.liquid` ;
- `templates/product.json` ;
- `templates/product.milaura-produit.json`.

Aucun de ces fichiers n'a ete edite, stage, merge ou deploye par la session Navigation V2.

## Risques et suites

1. Œil de tigre ne compte que quatre bijoux actifs au dernier controle, sous le seuil editorial prefere de cinq.
2. La session Inventaire reste proprietaire des produits, stocks, brouillons et retraits catalogue.
3. GSC, GA4, Merchant Center et Pinterest restent non verifies faute d'acces legitime configure.
4. Les 13 anciennes collections sans metas definitives restent dependantes d'un catalogue fiable.
5. La Selection d'aout doit etre remplacee avant septembre 2026.
6. Recommandations reste un lot de developpement sans GO live.

## Prompt de reprise

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md` et ce checkpoint. Navigation V2 et la section 3 aux cadres ouverts Or mat sont live sur `190430282075`. Le worktree Navigation a ete retire. Le worktree Recommandations reste actif avec sept fichiers modifies a preserver et aucun GO live. Commence en lecture seule, respecte les proprietes de fichiers et ne touche pas aux produits ou stocks sans autorisation explicite.
