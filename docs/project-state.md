# MilAura - Etat courant du projet

Derniere mise a jour : 2026-09-01 14:15 CEST

## Etat en une phrase

Patrice estime la refonte globale a environ `70 %` : le socle et le gros du developpement sont live, notamment Mon Ecrin et Rentree Sodalite, tandis que le travail restant porte surtout sur le polish visuel, des corrections reproduites et quelques ameliorations ciblees ; l inventaire continue en parallele et les gates Ads restent distinctes. Le premier mail marketing a ete envoye a 25 destinataires le 2026-09-01 et son systeme valide devient le `Template 1` reutilisable.

## Template 1 marketing et premiere campagne envoyee au 2026-09-01

- Decision Patrice : le systeme cree pour la campagne Sodalite devient `Template 1`, reutilisable pour un produit, une pierre, une collection, un article, un contenu editorial ou un envoi informatif.
- Source canonique : `mail template commercial milaura/TEMPLATE-1.md`.
- Implementation de reference : `mail template commercial milaura/2026-09-01-campagne-sodalite/index.html`.
- Campagne Shopify Messaging `75713150`, objet `La sodalite, la pierre de votre rentree`.
- Segment controle : `Abonnes a la liste de diffusion`, `25` destinataires.
- Statut final Shopify relu : `Envoye`, le 2026-09-01 a 14:10 CEST.
- Six fiches de test ou invalides nommees par Patrice ont ete supprimees definitivement. Une fiche restante sans adresse e-mail est restee hors cible. Aucune liste d adresses n est versionnee dans le depot.
- Checkpoint complet : `docs/checkpoints/2026-09-01-1415-template-1-marketing-live-handoff.md`.
- Le Template 1 appartient a Shopify Messaging marketing. Il ne remplace pas les Notifications transactionnelles ni les automatisations lifecycle existantes.

## Pilotage master allege au 2026-08-31

Le master devient un chef d orchestre leger : il suit le plan, protege les proprietaires, controle les handoffs, detecte les conflits, rappelle les gates et recadre seulement si necessaire. Il ne reprend pas l inventaire et ne rejoue pas par defaut les commits, previews, pushes, pullbacks et deploiements deja executes et prouves par une session specialiste.

La session qui travaille directement avec Patrice execute son lot de bout en bout dans un perimetre reserve. Si une integration canonique ou un live est requis, le master peut lui attribuer temporairement cette execution pour son seul lot, apres GO explicite et sans qu une autre session possede le meme theme ou les memes fichiers.

Checkpoint de reprise : `docs/checkpoints/2026-08-31-0741-master-orchestrator-handoff.md`.

## Mon Ecrin, fondation live et reprise a 70 pour cent au 2026-08-31

- Release active : `milaura-customer-accounts-7`, ID `gid://shopify/Version/1109042987009`.
- Page production : `https://shopify.com/97728069979/account/pages/01a04dd8-c889-76f4-ac40-b8aa7d2d48c0`.
- Theme live `190430282075` : neuf fichiers fonctionnels et `config/settings_data.json` deployes de facon ciblee ; pullbacks `10/10 MATCH` en comptant le layout.
- Backend `https://mon-ecrin-api.milaura.fr` sain et bridge quiz actif pour la boutique production exacte.
- Page sans diagnostic : decouverte des cinq pierres, commandes, profil/adresses, Cercle a venir, historique reel et pierre preferee restent visibles.
- Un diagnostic n est ecrit dans le compte qu apres le choix explicite `Enregistrer et ouvrir Mon Ecrin`.
- Relecture distante du 2026-08-31 : release 7 active, release 6 inactive, health backend `ok=true`, theme `190430282075` au role `live`.
- Evaluation produit de Patrice : environ `70 %`, gros du developpement realise, nombreuses erreurs encore a reproduire et classer, polish visuel important, quelques ameliorations de developpement.
- Le PASS technique du deploiement ne vaut pas validation visuelle finale ni fermeture produit.
- Handoff courant : `docs/checkpoints/2026-08-31-0734-mon-ecrin-70-percent-handoff.md`.
- Preuve historique du live : `docs/checkpoints/2026-08-30-2050-mon-ecrin-account-hub-live.md`.

## Source de verite et etat du depot

- Seul depot actif : `/Users/paesano/Documents/MilAura website/dawn-X-milaura`.
- Branche de travail et d'integration : `codex/milaura-integration`.
- `origin/main` reste un miroir automatique incomplet du theme Shopify live. Il omet des assets cookies et le contrat de preference dans des commits documentes ; ne jamais le fusionner aveuglement.
- Le Ruban V3 est documente par `docs/checkpoints/2026-08-28-1338-ruban-v3-final-accepted-handoff.md`. Rentree Sodalite est maintenant live ; sa reprise de polish est documentee dans `docs/checkpoints/2026-08-31-0735-sodalite-ui-polish-handoff.md`.
- Les branches de lots fermees peuvent rester distantes comme preuve. Elles ne deviennent pas une source de deploiement et aucun worktree ancien ne pousse le theme.
- Quatre anciennes branches sont conservees sous des tags `archive/2026-08-12/*`, puis ont ete retirees des branches actives.
- Les worktrees Ruban V3 ont ete retires proprement le 2026-08-28 apres integration et live ; les branches source restent conservees aux commits distants `38497e4b` et `f2eb61a8`. Les autres worktrees et proprietaires courants vivent dans `docs/workstreams.md`.
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
- Une seule session possede l integration ou le live a un instant donne. Le master attribue temporairement cette execution a la session specialiste du lot exact ; celle-ci utilise des fichiers cibles, `--nodelete`, pullback et comparaison.
- Une validation technique ne vaut jamais validation creative de Patrice.
- Aucun produit, stock, prix ou statut de publication n'est modifie par un chantier theme sans autorisation explicite.

## Inventaire et workflow produit V4 au 2026-09-01

- Source physique et Shopify relus en direct : `185 references positives`, `456 unites`, `118 identites Shopify exactes`, `118 stocks exacts`, `116 ACTIVE`, `2 DRAFT`, `67 absentes`. La progression est de `63,8 %` par reference.
- Le lot V4 du 2026-09-01 contient dix nouvelles fiches, dix identites EAN exactes, dix stocks exacts et cinquante images en `1024 x 1024`. Quality gate, audit editorial et audit visuel passent `10/10`.
- La preuve initiale ferme les dix fiches en `DRAFT`, sans publication. Le pull Shopify complet de fermeture confirme ensuite les dix produits `ACTIVE` et publics apres validation de Patrice. Le statut courant vient du pull complet, pas de la preuve initiale conservee dans le batch.
- Le bracelet aigue-marine EAN `3701459072392`, produit `10684076949851`, appartient a la collection manuelle `par-pierre-aigue-marine`.
- Patrice a confirme un stock physique de trois chaines dorees, EAN `3701459096435`, produit `10684097986907`. Le metachamp complementaire Shopify standard pointe vers cette chaine sur les 29 pendentifs actifs candidats : readback Admin `29/29`, endpoints publics `29/29` et fragment theme reel controle.
- Les deux brouillons physiques restants sont l encens Palo Santo EAN `3701459054732`, produit `10358581723483`, et les boucles cornaline 6 mm EAN `3701459082018`, produit `10357427732827`. Ne pas les activer sans controle et GO distincts.
- La prochaine session commence en lecture seule, relit le Sheet, Shopify et les sources fournisseur, puis presente dix nouvelles references a Patrice avant toute creation. Le prochain lot provisoire est documente dans le checkpoint et doit etre rafraichi avant usage.
- Workflow V4 obligatoire : produit Shopify `DRAFT` uniquement apres GO, cinq images controlees a pleine resolution, handle, SEO, textes, grammaire, syntaxe, orthographe, tournure, metachamps, prix, EAN et stock verifies. Aucune activation ni publication automatique.
- Checkpoint de reprise courant : `docs/checkpoints/2026-09-01-1219-inventory-v4-ten-active-crosssell.md`.

