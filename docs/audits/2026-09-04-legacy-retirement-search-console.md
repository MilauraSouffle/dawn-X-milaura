# MilAura : audit Search Console apres retrait legacy

Date : 2026-09-04 19:42 CEST. Perimetre : propriete `sc-domain:milaura.fr`, recherche Web, 237 anciens produits retires le 2026-09-04. Audit en lecture seule, sans redirection, soumission de sitemap ni demande d'indexation.

## Verdict

Le retrait n'est pas neutre pour l'acquisition organique : 59 handles retires ont genere 109 clics sur les 28 derniers jours disponibles, soit 55,6 % des clics de la table Pages. Il faut traiter les anciennes URLs utiles avant que Google actualise leur etat. Ce chiffre mesure l'exposition historique, pas une perte deja constatee.

Aucune action manuelle ni anomalie de securite signalee par Search Console. Cela n'exclut ni une perte de trafic sur les pages retirees ni un effet algorithmique. Les 404 ne constituent pas, a elles seules, une penalite generale du domaine. Une page definitivement retiree sans equivalent peut legitimement rester en 404 ; une fiche temporairement indisponible gagne normalement a rester accessible avec une disponibilite exacte. Sources : [Google, erreurs 404](https://support.google.com/webmasters/answer/2445990?hl=en) et [Google, maintenir les pages de produits indisponibles](https://developers.google.com/search/docs/crawling-indexing/pause-online-business).

Le plan de transition SEO aurait du accompagner le retrait. Mettre tous les stocks a zero n'aurait pas ete une correction fiable : certains anciens stocks etaient artificiels, certains produits ont un stock reel, d'autres sont abandonnes ou remplacent des doublons. La decision doit porter sur l'URL, le produit exact et la disponibilite reelle, pas sur un compteur global de 404.

## Donnees et methode

Lecture authentifiee de Search Console, table Pages complete avec pagination 500 : 342 lignes URL sur trois mois, 303 sur 28 jours. Rapprochement des chemins produit par handle exact avec les 237 IDs du retrait ; variantes de requete agregees sans perdre leurs clics. Aucun export CSV natif obtenu, son telechargement a ete bloque ; les donnees proviennent du DOM visible, pas d'un contournement du blocage.

| Mesure | 2026-06-03 au 2026-09-02 | 2026-08-06 au 2026-09-02 |
| --- | ---: | ---: |
| Clics, carte globale propriete | 462 | 188 |
| Impressions, carte globale propriete | 25 650 | 11 023 |
| CTR global | 1,8 % | 1,7 % |
| Position moyenne globale | 10,5 | 12,5 |
| Clics, somme de la table Pages | 472 | 196 |
| Impressions, somme de la table Pages | 27 175 | 11 487 |
| Handles retires avec une ligne de performance | 224 | 215 |
| Handles retires avec au moins un clic | 103 | 59 |
| Clics des handles retires | 231 | 109 |
| Impressions des handles retires | 16 499 | 8 243 |
| Part des clics dans la table Pages | 48,9 % | 55,6 % |

