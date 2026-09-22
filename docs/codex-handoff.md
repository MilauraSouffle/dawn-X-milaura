# Handoff Codex MilAura

## Chantier actif : Home Occasion et Pierre du moment

Date de decision : 2026-09-22

Patrice a valide l architecture durable de la section 2. La section 2 devient `Home Occasion`, un slot commercial recurrent pour Automne, Noel, Saint-Valentin, Fete des Meres, soldes et autres temps forts valides. Chaque grande occasion conserve sa propre URL permanente et passe de `DRAFT` a `ACTIVE`, puis `OFF_SEASON`. Une page hors saison reste utile, en HTTP 200, indexable et reliee depuis le futur hub `Selections saisonnieres et idees cadeaux`. Aucun dossier public `Archives` n est cree.

La section Aigue-marine plus basse devient `Pierre du moment`. Elle change de pierre mais pointe toujours vers une page pierre permanente `/collections/par-pierre-...`. Elle ne doit pas etre confondue avec Home Occasion.

Contrat canonique : `docs/reference/HOME-SECTION-2-OCCASIONS.md`.
Registre machine : `docs/reference/milaura-home-occasion-registry.json`.
Workstream : `codex/milaura-seasonal-occasion-system-20260922` dans `/Users/paesano/Documents/MilAura website/_worktrees/seasonal-occasion-system-20260922`.

Etat au 2026-09-22 14:11 CEST : preview Automne prete sur le theme prive `200259043675`, GO visuel Patrice en attente. La section generique `sections/milaura-selection-atelier.liquid` accepte maintenant trois visuels produit decoratifs en plus des medias video desktop et mobile. `templates/index.json` configure `Le grenat pour entrer dans l automne` et le CTA global `/collections/selection-automne`. Aucun lien individuel vers les huit produits encore absents ou en brouillon n est publie. Aucun changement live, Admin, collection, produit, stock, prix, canal, Ads ou Pinterest.

La QA navigateur confirme le rendu mobile `390 x 844`, le rendu responsive desktop, les bons medias selon le breakpoint, l absence de debordement et une console vide. La section et les sept medias sont identiques apres pullback. Shopify a normalise dans le theme de preview six reglages Hero inconnus de son ancien schema ; le bloc `bestsellers` reste conforme et le theme live n est pas touche. Theme Check reste a 0 erreur avec 16 avertissements historiques hors lot. Checkpoint : `docs/checkpoints/2026-09-22-1411-autumn-home-preview.md`.

Etat au 2026-09-22 16:57 CEST : preview recadree en `Grenat & cornaline` sur le meme theme prive. La home n utilise aucun mannequin. Desktop presente le collier grenat 6 mm, les boucles pendantes grenat 12 mm, le bracelet grenat 8 mm et le bracelet cornaline 10 mm ; mobile masque le bracelet grenat 8 mm et conserve trois sujets lisibles. QA mobile `390 x 844` : largeur document 390, aucun overflow, video 8 secondes `readyState=4`, trois images visibles chargees, CTA et titre visibles, console vide. Le live et Shopify Admin restent intacts.

Le moteur PDP existant n est pas remplace. Apres activation des trois produits grenat en DRAFT et validation du perimetre, la campagne utilisera des produits complementaires reciproques Search and Discovery : meme pierre prioritaire, une proposition de l autre pierre de campagne, puis un type de bijou compatible. Aucune configuration Admin n est executee dans ce lot.

Blocage exact avant la landing : tout le brief parle de grenat et cornaline, mais sa derniere phrase demande grenat et aigue-marine. La home privee suit grenat et cornaline ; collection, landing et pool de recommandations attendent la confirmation de Patrice. Checkpoint : `docs/checkpoints/2026-09-22-1657-autumn-garnet-carnelian-preview.md`.

Etat au 2026-09-22 17:17 CEST : le montage par photos separees a ete refuse puis remplace. La section utilise maintenant une composition transparente unique par breakpoint, generee nativement a partir des quatre references produit : `assets/milaura-automne-2026-composition-bijoux-desktop-v2.webp` et `assets/milaura-automne-2026-composition-bijoux-mobile-v2.webp`. Aucun mannequin, fond, texte ou feuille n est integre dans ces assets : la video reste le fond et les bijoux sont le sujet. QA privee PASS a `390 x 844` et `1440 x 900`, sans rectangle parasite ni overflow. Pullback exact de la section et des deux WebP ; bloc `bestsellers` conforme. Le live et Shopify Admin restent intacts. Checkpoint : `docs/checkpoints/2026-09-22-1717-autumn-transparent-composition.md`.

Etat au 2026-09-22 17:27 CEST : Patrice a refuse la V2, qui gardait un collier entier centre et des boucles flottantes. La V3 est reconstruite avec le collier place haut et coupe par le bord du cadre, les bracelets entrelaces conserves, et les boucles suspendues a une branche fine visible. Les assets actifs sont `assets/milaura-automne-2026-composition-bijoux-desktop-v3.webp` et `assets/milaura-automne-2026-composition-bijoux-mobile-v3.webp`. QA privee PASS a `390 x 844` et `1440 x 900`, video 8 secondes chargee, aucun overflow ni erreur media. Pullback exact. Le live et Shopify Admin restent intacts. Checkpoint : `docs/checkpoints/2026-09-22-1727-autumn-composition-v3.md`.

```text
Reprends le systeme Home Occasion de MilAura depuis docs/checkpoints/2026-09-22-1411-autumn-home-preview.md. Lis AGENTS.md, docs/reference/HOME-SECTION-2-OCCASIONS.md, docs/reference/milaura-home-occasion-registry.json et docs/workstreams.md. La preview Automne est sur le theme prive 200259043675 et attend le GO visuel de Patrice. Ne pousse rien sur le live. Apres GO, verifie que les neuf produits voulus sont ACTIVE et accessibles, puis cree ou configure la collection permanente /collections/selection-automne et sa landing avant de demander un GO Admin puis un GO live. La section 2 reste le slot commercial recurrent et ne doit jamais etre confondue avec Pierre du moment. Aucun Ads ou reseau social avant release publique verifiee.
```

```text
Reprends le systeme Home Occasion depuis docs/checkpoints/2026-09-22-1657-autumn-garnet-carnelian-preview.md. La preview privee 200259043675 affiche Grenat & cornaline sans mannequin et attend le GO visuel de Patrice. Commence par lui faire confirmer si la landing doit couvrir grenat plus cornaline ou grenat plus aigue-marine, car sa derniere phrase contredit le reste du brief. Ne cree ni collection ni landing et ne modifie aucun produit complementaire avant cette confirmation. Les trois references grenat 10745886835035, 10745961644379 et 10746009944411 sont DRAFT au controle du 2026-09-22 ; verifier leur etat courant avant tout lien. Aucun live, Ads, Pinterest ou reseau social par deduction.
```

```text
Reprends la correction visuelle Automne depuis docs/checkpoints/2026-09-22-1717-autumn-transparent-composition.md. Le theme prive 200259043675 utilise une composition transparente native desktop et mobile avec collier grenat, boucles grenat, bracelet grenat et bracelet cornaline, sans mannequin. Le rendu a passe la QA 390 x 844 et 1440 x 900, mais attend le GO visuel de Patrice. Ne reviens jamais au montage de photos rectangulaires. Aucun live ni Admin par deduction. La landing reste bloquee tant que Patrice n a pas tranche la contradiction grenat plus cornaline contre grenat plus aigue-marine.
```