## Role de la session master au 2026-08-31

Le master ne remplace aucune session specialiste. Il maintient trois priorites maximum, centralise les retours, controle les preuves utiles, protege les proprietaires, detecte les conflits de fichiers, themes, consentements et Admin, puis rappelle les gates et dependances a Patrice.

La session specialiste qui travaille avec Patrice possede l execution de son lot, y compris commit, push, preview, documentation et deploiement cible lorsque les droits et GO sont explicites. Le master lui attribue temporairement l integration ou le live pour ce seul lot, puis audite son handoff sans refaire toutes les operations.

Les priorites immediates sont le polish Rentree Sodalite, le polish et les bugfix Mon Ecrin, puis la preparation SEO/AEO/GEO et acquisition. L inventaire continue en parallele depuis le Sheet canonique. Ruban V3 est ferme et live. Mail ne se rouvre que sur besoin precis. Atelier des emotions et Pierres de naissance restent des chantiers ulterieurs non bloquants.

## Cap commercial, direction et arbitrages du 2026-08-16

- Decision explicite de Patrice du 2026-08-20 : MilAura assume pleinement la lithotherapie, les vertus et bienfaits des pierres et le bien-etre emotionnel. `Protection`, `apaisement`, `ancrage`, `energie`, `confiance`, `vertus` et `bienfaits` ne constituent pas, par eux-memes, des anomalies a corriger. La limite est de ne jamais presenter la lithotherapie comme une science ou une medecine, ni comme un diagnostic, un soin, un traitement, une prevention de maladie ou une guerison. Aucun agent ne doit rouvrir ce sujet par exces de prudence sans nouvelle decision explicite de Patrice.
- Objectif directeur : construire un site capable d'atteindre 100 000 EUR de chiffre d'affaires. L'horizon reste a preciser ; les lots sont juges par leur effet sur conversion, panier moyen, retention ou acquisition mesuree.
- La charte MilAura reste executable. Tiffany & Co. et Van Cleef & Arpels sont des references de niveau visuel et de branding : sobriete, photographie joailliere, macro produit, respiration et precision. Aucun signe distinctif, motif, couleur proprietaire ou mise en page ne doit etre copie.
- Le sujet d'un claim LFG global est clos par Patrice apres verification. Il est retire du backlog actif et ne doit plus etre presente comme anomalie ou risque sans nouvelle preuve contradictoire explicite.
- La longueur des PDP n'est pas un probleme confirme. La nouvelle experience est validee ; une session PDP specialisee doit effectuer des recherches approfondies avant toute recommandation de reduction ou reorganisation.
- Les formulations actuelles du diagnostic sur l'apaisement, la protection et l'energie sont approuvees. Aucun lot de reecriture corrective n'est ouvert. Le polish visuel, la page resultat et la persistance client restent ouverts.
- Le diagnostic reste persiste dans le navigateur et le panier sous consentement Preferences. Depuis la release 7 de Mon Ecrin, un enregistrement serveur entre appareils est egalement disponible apres le choix explicite `Enregistrer et ouvrir Mon Ecrin` ; aucune ecriture silencieuse n est autorisee.
- Le nouveau bandeau cookies gemme est live et valide publiquement depuis le 2026-08-17. L audit des emails, notifications, relances et du comportement apres inscription est ferme le 2026-08-20 ; leur implementation reste classee criticite 10/10.
- La piste retenue pour la home est une section commerciale unique avec choix `Nouveautes`, `Meilleures ventes` et `Promotions`, un seul rail visible et un CTA adapte. Elle reste a prototyper et valider apres `Pierre du moment` ; Promotions se masque sans offre reelle.
- La source physique courante compte 185 references positives et 456 unites : 116 `ACTIVE`, 2 `DRAFT` et 67 absentes, avec 118 correspondances et stocks exacts. Cette verite datee reste obligatoire avant paid acquisition et doit etre relue en direct a chaque reprise. Elle ne bloque plus Mon Ecrin : ses destinations doivent etre resolues dynamiquement parmi les produits Shopify actuellement publies, vendables et disponibles.
- L'Atelier des emotions est confie a une session dediee. Little Words Project est la reference fonctionnelle ; Van Cleef & Arpels la reference de niveau visuel ; la charte MilAura reste la source executable.
- Pinterest doit commencer par ses fondations sans attendre la fin : domaine, Shopify, catalogue, tracking, tableaux et branding. Le paid attend stock, flux et mesure verifies.
- Decisions Pinterest de Patrice du 2026-08-20 : le titre et la bio actuels sont valides et restent inchanges. Aucun agent ne doit proposer de les remplacer sans nouvelle demande explicite. La phrase finale `Découvrez les créations et conseils sur milaura.fr.` est approuvee comme ajout optionnel ; si la limite de caracteres Pinterest empeche son ajout, la bio existante ne doit pas etre raccourcie sans validation de Patrice.
- Direction de banniere Pinterest approuvee pour prototypage, sans GO visuel ni live a ce stade : Chloe debout dans un bar naturel, un verre a la main, devant une scene vegetale, portant les quatre references exactes choisies par Patrice : bracelet dore en aigue-marine naturelle, bague lotus reglable en argent 925 et aigue-marine naturelle, boucles d oreilles dorees en aigue-marine naturelle et collier aventurine verte boho dore. Les produits portes restent clairement visibles et des macros editoriales en partie basse reprennent ces memes references. Le cadrage doit rester robuste aux recadrages Pinterest.
- Le tableau `Rituels, bougies & purification` est confirme dans l architecture Pinterest. Il est alimente par les bougies, palo santo, sauge, bols tibetains, pendules et produits associes ; il ne doit plus etre considere comme un tableau sans profondeur commerciale.
- DataForSEO suit deux temps : recherche ciblee si elle doit guider une nouvelle page, puis audit global final lorsque les routes et enrichissements sont stabilises.
- Decision finale Patrice du 2026-08-28 : le film Rentree Sodalite final est accepte par `franchement j'adore` puis `ah ok alors vas-y continue`. La branche complete `codex/milaura-rentree-sodalite-final-20260828` a `dc875ec8` est integree dans le master par `f84e0c72`. Cette validation et cette integration ne donnent aucun GO live.
- Cette reception ne vaut pas gate Atelier. L Atelier reste parque jusqu a reception et validation de ses propres composants, mesures, comptages, prototypes Karine, cout, prix, architecture Shopify et nouveau GO.
- Organisation annoncee par Patrice : sessions distinctes pour Mon Ecrin, Rentree Sodalite, inventaire et Pinterest. Ruban V3 est ferme et live depuis le 2026-08-28. La session specialiste active peut recevoir temporairement l integration et le deploiement de son propre lot ; le master orchestre et controle.
- La tache Pinterest `01a01eb8-192c-76c1-9fb7-7599654e5e64` a analyse 83 videos, soit 20 h 10, note la formation `14,5/20` et produit une feuille de route de 29 pages. Les fondations peuvent avancer ; aucune Ads avant inventaire, feed, consentement, tracking et economie verifies.

