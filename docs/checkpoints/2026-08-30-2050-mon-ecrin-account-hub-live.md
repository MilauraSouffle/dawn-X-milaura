# Mon Ecrin espace compte complet, release et live

Date : 2026-08-30 20:50 CEST

## Autorisation

Patrice a valide le rendu puis donne l autorisation explicite : `c'est parfait push commit deploie sur le live on est ok`.

Le perimetre est reste borne a l application Customer Accounts Mon Ecrin, aux points d entree compte du theme live, au bridge quiz signe et aux reglages exacts de destination. Aucun produit, stock, prix, commande, email, DNS ou autre theme n a ete modifie.

## Resultat live

- application Shopify active : `milaura-customer-accounts-7` ;
- version ID : `gid://shopify/Version/1109042987009` ;
- message : `Mon Ecrin complete account hub` ;
- boutique production : `dvsi0r-1q.myshopify.com`, ID `97728069979` ;
- page : `https://shopify.com/97728069979/account/pages/01a04dd8-c889-76f4-ac40-b8aa7d2d48c0` ;
- backend : `https://mon-ecrin-api.milaura.fr`, health `200` ;
- theme live : `dawn-X-milaura/main`, ID `190430282075` ;
- bridge live : actif, endpoint `/apps/milaura-c1-bridge`, destination exacte de la page production.

Mon Ecrin est maintenant l espace compte complet en production. Sans diagnostic enregistre, la page affiche quand meme la decouverte des cinq pierres, les commandes, le profil et les adresses, le Cercle MilAura annonce sans points inventes, l historique reel et la pierre preferee issue des commandes eligibles. Avec un diagnostic explicitement enregistre, la release 7 affiche aussi le profil emotionnel, la pierre, le mantra, le rituel et la recommandation catalogue dynamique.

Les entrees storefront controlees pointent vers la page exacte : lien `Mon Ecrin`, icone compte, navigation mobile, carte de navigation et dock mobile.

## Integration Git

- app : commit `4bfaf32918108188b1ac23c2c43d30bacd19d70f`, pousse sur `origin/codex/milaura-mon-ecrin-account-hub-20260830` ;
- theme : commit source `db77316b`, integre par `dce4d71d` ;
- checkpoint dev : commit source `dd89a800`, integre par `af971401` ;
- branche canonique `codex/milaura-integration` poussee avant le live.

## Fichiers theme live

Le push principal a ete limite aux huit fichiers valides :

1. `assets/milaura-c1-release-bridge.js` ;
2. `config/settings_schema.json` ;
3. `sections/header.liquid` ;
4. `sections/milaura-dock.liquid` ;
5. `sections/milaura-navbar.liquid` ;
6. `sections/milaura-quiz.liquid` ;
7. `snippets/header-drawer.liquid` ;
8. `snippets/milaura-c1-release-bridge.liquid`.

Le controle public a ensuite prouve que l ancien live ne rendait pas encore le snippet. Le pull cible de `layout/theme.liquid` a montre un diff d une seule ligne, deja canonique dans Git : `{% render 'milaura-c1-release-bridge' %}`. Ce fichier a ete pousse separement puis tire et compare bit a bit.

`config/settings_data.json` a ete tire du live, modifie hors depot et repousse seul avec :

- `milaura_c1_release_candidate_enabled=true` ;
- `milaura_c1_mon_ecrin_url=https://shopify.com/97728069979/account/pages/01a04dd8-c889-76f4-ac40-b8aa7d2d48c0`.

## Validations

- app : controle statique PASS ;
- tests : `60/60` PASS ;
- build Shopify production : PASS ;
- bundle : `63587 / 65536`, marge `1949` octets ;
- audit npm production : zero vulnerabilite ;
- theme : `git diff --check` PASS ;
- Theme Check : zero erreur, 16 avertissements historiques hors lot ;
- pullback principal et reglages : `9/9 MATCH` ;
- pullback layout : `MATCH` ;
- version Shopify 7 relue `active`, version 6 relue `inactive` ;
- page Customer Accounts live : compte complet visible, sans code incident `ME-*` ;
- storefront : tous les points d entree Mon Ecrin controles utilisent la destination exacte ;
- quiz live : noeud bridge present, `enabled=true`, `loggedIn=true`, endpoint et destination exacts, asset JavaScript charge.

Le test final n a pas ecrit de nouveau diagnostic dans le compte production. Il prouve le chargement de la release, le compte complet, le routage storefront et le bridge actif sans remplacer les donnees personnelles du compte.

## Rollback

Sauvegarde theme avant live, complete avec l ancien layout :

`/private/tmp/milaura-mon-ecrin-live-before-20260830-I0p1d7`

Pour revenir au theme precedent, pousser uniquement les dix fichiers de cette sauvegarde vers `190430282075` avec `--nodelete --strict --allow-live`. Pour revenir a l application precedente, relacher la version existante avec :

`shopify app release --config production --version milaura-customer-accounts-6 --allow-updates`

Ne pas executer ce rollback tant que le forward reste PASS.

## Etat final

`PASS LIVE - MON ECRIN EST L ESPACE COMPTE COMPLET - RELEASE 7 ACTIVE - BRIDGE QUIZ ACTIF - ROLLBACK PRET`
