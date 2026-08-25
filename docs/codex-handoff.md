# Handoff Codex MilAura, C1 O2 commandes privees pre-reserve

Date : 2026-08-25 09:56 CEST

## Mission de reprise

Reprendre le pilotage master MilAura en lecture seule. La session master reste seule proprietaire de l integration et de tout live. O1-S et O1-SR sont fermes a `99fdaea` : produit QA supprime, zero commande, scopes absents et rollback complet. O2 est seulement pre-reserve ; il valide d abord le schema GraphQL, puis peut recreer le produit, le publier, creer une commande test silencieuse, terminer la QA et tout supprimer apres un nouveau GO Patrice. RC5, RC7, les etats commandes de RC8, le francais natif et toutes les gates production restent ouverts. Le tip theme `7bb67efc` reste prive et non integre. Aucun droit Admin production, release, deploy ou live. Rentree Sodalite reste en pause a `70 %` jusqu au 2026-08-31.

Le cap commercial reste un site capable d atteindre 100 000 EUR de chiffre d affaires. La charte et la DA MilAura sont executables. Tiffany & Co. et Van Cleef & Arpels donnent le niveau d exigence visuelle, sans copie.

## Lecture obligatoire

1. `/Users/paesano/Documents/MilAura website/dawn-X-milaura/AGENTS.md`
2. `docs/project-state.md`
3. `docs/workstreams.md`
4. `docs/checkpoints/2026-08-25-0956-c1-o2-orders-private-qa-reservation.md`
5. `docs/checkpoints/2026-08-25-0943-c1-o1s-product-delete-recovery-reservation.md`
6. `docs/checkpoints/2026-08-24-1834-c1-stable-private-endpoint-prereservation.md`
7. `docs/checkpoints/2026-08-24-1825-c1-m6-recovery-closed.md`
8. `docs/checkpoints/2026-08-24-1657-c1-m6-quick-tunnel-recovery-prereservation.md`
9. `docs/checkpoints/2026-08-24-1627-c1-rno-backend-url-prereservation.md`
10. `docs/checkpoints/2026-08-24-1425-c1-m5-closed-rno3-rno4-prereservation.md`
11. `docs/checkpoints/2026-08-24-1418-c1-otp-single-test-prereservation.md`
12. `docs/checkpoints/2026-08-24-1404-c1-otp-contact-address-saved.md`
13. `docs/checkpoints/2026-08-24-1350-c1-m4-admin-session-recovery.md`
14. `docs/checkpoints/2026-08-24-1344-c1-otp-address-correction-go.md`
15. `docs/checkpoints/2026-08-24-1215-c1-otp-address-correction-prereservation.md`
16. `docs/checkpoints/2026-08-24-1210-c1-otp-route-mismatch-mail-preflight.md`
17. `docs/checkpoints/2026-08-24-0936-c1-otp-manual-identity-confirmation.md`
18. `docs/checkpoints/2026-08-24-0929-c1-otp-admin-identity-correlation-reservation.md`
19. `docs/checkpoints/2026-08-24-0926-c1-otp-route-correlation-reservation.md`
20. `docs/checkpoints/2026-08-24-0920-c1-otp-delivery-readonly-reservation.md`
21. `docs/checkpoints/2026-08-24-0821-c1-rc-runtime-no-orders-reservation.md`
22. `docs/checkpoints/2026-08-24-0718-c1-release-candidate-session-handoff.md`
23. `docs/checkpoints/2026-08-23-1936-c1-rc-rc10-corrections-reaudit.md`
24. `docs/checkpoints/2026-08-23-1548-c1-rc-rc10-audit-no-go.md`
25. `docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md`
26. `docs/checkpoints/2026-08-23-1046-c1-1-g11-closed.md`
27. `docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md`
28. `docs/checkpoints/2026-08-22-1302-c1-1-private-reservation.md`
29. `docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md`
30. `docs/checkpoints/2026-08-21-0859-master-strategic-handoff.md`
31. `docs/checkpoints/2026-08-20-2013-all-active-customer-email-tests.md`
32. `docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md`
33. `docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md`
34. `docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md`
35. `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md`

## Verite Git au handoff

