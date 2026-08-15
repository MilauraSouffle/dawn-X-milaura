# MilAura - Architecture navigation et homepage V2

Date : 2026-08-14

Statut : implementation disponible sur le theme de preview isole `199957807451`, `MilAura Navigation V2 2026-08-14`. Aucun live sans GO visuel explicite de Patrice.

## 1. Mission

Rendre MilAura simple a comprendre en quelques secondes, facile a parcourir au pouce et suffisamment structure pour que les moteurs identifient les categories prioritaires.

Le sujet est une boutique de bijoux en pierres naturelles, de mineraux et de bougies. La personne arrive avec une de ces trois pensees :

1. je sais quel bijou je veux porter ;
2. je connais la pierre que je cherche ;
3. je pars de ce que je ressens et je veux etre guidee.

Le site doit repondre a ces trois pensees sans creer trois diagnostics concurrents ni recopier le menu dans la homepage.

## 2. Decisions fermees

- Le Cercle MilAura est `/account`. Il ne devient pas une section homepage.
- La homepage comporte huit mouvements majeurs au maximum.
- Le Rituel de purification quitte la homepage. Il appartient au Journal.
- Le bloc `Pourquoi nous faire confiance` quitte la homepage. Les preuves restent factuelles et placees pres des decisions concernees.
- L explorateur emotionnel quitte la homepage. Il reste le coeur de `/pages/choisir-sa-pierre`.
- La section Aigue-marine conduit vers `/collections/par-pierre-aigue-marine`, pas uniquement vers une bague.
- Les Nouveautes tiennent sur une seule rangee desktop et un rail horizontal mobile.
- Les Best-sellers retrouvent une section autonome, sous reserve de verification de la collection et de son ordre Shopify.
- Naissance et Mariage partagent une section Occasions sans creer les pages enfant encore bloquees par l inventaire.
- Une pierre ou une senteur sans destination utile n est pas un lien. Aucun faux resultat vide en HTTP 200.
- Promotions est une entree conditionnelle. Elle reste absente tant qu une selection commerciale reelle et verifiee n existe pas.

## 3. Architecture canonique

### Menu principal cible

Six entrees permanentes, une septieme conditionnelle :

| Entree | Fonction | Destination ou enfants |
| --- | --- | --- |
| Nouveautes | Voir les ajouts recents | `/collections/nouveautes` |
| Bijoux | Acheter par forme | Tous les bijoux, Bracelets, Colliers, Boucles d oreilles, Pendentifs, Bagues |
| Pierres | Acheter et comprendre par pierre | Bijoux par pierre, Pierres de A a Z, Histoire et symbolique, Naissance, collections pierre actives |
| Bougies et senteurs | Acheter et comprendre par senteur | Bougies, Senteurs de A a Z, bougies emotionnelles |
| Cadeaux | Choisir selon l occasion | Naissance, Anniversaire de mariage, Selection saisonniere |
| Guides | Comprendre et etre accompagnee | Choisir selon son ressenti, Diagnostic, Journal, Notre histoire |
| Offres du moment | Conditionnelle | activee uniquement avec une collection promotionnelle reelle |

Utilitaires hors menu principal : recherche, `Trouver ma pierre`, Cercle `/account`, contact et panier.

Regles :

- sept entrees maximum ;
- le titre d un groupe ouvre son sous-menu, pas une route ambigue ;
- `Tout voir` est le premier lien du sous-menu lorsque necessaire ;
- les categories produit sont visibles au premier niveau mobile ;
- chaque libelle de lien decrit sa destination ;
- aucun lien pierre arbitraire dans la barre permanente ;
- les pierres actives sont presentees dans le sous-menu ou le guide, selon la place disponible.

### Routes de destination

| Route | Role unique | Decision |
| --- | --- | --- |
| `/collections/bijoux-pierres-naturelles` | Acheter tous les bijoux et entrer par type | conserver, renforcer les raccourcis type |
| `/pages/bijoux-par-pierre` | Choisir parmi les pierres actuellement disponibles | conserver |
| `/pages/choisir-sa-pierre` | Choisir selon un ressenti | conserver la route, changer le H1 public et le design |
| `/pages/diagnostic-emotionnel` | Repondre au quiz et obtenir une orientation | conserver, ne pas dupliquer |
| `/pages/guide-des-pierres` | Index alphabetique, histoire, symbolique, entretien et sources | creer en brouillon puis activer apres validation |
| `/pages/guide-des-senteurs` | Index des senteurs reelles et liens vers les bougies correspondantes | creer en brouillon puis activer apres validation |
| `/pages/pierres-de-naissance` | Comprendre les correspondances et voir les selections reelles | conserver |
| `/pages/cadeaux-anniversaire-de-mariage` | Comprendre les correspondances et voir les selections reelles | conserver |
| `/collections/par-pierre-aigue-marine` | Acheter tous les bijoux Aigue-marine disponibles | destination canonique de la homepage |
| `/account` | Cercle et espace personnel | utilitaire, jamais section homepage |

Les anciennes routes faibles ou litigieuses ne sont ni supprimees ni redirigees sans signaux Search Console. Cela concerne notamment `/pages/bracelet-amethyste`.

## 4. Homepage cible

