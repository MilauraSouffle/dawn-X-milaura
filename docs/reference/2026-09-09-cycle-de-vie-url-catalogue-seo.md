# Cycle de vie SEO des URL catalogue MilAura

Date : 2026-09-09
Statut : contrat opérationnel proposé pour validation et branchement au pipeline catalogue

## Décision centrale

Le stock, le statut commercial et l'URL sont trois états différents. Une rupture de stock ne doit jamais déclencher automatiquement un changement de handle, une mise en brouillon ou une redirection.

Le handle devient immuable dès la première publication publique. Le titre produit, le title SEO, la description, le prix, le stock et les médias peuvent évoluer sans changer l'URL.

Google recommande de conserver en ligne les pages temporairement indisponibles et d'y signaler correctement la rupture. Pour une migration d'URL, Google recommande une redirection permanente vers une destination réellement équivalente, sans redirection générique vers l'accueil. Shopify recommande également de ne pas modifier fréquemment les handles.

Sources :

- [Google, pause ou rupture temporaire d'une activité e-commerce](https://developers.google.com/search/docs/crawling-indexing/pause-online-business)
- [Google, déplacement d'URL et redirections permanentes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [Google, structure des URL](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- [Shopify, ajout et mise à jour des produits](https://help.shopify.com/en/manual/products/add-update-products)
- [Shopify, redirections d'URL](https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect)

## Arbre de décision obligatoire

### Produit en stock

- URL : conserve le handle publié.
- HTTP : `200` et indexable.
- Données structurées : `InStock`.
- Collection : présence selon les règles de type et de pierre.

### Produit temporairement épuisé ou réapprovisionnable

- URL : conserve le handle publié.
- HTTP : `200` et indexable.
- Achat : bloqué proprement.
- Données structurées : `OutOfStock`.
- Contenu : délai seulement s'il est prouvé, alternatives proches et inscription au retour en stock si disponible.
- Interdit : brouillon automatique, suppression, handle différent au réassort.

### Produit définitivement retiré avec successeur exact

- URL source : redirection `301` directe vers le successeur exact.
- Destination : `200`, indexable et commercialement disponible au moment de la création de la redirection.
- Chaîne : un seul saut.
- Durée : au moins un an, de préférence tant que l'ancienne URL reçoit encore des accès ou des liens.
- Liens internes : remplacés par la destination finale.

### Produit définitivement retiré sans équivalent

- URL : vraie `404` ou `410`.
- Aucun renvoi vers l'accueil, une collection vague ou un produit simplement ressemblant.
- Le produit peut être retiré du sitemap et des liens internes.
- Une ancienne URL ayant des signaux Search Console exige une décision humaine documentée avant retrait.

### Collection temporairement vide

- Si le réassort est certain et proche : conserver `200` seulement avec un contenu utile, un état clair et des alternatives pertinentes.
- Si la collection n'a plus de gamme durable : dépublier ou consolider vers une collection strictement équivalente.
- Interdit : laisser durablement une page indexable vide avec un texte générique.

## Registre d'URL à maintenir

Une ligne par produit, indexée par l'identifiant Shopify immuable :

| Champ | Rôle |
|---|---|
| `shopify_product_id` | identifiant immuable |
| `ean_or_sku` | rapprochement catalogue lorsque disponible |
| `current_handle` | handle public actuel |
| `previous_handles` | historique complet |
| `first_published_at` | première publication |
| `last_seen_at` | dernier contrôle |
| `commercial_state` | en stock, rupture temporaire, retrait définitif |
| `shopify_status` | active, draft, archived |
| `gsc_clicks_28d` et `gsc_impressions_28d` | signal récent |
| `gsc_clicks_90d` et `gsc_impressions_90d` | signal consolidé |
| `replacement_url` | successeur exact validé |
| `url_decision` | conserver 200, 301, 404 ou 410 |
| `decision_owner` et `decision_date` | traçabilité humaine |

## Garde-fous du pipeline catalogue

Le pipeline doit échouer avant toute mutation si l'un des cas suivants est détecté :

1. changement de handle d'un produit déjà publié sans redirection vers la nouvelle URL ;
2. passage `ACTIVE` vers `DRAFT` ou `ARCHIVED` d'une URL avec clics, impressions ou liens internes, sans décision URL ;
3. redirection dont la destination ne répond pas `200` ;
4. redirection en chaîne ;
5. réutilisation d'un ancien handle pour un autre produit ;
6. création d'une collection sans assortiment minimal, contenu distinct et requête attribuée ;
7. retour en stock créant une nouvelle fiche au lieu de réactiver l'URL historique.

## Contrôle hebdomadaire

1. prendre un snapshot Shopify en lecture seule ;
2. comparer les identifiants, handles et statuts au snapshot précédent ;
3. croiser les changements avec Search Console et les liens internes ;
4. vérifier chaque redirection publiquement ;
5. crawler le sitemap et les liens internes ;
6. produire une file de décisions, sans mutation automatique de statut produit.

KPI de conformité :

- `0` changement de handle public non couvert ;
- `0` redirection vers une `404` ;
- `0` chaîne de redirection ;
- `0` URL avec clic récent retirée sans décision ;
- `100 %` des nouvelles collections reliées depuis au moins une page parente.

## Application à MilAura au 2026-09-09

Le snapshot courant compte 765 produits : 215 actifs, 535 brouillons et 15 archivés. Les 215 actifs disposent tous d'un title SEO et d'une meta description explicites. Les 215 ont aussi un stock positif dans le snapshot.

Le problème actuel ne vient donc pas d'un manque général de métadonnées produit. Il vient principalement de la continuité d'URL : sur le lot historique de 237 produits retirés le 2026-09-04, 35 URL ayant reçu au moins un clic sur 28 jours sont de nouveau en brouillon au 2026-09-09. Leur réactivation ou leur retrait définitif doit être décidé par le propriétaire catalogue, jamais déduit par le SEO.
