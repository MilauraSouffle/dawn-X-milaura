# MilAura - Etat courant du projet

Derniere mise a jour : 2026-08-23 11:00 CEST

## Etat en une phrase

La refonte visible est largement avancee ; C1 V3 et C1-1 restent geles, un Release Candidate prive est reserve sur deux branches depuis `6560d59c` et `cf2877ba` sans bascule Admin ni live, tandis que Rentree Sodalite reste en pause a `70 %` jusqu au 2026-08-31 sans GO visuel final, integration ou live.

## Source de verite et etat du depot

- Seul depot actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche de travail et d'integration : `codex/milaura-integration`.
- `origin/main` reste un miroir automatique incomplet du theme Shopify live. Il omet des assets cookies et le contrat de preference dans des commits documentes ; ne jamais le fusionner aveuglement.
- Le canonique verifie avant le handoff C1-1 du 2026-08-23 est `codex/milaura-integration` a `8721b7cc78cf3eb2a377255cf4e934daea98fb82` ou plus recent, propre et aligne avec origin.
- Les branches de lots fermees peuvent rester distantes comme preuve. Elles ne deviennent pas une source de deploiement et aucun worktree ancien ne pousse le theme.
- Quatre anciennes branches sont conservees sous des tags `archive/2026-08-12/*`, puis ont ete retirees des branches actives.
- Les worktrees theme conserves au 2026-08-22 sont Atelier des emotions a `2befe429` et Ruban V3 a `3aa0b66d`, tous deux parques, ainsi que Rentree Sodalite propre et alignee a `47cc3e62` sur son theme prive, en pause a `70 %`. La preview C1 V3 privee est propre et alignee a `d8d036ff` puis gelee. Le detail et les proprietaires vivent dans `docs/workstreams.md`.
- Registre obligatoire : `docs/workstreams.md`.
- Procedure obligatoire : `docs/reference/2026-08-12-repository-workflow.md`.

Le clone `/Users/paesano/Documents/MilAura website/dawn-X-milaura 2` etait un depot complet obsolete de 3,4 Go, pas un worktree. Il est archive intact ici :

`/Users/paesano/Documents/MilAura website/_archives/2026-08-12-repo-cleanup/obsolete-clones/dawn-X-milaura-2-obsolete`

Les temporaires, sauvegardes et assets rejetes du depot principal sont archives ici :

`/Users/paesano/Documents/MilAura website/_archives/2026-08-12-repo-cleanup/primary-untracked`

Manifest : `docs/reference/2026-08-12-obsolete-repository-archive.md`.

## Regles de conduite actives

- Le checkout principal sert a l'integration, la documentation et aux deploiements.
- Une session parallele utilise une branche et un worktree geres, declares avant edition dans `docs/workstreams.md`.
- Deux sessions ne possedent jamais le meme fichier ou le meme theme Shopify au meme moment.
- Aucun clone manuel, dossier numerote, handoff non committe ou push complet du theme.
- Seul le proprietaire d'integration deploie le live, avec fichiers cibles, `--nodelete`, pullback et comparaison.
- Une validation technique ne vaut jamais validation creative de Patrice.
- Aucun produit, stock, prix ou statut de publication n'est modifie par un chantier theme sans autorisation explicite.

## Cap commercial, direction et arbitrages du 2026-08-16

- Decision explicite de Patrice du 2026-08-20 : MilAura assume pleinement la lithotherapie, les vertus et bienfaits des pierres et le bien-etre emotionnel. `Protection`, `apaisement`, `ancrage`, `energie`, `confiance`, `vertus` et `bienfaits` ne constituent pas, par eux-memes, des anomalies a corriger. La limite est de ne jamais presenter la lithotherapie comme une science ou une medecine, ni comme un diagnostic, un soin, un traitement, une prevention de maladie ou une guerison. Aucun agent ne doit rouvrir ce sujet par exces de prudence sans nouvelle decision explicite de Patrice.
- Objectif directeur : construire un site capable d'atteindre 100 000 EUR de chiffre d'affaires. L'horizon reste a preciser ; les lots sont juges par leur effet sur conversion, panier moyen, retention ou acquisition mesuree.
- La charte MilAura reste executable. Tiffany & Co. et Van Cleef & Arpels sont des references de niveau visuel et de branding : sobriete, photographie joailliere, macro produit, respiration et precision. Aucun signe distinctif, motif, couleur proprietaire ou mise en page ne doit etre copie.
- Le sujet d'un claim LFG global est clos par Patrice apres verification. Il est retire du backlog actif et ne doit plus etre presente comme anomalie ou risque sans nouvelle preuve contradictoire explicite.
- La longueur des PDP n'est pas un probleme confirme. La nouvelle experience est validee ; une session PDP specialisee doit effectuer des recherches approfondies avant toute recommandation de reduction ou reorganisation.
- Les formulations actuelles du diagnostic sur l'apaisement, la protection et l'energie sont approuvees. Aucun lot de reecriture corrective n'est ouvert. Le polish visuel, la page resultat et la persistance client restent ouverts.
- Le diagnostic est actuellement persiste dans le navigateur et le panier, pas dans une source cliente durable. Le chantier `C1 - Le Cercle MilAura` possede la correction entre appareils et sa restitution dans `Mon Ecrin`.
- Le nouveau bandeau cookies gemme est live et valide publiquement depuis le 2026-08-17. L audit des emails, notifications, relances et du comportement apres inscription est ferme le 2026-08-20 ; leur implementation reste classee criticite 10/10.
- La piste retenue pour la home est une section commerciale unique avec choix `Nouveautes`, `Meilleures ventes` et `Promotions`, un seul rail visible et un CTA adapte. Elle reste a prototyper et valider apres `Pierre du moment` ; Promotions se masque sans offre reelle.
- L'inventaire physique mene par Patrice avance en parallele et ne bloque pas le polish du site. Il reste obligatoire avant paid acquisition et avant les destinations qui dependent de produits disponibles.
- L'Atelier des emotions est confie a une session dediee. Little Words Project est la reference fonctionnelle ; Van Cleef & Arpels la reference de niveau visuel ; la charte MilAura reste la source executable.
- Pinterest doit commencer par ses fondations sans attendre la fin : domaine, Shopify, catalogue, tracking, tableaux et branding. Le paid attend stock, flux et mesure verifies.
- Decisions Pinterest de Patrice du 2026-08-20 : le titre et la bio actuels sont valides et restent inchanges. Aucun agent ne doit proposer de les remplacer sans nouvelle demande explicite. La phrase finale `Découvrez les créations et conseils sur milaura.fr.` est approuvee comme ajout optionnel ; si la limite de caracteres Pinterest empeche son ajout, la bio existante ne doit pas etre raccourcie sans validation de Patrice.
- Direction de banniere Pinterest approuvee pour prototypage, sans GO visuel ni live a ce stade : Chloe debout dans un bar naturel, un verre a la main, devant une scene vegetale, portant les quatre references exactes choisies par Patrice : bracelet dore en aigue-marine naturelle, bague lotus reglable en argent 925 et aigue-marine naturelle, boucles d oreilles dorees en aigue-marine naturelle et collier aventurine verte boho dore. Les produits portes restent clairement visibles et des macros editoriales en partie basse reprennent ces memes references. Le cadrage doit rester robuste aux recadrages Pinterest.
- Le tableau `Rituels, bougies & purification` est confirme dans l architecture Pinterest. Il est alimente par les bougies, palo santo, sauge, bols tibetains, pendules et produits associes ; il ne doit plus etre considere comme un tableau sans profondeur commerciale.
- DataForSEO suit deux temps : recherche ciblee si elle doit guider une nouvelle page, puis audit global final lorsque les routes et enrichissements sont stabilises.
- Decision Patrice du 2026-08-22 : la campagne saisonniere Sodalite destinee a remplacer la selection d aout est mise en pause a `70 %` jusqu au 2026-08-31. La photographie fixe est retenue, mais la section complete ne convient pas encore et ne possede aucun GO visuel final. La liste exacte, le stock, les couts, les marges, les statuts publics, la landing et les dates restent a fermer avant toute integration ou mise en ligne.
- Cette reception ne vaut pas gate Atelier. L Atelier reste parque jusqu a reception et validation de ses propres composants, mesures, comptages, prototypes Karine, cout, prix, architecture Shopify et nouveau GO.
- Organisation annoncee par Patrice : sessions distinctes pour la reprise C1, le polish email, la campagne Rentree Sodalite et les fondations Pinterest. Ruban V3 reprend apres l inventaire et la mise en ligne fiable du catalogue. Une seule session master integre et deploie.
- La tache Pinterest `01a01eb8-192c-76c1-9fb7-7599654e5e64` a analyse 83 videos, soit 20 h 10, note la formation `14,5/20` et produit une feuille de route de 29 pages. Les fondations peuvent avancer ; aucune Ads avant inventaire, feed, consentement, tracking et economie verifies.

