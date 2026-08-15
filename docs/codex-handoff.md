# MilAura - Handoff Codex actif

Date de mise a jour : 2026-08-15 08:50 CEST

## Etat de reprise

Le Hero de marque V2 et son bandeau-vitrine sont live sur `milaura.fr` apres validation visuelle et autorisation live explicites de Patrice. Les trois bulles du pont Hero ont ete retirees. Le bandeau presente successivement une preuve LFG, la selection de Karine et l'atelier de Metz, avec une photographie reelle, une rotation de six secondes et un controle manuel. La phrase validee est `Tous nos minéraux et bijoux sont soigneusement sélectionnés par Karine.` Sa version canonique utilise le Quartz rose poudre `#F0D9E0`, mesure 58 px sur desktop et 54 px sur mobile, avec medaillons inchanges a 52 px et 46 px.

Le polish du 2026-08-15 est egalement live : le bandeau disparait quand le panier s'ouvre et revient a sa fermeture, la scene minerale principale remonte de 70 px sur mobile, le H1 est `La beauté des bijoux rencontre les vertus des minéraux` et le descriptif est verrouille sur les deux lignes validees. Le correctif reste limite a `sections/milaura-announcement.liquid` et `sections/milaura-hero-portal.liquid`, sans modification du panier ni de la navbar. Commit de lot `14b2ee7b`, merge canonique `4d0b3c39`, pullbacks developpement et live 2/2 identiques. Navigation V2 a recu ce dernier contrat et la liberation definitive des deux sections. Recommandation reste un lot de developpement distinct.

Le polish final du Hero est live depuis le 2026-08-15 a 08:42 CEST. Le slogan valide est `Bijoux & émotions`, place apres `MilAura` et un point or de 5 px. Les trois parcours, leur logique de changement d'image et les deux scenes secondaires ont ete retires entierement ; le Hero conserve uniquement la scene minerale preferee de Patrice. Aucun CTA n'est ajoute avant la decision future sur un eventuel lien `Découvrir` vers la section suivante. Commit `46d793d3`, merge canonique `6d986c20`, pullbacks developpement et live 1/1 identiques. Navigation V2 a recu ce nouveau contrat et doit preserver ses trois lignes d'integration navbar. Recommandation reste un lot de developpement distinct.

Le micro-patch navbar du 2026-08-15 a 08:50 CEST remplace le fond aigue-marine au scroll par une surface nacree transparente a 16 %, un flou de 12 px et un filet nacre fin. Patrice a demande un workflow court : aucun theme de developpement ni Playwright, push live direct cible puis pullback 1/1 identique. Commit `24aaa5db`, merge canonique `8b781461`, transmis a Navigation V2.

La prochaine reprise design peut se concentrer sur :

1. Navigation et homepage V2 dans son worktree deja actif ; le nouveau contrat canonique `8b781461` est transmis pour la future integration, sans push live autorise ;
2. le systeme de recommandation dans son worktree distinct ;
3. les ajustements de cadrage des Heroes de destination, uniquement apres retour visuel de Patrice ;
4. l'ajout d'Amethyste au hub Bijoux par pierre.