- integration theme avant le commit de cette reservation : `codex/milaura-integration` a `46f9d5b9cb51d7bffb3eff03713c6e64f08d26ba`, propre et alignee `0/0` avec origin ;
- `origin/main` reste un miroir Shopify incomplet, interdit de merge aveugle ;
- live : `190430282075` ;
- developpement general : `199421952347` ;
- C1 V3 privee : branche `codex/milaura-c1-v3-shopify-private-preview-20260822`, commit `d8d036ff7725c93168d24b9270da54de657ad6af`, propre et aligne ;
- C1-1 prive : branche `codex/milaura-c1-1-private-implementation-20260822`, commit `cf2877ba4ee5faac143a4273c486fe39c96106a8`, worktree propre et aligne ;
- C1 RC theme : branche `codex/milaura-c1-release-candidate-theme-20260823`, base `6560d59c`, tip `2f95b3d1ebb2af9863e98f914a1daa835e6b90be`, worktree propre et aligne `0/0` ;
- C1 RC prive : branche `codex/milaura-c1-release-candidate-private-20260823`, base `cf2877ba`, tip `c877d630a8953a0cf1304c7392143288db110b99`, worktree propre et aligne `0/0` ;
- C1 endpoint stable : branche `codex/milaura-c1-stable-private-endpoint-20260824`, base `fac94126`, tip `146ac02633a14c43436a09611996c71d8c861f7d`, worktree propre et aligne `0/0` ;
- C1 correctif idempotence theme : branche `codex/milaura-c1-idempotence-fix-20260824`, base `2f95b3d1`, tip `7bb67efca588913dc80ba877eb2c5e01f0d64f86`, worktree propre et aligne `0/0` ;
- C1 correctif idempotence prive : branche `codex/milaura-c1-idempotence-fix-private-20260824`, base `146ac026`, tip `1ee9c07f27a4f9953ade332a827393271413a2f4`, worktree propre et aligne `0/0` ;
- boutique C1 privee : `milaura-c1-preview`, store ID `107347837273` ;
- aucun listener C1 local sur `3017`, `3457` ou `3018`, aucun app dev ou tunnel actif ; conteneur endpoint stable arrete et port VPS `3018` absent selon la preuve du lot ;
- Rentree Sodalite : branche et distant alignes a `47cc3e62`, worktree propre, theme prive non publie `200259043675`, pause a `70 %` jusqu au 2026-08-31 ;
- Ruban V3 : `3aa0b66d`, parque ;
- Atelier : `2befe429`, theme prive `200007713115`, parque ;
- aucune mutation Shopify, Admin ou live pendant cette cloture.

`/Users/paesano/Documents/Agentic-Ops` sur `main` est tres dirty avec Stella et d autres travaux concurrents. Ne pas y ecrire, nettoyer, indexer ou committer dans le cadre de C1.

## C1 V3 fermee

Patrice a donne le GO exact :

`GO VISUEL C1 V3 - PREVIEW SHOPIFY PRIVÉE VALIDÉE`

Les gates G1 a G4 techniques et G5 visuelle sont fermees au commit `d8d036ff7725c93168d24b9270da54de657ad6af`. La preview couvre six etats, cinq profils, les photographies produit exactes et les viewports 360, 390, 430 et 1440 px.

Cette validation porte uniquement sur la preview privee. V3 utilise des fixtures fictives et des actions simulees. Elle est une preuve UX et runtime, pas un artefact live. Le lot reste gele en lecture seule.

Aucun droit C1-1, persistance, Customer Account API reelle, Admin, bascule de comptes, theme, email ou live n est deduit.

## C1-1 prive ferme et gele

Patrice a donne le 2026-08-22 le GO exact :

`GO C1-1 - ARCHITECTURE ET IMPLÉMENTATION PRIVÉE DES VRAIES DONNÉES, SANS BASCULE LIVE`

Le lot distinct part de `d8d036ff` dans le depot prive `Onora-studio/onora-ops`. Sa branche est `codex/milaura-c1-1-private-implementation-20260822`, son worktree `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-1-private-implementation-20260822`, et ses deux seules zones d ecriture sont `docs/milaura/shopify-apps/customer-accounts-c1-1-private/**` et `docs/milaura/shopify-admin-canonical/c1-1-private/**`. Son HEAD pousse, propre et aligne est `cf2877ba4ee5faac143a4273c486fe39c96106a8`.

Le seul environnement est `milaura-c1-preview`, store ID `107347837273`, avec six comptes synthetiques tags et allowlistes. Les scopes permis sont `write_customers,customer_read_customers,customer_write_customers,customer_read_orders` ; `write_customers` sert uniquement aux definitions declaratives et aucun appel GraphQL Admin depuis le code n est permis. `api_access` et `network_access` sont permis pour les destinations publiques et le backend prive. Les donnees clients de production, autres scopes Admin, theme, emails, inventaire reel, bascule de comptes et live sont interdits.

G0 a G10 sont passes sur donnees synthetiques. Le master a ensuite audite le lot, exige puis verifie deux vagues de corrections sur la durabilite des conflits, la reprise de purge et la fenetre entre preparation et finalisation. Contre-verification finale : 28 tests sur 28, build Shopify PASS, bundle `65416/65536`, zero vulnerabilite, aucun secret reel, listener ou tunnel. La source canonique privee est un groupe de cinq metafields client app-owned ; le protocole signe, la sync, les conflits, la purge serveur, le mapping et les liens publics sont implementes et testes dans le cadre prive.

Patrice a donne le 2026-08-23 le GO exact `GO VISUEL ET FONCTIONNEL C1-1 - PREVIEW PRIVÉE VALIDÉE, SANS RELEASE NI LIVE`. G11 est ferme sur `cf2877ba`. Le lot reste gele en lecture seule. Sans fichier theme, le vrai bridge et la purge de `MilauraPreferenceStorage` ou du panier ne sont pas fermes ; catalogue, Mail, backend production, C1-2, release, deploy, Admin, bascule de comptes, theme, email et live restent interdits sans nouveaux GO. Cadre et audit : `docs/checkpoints/2026-08-22-1302-c1-1-private-reservation.md` et `docs/checkpoints/2026-08-23-1046-c1-1-g11-closed.md`.

## C1 Release Candidate durci, globalement ouvert

Patrice a donne le GO exact :

