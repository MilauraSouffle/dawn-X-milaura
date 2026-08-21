# Handoff Codex MilAura, reprise master

Date : 2026-08-21 08:59 CEST

## Mission de la prochaine session

Reprendre le pilotage global MilAura sans implementer aveuglement. La session master audite, reserve, coordonne, integre et reste seule proprietaire du live. Les sessions C1, Mail, Rentree Sodalite et Pinterest travaillent dans des perimetres disjoints.

Le cap commercial est un site capable d atteindre 100 000 EUR de chiffre d affaires. La charte et la DA MilAura sont les sources executables. Tiffany & Co. et Van Cleef & Arpels donnent le niveau d exigence visuelle, sans copie.

## Lecture obligatoire, dans cet ordre

1. `/Users/paesano/Documents/MilAura website/dawn-X-milaura/AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/checkpoints/2026-08-21-0859-master-strategic-handoff.md`
5. `docs/checkpoints/2026-08-21-0846-c1-0-rejet-handoff.md`
6. `docs/checkpoints/2026-08-20-2013-all-active-customer-email-tests.md`
7. `docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md`
8. `docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md`
9. `docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md`
10. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`
11. `docs/reference/2026-08-12-repository-workflow.md`
12. `docs/reference/2026-08-12-copywriting-milaura.md` avant tout texte public

Pour Atelier, lire sur sa branche :

`/Users/paesano/Documents/MilAura website/_worktrees/atelier-emotions-20260816/docs/checkpoints/2026-08-20-0729-atelier-emotions-pause-handoff.md`

Pour Ruban V3, lire sur sa branche :

`/Users/paesano/Documents/MilAura website/_worktrees/ruban-v3-matrix-20260817/docs/audits/2026-08-17-ruban-v3-eligibility-matrix.md`

## Verite Git au handoff

- canonique theme : `codex/milaura-integration` a `bd62f13c4b14f7d55c25410c33f9e95d96139a25`, propre et aligne avec origin avant les ecritures de ce handoff ;
- miroir Shopify : `origin/main` a `763d7ad94089b9a4c990532863159be9a47fd1a8`, incomplet, ne jamais fusionner aveuglement ;
- live : `190430282075` ;
- developpement general : `199421952347` ;
- Atelier : branche `codex/milaura-atelier-emotions-20260816`, HEAD `2befe429`, theme prive `200007713115`, propre, aligne, parque ;
- Ruban V3 : branche `codex/milaura-ruban-v3-matrix-20260817`, HEAD `3aa0b66d`, propre, aligne, parque ;
- E1 prive : `0478c282`, propre et aligne ;
- E3 prive : `62132a86`, propre et aligne ;
- C1-0 prive : `185c07b`, propre et aligne ;
- aucune mutation Shopify ou live pendant cette cloture.

La nouvelle session doit refaire `git status --short --branch`, `git worktree list --porcelain` et les controles d alignement avant toute reservation ou integration. Ne jamais pousser un theme complet depuis un worktree ancien.

## Etat du plan

### Termine et live

- Hero, dock, navigation, catalogue V1, hubs, occasions, selection d aout, PDP et mobile ;
- Ruban V2 et matrice commerciale V1 ;
- cookies gemme et lien `Continuer sans accepter` ;
- consentement navigateur du diagnostic, purge au retrait et restitution locale dans Mon Ecrin ;
- E1 verite canonique, E2 neutralisation et E3 relances actives.

### P0 ouvert

La persistance durable du diagnostic entre appareils n existe pas encore. Le resultat reste dans le navigateur et le panier sous consentement Preferences. C1 doit fournir une source cliente durable, un consentement explicite de personnalisation, une synchronisation signee et une purge locale, panier et serveur.

C1-0 a prouve la faisabilite technique d une extension Customer Accounts pleine page, mais Patrice a refuse sa preview le 2026-08-21. Elle est trop generique et ignore trop la page compte actuelle. Ne pas reprendre le JSX ni lancer C1-1 avant :

1. audit ecran par ecran de la page actuelle ;
2. concept Mon Ecrin complet en francais ;
3. etats avec et sans diagnostic, commandes et fidelite ;
4. validation visuelle et fonctionnelle Patrice ;
5. nouveau plan de donnees et de consentement ;
6. GO distinct pour C1-1 ;
7. parite, tests et GO distinct avant toute bascule des comptes live.

La page actuelle contient deja le diagnostic local, le profil, la pierre, le rituel, les recommandations, les commandes reelles, les adresses et les produits recemment consultes. Elle est la base minimale, pas la preview C1-0.

### Emails

E1, E2 et E3 sont fermes. Ne pas refaire l audit integral.

- trois relances Messaging actives et testees : consultation `72198390107`, panier `68816961883`, checkout `73633464667` ;
- 45 notifications transactionnelles clients ont recu un test, sans validation creative ;
- trois rappels Shop actifs restent non testables sans evenement reel : retour en stock, baisse de prix, abandon de navigation ;
- rappel panier Shop inactif ;
- `BIENVENUE10` mort ; popup et bulle retires ; footer newsletter conserve ;
- Klaviyo sans flow abandon actif prouve ; Judge.me non prouve configure.

E4 a E6 appartiennent a la session mail specialist : systeme visuel email compatible, matrice exhaustive, objets et preheaders francais, inscription consentie, post-achat, avis, retention, pression commerciale, segmentation, delivrabilite et mesure. E7, Worker retour produit, se coordonne avec le master si du code est necessaire.

Validation technique, validation creative Patrice, GO Admin et GO live restent quatre gates differents.

### Rentree Sodalite

Patrice a choisi la Sodalite et indique avoir recu les produits destines a ce travail saisonnier. Cela autorise l ouverture du lot, pas son live automatique.

La session doit commencer read-only, puis faire valider :

- produits exacts, variantes, stock physique et statut public ;
- cout complet, marge et disponibilite ;
- dates de debut et fin ;
- landing ou collection cible ;
- remplacement propre de la selection d aout ;
- visuels fideles au produit ;
- copy selon le guide MilAura ;
- mobile, desktop, accessibilite, performance et rollback.

`Sodalite, le bleu de la rentree` est un titre de travail issu de la feuille de route Pinterest, pas une formulation publique validee.

Cette session et le futur rail `Nouveautes / Meilleures ventes / Promotions` ne possedent jamais les memes fichiers en parallele. Le rail commercial reste un lot distinct, encore non construit.

### Pinterest

Tache active : `01a01eb8-192c-76c1-9fb7-7599654e5e64`.

L analyse de la formation est terminee : 83 videos, 20 h 10, note `14,5/20`, feuille de route 29 pages. Le livrable est :

`/Users/paesano/.codex/visualizations/2026/08/20/01a01eb8-192c-76c1-9fb7-7599654e5e64/outputs/pinterest-roadmap/PLAN-STRATEGIQUE-PINTEREST-MILAURA-2026.pdf`

Pinterest peut avancer sur securite du compte, coherence, tableaux, SEO, UTM, catalogue, consentement, Tag/CAPI et deduplication. Les briefs creatifs Sodalite peuvent etre prepares. La production finale de masse et les Ads attendent inventaire, fidelite produit, feed, tracking et economie verifies.

### Lots parques

Ruban V3 : matrice 268 produits terminee, 53 candidats forts, 77 a revoir, 110 sans match honnete, 19 exclus et `0 PRET` sous le contrat strict. Reprendre apres inventaire complet, couts, marges, disponibilite et catalogue en ligne fiables. Higgsfield seul, Grok exclu, aucune transformation visuelle du produit.

Atelier : prototype prive non integre. Reprendre seulement apres factures, reception de ses propres composants, comptage A-Z, mesures, prototypes Karine, temps, pertes, cout, prix, architecture Shopify, restitution Admin, revue juridique et nouveau GO. Les produits Sodalite recus ne ferment pas ce gate.

## Vague parallele a coordonner

1. Master et nouvelle session C1 : P0 compte, architecture et integration.
2. Mail specialist : E4 a E6, aucun compte, cookie ou theme hors scope.
3. Rentree Sodalite : section saisonniere et landing, aucun rail commercial general.
4. Pinterest Foundations : aucun fichier theme et aucune Ads.
5. Inventaire et catalogue : verite produit hors theme.

Chaque session s inscrit dans `docs/workstreams.md` avant sa premiere edition avec proprietaire, branche, worktree, fichiers, theme et mutations interdites. Aucun live hors du master.

## Reste du plan apres cette vague

1. C1-1 apres validation du nouveau concept, puis S1B/S1C seulement apres C1.
2. E7 et fermeture lifecycle/delivrabilite.
3. Reprise Ruban V3 apres inventaire.
4. Rail commercial homepage distinct.
5. Karine, preuves d atelier et Sur mesure V1.
6. Pages enfants Naissance et Mariage.
7. Journal et clusters avec validation humaine.
8. DataForSEO cible avant les nouvelles pages guidees par la demande.
9. Audit SEO/AEO/GEO global lorsque les routes sont stables.
10. Performance, accessibilite, netlinking, GA4, GSC, Merchant Center et tests lifecycle reels.
11. Pilote Ads seulement apres gate inventaire, cout, marge, offre, feed, tracking, consentement et conversion.

La sequence proposee par Patrice est donc bonne, mais `finir les sessions, faire le SEO, puis Ads` oublie la gate business et mesure. Le SEO final ne remplace ni la marge de contribution, ni le feed, ni le tracking, ni les regles d arret publicitaires.

## Interdits et sujets clos

Ne pas rouvrir sans nouvelle preuve et decision Patrice :

- claim LFG global ;
- longueur des PDP ;
- formulations du quiz sur apaisement, protection et energie ;
- preuve sociale Judge.me avec fallback approuve ;
- doctrine lithotherapie MilAura, hors promesse medicale ;
- Ruban V2 et cookies, sauf regression reproductible.

Ne jamais :

- fusionner `origin/main` aveuglement ;
- pousser un theme complet depuis un worktree ancien ;
- avoir deux proprietaires des memes fichiers ou du meme theme ;
- confondre consentement cookies, personnalisation, email, SMS et compte ;
- annoncer une persistance inter-appareils avant preuve ;
- lancer Ads sans inventaire, economie, feed, consentement, tracking et stop rules.

## Message de reprise master copiable

```text
Reprends le pilotage master MilAura au 2026-08-21 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Commence en lecture seule.

