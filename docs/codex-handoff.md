# MilAura - Handoff Codex actif

Date de mise a jour : 2026-08-15 11:38 CEST

## Etat de reprise

Navigation V2 et le polish de la section 3 de la homepage sont live sur `https://milaura.fr/` apres validation et GO live explicites de Patrice.

Le menu public donne maintenant six entrees structurantes : `Nouveautés`, `Bijoux`, `Pierres`, `Rituels & bien-être`, `Cadeaux` et `Guides`. Les bougies ne sont plus une categorie principale : elles vivent dans `Rituels & bien-être`. `Pierre de naissance` vit dans `Cadeaux`, sans doublon dans `Pierres`.

Le menu `Pierres` propose :

- tous les bijoux par pierre ;
- `Pierres de A à Z` ;
- `Histoire et symbolique` ;
- `Choisir selon son émotion du moment` ;
- six pierres mises en avant : Améthyste, Quartz rose, Œil de tigre, Lapis-lazuli, Aigue-marine et Aventurine.

La section 3 de la homepage conserve trois parcours : `Choisir par bijou`, `Choisir par pierre` et `Me laisser guider`. Elle utilise maintenant trois cadres ouverts Or mat, sans trait inferieur, sans fond bleu-vert repris du Hero et avec des panneaux et photographies plus compacts. Le diagnostic de Karine reste la destination du troisieme parcours.

Le Hero final et son bandeau-vitrine restent inchanges : `MilAura`, point or, slogan `Bijoux & émotions`, une seule scene minerale, H1 `La beauté des bijoux rencontre les vertus des minéraux`, bandeau Quartz rose poudre et masquage pendant l'ouverture du panier.

Le chantier Recommandations est le seul worktree encore actif. Il reste reserve a sa tache, sur le theme de developpement uniquement. Ses sept fichiers modifies n'ont pas ete touches pendant la cloture Navigation V2.

## Git et worktrees

- depot actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche d'integration : `codex/milaura-integration` ;
- theme live : `190430282075` ;
- theme de developpement partage : `199421952347` ;
- branche Navigation V2 : `codex/milaura-navigation-home-v2-20260814`, conservee localement et sur origin ;
- worktree Navigation V2 : retire le 2026-08-15 a 11:38 CEST apres verification que `486d6cae` est bien ancetre de l'integration ;
- worktree Recommandations : `/Users/paesano/Documents/MilAura website/_worktrees/recommendation-system-20260814` ;
- branche Recommandations : `codex/milaura-recommendation-system-20260814` ;
- etat Recommandations a la cloture : sept fichiers modifies et preserves, sans integration ni publication par cette session.

## Livraisons Navigation V2

### Catalogue Shopify

Deux collections existantes ont ete publiees sur le canal Boutique en ligne le 2026-08-15. Aucun produit n'a ete modifie.

| ID Shopify | Route | Publication | Selection controlee |
| --- | --- | --- | ---: |
| `678216892763` | `/collections/par-pierre-oeil-de-tigre` | `2026-08-15 10:31:48 CEST` | 4 bijoux actifs |
| `678216925531` | `/collections/par-pierre-aventurine` | `2026-08-15 10:31:49 CEST` | 7 bijoux actifs |

Les deux routes sont en HTTP 200, canoniques et presentes dans le sitemap. Œil de tigre reste sous le seuil editorial prefere de cinq bijoux. La session Inventaire doit recontroler ce seuil apres consolidation du stock reel.

### Theme live

Le lot Navigation V2 a ete pousse sur le theme live `190430282075` avec 23 fichiers cibles, sans suppression. Merge canonique : `ddb0ca90`. Le pullback live est identique 23/23.

Le polish de la section 3 a ensuite ete livre avec deux fichiers cibles :

- `assets/milaura-home-paths.css` ;
- `sections/milaura-home-paths.liquid`.

Commits de lot : `979e0223`, puis `486d6cae` pour le focus Or mat. Merges d'integration : `5bc962ac`, puis `2a77605f`. Pullbacks live : 2/2, puis CSS final 1/1, tous identiques.

## Validation finale

- Theme Check : 293 fichiers, 0 erreur, 18 avertissements historiques hors lot ;
- validation JSON : succes ;
- `git diff --check` : succes ;
- homepage publique : theme `190430282075`, un seul H1 ;
- desktop 1440 px : mega-menu Pierres et trois panneaux de la section 3 controles ;
- mobile 390 et 360 px : aucune largeur excedentaire, libelles lisibles et un seul panneau actif ;
- clavier : fleches gauche et droite, focus Or mat et `aria-selected` valides ;
- erreurs JavaScript pendant les parcours : aucune ;
- aucun produit, stock, prix, metafield produit, panier, livraison ou PDP modifie par le polish de la section 3.

## Prochain ordre d'execution

1. Continuer le systeme de recommandation dans son worktree et sur le theme de developpement uniquement. Ne pas le publier sans GO visuel puis GO live explicites.
2. Laisser la session Inventaire controler les membres, les stocks et les statuts produit. Reauditer ensuite Œil de tigre et les anciennes collections.
3. Mesurer les parcours du menu quand GSC et GA4 seront accessibles. Ne pas ajouter de nouvelles routes sur intuition seule.
4. Preparer le remplacement de la Selection d'aout par la campagne de rentree avant septembre 2026.

## Dependances et risques ouverts

- Œil de tigre : 4 bijoux actifs au dernier controle ;
- 18 baguettes minerales a retirer du catalogue public apres controles URL, commandes et Search Console ;
- 13 anciennes collections sans metas definitives tant que membres, stock et contenu ne sont pas fiables ;
- pages mensuelles Naissance et pages enfants Mariage reservees, non creees ;
- GSC, GA4, Merchant Center et Pinterest non verifies faute d'acces legitime configure ;
- Journal, netlinking, activation Pinterest, tracking et Ads restent des chantiers du plan directeur ;
- systeme de recommandation non publie et modifications concurrentes en cours.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/reference/2026-08-12-repository-workflow.md`
5. `docs/reference/2026-08-12-copywriting-milaura.md`
6. `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`
7. `docs/checkpoints/2026-08-15-1039-navigation-home-v2-live.md`
8. `docs/checkpoints/2026-08-15-1054-home-paths-open-gold-live.md`
9. `docs/checkpoints/2026-08-15-1138-navigation-home-v2-handoff.md`

## Interdits de reprise

- ne pas modifier un fichier reserve dans `docs/workstreams.md` ;
- ne pas toucher aux modifications non commitees du worktree Recommandations ;
- ne pas pousser le theme complet ;
- ne pas modifier produit, stock, prix ou publication dans un lot UI ;
- ne pas reintroduire une entree principale `Bougies` ;
- ne pas dupliquer `Pierre de naissance` dans `Pierres` ;
- ne pas reintroduire les trois parcours dans le Hero ;
- ne pas confondre validation technique, GO visuel et GO live.

## Prompt de reprise general

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md` et `docs/checkpoints/2026-08-15-1138-navigation-home-v2-handoff.md`. Navigation V2, les guides Pierres, les collections Œil de tigre et Aventurine, ainsi que la section 3 aux cadres ouverts Or mat sont live sur le theme `190430282075`. Le worktree Navigation a ete retire. Seul le worktree Recommandations reste actif et contient des modifications concurrentes a preserver. Commence en lecture seule, choisis un seul lot, respecte le registre et ne publie rien sans GO visuel puis GO live explicites de Patrice.