`GO C1 RELEASE CANDIDATE - PRODUCTIONISATION PRIVÉE, SANS BASCULE ADMIN NI LIVE`

Le lot utilise deux depots sans rouvrir C1-1 : branche theme `codex/milaura-c1-release-candidate-theme-20260823` depuis `6560d59c`, worktree `/Users/paesano/Documents/MilAura website/_worktrees/c1-release-candidate-theme-20260823` ; branche privee `codex/milaura-c1-release-candidate-private-20260823` depuis `cf2877ba`, worktree `/Users/paesano/Documents/_worktrees/agentic-ops-milaura-c1-release-candidate-20260823`. Les deux branches et worktrees suivent leur origin, sont propres et alignes `0/0`. Le lot est gele en attente d une nouvelle decision master.

La piste theme reserve exactement sept fichiers : `assets/milaura-preference-storage.js`, le nouvel asset `assets/milaura-c1-release-bridge.js`, le nouveau snippet `snippets/milaura-c1-release-bridge.liquid`, `layout/theme.liquid`, `sections/milaura-quiz.liquid`, `config/settings_schema.json` et `config/settings_data.json`. La piste privee ecrit uniquement dans `docs/milaura/shopify-apps/customer-accounts-release-candidate/**` et `docs/milaura/shopify-admin-canonical/c1-release-candidate/**`.

Le theme et l app ont ete prepares pour le meme store `milaura-c1-preview`, ID `107347837273`, mais aucun runtime C1 n est actif au handoff. Le nouveau theme prive est `MilAura C1 Release Candidate 2026-08-23`, ID `205027279193`, role `unpublished`, recontrole isole par le master le 2026-08-23 a 11:08 CEST. Le bootstrap a remonte une ressource video heritee invalide dans `templates/list-collections.json` ; ce fichier est hors scope et reste intact. Tout futur push reste soumis a une nouvelle reservation, limite aux fichiers autorises vers ce seul theme, puis pullback borne. Les themes existants du dev store, le developpement general `199421952347` et le live `190430282075` sont interdits. Le backend production est prepare et teste localement, sans deploiement externe ni secret de production. Mail reste proprietaire de ses dix surfaces compte gelees ; C1 coordonne sans modifier aucun email.

RC6 Mail a rendu un `NO-GO CONDITIONNEL` le 2026-08-23. La confirmation initiale des commandes creees dans Admin ne peut pas etre neutralisee globalement hors Plus. `orderCreate` avec notifications a `false` exige `write_orders` et un jeton hors ligne, interdits ici. Decision master : aucun scope, compte ou commande ajoute ; RC7 et la partie avec commandes de RC8 restent ouverts, tandis que la QA sans donnees continue. Le shell Shopify natif encore en anglais reste un blocker Admin. Aucun micro-lot `write_orders` n est autorise ou reserve avant audit des deux commits RC et nouveau GO explicite Patrice.

Second retour reaudite : theme `2f95b3d1`, prive `c877d630`, correctif fonctionnel prive `77cd15f3`, tous pousses, propres, alignes et bornes. Les trois P1 du premier RC10 sont fermes : emission idempotente, maintenance de retention continue et conteneur non root avec SQLite persistante prouvee en prive. Le master a repasse 33 tests, le build Shopify, le bundle `65019`, l audit dependances, Theme Check et un pullback distant du bridge strictement identique ; le theme `205027279193` reste non publie. RC1 est PASS, RC3 PASS prive. Le RC global reste ouvert avec RC4 et RC5 partiels, RC6 ferme avec NO-GO conditionnel, RC7 ouvert et RC8 partiel. Aucun GO Patrice n est demande. Checkpoint : `docs/checkpoints/2026-08-23-1936-c1-rc-rc10-corrections-reaudit.md`.

Lot 1A reserve le 2026-08-24 a la nouvelle tache C1 `01a03261-3f60-7e43-bf6e-bce01a7eeeb1` : runtime prive authentifie sans commande, depuis `c877d630`, sur la branche `codex/milaura-c1-rc-runtime-no-orders-20260824` et dans la seule zone `docs/milaura/shopify-admin-canonical/c1-release-candidate-runtime-no-orders/**`. Le code RC et le theme `2f95b3d1` restent en lecture seule. Le lot peut utiliser au maximum un compte synthetique existant, controle et sans commande, le theme prive `205027279193`, le backend local, `shopify app dev` et le flag RC temporaire, restaure a `false` a la fin. S il n existe aucun compte eligible, il s arrete avec `ACCOUNT_REQUIRED`. Aucune creation de compte, commande, `write_orders`, mutation Admin, modification Mail, push theme, deploy, release, C1-2, integration ou live. Cadre exact : `docs/checkpoints/2026-08-24-0821-c1-rc-runtime-no-orders-reservation.md`.

Retour du lot 1A : tip pousse `ff6cc0616b9bedee2323a9c5d3a197659170f260`, worktree propre et aligne. RNO0, RNO1, RNO2, RNO5 et RNO6 sont PASS ; RNO3 et RNO4 sont bloques par `OTP_DELIVERY_BLOCKED` avant authentification. Aucun scenario C1 bout en bout n a commence. Le flag du theme prive est de nouveau `false`, SQLite contient zero handoff et zero purge, et aucun runtime, tunnel ou listener ne reste. RC4 ne ferme pas et RC8 ne progresse pas. La seule suite reservee est un diagnostic Mail M0 strictement read-only, sans nouvelle demande OTP, envoi test, changement de regle, adresse de compte, Admin ou Shopify. Cadre : `docs/checkpoints/2026-08-24-0920-c1-otp-delivery-readonly-reservation.md`.

