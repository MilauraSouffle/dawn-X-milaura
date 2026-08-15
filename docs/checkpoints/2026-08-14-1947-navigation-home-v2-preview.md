# Checkpoint MilAura - Navigation et homepage V2 en preview

Date : 2026-08-14 19:47 CEST

## Résultat

La navigation et la homepage V2 sont implémentées sur un thème Shopify isolé non publié. Le thème live `190430282075` n a pas été modifié par cette session.

- thème de preview : `199957807451`, `MilAura Navigation V2 2026-08-14` ;
- preview : `https://milaura-2.myshopify.com?preview_theme_id=199957807451` ;
- menu Shopify privé : `Navigation V2 - Preview`, ID Admin `322508423515`, handle `navigation-v2-preview` ;
- branche : `codex/milaura-navigation-home-v2-20260814` ;
- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/navigation-home-v2-20260814`.

## Architecture livrée

La homepage rend huit mouvements visibles, dans cet ordre :

1. Hero de marque ;
2. sélection saisonnière ;
3. trois façons de choisir ;
4. Aigue-marine vers toute la collection ;
5. best-sellers ;
6. nouveautés ;
7. Naissance et Mariage ;
8. Karine et Journal.

La navigation permanente contient six intentions : Nouveautés, Bijoux, Pierres, Rituels et bien-être, Cadeaux et Guides. Recherche, diagnostic, Cercle, contact et panier restent des utilitaires. Le Cercle renvoie exclusivement vers `/account`.

`Offres du moment` reste conditionnel. Aucun lien promotionnel n est affiché sans sélection commerciale, prix et durée vérifiés.

## Pages et SEO

- `page.milaura-guide-pierres` : template prêt, 49 entrées alphabétiques, liens seulement vers des sélections réelles, bloc histoire et symbolique, sources et `content_updated_at` ;
- `page.milaura-guide-senteurs` : template prêt, cinq senteurs vérifiées, même contrat de date ;
- routes canoniques réservées : `/pages/guide-des-pierres` et `/pages/guide-des-senteurs` ;
- aucune page Shopify correspondante n a été créée ou publiée ;
- les previews de templates utilisent temporairement `/pages/bijoux-par-pierre?view=milaura-guide-pierres` et `/pages/bijoux-par-pierre?view=milaura-guide-senteurs` ;
- les 20 destinations publiques déjà utilisées par le menu répondent en HTTP 200 ; les deux futures routes de guide restent volontairement en HTTP 404 jusqu à leur activation coordonnée.

## Réconciliation concurrente

État validé au contrôle de 19:47 : les hotfixs Hero alors présents sur la branche d intégration avaient été repris dans la preview. Les seuls écarts conservés sur `milaura-hero-portal.liquid` étaient ceux nécessaires à la nouvelle navigation : surface transparente avant scroll et couleur du burger.

Mise à jour de coordination, 2026-08-14 19:52 CEST : Patrice a depuis validé dans la tâche Hero un bandeau-vitrine LFG, Karine et Metz ainsi que le retrait coordonné des trois bulles. La tâche Hero reprend la propriété exclusive de `sections/milaura-announcement.liquid` et `sections/milaura-hero-portal.liquid`. Navigation V2 gèle ces deux fichiers dans leur état local actuel, ne les édite plus et ne les pousse plus. La preview `199957807451` documentée ici ne constitue donc plus la référence finale du Hero. Aucun nouveau push de preview ni aucun déploiement ne doit avoir lieu avant réception et synchronisation du commit d intégration Hero.

Synchronisation confirmée localement, 2026-08-14 20:04 CEST : le merge canonique Hero `254edefd`, issu du lot `fa33829c`, est intégré dans Navigation V2. `sections/milaura-announcement.liquid` est identique à la version canonique. `sections/milaura-hero-portal.liquid` conserve le retrait intégral des trois bulles et de l ancien proof bridge ; ses seuls écarts au commit canonique sont les trois lignes d intégration de la nouvelle navbar : surface initiale transparente et couleur du burger avant et après scroll. La navbar reste positionnée à `top: var(--milaura-announcement-height)`, soit 72 px sur desktop et 70 px sur mobile. Aucun push Shopify supplémentaire n a été effectué pendant cette réconciliation.

Preview finale resynchronisée, 2026-08-14 20:50 CEST : le contrat quartz rose canonique `82873b97`, puis l état d intégration `797e088c`, sont repris par Navigation V2. Le bandeau utilise `#F0D9E0`, mesure 58 px sur desktop et 54 px sur mobile, conserve ses médaillons 52/46 px et son bouton de 44 px. La navbar reste transparente sur le Hero et se place exactement sous le bandeau. L ancien dock mobile a été désactivé dans `sections/footer-group.json` afin de supprimer le doublon de navigation que la barre Shopify de preview masquait. Les pushes de cette reprise concernent uniquement le thème non publié `199957807451`.

