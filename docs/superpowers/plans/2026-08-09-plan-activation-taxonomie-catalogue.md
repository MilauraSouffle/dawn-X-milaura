# Plan d'activation de la taxonomie catalogue MilAura

Date : 2026-08-09
Statut : phase 2 privée exécutée, correctif SEO technique live validé
Autorisation reçue : GO de Patrice le 2026-08-09 pour les définitions, le lot test de 20 produits actifs, les collections hors Boutique en ligne, les contenus en brouillon, les templates en preview et la réparation des éléments SEO techniques hors livraison

## 1. Résultat visé

Une architecture publique courte, profonde et mesurable :

- 1 hub bijoux ;
- 5 collections de type principales ;
- 1 hub pierre ;
- jusqu'à 10 collections pierre solides ;
- 1 hub de choix par intention ;
- 1 hub pierres de naissance ;
- 1 hub anniversaires de mariage ;
- enfants activés seulement après seuil.

## 2. P0 - vérité commerciale et conformité

Avant toute nouvelle page :

1. corriger ou retirer dans le schema produit l'ancien seuil 39 € et les frais 4,90 € ;
2. aligner livraison et retours entre pages, JSON-LD, checkout et Merchant ;
3. retirer les affirmations globales non prouvées : certification, fabrication française, provenance, horaires et fondateur si non documentés ; **fait dans le schema global live le 2026-08-09** ;
4. corriger le title corrompu de `bougies-emotionnelles` et la duplication de marque des titles ; **duplication de marque corrigée live, title de collection conservé en brouillon** ;
5. décider du sort de `/pages/bracelet-amethyste` après données Search Console ;
6. `noindex,follow` pour la recherche interne et traitement des URLs tag legacy ; **directive live ajoutée le 2026-08-09, liens et éventuelles redirections restent à traiter** ;
7. résoudre le produit non répertorié dans le sitemap et le cadeau actif qui répond en 404 ;
8. remplacer les formulations médicales ou garanties par des formulations factuelles et attribuées.

Gate P0 : build/lint thème, crawl ciblé, validation des politiques, aucune régression cart/delivery/UI, validation de Patrice lorsque visuel.

## 3. P1 - données et collections existantes

### Lot 1A - normalisation privée

- créer les définitions manquantes ;
- sauvegarder l'état avant changement ;
- migrer `boucles` vers `boucles-oreilles` ;
- arbitrer aventurine, obsidienne, jaspe et variantes ;
- passer les intentions à une liste contrôlée ;
- renseigner matériaux et couleurs ;
- traiter un lot test de 20 produits ;
- mesurer la parité avec les règles actuelles.

État au 2026-08-09 : 20 définitions produit et 11 définitions collection créées ; 13 produits `boucles` migrés ; 7 produits ont reçu les nouveaux champs d'intention ; les 20 produits ont reçu `catalogue_family=bijou` et une catégorie Shopify standard. Les 20 sont vérifiés actifs et publiés. Matériaux, couleurs et arbitrages pierre restent réservés à la session inventaire.

### Lot 1B - types

- corriger contenu et SEO des collections de type ;
- créer `bagues-pierres` hors Boutique en ligne ;
- assigner les templates en preview ;
- tester filtres, canonical, pagination et mobile ;
- publier Bagues seulement après correction des 18 baguettes minérales mal classées, contrôle des tailles et photos, puis atteinte de 8 vraies bagues.

État au 2026-08-09 : `bagues-pierres` créée hors Boutique en ligne avec 3 vraies bagues sélectionnées manuellement. La valeur `product_type_handle=bague` ne peut pas servir de règle tant que les 18 baguettes minérales ne sont pas reclassées.

Gate P1 types : zéro produit hors famille, zéro produit manquant attendu, 100 % des fiches avec matière et dimensions.

## 4. P1 - hub et collections pierre

### Vague 1

1. Améthyste : réconcilier 14 bijoux renseignés et 9 membres publics.
2. Quartz rose.
3. Agate.
4. Lapis-lazuli.
5. Amazonite.

### Vague 2

1. Jaspe après séparation des variantes.
2. Aventurine après arbitrage générique/verte.
3. Œil de tigre après passage du seuil préféré.
4. Sodalite après diversité.
5. Jade après preuve de variété.

Chaque collection est d'abord créée non publiée, avec handle réservé, règle et template preview. Publication une par une, jamais en lot aveugle.

État vague 1 au 2026-08-09 : Agate, Quartz rose, Lapis-lazuli et Amazonite créées non publiées avec contenu `draft`, SEO, sources et template `milaura-pierre`. Améthyste reste publique sur son template actuel dans l'attente d'une décision séparée.