M0 retourne `NO_MAIL_TRACE` : aucun message Shopify ou Customer Accounts n est present dans la boite controlee, le spam, la corbeille ou les categories. Gmail supporte officiellement le suffixe `+`, mais les filtres serveur et une quarantaine Workspace Admin restent hors visibilite. Le master reserve M1 : C1 et Mail calculent separement une empreinte HMAC de leur identite normalisee avec une cle ephemere, sans afficher ni transmettre l adresse. Le master compare seulement les empreintes. Aucun nouvel OTP, envoi test, changement d adresse, Admin, Shopify ou reprise C1. Cadre : `docs/checkpoints/2026-08-24-0926-c1-otp-route-correlation-reservation.md`.

M1 est `CORRELATION_BLOCKED` car la source locale C1 ne contient aucune adresse. Aucun secret ni identite n a ete expose. Le master reserve M2 : la tache C1 lit uniquement l email de la fiche cliente synthetique RNO1 dans une session Admin deja ouverte, calcule l empreinte sans afficher l adresse, puis Mail calcule celle de Gmail. Aucun autre client, commande, mutation, sauvegarde, nouvel OTP, GraphQL, app dev ou live. Si Admin n est pas deja accessible, stop `ADMIN_SESSION_REQUIRED`. Cadre : `docs/checkpoints/2026-08-24-0929-c1-otp-admin-identity-correlation-reservation.md`.

M2 est `CORRELATION_BLOCKED` car Chrome refuse de lire l onglet Admin exact avant extraction. Aucune donnee cliente ou empreinte Admin n a ete retournee. Le master arrete les contournements automatises. Patrice doit seulement comparer visuellement l adresse de cette fiche avec la boite Gmail controlee et repondre `ROUTE MATCH`, `ROUTE MISMATCH` ou `ROUTE CANNOT VERIFY`, sans transmettre l adresse et sans sauvegarder. Aucun nouvel OTP ou changement d adresse n est autorise avant ce verdict. Cadre : `docs/checkpoints/2026-08-24-0936-c1-otp-manual-identity-confirmation.md`.

Patrice a confirme la destination affichee. Elle utilise un alias `+` du domaine MilAura, tandis que M0 a inspecte une boite Gmail distincte : `ROUTE MISMATCH`. L adresse complete n est pas recopiee dans le depot. La seule mission active est M3, preflight Mail read-only sur les notifications, l unicite et le rollback d un changement d email client. Aucun Admin, sauvegarde, nouvel OTP, email ou reprise C1 avant retour M3, reservation et GO exact. Cadre : `docs/checkpoints/2026-08-24-1210-c1-otp-route-mismatch-mail-preflight.md`.

M3 est `CHANGE_BEHAVIOR_UNVERIFIED` : notification vers la nouvelle adresse plausible, ancienne ou deux non exclues, et non desactivable hors Plus si elle part. L email doit etre unique. M4 est pre-reserve : branche privee depuis `ff6cc061`, une fiche synthetique RNO1, cible privee variante `+c1-rc-20260824` de la boite Gmail controlee, verification exacte d unicite, un seul champ et une seule sauvegarde. Aucun OTP et aucun rollback automatique. Aucune execution sans le GO exact de Patrice dans `docs/checkpoints/2026-08-24-1215-c1-otp-address-correction-prereservation.md`.

Patrice a donne un premier GO M4 le 2026-08-24 et accepte une notification Shopify eventuelle, sans demande OTP. Cette execution automatisee n a effectue aucune mutation et sa cible Gmail privee a ensuite ete annulee. Activation historique : `docs/checkpoints/2026-08-24-1344-c1-otp-address-correction-go.md`.

Les deux tentatives M4 automatisees se sont fermees sans mutation au tip prive `78bc9ca350736aab569dad5c21d825ba76cced21`, car le controle de l onglet Admin etait indisponible. L ancienne cible Gmail a ensuite ete annulee et n a jamais ete enregistree.

Patrice a donne un nouveau GO exact, limite au remplacement du seul email du compte test par la boite MilAura existante `contact@milaura.fr`, avec notification Shopify eventuelle acceptee et sans demande OTP. Le master a verifie le bon compte synthetique, ses balises C1, zero commande et zero depense. Patrice a sauvegarde manuellement le champ, puis le master a recharge la fiche : la nouvelle adresse et l evenement de calendrier sont presents, zero commande et zero depense restent confirmes. Verdict `ADDRESS_ROUTE_CORRECTED - OTP NOT REQUESTED`. Prochaine gate : une unique demande OTP observee en direct, sous reservation et GO exact distincts. Cadre : `docs/checkpoints/2026-08-24-1404-c1-otp-contact-address-saved.md`.