Synchronisation du polish Hero, 2026-08-15 08:18 CEST : le lot `14b2ee7b`, intégré dans le canonique par `4d0b3c39`, est repris sur Navigation V2 par le merge local `2d25f5e6`. Le H1 est désormais `La beauté des bijoux rencontre les vertus des minéraux`, le descriptif conserve ses deux lignes éditoriales prévues, la scène pierre mobile est remontée de 70 px et le bandeau se masque puis se restaure avec l ouverture et la fermeture du panier. `sections/milaura-announcement.liquid` est identique au canonique. Le diff de `sections/milaura-hero-portal.liquid` par rapport à `4d0b3c39` reste strictement limité aux trois lignes nécessaires à la navbar : fond initial transparent et couleur du burger avant et après scroll. Ces deux sections ont été poussées uniquement sur le thème privé `199957807451`, avec pullback 2/2 identique. Aucun push live n a été effectué par Navigation V2.

Synchronisation du Hero final, 2026-08-15 08:43 CEST : le canonique `6d986c20`, issu du lot `46d793d3`, est repris par le merge Navigation V2 `c3083a53`. Le slogan devient `Bijoux & émotions`, le séparateur est un point or de 5 px et les trois parcours ainsi que les deux scènes secondaires sont intégralement retirés. La preview privée a confirmé à 390 px un seul H1, une seule image, aucun lien, bouton ou parcours dans le Hero et aucun débordement horizontal. Le fichier a été poussé uniquement sur `199957807451`, avec pullback 1/1 identique.

Synchronisation finale de la navbar au scroll, 2026-08-15 08:51 CEST : le micro-patch `24aaa5db`, intégré par `8b781461`, est repris par le merge Navigation V2 `a11dafed`. La surface au scroll utilise désormais la nacre à 16 % sur fond transparent, un blur de 12 px, une saturation de 112 % et un filet nacré fin. Conformément au workflow raccourci validé par Patrice, cette ultime reprise a été contrôlée statiquement sans Playwright. Le diff de `sections/milaura-hero-portal.liquid` par rapport à `8b781461` reste strictement limité aux trois lignes navbar attendues. Le push a concerné uniquement le thème privé `199957807451`, avec pullback 1/1 identique. Aucun push live n a été effectué par Navigation V2.

La session n a touché ni au panier, ni à la livraison, ni aux PDP, ni aux recommandations, ni aux produits, ni aux stocks.

## Ajustement taxonomie et parcours du 2026-08-15 09:36 CEST

Le menu et la section `Trois façons de choisir` ont été repris sur le seul thème privé `199957807451` après le retour de Patrice.

Constat public vérifié au moment du lot :

- 268 produits accessibles par les flux publics Shopify ;
- 116 produits dans `bijoux-pierres-naturelles` ;
- 33 produits dans `pierres-mineraux` ;
- 66 produits dans `rituels-bien-etre` ;
- cinq références seulement dans `bougies-emotionnelles`, famille appelée à disparaître après écoulement du stock.

Contrat de navigation retenu :

- `Pierre de naissance` apparaît uniquement dans `Cadeaux`, avec `Anniversaire de mariage` et `Sélection du moment` ;
- `Bijoux` donne accès à tous les bijoux puis à six types : Bracelets, Colliers, Bagues, Boucles d oreilles, Pendentifs et Chaînes ;
- `Pierres` ne présente plus une sélection arbitraire de cinq noms : elle mène vers tous les bijoux par pierre, le guide A à Z, l histoire et la symbolique, puis le choix selon le ressenti ;
- `Rituels & bien-être` remplace `Bougies et senteurs` au premier niveau et contient la collection générale, les Savons naturels, les Bols chantants et les Bougies émotionnelles ;
- `Guides` conserve le diagnostic, le choix selon le ressenti, le Journal et l histoire de MilAura.

