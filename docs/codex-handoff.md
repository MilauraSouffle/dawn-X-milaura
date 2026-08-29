# Handoff Codex MilAura, Mon Ecrin dynamique vers le live

Date : 2026-08-29 07:29 CEST
Statut : `SESSION C1 FERMEE - REPRISE FRAICHE REQUISE - NON LIVE`

## Resultat a retenir

Mon Ecrin n est pas bloque par la fin de l inventaire.

Patrice a decide le 2026-08-29 que le catalogue et le stock MilAura sont vivants. C1 doit appeler dynamiquement les produits et categories Shopify actuellement publies, vendables et disponibles. Il ne doit plus attendre que les 175 references physiques soient toutes traitees, ni reposer sur une liste commerciale figee.

Cette decision ne retire aucune gate Ads : stock, prix, cout, marge, feed, tracking, consentement et mesure restent obligatoires avant de payer pour diffuser un SKU.

## Etat C1 ferme

- UX V3 validee : `d8d036ff7725c93168d24b9270da54de657ad6af`.
- vraies surfaces privees C1-1 : `cf2877ba4ee5faac143a4273c486fe39c96106a8`, G0 a G11 PASS.
- application RC privee : `c877d630`.
- theme RC de base : `2f95b3d1`.
- correctif d idempotence : `7bb67efca588913dc80ba877eb2c5e01f0d64f86`.
- endpoint stable : `146ac026`.
- runtime sans commande : `1ee9c07f`.
- runtime avec commande : `e863fc100ccae47ff1c8a43cdfeccef763f4bcd4`.

Gates :

- RC1 PASS ;
- RC2 PASS technique ;
- RC3 PASS prive ;
- RC4 PASS prive ;
- RC5 partiel, a fermer avec le nouveau resoluteur dynamique ;
- RC6 `NO-GO CONDITIONNEL`, shell natif Orders et Profile encore en anglais ;
- RC7 PASS prive O2 ;
- RC8 PASS prive avec et sans commande ;
- RC9 PASS ;
- RC10 PASS ;
- RC global ouvert.

## Etat Shopify et runtime

- dev store C1 uniquement : `milaura-c1-preview`, ID `107347837273` ;
- theme prive : `205027279193`, toujours unpublished ;
- compte synthetique RNO1 : zero commande apres rollback ;
- produit, variant, media, publication et commande O2 : supprimes ;
- `backend_url` : vide ;
- flag C1 : `false` ;
- scopes temporaires : absents ;
- App Dev, backend et listeners : arretes ;
- theme general `199421952347` et live `190430282075` : non touches par C1 ;
- Mon Ecrin C1 : non integre et non live.

## Contrat dynamique exige

1. Lire depuis Shopify le titre, le prix, l URL, le media, la publication et la disponibilite au runtime.
2. Exclure toute reference de-publiee, indisponible, sans URL ou sans media exploitable.
3. Ordonner les recommandations depuis le profil, la pierre favorite, l intention et l historique qualifie.
4. Utiliser des replis controles : exact, proche, univers ou categorie, collection, catalogue eligible.
5. Ne jamais conserver un prix ou un lien de vente en dur dans C1.
6. Conserver la semantique historique des commandes, mais resoudre les cartes actuelles contre le catalogue vivant.
7. Absorber les changements de stock et de publication sans redeploiement.
8. Mesurer les candidats, le niveau de repli, les etats vides, la latence et les erreurs sans exposer les donnees clientes.

Le Ruban V3 live constitue la meilleure reference locale pour ce moteur : il filtre les indisponibles et les produits sans image, puis descend par replis exact, proche, univers, collection et catalogue. Il doit etre audite et adapte au contexte Customer Accounts, pas copie aveuglement.

## Chemin minimal restant

### 1. Resolver dynamique et RC5 prive

Auditer les mappings actuels, implementer le resoluteur dynamique, couvrir historique, retours, annulations, remboursements, cadeaux, egalites et produits sans pierre, puis rejouer uniquement la QA privee utile avec et sans commande.

### 2. Productionisation

Backend production stable, secrets hors Git, retention, observabilite, sauvegarde, rollback, app deploy ou release, traductions et preparation Admin. Chaque mutation garde son GO propre.