```text
Reprends la composition Automne V3 depuis docs/checkpoints/2026-09-22-1727-autumn-composition-v3.md. La preview privee 200259043675 montre le collier haut et coupe, les deux bracelets entrelaces et les boucles suspendues a une branche fine. La QA technique mobile et desktop est PASS, mais le nouveau GO visuel de Patrice reste obligatoire. Ne reutilise pas la V2 rejetee. Aucun live ni Admin par deduction.
```

Date : 2026-09-19 21:39 CEST

Statut : `PDP V2 ADAPTATIVE FERMEE, INTEGREE, POUSSEE ET LIVE VERIFIEE`

Patrice a donne le GO exact `GO LIVE PDP V2 ADAPTATIVE`. La nouvelle page produit est live sur le theme public `190430282075` et utilise une architecture unique qui adapte ses libelles et ses contenus aux familles bijou, pierre/mineral, bougie/senteur, rituel, soin et accessoire.

Les templates canoniques `templates/product.json` et `templates/product.milaura-produit.json` partagent la meme V2. Le catalogue audite de 219 produits actifs passe donc sur la nouvelle PDP sans reaffectation Shopify Admin. Les nouveaux produits utilisent aussi la V2 par defaut. Les produits non encore enrichis restent fonctionnels grace au fallback sur leurs images et donnees existantes.

Le contrat media definitif est documente dans `docs/reference/2026-09-19-pdp-v2-data-contract.md` : H01 a H05 pour la galerie commerciale, H06 pour la projection editoriale hors galerie et E01 a E03 pour les blocs narratifs. Le theme consomme `milaura.pdp_media_manifest`; les ALT publics restent descriptifs. Le workflow creatif peut maintenant produire et publier progressivement les medias et metachamps sans attendre une autre refonte PDP.

Source fonctionnelle `26aeee70`, integration `a14d55d4`, documentation live `bf85bba7`. Quatorze fichiers exacts ont ete deployes avec `--allow-live --nodelete --strict`, puis verifies par pullback `14/14` identique. Tests de contrat `12/12`, JavaScript valide, Theme Check a 0 erreur et 16 avertissements historiques hors lot. QA publique validee a `390 x 844` et `1440 x 900` sur six produits representant les six familles : aucun debordement, aucune image cassee, CTA present, onglets fonctionnels et mise en page technique texte a gauche, photo a droite sur desktop.

Aucun produit, prix, stock, collection, canal ou media Shopify Admin n a ete modifie pendant le deploiement theme. Le theme prive `201381216603` reste disponible comme preuve de preview. Les deux fichiers doublons non suivis `sections/milaura-product-narrative-v2 2.liquid` et `sections/milaura-product-reassurance-v2 2.liquid` sont preserves, mais restent hors Git et hors live.

Le checkout principal contient des modifications concurrentes dans `AGENTS.md`, `docs/project-state.md`, quatre fichiers de campagne et `docs/project-state-ledger.md`. Elles sont preservees et n appartiennent pas au lot PDP. `docs/project-state.md` n est donc pas reecrit dans cette cloture.

Checkpoint final : `docs/checkpoints/2026-09-19-2139-pdp-v2-adaptive-live-handoff.md`.

## Prompt de reprise

```text
Reprends MilAura depuis docs/checkpoints/2026-09-19-2139-pdp-v2-adaptive-live-handoff.md. La PDP V2 adaptative est fermee, integree et live sur le theme 190430282075. Les templates product.json et product.milaura-produit.json partagent la meme V2 et couvrent les six familles bijou, pierre/mineral, bougie/senteur, rituel, soin et accessoire. Ne redeploie rien par deduction. Le workflow creatif peut maintenant enrichir les produits avec milaura.pdp_media_manifest selon le contrat H01 a H06 et E01 a E03. Pour tout nouveau produit, verifie seulement le rendu public de ses vrais medias, textes et metachamps sur mobile et desktop. Preserve les modifications concurrentes du checkout principal et les deux doublons non suivis * 2.liquid.
```

## Historique de passation

> Bandeau fixe des avantages, 2026-09-14 16:03 CEST : LIVE VERIFIE. Le bandeau rose recent a trois avantages de `449cabc1` a ete restaure apres la recuperation globale : un seul fichier `sections/milaura-announcement.liquid`, recette preview, push live cible `--nodelete` et pullback identique SHA-256 `ba461da8938441708afbf558b8b5af11ce89e39eb757fde315505870d13c56a5`. Accueil public relu a 390 et 1440 px, fleche et compteur `1/3` a `3/3` fonctionnels, sans erreur navigateur. [Checkpoint](checkpoints/2026-09-14-1603-announcement-banner-live-recovery.md).

> Reprise prioritaire, 2026-09-14 15:51 CEST : RECUPERATION LIVE TERMINEE. Le theme `190430282075` a ete restaure depuis `7d279bcc`, avec les trois correctifs quiz plus recents conserves. Le pullback final, les verifications publique mobile et desktop, le diagnostic et la collection bijoux sont conformes. La branche de secours `codex/milaura-live-recovery-20260914` contient la source de cette reprise. Ne pas pousser depuis le checkout local `00406d5a`, qui est en retard et sale. [Checkpoint](checkpoints/2026-09-14-1551-controlled-live-recovery.md).

> Mise a jour, 2026-09-14 15:20 CEST : instruction directe de Patrice, ne jamais reutiliser `HERO CHLOE`. La section et ses visuels sont supprimes du source. Le Hero aigue-marine est de nouveau live avec son nom d asset SEO `milaura-hero-bijoux-pierres-naturelles-obsidienne-sodalite-*.webp`, un H1 unique et la section Sodalite en H2. La suppression physique de l ancienne section et de ses assets du theme live reste a faire fichier par fichier dans Shopify Admin, car Shopify CLI ne fournit pas une suppression ciblee sure.

> Reprise prioritaire, 2026-09-13 11:56 CEST : cette session est arretee sur demande de Patrice. La page certificats, le bandeau rose des avantages et le Hero mobile valide restent live sur `190430282075`. Le Hero est integre et pousse au commit `19fbc918`, avec pullback identique et QA publique conforme. Le profil checkout actif `MilAura Checkout UX 2026-09-13`, ID `9395241307`, est conserve sans nouvelle sauvegarde. La prochaine session doit traiter uniquement le checkout, commencer en lecture seule et ne rien modifier avant le GO exact de Patrice. Le checkout principal local est tres sale et 66 commits derriere l integration distante : ne jamais le nettoyer ni y faire de staging large. Le lot certificats live reste a reconcilier dans Git. [Handoff complet et prompt de reprise](checkpoints/2026-09-13-1156-certificats-checkout-hero-handoff.md).

> Reprise prioritaire, 2026-09-13 08:15 CEST : le correctif CTA multilignes est ferme, integre et live. Les trois guides utilisent maintenant un seul filet dore sous le bloc CTA complet, meme lorsque le libelle occupe deux lignes. Commit fonctionnel `725cf31e`, theme public `190430282075`, pullback CSS identique SHA-256 `bc3811ea7dae56912179ecf5f3f5c3823f92cb87c3995086a7c76059f44f2ef5`. QA publique 390/1028, trois guides et deux surfaces produits globales sans double trait, debordement ni erreur. Ne redeployer aucun fichier par deduction. [Checkpoint](checkpoints/2026-09-13-0815-multiline-guide-cta-live.md).