La navigation rend ces groupes depuis `snippets/milaura-nav-curated-links.liquid`, partagé entre desktop et mobile, afin d éviter deux taxonomies divergentes. Le menu Shopify Admin privé conserve encore son ancien intitulé source ; le thème de preview le normalise de façon déterministe et aucune mutation du menu public `main-menu` n a été faite.

La section homepage `Trois façons de choisir` utilise désormais trois onglets inspirés du langage du Hero : `Choisir par bijou`, `Choisir par pierre` et `Me laisser guider`. Un seul panneau et une seule photo sont visibles à la fois. Le composant conserve le clavier, les états ARIA, les cibles tactiles et un repli `noscript`. Le troisième parcours mène au diagnostic `/pages/diagnostic-emotionnel`.

La seconde image des cartes produit sur appareil tactile n a pas été modifiée dans ce lot. Les cartes partagées sont détenues par la tâche Recommandations. Le contrat recommandé pour une passe coordonnée est un bouton tactile explicite de 44 px pour basculer l image, plutôt qu un geste horizontal imbriqué dans les rails produits de la homepage.

## Sélection SEO des pierres du 2026-08-15 09:56 CEST

Le sous-menu `Pierres` présente désormais `Choisir selon son émotion du moment`, puis six pierres choisies en croisant estimation de demande France, difficulté SEO, nombre réel de produits dans la collection publique et existence d une destination canonique HTTP 200.

| Pierre | Volume France estimé | Difficulté estimée | Produits dans la collection publique | Route |
| --- | ---: | ---: | ---: | --- |
| Améthyste | 40 500 | 57 | 11 | `/collections/par-pierre-amethyste` |
| Lapis-lazuli | 33 100 | 58 | 6 | `/collections/par-pierre-lapis-lazuli` |
| Aigue-marine | 18 100 | 59 | 6 | `/collections/par-pierre-aigue-marine` |
| Quartz rose | 14 800 | 56 | 8 | `/collections/par-pierre-quartz-rose` |
| Agate | 8 100 | 27 | 10 | `/collections/par-pierre-agate` |
| Amazonite | 8 100 | 45 | 6 | `/collections/par-pierre-amazonite` |

Source de comparaison consultée le 2026-08-15 : `https://freudix.studio/datasets/mineraux-pierres/cristaux-vertus`. Les volumes sont des estimations tierces de requêtes mensuelles France, pas des données Search Console MilAura ni des chiffres Google garantis. Ils servent au classement relatif. La sélection devra être réévaluée avec GSC et Google Keyword Planner dès qu un accès légitime sera disponible.

`Œil de tigre` reste le premier candidat à activer ensuite : la demande estimée est de 12 100 recherches mensuelles et 13 produits publics comportent ce terme, mais aucune collection canonique publique n existe encore. `Jaspe rouge` reste hors des six malgré le potentiel du terme générique `Jaspe`, car sa collection dédiée ne contient actuellement que deux produits.

## Contrôles réalisés