## Rentree Sodalite en pause a 70 %

La branche `codex/milaura-rentree-sodalite-20260821` et son distant sont alignes au commit `47cc3e627277f22b115ded88baa7762e7b989967`. Le worktree `/Users/paesano/Documents/MilAura website/_worktrees/rentree-sodalite-20260821` est propre. Le theme prive non publie `200259043675` contient la preview ; le live `190430282075`, le developpement `199421952347`, l Admin, les collections, les redirects, le feed et les Ads sont intacts.

La home privee utilise maintenant la photographie fixe Sodalite validee comme media, pleine largeur, sans voile, texte superpose, animation ou bouton pause. Le contenu commercial reste sous l image. La QA reelle a passe `360`, `390`, `430` et `1440` px sans overflow ni erreur console. Le push prive des quatre fichiers de cette version a reussi. Le pullback final reste non ferme a cause du bug local Shopify CLI `Maximum call stack size exceeded` ; ne pas supprimer les preferences Shopify CLI.

Ce statut ne constitue pas une validation creative. Patrice juge la section a `70 %` et demande de la rouvrir le 2026-08-31. La prochaine session conserve la photo fixe, recueille trois corrections visuelles prioritaires, ferme ensuite le catalogue Sodalite et la landing, puis separe les GO visuel, integration, Admin et live. Reference canonique : `docs/checkpoints/2026-08-22-1645-rentree-sodalite-pause-70.md`.

## Consentement cookies live

Le nouveau bandeau cookies MilAura est live depuis le 2026-08-17 sur le theme `190430282075`. Il remplace entierement l ancien skin Shopify et son `MutationObserver`. Les 293 lignes de l ancien CSS cookies ont ete retirees. Une regression de reaffichage apres consentement a ete reproduite le 2026-08-21 ; le live reste intact pendant sa correction.

Le composant utilise la gemme quartz rose detouree validee par Patrice, monte depuis le bas et reste limite a `20svh`. Le premier niveau propose maintenant le lien texte `Continuer sans accepter`, `Je choisis mes cookies` et `J’accepte`. Le refus reste visible, direct, en un clic et conserve une cible tactile de 44 px sur mobile. Le dialogue detaille gere Preferences, Mesure d audience et Marketing, avec les cookies essentiels toujours actifs. Le lien `Gerer mes cookies` du footer permet de rouvrir les choix.

Shopify Customer Privacy reste le moteur de consentement et de persistance. Le bandeau natif Shopify reste le secours si l API ne charge pas. Le push live a ete strictement limite a sept fichiers avec `--nodelete`, `--strict` et `--allow-live`. Le pullback est identique 7/7 a Git. La QA publique a valide le rendu 390 et 1440 px, le choix personnalise, le refus, l acceptation et la reouverture avec restitution exacte des categories.

Commit source `6bbc36bb`, integration canonique `1980512a`. Le polish du refus est integre par `32b37e4e`, deploye sur le live avec un pullback 2/2 identique et documente dans `docs/checkpoints/2026-08-17-1312-cookie-refusal-link-live.md`. Checkpoint initial : `docs/checkpoints/2026-08-17-1238-cookie-consent-gem-live.md`.

Le 2026-08-21, Chrome a confirme le defaut exact : apres `J accepte`, le bandeau disparaissait, mais reapparaissait sur une PDP alors que le panneau `Gerer mes cookies` restituait Preferences, Analytics et Marketing comme acceptes. Le consentement Shopify etait donc persiste ; la regression venait de `assets/milaura-cookie-consent.js`, qui faisait confiance a `shouldShowBanner()` sans verifier les decisions deja enregistrees. Le correctif integre par `aa3a9930` exige maintenant a la fois la demande d affichage Shopify et l absence d une decision explicite `yes` ou `no` dans l une des trois categories. Apres le GO exact `GO LIVE COOKIES.`, le fichier unique a ete pousse avec `--nodelete`, `--strict` et `--allow-live` sur `190430282075`. Le pullback live est identique au canonique par SHA-256 `5ade6196746a4395d4482e293a108d1cd57791ca5cec23f654d4b4f26d27a219`. QA publique Chrome : acceptation, refus, ouverture des preferences, home vers PDP puis retour home, desktop et 390 px sans reaffichage ; le choix accepte a ete restaure. Checkpoint : `docs/checkpoints/2026-08-21-1751-cookie-consent-persistence-live.md`. Les erreurs `Failed to fetch` du privacy banner Shopify et des Web Pixels restent visibles et relevent du suivi tracking separe.

Anomalie de miroir a conserver : le commit automatique Shopify `004ce94f` ne contenait que quatre des sept fichiers deployes. Le commit Shopify suivant `7193ed80` ajoute le CSS cookies au miroir et met a jour le snippet, mais `assets/milaura-cookie-consent.js` et `assets/milaura-cookie-gem.webp` restent absents de `origin/main`. Le live reste prouve par les pullbacks et la QA publique. Ne pas fusionner `origin/main` aveuglement ni utiliser son arbre seul pour reconstruire ce lot.

## Diagnostic et consentement, lot 1 live

Le 2026-08-20, le lot 1 a centralise la persistance navigateur du diagnostic dans `assets/milaura-preference-storage.js`. Le diagnostic n est plus ecrit ni lu sans consentement Shopify `Preferences`. L ancien cookie est seulement migre avec consentement puis expire ; aucune nouvelle copie cookie n est creee. Un refus ou un retrait purge le navigateur et les trois attributs panier. Les mutations panier sont serialisees, bornees et la purge est retentee.

Le resultat courant reste visible pendant la visite sans consentement. La restauration apres rechargement, Mon Ecrin et les recommandations ne consomment que le contrat central. Un etat Shopify temporairement indisponible bloque toute lecture ou nouvelle ecriture sans supprimer les donnees existantes. Une revue contradictoire finale ne remonte aucun P0 ou P1.

Commit fonctionnel `43e93d10`, documentation `7a68ca5d`, integration canonique `e96ed097`, correctif Mon Ecrin `0697785d`. Les sept fichiers sont live sur `190430282075`, avec pullback initial 7/7 identique. La QA publique valide refus, acceptation, restauration, retrait sur la page diagnostic et restitution dans Mon Ecrin authentifie.