> Reprise prioritaire, 2026-09-12 19:42 CEST : le lot des actifs pierre est ferme et live. Ne redeployer aucun fichier par deduction. Les trois pages `/pages/trouver-votre-pierre`, `/pages/atlas-des-pierres` et `/pages/entretien-des-pierres` sont publiques, indexables et groupees en tete de `Guides` sur desktop et mobile. `/pages/pierres-de-naissance` conserve son contenu canonique et son Hero a trois bracelets valide. Theme live `190430282075`, source fonctionnelle et integration `a42614c7` avant la cloture documentaire, worktree de production propre. Prochaine conversation : cadrer le quiz Ads lead-gen comme un chantier neuf. Aucun formulaire, email, consentement, remise, automatisation, campagne ou budget n a encore ete decide ou lance. [Handoff final](checkpoints/2026-09-12-1942-owned-stone-pages-session-handoff.md).

> Grand Jeu MilAura, 2026-09-12 17:48 CEST : correction live terminee. Heros, texte alternatif, periode visible et footer affichent `09 au 19 septembre`. Les participations restent closes le 18 a 23 h 59 et le tirage reste le 19 a 12 h, ce qui est explicite sur la landing. Six fichiers cibles publies sur `190430282075`, pullback et HTTP publics conformes. Aucun reseau social ni budget modifie. Source fonctionnelle `75410371`, integration distante alignee par fast-forward. [Checkpoint](checkpoints/2026-09-12-1748-grand-jeu-dates-live.md).

# Handoff final : hubs de choix et conseils de Karine

Date : 2026-09-12 18:02 CEST

Statut : `VALIDE PAR PATRICE, INTEGRE, POUSSE ET LIVE VERIFIE`

La refonte de `/pages/bijoux-par-pierre` est fermee. Le Hero V5 clair, la profondeur mobile limitee a huit cartes, le repertoire compact des trente-neuf pierres et la selection finale de quatre bijoux sont live sur `190430282075`. Les quatre hubs affichent `Karine vous conseille 6j/7` ; une relecture publique du 2026-09-12 confirme la phrase exacte une fois par page, l ancien `Service humain` absent et le theme public attendu. Les fiches produit restent volontairement hors perimetre avec `Équipe disponible 6j/7`.

Reprise uniquement sur regression reproduite ou nouvelle demande explicite. Ne redeployer aucun fichier par deduction et ne reprendre aucun changement du checkout principal sale. Le checkpoint final contient le perimetre, les commits, les preuves, les limites et le prompt de reprise : [2026-09-12-1802-karine-trust-copy-live-handoff.md](checkpoints/2026-09-12-1802-karine-trust-copy-live-handoff.md).

# Choix par pierre : profondeur mobile live et lot ferme

Date : 2026-09-10 08:40 CEST

Statut : `VALIDE PAR PATRICE, INTEGRE, POUSSE ET LIVE VERIFIE`

```text
Reprends MilAura depuis docs/checkpoints/2026-09-09-1604-stone-choice-mobile-depth-preview.md. La nouvelle profondeur mobile du choix par pierre est deja live sur le theme 190430282075 et verifiee. Ne redeploie pas ces trois fichiers par deduction. La page montre huit grandes cartes sur mobile, puis les trente-neuf pierres dans un repertoire compact, et quatre creations avant le footer. Le bureau conserve les trente-neuf cartes en grille. Toute nouvelle iteration repart en lecture seule du storefront public et de origin/codex/milaura-integration.
```

Integration fonctionnelle `4d7df8a3`, pullback Shopify `3/3` identique et QA publique 390/1440 conforme. Aucun produit, stock, prix, collection, fiche pierre, Admin ou Ads modifie. [Checkpoint complet](checkpoints/2026-09-09-1604-stone-choice-mobile-depth-preview.md).

# Grand Jeu MilAura : landing live, reprise sur les dix visuels organiques

Date : 2026-09-09 16:32 CEST

Statut : `LANDING V2 LIVE ET VERIFIEE ; CREATIONS QUOTIDIENNES A PRODUIRE`

```text
Reprends le Grand Jeu MilAura depuis docs/checkpoints/2026-09-09-1632-grand-jeu-live-handoff.md. La landing V2 est deja live et verifiee sur le theme 190430282075, source 9fb4b44c et integration 2e8776c4. Ne redeploie pas la page par deduction. Commence en lecture seule, puis produis avec Patrice les dix visuels organiques quotidiens, un par cadeau du jour, en conservant la direction nacre, prune et or du master valide. Camilla et Karine gerent la strategie et les textes des publications ; ne les ecrase pas. Pinterest est exclu. Les deux publications principales Meta ne sont pas encore publiees : une fois leurs permaliens disponibles, remplacer les CTA de profils de la landing par ces liens dans un lot cible. Verifier ou aligner le prix public de la bague du jour 2 a 11 EUR avant diffusion commerciale. Aucun Ads ni budget media sans GO explicite.
```

La page publique est `https://milaura.fr/pages/jeu-concours-10-jours-10-cadeaux`. Elle contient le bento responsive, les conditions, le reglement en quatorze articles, les dix cartes cliquables et le footer concours. Le live a ete controle par pullback 7/7, HTTP 200 et QA navigateur desktop/mobile. Aucune publication sociale ou depense n'a ete executee par Codex. [Checkpoint complet](checkpoints/2026-09-09-1632-grand-jeu-live-handoff.md).

# Handoff Hero accueil mode MilAura : mission terminee

Date : 2026-09-09 13:26 CEST

Statut : `VALIDE PAR PATRICE, INTEGRE, POUSSE ET LIVE VERIFIE`

```text
Reprends MilAura depuis docs/checkpoints/2026-09-09-1326-home-hero-fashion-handoff.md. Le nouveau Hero mode est termine, valide par Patrice et live sur le theme 190430282075. Ne le redeploie pas par deduction. Commence toute future reprise en lecture seule depuis origin/codex/milaura-integration et le storefront public. Preserve les deux images Chloe validees et n utilise jamais l ancienne image mobile rejetee avec l oeil ferme. Si Patrice demande une nouvelle iteration, reserve d abord la section Hero et un theme prive, puis separe preview, validation visuelle, integration et live.
```

Release fonctionnelle `ee2d4eff`, documentation live `f2832f63`, trois fichiers Shopify relus identiques. QA publique `360/390/430/1440`, H1 sur deux lignes, yeux de Chloe degages, Dancing Script, CTA editorial de 48 px et destination collection verifies. Aucun produit, stock, prix, template, Admin ou Ads modifie. [Checkpoint complet](checkpoints/2026-09-09-1326-home-hero-fashion-handoff.md).

# Handoff SEO, performance et autorite : live verifie

Date : 2026-09-08 19:16 CEST

Statut : `TROIS TACHES EXECUTEES ET VERIFIEES, ADS NON LANCEES`

```text
Reprends MilAura depuis docs/checkpoints/2026-09-08-1916-seo-performance-authority-live.md. Les trois taches SEO, performance et autorite sont executees et verifiees. Ne redeploie pas les sept fichiers par deduction. Commence en lecture seule par les reponses de la vague d outreach et les donnees reelles de vitesse. FemininBio est un echec de delivrance sur ses deux adresses publiques et ne doit pas etre retente sans nouveau contact confirme. Les Ads restent interdites tant que stock, marge contributive, Purchase Pixel/CAPI et budget ne sont pas valides ensemble. Preserve la revue catalogue manuelle de Patrice et tous les travaux concurrents.
```

Theme live `190430282075`, pullback `7/7`, puis preload responsive du Hero relu identique dans `layout/theme.liquid`. QA publique 390/1440. PageSpeed final mobile `70`, bureau `89`, SEO `100`; face au run avant lot, mobile `+5`, LCP `-0,3 s`, FCP `-0,6 s`, TBT `-100 ms`. Le LCP froid reste un chantier ; Shopify RUM et Search Console restent bons. Premiere vague : neuf messages sans rejet immediat et FemininBio en echec `550 5.4.1` sur deux adresses. [Checkpoint complet](checkpoints/2026-09-08-1916-seo-performance-authority-live.md).

