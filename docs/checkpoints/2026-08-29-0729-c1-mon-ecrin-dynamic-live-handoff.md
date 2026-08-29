# C1 Mon Ecrin, handoff vers catalogue dynamique et mise en ligne

Date : 2026-08-29 07:29 CEST
Branche canonique au debut du handoff : `codex/milaura-integration`
Commit canonique au debut du handoff : `acf894d2d5985ff0fb76ae44a6e6bf75db9e648f`
Statut : `SESSION C1 FERMEE - REPRISE FRAICHE REQUISE - MON ECRIN NON LIVE`

## Decision explicite de Patrice

Patrice ferme la grande session C1 et demande une reprise fraiche orientee mise en ligne.

La fin de l inventaire physique n est plus un prerequis de Mon Ecrin. Le stock MilAura est vivant et continuera de changer apres la release. Mon Ecrin doit donc selectionner intelligemment ses recommandations et categories depuis le catalogue Shopify courant, au moment de la requete, au lieu de dependre d une liste de produits figee ou de la fin des 175 references physiques.

Cette decision concerne C1 seulement. Elle ne supprime pas les gates stock, prix, cout, marge, feed, tracking, consentement et mesure avant acquisition payante sur un SKU.

## Etat factuel ferme

- C1 V3 visuelle privee gelee a `d8d036ff7725c93168d24b9270da54de657ad6af`.
- C1-1 privee gelee a `cf2877ba4ee5faac143a4273c486fe39c96106a8` avec G0 a G11 PASS.
- application RC privee a `c877d630` ; theme RC de base a `2f95b3d1`.
- correctif d idempotence theme ferme a `7bb67efca588913dc80ba877eb2c5e01f0d64f86`.
- endpoint stable prouve a `146ac026`.
- preuve runtime sans commande fermee a `1ee9c07f`.
- preuve commandes O2 fermee a `e863fc100ccae47ff1c8a43cdfeccef763f4bcd4`.
- RC1 PASS, RC2 PASS technique, RC3 PASS prive, RC4 PASS prive, RC7 PASS prive O2, RC8 PASS prive avec et sans commande, RC9 PASS et RC10 PASS.
- RC5 reste partiel dans l ancien cadrage ; il doit maintenant etre reformule autour d un resoluteur dynamique de catalogue et de destinations.
- RC6 reste ferme avec `NO-GO CONDITIONNEL` tant que le shell natif Orders et Profile reste en anglais.
- RC global ouvert. Aucun app deploy, release, integration theme, bascule Admin, publication ou live C1 n a eu lieu.

Etat de rollback confirme a la cloture O2 :

- dev store unique `milaura-c1-preview`, ID `107347837273` ;
- theme prive `205027279193` toujours non publie ;
- compte synthetique RNO1 revenu a zero commande ;
- produit, variant, media, handle, publication et commande QA supprimes ;
- `backend_url` vide et flag C1 a `false` ;
- scopes temporaires absents ;
- App Dev, backend et listeners arretes.

Preuve : `docs/checkpoints/2026-08-25-1228-c1-o2-orders-qa-pass.md`.

## Nouveau contrat catalogue de Mon Ecrin

Le prochain lot ne doit pas attendre que 175 produits soient traites. Il doit etablir et prouver ce contrat :

1. Shopify est la source de verite runtime pour le titre, le prix, l URL, le media, la publication et la disponibilite.
2. Une recommandation est eligible seulement si elle est publiquement accessible sur la destination retenue, disponible a la vente et dotee d un media et d une URL exploitables.
3. Le moteur part du profil, de la pierre favorite, des commandes qualifiees et de l intention cliente, puis descend par replis controles : correspondance exacte, correspondance proche, univers ou categorie, collection, puis catalogue eligible.
4. Une reference de-publiee, supprimee ou devenue indisponible disparait des recommandations sans correctif manuel ni redeploiement.
5. Le prix et la disponibilite ne sont jamais recopies en dur dans C1.
6. L historique de commande conserve son sens historique, mais toute carte cliquable actuelle est resolue contre le catalogue vivant.
7. Une absence de correspondance exacte produit un repli honnete, jamais un lien mort, un prix obsolete ou un produit indisponible.
8. Le comportement est borne, testable et observable : nombre de candidats, motif du repli, latence, erreurs Shopify et etat vide mesure, sans exposer les donnees clientes.

Le Ruban V3 live fournit une reference d architecture utile : exclusion des indisponibles et produits sans image, replis exact, proche, univers, collection puis catalogue, et garantie de non-vide tant qu un autre produit eligible existe. Ce precedent doit etre audite et reutilise quand pertinent, sans copier aveuglement son code ni son contrat dans Customer Accounts.

References Ruban :

- `docs/checkpoints/2026-08-28-1338-ruban-v3-final-accepted-handoff.md` ;
- `docs/checkpoints/2026-08-28-1322-ruban-v3-three-visible-live.md`.