Lis integralement AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md, docs/checkpoints/2026-08-21-0859-master-strategic-handoff.md, docs/checkpoints/2026-08-21-0846-c1-0-rejet-handoff.md, docs/checkpoints/2026-08-20-2013-all-active-customer-email-tests.md, docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md, docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md, docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md et le plan canonique docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md.

Verifie ensuite Git, origin, tous les worktrees theme et prives, les proprietaires et les taches actives. Base connue avant le commit de ce handoff : codex/milaura-integration propre et aligne a bd62f13c. origin/main a 763d7ad9 est un miroir Shopify incomplet et ne doit jamais etre fusionne aveuglement. Live 190430282075 ; developpement 199421952347. Une seule session master possede l integration et tout live.

Cap : site capable d atteindre 100 000 EUR de chiffre d affaires. DA MilAura executable. Tiffany & Co. et Van Cleef & Arpels comme references de niveau visuel, sans copie. Ne rouvre pas LFG, longueur PDP, formulations validees du quiz, preuve sociale, cookies ou Ruban V2 sans regression ou nouvelle decision explicite.

P0 : la persistance durable du diagnostic dans Le Cercle reste non resolue. Le lot navigateur sous consentement est live, mais il ne fournit pas la parite entre appareils. C1-0 est techniquement valide mais visuellement refuse par Patrice. Repars de la vraie page compte actuelle, qui contient deja diagnostic local, profil, pierre, rituel, recommandations, commandes, adresses et produits recents. Aucun JSX, C1-1 ou switch de comptes live avant nouveau concept, GO visuel/fonctionnel, plan de donnees, tests et GO distincts.