Le controle authentifie a detecte puis fait corriger une selection personnalisee qui restait visible dans Mon Ecrin apres retrait. Le correctif live a ete limite a deux fichiers, pullback 2/2 identique. Le profil, le diagnostic et la selection disparaissent maintenant immediatement au retrait et ne reviennent pas au rechargement. La session de test a ete laissee en refus et son diagnostic purge.

Anomalie de miroir : `1dccd18c` contient les six fichiers existants du push initial mais omet `assets/milaura-preference-storage.js`. `763d7ad9` reprend exactement les deux fichiers du correctif. Ne pas fusionner `origin/main` aveuglement ; le canonique et les pullbacks live restent les preuves. References : `docs/checkpoints/2026-08-20-0749-diagnostic-consent-dev.md` et `docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md`.

## E1-E3 fermes, C1 V3 gelee et C1-1 prive ferme

L audit read-only du 2026-08-20 confirme que les comptes clients classiques a mot de passe sont actifs et marques deprecies par Shopify. La creation de compte ne collecte pas de consentement marketing. Les consentements compte, personnalisation, email, SMS et cookies restent des contrats distincts. E1, E2 et E3 sont fermes depuis le 2026-08-20. E4 a E6 restent coordonnes par la session Mail, sans chevauchement C1.

La vraie page compte actuelle contient deja le diagnostic local, le profil, la pierre, le rituel, les recommandations, les commandes, les adresses et les produits recemment consultes. `MilauraPreferenceStorage` reste une retention navigateur et panier sous consentement Preferences. Le Flow `Order created` et `milaura.last_profile_handle` ne fournissent ni diagnostic complet, ni lecture canonique par Mon Ecrin, ni purge serveur, ni parite inter-appareils.

C1-0 reste une preuve technique rejetee visuellement a `185c07b`. Le concept statique `Le fil de vos pierres` a ete valide a `ac57ecf6`, puis sa premiere traduction Shopify privee a `07aea416` a ete refusee visuellement. La V2 statique media-first a ete poussee a `02ac01ab`, son delta produit phare V2.1 a `cecb7769`, et Patrice a valide ce delta le 2026-08-22.

La traduction finale C1 V3 vit sur la branche privee `codex/milaura-c1-v3-shopify-private-preview-20260822`, commit `d8d036ff7725c93168d24b9270da54de657ad6af`, base `cecb7769644695dbab2329e3ae55d1e5f5ec805f`. Elle utilise uniquement des fixtures fictives sur la boutique de developpement `milaura-c1-preview`, store ID `107347837273`. Les cinq profils disposent de photographies produit exactes, les six etats ont ete controles a 360, 390, 430 et 1440 px, et les gates G1 a G4 sont passees. Aucun scope, acces API, reseau, stockage, persistance ou donnee cliente reelle n est present.

Patrice a donne le 2026-08-22 le GO exact `GO VISUEL C1 V3 - PREVIEW SHOPIFY PRIVÉE VALIDÉE`. G5 est donc ferme pour cette preview seulement. La session C1 ferme proprement : worktree V3 et distant alignes a `d8d036ff`, aucun listener app dev sur `64112` ou `3457`, aucun deploy, release, Admin, theme ou live. V3 reste une preuve UX et runtime sur fixtures, pas un artefact de production. Le lot est gele en lecture seule.

Patrice a ensuite donne le 2026-08-22 le GO exact `GO C1-1 - ARCHITECTURE ET IMPLÉMENTATION PRIVÉE DES VRAIES DONNÉES, SANS BASCULE LIVE`. Le lot distinct a ete execute depuis `d8d036ff` sur la branche privee `codex/milaura-c1-1-private-implementation-20260822`, dans le seul dev store `milaura-c1-preview` ID `107347837273` et uniquement avec six comptes et donnees synthetiques allowlistes. Son HEAD pousse, propre et aligne est `cf2877ba4ee5faac143a4273c486fe39c96106a8`.

G0 a G10 sont passes. Le chemin runtime utilise les vraies surfaces Customer Accounts sur donnees synthetiques : lectures bornees du profil, des adresses et des commandes, cinq metafields app-owned, consentement distinct, comparaison de revision, deux candidats de conflit durables, handoff signe, synchronisation, mapping commande-vers-pierre, destinations publiques et purge serveur reprenable. G10 a supprime les trois commandes et les six clientes synthetiques autorisees, vide `backend_url`, arrete `shopify app dev` et le backend, et laisse le worktree propre. Trois confirmations automatiques Shopify ont atteint les boites synthetiques avant correction du parcours ; aucun template ou reglage Mail n a ete modifie.

Le master a refuse le premier retour G11 car le diagnostic entrant restait seulement en memoire Preact et parce qu une purge coupee entre delete et recu n etait pas reprenable. Le correctif `7cf0dfda` a rendu les deux diagnostics persistants et introduit la machine `prepare/finalize`. Le second audit a detecte une fenetre `prepare -> nouveau consentement ou handoff -> finalize` ; `cf2877ba` avance maintenant le cutoff de purge a l instant de finalisation, re-nettoie les enveloppes consommees et conserve un recu strictement idempotent. Contre-verification master : 28 tests sur 28, build Shopify PASS, bundle `65416/65536`, `npm audit --omit=dev` a zero vulnerabilite, diff et scan de secrets propres, aucun listener ou tunnel.

La partie technique de G11 est PASS. Patrice a ensuite donne le 2026-08-23 le GO exact `GO VISUEL ET FONCTIONNEL C1-1 - PREVIEW PRIVÉE VALIDÉE, SANS RELEASE NI LIVE`. G11 est donc ferme sur `cf2877ba`, strictement pour cette preview privee. Le lot est gele en lecture seule. Aucun droit release, deploy, C1-2, Admin, bascule de comptes, theme, email ou live n est deduit. Sans fichier theme dans ce lot, le vrai bridge et la purge de `MilauraPreferenceStorage` ou du panier restent un gate de release distinct.

Patrice a ensuite donne le GO exact `GO C1 RELEASE CANDIDATE - PRODUCTIONISATION PRIVÉE, SANS BASCULE ADMIN NI LIVE`. Le master a reserve un lot a deux pistes : une branche theme depuis le canonique `6560d59c` et une branche app ou backend depuis C1-1 `cf2877ba`, avec deux worktrees nouveaux et des zones exclusives sans chevauchement. Les branches et worktrees etaient absents localement et sur origin au cadrage.

Le Release Candidate doit prouver le bridge et la purge sur un meme store. Il utilise donc seulement `milaura-c1-preview` ID `107347837273` et le theme non publie `MilAura C1 Release Candidate 2026-08-23`, ID `205027279193`, cree et recontrole isole le 2026-08-23. Le bootstrap complet a remonte une erreur heritee de ressource video invalide dans `templates/list-collections.json` ; ce fichier reste hors reservation et ne sera pas corrige par C1 RC. Les pushes suivants sont limites aux sept fichiers reserves puis suivis d un pullback borne. Le live du dev store `204897517913`, ses themes existants `204897485145` et `204897550681`, le developpement general `199421952347` et le live MilAura `190430282075` sont interdits. Le backend est prepare en code, migrations, secrets, retention, observabilite et rollback, sans deploiement externe tant qu aucune cible stable n est approuvee.

Le preflight RC6 Mail est signe avec resultat `NO-GO CONDITIONNEL`. Hors Plus, la confirmation initiale d une commande creee dans Admin ne peut pas etre desactivee globalement. La mutation Admin GraphQL `orderCreate` permet `test: true`, `sendReceipt: false` et `sendFulfillmentReceipt: false`, mais exige `write_orders` et un jeton hors ligne ; ces acces sont interdits au lot courant. Le master refuse donc tout elargissement implicite : aucun compte ou commande, aucun scope ajoute. RC7 et les cas avec commandes de RC8 restent ouverts ; les preuves sans donnees continuent. Le shell natif encore en anglais reste un blocker Admin distinct. Un micro-lot `write_orders` ne peut etre envisage qu apres retour et audit des deux commits RC, puis nouveau GO explicite et reservation separee.

