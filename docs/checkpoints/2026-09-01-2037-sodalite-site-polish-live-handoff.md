# Handoff Rentree Sodalite, polish site ferme et live

Date : 2026-09-01 20:37 CEST

Statut : `FERME, VALIDE PAR PATRICE, INTEGRE ET LIVE`

## Prompt de reprise court

```text
Salut Codex, reprends MilAura apres la fermeture du polish site Rentree Sodalite. Lis AGENTS.md, docs/codex-handoff.md puis uniquement docs/checkpoints/2026-09-01-2037-sodalite-site-polish-live-handoff.md. Commence en lecture seule. La Home Sodalite et la landing /collections/selection-de-karine sont live et validees visuellement. Ne les modifie pas par deduction. En cas de regression, reproduis-la sur le live et propose un lot minimal. Aucun code, theme, Admin, Ads, credit creatif ou live sans reservation et GO separes.
```

## Resultat produit

Patrice a valide visuellement la section Sodalite de la Home, le hero de la landing et le produit star. Le site est ferme pour ce polish.

- Home : scene immersive bord a bord, sans produit star, un seul CTA vers la selection.
- Video Home : demarrage au scroll, lecture unique de `10,041667 s`, arret sur la scene finale puis bouton `Rejouer`.
- Safari : si la lecture automatique est refusee ou figee, le bouton `Lire` apparait en bas a droite. Son clic lance le film, masque le bouton, puis `Rejouer` apparait en fin.
- Landing : meme scene finale et bijoux fixes, papillons seuls animes, boucle invisible de `15 s`.
- Hero landing : plein ecran, titre incruste dans le media, sans panneau blanc superieur.
- Produit star : Bracelet Horus conserve, diptyque desktop aligne, composition mobile bord a bord et fond mineral dedie sans bijoux.
- La bande blanche sous la video Home est supprimee. Le padding bas mesure est `0 px` lorsque la section ne contient aucune carte produit.

La creation des contenus sociaux et les Ads constituent un chantier distinct. Aucun GO site, theme ou live ne doit etre deduit d un futur GO creatif ou Ads.

## Dernier correctif et integration canonique

Branche source : `codex/milaura-sodalite-media-safari-20260901`.

- base : `78df9a58` ;
- commit source final : `d116c10dff26dee086a9f12988ef368e04517800` ;
- commit d integration : `e191857c98ac0ce20b23ea09f1fdbb2999f76ee9` ;
- branche canonique : `codex/milaura-integration` ;
- `HEAD` local et upstream annonces alignes au moment de la fermeture.

Le commit `e191857c` contient exactement six fichiers :

- `sections/milaura-selection-atelier.liquid` ;
- `assets/milaura-home-seasonal-media.js` ;
- `assets/milaura-rentree-sodalite-hero-v4-desktop.mp4` ;
- `assets/milaura-rentree-sodalite-hero-v4-mobile.mp4` ;
- `assets/milaura-rentree-sodalite-landing-v2-desktop.mp4` ;
- `assets/milaura-rentree-sodalite-landing-v2-mobile.mp4`.

Les lots visuels precedents sont deja integres et live. Le registre `docs/workstreams.md` conserve leurs commits et perimetres exacts. Ne pas rejouer leurs branches historiques.

## Etat Shopify live

- theme live : `190430282075` ;
- theme prive Rentree : `200259043675`, conserve ;
- theme de developpement : `199421952347`, intact ;
- Home : `https://milaura.fr/` ;
- landing : `https://milaura.fr/collections/selection-de-karine` ;
- CDN public observe : theme `t/3` ;
- push live cible avec `--allow-live --nodelete --strict --only` sur les six chemins ;
- pullback live : `6/6` fichiers strictement identiques au commit d integration.

Aucun Admin, produit, prix, stock, statut, collection, ordre catalogue, Ads ou canal publicitaire n a ete modifie dans ce dernier lot.

## Optimisation medias

Les fichiers restent des MP4 H.264 avec `faststart`. Un WebP anime n a pas ete retenu : il aurait ete moins adapte a ces films et n aurait pas apporte le meme compromis compatibilite, poids et controle de lecture.

- Home desktop : `3 370 535` octets ;
- Home mobile : `3 700 322` octets ;
- Landing desktop : `4 311 962` octets ;
- Landing mobile : `3 107 550` octets ;
- total final : `14 490 369` octets contre `26 467 795` octets ;
- reduction totale : `45,3 %` ;
- dimensions, cadence et durees conservees ;
- atome `moov` place avant `mdat` sur les quatre fichiers.

## Verifications executees

- Theme Check : `0 erreur`, `16 warnings historiques` hors lot.
- Controle copywriting : `PASS`, `281 fichiers`.
- Syntaxe JavaScript : PASS.
- Comparaison source vers integration : `6/6` identiques.
- Pullback theme prive : `6/6` identiques.
- Pullback theme live : `6/6` identiques.
- QA publique Home en `360`, `390`, `430` et `1440 px` : aucun overflow horizontal, video responsive correcte et padding bas `0 px`.
- QA publique Home Chrome : lecture au scroll, `loop=false`, fin a `10,041667 s`, scene finale fixe et bouton `Rejouer` visible en bas a droite.
- QA Safari reelle sur le theme prive : fallback `Lire` visible en bas a droite, clic fonctionnel, bouton masque pendant la lecture, puis `Rejouer` en fin.
- QA publique landing en `360`, `390`, `430` et `1440 px` : aucun overflow, bonne source mobile ou desktop, lecture active et `loop=true` sur `15 s`.
- Les erreurs console observees concernent uniquement les scripts Shopify Privacy Banner et Web Pixels en echec de telemetrie. Aucune erreur propre au lot Sodalite.

## Limite de preuve Safari

Le comportement Safari exact a ete controle sur le theme prive avant le live. Le live a ensuite ete prouve identique par pullback bit a bit des six fichiers et par QA publique sur le CDN live. Une nouvelle verification Safari publique n est necessaire que si une regression est reproduite sur un appareil client.

## Etat du depot a la fermeture

Le checkout principal est volontairement sale avec des travaux concurrents hors Sodalite :

- `.github/workflows/ci.yml` ;
- `.github/workflows/cla.yml` ;
- `.github/workflows/stale.yml` ;
- `AGENTS.md` ;
- `docs/project-state.md` ;
- `docs/workstreams.md` ;
- `docs/checkpoints/2026-09-01-1457-inventory-v4-lot-22-drafts.md` non suivi ;
- `docs/codex-handoff 2.md` non suivi et protege ;
- six fichiers HEIC non suivis dans `mail template commercial milaura/`.

Ces fichiers appartiennent a d autres travaux et ne doivent pas etre nettoyes, restaures, stages ou commits globalement. Le worktree source Sodalite est propre et aligne sur sa branche distante.

## Reouverture eventuelle

Le polish site Sodalite ne possede plus de lot ouvert. En cas de nouveau retour :

1. reproduire le defaut sur le live en lecture seule ;
2. distinguer regression reelle, preference creative et chantier social ;
3. reserver les fichiers et le theme exacts ;
4. obtenir un GO implementation prive distinct ;
5. obtenir ensuite un GO integration et live distinct ;
6. ne jamais toucher a Admin ou Ads sans leurs GO propres.