## Rentree Sodalite live et reprise de polish a 70 pour cent

La campagne Rentree Sodalite est live sur la home, dans la navigation et sur `/collections/selection-de-karine`. La route permanente `/collections/par-pierre-sodalite` est aussi publique, avec 17 produits. L ancienne route `/collections/selection-aout-2026` reste publique et ne doit pas etre supprimee ou redirigee sans audit SEO, Analytics et backlinks.

Le baseline technique est ferme : QA 360, 390, 430 et 1440 sans overflow, sources video responsive, fin fixe avec `Revoir`, CTA et navigation vers la route permanente, landing HTTP 200 et canonical propre. Patrice requalifie toutefois le resultat produit a environ `70 %` : le gros du developpement est fait, mais un polish UI important et quelques ameliorations de developpement restent ouverts.

La reprise doit commencer en lecture seule, par captures live et discussion avec Patrice, sans inventer les defauts. Checkpoint courant : `docs/checkpoints/2026-08-31-0735-sodalite-ui-polish-handoff.md`.

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

## Decision C1 Mon Ecrin dynamique du 2026-08-29

Patrice ferme la grande session C1 et demande une reprise fraiche orientee mise en ligne. La fin des 175 references physiques n est plus un prerequis de C1 : le stock MilAura est vivant et continuera de changer apres la release.

Mon Ecrin doit donc interroger le catalogue Shopify courant et ne proposer que des produits publies sur la destination retenue, vendables, disponibles, avec URL, prix et media vivants. Les recommandations descendent par replis controles depuis le profil, la pierre favorite et l historique qualifie : correspondance exacte, correspondance proche, univers ou categorie, collection, puis catalogue eligible. Une reference de-publiee, supprimee ou devenue indisponible doit disparaitre sans correctif manuel ni redeploiement.

Le Ruban V3 live est une reference d architecture utile pour les exclusions, l ordonnancement et les replis, sans constituer un code a copier aveuglement dans Customer Accounts. Le nouveau contrat doit encore etre implemente et prouve dans un lot prive avant productionisation. Les gates stock, prix, cout, marge, feed, tracking, consentement et mesure restent obligatoires avant Ads, mais elles ne bloquent plus la mise en ligne de Mon Ecrin.

Handoff : `docs/checkpoints/2026-08-29-0729-c1-mon-ecrin-dynamic-live-handoff.md`.

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

Le premier RC10 avait rouvert RC1 et RC3 sur trois P1 documentes dans `docs/checkpoints/2026-08-23-1548-c1-rc-rc10-audit-no-go.md`. Les correctifs ont ensuite ete pousses a `2f95b3d1` pour le theme et `c877d630` pour le prive, avec commit fonctionnel `77cd15f3`. Le second reaudit master ferme les trois P1 : emission idempotente avec unicite SQLite et retry strict, maintenance de retention continue avec drain, et image non root avec SQLite persistante prouvee en prive. Contre-verifications master : 33 tests sur 33, build Shopify, bundle `65019`, audit zero vulnerabilite, Theme Check zero erreur, pullback bridge distant strictement identique et theme `205027279193` toujours non publie. RC1 est PASS et RC3 PASS prive. Le Release Candidate global reste ouvert : RC4 et RC5 partiels, RC6 ferme avec NO-GO conditionnel, RC7 ouvert, RC8 partiel. Aucun GO Patrice n est demande et aucun compte, commande, `write_orders`, Admin, email, deploy, release, C1-2, integration, publication ou live n est autorise. Preuve : `docs/checkpoints/2026-08-23-1936-c1-rc-rc10-corrections-reaudit.md`.

Le master ouvre le 2026-08-24 uniquement le lot C1 RC 1A, runtime prive authentifie sans commande. Il part du tip prive `c877d630a8953a0cf1304c7392143288db110b99` sur la branche a creer `codex/milaura-c1-rc-runtime-no-orders-20260824`, avec une seule zone de preuve nouvelle. Il peut utiliser au maximum un compte synthetique existant, controle et sans commande, le theme prive non publie `205027279193`, le backend local, `shopify app dev` et l activation temporaire du flag RC, obligatoirement restaure a `false`. Si aucun compte eligible n existe, le lot s arrete avec `ACCOUNT_REQUIRED`. Aucune creation de compte, commande, `write_orders`, mutation Admin, modification Mail, push theme, deploy, release, C1-2, integration ou live n est autorise. Ce lot peut fermer RC4 et augmenter la couverture sans commande de RC8 ; RC5, RC6, RC7 et les etats commandes restent ouverts. Reservation : `docs/checkpoints/2026-08-24-0821-c1-rc-runtime-no-orders-reservation.md`.

Le lot 1A s est arrete proprement au tip prive `ff6cc0616b9bedee2323a9c5d3a197659170f260` avec `OTP_DELIVERY_BLOCKED`. RNO0, RNO1, RNO2, RNO5 et RNO6 sont PASS ; RNO3 et RNO4 sont bloques avant authentification car le code natif Shopify, annonce comme envoye, n est pas arrive dans la boite controlee. Aucun scenario C1 bout en bout n a commence. Le flag du theme prive est revenu a `false`, SQLite reste a zero handoff et zero purge, et app dev, backend, tunnel et listeners sont arretes. RC4 ne ferme pas et RC8 ne progresse pas. Le master reserve seulement un diagnostic Mail M0 strictement read-only sur la boite, le spam, la quarantaine, les filtres, le routage et le support du suffixe `+`. Aucune nouvelle demande OTP, mutation de boite, changement d adresse du compte, Admin, email, Shopify ou reprise C1 n est autorise. Cadre : `docs/checkpoints/2026-08-24-0920-c1-otp-delivery-readonly-reservation.md`.

M0 ferme avec `NO_MAIL_TRACE` : aucune trace Shopify ou Customer Accounts dans Tous les messages, spam, corbeille ou categories, aucun message prive ouvert, et le suffixe `+` est officiellement supporte par Gmail. Les filtres serveur et une quarantaine Google Workspace Admin ne sont pas visibles avec le connecteur, donc aucun rejet ou quarantaine n est prouve. Le master reserve M1, une correlation privee sans exposition d adresse : C1 et Mail normalisent chacun leur identite source, calculent une empreinte HMAC avec une cle ephemere et ne retournent que l empreinte. Aucun nouvel OTP, envoi, changement d adresse, Admin ou Shopify. Le verdict est limite a `ROUTE_IDENTITY_MATCH`, `ROUTE_IDENTITY_MISMATCH` ou `CORRELATION_BLOCKED`. Cadre : `docs/checkpoints/2026-08-24-0926-c1-otp-route-correlation-reservation.md`.

M1 ferme avec `CORRELATION_BLOCKED` : le fichier local C1 contient seulement six alias techniques et identifiants prives, sans adresse email. Aucune valeur brute ou empreinte exploitable n a ete restituee, et Mail a recu l ordre d arreter avec l ancienne cle. Le master reserve M2, lecture Admin strictement bornee de la seule fiche cliente synthetique RNO1 sur le dev store, puis comparaison HMAC avec la boite Gmail controlee. Aucune liste clientes, autre fiche, commande, sauvegarde, mutation, nouvel OTP, GraphQL, app dev ou live. Si aucune session Admin autorisee n est deja ouverte, stop `ADMIN_SESSION_REQUIRED`. Cadre : `docs/checkpoints/2026-08-24-0929-c1-otp-admin-identity-correlation-reservation.md`.

