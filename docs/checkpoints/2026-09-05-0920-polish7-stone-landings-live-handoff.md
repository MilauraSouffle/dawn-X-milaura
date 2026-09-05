# Polish 7, guides des landings pierre et produit star Aigue-marine

Date : 2026-09-05 09:20 CEST

Statut : `VALIDE VISUELLEMENT, INTEGRE, POUSSE ET LIVE`

## Resultat livre

- Les landings dediees Aigue-marine et Sodalite partagent maintenant la section reutilisable `milaura-stone-guide` apres leurs cartes produit.
- Le guide comporte trois onglets : `Vertus & symbolique`, `Choisir & porter` et `Entretien`.
- Les trois contenus sont presents dans le HTML initial pour conserver leur valeur SEO ; l interaction masque seulement les panneaux inactifs.
- Les medias sont cures separement pour chaque pierre et rendus par le snippet commun `milaura-stone-guide-media`.
- Le produit star Aigue-marine est `bague-argent-925-modele-01-aigue-marine-bresil-aa-1-piece-lo`, avec ses trois images, le titre `Bague Aigue-Marine Argent`, le prix et le CTA `Decouvrir la bague`.
- Le produit star Sodalite reste le bracelet Horus avec sa composition bento validee.

## Fichiers de production

- `sections/milaura-stone-guide.liquid`
- `snippets/milaura-stone-guide-media.liquid`
- `templates/collection.milaura-campaign-aigue.json`
- `templates/collection.selection-de-karine.json`

## Git et Shopify

- Branche canonique : `codex/milaura-integration`.
- Commit d integration : `ac2144de`, pousse sur `origin/codex/milaura-integration`.
- Theme live : `190430282075`.
- Push Shopify cible : quatre fichiers, `--allow-live --nodelete --strict --only`.
- Pullback live : `4/4` fichiers identiques bit a bit au checkout.
- Le theme prive de travail `200259043675` reste disponible comme preuve de preview.

## Verification

- `shopify theme check` : zero erreur ; 16 warnings historiques dans huit fichiers hors lot.
- `git diff --check` : PASS avant integration.
- Preview validee en desktop `1440 x 900` et mobile `390 x 844`, sans debordement horizontal ni erreur console.
- Storefront public Aigue-marine : produit star, lien produit, catalogue et guide visibles ; les onglets `Vertus & symbolique`, `Choisir & porter` et `Entretien` repondent.
- Storefront public Sodalite : Horus, catalogue et guide curaté visibles sur la route canonique.
- Les fichiers live et la preview responsive etant identiques, le rendu mobile livre est le rendu mobile valide avant le live.

## Limites et points de vigilance

- La bague Aigue-marine argent modele 01 etait affichee `Epuise` lors du controle public du 2026-09-05. Le choix est conserve conformement a la demande explicite de Patrice. Une remise en stock reste un lot catalogue distinct.
- La landing Aigue-marine est accessible avec `?view=milaura-campaign-aigue`. Ce deploiement n a modifie aucune affectation de template dans Shopify Admin. Une affectation canonique sans parametre, si elle est souhaitee, exige un controle Admin et un GO separe.
- Aucun produit, stock, prix, collection, canal, campagne ou Ads n a ete modifie.
- Le checkout d integration reste volontairement sale avec des travaux concurrents CI, documentation, calendrier Meta et medias mail. Ils ont ete preserves et exclus des commits Polish 7.

## Reprise recommandee

Le Polish 7 est ferme. La prochaine session ne doit pas le redeployer ni le reconstruire. Elle commence en lecture seule, demande a Patrice le prochain detail visuel de la landing, puis reserve un lot minimal avec preview, GO visuel, integration et live separes.

## Prompt de reprise

```text
Reprends le polish visuel MilAura depuis docs/checkpoints/2026-09-05-0920-polish7-stone-landings-live-handoff.md. Lis AGENTS.md, docs/project-state.md, docs/codex-handoff.md et docs/workstreams.md, puis commence en lecture seule. Le Polish 7 est ferme, pousse au commit ac2144de et live sur le theme 190430282075 : guides reutilisables Aigue-marine et Sodalite, trois onglets cures et bague Aigue-Marine Argent en produit star. Ne redeploie rien par deduction. Demande-moi le prochain polish de la landing, reproduis le point exact en desktop et mobile, puis garde preview, GO visuel, integration et live comme gates distinctes. Preserve tous les changements concurrents du checkout principal et n utilise jamais origin/main comme source d integration.
```