# Handoff catalogue : Patrice reprend la revue manuelle

Date : 2026-09-08 16:36 CEST

Statut : `SESSION FERMEE, PATRICE CONTROLE ET ACTIVE LES PRODUITS UN PAR UN`

```text
Reprends MilAura depuis docs/checkpoints/2026-09-08-1636-catalogue-patrice-manual-review-handoff.md. Patrice a repris lui-meme la revue et l'activation des vingt et un produits annonces, un par un. Commence exclusivement en lecture seule et demande-lui s'il a termine avant de toucher au catalogue. Ne modifie aucun produit qu'il est encore en train de controler. Ensuite, audite d'abord les modifications effectuees par Camilla le 2026-09-07 et fournis la liste exacte des produits et champs touches sans correction. Le workflow V4.2 est deploye : Sol exclusivement, aucun grade fournisseur dans titre ou SEO title, image portee en position 2 pour les bijoux, onglet pierre pertinent, nouveaux produits DRAFT et aucun canal active par un agent. Traite les anciennes fiches en rupture et les bougies dans des lots separes. Les bougies sont une collaboration Patrice et Maison Candella, jamais un produit Camille Ambiance Nature. Aucun batch, changement de statut, prix, stock, handle, galerie, collection, redirection ou canal sans nouvelle liste fermee et GO explicite.
```

Etat complet, limites, dernier etat Shopify connu du bracelet et inventaire des travaux ouverts : [handoff final du 2026-09-08](checkpoints/2026-09-08-1636-catalogue-patrice-manual-review-handoff.md). Preuves techniques V4.2 : [checkpoint Camilla](checkpoints/2026-09-08-1626-product-workflow-v4-2-camilla-handoff.md).

# Catalogue : cinq enrichissements en DRAFT et baguette Pyrite retiree

Date : 2026-09-08 09:50 CEST. Patrice a retenu cinq anciennes fiches et a demande le retrait de la baguette Pyrite. La baguette `10357681619291` reste conservee dans Shopify mais est maintenant `DRAFT`, stock zero, `onlineStoreUrl=null` et n'apparait plus sur le storefront. Aucun enrichissement n'a ete applique a cette fiche.

Les cinq produits retenus ont ete verifies disponibles chez Camille Ambiance Nature le 2026-09-08, reecrits avec Sol, equipes d'une galerie V4.1 de cinq images et appliques dans Shopify Admin. Ils restent tous `DRAFT`, `onlineStoreUrl=null`, suivis avec politique `DENY` et quantite interne de preparation egale a 1. Le marqueur `milaura.availability_mode=supplier-backed` et le statut fournisseur `disponible` servent au pilotage interne. Cette quantite ne constitue pas un stock physique et n'autorise aucune publication.

Resultat relu apres production : Bracelet baroque en seraphinite AA, 12,90 EUR ; Collier en jaspe rouge 6 mm, 17,90 EUR ; Collier en pyrite 8 mm, 22,90 EUR ; Pendule hexagonal en labradorite AB, 9,90 EUR ; Pendule hexagonal en oeil de tigre A, 9,90 EUR. Le collier Jaspe rouge porte maintenant le SKU et code-barres `3701459074594`. Le pendule Oeil de tigre passe de 12,50 a 9,90 EUR conformement au prix public CAN par piece. Les cinq descriptions de pierre ont ete relues dans Shopify et decrivent la pierre, ses variations naturelles, sa symbolique lithotherapie et son expression dans le produit concerne.

Le workflow accepte desormais `seraphinite` dans le schema, le quality gate, le test de contrat, le contrat produit et le prompt texte. Sauvegarde structurelle : `data/snapshots/2026-09-08-0720-seraphinite-taxonomy/` dans le pipeline prive. Tests locaux du pipeline PASS. Preuves, payloads, galeries, anciennes images et lectures Shopify : `data/catalogue-batches/2026-09-08-active-oos-five-supplier-backed/`. Checkpoint : [production des cinq DRAFT](checkpoints/2026-09-08-0950-selected-five-draft-production.md).

Prochaine gate : Patrice controle les cinq DRAFT dans Shopify Admin. Ne publier aucun de ces produits sans son nouveau GO. Apres sa revue, reprendre le tri des autres anciennes fiches encore en ligne et en rupture, puis decider produit par produit entre enrichissement et retrait.

## Reprise catalogue

```text
Reprends MilAura depuis docs/checkpoints/2026-09-08-0950-selected-five-draft-production.md. Les cinq fiches selectionnees sont enrichies dans Shopify mais restent DRAFT avec une quantite interne de preparation a 1 ; la baguette Pyrite reste DRAFT a zero et ne doit pas revenir sur le site. Commence par relire les cinq IDs et attends mon verdict visuel avant toute activation. Ensuite, audite les anciennes fiches encore ACTIVE et en rupture afin que je decide produit par produit entre enrichissement V4.1 et retrait. Preserve les IDs et handles historiques. Ne publie, ne supprime et ne modifie aucun stock par deduction.
```

# Landing Tous les bijoux : session fermee, live verifie

Date : 2026-09-07 18:28 CEST. La collection publique `https://milaura.fr/collections/bijoux-pierres-naturelles` utilise maintenant `milaura-all-jewelry` sur le theme live `190430282075`, apres validation visuelle et GO live explicites de Patrice. Source `86c90ea9`, integration `91596690`, cinq fichiers pousses de facon ciblee et pullback 5/5 identique. Affectation Admin enregistree sur la collection `660994851163`, ancien template `milaura-collection`. QA publique 390/1440 px conforme, cinq cartes, H1 unique, phrase d affinage retiree, zero debordement et aucune erreur navigateur.

Le lot est termine. Ne pas rejouer le push ni modifier la landing sans nouvelle demande. Retour arriere rapide si necessaire : reaffecter `milaura-collection` a la collection dans Shopify Admin ; les cinq fichiers additifs peuvent rester sur le theme. Preuves et fichiers exacts : [checkpoint du 2026-09-07](checkpoints/2026-09-07-1828-all-jewelry-landing-live-handoff.md).

## Reprise eventuelle

```text
Reprends MilAura depuis docs/checkpoints/2026-09-07-1828-all-jewelry-landing-live-handoff.md. La landing Tous les bijoux est integree au commit 91596690 et live sur le theme 190430282075 ; la collection Shopify 660994851163 utilise milaura-all-jewelry. Commence en lecture seule et ne redeploie rien par deduction. Preserve les modifications concurrentes du checkout principal. N ouvre un nouveau lot que sur une demande explicite de Patrice.
```

# SEO et Journal : cloture du 2026-09-07 18:17 CEST

Journal LIVE, integration c7b22c42 poussee, trois fichiers verifies par pullback et QA publique. SEO : quatre contenus sur six publies ; deux fiches restent catalogue. Deux premiers contacts presse envoyes au nom de Karine Allie, aucune publication acquise. La mariee aux pieds nus suspend ses propositions ; Un Beau Jour non envoye. Heartbeat Codex local de mesure mis en PAUSED sur refus de dependance au Mac. Aucun cron editorial active. Reprise : collecte serveur et cockpit ONORA Center, specification prete mais non deployee. [Handoff et prompt de reprise](checkpoints/2026-09-07-1817-seo-journal-handoff.md). Les etats des autres chantiers ci-dessous sont conserves.

# Mon Ecrin V9, live verifie et chantier ferme le 2026-09-07