M2 ferme avec `CORRELATION_BLOCKED` : le bon onglet Admin RNO1 est ouvert, mais Chrome refuse sa lecture automatisee avant extraction. Aucune empreinte Admin ou valeur brute n a ete produite ; la cle et l empreinte Mail M2 sont expirees. Le master interdit tout autre contournement. Gate actif : Patrice regarde l adresse dans cet onglet, ne la transmet pas, ne sauvegarde rien et repond seulement `ROUTE MATCH`, `ROUTE MISMATCH` ou `ROUTE CANNOT VERIFY`. Aucun nouvel OTP ou changement d adresse n est encore autorise. Cadre : `docs/checkpoints/2026-08-24-0936-c1-otp-manual-identity-confirmation.md`.

Patrice confirme la destination affichee par Shopify. Elle est un alias `+` du domaine MilAura, distinct de la boite Gmail inspectee par M0 : verdict `ROUTE MISMATCH`. L absence de message dans Gmail est expliquee et ne prouve aucune panne C1. L adresse complete reste hors preuve canonique. Le master reserve uniquement M3, preflight Mail read-only sur le comportement Shopify lors d un changement d email client, les destinataires d une notification eventuelle, l unicite, la variante Gmail controlee et le rollback. Aucun Admin, changement d adresse ou nouvel OTP n est autorise avant retour M3, reservation Admin et GO exact. Cadre : `docs/checkpoints/2026-08-24-1210-c1-otp-route-mismatch-mail-preflight.md`.

M3 ferme avec `CHANGE_BEHAVIOR_UNVERIFIED`. Shopify ne documente pas le declenchement ni le destinataire d une notification lors d une modification Admin ; une verification vers la nouvelle adresse est plausible, une alerte vers l ancienne ou les deux reste possible, et une notification declenchee n est pas connue comme desactivable hors Plus. L email client doit etre unique. Le master pre-reserve M4 depuis `ff6cc061` : une seule fiche synthetique RNO1, une cible privee avec suffixe `+` de la boite Gmail controlee, recherche exacte d unicite, un seul champ email et une seule sauvegarde. Aucun OTP dans M4 et aucun rollback automatique. Execution uniquement apres GO exact Patrice acceptant la notification eventuelle. Cadre : `docs/checkpoints/2026-08-24-1215-c1-otp-address-correction-prereservation.md`.

Patrice a donne le premier GO M4 le 2026-08-24 pour une modification unique d email, en acceptant une notification Shopify eventuelle et sans demande OTP. Deux tentatives automatisees se sont arretees sans mutation car le controle de l onglet Admin etait indisponible. Le rapport prive final est pousse a `78bc9ca350736aab569dad5c21d825ba76cced21`, branche et worktree propres `0/0`. L ancienne cible Gmail a ensuite ete rejetee par Patrice comme inutile, annulee et jamais enregistree. Cadres historiques : `docs/checkpoints/2026-08-24-1344-c1-otp-address-correction-go.md` et `docs/checkpoints/2026-08-24-1350-c1-m4-admin-session-recovery.md`.

Patrice a confirme qu il controle la boite MilAura existante et qu aucun ancien OTP n y etait present. Il a ensuite donne le GO exact `GO ADMIN C1 OTP - REMPLACER UNIQUEMENT L EMAIL DU COMPTE TEST PAR CONTACT@MILAURA.FR, J ACCEPTE UNE NOTIFICATION SHOPIFY EVENTUELLE, SANS DEMANDE OTP`. Le master a verifie dans Shopify Admin le bon dev store, le compte synthetique `C1-1 Complet`, ses balises C1, zero commande et `0,00 EUR`. Patrice a sauvegarde manuellement le seul champ email. Apres rechargement, Shopify affiche `contact@milaura.fr` et le calendrier consigne ce changement ; zero commande et zero depense restent confirmes. Verdict `ADDRESS_ROUTE_CORRECTED - OTP NOT REQUESTED`. Aucune notification n a ete observee ou qualifiee. Le prochain lot sera une unique demande OTP observee en direct, uniquement apres reservation et nouveau GO exact. Checkpoint : `docs/checkpoints/2026-08-24-1404-c1-otp-contact-address-saved.md`.

Le master pre-reserve M5 le 2026-08-24 a 14:18 CEST. Branche privee a creer apres GO `codex/milaura-c1-otp-single-test-20260824`, base `ff6cc061`, worktree nouveau et seule zone de preuve `docs/milaura/shopify-admin-canonical/c1-otp-single-test/**`. Le lot utilise seulement la page native Customer Accounts du dev store. Patrice declenche exactement une demande et saisit lui-meme le code s il arrive ; Codex ne lit, ne copie et ne conserve jamais l OTP. Aucun renvoi, second code, Admin, app dev, backend, theme, Mail ou runtime Mon Ecrin. M5 ferme seulement livraison et session native ; RNO3 et RNO4 exigent un lot ulterieur. GO exact requis : `GO C1 OTP M5 - DEMANDE UNIQUE D UN CODE SUR CONTACT@MILAURA.FR, DECLENCHEE MANUELLEMENT PAR PATRICE, SANS AUTRE ADMIN NI REPRISE RUNTIME`. Reservation : `docs/checkpoints/2026-08-24-1418-c1-otp-single-test-prereservation.md`.

M5 ferme `PASS` au commit prive `90c1d8d4c1921cf65d5da3cc5cbfe3f4b9e264d1`. Patrice a declenche une seule demande native, recu le code, l a saisi lui-meme et confirme la connexion. C1 n a jamais lu, demande, copie ou conserve l OTP et aucun renvoi n a eu lieu. Le diff prive contient seulement le rapport expurge M5, HEAD est egal a origin et le worktree est propre. Aucun Admin, Mail, app dev, backend, tunnel, flag, theme, bridge, purge ou runtime Mon Ecrin. Verdict `OTP_DELIVERED_AUTH_SESSION_READY`.

Le master pre-reserve ensuite RNO3 et RNO4 depuis `90c1d8d` sur la branche a creer `codex/milaura-c1-rc-runtime-authenticated-20260824`, worktree nouveau et zone exclusive `docs/milaura/shopify-admin-canonical/c1-release-candidate-runtime-authenticated/**`. L app et le theme RC restent en lecture seule. Apres nouveau GO exact, le lot peut utiliser la session authentifiee, le theme prive `205027279193`, app dev, backend local, tunnel CLI et le flag prive temporaire, puis doit purger ses donnees, restaurer le flag a `false` et tout arreter. Aucun nouvel OTP ; si la session a expire, stop. Aucun compte avec commande, Admin, Mail, code, deploy, release, integration ou live. GO requis : `GO C1 RNO3 RNO4 - QA AUTHENTIFIEE PRIVEE SANS COMMANDE, SANS RELEASE NI LIVE`. Cadre : `docs/checkpoints/2026-08-24-1425-c1-m5-closed-rno3-rno4-prereservation.md`.

Apres GO RNO3/RNO4 et autorisation du transit Cloudflare, le preflight runtime repasse 33 tests, build, bundle et audit. Tunnel, backend local et app dev demarrent sur le bon dev store ; le flag du theme prive passe de `false` a `true`, puis revient a `false` apres le blocker. Mon Ecrin affiche proprement indisponible car le setting extension `backend_url` est vide. Aucune requete metier ni donnee synthetique n atteint le backend. C1 arrete app dev, backend et tunnel ; aucun listener ne reste. Verdict `BLOCKED_BACKEND_SETTING_NOT_CONFIGURED - ROLLBACK TECHNIQUE PASS`, sans defaut de code prouve.