Gate pierre : 5 bijoux minimum, 8 préférés, 2 types, image originale, contenu unique, sources, liens et données produit complètes.

## 5. P1/P2 - intentions

1. Créer le hub `/pages/choisir-sa-pierre` en preview.
2. Normaliser les 261 produits avant de conclure à la profondeur.
3. Tester quatre groupes seulement : calme/sommeil, amour/douceur, protection/ancrage, confiance/énergie.
4. Retirer des menus les trois collections actuelles trop faibles si elles restent sous le seuil.
5. Rediriger uniquement après cartographie Search Console et des backlinks.

Gate intention : 8 bijoux, 3 types, formulation non médicale, sélection relue.

## 6. P2 - naissance et mariage

### Naissance

- publier le hub complet 12 mois ;
- lancer ensuite seulement février ;
- réserver les 11 autres handles ;
- activer un mois à 6 bijoux et 2 types.

### Mariage

- publier le hub qui distingue anniversaire de mariage et cadeau de mariage ;
- préparer 25 ans et 48 ans en premier ;
- compléter l'inventaire pour 4, 17, 40, 42 et 50 ans ;
- activer six à huit années fortes avant toute extension.

Gate occasion : matière/pierre exacte, 6 produits, photos cadeau, livraison et délai fiables.

## 7. P2/P3 - Pinterest, Merchant et Ads

1. Vérifier les accès et la propriété des comptes.
2. Corriger les flux et identifiants.
3. Installer ou valider le consentement et les événements.
4. Créer les groupes de produits à partir des metafields.
5. Publier les tableaux organiques uniquement pour les landings actives.
6. Mesurer l'organique.
7. Soumettre un plan média séparé.
8. Ne lancer aucune campagne sans nouvelle autorisation.

## 8. Pages à créer

### À créer en preview après GO

- `/collections/bagues-pierres` ;
- `/pages/bijoux-par-pierre` ;
- collections pierre de la vague 1 ;
- `/pages/choisir-sa-pierre` ;
- `/pages/pierres-de-naissance` ;
- `/pages/cadeaux-anniversaire-de-mariage`.

### À réserver sans publier

- pierres sous le seuil ;
- onze mois hors février ;
- années de mariage non suffisamment alimentées ;
- groupes intention sous le seuil.

## 9. Pages à ne pas créer maintenant

- une page par variation singulier/pluriel ;
- une page par couleur sans stock et demande prouvés ;
- une page par budget ;
- une page femme, homme ou couple générique ;
- onze pages intention faibles ;
- douze mois publiés simultanément ;
- cinquante ou soixante pages de noces ;
- un guide et une collection ciblant exactement la même requête ;
- une page spéciale `AI Overview`, `GEO` ou `llms.txt` censée améliorer Google ;
- des facettes indexables par combinaison.

## 10. Mesure

| Étape | Mesure | Fenêtre |
|---|---|---|
| Baseline | indexation, requêtes, membres, conversions | avant changement |
| Preview | membres, HTML, schema, mobile, liens | avant publication |
| Technique | crawl, sitemap, canonical, 404 | J+1 à J+7 |
| Organique | clics, impressions, requêtes par URL | J+28 et J+90 |
| Commerce | vue liste, PDP, panier, achat, marge | 28 et 90 jours |
| Catalogue | acceptés/refusés, prix et stock | après chaque ingestion |

Une page sous-performante n'est pas supprimée à J+7. Il faut distinguer problème d'indexation, manque de demande, mauvais intent match, faible stock et faible conversion.

## 11. Limites de session et surfaces protégées

Ce plan ne modifie pas :

- sélection saisonnière d'août ;
- messages de livraison ;
- bandeau d'annonce ;
- footer ;
- panier ;
- `sections/milaura-choice-doors.liquid` ;
- `sections/milaura-quiz-teaser.liquid` ;
- `templates/index.json`.

La session UI/UX consomme seulement la table de routes dans la carte maîtresse.

## 12. GO reçu et prochaine autorisation nécessaire

Le GO privé reçu le 2026-08-09 couvrait :

- création des définitions de metafields ;
- lot test de normalisation ;
- collections preview hors Boutique en ligne ;
- descriptions et champs SEO en brouillon ;
- validation des membres et des templates.

Ces éléments sont exécutés. Le correctif SEO technique du schema global, des titles et du `noindex` a aussi été déployé sur le seul fichier `layout/theme.liquid`, après validation sur le thème de développement et pullback live.

Une nouvelle décision reste nécessaire avant : publication des cinq collections, modification des 13 collections publiques sans SEO explicite, redirection de `/pages/bracelet-amethyste`, activation du tracking ou lancement de campagne.
