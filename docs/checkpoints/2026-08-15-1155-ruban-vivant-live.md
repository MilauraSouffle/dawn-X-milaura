# Ruban Vivant et recommandations sitewide, deploiement live

Date : 2026-08-15 11:55 CEST

## Decision validee

Patrice a donne son GO visuel a 100 %, puis son autorisation explicite de commit, push et deploiement live le 2026-08-15.

Le titre public du cross-sell reste `Composer votre ensemble`. La proposition `La pierre qui vous ressemble` est reservee au parcours `Me laisser guider` et a sa page de resultats, car elle decrit une recommandation personnelle plutot qu'une composition produit.

## Perimetre integre

- moteur editorial partage pour les recommandations PDP, panier, tiroir panier, diagnostic, compte et hubs editoriaux ;
- Ruban Vivant horizontal sur les PDP avec huit references imposees par Patrice ;
- boucle continue par duplication accessible de la serie, pause et reprise explicites, clavier et focus conserves ;
- cartes transparentes, objets detoures, cadres aigue-marine et actions soulignees conformes aux tokens MilAura ;
- sept nouveaux detourages generes et un detourage existant reutilise ;
- anciens composants cross-sell retires du code actif et remplaces par les composants partages.

## Git

- branche de production du lot : `codex/milaura-recommendation-system-20260814` ;
- commit du lot : `413596f7 feat: build living product ribbon` ;
- branche d'integration : `codex/milaura-integration` ;
- merge d'integration : `f89f57b5 merge: integrate living recommendation ribbon` ;
- branche d'integration poussee sur `origin`.

## Validation avant live

- `git diff --check` valide ;
- syntaxe JavaScript validee sur tous les fichiers modifies ;
- JSON valide sur tous les templates modifies ;
- aucun marqueur de conflit ;
- `shopify theme check` sans nouvelle erreur, avec 17 avertissements historiques dans 9 fichiers hors lot ;
- theme de developpement `199421952347` : boucle, pause, reprise, clavier, desktop 1280 px, mobile 390 px et pullback 14/14 valides.

## Deploiement live

- theme live cible : `190430282075` ;
- sauvegarde avant push : `/private/tmp/milaura-recommendation-live-backup-20260815-1150` ;
- push cible de 46 fichiers actifs avec `--allow-live --nodelete` ;
- les 13 anciens fichiers supprimes du depot ne sont plus references par le code actif, mais restent volontairement presents sur Shopify comme filet de retour arriere ;
- aucune suppression distante n'a ete executee.

## Controle public apres deploiement

Page controlee : fiche produit `collier-obsidienne-noire-boho-dore` sur le theme live exact.

- moteur `ready`, intent `curated`, layout `ribbon` ;
- huit produits uniques et seize cartes rendues pour la boucle continue ;
- deplacement mesure : 109 px sur desktop en 1,8 seconde et 71,5 px sur mobile en 1,2 seconde ;
- pause : deplacement nul pendant 1 seconde, libelle et `aria-pressed` corrects ;
- reprise : deplacement de 75 px pendant la seconde suivante ;
- clavier : `ArrowRight` place le focus sur le produit suivant et suspend le mouvement ;
- mobile 390 x 844 : aucun debordement horizontal de la page ;
- aucune erreur JavaScript, uniquement deux messages informatifs Shopify de desactivation du hot reload.

Echantillon sitewide complementaire, sans mutation du panier :

- panier live avec trois lignes : trois shells partages presents, aucun debordement et aucune erreur JavaScript ;
- le contexte `cart-page` passe proprement de `idle` a `empty` lorsqu'aucune recommandation eligible n'est renvoyee ;
- diagnostic live : quiz present, shell `diagnostic` en attente normale du resultat, aucun debordement et aucune erreur JavaScript.

## Pullback live

- copie de controle : `/private/tmp/milaura-recommendation-live-pullback-20260815-1205` ;
- 46 fichiers verifies ;
- 46/46 strictement identiques octet par octet ;
- aucun fichier manquant et aucune normalisation Shopify constatee.

## Coordination

Les modifications Navigation non stagees dans `docs/codex-handoff.md`, `docs/project-state.md` et `docs/checkpoints/2026-08-15-1145-navigation-handoff-addendum.md` ont ete preservees sans modification ni staging. La ligne Navigation fermee dans `docs/workstreams.md` a ete conservee.