Le master pre-reserve M6 dans le meme worktree pour conserver la session authentifiee. Seule extension de scope : Patrice renseigne manuellement `backend_url` avec l URL HTTPS ephemere du tunnel dans la development preview, C1 reprend RNO3/RNO4, puis Patrice vide le champ et C1 confirme le rollback avant d arreter le tunnel. La branche doit d abord obtenir son upstream. Aucun autre setting, code, Admin client, compte, commande, Mail, deploy, release, integration ou live. GO requis : `GO C1 M6 BACKEND URL - CONFIGURATION EPHEMERE DANS LA PREVIEW PRIVEE, REPRISE RNO3 RNO4 ET ROLLBACK VIDE, SANS RELEASE NI LIVE`. Cadre : `docs/checkpoints/2026-08-24-1627-c1-rno-backend-url-prereservation.md`.

M6 s arrete apres sa premiere sauvegarde avec `BLOCKED_QUICK_TUNNEL_DNS_NOT_RESOLVED`. Le processus `cloudflared` etait vivant mais son hostname ne resolvait ni dans le navigateur ni avec `curl`. Mon Ecrin est reste indisponible et aucune requete metier ou donnee synthetique n a transite. Le champ contient une URL ephemere morte, non canonisee. Le master pre-reserve un seul recovery : arret de l ancien tunnel, nouveau quick tunnel unique, puis preuve DNS et HTTPS publics `/health` et `/ready` avant toute nouvelle sauvegarde. Si cette prevalidation echoue, Patrice vide immediatement le champ et le lot s arrete. Si elle passe, Patrice remplace une seule fois l URL, C1 execute RNO3/RNO4 puis Patrice remet obligatoirement le champ vide avant arret complet. Aucun troisieme essai, code, autre setting, Admin client, commande, Mail, deploy, release, integration ou live. Nouveau GO exact requis dans `docs/checkpoints/2026-08-24-1657-c1-m6-quick-tunnel-recovery-prereservation.md`.

Le recovery M6 ferme ensuite avec `RECOVERY_TUNNEL_PREVALIDATION_FAILED - ROLLBACK PASS - RNO3/RNO4 NON EXECUTES`. L unique lancement du nouveau quick tunnel a quitte avant hostname sur echec de resolution DNS de l API Cloudflare. Aucune nouvelle URL n a ete generee ou sauvegardee et aucune donnee n a transite. Patrice a vide l ancienne URL morte ; apres rechargement, `backend_url` est vide, le flag prive est `false`, la base locale est saine avec zero handoff et zero purge, et aucun listener ou processus ne reste. La preuve privee est poussee a `fac94126be4ed23d4e92a4a5edf690fd6af19ffe`, branche et worktree propres `0/0`. RC4 et RC8 restent partiels. Aucun troisieme quick tunnel ni nouvelle reservation runtime. Toute reprise exige un nouveau choix master entre correction DNS locale et endpoint de preview stable, puis nouveau GO Patrice. Cloture : `docs/checkpoints/2026-08-24-1825-c1-m6-recovery-closed.md`.

Le master retient ensuite la voie endpoint prive stable, sans l executer. Le backend RC deja Dockerise doit etre heberge de facon isolee sur le VPS ONORA existant, derriere nginx et un sous-domaine HTTPS dedie, sans Cloudflare Tunnel. Apres GO, une branche privee distincte partira de `fac94126`, avec seulement un paquet de deploiement nouveau et des preuves nouvelles. Le lot doit d abord revalider le VPS, DNS, port, TLS, capacite et conflits en lecture seule, puis proteger les secrets hors Git, deployer un conteneur non root sur localhost, connecter uniquement la development preview C1, fermer RNO3/RNO4 sans commande et effectuer un rollback complet. Un OTP natif unique saisi uniquement par Patrice est inclus si la session expire. Aucun app deploy, release, Admin cliente, Mail, integration ou live. Pre-reservation et GO exact : `docs/checkpoints/2026-08-24-1834-c1-stable-private-endpoint-prereservation.md`.

Le lot endpoint stable est ensuite execute et pousse au commit prive `146ac02633a14c43436a09611996c71d8c861f7d`. L infrastructure HTTPS, le backend non root, la validation de session, le premier handoff et le premier import passent. RNO3 echoue apres reload : `sections/milaura-quiz.liquid` reconstruit puis reecrit le resultat restaure, perd l identite et le consentement ajoutes par le bridge et regenere aussi `timestamp`. Un second handoff et un faux conflit apparaissent. RNO4 reste partiel apres un premier PASS responsive sans commande. Le rollback est complet : purge sans resurrection, `backend_url` vide, flag `false`, theme `205027279193` non publie, App Dev et endpoint arretes. Le DNS, nginx, le certificat, le volume, les secrets VPS et le conteneur arrete restent en place. Verdict : `RNO3_FAIL_IDEMPOTENCE_AFTER_RELOAD - RNO4_PARTIAL_PASS - ROLLBACK_PASS`.

Le master pre-reserve un micro-lot distinct sans l executer. La correction doit afficher le dernier diagnostic deja stocke sans le reecrire ; un nouveau passage reel du quiz doit au contraire produire une nouvelle identite. Copier seulement `resultId`, `revision` et `accountPersonalization` serait insuffisant car le backend hache aussi le timestamp normalise. Branche theme proposee depuis `2f95b3d1`, seul fichier `sections/milaura-quiz.liquid` ; branche de preuves privee depuis `146ac026`, nouvelle zone documentaire seulement. La QA doit prouver doublon strict apres reload, vrai conflit apres nouveau quiz, purge, RNO4 complet et rollback. Aucun backend, texte, commande, Admin cliente, Mail, deploy, release, integration ou live. Cadre et GO exact : `docs/checkpoints/2026-08-24-2021-c1-stable-endpoint-rno-fail-idempotence-prereservation.md`.

Le micro-lot est execute puis audite par le master le 2026-08-25. Le theme est pousse a `7bb67efca588913dc80ba877eb2c5e01f0d64f86` avec le seul `sections/milaura-quiz.liquid`; les preuves privees sont poussees a `1ee9c07f27a4f9953ade332a827393271413a2f4`. La restauration republie l objet stocke sans le reecrire, tandis qu un nouveau quiz cree toujours un nouvel objet. RNO3 passe : un rejeu reste a une remise, une cle et un digest sans faux conflit ; un nouveau quiz passe a deux remises, deux cles et deux digests avec vrai conflit et resolution explicite. RNO4 passe sur les etats sans commande a 360, 390, 430 et 1440 px, clavier et focus compris. Purge et rollback passent sans resurrection. Le pullback master du quiz est bit a bit identique au commit, Theme Check reste a zero erreur et le theme `205027279193` reste non publie.

RC4 passe donc en `PASS PRIVE`. RC8 passe sur la couverture sans commande mais reste `PARTIEL GLOBAL` tant que les etats avec commandes ne sont pas prouves. RC5 reste partiel, RC6 ferme avec NO-GO conditionnel et RC7 reste ouvert. Le commit `7bb67efc` reste une preuve du RC prive : aucune integration master, release, publication ou mise en ligne n est autorisee. Cloture : `docs/checkpoints/2026-08-25-0824-c1-idempotence-rno-pass.md`.

