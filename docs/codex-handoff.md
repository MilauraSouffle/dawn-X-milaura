# MilAura - Handoff Codex actif

Date de mise a jour : 2026-08-13 17:13 CEST

## Mission de reprise

Reprendre apres la livraison live validee des trois hubs editoriaux Mariage, Naissance et Bijoux par pierre. La session Claude du bandeau et Hero reste independante ; la prochaine priorite Codex est d'etendre le systeme chromatique aux collections Amethyste, Aigue-marine puis aux autres pierres.

## Contrainte permanente : le systeme de design est en place depuis le 2026-08-13

A lire avant de toucher la moindre ligne de CSS, de Liquid ou de contenu.

- `assets/milaura-tokens.css` est la source unique de verite pour la couleur, la
  typographie et l'espacement. Il implemente la charte validee a 100 % par
  Patrice le 2026-08-04.
- Aucune valeur hex ni `font-family` en dur dans une section. Tout passe par une
  variable de ce fichier.
- Couleurs : Nacre `#FBF8F3`, Encre prune `#2F222D`, Or mat `#B9975B`,
  Aigue-marine `#6FA9A6`, Amethyste `#7A4D82`. L'Or mat souligne, il ne couvre
  jamais une grande surface.
- Polices : Gloock 400 en editorial, 24 px minimum, jamais pour la navigation,
  un bouton, un prix ou un texte long. Instrument Sans 400 a 700 en fonctionnel.
  Dancing Script 500 ou 600 en signature, deux a six mots, une presence par
  ecran.
- Les trois polices sont servies en WOFF2 sous-ensemble latin et declarees une
  seule fois dans les tokens. Ne jamais redeclarer un `@font-face` dans une
  section : dix blocs dupliques ont ete retires le 2026-08-13.
- Pas de `color-mix()` dans les tokens. Les nuances derivees sont calculees en
  OKLab puis figees en valeurs statiques, formule en commentaire. La fonction
  n'existe pas avant Safari 16.2 et une variable invalide fait tomber toute
  propriete qui la consomme.
- L'ancienne identite est morte : `Playfair Display`, `Lato`, l'or `#C0A062` et
  le glassmorphism `Vision OS`. Elle ne doit reapparaitre nulle part.
- `CLAUDE.md` du repo a ete reduit a `@AGENTS.md`. Il decrivait encore l'ancienne
  charte et chaque session la reappliquait, ce qui expliquait 414 occurrences.

Non traites volontairement et toujours ouverts : la geometrie, avec 163 rayons
superieurs a 20 px, et le glassmorphism, avec 171 `backdrop-filter`. Le nouveau
standard `--milaura-rayon-*` existe dans les tokens mais n'est applique nulle
part. Toute decision sur ces deux points appartient a Patrice.

## Piege JavaScript a ne pas reintroduire

`layout/theme.liquid` sert deja `search-form.js`, sans condition, et
`predictive-search.js` quand `settings.predictive_search_enabled` est actif. Ces
deux fichiers declarent leurs classes au niveau global. Toute section qui les
recharge provoque `Identifier 'SearchForm' has already been declared` sur toutes
les pages publiques. Le defaut existait dans `sections/milaura-navbar.liquid` et
a ete corrige le 2026-08-13.

## Lecture obligatoire

1. `AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/reference/2026-08-12-repository-workflow.md`
5. `docs/checkpoints/2026-08-12-1819-repository-cleanup.md`
6. `docs/checkpoints/2026-08-12-1829-homepage-shipping-labels-live.md`
7. `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`
8. `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md`
9. `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`
10. `docs/checkpoints/2026-08-12-1927-collection-pill-aqua.md`
11. `docs/checkpoints/2026-08-12-1931-pdp-visual-correction.md`
12. `docs/checkpoints/2026-08-13-0810-pdp-bonheur-heart.md`
13. `docs/checkpoints/2026-08-13-1010-seasonal-editorial-preview.md`
14. `docs/checkpoints/2026-08-13-0957-design-foundation-live.md`
15. `docs/checkpoints/2026-08-13-1015-hotfix-technique.md`
16. `~/Documents/Agentic-Ops/MILAURA-BRAND-SYSTEM-2026/`, la charte source

## Etat Git de depart

- Depot actif unique : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche d'integration : `codex/milaura-integration`.
- `main` reste le miroir automatique Shopify.
- L'integration contient l'historique du miroir Shopify jusqu'a `b1893898`, rattache sans changement d'arbre par `d8c8053d`.
- Le commit miroir Shopify des hubs `aee62c12` est rattache sans changement d'arbre par `82c2cc13`.
- Les branches et worktrees temporaires saisonnier, hotfix, PDP et hubs editoriaux ont ete fermes apres integration.
- Les quatre anciennes branches sont preservees par les tags `archive/2026-08-12/*`.
- Aucun clone numerote et aucun fichier temporaire ne reste dans la zone active.
- Aucun worktree Codex de lot ne reste actif.
- Les seules branches GitHub actives sont `main` et `codex/milaura-integration`.

