# Bibliothèque saisonnière, Sodalite permanente et Sélection de Karine, live

Date : 2026-09-23 08:07 CEST

## Statut final

`FERME, INTEGRE, POUSSE ET LIVE VERIFIE` apres validation complete puis GO live explicite de Patrice.

- Branche source : `codex/milaura-seasonal-library-20260923`
- Commit source : `f58e66a92bb65fc16a343c0eaeea0595e948a707`
- Worktree source : propre puis retire apres integration ; branche distante conservee
- Branche d integration : `codex/milaura-integration`
- Commit d integration : `2ab64ef1711eebf49f1ddc67ce5811cfd19689e3`
- Theme public : `190430282075`, `dawn-X-milaura/main`
- Theme prive de recette : `200259043675`

Le checkout d integration contenait deja des modifications concurrentes dans `AGENTS.md`, `docs/codex-handoff.md` et `docs/project-state.md`. Elles ont ete preservees et exclues de l integration. Les fichiers non suivis concurrents ont egalement ete laisses intacts.

## Architecture durable livree

1. La section `Home Occasion` reste le slot saisonnier recurrent. Noel, Saint-Valentin ou une autre campagne peuvent remplacer son manifeste et sa destination sans recreer l architecture.
2. La page permanente `/pages/selections-saisonnieres` sert de bibliotheque publique aux campagnes encore utiles. Elle utilise un vocabulaire intemporel, sans parler d archive ou de campagne expiree.
3. Une landing centree sur une pierre peut survivre a sa campagne et rejoindre le parcours `Pierres de A a Z`.
4. `/collections/par-pierre-sodalite` est devenue intemporelle : aucune mention `Rentree` ou `Septembre 2026`, medias responsives `landing-v2` conserves, contenu recentre sur la Sodalite et catalogue accessible.
5. La Home remplace l ancienne mise en avant Aigue-marine par `La selection de Karine`, alimentee par la collection canonique `/collections/selection-de-karine`.
6. Le menu `Cadeaux` remplace `Rentree en Sodalite` par `Selection de Karine` sur desktop et mobile.
7. Le guide `Pierres de A a Z` rend Sodalite cliquable vers `/collections/par-pierre-sodalite` avec `Voir les bijoux`.

Le contrat operatoire et le registre machine sont conserves dans `docs/reference/HOME-SECTION-2-OCCASIONS.md` et `docs/reference/milaura-home-occasion-registry.json`. Le manifeste Automne vit dans `docs/campaigns/automne/manifest.md`.

## Page Shopify Admin creee et publiee

- ID : `168788197723`
- Titre et H1 : `Sélections saisonnières`
- Handle : `/pages/selections-saisonnieres`
- Template : `selections-saisonnieres`
- Visibilite : visible
- SEO title : `Sélections saisonnières de bijoux | MilAura`
- Meta description : `Retrouvez les sélections MilAura pour les temps forts de l’année : bijoux, pierres et idées cadeaux choisis par Karine.`

Le footer public pointe vers cette page seulement apres sa creation et sa publication.

## Release live ciblee

Huit fichiers ont ete pousses avec `--allow-live --nodelete --strict` et des `--only` explicites :

- `sections/milaura-footer.liquid`
- `sections/milaura-home-karine-selection.liquid`
- `sections/milaura-seasonal-library.liquid`
- `snippets/milaura-nav-curated-links.liquid`
- `templates/collection.milaura-pierre-sodalite.json`
- `templates/index.json`
- `templates/page.milaura-guide-pierres.json`
- `templates/page.selections-saisonnieres.json`

Le pullback live est identique octet pour octet sur les huit fichiers.

## Nettoyage Sodalite distant

Douze medias orphelins, total Git `18 571 046` octets, ont ete supprimes localement puis du theme live par une commande de suppression strictement ciblee, sans `--nodelete` et avec un `--only` par chemin :

- `assets/milaura-rentree-sodalite-chapelet-porte.webp`
- `assets/milaura-rentree-sodalite-chloe-6s-4x5.mp4`
- `assets/milaura-rentree-sodalite-chloe-poster-4x5.webp`
- les quatre medias `milaura-rentree-sodalite-hero-v3-*`
- les quatre medias `milaura-rentree-sodalite-hero-v4-*`
- `assets/milaura-rentree-sodalite-landing-desktop-v1.mp4`

L ancien template non affecte `templates/collection.selection-de-karine.json`, qui conservait une presentation Sodalite datee, a ete supprime de la meme facon.

Preuves apres suppression :

- pull cible du theme live : aucun des treize chemins supprimes ne revient ;
- seuls les quatre medias `milaura-rentree-sodalite-landing-v2-*` reviennent et restent donc bien presents ;
- huit anciennes URLs CDN repondent directement `404` ;
- les quatre URLs V4 repondent `404` avec le cache-buster `?v=202609230807`, ce qui confirme leur absence a l origine ;
- les memes quatre URLs V4 sans query peuvent encore repondre temporairement `200` depuis le cache CDN Shopify.

Les fichiers supprimes restent recuperables dans l historique Git anterieur a `f58e66a9` et `2ab64ef1`.

## Verification technique

- `git diff --check` : PASS avant integration.
- `python3 tools/check_copywriting.py` : `COPYWRITING MILAURA: PASS`, 362 fichiers controles.
- `shopify theme check` : 0 erreur, 16 avertissements historiques dans 8 fichiers hors perimetre.
- Pullback des huit fichiers publics : `8/8` identiques.
- Pull cible post-suppression : `13/13` absents, `4/4 landing-v2` presents.

## QA publique

Mobile `390 x 844` et desktop `1440 x 900` :

- Home : un H1, nouvelle section `La sélection de Karine`, trois liens vers la collection, aucune Aigue-marine dans cette section, aucun debordement.
- Hub : H1 `Sélections saisonnières`, canonical `/pages/selections-saisonnieres`, carte Automne vers `/collections/selection-automne`, aucun debordement.
- Sodalite : H1 `La sodalite, un bleu profond à porter`, aucune mention `Rentrée` ou `Septembre 2026`, video `landing-v2` presente, dix liens produit detectes, aucun media V4 reference, aucun debordement.
- Guide : Sodalite pointe vers `/collections/par-pierre-sodalite` avec `Voir les bijoux`.
- Navigation : deux entrees `Sélection de Karine`, desktop et mobile, zero `Rentrée en Sodalite`.
- Recontrole apres suppression : Home, Sodalite et hub toujours conformes.

## Hors perimetre preserve

- Aucun produit, stock, prix, statut, canal produit, Ads, Pinterest ou Search and Discovery modifie.
- L audit catalogue global, notamment les pierres absentes ou mal referencees comme le Grenat, appartient a la session dediee de Patrice et n est pas absorbe par ce lot.
- Le polish visuel ulterieur de la Home, de la landing et du reste du site reste un chantier separe.

## Conclusion

Le dispositif saisonnier est maintenant reutilisable, la Sodalite est redevenue une categorie permanente, la selection de Karine est correctement distribuee, les anciens fichiers lourds ont ete retires du source et du theme live, et les routes publiques ont ete verifiees apres nettoyage.
