# E2 - Neutralisation popup, BIENVENUE10 et promesses compte

Date : 2026-08-20 12:48 CEST

Statut : preview, mutations Admin et integration validees, live en attente de GO explicite

Derniere mise a jour : 2026-08-20 13:02 CEST

## Perimetre ferme

Ce lot execute uniquement E2 du checkpoint lifecycle du 2026-08-20 :

- supprimer le popup newsletter et sa bulle flottante du theme ;
- conserver la capture newsletter sobre du footer ;
- retirer `BIENVENUE10` du JavaScript actif ;
- neutraliser les anciennes automations dangereuses par leurs IDs exacts ;
- corriger la notification de bienvenue compte pour ne plus promettre un profil durable ni des recommandations personnalisees ;
- ne pas modifier ScratchToReveal, le cross-sell live, l Atelier des emotions, les consentements ou la configuration live des comptes clients.

## Base, branche et proprietaire

- depot : `/Users/paesano/Documents/MilAura website/dawn-X-milaura` ;
- branche d integration distante : `origin/codex/milaura-integration` ;
- base du lot : `ceaaf495` ;
- branche : `codex/milaura-e2-neutralisation-20260820` ;
- commit fonctionnel pousse : `d04f5e8e43d7dc74dbdb143980e73f79568960c2` ;
- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/milaura-e2-neutralisation-20260820` ;
- proprietaire : Codex, tache `E2 - Neutralisation` ;
- registre : `docs/workstreams.md` sur le checkout d integration.

La base canonique est plus recente que la base minimale obligatoire `145e25d4`. `origin/main` n a pas ete fusionne. Le fichier `assets/milaura-preference-storage.js` est reste hors du lot.

## Modifications du theme

Fichiers supprimes :

- `sections/milaura-newsletter-popup.liquid` ;
- `sections/milaura-floating-bubble.liquid`.

Fichiers ajustes :

- `sections/footer-group.json` : retrait des instances popup et bulle, footer et dock conserves ;
- `sections/milaura-sticky-bar.liquid` : retrait des references de positionnement de la bulle ;
- `sections/milaura-quiz.liquid` : le resultat masque uniquement le dock ;
- `sections/milaura-dock.liquid` : retrait des regles CSS liees a la bulle ;
- `sections/milaura-hero-homepage.liquid` : retrait des regles et ecouteurs lies a la bulle ;
- `sections/milaura-product-hero.liquid` : retrait de la coordination newsletter et bulle, popup cadeau conserve ;
- `assets/milaura-cart-rewards-auto.js` : `BIENVENUE10` retire des codes geres ;
- `TODO-MILAURA.md` : ancienne tache de test `BIENVENUE10` retiree.

Diff du commit fonctionnel : 10 fichiers, 5 insertions, 3 284 suppressions.

La recherche active ne retourne plus aucune occurrence de :

```text
BIENVENUE10
milaura-newsletter-popup
milaura-floating-bubble
milaura-popup-overlay
milaura-bubble-trigger
milaura-bubble-label
milauraNewsletterSubscribed
milauraNewsletterNote
milaura-hero-home-visible
```

## Themes Shopify et preuve de parite

### Theme de developpement existant

- ID : `199421952347` ;
- push cible des neuf fichiers theme du lot ;
- pullback dans `/private/tmp/milaura-e2-pullback.Rzwwjf` ;
- sept fichiers restants identiques octet par octet ;
- les deux sections supprimees sont absentes.

Ce theme presentait une derive homepage anterieure au lot et un debordement racine de 2 px a 360 px. Il n est donc pas retenu comme preuve visuelle E2.

### Preview isolee de reference

- ID : `200196194651` ;
- nom : `MilAura E2 Neutralisation Preview 2026-08-20` ;
- URL : `https://milaura-2.myshopify.com?preview_theme_id=200196194651` ;
- editeur : `https://milaura-2.myshopify.com/admin/themes/200196194651/editor` ;
- statut : non publie ;
- live `190430282075` : non modifie.

## Validations techniques et visuelles

Commandes :

- `node --check assets/milaura-cart-rewards-auto.js` : passe ;
- `git diff --check` : passe ;
- `shopify theme check --fail-level error` : passe, 16 avertissements preexistants, aucune erreur.

QA Playwright sur la preview isolee :

