# MilAura - Contrat de navigation V2

Date : 2026-08-14

Statut : prêt sur le thème de preview isolé `199957807451`, `MilAura Navigation V2 2026-08-14`. Aucun changement du menu Shopify public avant GO visuel explicite.

Preview globale : `https://milaura-2.myshopify.com?preview_theme_id=199957807451`.

Les deux templates de guide peuvent être contrôlés avant création des pages Admin avec ces routes de preview temporaires :

- pierres : `https://milaura-2.myshopify.com/pages/bijoux-par-pierre?view=milaura-guide-pierres&preview_theme_id=199957807451` ;
- senteurs : `https://milaura-2.myshopify.com/pages/bijoux-par-pierre?view=milaura-guide-senteurs&preview_theme_id=199957807451`.

Ces deux URLs de contrôle ne sont pas les routes canoniques futures. Les routes canoniques restent `/pages/guide-des-pierres` et `/pages/guide-des-senteurs`.

## Objectif

Le menu doit répondre à six intentions sans recopier la homepage : voir les nouveautés, choisir un bijou, chercher une pierre, chercher une senteur, offrir et comprendre.

Le Cercle MilAura est l espace personnel `/account`. Il reste un utilitaire au même niveau que la recherche et le panier, jamais une rubrique éditoriale de la homepage.

## Menu principal

| Niveau 1 | Niveau 2 | Route | Statut au 2026-08-14 |
| --- | --- | --- | --- |
| Nouveautés | lien direct | `/collections/nouveautes` | publique |
| Bijoux | Tout voir | `/collections/bijoux-pierres-naturelles` | publique |
| Bijoux | Bracelets | `/collections/bracelets-pierres` | publique |
| Bijoux | Colliers | `/collections/colliers-pierres` | publique |
| Bijoux | Boucles d oreilles | `/collections/boucles-oreilles` | publique |
| Bijoux | Pendentifs | `/collections/pendentifs` | publique |
| Bijoux | Bagues | `/collections/bagues-pierres` | publique, stock à surveiller |
| Pierres | Bijoux par pierre | `/pages/bijoux-par-pierre` | publique |
| Pierres | Pierres de A à Z | `/pages/guide-des-pierres` | template local, page à créer après GO |
| Pierres | Histoire et symbolique | `/pages/guide-des-pierres#histoire-symbolique` | même dépendance |
| Pierres | Pierre de naissance | `/pages/pierres-de-naissance` | publique |
| Pierres | Aigue-marine | `/collections/par-pierre-aigue-marine` | publique |
| Pierres | Améthyste | `/collections/par-pierre-amethyste` | publique |
| Pierres | Agate | `/collections/par-pierre-agate` | publique |
| Bougies et senteurs | Toutes les bougies | `/collections/bougies-senteurs` | publique |
| Bougies et senteurs | Senteurs de A à Z | `/pages/guide-des-senteurs` | template local, page à créer après GO |
| Cadeaux | Pierre de naissance | `/pages/pierres-de-naissance` | publique |
| Cadeaux | Anniversaire de mariage | `/pages/cadeaux-anniversaire-de-mariage` | publique |
| Cadeaux | Sélection de saison | `/collections/selection-aout-2026` | publique, à remplacer en septembre |
| Guides | Choisir selon son ressenti | `/pages/choisir-sa-pierre` | publique, nouveau H1 à valider |
| Guides | Faire le diagnostic | `/pages/diagnostic-emotionnel` | publique |
| Guides | Le Journal | `/blogs/journal` | public, contenu à reprendre |
| Guides | Notre histoire | `/pages/notre-histoire` | publique |

Le sous-menu Pierres ne doit pas devenir une liste arbitraire. Trois pierres commerciales suffisent dans le premier écran. L index alphabétique porte l exhaustivité et affiche les autres destinations actives.

## Utilitaires

| Utilitaire | Route ou action | Règle |
| --- | --- | --- |
| Recherche | recherche Shopify | accessible au clavier et sur mobile |
| Trouver ma pierre | `/pages/diagnostic-emotionnel` | CTA distinct du groupe Guides |
| Cercle | `{{ routes.account_url }}` | compte client |
| Contact | `/pages/contact-milaura` | footer et aide |
| Panier | panier Shopify | aucun changement dans ce lot |

## Offres du moment

`Offres du moment` est une septième entrée conditionnelle. Elle n apparaît que si ces quatre critères sont vrais :

1. une sélection commerciale réelle existe ;
2. les prix comparés ou réductions sont exacts ;
3. la période de validité est connue ;
4. la destination ne contient pas une simple poignée de produits hors stock.

La page historique `/pages/promo-bougies` n est pas promue automatiquement. Sa qualité, ses produits et ses allégations doivent être contrôlés avant activation.

## Matrice d activation des deux guides

| Élément | Preview | Publication |
| --- | --- | --- |
| template `page.milaura-guide-pierres` | autorisée sur thème de développement | après GO visuel |
| template `page.milaura-guide-senteurs` | autorisée sur thème de développement | après GO visuel |
| page `/pages/guide-des-pierres` | ne pas créer si la preview privée n est pas sûre | créer et publier après GO |
| page `/pages/guide-des-senteurs` | ne pas créer si la preview privée n est pas sûre | créer et publier après GO |
| liens du menu public | interdits avant publication des pages | activer dans la même fenêtre que les pages |
| liens du footer public | interdits avant publication des pages | activer dans la même fenêtre que les pages |
| sitemap | absent tant que les pages ne sont pas publiques | vérifier après publication |

Métadonnées proposées, non écrites dans Shopify au 2026-08-14 :

| Route | Title proposé | Meta description proposée |
| --- | --- | --- |
| `/pages/guide-des-pierres` | Guide des pierres de A à Z | Retrouvez les pierres par ordre alphabétique, leur symbolique traditionnelle, les conseils d entretien et les sélections MilAura réellement disponibles. |
| `/pages/guide-des-senteurs` | Guide des senteurs de bougies | Explorez les senteurs présentes dans les bougies MilAura et retrouvez la création associée à chaque note olfactive. |

## Contrôles avant activation publique

1. mobile 390 x 844 et desktop 1440 x 1000 ;
2. menu utilisable au clavier, focus visible et fermeture avec Échap ;
3. liens réels en `<a href>` ;
4. aucun lien vers une page vide ;
5. un seul H1 par destination ;
6. pages guides publiées avant les liens du header et du footer ;
7. contrôle sitemap après publication ;
8. vérification Search Console différée tant que l accès légitime n est pas configuré.
