# Handoff prioritaire : catalogue MilAura

Date : 2026-09-04 17:38 CEST. Statut : `PASSATION PRETE ; RETRAIT LEGACY NON EXECUTE`.

La prochaine session retire de la vente tous les anciens produits hors nouvel inventaire, en les passant en DRAFT sans suppression definitive de masse. Elle protege les produits canoniques du Sheet traites par toutes les sessions, y compris les IDs anciens reenrichis, et conserve tous les brouillons volontaires. Aucune exception pour les doublons ou les savons.

Patrice declare avoir active lui-meme tous les produits qu'il juge finalises. Cette declaration guide les decisions de conservation ; leurs statuts/canaux actuels restent a verifier en direct. Le dernier lot n'est plus « 47 DRAFT » : six cadeaux ont ete supprimes, les 41 autres statuts n'ont pas ete reaudites apres sa revue.

Reprise complete : [retrait legacy puis deux commandes](checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md).

## Prompt de reprise catalogue

```text
Reprends MilAura depuis docs/checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md. Commence en lecture seule par le Sheet, Shopify pagine et les preuves de toutes les sessions d'inventaire. Protege les IDs canoniques, y compris les anciens IDs reenrichis et tous les DRAFT volontaires. Puis passe tous les autres anciens produits actifs en DRAFT, sans suppression definitive, doublon ou savon compris. Sauvegarde et verifie chaque ID ; ne modifie pas les produits proteges. Les six cadeaux sont deja supprimes et exclus. Grenouille quartz rose validee ; trois calendriers et coffret refuses, intouchables avant les vraies photos. Apres ce retrait, attends les listes des deux commandes fournisseur, puis prepare Sheet, reassorts et nouvelles fiches sous workflow V4.1. Aucun nouveau DRAFT, activation ou publication sans GO adapte. Aucun theme ni Ads.
```

## Limites et autres chantiers

Les anciens GO FINAL47, prix nuls et exceptions de source sont epuises. Aucune mutation Shopify ou Sheet dans cette cloture. Les six suppressions precedentes et les controles sont documentes dans [le checkpoint cadeaux](checkpoints/2026-09-04-1659-inventory-gifts-six-deleted.md). Le total d'anciens produits a retirer sera calcule a la reprise, pas deduit des anciens compteurs.

Les informations ci-dessous concernent les autres chantiers, conserves sans reprise ni nouvelle verification. Pour l'inventaire, le checkpoint du 2026-09-04 a 17:38 prime sur les anciens prompts et chiffres.

---

> Mise a jour Polish 6, 2026-09-04 08:40 CEST : LIVE VERIFIE sur le theme `190430282075`, commit `4067ea35` pousse sur `codex/milaura-integration`. Titres, surtitres, CTA et derniers ajustements fleches/espacements approuves sont publies. Pullback 18/18, Home 360/390/430/768/1440 et regressions 390/1440 PASS. Details : [checkpoint Polish 6](checkpoints/2026-09-04-polish6-live.md). Les autres chantiers ci-dessous restent inchanges.

# Handoff Codex MilAura, Rentree Sodalite

Date : 2026-09-01 20:37 CEST

Statut : `POLISH SITE VALIDE, INTEGRE ET LIVE`

## Prompt de reprise rapide

```text
Reprends MilAura apres la fermeture du polish site Rentree Sodalite. Lis AGENTS.md, docs/codex-handoff.md puis uniquement docs/checkpoints/2026-09-01-2037-sodalite-site-polish-live-handoff.md. Commence en lecture seule. La Home Sodalite et /collections/selection-de-karine sont live et validees. Ne les modifie pas par deduction. En cas de regression, reproduis-la sur le live et propose un lot minimal. Aucun code, theme, Admin, Ads, credit creatif ou live sans reservation et GO separes.
```

## Etat ferme

- Theme live : `190430282075`.
- Commit canonique final : `e191857c98ac0ce20b23ea09f1fdbb2999f76ee9`.
- Home : video declenchee au scroll, une seule lecture de `10,041667 s`, fin fixe, puis `Rejouer`.
- Safari : fallback `Lire` en bas a droite si l autoplay est refuse ou fige.
- Landing : scene et bijoux fixes, papillons seuls animes, boucle invisible de `15 s`.
- Bande blanche Home supprimee.
- Medias H.264 faststart reduits de `45,3 %` au total.
- Pullback live : `6/6` fichiers identiques.
- QA publique : `360`, `390`, `430` et `1440 px`, sans overflow.
- Theme Check : `0 erreur`, `16 warnings historiques` hors lot.
- Aucun Admin, produit, stock, prix, collection, Ads ou canal publicitaire modifie.

Checkpoint complet : `docs/checkpoints/2026-09-01-2037-sodalite-site-polish-live-handoff.md`.

## Gates

Le polish site Sodalite ne possede plus de lot ouvert. Les creations pour TikTok, Meta et Pinterest, puis les Ads, constituent un chantier distinct. Aucun futur GO creatif ou Ads ne vaut autorisation de modifier le site.

Toute regression site doit etre reproduite en lecture seule, reservee sur des fichiers et un theme exacts, corrigee sur theme prive apres GO, puis integree et poussee live seulement apres un nouveau GO separe.

## Etat Git

La branche canonique est `codex/milaura-integration`. Le commit Sodalite est pousse sur origin. Le worktree source `sodalite-media-safari-20260901` est propre et aligne.

Le checkout principal reste volontairement sale avec des changements concurrents Inventaire, CI, documentation et medias non suivis. Aucun reset, nettoyage, staging global ou commit global ne doit etre execute. La liste exacte figure dans le checkpoint.

## Autres chantiers

- Inventaire : `docs/checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md` ; retrait legacy reversible, nouveaux IDs et DRAFT volontaires proteges.
- Template 1 marketing : reprendre depuis `docs/checkpoints/2026-09-01-1415-template-1-marketing-live-handoff.md` uniquement sur besoin precis.
- Mon Ecrin, Pinterest, SEO et acquisition conservent leurs propres gates et checkpoints.
