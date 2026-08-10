# MilAura - État courant du projet

Dernière mise à jour : 2026-08-10 07:57 CEST

## État en une phrase

La fondation catalogue et SEO de phase 2 est structurée et privée : contrat canonique figé, 20 produits actifs normalisés en lot témoin, 5 collections privées, templates pierre/type et 4 hubs en preview sur le thème de développement. Le dispositif n'est pas prêt pour une activation publique globale.

## Règles de conduite actives

- Aucun produit brouillon ne doit être modifié par le chantier catalogue.
- Aucune nouvelle collection ni aucun hub ne doit être publié sans nouveau GO de Patrice.
- La homepage, la livraison et le panier appartiennent à d'autres sessions.
- Aucun push complet du thème. Les déploiements Shopify restent ciblés, suivis d'un pullback.
- Préserver le worktree sale et les fichiers concurrents.
- Les métadonnées définitives des collections publiques attendent membres, stock et contenu fiables.

## État Shopify Admin vérifié le 2026-08-10

- 589 produits : 261 actifs, 312 brouillons, 15 archivés, 1 non répertorié.
- 51 définitions de metafields produit.
- 11 définitions de metafields collection.
- 26 collections Admin.
- 20 collections dans le sitemap public.
- 5 collections privées créées le 2026-08-09, toujours en 404 et absentes du sitemap :
  - `bagues-pierres`, 3 produits ;
  - `par-pierre-agate`, 10 produits ;
  - `par-pierre-quartz-rose`, 8 produits ;
  - `par-pierre-lapis-lazuli`, 6 produits ;
  - `par-pierre-amazonite`, 6 produits.

## Contrat de données canonique

Sources :

- `config/catalogue-data-contract.json` ;
- `docs/reference/2026-08-10-contrat-donnees-catalogue.md`.

Décisions :

- `stone_handle` = pierre principale ;
- `stone_handles` = pierres secondaires ou ensemble des pierres d'un produit multi-pierres ;
- `stone_benefits` reste la clé technique et porte le libellé public `Symbolique traditionnelle` ;
- `content_updated_at` = date éditoriale canonique ;
- les variantes de clés rejetées sont bloquées par le contrat.

Quatre définitions Shopify ont été alignées le 2026-08-10 : trois définitions produit et le libellé collection `stone_handle`. Aucune valeur produit n'a été modifiée dans ce dernier lot.

## Templates et hubs

Thème de développement : `Development (c105a8-mac-1)`, ID `199421952347`.

Présents uniquement sur ce thème :

- rendu collection pierre avec introduction, composition minérale, couleurs, symbolique traditionnelle, comment porter, entretien, sources et date de mise à jour ;
- template type dont l'introduction disparaît proprement lorsque la description est vide ;
- quatre templates de pages hub : bijoux par pierre, choisir sa pierre, pierres de naissance, cadeaux d'anniversaire de mariage.

Les quatre Pages Shopify n'ont pas été créées. Le scope de lecture des pages n'est pas disponible, donc la voie locale sûre a été retenue. Aucun bloc produit n'est configuré dans les drafts.

## Baguettes et route Bagues

- 18 baguettes minérales actives sont listées dans `docs/reference/2026-08-10-baguettes-retrait-catalogue-public.md`.
- Elles restent actives et inchangées jusqu'à la session inventaire.
- 2 baguettes supplémentaires sont déjà en brouillon et n'ont pas été touchées.
- Route canonique future : `/collections/bagues-pierres`.
- La collection reste privée tant que 8 bagues réelles et disponibles ne sont pas confirmées.
- Fallback temporaire : `/collections/bijoux-pierres-naturelles`.
- Écart homepage connu : `templates/index.json` référence encore `shopify://collections/bagues`. Correction réservée à la session UI/UX.

## SEO public

Le seul changement live de la phase catalogue reste le correctif ciblé antérieur dans `layout/theme.liquid` : noindex des recherches et tags legacy, titres sans duplication de marque et schema global factuel. Aucun nouveau push live n'a été effectué le 2026-08-10.

Treize collections publiques restent sans couple complet de métadonnées SEO explicites. Leur matrice d'activation est dans `docs/reference/2026-08-10-matrice-activation-collections-publiques.md`. Aucun titre ni aucune meta définitive n'a été écrit dans ce dernier lot.

## Validation finale

- Theme Check : 282 fichiers, 0 erreur, 29 avertissements historiques.
- JSON : 9 fichiers de contrat et templates validés.
- `git diff --check` : propre.
- Pullback du thème de développement : 9 fichiers identiques aux fichiers locaux.
- Previews des 4 hubs : HTTP 200, thème `199421952347`, un H1 par page, aucune sélection produit rendue.
- Collections privées : 5 réponses 404 et 5 absences du sitemap de 20 collections.

## Dépendances et chantiers non exécutés

- inventaire réel pour généraliser la taxonomie, décider du retrait des baguettes et valider les sélections ;
- GSC pour les URLs historiques, signaux et décisions de redirection ;
- GA4 pour le trafic et le comportement ;
- Merchant Center pour le flux et les diagnostics ;
- Pinterest pour le catalogue, le tag et l'activation ;
- Journal, netlinking externe, tracking et Ads restent dans le plan directeur.

## Références de reprise

- Handoff actif : `docs/codex-handoff.md`.
- Checkpoint : `docs/checkpoints/2026-08-10-0757-catalogue-taxonomie-drafts-handoff.md`.
- Index catalogue : `docs/reference/2026-08-09-index-architecture-catalogue.md`.
