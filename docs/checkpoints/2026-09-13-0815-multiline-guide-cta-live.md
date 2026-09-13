# Correctif CTA multilignes live

Date : 2026-09-13 08:15 CEST

Statut : `INTEGRE, POUSSE ET LIVE VERIFIE`

## Demande et diagnostic

Patrice a signale deux filets dores presque superposes lorsque les CTA sous les cartes pierre revenaient sur deux lignes, avec `/pages/trouver-votre-pierre` comme exemple visible sur mobile et dans une fenetre reduite.

La reproduction publique a confirme la cause dans `.milaura-owned-link` : le composant utilisait `text-decoration-line: underline`. Le navigateur dessinait donc un soulignement sous chaque ligne du libelle. A 390 px, les huit CTA produits du selecteur etaient concernes. A 1028 px, le CTA Aventurine verte occupait deux lignes et mesurait 48,75 px de haut.

L audit du systeme d actions partagees a confirme que `assets/milaura-actions.css` et les cartes produits canoniques utilisent deja un unique `border-bottom`. Aucune correction globale risquee de `.button` ou de tous les liens n etait necessaire.

## Correction

Le composant partage des trois guides utilise maintenant :

- `text-decoration: none` ;
- `border-bottom: var(--milaura-filet-action)` ;
- une transition limitee a la couleur du texte et du filet ;
- le meme changement de couleur au survol ;
- la cible tactile existante de 44 px conservee.

Le filet appartient ainsi au bloc CTA complet. Un libelle sur deux lignes conserve un seul trait propre sous le bloc, sans chevauchement.

Fichiers fonctionnels :

- `assets/milaura-owned-stone-guides.css` ;
- `tests/owned-stone-guides.test.mjs`.

Commit fonctionnel : `725cf31e0d596c74cdc6c2f02a8cdda45cc28f3c`.

## Verification locale

- `node --test tests/owned-stone-guides.test.mjs` : 7 tests PASS ;
- test de regression ajoute pour imposer le filet de bloc et interdire le retour au soulignement multiligne ;
- `git diff --check` : PASS ;
- `shopify theme check` : 0 erreur, 16 avertissements historiques hors lot.

## Preview Shopify

Theme prive : `200974958939`.

Un seul fichier a ete pousse : `assets/milaura-owned-stone-guides.css`. Le pullback prive est identique a la source :

`bc3811ea7dae56912179ecf5f3f5c3823f92cb87c3995086a7c76059f44f2ef5`

QA a 360, 390, 430 et 1028 px sur `/pages/trouver-votre-pierre` :

- huit CTA produits presents ;
- les libelles sur deux lignes ont `text-decoration: none` ;
- un seul filet de 2 px sous le bloc ;
- aucune largeur debordante ;
- cible tactile minimale conservee.

Les pages `/pages/atlas-des-pierres` et `/pages/entretien-des-pierres` ont aussi ete controlees a 390 px sur le theme prive. Elles chargent la meme regle corrigee, sans debordement ni erreur navigateur.

## Deploiement public

Theme public : `190430282075`.

Le fichier public precedent a ete relu avant ecriture. Son SHA-256 etait :

`5846cf557a3f76ebd6375cb5b251c38b742ae7cc5ed90d09c3178606765d06b8`

Le push public a ete limite a `assets/milaura-owned-stone-guides.css`, avec `--nodelete`, `--strict` et `--allow-live`. Le pullback public est strictement identique a la source corrigee :

`bc3811ea7dae56912179ecf5f3f5c3823f92cb87c3995086a7c76059f44f2ef5`

QA publique :

- theme confirme : `190430282075` ;
- trois guides controles a 390 px ;
- `/pages/trouver-votre-pierre` controlee aussi a 1028 px ;
- `text-decoration: none` et unique bordure doree sur tous les `.milaura-owned-link` ;
- zero debordement horizontal ;
- zero erreur navigateur ;
- `/collections/bijoux-pierres-naturelles` et `/pages/bijoux-par-pierre` controles a 390 px : leurs quatre actions produit `Ajouter` restent a 48 px, avec un seul filet de 2 px et sans soulignement texte.

La recette repose sur Chromium responsive. Aucun test sur iPhone physique n est revendique.

## Perimetre preserve

Aucun texte, produit, prix, stock, media, template, page Shopify Admin, menu, formulaire, cookie, email, quiz Ads, campagne ou budget n a ete modifie. Le checkout principal sale et les worktrees concurrents sont restes intacts.

## Retour arriere cible

Le fichier precedent peut etre restaure depuis le parent du commit fonctionnel ou depuis la sauvegarde de preflight de cette session, puis repousse seul avec les memes options ciblees. Aucun retour arriere global du theme ne doit etre utilise.

## Reprise

```text
Reprends MilAura depuis docs/checkpoints/2026-09-13-0815-multiline-guide-cta-live.md. Le correctif des CTA multilignes est integre et live sur le theme 190430282075. Les CTA des trois guides utilisent un seul filet sous le bloc complet, y compris sur deux lignes. Ne redeploie pas le CSS par deduction. Commence toute nouvelle iteration en lecture seule depuis origin/codex/milaura-integration et le storefront public. Le prochain chantier discute avec Patrice est le cadrage distinct du quiz Ads generateur de leads, sans implementation ni budget deduit de ce checkpoint.
```