Mail reste proprietaire de ses dix surfaces compte gelees. Son HEAD `add705ff` est propre et aligne ; six Notifications et trois Messaging sont canoniquement live, sans nouvelle verification Admin le 2026-08-23. C1 RC coordonne et documente seulement. Aucun email, template, automation ou reglage ne peut etre modifie. Le cadre complet et les gates RC0 a RC10 vivent dans `docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md`.

### Gates obligatoires avant une release C1-1

L implementation privee a ferme G0 a G11. Toute future release doit encore fermer les gates suivants :

1. remplacer les six fixtures et les selecteurs QA par les vraies donnees du compte ;
2. lire de facon reelle et bornee commandes, adresses et profil via la surface Customer Accounts retenue ;
3. choisir une source canonique durable du diagnostic, un schema versionne et un consentement explicite de personnalisation ;
4. definir un handoff signe et idempotent depuis `MilauraPreferenceStorage` vers le compte, sans secret navigateur ;
5. assurer la synchronisation inter-appareils, la resolution explicite des conflits et un mode hors ligne date ;
6. garantir la purge locale, panier et serveur avec recu, reprise partielle et prevention de resurrection ;
7. fermer le registre produit ou variant vers pierre pour historique, retours, annulations, remboursements, egalites, cadeaux et produits sans pierre ;
8. brancher les vrais liens produit et collection, retirer toutes les actions simulees et traiter les etats d erreur production ;
9. fermer securite, retention, audit, migration, observabilite, tests de parite et rollback ;
10. valider sur comptes de test, coordonner les emails de compte avec Mail, traiter le francais du shell natif et obtenir un GO Admin distinct avant toute bascule ;
11. obtenir un GO live explicite seulement apres toutes les gates precedentes.

La fin du SEO, Pinterest, Rentree Sodalite, Ruban V3 et Atelier ne bloque pas l implementation privee C1-1. Pour une release, Mail doit coordonner les emails de compte avant un switch ; l inventaire et le catalogue fiables doivent fermer le mapping commande-vers-pierre et les destinations produit ; un micro-lot theme distinct doit prouver le bridge et la purge locale reels. La fidelite reelle n est pas un prerequis : le bloc `A venir` reste honnete. S1B et S1C sont downstream et ne bloquent pas C1-1.

References : `docs/checkpoints/2026-08-21-0846-c1-0-rejet-handoff.md`, `docs/milaura/shopify-admin-canonical/c1-v3-shopify-private-preview/2026-08-22-c1-v3-evidence.md` sur la branche privee, `docs/workstreams.md`, `docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md`, `docs/checkpoints/2026-08-22-1302-c1-1-private-reservation.md`, `docs/checkpoints/2026-08-23-1046-c1-1-g11-closed.md` et `docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md`.

## Catalogue V1 public

Activation validee le 2026-08-12 dans `cb0da71b` et documentee dans `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`.

Pages publiques :

- `/pages/choisir-sa-pierre`
- `/pages/bijoux-par-pierre`
- `/pages/pierres-de-naissance`, avec des produits integres par mois et 4 produits de selection editoriale complementaire
- `/pages/cadeaux-anniversaire-de-mariage`, avec des produits integres par annee et 3 produits de selection editoriale complementaire

Collections publiques :

- `/collections/bagues-pierres`, 6 produits
- `/collections/par-pierre-amethyste`, 11 produits au dernier controle documente
- `/collections/par-pierre-aigue-marine`, 6 produits
- `/collections/par-pierre-agate`, 10 produits
- `/collections/par-pierre-quartz-rose`, 8 produits
- `/collections/par-pierre-lapis-lazuli`, 6 produits
- `/collections/par-pierre-amazonite`, 6 produits
- `/collections/par-pierre-oeil-de-tigre`, 4 bijoux actifs, publiee le 2026-08-15 a 10:31:48 CEST
- `/collections/par-pierre-aventurine`, 7 bijoux actifs, publiee le 2026-08-15 a 10:31:49 CEST

Les deux dernieres collections ont ete controlees en HTTP 200, avec canonique propre et presence dans le sitemap. Leur publication n'a entraine aucune mutation produit. La collection Œil de tigre reste sous le seuil editorial prefere de cinq bijoux et devra etre recontrolee apres stabilisation de l'inventaire.

## Homepage et design