> Correction distincte du 2026-09-07 16:02 CEST : footer Pinterest LIVE VERIFIE vers `MilAuraMineraux`, commit `c019bd9e`, pullback 1/1 identique et lien public controle. Les trois reglages deja presents sur Shopify ont ete preserves et rapproches dans Git. Compteur produit et Ads inchanges. [Checkpoint footer](checkpoints/2026-09-07-1602-pinterest-footer-live.md).

Mon Ecrin V9, 2026-09-07 : LIVE VERIFIE ET CHANTIER FERME sur GO de Patrice. App 1119132909569 active, backend 2026-09-07-425a473 healthy, quatre fichiers theme relus identiques. Quiz connecte enregistre automatiquement, favoris durables et Mes pieces livres. 135 tests PASS, recette live quiz/favoris et rendu 390/1440 conformes. Coeurs PDP/catalogue non developpes, purge multi-navigateurs reportee ; commandes aux quantites ambigues renvoyees a l'historique. [Handoff V9 et retour arriere](checkpoints/2026-09-07-1839-mon-ecrin-v9-live.md).

Reprise uniquement sur anomalie ou nouvelle demande. Le checkpoint V9 contient le prompt copiable, les versions, la recette, les sauvegardes et les limites. Pas de nouveau deploy, quiz, favori ou purge par deduction.

# Swipe des pierres valide sur iPhone, session fermee

Date : 2026-09-07. Patrice confirme que le swipe fonctionne sur son iPhone et clot la session. La validation utilisateur est acquise ; aucun point restant pour ce lot. Source `23b6b565`, integration `372dd0c3`, live Shopify `190430282075` depuis le 2026-09-05, pullback 2/2 identique. Design, cadrages, fleches et barre sous les cartes conserves. Worktree deja retire et reservations liberees.

Les tests automatises Chromium/WebKit et Theme Check du 2026-09-05 restent les preuves techniques ; le retour de Patrice du 2026-09-07 constitue la validation sur appareil reel. Aucun nouveau code ou deploy pendant cette cloture. Les autres sessions et leurs modifications restent preservees. [Checkpoint de cloture](checkpoints/2026-09-07-1647-stone-swipe-iphone-closure.md).

# Swipe natif ajoute sans changement de design, live

Date : 2026-09-05 17:55 CEST. Patrice demande explicitement le swipe au doigt en complement du footer valide. Cette demande remplace son exclusion historique : conserver desormais swipe, fleches, segment mobile et compteur ensemble. Le viewport defile nativement avec arret sur chaque carte ; l'ancien translateX est supprime. Aucun pilotage JS du rail pendant le toucher, aucune bibliotheque ajoutee, aucun changement du Liquid, des cartes, des photos ou du desktop. Les liens restent accessibles et la carte recevant le focus est alignee.

Source `a9e4dcb5`, integration `e2236d13` poussees, deux assets live sur `190430282075`, pullback 2/2 identique. Recette publique Chromium 360/390/430/768/1440 et WebKit 390/1440 conforme ; treize rangees au toucher simule, fleches, clavier, CPU x4, defilement vertical, geste rapide, annulation, mouvement reduit et acces sans JS verifies. Aucun iPhone physique teste. Theme Check 0 erreur/16 avertissements historiques. Worktree propre retire, branche poussee conservee, reservations liberees et travaux concurrents preserves. Checkpoint `docs/checkpoints/2026-09-05-1747-stone-native-swipe.md`. Les precedents bilans restent historiques et ne doivent pas conduire a changer le design du footer ou reintroduire le pilotage tactile abandonne.

# Navigation des pierres sous les cartes, live

Date : 2026-09-05 17:38 CEST. Patrice rejette les chevrons lateraux trop discrets et demande de regrouper les commandes sous les cartes. Le footer contient fleche precedente, barre de mouvement, compteur et fleche suivante. Trait plus lisible, cibles 44 px, segment mobile synchronise avec le rail. Ancien DOM superpose, positionnement, IntersectionObserver et animation supprimes. Les dimensions, cadrages et styles des 39 cartes ainsi que le desktop valide sont conserves. Source `29fb3ec9`, integration `7f3b20eb` poussees ; trois fichiers live sur `190430282075`, pullback 3/3 identique. Recette publique 360/390/430/768/1440, treize rangees, clavier, SVG, liens, mouvement reduit et acces sans JS conformes. Theme Check 0 erreur/16 avertissements historiques. Worktree propre retire, branche conservee, reservations liberees et travaux concurrents preserves. Checkpoint `docs/checkpoints/2026-09-05-1733-stone-bottom-navigation.md`. Les bilans precedents restent historiques : ne pas retablir les fleches superposees ni les mecanismes tactiles abandonnes.

# Chevrons mobiles affines, live

Date : 2026-09-05 17:11 CEST. Dernier polish demande par Patrice, avec skills frontend et observation de Tiffany / Van Cleef & Arpels. Les commandes sont maintenant de fins chevrons sans boite, places dans les marges nacrees juste hors des photos. Cibles tactiles invisibles de 44 px ; fleche indisponible masquee, indication unique de 2 px et mouvement reduit respecte. Les 39 cartes gardent leurs dimensions, cadrages et styles ; le desktop valide reste identique. Source `085465e8`, integration `fe4fe056` poussees ; deux fichiers live sur `190430282075`, pullback 2/2 identique. Recette publique 360/390/430/768/1440, treize rangees, tap sur les petits SVG, clavier et liens conformes. Aucun nouveau JavaScript, aucun swipe reintroduit. Theme Check 0 erreur/16 avertissements historiques. Preview panier non touchee. Checkpoint `docs/checkpoints/2026-09-05-1708-stone-arrow-polish.md`. Les bilans precedents restent historiques ; ne pas retablir les boites translucides.

# Format compact des cartes mobiles retabli

Date : 2026-09-05 16:53 CEST. Patrice confirme le desktop et rejette uniquement l'agrandissement mobile introduit avec les fleches. Le format mobile precedent est retabli : largeur 286 px, apercu de la carte suivante, hauteur de texte et marges precedentes. Fleches et cadrages conserves ; aucune modification du desktop. Source `85737031`, integration `98e158d6` poussees, un CSS live sur `190430282075`, pullback identique. Comparaison publique 360/390/430/749 avec le format precedent, desktop 768/1440 inchange, treize rangees, clavier, mouvement reduit et redimensionnement conformes. Theme Check 0 erreur/16 avertissements historiques. Preview `200974958939` reservee au panier et non touchee. Checkpoint `docs/checkpoints/2026-09-05-1651-stone-mobile-compact.md`. Ne pas agrandir les cartes mobiles pour modifier leur navigation.

# Navigation des pierres par fleches, live

Date : 2026-09-05 16:38 CEST. Patrice abandonne explicitement le swipe apres deux retours negatifs sur iPhone. Le composant fonctionne maintenant par fleches translucides superposees aux bords des photos, avec une indication discrete de deux cycles et le compteur dessous. Les anciens ecouteurs, mesures, regles de scroll et variantes `is-featured` ont ete retires. Aigue-marine a le meme format que les autres cartes desktop, avec quatre colonnes et liens alignes ; les photos restent telles que validees.

Source `c6ddfede`, integration `7c22cac0`, branche canonique poussee ; live `190430282075` et preview `200974958939`, pullbacks 3/3 identiques. Recette publique 360/390/430/768/1440, treize rangees par fleches, liens, clavier, preference de mouvement reduit, changement de largeur, rechargement de section et acces aux 39 cartes sans JS conformes. Theme Check 0 erreur/16 avertissements historiques. Aucune recette sur iPhone physique revendiquee. Le worktree propre et integre est retire, branche `codex/milaura-stone-arrow-navigation-20260905` conservee. Checkpoint : `docs/checkpoints/2026-09-05-1635-stone-arrow-navigation.md`. Les anciens bilans de swipe ci-dessous sont historiques et ne doivent pas conduire a le reintroduire. Autres composants, catalogue, stocks, prix, galeries et travaux concurrents preserves.

