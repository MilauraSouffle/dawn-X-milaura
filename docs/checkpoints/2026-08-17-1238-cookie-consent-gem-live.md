# Bandeau cookies gemme live

Date : 2026-08-17 12:38 CEST

Statut : integre, pousse Git, deploye sur le theme Shopify live et valide publiquement.

## Autorisation

Patrice a donne le 2026-08-17 son GO explicite pour committer, integrer et deployer le bandeau cookies sur le live.

Cette autorisation concernait uniquement le lot cookies deja valide localement. Elle ne concernait aucun popup newsletter, ScratchToReveal, email, automatisation lifecycle, diagnostic, compte, Atelier des emotions ou Ruban.

## Git

- Branche source : `codex/milaura-cookie-consent-20260817`.
- Commit source : `6bbc36bb2b66eaf780f175ea84ede57e92116221`.
- Integration canonique par cherry-pick exact : `1980512a2c1a1c45ec210d057f155d2f6efd9024`.
- Branche canonique : `codex/milaura-integration`.
- `origin/codex/milaura-integration` verifie identique a `1980512a` avant le deploiement.
- Le worktree `/Users/paesano/Documents/MilAura website/_worktrees/cookie-consent-20260817` etait propre, puis a ete retire sans force apres integration et QA live.
- La branche source locale et distante est conservee comme trace.

Avant integration, `git fetch --prune origin` a confirme que `origin/main` avait avance. Aucun des fichiers du lot cookies ne differait toutefois entre le canonique et le miroir live avant l integration. Aucun commit du miroir Shopify n a ete absorbe aveuglement.

## Fichiers deployes

Le push Shopify a ete limite aux sept fichiers suivants avec `--only`, `--nodelete`, `--strict` et `--allow-live` :

1. `assets/milaura-cookie-consent.css`
2. `assets/milaura-cookie-consent.js`
3. `assets/milaura-cookie-gem.webp`
4. `assets/milaura.css`
5. `layout/theme.liquid`
6. `sections/milaura-footer.liquid`
7. `snippets/milaura-cookie-consent.liquid`

Theme cible :

- nom : `dawn-X-milaura/main` ;
- role : live ;
- ID : `190430282075`.

Aucun autre fichier, reglage Shopify, produit, stock, prix, metafield, email ou automatisation n a ete modifie.

## Pullback

Un pullback frais et cible des sept fichiers a ete effectue dans :

`/private/tmp/milaura-cookie-live-pullback-20260817.KD1I2v`

Comparaison `cmp` : 7/7 fichiers identiques bit a bit au canonique.

Apres le deploiement, le miroir automatique Shopify a cree le commit `004ce94f`. Ce commit ne contient que les modifications de `assets/milaura.css`, `layout/theme.liquid`, `sections/milaura-footer.liquid` et le nouveau snippet. Il n historise pas les trois nouveaux assets `milaura-cookie-consent.css`, `milaura-cookie-consent.js` et `milaura-cookie-gem.webp`. Ce decalage concerne le miroir Git `origin/main`, pas le theme live : le pullback cible contient les sept fichiers et le storefront public charge le CSS, le JavaScript et la gemme. Ne pas fusionner `origin/main` aveuglement et ne pas utiliser son arbre seul comme preuve de ce lot.

SHA-256 canoniques :

- `assets/milaura-cookie-consent.css` : `52ab689f77355e5a34c5fe2f479d29ce47acf7ca8a411af7c830e234c3a76525`
- `assets/milaura-cookie-consent.js` : `03ab996f409c7d6000236d76141380668835cca8b3acaa42e1b26a09252b8fe9`
- `assets/milaura-cookie-gem.webp` : `e3d75671b1e212c4ac8b926f19c2a2d494d54cc292f1c0a6547db8e55cd2b6c6`
- `assets/milaura.css` : `8b19b6c14b353e301eccd509690fc03462e6bf2c6b931c6f412ac0329db86663`
- `layout/theme.liquid` : `af753e2900da6da0aa12d2984d70a44363d9b8ac38f25e01562b22fdf4adbb6c`
- `sections/milaura-footer.liquid` : `e7aaef3a31677634f224811d656120805c0bfc919fbc7ce7957e421ae6b42bb1`
- `snippets/milaura-cookie-consent.liquid` : `587afacc1a5f905d9bd7f58e57555f604a7fac15f63ab55a452c111ac84f7031`

## QA publique

Route controlee : `https://milaura.fr/`.

Validations Playwright avec profils Chromium isoles :

- bandeau visible pour un nouveau visiteur ;
- rendu mobile 390 x 844 sans debordement et dans la limite de `20svh` ;
- rendu desktop 1440 x 900 conforme ;
- gemme WebP chargee ;
- `Je choisis mes cookies` ouvre le dialogue accessible ;
- selection limitee aux preferences enregistree par la vraie API Shopify ;
- reouverture depuis `Gerer mes cookies` avec la seule case Preferences cochee ;
- `Tout refuser` ferme le dialogue et le bandeau ;
- `J’accepte` ferme le bandeau ;
- reouverture apres acceptation avec Preferences, Mesure d audience et Marketing cochees ;
- footer et lien vers la politique de confidentialite presents.

Captures publiques :

- `/Users/paesano/.codex/visualizations/2026/08/17/01a00e79-ee4a-7d70-8498-d666feafc07d/milaura-cookie-consent-live-mobile-390.png`
- `/Users/paesano/.codex/visualizations/2026/08/17/01a00e79-ee4a-7d70-8498-d666feafc07d/milaura-cookie-preferences-live-mobile-390.png`
- `/Users/paesano/.codex/visualizations/2026/08/17/01a00e79-ee4a-7d70-8498-d666feafc07d/milaura-cookie-consent-live-desktop-1440.png`

Les deux erreurs console observees viennent de l iframe `shop.app`, bloquee par sa propre directive CSP `frame-ancestors`, avec une ressource 403 associee. Elles existaient independamment du composant cookies. Aucune erreur JavaScript du composant MilAura n a ete observee.

## Validation statique

- `git diff --check` : reussi.
- `node --check assets/milaura-cookie-consent.js` : reussi.
- `shopify theme check` : 293 fichiers inspectes, 0 erreur et 17 avertissements preexistants dans 9 fichiers hors perimetre.

## Suite

Le chantier urgent du bandeau cookies est ferme. Le prochain lot prioritaire du plan master est l audit critique des emails, notifications transactionnelles, relances lifecycle et comportement apres inscription. Les popups newsletter et ScratchToReveal restent une session dediee.