M5 est pre-reserve depuis `ff6cc061` sur une nouvelle branche et un nouveau worktree prives, encore absents. Il autorise uniquement la page native Customer Accounts du dev store et une seule demande. Patrice declenche et saisit lui-meme le code ; Codex ne le lit ni ne le conserve. Aucun renvoi, Admin, app dev, backend, theme, Mail ou runtime Mon Ecrin. Meme en cas de livraison, RNO3 et RNO4 restent fermes jusqu a une reservation ulterieure. GO exact et cadre : `docs/checkpoints/2026-08-24-1418-c1-otp-single-test-prereservation.md`.

M5 est maintenant ferme `PASS` au commit prive `90c1d8d`. Une demande, code recu et saisi uniquement par Patrice, connexion native confirmee, aucun renvoi ni valeur OTP conservee. Le master pre-reserve RNO3 et RNO4 sur une nouvelle branche depuis ce commit. Apres nouveau GO, C1 peut executer la QA authentifiee sans commande avec app dev, backend local, tunnel CLI et flag temporaire du theme prive, puis rollback complet. Aucun nouvel OTP ; session expiree egale stop. Cadre et GO exact : `docs/checkpoints/2026-08-24-1425-c1-m5-closed-rno3-rno4-prereservation.md`.

Le premier essai RNO authentifie ferme les checks et le raccordement technique, mais Mon Ecrin reste proprement indisponible car `backend_url` est vide. Aucune requete metier ou donnee synthetique n est partie. Flag restaure `false`, tunnel, app dev et backend arretes, aucun listener. M6 est pre-reserve dans le meme worktree : unique setting `backend_url`, URL HTTPS ephemere communiquee hors Git, saisie et retrait manuels par Patrice, reprise RNO3/RNO4, puis rollback vide confirme avant arret. GO exact et cadre : `docs/checkpoints/2026-08-24-1627-c1-rno-backend-url-prereservation.md`.

M6 a consomme sa premiere sauvegarde, mais le quick tunnel a echoue avant tout trafic : processus vivant, hostname non resolu dans le navigateur et avec `curl`, extension indisponible, aucune donnee metier transmise. Le champ contient une URL morte non canonisee. Un recovery unique est pre-reserve : arreter l ancien tunnel, creer un seul tunnel neuf, prouver DNS et `/health` plus `/ready` publics avant toute sauvegarde, puis seulement remplacer l URL, executer RNO3/RNO4 et remettre le champ vide. Si la prevalidation echoue, vider le champ actuel et arreter. Nouveau GO exact et cadre : `docs/checkpoints/2026-08-24-1657-c1-m6-quick-tunnel-recovery-prereservation.md`.

Le recovery est ferme au commit prive `fac94126` avec `RECOVERY_TUNNEL_PREVALIDATION_FAILED - ROLLBACK PASS`. L unique tentative a quitte avant hostname sur echec DNS Cloudflare. Aucune URL nouvelle, requete metier ou donnee transmise. Patrice a vide l ancienne valeur ; `backend_url` est relu vide, flag `false`, base locale saine et vide, aucun processus restant. RNO3/RNO4 restent ouverts, RC4/RC8 restent partiels. Aucun troisieme essai ni nouvelle reservation runtime. Toute suite exige un choix master separe entre correction DNS locale et endpoint prive stable, puis nouveau GO Patrice. Cloture : `docs/checkpoints/2026-08-24-1825-c1-m6-recovery-closed.md`.

Le master retient la voie endpoint prive stable, sans execution avant Patrice. Apres GO exact, le backend Docker RC sera installe dans un conteneur isole sur le VPS ONORA existant, lie a localhost et expose par nginx sur un sous-domaine HTTPS dedie. Aucun tunnel. Secrets et allowlist restent hors Git. Seuls le dev store `107347837273`, le theme prive `205027279193` et le compte synthetique sans commande sont autorises. Le lot inclut RNO3/RNO4, un OTP natif unique si la session expire, puis `backend_url` vide, flag `false`, purge et arret. Aucun app deploy, release, Admin cliente, Mail, integration ou live. Plan et GO exact : `docs/checkpoints/2026-08-24-1834-c1-stable-private-endpoint-prereservation.md`.

Le correctif d idempotence est maintenant ferme. Theme `7bb67efc`, preuve privee `1ee9c07f`, deux worktrees propres et alignes. Le pullback master du quiz est bit a bit identique, Theme Check reste a zero erreur et `205027279193` est encore non publie. RNO3 passe avec un seul handoff lors du rejeu restaure puis un vrai conflit lors d un nouveau quiz. RNO4 passe a 360, 390, 430 et 1440 px sur les etats sans commande, clavier compris. Purge et rollback passent. RC4 est PASS prive ; RC8 est PASS sans commande mais reste partiel global. RC5, RC6 et RC7 restent ouverts ou conditionnels. Aucun commit n est integre au master. Cloture : `docs/checkpoints/2026-08-25-0824-c1-idempotence-rno-pass.md`.

C1 O1 est ferme a `ab21c0df` avec `O1_PREFLIGHT_BLOCKED_VARIANT_ABSENT - ZERO_ORDER_MUTATION - SCOPES_UNCHANGED - ROLLBACK PASS`. RNO1 est exact et sans commande, mais le dev store ne contient pas le variant Obsidienne du registre RC5. La config locale n a jamais ete appliquee. Aucun app dev, backend, setting, flag, commande, produit, stock, Mail ou notification n a ete touche.