| Page | Largeur | Resultat |
| --- | ---: | --- |
| Homepage | 360, 390, 430, 1440 px | aucun debordement racine, popup absent, bulle absente, footer newsletter present, dock present, aucune mention `BIENVENUE10` |
| Diagnostic `/pages/diagnostic-emotionnel` | 390 px | H1 correct, aucun debordement, quiz et dock presents, popup et bulle absents, aucune erreur JavaScript |
| PDP `/products/bracelet-aventurine-verte-halo-dore` | 390 px | H1 correct, aucun debordement, Hero, dock et sticky presents, popup et bulle absents, aucune erreur JavaScript |
| PDP apres scroll | 390 px | sticky visible, `aria-hidden=false` |

Le footer conserve son titre, son texte, le champ email et l action `S inscrire`. Les seules erreurs de console de la homepage proviennent du cadrage de preview et de l iframe Shop bloquee par CSP, sans lien avec E2. Le diagnostic et la PDP ne presentent aucune erreur.

Captures locales :

- `output/playwright/e2-neutralisation/home-360.png` ;
- `output/playwright/e2-neutralisation/home-390.png` ;
- `output/playwright/e2-neutralisation/home-430.png` ;
- `output/playwright/e2-neutralisation/home-1440.png` ;
- `output/playwright/e2-neutralisation/footer-390.png` ;
- `output/playwright/e2-neutralisation/footer-newsletter-390.png` ;
- `output/playwright/e2-neutralisation/diagnostic-390.png` ;
- `output/playwright/e2-neutralisation/product-390.png` ;
- `output/playwright/e2-neutralisation/product-sticky-390.png` ;
- `output/playwright/e2-neutralisation/product-sticky-no-consent-390.png`.

Ces fichiers sont ignores par Git.

## Etat Admin verifie en lecture seule

### Reductions

La liste Shopify ne contient que trois reductions actives :

- `MILAURA-RELAIS30` ;
- `MILAURA15-80` ;
- `VINTED10`.

La reduction `BIENVENUE10` n existe plus. Aucune mutation Discounts n est requise.

### Shopify Messaging et Flow

| Objet | ID parent | IDs enfants | Etat avant E2 | Action E2 |
| --- | ---: | --- | --- | --- |
| Bienvenue newsletter - BIENVENUE10 | `69885198683` | `205570769243`, `205571490139`, `205572374875` | parent inactif, trois enfants actifs | supprimer le parent et ses references mortes |
| ARCHIVE - NE PAS ACTIVER - ancien checkout urgence | `66217443675` | `200862335323` | inactif et deja archive explicitement | laisser intact |
| Anniversaire client, ancien essai | `68817027419` | `204165546331` | inactif, enfant brouillon | supprimer |
| Anniversaire client, essai recent | `72198488411` | `208689168731` | inactif, enfant brouillon | supprimer |

Les automations browse, panier et checkout actives sont hors perimetre et doivent rester intactes.

### Notification de bienvenue compte

- objet : `customer_account_welcome` ;
- sujet conserve : `Confirmation du compte client` ;
- source E1 : `docs/milaura/shopify-admin-canonical/snapshots/2026-08-20/notifications/customer_account_welcome/body.liquid` dans le depot prive `Onora-studio/onora-ops` ;
- correction appliquee : supprimer toute promesse de profil cristallin durable et de recommandations sur mesure.

Copie appliquee apres le GO Patrice :

```text
Preheader : Votre compte MilAura est actif.

H1 : Votre univers MilAura vous attend

Phrase d activation :
{% if customer.first_name != blank %}{{ customer.first_name }}, votre{% else %}Votre{% endif %} compte est maintenant actif.

Paragraphe :
Vous pouvez désormais accéder à votre espace personnel et suivre vos commandes. Le diagnostic MilAura reste un parcours distinct, à lancer seulement si vous le souhaitez.

Points :
Votre compte : retrouvez vos informations personnelles
Suivi de commandes : consultez vos commandes au même endroit
Diagnostic MilAura : découvrez les pierres associées à votre ressenti du moment

CTA principal : Faire le diagnostic
URL : {{ shop.url }}/pages/diagnostic-emotionnel

CTA secondaire conserve : Visiter la boutique
```

Cette copie ne transforme ni la creation de compte ni le diagnostic en consentement marketing. Elle ne promet aucune persistance de personnalisation.

## Execution Admin du 2026-08-20

Patrice a confirme exactement le lot par le message `CONFIRMÉ E2 ADMIN.` le 2026-08-20.

### Suppressions Messaging

Les trois parents confirmes ont ete supprimes depuis leurs lignes identifiees par l attribut DOM `gid://shopify/MarketingAutomation/<ID>`, puis la liste a ete rechargee avant verification :

- `69885198683` : absent ;
- `72198488411` : absent ;
- `68817027419` : absent.

Les objets proteges ont ete relus apres les suppressions :