Le master pre-reserve ensuite C1 O1 sans l executer. Ce lot prive part de `1ee9c07f`, ecrit seulement une nouvelle zone de preuves et utilise une configuration Shopify locale nommee, jamais versionnee, avec `write_orders` temporaire. Une seule commande associee au compte synthetique RNO1 est autorisee : `test: true`, inventaire `BYPASS`, aucune donnee de contact dans le payload et notifications commande ou fulfillment explicitement a `false`. Elle doit prouver `orders-no-diagnostic` puis `complete`, la pierre favorite, les destinations et la QA responsive, avant suppression sous confirmation destructive, retrait du scope et rollback complet. Aucun fichier theme, code RC, Mail, app deploy/release, Admin production, integration ou live. Le lot attend le GO exact de Patrice dans `docs/checkpoints/2026-08-25-0847-c1-orders-private-qa-reservation.md`.

O1 ferme ensuite son preflight a `ab21c0df5946cd8b79b782d075dd8d00e5044404` avec `O1_PREFLIGHT_BLOCKED_VARIANT_ABSENT - ZERO_ORDER_MUTATION - SCOPES_UNCHANGED - ROLLBACK_PASS`. RNO1 est exact et sans commande, mais aucun produit du dev store ne correspond au handle Obsidienne du registre RC5. La configuration `write_orders` n a jamais ete appliquee. Aucun app dev, backend, flag, setting, commande, produit, stock, Mail ou notification n a ete touche.

Le master pre-reserve O1-S separement depuis `ab21c0d`. Une configuration locale nommee peut ajouter temporairement `write_products`, `write_publications` et `write_orders` sur la development preview. Elle cree avec `productSet` un seul produit et variant synthetiques portant l exact handle RC5 `bracelet-obsidienne-flocon-de-neige`, le publie seulement sur Online Store du dev store protege, puis cree une commande `test`, `PAID`, `FULFILLED`, inventaire bypass et notifications false. Le statut execute est necessaire car le calcul de pierre favorite ignore les commandes non executees. Apres QA, l unique commande et l unique produit sont supprimes sous confirmation destructive, les trois scopes sont retires et le rollback complet est prouve. Aucun catalogue MilAura, theme, code RC, Mail, stock, deploy/release, integration ou live. Cadre et GO exact : `docs/checkpoints/2026-08-25-0914-c1-o1-seed-orders-qa-reservation.md`.

O1-S passe ensuite son preflight et cree l unique produit QA, mais la publication echoue avant mutation car sa selection demande `code` sur le type generique `UserError`, qui expose seulement `field` et `message` en 2026-10. Zero publication et zero commande. Apres confirmation destructive de Patrice, la suppression rencontre la meme erreur avant mutation. Le produit reste present et les scopes temporaires restent actifs pour conserver la capacite de rollback. Le master reserve O1-SR sur la meme branche : une seule requete `productDelete` minimale corrigee, ciblee sur le meme ID prive, puis preuve d absence et rollback integral. Aucun nouveau GO destructif n est requis et aucune publication, commande ou autre mutation n est autorisee. Cadre : `docs/checkpoints/2026-08-25-0943-c1-o1s-product-delete-recovery-reservation.md`.

O1-SR passe ensuite au commit prive `99fdaea03889d9dcd9fc6e240f338cb0698b0863`. La suppression minimale reussit une seule fois, produit, variant, media et handle sont absents, RNO1 reste a zero commande, les trois scopes sont retires et le rollback est complet. Worktree propre `0/0`, aucun listener. O1-S et O1-SR sont fermes et geles sans progres RC7 ou RC8 commandes.

Le master pre-reserve O2 depuis `99fdaea`. Sa premiere gate valide en read-only le schema effectif de cinq mutations et fige des selections minimales sans champ `code` avant tout scope. Apres GO, O2 peut recreer un produit QA Obsidienne, le publier uniquement sur Online Store du dev store protege, creer une commande `test`, `PAID`, `FULFILLED`, inventaire bypass et notifications false, terminer la QA des etats commandes, puis supprimer exactement les deux objets apres confirmation destructive et restaurer tout le runtime. Aucun code, theme, Mail, stock, catalogue, deploy/release, integration ou live. Cadre et GO exact : `docs/checkpoints/2026-08-25-0956-c1-o2-orders-private-qa-reservation.md`.

O2 recoit son GO exact, cree sa branche et son worktree propres a `99fdaea`, puis valide le schema 2026-10 des cinq mutations. Son premier preflight combine echoue sans scope et sans mutation uniquement parce que `publications` exige `read_publications`. Shopify confirme qu un scope d ecriture inclut la lecture correspondante. Le master amende donc seulement l ordre : preflight general avec scopes absents, activation des trois scopes deja reserves, lecture de l unique publication via `write_publications`, arret avant `productSet` si ambiguite. Aucun `read_publications` explicite, aucun quatrieme scope et aucun nouveau GO. Cadre : `docs/checkpoints/2026-08-25-1010-c1-o2-publication-preflight-amendment.md`.

Le preflight restant rencontre ensuite la meme limite read-only sur `products`, qui exige `read_products`. La cloture O1-S/O1-SR a `99fdaea`, base exacte de la branche O2 sans mutation depuis, prouve deja le handle absent. Le master accepte cette preuve heritee avant scope, puis exige apres activation des memes trois scopes une lecture immediate de `products` et `publications`, avec handle toujours absent et publication unique avant `productSet`. Aucun read scope explicite, aucune mutation et aucun nouveau GO. Cadre : `docs/checkpoints/2026-08-25-1012-c1-o2-products-preflight-amendment.md`.

O2 ferme ensuite toutes ses gates au commit prive `e863fc100ccae47ff1c8a43cdfeccef763f4bcd4`. Une commande test unique `PAID` et `FULFILLED` et un produit QA publie seulement sur l Online Store du dev store valident `orders-no-diagnostic`, `complete`, mapping, media, pierre favorite, destinations, responsive, clavier et focus. Mail observe zero message. Apres confirmations Patrice, diagnostic, commande et produit sont supprimes sans retry. Produit, variant, media, handle, publication et commande sont absents, RNO1 a zero commande, scopes temporaires absents, backend URL vide, flag false, theme non publie et runtime arrete. RC7 devient `PASS PRIVE O2` et RC8 `PASS PRIVE` avec et sans commande. RC5, RC6 et le RC global restent ouverts. Cloture : `docs/checkpoints/2026-08-25-1228-c1-o2-orders-qa-pass.md`.

Mail reste proprietaire de ses dix surfaces compte gelees. Son HEAD `add705ff` est propre et aligne ; six Notifications et trois Messaging sont canoniquement live, sans nouvelle verification Admin le 2026-08-23. C1 RC coordonne et documente seulement. Aucun email, template, automation ou reglage ne peut etre modifie. Le cadre complet et les gates RC0 a RC10 vivent dans `docs/checkpoints/2026-08-23-1100-c1-release-candidate-reservation.md`.

### Gates obligatoires avant une release C1-1

L implementation privee a ferme G0 a G11. Toute future release doit encore fermer les gates suivants :

