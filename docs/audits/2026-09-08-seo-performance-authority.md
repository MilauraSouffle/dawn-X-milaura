# Audit SEO, performance et autorite MilAura

Date de controle : 2026-09-08

Perimetre : storefront public `milaura.fr`, theme live Shopify `190430282075`, preview privee `201115566427`, Search Console, Merchant Center, contenu du Journal, signaux AEO/GEO et autorite externe.

## Verdict

MilAura dispose d un socle SEO plus avance que ne le laisse penser sa faible autorite : pages canoniques, sitemap, donnees structurees, Journal, `llms.txt`, `agents.md` et decouverte UCP sont presents. Le probleme principal avant acquisition payante n est pas une panne globale du site. Il est double : le laboratoire mobile reste lent sur la page d accueil et le domaine ne possede presque aucun signal editorial externe.

Les trois priorites sont donc :

1. publier le lot performance deja valide sur la preview, puis mesurer la page publique ;
2. reduire l indexation inutile et continuer les contenus capables de gagner des requetes non marque ;
3. executer une acquisition d autorite ciblee, suivie et humaine, sans achat de liens ni spam de forums.

## 1. Performance

### Mesure

- Experience reelle Shopify sur 30 jours : LCP P75 `1 354 ms`, INP `88 ms`, CLS `0`. Les trois Core Web Vitals sont bons sur le trafic mesure.
- Search Console Core Web Vitals mobile : `35` URL bonnes, `0` a ameliorer, `0` mauvaise. Aucun volume desktop exploitable.
- PageSpeed Insights public du 2026-09-08 : score mobile `65`, FCP `2,7 s`, LCP `7,6 s`, TBT `310 ms`, CLS `0,001`, Speed Index `2,8 s`, poids transfere `2 907 KiB`.
- Le test PageSpeed de la preview n est pas exploitable : Google a retire le parametre de preview et a mesure le theme public.

Conclusion : le site est sain pour les visiteurs reels deja mesures, mais l acquisition froide sur mobile reste exposee a un premier chargement trop lourd. Le signal RUM et le signal laboratoire ne se contredisent pas : ils mesurent des populations et des conditions differentes.

### Correctifs publies et verifies

- Chargement des scripts et styles de recommandations limite aux fiches produit, panier, compte et diagnostic.
- Cinq feuilles de style du panier sorties du chemin bloquant avec repli `noscript`.
- Images produit servies avec des largeurs responsives explicites.
- Trois images WebP critiques reduites de `496 794` a `291 848` octets, soit `204 946` octets et `41,3 %` economises.
- Dimensions intrinseques corrigees pour le bloc pierres de naissance afin de proteger la stabilite visuelle.
- Poster mobile Sodalite reduit a `832 x 832`.

Le lot a ete publie le 2026-09-08 sur le theme live `190430282075`. Le pullback des sept fichiers est identique au worktree. La QA publique confirme : aucune regression visuelle observee, aucun debordement a `390 px` ou `1440 px`, un seul H1 sur la Home et la fiche produit, panier fonctionnel, recommandations absentes de la Home mais presentes et fonctionnelles sur la fiche produit.

### Mesure publique apres deploiement

Deux premiers runs mobiles ont expose la faiblesse du LCP froid, avec des scores `60` puis `59` et un LCP `12,5 s`. Le LCP etait l image principale du Hero, chargee tard depuis le body. Un dernier micro-correctif a donc ajoute son preload responsive dans le head, sans changer le rendu ni charger la mauvaise variante.

Rapport final du 2026-09-08 a 19:31 CEST : `https://pagespeed.web.dev/analysis/https-milaura-fr/ifp1xb4wq1?form_factor=mobile`.

- mobile : performance `70`, SEO `100`, FCP `2,1 s`, LCP `7,3 s`, TBT `210 ms`, CLS `0`, Speed Index `3,2 s`, poids transfere `2 813 KiB` ;
- bureau : performance `89`, SEO `100`, FCP `0,6 s`, LCP `1,5 s`, TBT `190 ms`, CLS `0,001`, Speed Index `1,0 s`, poids transfere `2 768 KiB`.