Ils ne doivent pas reserver les memes fichiers ni pousser simultanement sur le meme theme Shopify.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/reference/2026-08-12-repository-workflow.md`
5. `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`
6. `docs/prompts/2026-08-14-hero-destination-da-reprise.md`
7. `docs/checkpoints/2026-08-14-0947-editorial-hero-da-session-handoff.md`
8. `docs/reference/MILAURA-CTA-SYSTEM-2026.md`
9. `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md`
10. `docs/checkpoints/2026-08-13-1840-home-seasonal-da-live-handoff.md`
11. `docs/checkpoints/2026-08-13-2058-editorial-heroes-gpt-image-2.md`
12. `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`

## Direction visuelle verrouillee le 2026-08-13

- simple, sobre, efficace et premium ;
- photographie prioritaire et jamais masquee ;
- surfaces transparentes par defaut sur les univers MilAura ;
- cadres de 1 px et details mineraux fins ;
- or mat utilise comme filet, pas comme grande surface ;
- titre, prix et actions groupes de facon compacte ;
- actions de carte soulignees, sans grosse pastille prune ;
- aucun fond blanc ajoute par reflexe ;
- aucun aspect bouton natif Dawn ;
- aucune decoration generique de luxe, diamant IA, gradient gratuit ou glassmorphism ;
- cibles tactiles, focus, contraste et etats fonctionnels preserves.

Pour tout futur Hero de destination : une scene photographique unique avec de vrais produits MilAura, une composition desktop et une recomposition mobile dediee, une palette propre a l'univers, le texte conserve en HTML et aucun collage CSS. Les overlays ne servent qu'a la lisibilite ; aucun flou, glassmorphism, trait decoratif ou symbole pseudo-luxe ne doit recouvrir l'image.

Hierarchie transmissible : produit exact, scene et matiere, texte HTML, action discrete. Le contrat photographique, la cartographie technique des dix destinations, les dimensions et le prompt GPT Image 2 sont dans `docs/prompts/2026-08-14-hero-destination-da-reprise.md`.

La palette, les polices et le logo restent ceux du Brand System du 2026-08-04. `assets/milaura-tokens.css` reste la seule source technique de couleur, typographie, espacement et geometrie.

## Etat Git et Shopify

- depot actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`
- branche d'integration : `codex/milaura-integration`
- `main` : miroir automatique du theme live
- theme live : `190430282075`
- theme de developpement : `199421952347`
- commit de production du lot Heroes : `0d6d5c42`
- integration canonique : `a3c26aaa`
- reconciliation du miroir Shopify live : `75c8171d`, arbre source inchange
- theme de developpement : 23 fichiers cibles, pullback 23/23 identique bit a bit
- theme live : 23 fichiers cibles, pullback 23/23 identique bit a bit
- validation publique : 10 routes HTTP 200, un H1, aucun `noindex`, deux assets Hero par page
- Theme Check : 0 erreur, 29 avertissements historiques
- nouvelle verification publique le 2026-08-14 a 09:47 CEST : dix routes HTTP 200, un H1, aucun `noindex`, deux assets Hero par route

Les worktrees et branches ephemeres des Heroes livres, de l'UI sitewide et du carrousel sont retires. Seuls les worktrees actifs Navigation V2 et Recommandation restent declares.

## Heroes de destination livres

Les dix routes sont listees dans le checkpoint `2058`. Toute future correction doit conserver la paire desktop/mobile, les vrais produits, le texte HTML et le push cible. Ne pas regenerer une composition deja validee pour corriger un simple cadrage CSS.

## Hero homepage V2 live