C1 O1-S est pre-reserve, non execute. Nouvelle branche privee depuis `ab21c0d`, nouvelle zone de preuves seulement. Une configuration locale nommee peut ajouter temporairement `write_products`, `write_publications` et `write_orders` sur le seul dev store `107347837273`. Un unique produit et variant QA porte l exact handle Obsidienne du mapping, est publie seulement sur Online Store du dev store protege, puis une commande `test`, `PAID`, `FULFILLED`, inventaire bypass et notifications false couvre `orders-no-diagnostic` et `complete`. Suppression des deux objets sous confirmation destructive, retrait des trois scopes et rollback complet obligatoires. Aucun theme, catalogue MilAura, Mail, deploy/release, integration ou live. Cadre et GO exact : `docs/checkpoints/2026-08-25-0914-c1-o1-seed-orders-qa-reservation.md`.

O1-S s est alors arrete en recovery. Le produit QA unique existait mais n avait jamais ete publie ; aucune commande n existait. Les mutations de publication puis suppression avaient echoue avant mutation parce que `UserError.code` n existe pas en API 2026-10. Patrice avait confirme la suppression. O1-SR a autorise sur la meme branche une seule mutation `productDelete` avec `deletedProductId` et `userErrors { field message }`, puis preuve d absence et rollback integral. Aucun retry publication, commande ou autre objet. Cadre : `docs/checkpoints/2026-08-25-0943-c1-o1s-product-delete-recovery-reservation.md`.

O1-SR est ferme a `99fdaea03889d9dcd9fc6e240f338cb0698b0863`. La suppression unique a reussi, le produit et ses objets associes sont absents, RNO1 reste a zero commande, scopes et runtime sont restaures et le worktree est propre `0/0`. Aucun progres RC7 ou RC8 commandes.

O2 est pre-reserve, non execute. Nouvelle branche privee depuis `99fdaea`, nouvelle zone de preuve. Avant tout scope, C1 doit valider le schema effectif des cinq mutations et figer des selections minimales sans `code`. Apres GO seulement : produit QA Obsidienne, publication Online Store du dev store, une commande `test`, `PAID`, `FULFILLED`, notifications false, QA commandes, confirmation destructive, suppressions et rollback. Aucun theme, Mail, catalogue, stock, deploy/release, integration ou live. Cadre : `docs/checkpoints/2026-08-25-0956-c1-o2-orders-private-qa-reservation.md`.

RC0 a RC10, commandes, comptes synthetiques, theme prive, backend, mapping, francais, rollback et interdictions sont canoniques dans `docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md`. Aucun app deploy ou release, theme publish, C1-2, Admin, bascule de comptes, email, integration ou live.

## Gates canoniques avant une release C1-1

C1-1 prive est ferme avec G0 a G11 PASS. Une future release doit encore :

1. remplacer fixtures et selecteurs QA par les vraies donnees du compte ;
2. lire reellement et de facon bornee commandes, adresses et profil ;
3. choisir la source canonique durable du diagnostic, son schema versionne et le consentement explicite de personnalisation ;
4. definir le handoff signe et idempotent depuis `MilauraPreferenceStorage`, sans secret navigateur ;
5. assurer synchronisation inter-appareils, conflits explicites et mode hors ligne date ;
6. garantir purge locale, panier et serveur avec recu, reprise partielle et prevention de resurrection ;
7. fermer le mapping produit ou variant vers pierre pour historique, retours, annulations, remboursements, egalites, cadeaux et produits sans pierre ;
8. brancher les vraies destinations, retirer les actions simulees et couvrir les erreurs production ;
9. fermer securite, retention, audit, migration, observabilite, parite, tests et rollback ;
10. valider sur comptes de test, coordonner Mail, traiter le francais natif et obtenir un GO Admin avant toute bascule ;
11. obtenir un GO live explicite apres toutes les gates precedentes.

La fin du SEO, Pinterest, Rentree Sodalite, Ruban V3 et Atelier ne bloque pas l implementation privee C1-1. Pour une release, Mail coordonne les emails de compte, l inventaire ou catalogue fiable ferme le mapping et les destinations produit, et un micro-lot theme distinct ferme le vrai bridge et la purge locale. La fidelite reelle ne bloque pas : `A venir` reste honnete. S1B et S1C sont downstream.

## Rentree Sodalite en pause a 70 %

Patrice a mis le lot en pause le 2026-08-22 faute de temps et parce que la section complete ne lui convient pas encore. Reprise demandee le 2026-08-31. Ce `70 %` est un point de travail, pas un GO visuel.

La photographie fixe est retenue et remplace la piste video. La home privee affiche l image en pleine largeur sans voile, texte superpose, video ou bouton pause, puis le contenu commercial dans un bandeau Nacre. Ne pas relancer l animation sans demande explicite.

La branche `codex/milaura-rentree-sodalite-20260821` est propre et alignee a `47cc3e627277f22b115ded88baa7762e7b989967`. Le theme prive `200259043675` sert la version fixe. QA navigateur passee a 360, 390, 430 et 1440 px, sans overflow ni erreur console. Le push cible prive a reussi. Le pullback final reste bloque par l erreur locale Shopify CLI `Maximum call stack size exceeded` ; ne pas supprimer le dossier de preferences suggere par la CLI.