# Cadrages valides et glissement natif en ligne

Date : 2026-09-05 16:13 CEST. Cadrages valides explicitement par Patrice puis integres et deployes : `d7e8f7af` -> `911e206d`. Retour iPhone negatif sur la fluidite du premier correctif tactile ; cette implementation est remplacee par le defilement et l'inertie natifs : `6ba3120e` -> `34bf06ca`. Theme live `190430282075`, branche canonique poussee, pullback final 4/4 identique ; preview `200974958939` actualisee aussi.

Recette publique 360/390/430 avec CPU ralenti x4 : inertie apres relachement, gestes lents, retour sur texte, defilement vertical, fleches et liens conformes. Zero ecriture JS du scroll, capture du pointeur ou lecture des rectangles pendant les gestes. Cadrages publics 390/1440, redimensionnement et mouvement reduit conformes, Theme Check 0 erreur/16 avertissements historiques. Le ressenti iPhone physique reste a confirmer par Patrice apres actualisation. Checkpoint : `docs/checkpoints/2026-09-05-1613-framing-native-swipe-live.md`. Le worktree termine est retire proprement, branche `codex/milaura-touch-framing-20260905` conservee. Ne pas rejouer les cadrages ou modifier les autres photos sans nouvelle demande ; aucun catalogue, stock, prix, galerie, Admin, canal ou Ads modifie. Travaux concurrents du checkout preserves.

# Mise en ligne terminee : annuaire et landings par pierre

Date : 2026-09-05 10:55 CEST. Statut : LIVE VERIFIE apres GO explicite de Patrice. Le hub public `/pages/bijoux-par-pierre` contient 39 cartes sans recherche, treize rangees courtes sur mobile, et ouvre les landings sans parametre de preview. Les 40 pages sont publiques, les dix anciennes affectations et trente publications Boutique en ligne sont executees. Theme `190430282075`, pullback 49/49 identique, un H1/trois onglets/produits/canoniques conformes sur les 40 pages, responsive 390/1440 controle. Integration `3d29f3a8`, compteurs `3492023f` pousses. [Checkpoint de release](checkpoints/2026-09-05-1055-stone-directory-live.md).

Trois Boho ont ete passes en DRAFT par la tache catalogue concurrente ; leurs references restent configurees et se masquent automatiquement. Compteurs ajustes a Quartz rose 10, Aventurine 6 et Obsidienne 4. Les remettre a jour apres une reactivation verifiee, sans modifier les statuts par deduction. Les anciens etats preview ci-dessous ne valent plus pour le lot pierre. Repartir de la branche canonique et du live ; les travaux concurrents du checkout sont preserves.

# Catalogue ferme : Patrice reprend le tri des anciennes fiches

Date : 2026-09-05 17:35 CEST. Statut : `PRODUCTION TERMINEE ; TRI REPRIS PAR PATRICE`.

Patrice prend personnellement la main sur le choix des anciennes fiches en ligne a conserver ou retirer. Une session fraiche enrichira uniquement celles qu'il aura retenues. Le mandat de creation est termine : trois nouvelles Boho puis treize autres fiches ont ete creees en DRAFT ; les deux fils de perles restants sont du materiel personnel explicitement exclu de la vente. Les trois anciennes Boho P1 ont ete approuvees puis activees ; le chapelet historique enrichi est au dernier controle en DRAFT, avec 78 cm et sans nombre de perles invente. Prix Boho 14,90 EUR conserve.