- Le Hero de marque V2 est live depuis le 2026-08-14 19:22 CEST apres GO visuel et GO live explicites de Patrice.
- Il presente maintenant MilAura avec une seule scene minerale fixe. Les deux scenes secondaires, le faux slider et les trois parcours numerotes ont ete retires du DOM ; aucun CTA n'est ajoute tant que le futur lien discret vers la section suivante n'est pas decide avec la navigation finale.
- La signature `MilAura`, un point or de 5 px et le slogan valide `Bijoux & émotions` tiennent sur une seule ligne de 360 a 1440 px. La navbar conserve le logo colore et utilise au scroll une surface nacree transparente a 16 %, un flou de 12 px et un filet fin, sans retour au fond aigue-marine plein.
- Le texte descriptif est aligne avec le H1. Le label LFG compact a ete retire du Hero et les trois anciennes bulles LFG, Karine et Metz ont ete supprimees du pont avec la section suivante.
- Le bandeau superieur est devenu une vitrine editoriale a une preuve active : certificats LFG sur les pieces concernees, selection attentive par Karine et preparation des commandes dans l'atelier de Metz. La phrase validee est `Tous nos minéraux et bijoux sont soigneusement sélectionnés par Karine.`
- Le bandeau utilise maintenant la surface `Quartz rose poudre` `#F0D9E0`, avec texte prune, reperes amethyste et filets or. Il mesure 58 px sur desktop et 54 px sur mobile sans reduction des medaillons, conserves a 52 px et 46 px. Il change de preuve par bouton, balayage ou rotation toutes les six secondes, avec pause au survol, au focus, hors viewport et quand la page est masquee. La rotation automatique est desactivee avec `prefers-reduced-motion`.
- Le deploiement du bandeau-vitrine a ete limite a deux sections et deux vignettes WebP le 2026-08-14 a 20:06 CEST. Pullback live 4/4 identique bit a bit et controles publics 1440/430/390/360 valides. Commit de lot `fa33829c`, merge d'integration `254edefd`. Checkpoint : `docs/checkpoints/2026-08-14-1715-homepage-hero-v2-dev.md`.
- La variante quartz rose amincie a ete livree live le 2026-08-14 a 20:36 CEST avec un push strict limite a `assets/milaura-tokens.css` et `sections/milaura-announcement.liquid`. Commits `f5d561e1`, `55ca81b0`, merge `82873b97`, pullback live 2/2 identique et controles publics 1440/430/390/360 valides.
- Le polish du 2026-08-15 est live : le bandeau quartz rose se masque pendant l'ouverture du panier puis revient a sa fermeture, sans modification de `assets/cart-drawer.js`. Sur mobile, la scene minerale principale remonte de 70 px afin de rendre visibles toutes les pierres des l'arrivee. Le H1 public est `La beauté des bijoux rencontre les vertus des minéraux` et le descriptif est force sur deux lignes : `Des pierres naturelles choisies avec exigence pour leur beauté,` puis `leur qualité et leur symbolique en lithothérapie.`
- Patrice a valide le retour a l'ADN de marque d'origine avec le slogan `Bijoux & émotions`. La variante `Bijoux émotionnels` a ete ecartee car moins claire et plus restrictive.
- Livraison du polish : commit `14b2ee7b`, merge d'integration `4d0b3c39`, pushes cibles sur les themes de developpement `199421952347` et live `190430282075`, pullbacks 2/2 identiques bit a bit. Controles publics 390 px et 1440 px : HTTP 200, aucune largeur excedentaire, texte conforme, pierres visibles et masquage/restauration du bandeau avec le panier valides.
- Livraison du polish final : commit `46d793d3`, merge d'integration `6d986c20`, push Git puis pushes Shopify strictement limites a `sections/milaura-hero-portal.liquid` sur les themes de developpement et live. Pullbacks 1/1 identiques bit a bit, controles 1440/390/360 sans debordement, une seule image et aucun parcours, HTTP public 200.
- Le dernier polish du titre Hero homepage est live depuis le 2026-08-16 a 11:06 CEST. Le texte, la photo, la navbar, le bandeau, le descriptif et le mobile sont inchanges. La regle desktop limitee a `min-width: 1101px` allege le H1 sur trois lignes et rend la priorite a la photographie. Lot `d7168bbe`, integration `9c5897b7`, push cible d'un seul fichier sur `190430282075`, pullback 1/1 identique. QA publique 1280/1440/2048 et 360/390/430 sans overflow. Checkpoint : `docs/checkpoints/2026-08-16-1106-home-hero-title-live.md`.
- Micro-patch navbar live : commit `24aaa5db`, merge `8b781461`, push live direct limite a `sections/milaura-hero-portal.liquid` sans theme de developpement ni Playwright a la demande de Patrice ; pullback live 1/1 identique.
- La synchronisation finale Navigation V2 a repris le Hero par `c3083a53`, le micro-patch canonique `8b781461` par `a11dafed`, puis sa documentation par `5100e945`. Sur sa branche, le Hero ne conserve que trois lignes d'integration navbar en plus du canonique. Son theme prive `199957807451` a ete controle par pullback 1/1, sans nouveau push live.
- Navigation V2 est live depuis le 2026-08-15 a 10:39 CEST. Le menu principal organise les acces autour de `Nouveautés`, `Bijoux`, `Pierres`, `Rituels & bien-être`, `Cadeaux` et `Guides`. Les bougies restent une sous-categorie de `Rituels & bien-être`, pas une entree principale. `Pierre de naissance` reste dans `Cadeaux`, sans doublon dans `Pierres`.
- Le menu `Pierres` donne acces a tous les bijoux par pierre, au guide `Pierres de A à Z`, a `Histoire et symbolique`, au choix selon l'émotion du moment et a six pierres mises en avant : Améthyste, Quartz rose, Œil de tigre, Lapis-lazuli, Aigue-marine et Aventurine. Les routes Œil de tigre et Aventurine sont publiques et canoniques.
- Le deploiement Navigation V2 a ete limite a 23 fichiers sur le theme live `190430282075`. Merge d'integration `ddb0ca90`, pullback 23/23 identique, Theme Check sans erreur, controle desktop 1440 px et mobile 390 px sans debordement ni erreur JavaScript. Checkpoint : `docs/checkpoints/2026-08-15-1039-navigation-home-v2-live.md`.
- La section 3 de la homepage est live depuis le 2026-08-15 a 10:54 CEST. Ses trois parcours `Choisir par bijou`, `Choisir par pierre` et `Me laisser guider` utilisent des cadres ouverts Or mat, sans reprise du fond bleu-vert du Hero. Les panneaux et photographies ont ete compactes, le focus clavier est Or mat et les destinations fonctionnelles restent les bijoux, le hub Pierres et le diagnostic de Karine.
- Le polish de la section 3 correspond aux commits de lot `979e0223` et `486d6cae`, integres par `5bc962ac` et `2a77605f`. Pullbacks 2/2 puis 1/1 identiques, controles 1440/390/360, navigation clavier, un seul H1 et aucune erreur JavaScript. Checkpoint : `docs/checkpoints/2026-08-15-1054-home-paths-open-gold-live.md`.
- La selection de Karine a ete refondue puis polie et livree live le 2026-08-13 : titre reutilisable, marqueurs saisonniers en Dancing Script, photographies non masquees, cartes transparentes, cadre aigue-marine fin, informations compactes, quantite soulignee et ajout panier souligne d'or.
- Le petit separateur court et epais refuse a ete retire. Le filet historique aigue-marine de 1 px et pleine largeur est restaure.
- Patrice a valide cette deuxieme proposition comme nouvelle direction du site : simple, sobre, efficace et premium, sans gros boutons ni panneaux blancs ajoutes. Reference canonique : `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`.
- La page `/collections/selection-aout-2026` utilise le decor lagon derriere la navigation, un Hero compact, un seul H1 et une grille de 20 produits en deux colonnes sur mobile.
- Le pullback live des neuf fichiers saisonniers est identique bit a bit a Git. Les controles publics desktop et mobile ne montrent aucun debordement.
- Selection d'aout, guide de decouverte, `Choisir sa pierre`, dock mobile et panier 30/50/80 sont live.
- Le bandeau d'engagement est maintenant la vitrine publicitaire editoriale validee : une photographie et une preuve a la fois, surface quartz rose poudre, filet or fin et aucun panneau dense sur mobile.
- La priorite chromatique par pierre est live : Amethyste, Aigue-marine, Agate, Quartz rose, Lapis-lazuli et Amazonite ont chacune leur scene et leur palette.

## Heroes editoriaux GPT Image 2 live

Le 2026-08-13, une nouvelle direction media-first a ete appliquee a dix destinations :

- hubs `/pages/pierres-de-naissance`, `/pages/cadeaux-anniversaire-de-mariage` et `/pages/bijoux-par-pierre` ;
- collections `/collections/bagues-pierres`, `/collections/par-pierre-amethyste`, `/collections/par-pierre-aigue-marine`, `/collections/par-pierre-agate`, `/collections/par-pierre-quartz-rose`, `/collections/par-pierre-lapis-lazuli` et `/collections/par-pierre-amazonite`.

Chaque page utilise une composition desktop et une recomposition mobile dediee, soit vingt WebP pour 2 747 684 octets. Les scenes sont construites autour de vrais produits MilAura, avec une zone de respiration pour le texte HTML. Les collages CSS, filets decoratifs et flous de fond ont ete retires du Hero. Les collections non mappees conservent leur ancien Hero en repli.

Patrice a donne son GO live explicite le 2026-08-13. Le deploiement sur le theme live `190430282075` a ete limite aux 23 fichiers du lot, depuis le snapshot Git immuable `017ee2e3`, afin de ne pas embarquer le travail UI concurrent. Pullback live : 23/23 identiques bit a bit.

Validation publique : les dix routes repondent en HTTP 200, rendent exactement un H1, aucun `noindex` et les deux assets Hero attendus. Le controle Playwright desktop et mobile confirme le chargement et le cadrage du nouveau Hero Naissance. Les deux erreurs console observees viennent du cadre Shop App bloque par sa propre politique CSP et ne concernent pas le Hero.

La regle est canonisee dans `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`. Le contrat de reprise complet, la cartographie technique et le prompt GPT Image 2 vivent dans `docs/prompts/2026-08-14-hero-destination-da-reprise.md`. Checkpoints : `docs/checkpoints/2026-08-13-2058-editorial-heroes-gpt-image-2.md` et `docs/checkpoints/2026-08-14-0947-editorial-hero-da-session-handoff.md`.

## Hubs editoriaux Mariage, Naissance et Bijoux par pierre