- `66217443675` : `ARCHIVE - NE PAS ACTIVER - ancien checkout urgence`, present et `Inactif` ;
- `72198390107` : `Convertir la consultation de produit abandonnee`, present et `Actif` ;
- `68816961883` : `Recuperer le panier abandonne`, present et `Actif` ;
- `68816896347` : `Recuperer le paiement abandonne`, present et `Actif`.

Le parent `Remercier les clients apres leur achat` est reste inactif et hors perimetre. Aucune reduction, aucun autre Flow et aucune autre automation n ont ete modifies.

### Notification compte

La notification `customer_account_welcome` a ete modifiee dans `Parametres > Notifications > Notifications client > Bienvenue au compte client`.

Preuves apres sauvegarde :

- toast Shopify `Modele de notification enregistre` ;
- sujet relu : `Confirmation du compte client` ;
- H1 relu : `Votre univers MilAura vous attend` ;
- phrase d activation terminee par un point ;
- paragraphe distinct entre compte et diagnostic present ;
- trois points relus : `Votre compte`, `Suivi de commandes`, `Diagnostic MilAura` ;
- CTA principal relu : `Faire le diagnostic` ;
- CTA secondaire `Visiter la boutique` conserve ;
- aucune occurrence rendue de `profil cristallin unique`, `Votre profil cristallin` ou `Recommandations sur mesure`.

Aucun e-mail de test n a ete envoye et aucune configuration de compte client n a ete basculee.

## Integration canonique

La branche E2 a ete integree dans `codex/milaura-integration` par le merge `cdcebb3b6909df382789c91f8dba5b4dc2f2476c`.

Validations relancees depuis le checkout d integration :

- `git diff HEAD^1 --check` : passe ;
- `node --check assets/milaura-cart-rewards-auto.js` : passe ;
- recherche active des marqueurs popup, bulle et `BIENVENUE10` : aucun resultat ;
- `sections/footer-group.json` : `show_newsletter` reste a `true` avec le titre, le texte, le champ et `S inscrire` ;
- `shopify theme check --fail-level error` : passe, 291 fichiers inspectes, 16 avertissements preexistants, aucune erreur.

La publication live reste volontairement bloquee. Aucun fichier du theme live `190430282075` n a ete modifie par cette integration Git.

Le worktree E2 a ete retire proprement apres confirmation que `e5dae460` etait pousse et ancetre de l integration. La branche locale et distante `codex/milaura-e2-neutralisation-20260820` est conservee comme preuve et point de rollback.

## Gates E2

| Gate | Etat | Preuve |
| --- | --- | --- |
| E2-G1 base et proprietaire | passe | base canonique recente, worktree dedie, registre actif |
| E2-G2 popup et bulle retires | passe | sections supprimees et recherche active vide |
| E2-G3 footer conserve | passe | DOM et capture `footer-newsletter-390.png` |
| E2-G4 code et lint | passe | `node --check`, `git diff --check`, Theme Check sans erreur |
| E2-G5 preview responsive | passe | homepage, diagnostic et PDP verifies de 360 a 1440 px |
| E2-G6 preuve Admin avant mutation | passe | IDs, etats, reduction absente et exports E1 confirmes |
| E2-G7 confirmation et mutations Admin | passe | `CONFIRMÉ E2 ADMIN.`, trois IDs absents, objets proteges relus, notification sauvegardee et previsualisee |
| E2-G8 integration canonique | passe | merge `cdcebb3b`, diff check, JavaScript, recherche active et Theme Check valides |
| E2-G9 publication live | non commence | parite puis GO live distinct requis |

## Rollback

Theme :

- revenir au commit parent de `d04f5e8e` sur la branche du lot puis pousser uniquement les fichiers cibles vers le theme concerne ;
- ne jamais fusionner `origin/main` pour restaurer ;
- verifier le pullback octet par octet.

Admin Messaging :

- les exports natifs `.flow`, manifestes et checksums E1 sont versionnes dans le depot prive ;
- une reimportation recreera les automations mais attribuera de nouveaux IDs ;
- les suppressions doivent donc rester limitees aux trois IDs confirmes.

Notification :

- restaurer le sujet et le `body.liquid` du snapshot E1 ;
- verifier la preview Admin puis la source relue apres sauvegarde.

## Prochaines actions ordonnees

1. Committer et pousser cette preuve finale avant live.
2. Obtenir un GO live distinct avant toute publication sur `190430282075`.
3. Publier uniquement les neuf fichiers theme E2, verifier le pullback et le storefront public.
4. Fermer E2, puis seulement ouvrir E3.
