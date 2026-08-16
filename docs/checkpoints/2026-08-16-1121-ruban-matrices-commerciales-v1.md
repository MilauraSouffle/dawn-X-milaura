# Checkpoint Ruban matrices commerciales Vague 1

Date de clôture : 2026-08-16 17:45 CEST

## Périmètre

- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/ruban-matrices-commerciales-20260816`
- Branche : `codex/milaura-ruban-matrices-commerciales-20260816`
- Base canonique : `e860a0f0`
- Scope Shopify : Search & Discovery et cinq valeurs `milaura.recommendation_cutout` approuvées uniquement.
- Interdictions respectées : aucun thème, aucune preview, aucun live, aucun prix, stock, statut produit, Hero, homepage, cookies ou Atelier.

## Réalisé

- Gate master fermé pour une matrice exacte de 9 sources, 4 familles, 6 associations réciproques et 12 placements dirigés.
- Matrice obsidienne source `10557516644699` relue et laissée intacte car déjà exacte.
- 8 matrices manquantes enregistrées dans Shopify Search & Discovery avec confirmation de persistance dans l'admin.
- 9 endpoints publics `intent=complementary` contrôlés : 9/9 exacts.
- 5 détourages comparés aux médias officiels et approuvés avec alpha.
- 5 valeurs `milaura.recommendation_cutout` enregistrées et relues après rechargement de chaque fiche.
- 5 fragments publics contrôlés : chaque produit recommandé sert le fichier exact depuis `/cdn/shop/files/`, et non le fallback d'asset du thème.
- Rapport : `docs/audits/2026-08-16-ruban-matrices-commerciales-v1.md`.

## Preuves des cinq metafields

| Produit | Média enregistré | Preuve publique |
| --- | --- | --- |
| `10357431206235` | `milaura-reco-cutout-obsidienne-earrings-v1.png` | Source `10557516644699`, fichier servi depuis `/cdn/shop/files/` |
| `10637459095899` | `milaura-ribbon-cutout-aigue-marine-bracelet-v1.png` | Source `10637436584283`, fichier servi depuis `/cdn/shop/files/` |
| `10637436584283` | `milaura-ribbon-cutout-aigue-marine-earrings-v1.png` | Source `10637459095899`, fichier servi depuis `/cdn/shop/files/` |
| `10637436977499` | `milaura-ribbon-cutout-amethyste-ring-v1.png` | Source `10637436715355`, fichier servi depuis `/cdn/shop/files/` |
| `10637436715355` | `milaura-ribbon-cutout-amethyste-necklace-v1.png` | Source `10637436977499`, fichier servi depuis `/cdn/shop/files/` |

Chaque valeur a été relue après rechargement de la fiche Shopify. Les fragments publics rendent les noms de fichiers attendus avec des URLs `/cdn/shop/files/`, ce qui distingue la donnée du metafield du fallback d'asset du thème.

## Preuves Search & Discovery

| Source | Réponse publique exacte |
| --- | --- |
| `10557516644699` | `10357431206235`, `10357456601435` |
| `10357431206235` | `10557516644699`, `10357456601435` |
| `10357456601435` | `10557516644699`, `10357431206235` |
| `10637459095899` | `10637436584283` |
| `10637436584283` | `10637459095899` |
| `10637436977499` | `10637436715355` |
| `10637436715355` | `10637436977499` |
| `10557523099995` | `10557518381403` |
| `10557518381403` | `10557523099995` |

## Risques et suite

1. Le volume de ventes reste trop faible pour attribuer une causalité ou promettre une hausse de 60 %. Mesurer impressions, clics, ajouts et taux d'attache avant une Vague 2.
2. Les familles Amazonite, quartz rose et lapis-lazuli restent volontairement hors Vague 1.
3. Intégrer uniquement ce rapport et ce checkpoint dans le canonique master. Aucun déploiement thème n'est requis : les données Shopify sont déjà actives sur le storefront.

## Prompt de reprise

> Intégrer le commit documentaire de `codex/milaura-ruban-matrices-commerciales-20260816` dans le checkout master en conservant la version canonique courante de `docs/workstreams.md`. Les 9 matrices et 5 metafields sont déjà actifs dans Shopify. Ne déployer aucun thème pour ce lot.
