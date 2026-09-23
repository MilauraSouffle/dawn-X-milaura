# Catalogue MilAura P1 : manifeste Admin et preview thème

Date : 2026-09-23 10:33 CEST

Branche : `codex/milaura-catalogue-reaudit-20260923`

Base : `d48f4bbc9178a6868418873e1e8e1b3c0a9a2f7e`

Thème privé : `200259043675`

Thème live non modifié : `190430282075`

## Décisions Patrice

- Les 7 produits anciennement en brouillon restent `ACTIVE`.
- Le plan P1 peut démarrer.
- `Bols chantants` ne doit pas être alimentée. Patrice supprimera lui-même cette destination car aucun stock ni réassort proche n'est prévu.

## Manifeste Shopify Admin

Le manifeste idempotent est écrit dans `docs/audits/2026-09-23-catalogue-category-completeness/ADMIN-P1-MANIFEST.md`.

Il prévoit :

- 42 ajouts dans 18 collections manuelles, dont les 41 lacunes initiales et la landing Pierre de lave révélée par la correction du bracelet Howlite et Pierre de lave ;
- 20 réconciliations de tags `pierre:*` déjà documentées ;
- 1 correction supplémentaire du tag et du metafield Pierre de lave ;
- 0 suppression et 0 changement de statut, prix, stock, publication, handle, média ou canal.

Les cinq collections non exposées par le jeton GraphQL initial ont été retrouvées dans Shopify Admin, avec leurs IDs, et confirmées comme manuelles : Aigue-marine, Aventurine, Lapis-lazuli, Œil de tigre et Quartz rose.

Aucune écriture Admin n'a encore été exécutée dans cette phase.

## Preview thème

Fichiers ciblés :

- `templates/page.milaura-guide-pierres.json` ;
- `sections/milaura-owned-stone-care.liquid` ;
- `sections/milaura-owned-stone-selector.liquid` ;
- `sections/milaura-product-hero-v2.liquid`.

### Pierres de A à Z

- limite Shopify respectée : 50 blocs exactement ;
- 40 landings publiques sur 40 reliées ;
- 10 références non cliquables conservées ;
- lettre G présente ;
- Grenat relié à `/collections/par-pierre-grenat` ;
- Sodalite conservée et reliée ;
- un seul H1 ;
- aucun débordement à 390 px et 1512 px.

Le premier envoi a correctement révélé le plafond Shopify de 50 blocs. Le template à 60 blocs a été refusé. Dix références sans landing et sans produit actif ont été retirées, puis le template final de 50 blocs a été accepté.

### Liens 404

Les liens de `Entretien des pierres` et `Trouver votre pierre` rendent maintenant uniquement les routes :

- `/pages/bijoux-par-pierre` ;
- `/pages/diagnostic-emotionnel`.

### JSON-LD Product

La section PDP V2 utilise le filtre natif Shopify `product | structured_data`.

Contrôle en preview sur six familles : bijou, pierre/minéral, bougie/senteur, rituel, soin et accessoire.

Résultat pour chaque famille :

- exactement 1 entité `Product` ;
- 0 erreur de parsing JSON-LD ;
- nom égal au H1 ;
- marque MilAura ;
- description et images présentes ;
- offre avec prix, devise EUR, disponibilité et URL de variante ;
- aucun `Review` ou `AggregateRating` inventé.

## Vérifications techniques

- pullback thème privé : 4 fichiers sur 4 identiques ;
- `shopify theme check` : 0 erreur, 16 avertissements historiques dans 8 fichiers hors lot ;
- `python3 tools/check_copywriting.py` : PASS, 362 fichiers ;
- contrat A à Z : PASS, 50 blocs et 40 liens ;
- `git diff --check` : PASS.

La préférence Shopify CLI corrompue a été déplacée sans suppression vers `/Users/paesano/Library/Preferences/shopify-cli-theme-conf-nodejs.backup-20260923T103026+0200`. Une récidive après le dernier push ciblé a été sauvegardée de la même manière dans `/Users/paesano/Library/Preferences/shopify-cli-theme-conf-nodejs.backup-20260923T103708+0200`. La CLI a ensuite recréé une configuration saine et le pullback final du guide A à Z est identique au fichier local.

## Gates restantes

- confirmation d'action immédiate avant les écritures catalogue Admin ;
- réextraction et six matrices après Admin ;
- GO copywriting/visuel Patrice pour A à Z ;
- GO live distinct pour les quatre fichiers thème ;
- contrôle public et Rich Results Test après live.