Patrice a valide visuellement puis autorise le live le 2026-08-13. Les trois pages publiques utilisent maintenant un composant reutilisable de joaillerie editoriale, construit exclusivement avec les tokens MilAura :

- `/pages/cadeaux-anniversaire-de-mariage` : univers nacre chaud, guide interactif de 7 anniversaires, produits contextuels integres par annee et 3 produits de selection editoriale complementaire ;
- `/pages/pierres-de-naissance` : univers amethyste, 12 mois accessibles, produits contextuels integres par mois et 4 produits de selection editoriale complementaire ;
- `/pages/bijoux-par-pierre` : univers aigue-marine, 5 collections publiques illustrees et grille chromatique compacte.

Le Hero est media-first avec de vraies photos produit. Les reperes mois et annees n'affichent qu'un panneau a la fois, restent accessibles sans JavaScript et fonctionnent au clavier. Sur mobile, engagements, reperes et destinations deviennent des rails tactiles, et les produits restent sur deux colonnes.

Un second deploiement cible de 4 fichiers a ajoute les grilles contextuelles. Sur Mariage, les panneaux rendent respectivement 5, 8, 1, 1, 3, 11 et 0 produits ; sur Naissance, Fevrier rend 11 produits et Mars 6. Les cross-sells de 3 et 4 produits sont conserves sur decision de Patrice. Pullback final 4/4 identique bit a bit, canoniques, H1, absence de `noindex`, interactions et absence de debordement verifies sur le live.

Audit des autres pages nouvelles : Mariage et Naissance etaient les seules pages avec le defaut de simple redirection. `Bijoux par pierre` est intentionnellement un repertoire de collections ; il lui manque toutefois la destination Amethyste, publique avec 11 produits. Les collections de pierre rendent deja leurs produits et ne sont pas concernees.

Checkpoints : `docs/checkpoints/2026-08-13-1713-editorial-hubs-live.md` et `docs/checkpoints/2026-08-13-1752-hub-inline-products-live.md`.

## Collections

- La capsule de titre aigue-marine est live sur toutes les pages utilisant `milaura-collection-hero` depuis le 2026-08-12 19:37 CEST.
- Fond `#DDF8F4` vers `#BFEAE3`, texte prune `#4A3147`, point dore conserve et compteur francais `modele(s)`.
- Le jambage du `g` n'est plus coupe par le masque du typewriter.
- Push live limite a `sections/milaura-collection-hero.liquid`, puis pullback identique bit a bit.
- Controles publics : `/collections/bagues-pierres` sur desktop et `/collections/par-pierre-aigue-marine` sur mobile, un H1 et aucun debordement horizontal.
- Checkpoint : `docs/checkpoints/2026-08-12-1927-collection-pill-aqua.md`.

## Livraison et verite Shopify versionnee

Le commit `9220031e` versionne 31 fichiers auparavant locaux. L'audit du 2026-08-12 a etabli :

- 27 fichiers theme etaient identiques bit a bit au theme live
- la politique publique confirme expedition sous 24 h du lundi au vendredi, livraison France sous 3 a 5 jours et point relais offert des 30 EUR
- `templates/cart.milaura.json` correspond a la normalisation Shopify live
- aucun produit, stock, prix ou statut n'a ete modifie

Quatre fichiers signales comme chevauches ont ete classes ainsi :

| Fichier | Nature exacte | Etat Shopify |
| --- | --- | --- |
| `sections/milaura-product-hero.liquid` | pills pierre, symbolique, qualite et provenance, plus seuil point relais 30 EUR, sur le socle PDP-P0 | live, pullback bit a bit valide |
| `templates/index.json` | deux libelles livraison remplaces par point relais offert des 30 EUR | live depuis le 2026-08-12 18:29 CEST, pullback bit a bit valide |
| `templates/page.lp-promo-bougies.json` | CTA vers le vrai produit, seuil 30 EUR, FAQ 24 h et 3 a 5 jours | identique bit a bit au live |
| `templates/product.milaura-produit.json` | seuil 30 EUR, normalisation de cinq settings invalides, texte logistique, plus socle PDP-P0 | live, pullback bit a bit valide |

## PDP et ScratchToReveal

Le lot PDP-P0 a recu le GO visuel explicite de Patrice le 2026-08-12 et a ete livre sur le theme live `190430282075` :

- Scratch invisible et non initialise sur la PDP
- quantite, ajout panier, drawer et cadeau automatique fonctionnels
- faux claims et preuves sociales non prouvees retires ou conditionnes
- Product JSON-LD corrige
- quatre blocs JSON-LD parses sans erreur
- un H1 et achat direct verifies sur une bague, un bracelet et une bougie

La correction visuelle complementaire est integree dans `codex/milaura-integration` et live :

- pills mobiles sur une seule ligne animee en boucle, avec repli horizontal sans animation
- une pill par information utile, sans `Premium` et sans formule `selon les usages traditionnels de la lithotherapie`
- faits bougie explicites, grade unique, provenance quand elle existe et vertus separees
- bulle sociale historique restauree sur decision explicite de Patrice : cinq etoiles dorees, message lisible en Lato, accent rose `b♥nheur` avec coeur a la place du premier `o`, aucun diamant et aucune Dancing Script
- message restaure : `Ce produit a deja fait le bonheur de + de X client(e)s en mois annee`
- nombre stable par produit entre 12 et 141, calcule depuis `product.id`, sans connexion aux commandes Shopify ; Patrice le rattache au volume multi-canal site, atelier et evenements
- selecteur de quantite neutre et CTA prune, sans dore historique
- espace Scratch supprime et colonne achat desktop remplie par la description et la preuve Karine

Deploiement cible des six fichiers autorises :

- `sections/milaura-product-hero.liquid`
- `sections/milaura-product-reassurance.liquid`
- `sections/milaura-product-trust-block.liquid`
- `snippets/milaura-product-purchase-fallback.liquid`
- `templates/page.lp-promo-bougies.json`
- `templates/product.milaura-produit.json`

Le pullback live des six fichiers est identique bit a bit a Git. Les controles publics mobile couvrent une bague, un bracelet et une bougie : un H1, aucun debordement, aucun diamant, cinq etoiles et compteurs stables 37, 113 et 49. Le selecteur a ete teste de 1 a 2 puis restaure a 1 ; un ajout panier a ouvert le drawer et l'article de test a ensuite ete retire.

Checkpoints : `docs/checkpoints/2026-08-12-1931-pdp-visual-correction.md` et `docs/checkpoints/2026-08-13-0810-pdp-bonheur-heart.md`.

### Experience PDP 2026 live

Patrice a donne son GO visuel puis son GO live explicites le 2026-08-15. Les deux templates produit actifs partagent maintenant ce parcours :

1. Hero produit et sticky bar existants ;
2. bande fine de services et moyens de paiement reels ;
3. guide produit en trois portes, adapte aux bijoux, mineraux, bougies et rituels ;
4. Ruban Vivant existant ;
5. service conseiller avec telephone, e-mail et page contact.

Le lot est porte par `assets/milaura-product-experience.css`, `assets/milaura-product-experience.js`, `sections/milaura-product-experience.liquid`, `sections/milaura-product-advisor.liquid`, `templates/product.json` et `templates/product.milaura-produit.json`. Commits fonctionnels `9762d1b8` et `ceaeb1e7`, integres en fast-forward sur `codex/milaura-integration`.

Le deploiement live sur `190430282075` a ete strictement limite a ces six fichiers, avec `--nodelete`. Le pullback live est identique 6/6 a Git. Le HTML public sans cookie repond en HTTP 200 et confirme `#ProductTabs`, la nouvelle experience, le Ruban et le conseiller dans le bon ordre. Les trois portes fonctionnent au clic et au clavier, le rail de preuves mobile defile independamment et la page reste a `scrollX = 0` pendant ces interactions.