Ne jamais demarrer un nouveau lot depuis `main`. Lire la branche d'integration courante dans `docs/workstreams.md`, creer un worktree gere, puis inscrire son ownership avant edition.

## Faits live confirmes

- Theme public : `dawn-X-milaura/main`, ID `190430282075`.
- Theme de developpement : `Development (c105a8-mac-1)`, ID `199421952347`.
- Catalogue V1 public : 4 pages utiles, 6 collections et 5 entrees de menu natives.
- Hero, selection d'aout, dock mobile, guide de decouverte, `Choisir sa pierre`, bandeau d'engagement et panier 30/50/80 sont live.
- Homepage Bagues pointe vers `/collections/bagues-pierres`.
- La homepage rend `Point relais offert dès 30 EUR` et `En point relais dès 30 EUR`. `templates/index.json` est identique bit a bit au pullback live.
- Le quiz principal reste `/pages/diagnostic-emotionnel`.
- La politique publique confirme point relais offert des 30 EUR, expedition sous 24 h du lundi au vendredi et livraison France sous 3 a 5 jours.
- PDP-P0, retrait Scratch, pills mobiles, bulle sociale historique et CTA prune sont live. L'accent final affiche `b♥nheur` en Lato rose avec un coeur a la place du premier `o`, sans Dancing Script. Le Hero live est identique bit a bit a Git.
- La capsule aigue-marine des collections est live depuis le 2026-08-12 19:37 CEST. Le fichier live est identique bit a bit a Git.
- La homepage rend la nouvelle selection de Karine sans information superposee aux photos, avec titre reutilisable, marqueurs en Dancing Script, quantite et ajout sous chaque carte.
- `/collections/selection-aout-2026` rend le Hero lagon compact sous la navigation, un seul H1, 20 cartes, une grille mobile a deux colonnes et aucun texte `Selection en stock`.
- Les neuf fichiers saisonniers du live sont identiques bit a bit a Git. Les deux routes publiques repondent en HTTP 200 et ne debordent pas sur les viewports controles.
- Les trois hubs editoriaux sont live : Mariage avec 7 annees et 3 produits, Naissance avec 12 mois et 4 produits, Bijoux par pierre avec 5 collections illustrees.
- Les six fichiers du lot hubs sont identiques bit a bit entre `codex/milaura-integration` et le theme live. Les trois routes publiques ont un H1, un seul `main`, aucun debordement desktop ou mobile, et les interactions des reperes sont conformes.

- Le theme rend desormais Gloock, Instrument Sans et Dancing Script, et rien
  d'autre. Verifie sur cinq routes et deux viewports : aucune police hors charte
  sur le texte visible, hors deux `SF Mono` volontaires sur la touche `Esc`.
- Les polices pesent 144 Ko au lieu de 416 Ko, soit 272 Ko economises par
  visiteur.
- `sections/main-search.liquid` est reparee. Elle passait un filtre Liquid dans
  un argument de `render`, ce que Liquid interdit : la section etait rejetee par
  Shopify depuis le 2026-03-13 et les resultats produit ne rendaient pas.
  `/search?q=bague` rend 11 resultats.
- Les elements `button`, `input`, `select` et `textarea` heritent de la police.
  Sans cette regle la feuille de style du navigateur leur impose Arial 13.33px,
  ce qui touchait onze elements visibles de la page d'accueil.
- L'Or profond de texte vaut `#926451`, soit 4.76:1 sur Nacre, AA. L'ancien
  `#8F723A` ne tenait que 4.38:1 et servait pourtant de couleur de texte.
- Quatre champs SEO ont ete corriges dans Shopify Admin le 2026-08-13 par un
  agent navigateur : titres des pages `bijoux-par-pierre` et
  `pierres-de-naissance`, qui contenaient un prefixe duplique, meta description
  de `diagnostic-emotionnel`, qui portait six fautes et une promesse interdite,
  et meta description globale.
- La meta description globale alimente trois surfaces d'un coup : meta de
  l'accueil, `og:description` et JSON-LD `WebSite.description`. Elle ne porte
  plus d'emoji et nomme le Laboratoire Francais de Gemmologie.
- Patrice confirme que la totalite des pierres MilAura passe par le Laboratoire
  Francais de Gemmologie a Paris a leur arrivee en France. Le LFG est accredite
  COFRAC ISO 17025 et est le seul organisme accredite en France sur la totalite
  des gemmes. La preuve est documentee et rattachee a un perimetre complet, donc
  utilisable.
- Le jeton Admin du pipeline produit n'a pas `read_content` ni `write_content`.
  Toute correction de page ou de preference passe par l'interface Shopify.
- Les erreurs console restantes sont l'iframe Shop Pay de Shopify et un en-tete
  `X-Frame-Options: ALLOW-FROM`, directive obsolete. Les deux sont cote serveur,
  pas cote theme.

## Changements locaux historiques maintenant classes

Le commit `9220031e` a absorbe les 31 fichiers storefront auparavant non committes. Les quatre fichiers qui se chevauchaient sont documentes dans `docs/project-state.md` et dans le checkpoint de nettoyage.