Ne pas diviser les clics des lignes Pages par les cartes globales : Google utilise des aggregations differentes par propriete et par page. [Explication officielle des aggregations](https://support.google.com/webmasters/answer/17011364?hl=en).

Une absence de ligne signifie « absent du rapport visible pour cette periode », pas « aucun trafic ou backlink depuis toujours ». Toutes les donnees de performance se terminent le 2026-09-02, avant le retrait du 2026-09-04. Aucune comparaison avant/apres valide n'est encore possible.

## P0 : continuite des anciennes URLs qui apportent des visiteurs

Premieres URLs a instruire ; il ne s'agit pas d'une liste de redirections deja approuvees.

| Handle apres `/products/` | Clics 3 mois | Clics 28 jours | Impressions 28 jours |
| --- | ---: | ---: | ---: |
| `pendule-cristal-de-roche` | 13 | 6 | 376 |
| `pendentif-tourmaline-noire` | 7 | 5 | 107 |
| `pendule-cornaline` | 7 | 5 | 59 |
| `pendule-labradorite` | 6 | 5 | 138 |
| `collier-obsidienne-noire-boho-dore` | 8 | 4 | 692 |
| `pendule-jaspe-rouge` | 5 | 4 | 36 |
| `bague-argent-925-modele-01-aigue-marine-bresil-aa-1-piece-lo` | 13 | 3 | 412 |
| `bracelet-jaspe-mokaite` | 5 | 3 | 67 |

Le rapprochement SKU/barcode avec les 179 EAN canoniques proteges ne trouve aucun equivalent exact parmi les 237 retires. Cela ne prouve pas qu'aucun equivalent commercial n'existe : beaucoup d'anciennes fiches sont mal referencees. Aucun mapping 301 automatique n'est valide a ce stade.

Deux exemples de la revue necessaire :

- L'ancienne bague aigue-marine `10488132108635` et la nouvelle `10680525357403`, EAN `3701459057863`, ont un prix et des attributs proches. L'ancienne n'a pas d'EAN prouve. Identite exacte a verifier par source et images avant choix de cible ; ancien endpoint 404, nouveau 200.
- L'ancien `bracelet-labradorite`, SKU `3701459019007`, est un bracelet baroque. Ne pas l'assimiler automatiquement a un bracelet de perles rondes de 6 mm.

Le collier Boho obsidienne est prioritaire aussi commercialement : Patrice confirme quatre unites physiques, mais son ancienne fiche `10557516644699` est toujours DRAFT. Enrichissement et remise en vente doivent conserver ou traiter son ancienne URL. La confirmation du Sheet ne vaut pas activation Shopify.

## P1 : decouverte Google et sitemap

Constats publics du 2026-09-04 :

- `https://milaura.fr/sitemap.xml` : HTTP 200, XML valide, cinq sous-sitemaps repondant chacun 200.
- Sitemap produits : 174 URLs, soit la Home et exactement les 173 handles canoniques actifs ; aucun manque, intrus, doublon ou handle retire.
- Autres sous-sitemaps : agentic discovery une URL, pages 13, collections 30, blogs sept.
- `robots.txt` : HTTP 200, produits autorises et bon sitemap declare.
- `https://www.milaura.fr/` : 301 vers `https://milaura.fr/`, page finale 200 et canonique correcte. Les anciennes lignes www dans GSC ne prouvent pas un bug actuel.

Search Console affiche pourtant, pour le sitemap racine, un envoi au 2026-02-12, une derniere lecture au 2026-02-22, un traitement reussi mais zero page, zero video et aucun sous-sitemap visible. C'est un etat ancien et incoherent avec le sitemap public actuel, pas la preuve d'un sitemap public casse. Preparer sa nouvelle soumission et controler ensuite sa lecture, apres GO de correction.

Inspections individuelles :

| URL | Etat memorise par Google | Etat public actuel |
| --- | --- | --- |
| `/products/pendule-cristal-de-roche` | Indexee, derniere exploration 2026-08-31 a 13:42:23, smartphone, recuperation reussie, canonique identique ; origine `/collections/all?page=18` | 404 sans redirection |
| `/products/bracelet-fin-en-hematite-perles-de-4-mm` | Non indexee, Google ne reconnait pas l'URL, aucune exploration signalee | 200, canonique identique, sans noindex, presente dans le sitemap actuel |

Google n'a donc pas encore aligne ces deux exemples sur le nouveau catalogue. Ne pas conclure que les 173 nouvelles fiches sont toutes indexees, ni qu'elles sont toutes inconnues : seules ces deux inspections ont ete faites.

## Etat d'indexation et liens : limites importantes

Rapport Indexation mis a jour le 2026-08-28 : 366 pages indexees et 686 non indexees. Parmi ces dernieres : 425 variantes avec canonique correcte, 159 erreurs 404, 27 noindex, 11 redirections, sept bloquees par robots, une autre erreur 4xx, un doublon sans canonique choisie par l'utilisateur et 55 explorees non indexees.

Les 159 erreurs 404 de ce rapport precedent le retrait du 2026-09-04. Ne pas les attribuer a cette operation ni les additionner aveuglement aux 237 handles.

Rapport Liens : huit liens externes, tous vers la Home ; 10 403 liens internes declares. Aucun backlink produit observe dans cet echantillon GSC. Ce n'est pas une preuve d'absence de backlinks sur l'ensemble du web. Le maillage interne n'a pas fait l'objet d'un nouveau crawl global dans ce lot ; les deux recommandations orphelines deja documentees restent ouvertes.

## Plan correctif propose, non execute

1. Prioriser les 59 handles avec clics recents, puis les 215 avec impressions. Pour chaque URL : meme produit ou equivalent reel -> 301 ciblee ; rupture temporaire ou page encore utile sans equivalent -> maintien d'une fiche informative 200 avec achat effectivement bloque et disponibilite exacte ; retrait definitif sans equivalent ni utilite -> vraie 404 assumee. Un tel maintien necessite un GO distinct du retrait, sans remettre les anciens faux stocks en vente. Aucun renvoi general vers la Home. Mesure : chaque handle prioritaire dispose d'une decision documentee, les 301 choisies finissent en 200 sans boucle ni chaine, aucune fiche indisponible n'est achetable.
2. Apres decision catalogue et GO : soumettre le sitemap actuel et demander l'inspection des cibles prioritaires. Ne pas utiliser l'outil Suppressions. Mesure : date de lecture GSC actualisee, sous-sitemaps reconnus, evolution de la decouverte/indexation des cibles. Ni la soumission ni un delai d'indexation ne sont garantis par cet audit.
3. Une fois des donnees posterieures au 2026-09-04 disponibles : comparer des fenetres equivalentes de sept puis 28 jours, en agregeant anciens handles et cibles validees et en isolant la cohorte canonique non concernee. Mesure : clics, impressions, CTR, position et statut d'indexation par cohorte. Une baisse globale seule ne prouve pas sa causalite. Aucun suivi automatise n'a ete cree.

Dans Shopify, les redirections de produits fonctionnent depuis une URL devenue inaccessible, notamment DRAFT. Il n'est pas necessaire de supprimer definitivement le produit pour les appliquer. [Documentation Shopify des redirections](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect).

## Preuves et perimetre ferme

Preuves privees, hors Git : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-04-gsc-gift-confirmations/`.

- `gsc-ui-observations.json` : periodes, cartes globales, indexation, liens, sitemap et deux inspections.
- `gsc-legacy-metrics.txt` et `gsc-reconciliation.json` : matrice exhaustive des 237 handles, valeurs absentes distinguees des zeros, totaux et identites verifies.
- `public-verification.json`, `sitemap-reconciliation.json`, HTML et XML : controles HTTP, canoniques et parite des 173 produits.
- `audit-evidence-manifest.json` : 32 fichiers verifies par SHA-256, aucun ecrasement des preuves precedentes.

Les 237 endpoints avaient ete controles 404 dans le lot de retrait a 18:40 ; ce lot SEO a recontrole trois anciens endpoints prioritaires, pas rejoue les 237 requetes. Aucun theme, schema, contenu SEO, robots, produit legacy, canal ou Ads modifie par l'audit. Pas de nouveau benchmark mobile, Lighthouse ou validation complete des donnees structurees : hors du perimetre de transition demande.