Douze anciens fichiers de sections PDP restent physiquement dans le depot mais ne sont plus references par les templates actifs. Leur suppression reste un lot destructif distinct a autoriser apres verification de toutes les references.

Point P0 declare par Patrice apres la livraison : le Ruban Vivant fonctionne mal sur mobile et ses images paraissent pales, floues ou fortement degradees. Ce probleme appartient au moteur de recommandations partage, pas au nouveau composant PDP. Il doit etre audite sur 360, 390 et 430 px avant toute autre evolution visuelle. Checkpoint : `docs/checkpoints/2026-08-15-1334-pdp-experience-live-handoff.md`.

Le polish Sticky PDP est live depuis le 2026-08-16 a 09:32 CEST. La sticky utilise maintenant la position reelle du CTA Hero comme seuil bidirectionnel, recouvre le dock mobile de 1 px et le rail de reassurance affiche un indicateur de progression sans autoplay. Commit integre `396502cf`, push live limite a cinq fichiers, pullback 5/5 identique et QA publique 360/390/430/1440 validee sans erreur console. Checkpoint : `docs/checkpoints/2026-08-16-0932-sticky-proof-live.md`.

Le Ruban de parure V2 est live depuis le 2026-08-16 a 10:46 CEST apres GO visuel, GO live et autorisation explicite de nettoyer l'ancienne configuration remplacee. Le lot final `222ef44f` est integre par `469212c0`. La matrice Search & Discovery preuve relie le collier obsidienne noire boho dore `10557516644699` aux boucles obsidienne noire `10357431206235` et au bracelet obsidienne flocon `10357456601435`. La definition Shopify `milaura.recommendation_cutout` existe avec acces Storefront. L'API reelle renvoie les deux complements, l'ajout du variant `52484191879515` dans un navigateur neuf a ete retire par sa seule cle de ligne et le panier final est revenu vide. Le push live est limite a neuf fichiers theme avec `--nodelete`; pullback 9/9 identique. La QA publique couvre 360/390/430/820/1440, rail horizontal reel, clavier, compteur, progression, sticky et jonction dock. Le widget tiers `merchantwidgetiframe` conserve une largeur hors viewport dans `documentElement`, mais `body` reste exactement au viewport et le Ruban n'est pas la source du debordement. Checkpoint : `docs/checkpoints/2026-08-16-1046-ruban-v2-live.md`.

### Décision commerciale Ruban V3 du 2026-08-17

Patrice demande désormais une seule proposition cross-sell visible par PDP, présentée en vidéo et justifiée par une parure ou un matching concret. Higgsfield est retenu comme unique outil vidéo. Grok est exclu du workflow. Toute transformation visuelle du produit est un rejet bloquant.

Le 2026-08-17, le storefront public retournait 268 produits disponibles au sens Shopify. Les 9 sources Search & Discovery V1 représentent environ 3,4 % de couverture source directe. Les 9 endpoints restent exacts et les 5 médias `milaura.recommendation_cutout` restent servis depuis `/cdn/shop/files/`.

Ruban V3 n'est pas implémenté. Les 268 associations n'existent pas, le volume de 25 à 40 vidéos est une estimation, aucune vidéo Higgsfield n'a été produite et aucun metafield vidéo V3 n'a été créé. Aucun thème n'est attribué à V3 et aucun GO de mutation Shopify, de développement, de preview ou de live n'a été reçu. Handoff complet : `docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md`.

## Contrat produit

Le commit `6c4e6de4` fixe le contrat canonique complet : pierres, matieres, couleurs, intentions, occasions, disponibilite, fulfillment, provenance et six images minimum. Le pipeline reste draft-only et ne modifie ni hub ni collection publique.

Pipeline actif :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

## Commits de consolidation des 2026-08-12 et 2026-08-13

- `9220031e` : verite storefront et logistique
- `6c4e6de4` : contrat produit et catalogue
- `4853db6e` : procedure propre de parallelisation et archive
- `952d7587` : reconciliation de l'historique du miroir Shopify
- `6f9b90b5` : capsule aigue-marine des collections integree et livree live
- `8bc59704` : rattachement du miroir Shopify automatique apres le push collection, arbre source inchange
- `882c474b` : accent Dancing Script limite au mot `bonheur` dans la bulle sociale PDP
- `74553fd3` : commit miroir Shopify automatique du push PDP live
- `75ae911f` : rattachement du miroir Shopify PDP, arbre source audite inchange
- `bf2d1fe9` : accent rose `b♥nheur` en Lato integre
- `71797a16` : commit miroir Shopify du push live cible `b♥nheur`
- `a6803efa` : rattachement du miroir Shopify `b♥nheur`, arbre source audite inchange
- `896a78d1` : integration du hotfix technique MilAura
- `a4ed7077` : retrait de quatre assets dupliques et non references
- `441bb7f0` : integration de la refonte editoriale saisonniere
- `d8c8053d` : rattachement des cinq commits miroir Shopify jusqu'a `b1893898`, arbre source audite inchange
- `6522d42f` : refonte editoriale des trois hubs, preuves d'apercu et integration fast-forward
- `aee62c12` : commit miroir Shopify automatique du push live des hubs
- `82c2cc13` : rattachement du miroir Shopify des hubs a l'integration, arbre source inchange
- `871ef137` : integration des produits contextuels et maintien des cross-sells dans Mariage et Naissance
- `ef639621` et `069cc6de` : commits miroir Shopify du deploiement live des quatre fichiers du lot
- `f8e2dfc2` : rattachement du miroir Shopify apres les produits integres, arbre source audite inchange
- `60634812` : integration du polish transparent des cartes de la Selection d'aout
- `0cc7ce28` : commit miroir Shopify du deploiement live des deux fichiers du polish
- `869d522a` : rattachement du miroir Shopify apres le polish saisonnier, arbre source audite inchange
- `a3c26aaa` : integration des dix Heroes editoriaux et de leurs vingt assets dans la branche canonique ; deploiement live cible valide ensuite le 2026-08-13
- `75c8171d` : rattachement des miroirs Shopify `e9f30ec0` et `65b04a08` apres les pushes UI et Heroes, arbre source inchange

Deploiement homepage du 2026-08-12 : `templates/index.json` uniquement sur le theme live `190430282075`. La homepage publique rend les deux nouveaux libelles 30 EUR et ne rend plus les deux anciens libelles 39 EUR. Checkpoint : `docs/checkpoints/2026-08-12-1829-homepage-shipping-labels-live.md`.

## Prochain ordre d'execution

