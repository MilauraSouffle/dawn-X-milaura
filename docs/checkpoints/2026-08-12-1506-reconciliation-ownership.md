# MilAura - Reconciliation et ownership du worktree

Date : 2026-08-12 15:06 CEST
Branche : `codex/milaura-reconcile-2026-08-07`

## Resultat

Le catalogue V1 et le panier live sont maintenant deux commits autonomes pousses sur la branche canonique :

- `cb0da71b feat: activate catalogue v1` ;
- `6259200d fix: preserve live cart rewards`.

Le panier a ete relu depuis le theme live `190430282075`. Les trois fichiers correspondent bit a bit au pullback et le JavaScript passe `node --check`.

## Frontiere Git

`origin/main` est un miroir Shopify. Il ne doit pas recevoir un merge global du worktree. La consolidation se fait par commits fonctionnels cibles sur `codex/milaura-reconcile-2026-08-07`.

Apres isolation du panier, 41 fichiers suivis restent modifies. Aucun n'a ete restaure, nettoye ou supprime.

## Matrice d'ownership

| Lot | Etat reel | Fichiers principaux | Prochaine action |
| --- | --- | --- | --- |
| Documentation canonique | en cours dans cette reprise | `docs/project-state.md`, `docs/codex-handoff.md`, plan canonique, ce checkpoint | commit documentation cible |
| Integration catalogue UI | public, integration incomplete | `templates/index.json`, `sections/milaura-navbar.liquid`, guide de decouverte | remplacer la route Bagues historique et verifier les menus |
| Panier 30/50/80 | live, versionne | trois fichiers du commit `6259200d` | ne plus inclure dans un autre lot |
| Livraison globale | local, non livre | pages legales, footer, cart, collections, landings, PDP, `page.llms-txt.liquid` | audit de coherence avant commit |
| PDP-P0 et S1A | local, non livre | `milaura-product-hero.liquid`, template produit, landing bougies, fallback achat | separer badges/metafields de S1A puis tester une fiche pilote |
| Contrat catalogue et pipeline | local, source canonique externe au theme | `METAFIELDS-REFERENCE.md`, `PRODUCT-MAPPING.md`, contrats JSON et reference | rapprocher du pipeline Agentic-Ops avant commit theme |
| Design bandeau | live pour `c909f192`, nouvelles experiences non validees | trois assets non suivis et deux copies `milaura-announcement` | conserver, ne pas committer, nouvelle proposition apres consolidation |
| Sauvegardes et copies temporaires | non suivies | `.codex-tmp-*`, `backups/` | conserver jusqu'a identification des proprietaires |

## Faits catalogue qui changent la reprise

- `/collections/bagues-pierres` est publique avec 6 produits ;
- `/collections/par-pierre-aigue-marine` est publique avec 6 produits ;
- Agate, Quartz rose, Lapis-lazuli et Amazonite sont publiques ;
- les hubs Bijoux par pierre, Naissance et Mariage sont publics ;
- les cinq entrees de navigation existent comme objets Shopify natifs ;
- `templates/index.json` contient encore `shopify://collections/bagues` et doit etre corrige par le lot UI ;
- les 18 baguettes minerales restent un chantier inventaire distinct.

## Prochain ordre

1. Committer uniquement la documentation canonique.
2. Corriger et verifier les destinations UI catalogue.
3. Isoler PDP-P0 et S1A.
4. Auditer l'harmonisation livraison.
5. Ouvrir le lot creatif bandeau et Hero seulement sur une base consolidee.

## Risques

- Les assets design et copies de section rejetes ou experimentaux ont reapparu comme fichiers non suivis. Leur proprietaire n'est pas confirme ; ils restent intacts.
- `sections/milaura-product-hero.liquid` contient plusieurs intentions de changement et ne peut pas etre attribue a un seul lot sans separation.
- Les formulations logistiques statiques ne doivent pas remplacer la future source dynamique liee a `availability_mode`.
- La branche ne doit pas etre consideree propre tant que chaque lot restant n'a pas son commit, ses validations et son statut live explicites.
