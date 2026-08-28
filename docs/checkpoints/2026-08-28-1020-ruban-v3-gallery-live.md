# Ruban V3 adaptatif, galerie produit et live

Date : 2026-08-28 10:20 CEST
Branche canonique : `codex/milaura-integration`
Commit canonique avant fermeture documentaire : `841857665b8d5b77a7d850ded1e526b2d76d3aa3`
Branche source conservee : `codex/milaura-ruban-v3-matrix-20260817`
Commit source final : `38497e4bf93197a16c7a2e1aaddc6d22634f7e5f`
Theme live : `dawn-X-milaura/main`, ID `190430282075`

## Decision finale

Patrice a donne le GO exact `GO LIVE RUBAN V3` le 2026-08-28.

Le Ruban V3 est desormais construit sur les photos reelles de la galerie Shopify. La video ne fait plus partie du chemin critique. Higgsfield reste le seul outil admis pour une future phase video, Grok reste exclu et aucune transformation visuelle du produit n est acceptable.

Le contrat live est le suivant :

- une seule proposition visible sur une PDP ;
- trois candidats ordonnes en memoire quand le catalogue le permet ;
- exclusion du produit consulte, des produits indisponibles, des produits deja au panier et des produits sans image de galerie ;
- ordre de repli : pierre, type et finition exacts, pierre ou intention proche, meme univers, meme collection, puis catalogue global ;
- aucun Ruban vide tant qu un autre produit eligible existe ;
- aucune video et aucun ancien detourage dans le rendu V3 actuel.

## Integration Git

La serie source a ete integree selectivement dans le canonique :

- `62b4d8d9` : audit initial d eligibilite ;
- `7b334602` : audit catalogue adaptatif ;
- `4bf03111` : moteur adaptatif ;
- `0b88452d` : brouillons video conserves hors chemin critique ;
- `b8b6d960` : runtime galerie et garantie de repli ;
- `84185766` : test runtime aligne sur la dependance partagee de consentement.

Le conflit d integration dans `assets/milaura-recommendations.js` a conserve a la fois le classement Ruban V3 et les protections recentes `loadGeneration` et `MilauraPreferenceStorage` du canonique.

La branche canonique a ete poussee sur `origin/codex/milaura-integration` avant le live. Le worktree source, propre et aligne sur le distant a `38497e4b`, a ete retire proprement apres integration. La branche source locale et distante est conservee comme preuve.

## Verification locale

- 17 tests Python sur 17 : PASS.
- Test runtime JavaScript : PASS.
- `node --check assets/milaura-recommendations.js` : PASS.
- Regression du snapshot du 2026-08-28 : 318 produits, 67 cibles eligibles, 318 sources sur 318 avec trois candidats, 318 payloads affichables, aucun Ruban vide.
- Hash de regression : `8fbcace0721d1dad893782b67eff467481b2dc7011792e67e746b0c14bae75f3`.
- Theme Check : 0 erreur, 16 avertissements historiques dans 8 fichiers hors Ruban.
- `git diff --check` : PASS.

## Fichiers theme publies

Le push live a ete limite a ces onze fichiers :

- `assets/milaura-recommendations.css`
- `assets/milaura-recommendations.js`
- `sections/milaura-product-fragment.liquid`
- `sections/milaura-recent-fragment.liquid`
- `sections/milaura-recommendation-fragment.liquid`
- `sections/milaura-recommendations.liquid`
- `snippets/milaura-card-product.liquid`
- `snippets/milaura-recommendation-card.liquid`
- `snippets/milaura-recommendation-shell.liquid`
- `templates/product.json`
- `templates/product.milaura-produit.json`

Commande bornee : `--only`, `--nodelete`, `--strict`, `--allow-live`. Aucun autre theme, produit, stock, prix, collection, metafield ou objet Shopify Admin n a ete modifie.

## Sauvegarde et pullback

La version live anterieure des onze fichiers est sauvegardee ici :

`/private/tmp/milaura-ruban-v3-live-backup-20260828-1010`

Le pullback post-deploiement est ici :

`/private/tmp/milaura-ruban-v3-live-pullback-20260828-1020`

Resultat : 11 fichiers sur 11 identiques bit a bit a Git.

La CLI Shopify a rencontre avant le pull une preference locale corrompue. Le dossier a ete deplace de maniere reversible vers `/Users/paesano/Library/Preferences/shopify-cli-theme-conf-nodejs.bak-20260828-1012`. La CLI a recree son dossier normal et les deux `config.json` sont identiques.

## QA publique

PDP principale : `https://milaura.fr/products/collier-aventurine-verte-boho-dore`.

Avant panier :

- une carte visible et trois candidats uniques ;
- candidats : bracelet aventurine verte Halo dore, bougie Joie aventurine verte, boucles d oreilles aventurine ;
- gates : exact, proche, univers ;
- les trois produits sont disponibles, possedent une galerie et excluent le produit source ;
- l image visible charge en 640 x 640 et correspond exactement a l image principale publique de la galerie Shopify du bracelet ;
- zero video et zero image de detourage ;
- etat `ready`, intention `adaptive`, layout `ribbon`.

Test panier dans une session navigateur isolee :

- ajout temporaire du bracelet recommande ;
- le bracelet est retire de la liste des candidats ;
- la bougie est promue immediatement ;
- le Ruban reste visible avec deux candidats ;
- le produit de test est ensuite supprime et le panier final revient a zero.

Cas de repli :

- `plaque-bois-fleur-de-vie-pleine-creuse-150mm` : une carte visible, trois candidats de collection, aucun vide ;
- `pendentif-oeil-de-sainte-lucie`, source historiquement exclue de la matrice stricte : une carte visible, trois candidats d univers, tous disponibles et avec galerie, aucun vide.

Responsive :

- 390 x 844 : une carte visible, trois candidats, largeur carte 328 px, cible d achat 44 px, aucun debordement racine ;
- 1440 x 1000 : une carte visible, trois candidats, largeur carte 389 px, aucun debordement racine ;
- captures locales : `.playwright-cli/element-2026-08-28T08-17-22-642Z.png` et `.playwright-cli/element-2026-08-28T08-17-26-513Z.png`.

La premiere PDP remonte deux erreurs externes connues liees au cadre Shop : un 403 `chrome-error` et une regle CSP `shop.app`. Les deux autres PDP ont zero erreur console. Aucun defaut Ruban n est observe.

## Etat final

PASS technique, integration, live, pullback et QA publique.

Le controle creatif de Patrice sur le rendu live reste un verdict distinct. Une future phase video ou presentation alternative ne doit etre ouverte qu apres ce controle et ne doit jamais remettre en cause la fidelite des images produit ni la garantie de non-vide.