1. La session master conserve seule l integration et le live a partir de `7cd851eb` ou plus recent, audite chaque retour et interdit tout merge aveugle de `origin/main`.
2. Conserver C1 V3 `d8d036ff` et C1-1 `cf2877ba` gelees ; executer le Release Candidate uniquement dans la reservation `2026-08-23-1100`, sur les deux nouvelles branches et le seul dev store C1. Aucun C1-2, app deploy ou release, Admin, bascule, email, integration theme ou live.
3. Confier E4 a E6 a une session mail specialist distincte, d abord en lecture seule, matrice et preview. Coordonner E7 avec le master si le Worker retour produit exige du code.
4. Laisser `Rentree Sodalite` en pause a `70 %` jusqu au 2026-08-31. A la reprise, conserver la photo fixe, polir la section, fermer inventaire, produits, couts, marges, landing et dates, puis obtenir des GO visuel, integration, Admin et live separes.
5. Continuer les fondations Pinterest dans la tache dediee : compte, tableaux, SEO, UTM, catalogue, consentement et tracking. Arret au gate inventaire avant production finale et Ads.
6. Finir en parallele l inventaire physique et la mise en ligne fiable du catalogue. Reprendre ensuite Ruban V3. Atelier reste parque sous son gate physique propre.
7. Traiter ensuite le rail commercial homepage, Karine et Sur mesure V1, les pages enfants Naissance/Mariage, le Journal, puis S1B/S1C seulement apres C1.
8. Utiliser DataForSEO de facon ciblee avant les nouvelles pages guidees par la demande, puis executer l audit SEO/AEO/GEO global lorsque les routes sont stables.
9. Fermer performance, accessibilite, netlinking, GA4, GSC, Merchant Center, lifecycle reel, delivrabilite et parcours de conversion.
10. Lancer seulement ensuite un pilote Ads borne, apres validation de l inventaire, du cout complet, de la marge de contribution, du feed, du tracking, du consentement et des regles d arret.

## Dependances encore ouvertes

- inventaire et retrait controle des 18 baguettes minerales
- treize anciennes collections sans metas definitives
- pages mensuelles de naissance et pages enfants mariage
- GSC, GA4, Merchant Center et Pinterest non verifies
- collection Œil de tigre publique avec quatre bijoux, sous le seuil editorial prefere de cinq
- parcours checkout reel du point relais non confirme
- stock, couts, delais et tracking avant acquisition payante
- Atelier de Karine : composants, faisabilite, prix, stock, photos et rendu d'apercu
- Ruban V3 : matrice auditee sur 268 produits, 53 candidats forts, 77 a revoir et `0 PRET` sous le contrat strict ; reprise parquee jusqu a l inventaire, aux couts, aux marges, a la disponibilite et au catalogue fiables
- Ruban V2 : 9 sources et 12 placements dirigés actifs ; les autres PDP restent sans complément direct validé et les médias sans `milaura.recommendation_cutout` utilisent le fallback catalogue
- mobile root overflow : corrigé live par `be96a5d1`, pullback bit à bit et QA publique 360/390/430 validés ; ne rouvrir que sur régression reproductible
- diagnostic navigateur soumis au consentement et live ; aucune source cliente durable ni persistance entre appareils
- C1 V3 privee fermee a `d8d036ff` et C1-1 prive ferme a `cf2877ba` ; Release Candidate reserve depuis `6560d59c` et `cf2877ba` sur deux nouvelles branches, sans droit C1-2, app deploy ou release, Admin, bascule, email, integration theme ou live
- E1, E2 et E3 fermes le 2026-08-20 ; notifications transactionnelles testees mais reprise creative E4 encore ouverte
- regression du bandeau cookies fermee par `aa3a9930`, poussee sur developpement puis live `190430282075` apres GO ; pullback et QA publique desktop/mobile valides
- miroir automatique `origin/main` incomplet pour les trois nouveaux assets cookies au commit `004ce94f` ; canonique et pullback live restent les preuves du lot
- miroir automatique `origin/main` incomplet pour le nouvel asset `assets/milaura-preference-storage.js` au commit `1dccd18c` ; le correctif `763d7ad9` est complet, mais le canonique et les pullbacks restent les preuves du lot 1
- Rentree Sodalite en pause a `70 %` au commit prive `47cc3e62` jusqu au 2026-08-31 ; photographie fixe retenue, section complete non validee, pullback Shopify CLI non ferme, liste, stock, couts, marges, landing, dates, copy, integration et GO live encore a fermer
- rail commercial `Nouveautes / Meilleures ventes / Promotions` non construit et a maintenir hors du lot Rentree si les fichiers se chevauchent
- Karine, preuves d atelier et Sur mesure V1 non termines
- pages enfants Naissance et Mariage, Journal et clusters encore ouverts
- S1B et S1C sont downstream de C1 mais ne bloquent pas l implementation privee C1-1 ; ne jamais restaurer le Scratch sur panier ou PDP
- E4 a E7 encore ouverts malgre la fermeture E1 a E3
- paid bloque par la gate inventaire, economie, feed, consentement, tracking, conversion et mesure

## References de reprise

- `docs/checkpoints/2026-08-22-1235-c1-v3-closed-handoff.md`
- `docs/checkpoints/2026-08-21-0859-master-strategic-handoff.md`
- `docs/checkpoints/2026-08-21-0846-c1-0-rejet-handoff.md`
- `docs/checkpoints/2026-08-20-2013-all-active-customer-email-tests.md`
- `docs/checkpoints/2026-08-17-1238-cookie-consent-gem-live.md`
- `docs/checkpoints/2026-08-20-0749-diagnostic-consent-dev.md`
- `docs/checkpoints/2026-08-20-0809-diagnostic-consent-live.md`
- `docs/checkpoints/2026-08-20-1031-comptes-emails-lifecycle-audit-handoff.md`
- `docs/codex-handoff.md`
- `docs/workstreams.md`
- `docs/reference/2026-08-12-repository-workflow.md`
- `docs/checkpoints/2026-08-12-1819-repository-cleanup.md`
- `docs/checkpoints/2026-08-12-1829-homepage-shipping-labels-live.md`
- `docs/checkpoints/2026-08-12-1019-catalogue-v1-activation.md`
- `docs/checkpoints/2026-08-12-1746-three-lots-reconciliation-pdp.md`
- `docs/checkpoints/2026-08-12-1927-collection-pill-aqua.md`
- `docs/checkpoints/2026-08-12-1931-pdp-visual-correction.md`
- `docs/checkpoints/2026-08-13-0810-pdp-bonheur-heart.md`
- `docs/checkpoints/2026-08-13-1010-seasonal-editorial-preview.md`
- `docs/checkpoints/2026-08-13-1752-hub-inline-products-live.md`
- `docs/checkpoints/2026-08-13-1840-home-seasonal-da-live-handoff.md`
- `docs/checkpoints/2026-08-13-2058-editorial-heroes-gpt-image-2.md`
- `docs/checkpoints/2026-08-14-0947-editorial-hero-da-session-handoff.md`
- `docs/checkpoints/2026-08-14-1715-homepage-hero-v2-dev.md`
- `docs/checkpoints/2026-08-15-1039-navigation-home-v2-live.md`
- `docs/checkpoints/2026-08-15-1054-home-paths-open-gold-live.md`
- `docs/checkpoints/2026-08-15-1138-navigation-home-v2-handoff.md`
- `docs/checkpoints/2026-08-15-1142-homepage-hero-bandeau-navbar-handoff.md`
- `docs/checkpoints/2026-08-15-1145-navigation-handoff-addendum.md`
- `docs/checkpoints/2026-08-15-1155-ruban-vivant-live.md`
- `docs/checkpoints/2026-08-15-1334-pdp-experience-live-handoff.md`
- `docs/checkpoints/2026-08-16-0751-master-midpoint-handoff.md`
- `docs/checkpoints/2026-08-16-0932-sticky-proof-live.md`
- `docs/checkpoints/2026-08-16-1042-pdp-hero-desktop-live.md`
- `docs/checkpoints/2026-08-16-1046-ruban-v2-live.md`
- `docs/checkpoints/2026-08-16-1106-home-hero-title-live.md`
- `docs/checkpoints/2026-08-16-1110-polish-session-handoff.md`
- `docs/checkpoints/2026-08-17-0910-ruban-v3-handoff.md`
- `docs/prompts/2026-08-14-hero-destination-da-reprise.md`
- `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`
- `docs/superpowers/specs/2026-08-12-milaura-bandeau-hero-immersif.md`