1. remplacer les six fixtures et les selecteurs QA par les vraies donnees du compte ;
2. lire de facon reelle et bornee commandes, adresses et profil via la surface Customer Accounts retenue ;
3. choisir une source canonique durable du diagnostic, un schema versionne et un consentement explicite de personnalisation ;
4. definir un handoff signe et idempotent depuis `MilauraPreferenceStorage` vers le compte, sans secret navigateur ;
5. assurer la synchronisation inter-appareils, la resolution explicite des conflits et un mode hors ligne date ;
6. garantir la purge locale, panier et serveur avec recu, reprise partielle et prevention de resurrection ;
7. fermer la semantique produit ou variant vers pierre pour historique, retours, annulations, remboursements, egalites, cadeaux et produits sans pierre, sans transformer un mapping fige en catalogue de vente ;
8. brancher un resoluteur dynamique vers les produits et categories Shopify publies, vendables et disponibles, avec prix, URL, media et replis vivants ; retirer toutes les actions simulees et traiter les etats d erreur production ;
9. fermer securite, retention, audit, migration, observabilite, tests de parite et rollback ;
10. valider sur comptes de test, coordonner les emails de compte avec Mail, traiter le francais du shell natif et obtenir un GO Admin distinct avant toute bascule ;
11. obtenir un GO live explicite seulement apres toutes les gates precedentes.

La fin du SEO, Pinterest, Rentree Sodalite, Atelier et inventaire complet ne bloque pas C1. Ruban V3 est deja ferme et live. Pour une release, Mail doit coordonner les emails de compte avant un switch ; le catalogue Shopify vivant doit fermer la resolution dynamique des destinations produit ; un micro-lot theme distinct doit prouver le bridge et la purge locale reels. La fidelite reelle n est pas un prerequis : le bloc `A venir` reste honnete. S1B et S1C sont downstream et ne bloquent pas C1-1.

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

### Ruban V3 adaptatif live depuis le 2026-08-28

Patrice a donne `GO LIVE RUBAN V3` le 2026-08-28. Le lot source final `38497e4b` a ete integre dans `codex/milaura-integration`, pousse sur origin puis publie directement sur le theme live `190430282075`, sans theme de developpement.

Patrice a donne son verdict final le 2026-08-28 a 13:38 CEST : il considere la feature comme finie. Ruban V3 est donc termine et accepte. Aucune reprise n est requise sans anomalie reproductible ou nouvelle demande explicite.

Le runtime affiche les trois candidats ordonnes. Desktop utilise trois cartes a largeur egale ; sous 990 px, le Ruban devient un rail horizontal tactile avec scroll snap, fleches et apercu de la carte suivante. Il exclut le produit consulte, les produits indisponibles, ceux deja presents au panier et ceux sans image de galerie. Il descend successivement du match pierre, type et finition au match proche, a l univers, a la collection puis au catalogue global. La regle canonique est qu aucun Ruban ne doit etre vide tant qu un autre produit eligible existe.

Le rendu utilise exclusivement les images de galerie Shopify. La video et les anciens detourages sont hors chemin critique. Higgsfield reste le seul outil admis pour une future phase video, Grok reste exclu et aucune transformation visuelle du produit n est acceptable.

Le snapshot du 2026-08-28 couvre 318 produits : 318 sources sur 318 ont trois candidats et un payload affichable, 67 cibles passent les gates strictes et le hash de regression est `8fbcace0721d1dad893782b67eff467481b2dc7011792e67e746b0c14bae75f3`. Le push live a porte sur onze fichiers, puis le pullback a confirme 11 sur 11 identiques a Git.

La QA publique valide trois cartes sur le collier aventurine, le repli collection sur la plaque Fleur de Vie, le repli univers sur le pendentif Oeil de Sainte Lucie historiquement exclu, et le passage immediat de trois a deux cartes lorsque le premier candidat est ajoute au panier. Les largeurs 360, 390, 430, 820 et 1440 px sont sans debordement. Checkpoints : `docs/checkpoints/2026-08-28-1020-ruban-v3-gallery-live.md` et `docs/checkpoints/2026-08-28-1322-ruban-v3-three-visible-live.md`.

## Contrat produit

Le commit historique `6c4e6de4` a fixe le contrat produit initial. Le contrat canonique courant V1.3 exige pierres, matieres, couleurs, intentions, occasions, disponibilite, fulfillment, provenance et exactement cinq images V3. Les galeries historiques a trois ou six images ne prouvent pas V3 et ne sont pas migrees automatiquement. Le pipeline reste draft-only et ne modifie ni hub ni collection publique.

Pipeline actif :

`/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation`

## Catalogue physique, reprise courante

L'ancienne tache volumineuse `01a038d2-cc6d-7c81-9ceb-bb08200ef937` reste retiree. Les anciens ledgers restent des preuves historiques, mais ne doivent plus servir de total courant. La source canonique relue le 2026-09-01 contient 185 references positives et 456 unites. Le pull Shopify frais rapproche 118 references et stocks exacts, avec 116 actifs, 2 brouillons et 67 absentes.

Les neuf prix TTC fixes par Patrice sont inscrits dans le Sheet et les six pierres reservees aux avantages client sont marquees `HORS VENTE`. Les couts unitaires de six references fournisseur vendues par lots de 2, 3 ou 5 ont ete normalises sans modifier les lignes d'achat brutes. Aucune fusion de produit n'a ete executee. L'arbitrage variantes est transmis a une session specialisee. La prochaine reference vendable doit etre choisie apres une nouvelle lecture du Sheet et de Shopify, pas depuis l ancienne position 84. Checkpoints historiques : `docs/checkpoints/2026-08-29-0801-inventory-185-camilla-v3.md` et `docs/checkpoints/2026-08-29-1021-inventory-price-dispositions.md`.

Le 2026-08-29, sept anciens brouillons de la vue 185 ont ete remis au contrat courant avant la creation de nouveaux produits. Les EAN `3701459056040`, `3667407007277`, `3701459056088`, `3701459082087`, `3701459081790`, `3701459056163` et `3701459080281` ont chacun exactement cinq images V3, leurs contenus et metafields controles, leur prix, leur cout et leur stock physique. Patrice les a tous valides puis actives sur tous les canaux. L audit Shopify confirme 7 sur 7 `ACTIVE`, avec URL publique, prix et stock exacts. La plaque Oeil d Horus reste live au prix choisi de 8,90 EUR TTC pour 8,20 EUR HT de cout ; ce risque marge est documente et ne doit pas provoquer de correction silencieuse. Checkpoint courant : `docs/checkpoints/2026-08-29-1621-inventory-seven-active-next-ten-handoff.md`.

Le 2026-08-30, le lot suivant de dix a ete reaudite apres activation manuelle de trois fiches. Huit contenus ont ete corriges et les trois galeries actives remises dans l ordre sans remplacement. Le pullback final passe 10 sur 10. Cinq garde-fous generiques ont ete synchronises sans suppression vers le bundle persistant de Camilla, apres sauvegarde VPS ; la parite SHA-256 est 5 sur 5 et le test V1.3 passe dans le conteneur. Les sept fiches qui etaient encore brouillon ont ensuite ete activees manuellement par Patrice.

Le meme jour, l audit qualite du catalogue physique deja actif a detecte 36 fiches avec erreurs de contenu. Patrice a autorise leur correction de contenu uniquement. Le lot passe 36 sur 36, reste 36 sur 36 actif et ne montre aucune derive de statut, stock, prix, cout, handle ou media. Le pull final compte 182 references positives, 447 unites, 96 actifs, 2 brouillons et 84 absents. Checkpoint courant : `docs/checkpoints/2026-08-30-1130-inventory-active-catalogue-content-fix.md`.

La disponibilite client repose d abord sur Shopify natif par variante : quantite reelle pour le physique ; quantite 0 et poursuite de vente seulement pour une reference fournisseur explicitement acceptee ; quantite 0 sans poursuite si indisponible. Aucun stock `Entrant` fictif et aucun faux lieu fournisseur. Un metafield interne reste optionnel et exige un lot Admin separe.

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