## Plus petit chemin restant vers le live

### Lot 1, fermer le produit et RC5 en prive

- auditer l architecture C1 et le contrat Shopify disponible dans Customer Accounts ;
- remplacer les mappings de destinations figes par le resoluteur dynamique ;
- couvrir produits sans pierre, egalites, cadeaux, retours, annulations, remboursements et references historiques ;
- tester les categories, les replis, les produits indisponibles ou de-publies, les prix et liens vivants ;
- rejouer la QA privee ciblee avec et sans commande, sans recreer toute la campagne O2 si les preuves existantes restent valides.

### Lot 2, productioniser

- deployer le backend stable de production avec secrets hors Git, retention, observabilite, sauvegarde et rollback ;
- deployer ou releaser l app sous autorisation distincte ;
- traiter la traduction francaise des surfaces natives possibles et documenter toute limite Shopify incompressible ;
- preparer la configuration Admin sans basculer les comptes avant GO.

### Lot 3, integrer et mettre en ligne

- integrer seulement le bridge theme et le correctif d idempotence necessaires ;
- valider pullback, Theme Check et regression theme ;
- basculer Customer Accounts de facon controlee ;
- executer QA publique desktop et mobile, session neuve, commande existante et compte sans commande ;
- verifier purge, consentement, liens, recommandations dynamiques, erreurs, monitoring et rollback ;
- obtenir le GO live exact de Patrice, puis documenter la mise en ligne definitive.

Ces trois lots sont une sequence de fermeture, pas trois nouveaux chantiers fonctionnels. Les gates de mutation restent separees parce qu un deploy app, une bascule Admin et un live ont des risques et des rollbacks differents.

## Interdits transmis a la reprise

Cette cloture n autorise aucune branche C1 nouvelle, modification de code, produit, commande, scope, Admin, Mail, deploy, release, integration, publication ou live. La session fraiche commence strictement en lecture seule, verifie Git, les proprietaires et les artefacts prives, puis demande au master la reservation du plus petit lot 1.

Mail conserve la propriete exclusive de ses surfaces. Le master `01a03e8e-aa31-76e1-937a-a4aeb6706c82` conserve seul l integration et le live.

## Prompt de reprise copie-collable

```text
Reprends C1 Mon Ecrin MilAura au 2026-08-29 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Commence strictement en lecture seule. Lis integralement AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md, docs/checkpoints/2026-08-29-0729-c1-mon-ecrin-dynamic-live-handoff.md, docs/checkpoints/2026-08-25-1228-c1-o2-orders-qa-pass.md, docs/checkpoints/2026-08-28-1338-ruban-v3-final-accepted-handoff.md et docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md.

Decision Patrice : la fin de l inventaire ne bloque plus Mon Ecrin. Le catalogue et le stock sont vivants. C1 doit resoudre dynamiquement des recommandations et categories intelligentes depuis les produits Shopify actuellement publies, vendables et disponibles, avec prix, URL et medias vivants, replis exact, proche, univers ou categorie, collection puis catalogue. Une indisponibilite ou de-publication doit etre absorbee sans redeploiement. Les gates Ads stock, cout, marge, feed et tracking restent separees.

Etat ferme : V3 d8d036ff, C1-1 cf2877ba, RC prive c877d630, theme RC 2f95b3d1, correctif idempotence 7bb67efc, endpoint 146ac026, preuve sans commande 1ee9c07f, preuve commandes e863fc10. RC4, RC7 et RC8 sont PASS prive. RC5 doit etre reformule et ferme par le resoluteur dynamique. RC6 reste NO-GO conditionnel sur le shell natif anglais. Mon Ecrin n est pas live. Dev store 107347837273, theme prive 205027279193 unpublished, backend_url vide, flag false, scopes temporaires absents, runtime arrete.

Premiere mission uniquement : auditer les sources et contrats C1 actuels, identifier exactement les mappings figes a remplacer et proposer au master 01a03e8e-aa31-76e1-937a-a4aeb6706c82 le plus petit lot prive qui ferme le nouveau contrat dynamique et RC5. Reutilise comme reference le moteur Ruban V3, sans copier aveuglement son implementation. Ne rien executer ni ecrire avant reservation master : aucun code, compte, commande, scope, Admin, Mail, Shopify, backend, app dev, deploy, release, integration, publication ou live.

Objectif final : terminer Mon Ecrin, le productioniser, l integrer, le tester publiquement et le mettre definitivement en ligne sous des GO distincts, sans attendre la fin de l inventaire complet.
```

## Etat de la session fermee

- aucune mutation Shopify pendant ce handoff ;
- aucun produit, commande, compte, theme, app, backend, DNS, Admin ou Mail touche ;
- les autres worktrees concurrents sont preserves ;
- Mon Ecrin reste non live a la fermeture.