### 3. Integration et live

Integration ciblee du bridge et du correctif d idempotence, Theme Check et pullback, bascule Customer Accounts, QA publique mobile et desktop, verification consentement et purge, rollback pret, puis GO live explicite de Patrice.

## Premier geste de la session fraiche

Commencer strictement en lecture seule. Verifier Git, origin, worktrees, proprietaires, depot prive et commits C1. Lire les checkpoints listes ci-dessous. Rendre au master un audit borne des mappings figes et proposer le plus petit lot prive capable de fermer le contrat dynamique et RC5.

Aucune branche, ecriture, app dev, backend, Shopify, compte, commande, scope, Admin, Mail, deploy, release, integration, publication ou live avant reservation master.

Master actif, proprietaire exclusif integration et live : `01a03e8e-aa31-76e1-937a-a4aeb6706c82`.

## Fichiers a lire integralement

- `AGENTS.md`
- `docs/project-state.md`
- `docs/workstreams.md`
- `docs/codex-handoff.md`
- `docs/checkpoints/2026-08-29-0729-c1-mon-ecrin-dynamic-live-handoff.md`
- `docs/checkpoints/2026-08-25-1228-c1-o2-orders-qa-pass.md`
- `docs/checkpoints/2026-08-28-1338-ruban-v3-final-accepted-handoff.md`
- `docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md`
- `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`

## Prompt copie-collable

```text
Reprends C1 Mon Ecrin MilAura au 2026-08-29 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Commence strictement en lecture seule.

Lis integralement AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md, docs/checkpoints/2026-08-29-0729-c1-mon-ecrin-dynamic-live-handoff.md, docs/checkpoints/2026-08-25-1228-c1-o2-orders-qa-pass.md, docs/checkpoints/2026-08-28-1338-ruban-v3-final-accepted-handoff.md, docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md et docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md.

Decision Patrice : la fin de l inventaire ne bloque plus Mon Ecrin. Le catalogue et le stock sont vivants. C1 doit resoudre dynamiquement des recommandations et categories intelligentes depuis les produits Shopify actuellement publies, vendables et disponibles, avec prix, URL et medias vivants. Replis requis : exact, proche, univers ou categorie, collection, puis catalogue eligible. Une indisponibilite ou de-publication doit etre absorbee sans redeploiement. Les gates Ads stock, cout, marge, feed et tracking restent separees.

Etat ferme : V3 d8d036ff, C1-1 cf2877ba, RC prive c877d630, theme RC 2f95b3d1, correctif idempotence 7bb67efc, endpoint 146ac026, preuve sans commande 1ee9c07f, preuve commandes e863fc10. RC4, RC7 et RC8 sont PASS prive. RC5 doit etre reformule et ferme par le resoluteur dynamique. RC6 reste NO-GO conditionnel sur le shell natif anglais. Mon Ecrin n est pas live. Dev store 107347837273, theme prive 205027279193 unpublished, backend_url vide, flag false, scopes temporaires absents, runtime arrete.

Premiere mission uniquement : auditer les sources et contrats C1 actuels, identifier exactement les mappings figes a remplacer et proposer au master 01a03e8e-aa31-76e1-937a-a4aeb6706c82 le plus petit lot prive qui ferme le nouveau contrat dynamique et RC5. Utilise le moteur Ruban V3 comme reference architecturale, sans copier aveuglement son implementation. Ne rien executer ni ecrire avant reservation master : aucun code, compte, commande, scope, Admin, Mail, Shopify, backend, app dev, deploy, release, integration, publication ou live.

Objectif final : terminer Mon Ecrin, le productioniser, l integrer, le tester publiquement et le mettre definitivement en ligne sous des GO distincts, sans attendre la fin de l inventaire complet.
```

## References

- checkpoint exhaustif de cette cloture : `docs/checkpoints/2026-08-29-0729-c1-mon-ecrin-dynamic-live-handoff.md` ;
- commandes privees et rollback : `docs/checkpoints/2026-08-25-1228-c1-o2-orders-qa-pass.md` ;
- architecture dynamique Ruban : `docs/checkpoints/2026-08-28-1338-ruban-v3-final-accepted-handoff.md`.