- desktop `1440 x 1000` : un seul H1, aucun débordement horizontal, bandeau 58 px, Header et Hero alignés ;
- mobile `430 x 932`, `390 x 844` et `360 x 800` : aucun débordement horizontal, bandeau 54 px, Header sur une ligne et cibles tactiles de 44 px ;
- accordéon Pierres : sept destinations visibles ;
- recherche mobile : overlay ouvert, champ visible, actif et focalisé ;
- fermeture et états ARIA contrôlés ;
- ancien dock mobile : zéro instance visible après désactivation et rechargement ;
- `node --check assets/milaura-navigation.js` : succès ;
- validation JSON des fichiers touchés : succès ;
- contrôle du bandeau resynchronisé : trois preuves, bouton de 44 px, rotation, pause, swipe et `prefers-reduced-motion` conservés ;
- comparaison au commit `254edefd` : bandeau identique, Hero limité aux trois lignes d intégration navbar attendues ;
- pullbacks Shopify : contrat quartz rose 2/2, désactivation du dock 1/1, parité octet par octet ;
- contrôle du polish Hero sur la preview privée : `1440 x 1000`, `390 x 844` et `360 x 800`, H1 unique et exact, descriptif sur deux lignes, scène mobile à `translateY(-70px)`, aucun débordement horizontal ;
- panier sur la preview privée : ouverture avec bandeau masqué, fermeture avec bandeau restauré ;
- comparaison au commit `4d0b3c39` : bandeau identique, Hero limité aux trois lignes d intégration navbar attendues ;
- pullback Shopify du polish Hero : 2/2, parité octet par octet ;
- contrôle du Hero final à 390 px avant le micro-patch scroll : slogan et point or conformes, un seul H1, une seule image, zéro lien, zéro bouton, zéro parcours et aucun débordement horizontal ;
- contrôle statique du micro-patch `8b781461` : nacre 16 %, blur 12 px, saturation 112 % et filet nacré fin ;
- comparaison au commit `8b781461` : Hero limité aux trois lignes d intégration navbar attendues ;
- pullbacks Shopify du Hero final et du micro-patch scroll : 1/1 puis 1/1, parité octet par octet ;
- contrôle du parcours à onglets : desktop 1440 x 1000, mobile 390 x 844 et 360 x 800, un seul panneau visible, cibles tactiles de 85 px et aucun débordement horizontal ;
- contrôle du menu mobile à 390 px : `Rituels & bien-être` ouvert avec collection générale, Savons naturels, Bols chantants et Bougies émotionnelles ;
- contrôle HTTP des 21 destinations du menu privé : 21 réponses publiques HTTP 200 ;
- contrôle des six collections pierres mises en avant : six routes HTTP 200 et 47 produits cumulés dans leurs collections publiques ;
- contrôle des erreurs navigateur du lot taxonomie et parcours : aucune erreur ;
- pullback Shopify du lot taxonomie et parcours : 7/7 identique après nettoyage des anciens réglages Hero devenus invalides dans `templates/index.json` ;
- correction du défaut antérieur dans `templates/page.json` : virgule terminale supprimée ;
- `git diff --check` : succès ;
- Theme Check : zéro erreur, 18 avertissements préexistants dans dix fichiers hors lot.

Les deux erreurs console observées dans le contexte de preview concernent l iframe Shop et une ressource 403 de la barre de preview Shopify. Elles ne proviennent pas des composants de navigation.

## Mutations Shopify exactes

Créé dans Shopify Admin :

- un thème non publié `199957807451` ;
- un menu privé `322508423515`.

Poussé uniquement sur le thème non publié : fichiers de navigation, homepage, guides, Header, Footer et templates du lot, puis synchronisation quartz rose, désactivation de l ancien dock mobile, reprise du Hero final canonique `6d986c20` et du micro-patch scroll canonique `8b781461`.

Dernière mutation privée du 2026-08-15 :

- `assets/milaura-home-paths.css` ;
- `assets/milaura-home-paths.js` ;
- `assets/milaura-navigation.css` ;
- `sections/milaura-home-paths.liquid` ;
- `sections/milaura-navbar.liquid` ;
- `snippets/milaura-nav-curated-links.liquid` ;
- `templates/index.json`.

Non modifié :

- thème live `190430282075` ;
- menu public `main-menu` ;
- produits, statuts produit, collections, stocks, livraison et panier ;
- pages Shopify des deux guides ;
- GSC, GA4, Merchant Center, Pinterest et campagnes Ads.

## Blocages avant activation publique

1. GO visuel explicite de Patrice sur la preview `199957807451` ;
2. création et publication coordonnée des deux pages guides avec leurs templates et métadonnées ;
3. remplacement simultané des liens guides dans le menu public ;
4. contrôle de la collection best-sellers et de son ordre réel ;
5. ajout de `Offres du moment` uniquement après création d une vraie promotion ;
6. polish séparé du bandeau cookies, encore trop massif sur mobile et détenu par les fichiers globaux actuellement réservés à une autre session ;
7. contrôle sitemap puis Search Console dès qu un accès légitime est disponible.