- commits du lot : `f88c9c36`, `204ef589` et `cc57efef` ;
- merge d'integration : `abb301fd` ;
- theme live : `190430282075` ;
- pullback : 9/9 identique bit a bit ;
- controle public direct : 1440, 430, 390 et 360 px, trois parcours actifs, aucune largeur excedentaire, navbar aigue-marine au scroll ;
- checkpoint : `docs/checkpoints/2026-08-14-1715-homepage-hero-v2-dev.md`.
- hotfix : commit `be2705e7`, merge `969f6c49`, deux sections live et pullback 2/2 identique ;
- etat public du hotfix : texte descriptif aligne au H1, ancien bandeau absent, label LFG absent, trois preuves de pont conservees ;
- controle public du hotfix : 1440, 430, 390 et 360 px, aucune largeur excedentaire, variable de bandeau `0px`, padding haut du body `0px` ;
- captures : `output/playwright/milaura-home-hero-hotfix-live-desktop-1440.png`, `output/playwright/milaura-home-hero-hotfix-live-mobile-390.png` et `output/playwright/milaura-home-hero-hotfix-live-mobile-390-bridge.png`.
- bandeau-vitrine quartz rose : commits `f5d561e1`, `55ca81b0`, merge `82873b97`, live `190430282075`, pullback 2/2 identique ;
- etat public actuel : 58 px desktop, 54 px mobile, medaillons 52/46 px inchanges, navbar alignee, aucune largeur excedentaire, rotation 0 vers 1 et `prefers-reduced-motion` 0 vers 0 ;
- captures : `output/playwright/milaura-proof-showcase-rose-live-desktop-1440-lfg.png`, `output/playwright/milaura-proof-showcase-rose-live-mobile-390-karine.png` et variantes aux quatre largeurs.
- polish panier, cadrage et copy : commit `14b2ee7b`, merge `4d0b3c39`, live `190430282075`, pullback 2/2 identique ;
- etat public du polish : bandeau masque avec le panier puis restaure, scene minerale remontee de 70 px sur mobile, H1 et deux lignes descriptives conformes, aucune largeur excedentaire ;
- captures : `output/playwright/milaura-hero-polish-live-mobile-390.png`, `output/playwright/milaura-hero-polish-live-desktop-1440.png` et `output/playwright/milaura-hero-polish-live-cart-mobile-390.png` ;
- polish final du Hero : commit `46d793d3`, merge `6d986c20`, live `190430282075`, pullback 1/1 identique ;
- etat public final : `MilAura • Bijoux & émotions`, point or de 5 px, une seule scene minerale, aucun parcours ni CTA dans le Hero ;
- controles : 1440, 390 et 360 px, aucune largeur excedentaire, aucun avertissement ou erreur console dans la preview ; HTTP public 200 ;
- captures : `output/playwright/milaura-hero-final-dev-desktop-1440.png` et `output/playwright/milaura-hero-final-dev-mobile-390.png` ;
- decision differee : choisir avec la navigation finale si un lien discret `Découvrir` doit faire defiler vers la section suivante.

## Baseline UI sitewide live

Reference de reprise : `docs/prompts/2026-08-13-sitewide-ui-css-refonte.md`.

Le lot est ferme et live. Ses variantes partagees sont la baseline actuelle. Toute extension doit conserver les adaptateurs explicites et ne jamais remplacer globalement `.button` ou `.card`.

## Autres priorites conservees

- ajouter Amethyste au hub `/pages/bijoux-par-pierre` si la destination manque encore dans le contenu ;
- polir legerement les cross-sells Mariage et Naissance sans les supprimer ;
- conserver le contrat canonique final `8b781461`, le quartz rose et les hauteurs 58/54 px lors de l'integration future de Navigation V2 ;
- verifier plus tard GSC, GA4, Merchant Center, Pinterest et le parcours reel du point relais.

## Interdits de reprise

- travailler a plusieurs dans le checkout d'integration ;
- creer un clone complet ou un dossier numerote ;
- modifier un fichier reserve dans `docs/workstreams.md` ;
- pousser le theme complet ;
- reintroduire Playfair Display, Lato, l'or historique ou Vision OS ;
- ecrire des valeurs hex ou des `font-family` dans les sections ;
- recharger `search-form.js` ou `predictive-search.js` depuis une section ;
- modifier un produit, son prix, son stock ou sa publication dans un lot UI ;
- confondre validation technique, GO visuel de Patrice et autorisation live.

## Prompt de reprise general

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md`, `docs/codex-handoff.md`, `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md` et `docs/checkpoints/2026-08-14-1715-homepage-hero-v2-dev.md`. Le Hero homepage V2, les dix Heroes de destination, l'UI sitewide et le carrousel Nouveautes sont live. Navigation V2 et Recommandation restent sur leurs worktrees de developpement. Commence en lecture seule, choisis un seul lot et respecte les reservations actives. Aucun nouveau live sans GO explicite de Patrice.
