# Heroes editoriaux GPT Image 2

Date : 2026-08-13 20:58 CEST

Statut : implemente, valide, integre et live apres le GO explicite de Patrice le 2026-08-13.

## Perimetre livre

Trois hubs :

- `/pages/pierres-de-naissance` ;
- `/pages/cadeaux-anniversaire-de-mariage` ;
- `/pages/bijoux-par-pierre`.

Sept collections :

- `/collections/bagues-pierres` ;
- `/collections/par-pierre-amethyste` ;
- `/collections/par-pierre-aigue-marine` ;
- `/collections/par-pierre-agate` ;
- `/collections/par-pierre-quartz-rose` ;
- `/collections/par-pierre-lapis-lazuli` ;
- `/collections/par-pierre-amazonite`.

## Direction appliquee

- vingt assets WebP : dix compositions desktop et dix recompositions mobile ;
- une scene de joaillerie coherente par destination, construite avec les references produit MilAura ;
- palettes propres aux pierres ;
- zones de respiration reservees au texte HTML ;
- aucun texte, CTA ou symbole de marque incruste dans les images ;
- suppression du collage CSS a trois cadres sur les hubs ;
- suppression du filet decoratif qui traversait encore le hero Naissance ;
- conservation de l'ancien hero collection en repli pour les collections non mappees ;
- titre public `Bijoux en amethyste` sur le hero, sans mutation du titre ou du handle Shopify.

## Fichiers theme

- `sections/milaura-catalogue-hub.liquid` ;
- `assets/milaura-catalogue-hub.css` ;
- `sections/milaura-collection-hero.liquid` ;
- vingt assets `assets/milaura-hero-editorial-*.webp`.

Poids total des vingt images : 2 747 684 octets.

## Correctifs issus du controle reel

Le CSS historique `Halo Vision OS` appliquait un `backdrop-filter: blur(20px)` au `.page-width` du hero collection. Il floutait toute la photographie derriere le texte. Le nouveau hero neutralise localement ce fond, cette bordure, cette ombre et ce filtre, sans modifier le CSS global ni les autres sections.

Le wrapper Shopify ajoutait aussi 15 px de padding lateral et neutralisait la superposition du hero avec la navbar. Le correctif est limite au wrapper de cette section. Le hero commence maintenant a 88 px sur desktop et 102 px sur mobile, comme les hubs, juste apres le bandeau d'engagement.

## Validation

- `git diff --check` : OK ;
- `shopify theme check --fail-level error` : 0 erreur, 29 avertissements historiques dans 12 fichiers ;
- theme de developpement : `199421952347` ;
- push cible : 23 fichiers uniquement, avec `--nodelete --strict` ;
- pullback frais : 23 fichiers sur 23 identiques bit a bit ;
- matrice Playwright : 10 routes x desktop 1440 x 1000 et mobile 390 x 844 ;
- vingt controles HTTP 200 ;
- exactement un H1 sur chaque route et chaque viewport ;
- asset desktop charge sur desktop et asset mobile charge sur mobile ;
- aucune image en echec ;
- aucun debordement horizontal ;
- aucun `backdrop-filter` sur les sept heroes collection.

Les captures de controle vivent dans le worktree sous `.playwright-cli/editorial-heroes/` et ne sont pas versionnees.

## Incident Shopify CLI

Le premier pullback a rencontre la corruption connue des preferences Shopify CLI : `RangeError: Maximum call stack size exceeded`. Aucun processus Shopify n'etait actif. Le dossier a ete deplace sans lecture vers :

`/Users/paesano/Library/Preferences/shopify-cli-theme-conf-nodejs.backup-20260813-2055`

Shopify CLI a recree des preferences saines, puis le pullback frais a reussi.

## Etat de publication

- theme de developpement : deploye et valide ;
- theme live `190430282075` : deploye le 2026-08-13 apres GO live explicite ;
- produits, prix, stock, menus, pages et collections : aucune mutation ;
- push live : 23 fichiers uniquement, avec `--nodelete --strict --allow-live` ;
- source de deploiement : snapshot Git immuable `017ee2e3`, isole du checkout d'integration occupe temporairement par le lot UI ;
- pullback live frais : 23 fichiers sur 23 identiques bit a bit ;
- controle public : 10 routes HTTP 200, exactement un H1, aucun `noindex` et deux assets Hero attendus par route ;
- controle Playwright : Hero Naissance charge et correctement cadre sur desktop et mobile ;
- les erreurs console relevees sont limitees au cadre Shop App refuse par sa propre politique CSP, sans lien avec le Hero.

La premiere tentative de push live a ete bloquee avant mutation par `--strict`, car le dossier isole ne contenait pas les dependances requises par Theme Check. Le dossier a ensuite ete complete depuis le meme snapshot Git, puis le push cible a reussi. Aucun push complet du theme n'a ete effectue.

## Git

- commit du lot sur la branche ephemere : `0d6d5c42` ;
- integration sur la branche canonique : `a3c26aaa` ;
- le conflit d'integration etait limite aux anciennes regles CSS du collage Hero dans `assets/milaura-catalogue-hub.css` ;
- resolution : suppression de ces regles devenues mortes et conservation des evolutions plus recentes des grilles produit et destinations ;
- branche canonique poussee sur `origin/codex/milaura-integration` apres la documentation de fermeture.
- worktree et branche ephemere retires ; les captures Playwright sont archivees temporairement sous `/private/tmp/milaura-editorial-heroes-playwright-20260813`.
- commit miroir Shopify du push Heroes : `65b04a08` ; rattachement non-modifiant avec le miroir UI par `75c8171d`.

## Regle pour les futures pages

Toute nouvelle page de destination doit reprendre le systeme `Heroes editoriaux de destination` de `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md` : scene unique, vrais produits, paire desktop/mobile, palette propre a l'univers, texte HTML et aucun collage CSS ou decoration de luxe generique.