Par rapport au laboratoire mobile releve avant le lot, le score passe de `65` a `70`, le FCP de `2,7 s` a `2,1 s`, le LCP de `7,6 s` a `7,3 s`, le TBT de `310 ms` a `210 ms`, le poids de `2 907 KiB` a `2 813 KiB` et le blocage du rendu estime de `1 030 ms` a `550 ms`. Le Speed Index varie de `2,8 s` a `3,2 s`. Le lot produit donc une amelioration mesuree, mais le LCP mobile froid reste trop haut pour parler de performance terminee au sens absolu. Les prochains gains se trouvent surtout dans les images encore surdimensionnees, les `163 KiB` de JavaScript inutilise et les applications ou pixels Shopify. Les donnees reelles Shopify et Search Console restent vertes ; elles doivent rester le juge principal apres une fenetre de trafic suffisante.

### Risque residuel

Une part importante du JavaScript et du temps CPU provient des pixels et applications Shopify. Le lot actuel retire uniquement le cout controle par le theme. Les applications doivent etre auditees une par une apres mesure publique, sans supprimer un outil de mesure ou une fonction commerciale par deduction.

## 2. SEO, AEO et GEO

### Socle conforme

- `robots.txt` public, sitemap principal et sitemaps produits, pages, collections et blogs accessibles.
- Canonique correcte sur les pages publiques testees.
- Schema global `Organization` et `WebSite`.
- Fiche produit testee : `Product`, `Offer`, disponibilite, prix, `BreadcrumbList` et `FAQPage` presents.
- Article test : schema `Article`, auteur Karine, date, image et contenu principal presents.
- `https://milaura.fr/llms.txt`, `https://milaura.fr/agents.md` et `https://milaura.fr/.well-known/ucp` repondent en HTTP 200.

### Corrections publiques du 2026-09-08

- Meta description Home remplacee pour retirer la garantie globale non prouvee de certification LFG.
- Meta descriptions ajoutees ou reecrites pour Bracelets, Colliers et Sodalite.
- Title et meta description du Journal clarifies autour de la lithotherapie, du choix et de l entretien des pierres.
- Redirections 301 exactes : `/collections/bagues`, `/pages/guide-des-pierres`, `/pages/guide-des-senteurs`, `/products/sauge-blanche` vers quatre destinations publiques pertinentes.
- Aucun lot de 404 redirige en masse vers la Home.

### Correction prete dans le theme

- `/blogs/infos` recoit publiquement `noindex,follow` afin de ne pas concurrencer le Journal.
- Le second H1 de la Home est remplace par un H2. Le storefront public rend exactement un H1.

### Indexation et contenu

Etat Search Console lu le 2026-09-08 : `396` pages indexees et `809` non indexees. Les familles principales sont `431` autres pages avec balise canonique correcte, `125` URL 404, `27` URL noindex, `12` redirections, `7` bloquees par robots, `155` decouvertes mais non indexees et `50` explorees mais non indexees.

Les doublons canoniques et redirections sont attendus en partie sur Shopify. Le vrai travail de fond porte sur les `205` URL decouvertes ou explorees mais non indexees : qualite, maillage, intention, statut produit et consolidation doivent etre controles par lot, sans demander l indexation de masse.

Le Journal contient cinq articles publics. Leur structure et leur prudence medicale sont bonnes, mais ce volume ne suffit pas encore pour occuper les grappes de longue traine. Hermes editorial autonome n est pas actif : aucun cron de publication et aucun pipeline serveur approuve ne publient aujourd hui. Chaque brouillon Hermes doit rester soumis a la revue de Karine.

## 3. Autorite, affiliation et notoriete

### Diagnostic

Search Console compte `8` liens externes, tous vers la Home. Les domaines visibles sont ONORA, Mappy, Montigny Entreprendre, Pinterest et Scamadviser. L estimation de Patrice, environ `10 %` d un vrai travail d autorite, est coherente avec cet etat.

Le fichier `2026-09-08-authority-outreach-100.csv` classe exactement `100` cibles : medias, podcasts, acteurs locaux, createurs, lithotherapie, yoga, meditation, reiki et mariage. Chaque ligne contient un score, un niveau, un canal, un angle, un statut et une date de controle.