E1-E3 sont fermes. Une session mail specialist distincte reprend E4-E6 ; E7 reste coordonne avec le master. Ne laisse aucun chevauchement sur comptes, consentements ou Admin.

Patrice ouvre en parallele un lot Rentree Sodalite pour remplacer la selection d aout. Les produits de ce lot sont recus, mais la session doit verifier liste exacte, stock, cout, marge, statut public, landing, dates et fidelite visuelle avant preview. Le titre Sodalite, le bleu de la rentree est seulement un titre de travail. Reserve ce lot dans docs/workstreams.md avec branche, worktree et fichiers exacts. Ne construis pas en parallele le rail Nouveautes / Meilleures ventes / Promotions s il touche les memes fichiers.

La tache Pinterest active est 01a01eb8-192c-76c1-9fb7-7599654e5e64. Son analyse de 83 videos et son PDF 29 pages sont termines. Laisse-la avancer sur fondations, tableaux, SEO, UTM, catalogue, consentement, Tag/CAPI et briefs, sans Ads avant inventaire, feed, tracking et economie verifies.

Ruban V3 reste PAUSE/PARQUE a 3aa0b66d jusqu a l inventaire et au catalogue fiables. Atelier reste PAUSE/PARQUE a 2befe429 sur theme prive 200007713115 jusqu a son gate physique propre. La reception des produits Sodalite ne vaut pas reception Atelier.

Avant toute ecriture, audite les nouvelles sessions C1, Mail et Rentree, puis cree ou valide leurs reservations sans chevauchement. Conserve un seul proprietaire de l integration et du live. Audite les retours, recadre les scopes, integre selectivement, push Shopify cible avec --nodelete seulement apres les GO requis, puis pullback et QA publique.

Apres cette vague, n oublie pas : rail commercial homepage, Karine/Sur mesure, pages enfants Naissance/Mariage, Journal, S1B/S1C apres C1, DataForSEO cible puis audit global, performance, accessibilite, netlinking, GA4, GSC, Merchant Center, lifecycle reel et pilote Ads sous gate inventaire + cout + marge + feed + consentement + tracking + conversion.

Commence par me rendre un point factuel : Git/worktrees/proprietaires, sessions actives, conflits de fichiers ou themes, plan des integrations et gates. Aucune mutation avant ce point.
```

## Cloture de la session precedente

Checkpoint : `docs/checkpoints/2026-08-21-0859-master-strategic-handoff.md`.

Cette cloture ne deploie rien. La nouvelle session master doit mettre a jour ce document et le checkpoint suivant lorsqu elle prend effectivement possession du canonique.