Treize contrats et imports PASS, 65 images comparees aux pixels Shopify, 269 cellules Sheet actualisees et 585 verifiees. Copie canonique privee `data/catalogue-batches/2026-09-05-p2-remaining13/`, 514 fichiers compares par SHA-256 puis rapport ajoute. [Revue des treize brouillons](http://127.0.0.1:8766/REVIEW.html), serveur local necessaire. Les statuts sont ceux des derniers controles de chaque lot ; les relire par EAN/IDs lors d'une prochaine action de Patrice ou de Codex. Aucune activation ou publication deduite du message de cloture.

Le [handoff de cloture](checkpoints/2026-09-05-1735-catalogue-handoff-patrice-triage.md) remplace le mandat de 09:41. Il contient les preuves, decisions et chemins durables. Les anciens nombres 27/59/55 ne sont pas un inventaire actuel. Le compteur de ventes est conserve sur instruction de Patrice. Hematite, cadeau, cron Camilla, themes et travaux concurrents preserves ; aucune regeneration hematite automatiquement ouverte. Aucun besoin d'information supplementaire pour terminer les nouveaux produits.

## Prompt pour les anciennes fiches retenues

```text
Reprends MilAura depuis docs/checkpoints/2026-09-05-1735-catalogue-handoff-patrice-triage.md. La production des nouvelles fiches est terminee. Voici les anciennes fiches que je conserve : [ma liste de liens, IDs ou EAN]. Relis uniquement leur etat actuel dans le Sheet et Shopify, puis reprends leur enrichissement avec le workflow V4.1 et le copywriting MilAura. Preserve les IDs et handles historiques et prepare la revue des textes et galeries. Ne recree pas les produits deja importes, ne vends pas les deux fils de perles personnels et ne rejoue ni factures ni stocks. Aucune modification de statut ou publication par deduction. Les autres anciennes fiches restent hors de ce lot.
```

# Reprise prioritaire : polish visuel apres le Polish 7

Date : 2026-09-05 09:20 CEST. Statut : `POLISH 7 FERME, INTEGRE ET LIVE`.

Les landings dediees Aigue-marine et Sodalite utilisent maintenant le guide pierre reutilisable en trois onglets apres les cartes produit. Aigue-marine met en avant la bague argent modele 01 dans le bento ; Sodalite conserve le bracelet Horus. Le lot est integre et pousse au commit `ac2144de`, puis deploye par quatre fichiers exacts sur le theme live `190430282075`. Pullback `4/4` identique, Theme Check sans erreur, parcours publics Aigue-marine et Sodalite controles. Checkpoint : [2026-09-05-0920-polish7-stone-landings-live-handoff.md](checkpoints/2026-09-05-0920-polish7-stone-landings-live-handoff.md).

Point connu : la bague Aigue-marine est actuellement epuisee. La route dediee Aigue-marine fonctionne avec `?view=milaura-campaign-aigue` ; aucune affectation de template Shopify Admin n a ete modifiee dans ce lot. Le checkout principal reste sale avec des travaux concurrents preserves.

## Prompt de reprise courant

```text
Reprends le polish visuel MilAura depuis docs/checkpoints/2026-09-05-0920-polish7-stone-landings-live-handoff.md. Lis AGENTS.md, docs/project-state.md, docs/codex-handoff.md et docs/workstreams.md, puis commence en lecture seule. Le Polish 7 est ferme, pousse au commit ac2144de et live sur le theme 190430282075 : guides reutilisables Aigue-marine et Sodalite, trois onglets cures et bague Aigue-Marine Argent en produit star. Ne redeploie rien par deduction. Demande-moi le prochain polish de la landing, reproduis le point exact en desktop et mobile, puis garde preview, GO visuel, integration et live comme gates distinctes. Preserve tous les changements concurrents du checkout principal et n utilise jamais origin/main comme source d integration.
```

# Reprise prioritaire : 59 anciennes URLs SEO restaurees

Date : 2026-09-04 22:10 CEST. [Checkpoint courant](checkpoints/2026-09-04-2210-seo-clicked-urls-restored.md).

Correctif termine, ne pas le rejouer. Les 59 anciennes fiches avec clics GSC sont `ACTIVE` sous leurs URLs historiques : 58 a stock zero et politique `DENY`, plus le collier Boho `10557516644699` a stock quatre et politique `DENY`. Le pullback Admin est PASS 59/59 en comptant le pilote ; aucun contenu, prix, media, handle, EAN, SKU, metachamp ou collection n'a ete modifie.

Le sitemap produits repond HTTP 200 avec 234 entrees ; les 59 handles restaures sont tous presents. Pilote et echantillon stock zero sont indexables, `OutOfStock` et non achetables ; Boho est indexable, `InStock` et achetable. Le sitemap a ete soumis dans GSC, mais recrawl, impressions et positions restent en attente. Une verification individuelle immediate des 59 pages a ete arretee apres rate-limit 429 ; ne pas marteler Shopify. Hematite douze versus neuf reste un lot distinct non resolu.

# Reprise prioritaire : pilote SEO PASS, GO collectif exact requis

Date : 2026-09-04 21:33 CEST. [Checkpoint courant](checkpoints/2026-09-04-2133-seo-corrective-explicit-go.md).

Sitemap GSC soumis avec confirmation. Pilote `10358876275035` restaure sous son URL : ACTIVE, stock zero, DENY, HTTP 200, canonique correcte, OutOfStock et achat desactive. Contenu et autres champs inchanges. Ne pas rejouer l'operation stock.

Les 58 autres produits a clics sont inchanges. Le garde-fou exige une autorisation exacte pour activer collectivement 57 fiches avec stock zero et le collier Boho `10557516644699` avec stock quatre confirme. Cette action rendra les anciennes pages visibles dans le sitemap, les collections et la recherche Shopify ; 57 seront epuisees et non achetables, Boho sera achetable. Aucune 301 automatique. Attendre la reponse explicite de Patrice. Hematite 12 versus neuf reste separee et non resolue.

# Reprise prioritaire : audit GSC termine, comptage hematite a clarifier

Date : 2026-09-04 19:42 CEST. [Checkpoint courant](checkpoints/2026-09-04-1942-gsc-stock-hematite.md), [audit Search Console](audits/2026-09-04-legacy-retirement-search-console.md).

Audit SEO execute en lecture seule : 109 clics historiques sur 28 jours concernent 59 handles retires, 55,6 % des clics de la table Pages. Ne pas annoncer une perte deja mesuree. Aucune action manuelle ni alerte securite, sitemap public conforme aux 173 actifs, rapport GSC ancien. Aucune redirection, demande d'indexation ou soumission de sitemap ; correction a autoriser separement.

Les trois stocks physiques sont confirmes : Boho obsidienne Sheet 4, rhodonite 6 mm 1 conservee, oeil-de-tigre 8 mm 2 conservees. Aucun ajout d'achat ou import a rejouer. Cadeau `10504072954203` : stock Shopify corrige 50 -> 12, toujours DRAFT, prix zero, pas encore enrichi/reactive. Le lien CAN donne par Patrice identifie l'EAN `3701459008254`, deja present sur la fiche canonique ACTIVE `10685849862491`, cinq images approuvees, prix 8,50 EUR, stock 9 Sheet/Shopify. Question ouverte : 12 cadeaux supplementaires ou 12 physiques au total ? Ne pas creer de doublon, additionner 12+9, alterer les neuf ou regenerer la galerie acceptee par deduction. Clarifier puis finaliser le modele cadeau/vente et sa preuve panier.

Le retrait legacy, les factures et les ecritures de ce lot sont termines, pas a rejouer. Les attentes contradictoires plus anciennes ci-dessous sont historiques. Aucun theme ou autre produit autorise par ce checkpoint ; Unys et recommandations orphelines restent distincts.

# Reprise prioritaire : SEO, cadeau et trois stocks a confirmer

Date : 2026-09-04 18:55 CEST. Les factures FCAN2026-59350 et FCAN2026-59481 sont integrees au Sheet : 35 lignes d'achat, 33 EAN (24 nouveaux, neuf existants), aucun doublon. Ne pas reimporter les commandes 76878 et 77055 ni ajouter une seconde fois leurs stocks.

[Checkpoint courant](checkpoints/2026-09-04-1855-invoices-seo-gift-clarifications.md) : trois quantites physiques en attente, distinction cadeau hematite/amethyste, preuves et limites. Les 24 nouvelles lignes Sheet ne sont pas des creations Shopify. Aucun stock, produit, prix ou canal Shopify modifie dans ce lot.

Priorite demandee : proteger le SEO organique. Les 237 retraits legacy sont effectues, mais trafic, backlinks et redirections pertinentes restent a traiter dans un lot cible. Ne pas promettre un impact nul, rediriger tout vers la Home, reactiver tous les produits ou falsifier leurs stocks a zero. Cadeau : produit 10504072954203 DRAFT, variante 53142713925979, hematite 4 mm, ancien stock Shopify 50 ; Patrice annonce amethyste et 12 unites, confirmation necessaire. Stocks a confirmer : EAN 3701459098132 (facture cinq / message un achete et vendu), 3701459010042 (Sheet une ancienne unite), 3701459011551 (Sheet deux anciennes unites). Unys reste un ecart distinct.

Les anciens prompts et attentes ci-dessous sont historiques. Reprendre en lecture seule depuis le checkpoint courant, puis appliquer uniquement les confirmations et GO nouveaux de Patrice.

# Reprise prioritaire : inventaire apres retrait legacy

Date : 2026-09-04 18:40 CEST. Statut : `RETRAIT EXECUTE ; SHEET SYNCHRONISE ; DEUX LISTES FOURNISSEUR ATTENDUES`.

237 anciens produits sont passes en DRAFT, sans suppression. Les 179 canoniques sont inchanges : 173 ACTIVE et six DRAFT volontaires. Les 333 anciens deja hors vente restent intouches. Les 237 endpoints produit controles renvoient 404 ; les deux listes publiques completes ne contiennent que les 173 actifs canoniques. Sheet : 145 cellules sur 46 lignes, formules, couts et quantites physiques preserves.

Preuves, liste nominative, limites et prompt complet : [checkpoint courant](checkpoints/2026-09-04-1826-inventory-legacy-retirement.md). Ce resultat remplace le mandat de retrait de 17:38 reproduit plus bas, qui devient historique. Ne pas rejouer cette operation.

Prochaine etape : attendre les deux listes fournisseur de Patrice. Aucun nouveau produit, activation ou stock a modifier par deduction. Les six cadeaux exclus et les quatre visuels refuses restent proteges. Corrections distinctes a decider : cadeau panier encore reference, deux mappings de recommandations orphelins, ecart Unys physique Sheet 4 / Shopify 1. Mon Ecrin connecte et feeds Meta/Google/Pinterest restent non certifies. Aucun theme ni Ads modifie.

## Prompt de reprise courant

```text
Reprends MilAura depuis docs/checkpoints/2026-09-04-1826-inventory-legacy-retirement.md. Le retrait legacy est termine et ne doit pas etre rejoue. Commence en lecture seule. Attends mes deux listes fournisseur pour rapprocher commandes, receptions physiques et IDs canoniques. Preserve les brouillons volontaires et les exclusions ; garde les correctifs cadeau/mappings, Unys et les limites de canaux dans des lots distincts soumis au GO adapte.
```

## Historique et autres chantiers preserves

# Handoff prioritaire : catalogue MilAura

Date : 2026-09-04 17:38 CEST. Statut : `PASSATION PRETE ; RETRAIT LEGACY NON EXECUTE`.

La prochaine session retire de la vente tous les anciens produits hors nouvel inventaire, en les passant en DRAFT sans suppression definitive de masse. Elle protege les produits canoniques du Sheet traites par toutes les sessions, y compris les IDs anciens reenrichis, et conserve tous les brouillons volontaires. Aucune exception pour les doublons ou les savons.

Patrice declare avoir active lui-meme tous les produits qu'il juge finalises. Cette declaration guide les decisions de conservation ; leurs statuts/canaux actuels restent a verifier en direct. Le dernier lot n'est plus « 47 DRAFT » : six cadeaux ont ete supprimes, les 41 autres statuts n'ont pas ete reaudites apres sa revue.

Reprise complete : [retrait legacy puis deux commandes](checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md).

## Prompt de reprise catalogue

```text
Reprends MilAura depuis docs/checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md. Commence en lecture seule par le Sheet, Shopify pagine et les preuves de toutes les sessions d'inventaire. Protege les IDs canoniques, y compris les anciens IDs reenrichis et tous les DRAFT volontaires. Puis passe tous les autres anciens produits actifs en DRAFT, sans suppression definitive, doublon ou savon compris. Sauvegarde et verifie chaque ID ; ne modifie pas les produits proteges. Les six cadeaux sont deja supprimes et exclus. Grenouille quartz rose validee ; trois calendriers et coffret refuses, intouchables avant les vraies photos. Apres ce retrait, attends les listes des deux commandes fournisseur, puis prepare Sheet, reassorts et nouvelles fiches sous workflow V4.1. Aucun nouveau DRAFT, activation ou publication sans GO adapte. Aucun theme ni Ads.
```

## Limites et autres chantiers

Les anciens GO FINAL47, prix nuls et exceptions de source sont epuises. Aucune mutation Shopify ou Sheet dans cette cloture. Les six suppressions precedentes et les controles sont documentes dans [le checkpoint cadeaux](checkpoints/2026-09-04-1659-inventory-gifts-six-deleted.md). Le total d'anciens produits a retirer sera calcule a la reprise, pas deduit des anciens compteurs.

Les informations ci-dessous concernent les autres chantiers, conserves sans reprise ni nouvelle verification. Pour l'inventaire, le checkpoint du 2026-09-04 a 17:38 prime sur les anciens prompts et chiffres.

---

> Mise a jour Polish 6, 2026-09-04 08:40 CEST : LIVE VERIFIE sur le theme `190430282075`, commit `4067ea35` pousse sur `codex/milaura-integration`. Titres, surtitres, CTA et derniers ajustements fleches/espacements approuves sont publies. Pullback 18/18, Home 360/390/430/768/1440 et regressions 390/1440 PASS. Details : [checkpoint Polish 6](checkpoints/2026-09-04-polish6-live.md). Les autres chantiers ci-dessous restent inchanges.

# Handoff Codex MilAura, Rentree Sodalite

Date : 2026-09-01 20:37 CEST

Statut : `POLISH SITE VALIDE, INTEGRE ET LIVE`

## Prompt de reprise rapide

```text
Reprends MilAura apres la fermeture du polish site Rentree Sodalite. Lis AGENTS.md, docs/codex-handoff.md puis uniquement docs/checkpoints/2026-09-01-2037-sodalite-site-polish-live-handoff.md. Commence en lecture seule. La Home Sodalite et /collections/selection-de-karine sont live et validees. Ne les modifie pas par deduction. En cas de regression, reproduis-la sur le live et propose un lot minimal. Aucun code, theme, Admin, Ads, credit creatif ou live sans reservation et GO separes.
```

## Etat ferme

- Theme live : `190430282075`.
- Commit canonique final : `e191857c98ac0ce20b23ea09f1fdbb2999f76ee9`.
- Home : video declenchee au scroll, une seule lecture de `10,041667 s`, fin fixe, puis `Rejouer`.
- Safari : fallback `Lire` en bas a droite si l autoplay est refuse ou fige.
- Landing : scene et bijoux fixes, papillons seuls animes, boucle invisible de `15 s`.
- Bande blanche Home supprimee.
- Medias H.264 faststart reduits de `45,3 %` au total.
- Pullback live : `6/6` fichiers identiques.
- QA publique : `360`, `390`, `430` et `1440 px`, sans overflow.
- Theme Check : `0 erreur`, `16 warnings historiques` hors lot.
- Aucun Admin, produit, stock, prix, collection, Ads ou canal publicitaire modifie.

Checkpoint complet : `docs/checkpoints/2026-09-01-2037-sodalite-site-polish-live-handoff.md`.

## Gates

Le polish site Sodalite ne possede plus de lot ouvert. Les creations pour TikTok, Meta et Pinterest, puis les Ads, constituent un chantier distinct. Aucun futur GO creatif ou Ads ne vaut autorisation de modifier le site.

Toute regression site doit etre reproduite en lecture seule, reservee sur des fichiers et un theme exacts, corrigee sur theme prive apres GO, puis integree et poussee live seulement apres un nouveau GO separe.

## Etat Git

La branche canonique est `codex/milaura-integration`. Le commit Sodalite est pousse sur origin. Le worktree source `sodalite-media-safari-20260901` est propre et aligne.

Le checkout principal reste volontairement sale avec des changements concurrents Inventaire, CI, documentation et medias non suivis. Aucun reset, nettoyage, staging global ou commit global ne doit etre execute. La liste exacte figure dans le checkpoint.

## Autres chantiers

- Inventaire : `docs/checkpoints/2026-09-04-1738-inventory-legacy-retirement-handoff.md` ; retrait legacy reversible, nouveaux IDs et DRAFT volontaires proteges.
- Template 1 marketing : reprendre depuis `docs/checkpoints/2026-09-01-1415-template-1-marketing-live-handoff.md` uniquement sur besoin precis.
- Mon Ecrin, Pinterest, SEO et acquisition conservent leurs propres gates et checkpoints.
# Handoff architecture SEO commerciale : live vérifié

Date : 2026-09-10 10:52 CEST

Statut : `SEO COMMERCIAL LIVE VERIFIE, ACTIFS PROPRIETAIRES A OUVRIR DANS UNE SESSION DEDIEE`

```text
Reprends MilAura depuis docs/checkpoints/2026-09-10-1052-seo-commercial-live-handoff.md. Le lot SEO commercial est terminé et live : 15 collections existantes conformes, 3 pages SEO, 4 articles, 17 occurrences de liens réparées, 2 redirections en un saut, 9 collections commerciales vérifiées et 9 liens contextuels publics depuis le guide de choix. Ne rejoue aucune mutation Shopify par déduction. Ouvre une branche et un worktree dédiés pour les actifs propriétaires. Utilise les skills frontend-design, impeccable et onora-copywriting. Commence par l'architecture et les données du sélecteur interactif de pierre et de la matrice eau, soleil, sel, puis traite le calendrier des pierres de naissance, l'atlas photographique des pierres et imitations, et enfin le protocole de l'étude annuelle. Mobile-first, photographie réelle, accessibilité, données sourcées et performance sont obligatoires. Ne touche pas aux produits, stocks, handles, prix, preuve sociale ou Ads. Sépare PASS technique, validation visuelle Patrice, intégration et live ; ne publie rien sans nouveau GO explicite.
```

[Checkpoint complet](checkpoints/2026-09-10-1052-seo-commercial-live-handoff.md).