```text
+-------------------------------------------------------------+
| HERO DE MARQUE                                              |
| lot parallele reserve                                       |
+-------------------------------------------------------------+
| SELECTION SAISONNIERE                                       |
| 4 produits, destination de campagne                         |
+-------------------------------------------------------------+
| TROIS FACONS DE CHOISIR                                     |
| [un bijou]          [une pierre]          [mon ressenti]     |
+-------------------------------------------------------------+
| AIGUE-MARINE                                                |
| scene editoriale + acces a toute la collection              |
+-------------------------------------------------------------+
| BEST-SELLERS                                                |
| 4 produits desktop, rail tactile mobile                     |
+-------------------------------------------------------------+
| NOUVEAUTES                                                  |
| 4 produits desktop, rail tactile mobile                     |
+-------------------------------------------------------------+
| OFFRIR                                                      |
| [Pierre de naissance]             [Anniversaire de mariage] |
+-------------------------------------------------------------+
| KARINE ET JOURNAL                                           |
| visage humain, conseils et articles utiles                  |
+-------------------------------------------------------------+
```

Le menu explique comment atteindre toutes les destinations. La homepage explique laquelle choisir maintenant. Cette separation supprime le doublon fonctionnel.

## 5. Plan visuel

### Palette canonique

- Nacre `#FBF8F3` : lumiere et respiration.
- Encre prune `#2F222D` : texte et surfaces de conversion rares.
- Or mat `#B9975B` : filet et accent.
- Aigue-marine `#6FA9A6` : orientation et focus.
- Amethyste `#7A4D82` : accent editorial ponctuel.

Les fichiers Liquid et CSS utilisent uniquement les variables de `assets/milaura-tokens.css`.

### Typographie

- Gloock : titres editoriaux de 24 px minimum.
- Instrument Sans : navigation, texte, prix, meta et actions.
- Dancing Script : une signature de deux a six mots maximum par ecran, jamais une information essentielle.

### Layout

- Desktop : images dominantes, asymetrie controlee, largeur utile limitee, respirations franches.
- Mobile : une decision par ecran, rail horizontal pour les produits, aucun texte inferieur a 14 px hors micro-meta.
- Cartes produit : photographie intacte, informations dessous, actions soulignees, surfaces transparentes.
- Navigation : libelles Instrument Sans lisibles, minimum cible 13 px desktop et 15 px mobile.

### Signature distinctive

Le `fil mineral` est un filet continu aigue-marine et or qui relie les trois portes de choix. Il ne decore pas : il montre que trois entrees differentes conduisent au meme catalogue. Il devient horizontal sur desktop et vertical sur mobile.

Le risque est volontairement place ici, dans un seul geste. Le reste de la page demeure photographique et silencieux.

### Auto-critique avant construction

Une premiere idee consistait a creer trois grosses cartes premium identiques. Elle a ete rejetee : ce motif est generique, encombrant et reproduit le menu.

La version retenue utilise trois scenes de proportions differentes, une seule phrase d orientation par scene et un lien direct. Les listes exhaustives restent sur les destinations. Aucun numero n est ajoute, car les trois choix ne forment pas une sequence.

## 6. Pages Guide

### Guide des pierres

Contenu visible :

1. reponse courte sur la difference entre pierre, bijou et symbolique ;
2. index A a Z ;
3. liens vers les collections actives ;
4. explication de l histoire et de la symbolique traditionnelle ;
5. choix par couleur et par usage de port ;
6. entretien ;
7. sources et date de mise a jour.

Etat des entrees :

- `disponible` : lien vers une collection ou une page solide ;
- `guide` : lien vers un contenu editorial substantiel ;
- `reference` : nom lisible sans lien tant que la destination n est pas prete.

### Guide des senteurs

Le guide commence avec les familles reellement presentes : fleur d oranger, ambre, the, oud et neroli. Il ne promet aucun effet medical. Chaque senteur relie une description olfactive concrete a une bougie disponible.

## 7. Footer cible

Quatre groupes maximum :

1. Explorer ;
2. Choisir ;
3. MilAura ;
4. Aide.

Le footer ne liste plus toutes les collections et retire :

- les emojis de reassurance ;
- `Rejoignez + de 500 ames connectees` ;
- les promesses globales de certification, fabrication francaise ou emballage cadeau non prouvees ;
- le texte interchangeable de communaute premium.

La capture email reste sobre et distincte du Cercle. Le Cercle pointe vers `/account`.

## 8. SEO, AEO et accessibilite

- toutes les navigations utilisent de vrais liens `<a href>` ;
- les pages prioritaires sont atteignables en trois clics maximum ;
- une categorie vide n est ni liee ni indexee ;
- un seul H1 par page ;
- canonique coherent avec les liens et le sitemap ;
- texte utile visible sans interaction JavaScript obligatoire ;
- structure de titres logique ;
- focus visible et cibles tactiles de 44 px recommandees ;
- `prefers-reduced-motion` respecte ;
- aucune promesse medicale, faux avis, faux bestseller, faux schema ou fausse preuve.

## 9. Portes de validation

1. Theme Check sans erreur.
2. JSON valide apres retrait du commentaire Shopify.
3. `git diff --check` propre.
4. Mobile 390 x 844 et desktop 1440 x 1000.
5. Aucun debordement horizontal.
6. Liens, focus, menu clavier et rails tactiles verifies.
7. Theme de developpement controle par pullback cible.
8. GO visuel de Patrice.
9. Seulement ensuite : integration, menu Admin, pages publiees, push live cible et nouveau pullback.

## 10. Perimetre exclu

- prix, stock, statut des produits et produits brouillons ;
- livraison, panier et remises ;
- recommandation PDP ou panier ;
- implementation complete du Cercle ;
- activation Pinterest, Ads, GA4, Merchant Center et Search Console ;
- publication live sans GO.