1. La nouvelle session master conserve seule l integration et le live a partir de `8fb046588e0309e7875fdae7b2ad6b61d7c6a177` ou plus recent, audite chaque retour et interdit tout merge aveugle de `origin/main`.
2. Reprendre Mon Ecrin dans une session fraiche strictement read-only, auditer les mappings figes et faire reserver par le master le plus petit lot prive de resoluteur dynamique. L objectif est de fermer RC5 sans attendre la fin de l inventaire.
3. Reprendre l inventaire dans une session fraiche en relisant le Sheet et Shopify en direct. Etat date du 2026-09-01 : 185 references, 456 unites, 116 actifs, 2 brouillons et 67 absentes. Le prochain lot provisoire est dans `docs/checkpoints/2026-09-01-1219-inventory-v4-ten-active-crosssell.md` et doit etre rafraichi avant presentation.
4. Apres validation privee du resoluteur, enchainer productionisation C1, integration ciblee, bascule Admin, QA publique et GO live sous gates distinctes. Finition Mail et fondations Pinterest restent paralleles sans chevauchement.
5. Continuer les references vendables absentes ou incompletes par lots controles. Les references `excluded-non-sale` restent physiquement tracees mais hors creation Shopify. Aucun nouveau passage en actif sans validation Patrice et GO Admin distinct.
6. Fermer le feed et Pinterest final sous leurs gates propres. Reprendre le polish UI Rentree Sodalite selon le checkpoint du 2026-08-31, sans gate live heritee.
7. Lancer un pilote Ads borne seulement apres stock, cout complet, marge de contribution, feed, tracking, consentement, conversion et regles d arret verifies.
8. Laisser Atelier des emotions et Pierres de naissance en pause plus longue jusqu a une nouvelle decision de Patrice.
9. Traiter ensuite le rail commercial homepage, Karine et Sur mesure V1, les pages enfants Naissance et Mariage, le Journal, puis S1B et S1C seulement apres C1.
10. Executer enfin le polish SEO et la strategie organique large : DataForSEO cible, audit SEO/AEO/GEO global, performance, accessibilite, comparateurs, netlinking, influence, GA4, GSC, Merchant Center, lifecycle et contenus.

## Dependances encore ouvertes

- inventaire courant : 185 references positives, 456 unites, 116 produits actifs, 2 brouillons et 67 absentes ; 118 correspondances et stocks exacts ; lot V4 du 2026-09-01 ferme 10 sur 10 ; dette media, migration et gates visuelles a traiter uniquement dans des lots separes
- inventaire et retrait controle des 18 baguettes minerales
- treize anciennes collections sans metas definitives
- pages mensuelles de naissance et pages enfants mariage
- GSC, GA4, Merchant Center et Pinterest non verifies
- collection Œil de tigre publique avec quatre bijoux, sous le seuil editorial prefere de cinq
- parcours checkout reel du point relais non confirme
- stock, couts, delais et tracking avant acquisition payante
- Atelier de Karine : composants, faisabilite, prix, stock, photos et rendu d'apercu
- Ruban V3 : ferme et live sur `190430282075` depuis le 2026-08-28 ; 318 sources sur 318 ont trois candidats dans la regression, le runtime affiche les trois, exclut le panier et garantit les replis univers, collection puis catalogue ; desktop trois cartes egales, rail tactile sous 990 px, pullback final 2 sur 2 identique
- Ruban V2 : historique remplace par V3 pour le rendu PDP ; ses anciens placements Search & Discovery restent une source prioritaire lorsque valides, mais les anciens detourages ne sont plus utilises par le chemin critique V3
- mobile root overflow : corrigé live par `be96a5d1`, pullback bit à bit et QA publique 360/390/430 validés ; ne rouvrir que sur régression reproductible
- diagnostic navigateur soumis au consentement et live ; aucune source cliente durable ni persistance entre appareils
- C1 V3 privee fermee a `d8d036ff` et C1-1 prive ferme a `cf2877ba` ; correctif d idempotence ferme a `7bb67efc`, preuves sans commande `1ee9c07f`, preuves commandes `e863fc10`, RC4, RC7 et RC8 PASS prive ; RC5 doit etre ferme par le resoluteur dynamique independant de l inventaire complet ; RC6 reste ouvert sur le shell natif anglais ; aucun droit C1-2, app deploy/release, Admin, bascule, email, integration theme ou live
- E1, E2 et E3 fermes le 2026-08-20 ; notifications transactionnelles testees mais reprise creative E4 encore ouverte
- regression du bandeau cookies fermee par `aa3a9930`, poussee sur developpement puis live `190430282075` apres GO ; pullback et QA publique desktop/mobile valides
- miroir automatique `origin/main` incomplet pour les trois nouveaux assets cookies au commit `004ce94f` ; canonique et pullback live restent les preuves du lot
- miroir automatique `origin/main` incomplet pour le nouvel asset `assets/milaura-preference-storage.js` au commit `1dccd18c` ; le correctif `763d7ad9` est complet, mais le canonique et les pullbacks restent les preuves du lot 1
- Rentree Sodalite : baseline live fermee techniquement ; verdict produit Patrice a environ 70 % ; polish UI et ameliorations ciblees ouverts selon `docs/checkpoints/2026-08-31-0735-sodalite-ui-polish-handoff.md`
- rail commercial `Nouveautes / Meilleures ventes / Promotions` non construit et a maintenir hors du lot Rentree si les fichiers se chevauchent
- Karine, preuves d atelier et Sur mesure V1 non termines
- pages enfants Naissance et Mariage, Journal et clusters encore ouverts
- S1B et S1C sont downstream de C1 mais ne bloquent pas l implementation privee C1-1 ; ne jamais restaurer le Scratch sur panier ou PDP
- E4 a E7 encore ouverts malgre la fermeture E1 a E3
- paid bloque par la gate inventaire, economie, feed, consentement, tracking, conversion et mesure

## References de reprise

- `docs/checkpoints/2026-08-30-1130-inventory-active-catalogue-content-fix.md`
- `docs/checkpoints/2026-08-30-0906-inventory-next-ten-content-fix.md`
- `docs/checkpoints/2026-08-26-1642-master-role-inventory-correction.md`
- `docs/checkpoints/2026-08-26-1620-master-catalogue-60-handoff.md`
- `docs/checkpoints/2026-08-24-1350-c1-m4-admin-session-recovery.md`
- `docs/checkpoints/2026-08-24-1344-c1-otp-address-correction-go.md`
- `docs/checkpoints/2026-08-24-1215-c1-otp-address-correction-prereservation.md`
- `docs/checkpoints/2026-08-24-1210-c1-otp-route-mismatch-mail-preflight.md`
- `docs/checkpoints/2026-08-24-0936-c1-otp-manual-identity-confirmation.md`
- `docs/checkpoints/2026-08-24-0929-c1-otp-admin-identity-correlation-reservation.md`
- `docs/checkpoints/2026-08-24-0926-c1-otp-route-correlation-reservation.md`
- `docs/checkpoints/2026-08-24-0920-c1-otp-delivery-readonly-reservation.md`
- `docs/checkpoints/2026-08-24-0821-c1-rc-runtime-no-orders-reservation.md`
- `docs/checkpoints/2026-08-24-0718-c1-release-candidate-session-handoff.md`
- `docs/checkpoints/2026-08-23-1936-c1-rc-rc10-corrections-reaudit.md`
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