La landing reste hybride avec produits d aout temporaires. La liste Sodalite finale, le stock physique et Shopify, les couts rendus, les marges, les statuts publics, les dates, la vraie collection, le feed, les redirects, l integration, le live et les Ads restent ouverts et separes. Reprise exacte : `docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md`.

## Autres lots

- E1 a E3 sont fermes. E4 a E6 appartiennent a la session Mail. Validation technique, validation creative, GO Admin et GO live restent distincts.
- Rentree Sodalite est en pause a `70 %` au commit `47cc3e62` jusqu au 2026-08-31. Photo fixe retenue, section complete sans GO visuel final, landing hybride et catalogue Sodalite a fermer. Aucun live, redirect, feed ou Ads.
- Pinterest P0 est fige hors theme. Tracking `INCONCLUSIF`, huit avertissements GPC et aucune Ads avant inventaire, feed, consentement, tracking et economie.
- Ruban V3 reste parque jusqu a un inventaire, des couts, marges, disponibilites et un catalogue fiables.
- Atelier reste parque sous son gate physique propre. La reception Sodalite ne ferme pas ce gate.

## Sujets clos

Ne pas rouvrir sans regression ou nouvelle decision explicite : LFG, longueur PDP, formulations validees du quiz, preuve sociale, cookies et Ruban V2.

Ne jamais fusionner `origin/main` aveuglement, pousser un theme complet depuis un ancien worktree, confondre les consentements, annoncer une persistance inter-appareils sans preuve ou lancer Ads avant les gates business et mesure.

## Message de reprise copiable

```text
Reprends C1 Mon Ecrin MilAura au 2026-08-25 depuis /Users/paesano/Documents/MilAura website/dawn-X-milaura. Commence strictement en lecture seule.

Lis integralement AGENTS.md, docs/project-state.md, docs/workstreams.md, docs/codex-handoff.md, docs/checkpoints/2026-08-25-0824-c1-idempotence-rno-pass.md, docs/checkpoints/2026-08-24-1834-c1-stable-private-endpoint-prereservation.md, docs/checkpoints/2026-08-24-1825-c1-m6-recovery-closed.md, docs/checkpoints/2026-08-24-1657-c1-m6-quick-tunnel-recovery-prereservation.md, docs/checkpoints/2026-08-24-1627-c1-rno-backend-url-prereservation.md, docs/checkpoints/2026-08-24-1425-c1-m5-closed-rno3-rno4-prereservation.md, docs/checkpoints/2026-08-24-1418-c1-otp-single-test-prereservation.md, docs/checkpoints/2026-08-24-1404-c1-otp-contact-address-saved.md, docs/checkpoints/2026-08-24-1215-c1-otp-address-correction-prereservation.md, docs/checkpoints/2026-08-24-1210-c1-otp-route-mismatch-mail-preflight.md, docs/checkpoints/2026-08-24-0936-c1-otp-manual-identity-confirmation.md, docs/checkpoints/2026-08-24-0929-c1-otp-admin-identity-correlation-reservation.md, docs/checkpoints/2026-08-24-0926-c1-otp-route-correlation-reservation.md, docs/checkpoints/2026-08-24-0920-c1-otp-delivery-readonly-reservation.md, docs/checkpoints/2026-08-24-0821-c1-rc-runtime-no-orders-reservation.md, docs/checkpoints/2026-08-24-0718-c1-release-candidate-session-handoff.md, docs/checkpoints/2026-08-23-1936-c1-rc-rc10-corrections-reaudit.md, docs/checkpoints/2026-08-23-1548-c1-rc-rc10-audit-no-go.md, docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md et docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md.

Verifie Git, origins, worktrees et proprietaires avant toute ecriture. Base canonique avant la cloture idempotence : codex/milaura-integration propre et aligne a 41b733e196910b3b24008cbacfa42df24cc5c56e. origin/main reste un miroir Shopify incomplet. Live 190430282075, developpement 199421952347. Une seule session master possede l integration et le live.

C1 V3 est fermee au commit prive d8d036ff7725c93168d24b9270da54de657ad6af. G1 a G4 techniques et G5 visuelle sont passes. V3 reste une preuve UX/runtime sur six fixtures et cinq profils, pas un artefact live. Aucun listener app dev ne reste. Ne rouvre pas V3.

C1-1 prive est ferme et gele a cf2877ba4ee5faac143a4273c486fe39c96106a8 sur codex/milaura-c1-1-private-implementation-20260822. G0 a G11 sont passes ; Patrice a valide la preview privee, sans release ni live. Ne rouvre pas C1-1 et ne lance pas C1-2 sans nouveau GO et nouvelle reservation. Le vrai bridge theme, la purge MilauraPreferenceStorage ou panier, Mail, catalogue, backend production, release, deploy, GO Admin, bascule de comptes et live restent fermes. Fidelite reelle non bloquante, bloc A venir conserve. S1B et S1C sont downstream.

C1 Release Candidate est documente dans docs/checkpoints/2026-08-24-0718-c1-release-candidate-session-handoff.md et ferme pour l idempotence dans docs/checkpoints/2026-08-25-0824-c1-idempotence-rno-pass.md. Tips effectifs : theme 7bb67efc, prive RC c877d630, endpoint stable 146ac026 et preuves finales 1ee9c07f. Le seul store est milaura-c1-preview 107347837273 et le theme prive isole est MilAura C1 Release Candidate 2026-08-23, ID 205027279193, toujours non publie. RC4 est PASS prive et RC8 PASS sans commande mais partiel global. RC5 reste partiel, RC6 est ferme avec NO-GO conditionnel et RC7 ouvert, sans ajout de write_orders. Mon Ecrin n est pas live. Aucun backend production actif, app deploy ou release, bascule Customer Accounts, integration theme, publication ou QA live n a eu lieu.

Le blocker OTP est leve : M5 PASS a 90c1d8d. L endpoint stable est prouve a 146ac026. Le correctif theme est ferme a 7bb67efc avec preuve privee 1ee9c07f. RNO3 PASS, RNO4 PASS sans commande et rollback PASS. RC4 est PASS prive ; RC8 est PASS sans commande mais reste partiel global. Backend URL vide, flag false, theme prive non publie, App Dev et conteneur arretes. DNS, nginx, certificat, volume, secrets VPS et conteneur arrete sont conserves. Aucun correctif n est integre au master.

Le prochain lot C1 est O2, pre-reserve mais non execute. GO exact : `GO C1 O2 - RECREATION BORNEE DU PRODUIT TEST OBSIDIENNE, PUBLICATION PRIVEE CORRIGEE, UNE COMMANDE TEST SANS NOTIFICATION, QA DES ETATS COMMANDES ET ROLLBACK, SANS RELEASE NI LIVE`. RC5 reste ouvert. RC6 reste ferme comme audit avec NO-GO conditionnel et shell natif anglais. Aucun compte, produit, commande, scope, Admin production, Mail, deploy, release, integration, C1-2, publication ou live avant ce GO.

Agentic-Ops main est tres dirty sur Stella et d autres travaux concurrents. Ne pas y ecrire ni nettoyer.

Rentree Sodalite est en pause a 70 % jusqu au 2026-08-31. Branche et distant alignes a 47cc3e62, worktree propre, theme prive 200259043675. La photo fixe est retenue mais la section complete n a aucun GO visuel final. Lis docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md avant toute reprise. Pinterest reste hors theme et sans Ads. Ruban V3 reste parque a 3aa0b66d. Atelier reste parque a 2befe429 sur 200007713115.

Commence par rendre un point factuel Git, worktrees, proprietaires, conflits, integrations et gates. Aucune mutation avant ce point.
```