### Premiere vague

Envois verifies le 2026-09-08 :

- Le Journal du Yoga ;
- Esprit Yoga ;
- MeditationFrance ;
- Metz Magazine ;
- Blog MOSL ;
- Metamorphose ;
- Hello Metz ;
- Yoga avec Valentine ;
- NeverMind ;
- FemininBio, tentee sur deux adresses publiques mais non delivree.

FemininBio a rejete les deux adresses publiques testees, `redaction@femininbio.com` puis `presse@femininbio.com`, avec le code `550 5.4.1`. Les neuf autres messages de la vague ne presentent aucun rejet immediat dans Gmail. Tout-Metz avait deja ete contacte le 2026-09-07. La Mariee aux Pieds Nus a repondu qu elle ne prenait pas de nouvelles propositions et ne doit pas etre relancee.

Deux concept stores initialement envisages ont ete retires de la vague : ils annoncent travailler avec des createurs artisanaux francais, alors que MilAura est une selectionneuse et commercante. Les contacter avec un positionnement artisanal non prouve aurait affaibli la marque.

### Regles d execution

- Pas d achat de liens, de reseau de sites, de commentaire automatise ni de publication de masse sur des forums.
- Pas de faux temoignage, de compte dissimule ou de recommandation se faisant passer pour un membre independant.
- Une proposition personnalisee, un contenu original et une destination utile par contact.
- Echantillon, commission, sponsoring et depense restent des gates commerciaux distincts.
- KPI hebdomadaires : messages envoyes, delivres, reponses, rendez-vous, contenus acceptes, liens publies, domaines referents, clics referents et revenu attribue.

## Readiness Ads

Statut : `PAS ENCORE GO ADS`.

Merchant Center au 2026-09-08 : `1 670` articles, `1 470` approuves, `201` limites par le stock et `4` refuses. Les campagnes doivent exclure les produits refuses ou non approvisionnables. Le lot performance est public et le parcours d ajout au panier est teste, mais la preuve fraiche de l evenement Purchase Pixel/CAPI n a pas ete produite dans ce lot.

Le lancement payant exige encore : produits choisis en stock et approuves, marge contributive verifiee, evenement Purchase actuel et GO de depense explicite. Le signal PageSpeed mobile de laboratoire doit etre suivi, mais les Core Web Vitals reels actuellement disponibles ne bloquent pas a eux seuls les Ads.

## Verification du lot

- `shopify theme check` : `0` erreur, `16` avertissements historiques.
- Preview privee puis storefront public : Home et PDP controles en desktop et mobile.
- Mobile `390 x 844` : `scrollWidth = innerWidth = 390`.
- Home publique : un H1, recommandations non chargees, aucun debordement a `390 px` et `1440 px`.
- PDP publique : un H1, recommandations rendues, schema Product present, panier ajoute et drawer ouvert ; panier de test ensuite vide.
- `/blogs/infos` public : canonique correcte et `noindex,follow`.
- Sept fichiers compares apres push et pullback du theme live : `7/7` identiques en SHA-256.
- PageSpeed public final apres preload du Hero : mobile `70`, bureau `89`, SEO `100` sur les deux profils ; score mobile `+5` et LCP `-0,3 s` face au run avant lot.
- Redirections publiques : quatre sources en HTTP 301 et destinations en HTTP 200.
- CSV autorite : `100` lignes de donnees et `9` champs sur chaque ligne.

## Cloture des trois taches

1. Performance : lot cible publie sur le theme live `190430282075`, pullback `7/7`, QA publique et PageSpeed executes.
2. SEO : metadonnees et redirections Admin appliquees, H1 corrige, `/blogs/infos` en `noindex,follow`, audit GSC et socle technique verifies.
3. Autorite : `100` cibles classees, premiere vague executee, neuf messages sans rejet immediat, FemininBio marque en echec de delivrance, KPI et regles anti-spam documentes.

Ces trois taches sont executees et verifiees. Le lancement Ads reste une gate separee, non autorisee par ce lot et bloquee tant que stock, marge contributive, evenement Purchase et budget ne sont pas valides ensemble.