Aucun de ces changements n'est encore local et flottant. Aucun fichier non suivi ne reste dans le depot actif.

## Lot clos : PDP-P0

Patrice a donne son GO visuel final le 2026-08-13 pour `b♥nheur`. Dancing Script a ete retiree ; le mot utilise Lato, un rose poudre et un coeur accessible a la place du premier `o`. Le push live du seul Hero produit, le pullback bit a bit et le controle HTTP public sans cookie de preview sont valides. Les controles achat du lot PDP-P0 restent valides.

## Lot clos : selection saisonniere

Patrice a valide le nouveau rendu puis a autorise le live le 2026-08-13. Le lot est integre par `441bb7f0`, pousse sur le theme live `190430282075` avec neuf fichiers cibles et confirme par un pullback `9/9`. Le worktree et les branches ephemeres ont ete retires. Checkpoint : `docs/checkpoints/2026-08-13-1010-seasonal-editorial-preview.md`.

## Lot clos : fondation design

La charte du 2026-08-04 est appliquee au theme et live depuis le 2026-08-13.
101 fichiers pousses en `--nodelete`, pullback 101 sur 101 identique bit a bit
sur le developpement et sur le live, assets experimentaux preserves. Theme Check
29 offenses avant, 29 apres. Checkpoint :
`docs/checkpoints/2026-08-13-0957-design-foundation-live.md`.

## Lot clos : hotfix technique et SEO

Cinq defauts publics annonces, trois reels. Les erreurs JavaScript et le double
chargement etaient un seul defaut. Les trois autres etaient de la donnee Shopify
Admin, pas du code : le theme rend `page_title` une seule fois et deux pages sur
quatre du meme template etaient saines. Verification independante apres saisie :
neuf controles conformes, aucun ecart. Checkpoint :
`docs/checkpoints/2026-08-13-1015-hotfix-technique.md`.

Piege operationnel : toute verification SEO menee juste apres une ecriture
Shopify doit passer un parametre de contournement de cache. Le cache de page,
visible dans l'en-tete `etag: W/"page_cache:..."`, sert encore l'etat anterieur
et fait conclure a tort a un echec de saisie.

## Lot clos : hubs editoriaux

Patrice a valide le rendu puis a autorise le live le 2026-08-13. Le lot est integre en fast-forward jusqu'a `6522d42f`, pousse sur `codex/milaura-integration`, puis deploye avec six fichiers cibles sur le live `190430282075`. Pullback 6/6 et controle public desktop/mobile conformes. Checkpoint : `docs/checkpoints/2026-08-13-1713-editorial-hubs-live.md`.

## Prochaine priorite Codex : collections colorees par pierre

- creer un systeme visuel reutilisable dont la teinte et l'atmosphere suivent la pierre ;
- commencer par Amethyste et Aigue-marine ;
- conserver une hierarchie, des contrastes et des composants communs pour eviter des pages speciales incoherentes ;
- soumettre mobile et desktop a Patrice avant tout live.

## Lot parallele Claude : bandeau et Hero

Direction historique validee pour prototype, non demarree :

- bandeau mobile ramene a environ 56 px sur une seule ligne
- detail de marque issu d'un vrai bijou
- facette centrale du Hero pouvant accueillir une video reelle de 6 a 8 secondes
- poster, lecture silencieuse et support `prefers-reduced-motion`
- une proposition mobile et desktop avant correction

Suivre `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`.

## Interdits de reprise

- Ne pas travailler directement dans le checkout d'integration depuis plusieurs sessions.
- Ne pas creer de clone complet ou de dossier numerote.
- Ne pas editer un fichier deja reserve dans `docs/workstreams.md`.
- Ne pas pousser le theme complet.
- Ne pas modifier les fichiers PDP clos sans nouveau lot declare.
- Ne pas remplacer le diagnostic emotionnel.
- Ne pas publier un produit CAN. Les produits restent draft-only jusqu'a la decision de Patrice.
- Ne jamais reintroduire `Playfair Display`, `Lato`, l'or `#C0A062` ou le glassmorphism `Vision OS`.
- Ne jamais ecrire une valeur hex ou un `font-family` en dur dans une section : passer par `assets/milaura-tokens.css`.
- Ne jamais redeclarer un `@font-face` dans une section.
- Ne jamais recharger `search-form.js` ni `predictive-search.js` depuis une section.
- Ne pas lancer un lot a portee globale, tokens ou polices, en parallele d'un lot de section : le registre protege le merge, pas la coherence visuelle.

## Prompt de reprise

> Reprends MilAura depuis `AGENTS.md`, `docs/project-state.md`, `docs/workstreams.md` et `docs/codex-handoff.md`. Les hubs Mariage, Naissance et Bijoux par pierre sont integres et live, pullback 6/6. Ouvre un nouveau worktree declare pour etendre la direction chromatique aux collections Amethyste et Aigue-marine, puis aux autres pierres. `assets/milaura-tokens.css` reste la source unique de verite ; aucune valeur hex ni `font-family` en dur dans une section, aucun clone numerote et aucun push de theme complet.