## Fichiers canoniques

- `docs/checkpoints/2026-08-25-0956-c1-o2-orders-private-qa-reservation.md` ;
- `docs/checkpoints/2026-08-25-0943-c1-o1s-product-delete-recovery-reservation.md` ;
- `docs/checkpoints/2026-08-25-0914-c1-o1-seed-orders-qa-reservation.md` ;
- `docs/checkpoints/2026-08-25-0847-c1-orders-private-qa-reservation.md` ;
- `docs/checkpoints/2026-08-25-0824-c1-idempotence-rno-pass.md` ;
- `docs/checkpoints/2026-08-24-1834-c1-stable-private-endpoint-prereservation.md` ;
- `docs/checkpoints/2026-08-24-1825-c1-m6-recovery-closed.md` ;
- `docs/checkpoints/2026-08-24-1657-c1-m6-quick-tunnel-recovery-prereservation.md` ;
- `docs/checkpoints/2026-08-24-1404-c1-otp-contact-address-saved.md` ;
- `docs/checkpoints/2026-08-24-1418-c1-otp-single-test-prereservation.md` ;
- `docs/checkpoints/2026-08-24-1425-c1-m5-closed-rno3-rno4-prereservation.md` ;
- `docs/checkpoints/2026-08-24-1627-c1-rno-backend-url-prereservation.md` ;
- `docs/checkpoints/2026-08-24-1350-c1-m4-admin-session-recovery.md` ;
- `docs/checkpoints/2026-08-24-1344-c1-otp-address-correction-go.md` ;
- `docs/checkpoints/2026-08-24-1215-c1-otp-address-correction-prereservation.md` ;
- `docs/checkpoints/2026-08-24-1210-c1-otp-route-mismatch-mail-preflight.md` ;
- `docs/checkpoints/2026-08-24-0936-c1-otp-manual-identity-confirmation.md` ;
- `docs/checkpoints/2026-08-24-0929-c1-otp-admin-identity-correlation-reservation.md` ;
- `docs/checkpoints/2026-08-24-0926-c1-otp-route-correlation-reservation.md` ;
- `docs/checkpoints/2026-08-24-0920-c1-otp-delivery-readonly-reservation.md` ;
- `docs/checkpoints/2026-08-24-0821-c1-rc-runtime-no-orders-reservation.md` ;
- `docs/checkpoints/2026-08-24-0718-c1-release-candidate-session-handoff.md` ;
- `docs/checkpoints/2026-08-23-1936-c1-rc-rc10-corrections-reaudit.md` ;
- `docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md` ;
- `docs/checkpoints/2026-08-23-1046-c1-1-g11-closed.md` ;
- `docs/checkpoints/2026-08-22-1302-c1-1-private-reservation.md` ;
- `docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md` ;
- `docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md` ;
- `docs/project-state.md` ;
- `docs/codex-handoff.md` ;
- `docs/workstreams.md`.
