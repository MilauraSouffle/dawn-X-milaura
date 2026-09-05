# MilAura : recensement des destinations par pierre

Date : 2026-09-05 09:44 CEST
Statut : audit public et Shopify Admin termine ; architecture proposee, aucune modification distante.
Proprietaire : Codex, tache Polish visuel Milaura.
Branche : `codex/milaura-stone-directory-20260905`, base `5a51f592`.

## Resultat

Le hub Bijoux par pierre affiche cinq destinations selectionnees manuellement : Aigue-marine, Quartz rose, Lapis-lazuli, Amazonite et Agate. Les autres pierres ne sont pas cachees par un carrousel : elles ne sont pas configurees dans le template.

Shopify contient dix collections par pierre parmi 31 collections Admin. Les 30 collections publiques correspondent a cette liste hors `recos-pool`. Aucune collection pierre supplementaire privee n'apparait dans la liste Admin controlee.

Le catalogue public releve contient 233 produits. Parmi eux, 124 bijoux disponibles distincts sont rattaches a 39 appellations de pierre. Ces nombres sont un instantane du storefront, pas un inventaire physique et pas un audit des brouillons. Un bijou peut porter deux balises de pierre ; les comptes par pierre ne doivent pas etre additionnes pour retrouver 124.

Deux produits disponibles sans balise structuree `pierre:` sont rattaches explicitement par leur titre et leurs balises publiques : collier quartz rose dore boheme `10521073385819` et chapelet sodalite `10522152436059`. Les autres correspondances reposent sur les balises structurees. Ce premier recensement ne garantit pas l'exhaustivite des pierres secondaires des bijoux mixtes.

## Causes verifiees

1. `templates/page.milaura-bijoux-pierre.json` comporte seulement cinq blocs. `sections/milaura-catalogue-hub.liquid` masque en plus les collections sans produit public et pointe vers `selected_collection.url`, sans variante de landing.
2. Le lien Aigue-marine du hub va vers `/collections/par-pierre-aigue-marine`, alors que la landing Polish 7 utilise `?view=milaura-campaign-aigue`. L'affectation Admin reste a traiter avec la publication du lot valide.
3. Plusieurs collections manuelles n'ont pas suivi le renouvellement du catalogue. Quartz rose, controle dans Admin `677666783579`, contient cinq brouillons et le seul collier actif `10521073385819`. Son template assigne est `milaura-pierre`, pas le modele avec bento du Polish 7.
4. L'accueil possede deja un lien correct vers le hub dans `home_paths > path_stone` : `shopify://pages/bijoux-par-pierre`. Il n'est pas necessaire de refaire cet acces pour completer les destinations.

## Collections existantes et ecarts

Les produits publics de collection peuvent comprendre des objets mineraux et des produits epuises. La colonne bijoux disponibles est issue du rapprochement du catalogue, donc son perimetre differe volontairement du compteur de collection.

| Pierre | Produits publics dans la collection | Dont disponibles, tous types | Bijoux disponibles identifies | Bijoux disponibles absents de la collection |
| --- | ---: | ---: | ---: | ---: |
| Agate | 2 | 0 | 3 | 3 |
| Aigue-marine | 10 | 9 | 10 | 1 |
| Amazonite | 2 | 1 | 1 | 1 |
| Aventurine verte, route aventurine | 4 | 1 | 7 | 6 |
| Lapis-lazuli | 1 | 0 | 5 | 5 |
| Quartz rose | 1 | 1 | 11 | 10 |
| Oeil de tigre | 0 | 0 | 5 | 5 |
| Amethyste | 19 | 18 | 12 | 0 |
| Jaspe rouge | 4 | 3 | 2 | 0 |
| Sodalite | 11 | 10 | 10 | 0 |

Ne pas remettre les anciens brouillons en vente pour remplir ces collections. Completer leurs inclusions avec les IDs actifs exacts ; conserver les statuts produit. La bague Aigue-marine choisie par Patrice reste le produit star, independamment de cet instantane de disponibilite.

## Liste des 39 appellations cote bijoux

Une route absente ci-dessous n'est pas a publier avant son contenu, ses produits et son rendu. Les handles futurs sont a confirmer selon l'arbitrage familles/varietes ; aucun handle ni redirect existant n'a ete modifie.

| Appellation | Bijoux disponibles identifies | Destination actuelle |
| --- | ---: | --- |
| Agate | 3 | `/collections/par-pierre-agate`, carte presente |
| Aigue-marine | 10 | `/collections/par-pierre-aigue-marine`, landing validee avec `?view=milaura-campaign-aigue`, carte a raccorder |
| Amazonite | 1 | `/collections/par-pierre-amazonite`, carte presente |
| Ambre | 1 | A creer |
| Amethyste | 12 | `/collections/par-pierre-amethyste`, carte absente |
| Angelite | 1 | A creer |
| Apatite bleue | 3 | A creer |
| Aventurine verte | 7 | `/collections/par-pierre-aventurine`, carte absente |
| Calcedoine bleue | 1 | A creer |
| Chrysocolle | 1 | A creer |
| Citrine | 2 | A creer ; identifier explicitement la citrine chauffee vendue |
| Corail fossile | 1 | A creer |
| Cornaline | 6 | A creer |
| Cristal de roche | 1 | A creer |
| Cyanite bleue | 1 | A creer |
| Dumortierite | 1 | A creer |
| Fluorine | 3 | A creer ; varietes verte et multicolore dans les produits |
| Hematite | 4 | A creer ; ne pas confondre avec le produit cadeau en brouillon |
| Howlite | 4 | A creer |
| Jade | 2 | A creer ; conserver les denominations exactes des produits |
| Jaspe paysage, balise jaspe | 1 | A creer ou regrouper sous Jaspe |
| Jaspe heliotrope | 1 | A creer ou regrouper sous Jaspe |
| Jaspe rouge | 2 | `/collections/par-pierre-jaspe-rouge`, carte absente |
| Labradorite | 2 | A creer |
| Lapis-lazuli | 5 | `/collections/par-pierre-lapis-lazuli`, carte presente |
| Lepidolite | 1 | A creer |
| Malachite | 1 | A creer |
| Obsidienne, dont mixte | 2 | A creer ou regrouper sous Obsidienne |
| Obsidienne noire | 4 | A creer ou regrouper sous Obsidienne |
| Oeil de taureau | 3 | A creer |
| Oeil de tigre | 5 | `/collections/par-pierre-oeil-de-tigre`, carte absente, collection publique vide |
| Onyx | 5 | A creer |
| Pierre de lune | 2 | A creer |
| Pierre de soleil | 1 | A creer |
| Quartz rose | 11 | `/collections/par-pierre-quartz-rose`, carte presente |
| Rhodonite | 2 | A creer |
| Sodalite | 10 | `/collections/par-pierre-sodalite`, landing validee `/collections/selection-de-karine`, carte absente |
| Tourmaline | 1 | A creer ; bijou disponible en tourmaline multicolore |
| Turquoise d'Afrique | 1 | A creer ; denomination commerciale et identite mineralogique a documenter sans extrapolation |

Le catalogue contient aussi des pierres actuellement proposees uniquement en objets mineraux, notamment aventurine bleue et selenite. Elles relevent de la navigation Pierres et mineraux, pas d'une promesse de bijoux disponibles.

Des references publiques anciennes epuises portent d'autres noms, notamment peridot, seraphinite, opale dendrite et spinelle noire. Elles ne sont pas comptees comme bijoux disponibles ni reactivees par cet audit. Leur eventuelle page doit distinguer contenu editorial et offre reellement achetable.

## Architecture proposee

Parcours : accueil > Bijoux par pierre > landing propre a la pierre > fiche produit.

- Une page par famille commerciale, avec les varietes nommees et expliquees dans le contenu et les fiches. Le regroupement Jaspe et Obsidienne ramenerait ce premier perimetre a 36 destinations ; c'est une proposition soumise au choix de Patrice, pas une fusion executee.
- Reutiliser les sections du Polish 7 : hero adapte, produit star avec ses vrais medias, catalogue de la pierre puis guide en trois onglets. Les produits star sont choisis et relus pierre par pierre, jamais le premier produit arbitraire d'une collection obsolete.
- Conserver les landings Sodalite et Aigue-marine validees. Pour les nouvelles destinations, preparer les vrais medias et les textes propres a chaque pierre, avec distinction explicite des traitements et denominations quand necessaire.
- Rendre le catalogue evolutif avec des regles de collection documentees et les balises/metachamps fiables. Ne pas transformer une appartenance a une collection en activation de produit ou en modification du stock.
- Conserver les URLs existantes utiles. Un regroupement ne doit pas entrainer de redirection ou disparition silencieuse d'une page existante.

## Navigation mobile a traiter apres les destinations

Le code actuel cree une seule rangee horizontale de cartes de `82vw`, sans limite de longueur. Etendre simplement la liste produirait donc un carrousel de pres de quarante cartes.

La contrainte de Patrice est retenue : plusieurs rangees et deux ou trois cartes maximum par carrousel. Proposition de recette : trois cartes par rangee, sans defilement automatique, avec reperes de position et acces alphabétique pour retrouver directement une pierre. Les memes cartes restent visibles dans une grille desktop. A comparer visuellement avec une grille mobile avant integration ; ne pas imposer cette seconde option.

Le hub actuel a ete controle en desktop via le navigateur. La tentative de viewport 390 n'a pas effectivement modifie le viewport du tab inspecte (1473 px observes) ; ce n'est pas une preuve de recette mobile. Le comportement mobile ci-dessus est confirme par le CSS et par le constat de Patrice.

## Ordre d'execution

1. Rapprocher et completer les dix collections existantes, conserver les produits star acceptes, preparer les huit landings restantes sur le modele Polish 7 et les liens exacts du hub.
2. Creer les autres destinations avec un produit star, des medias et trois onglets renseignes pour chacune. Ajouter chaque carte lorsque sa destination complete est prete ; verifier aussi les pierres secondaires des bijoux mixtes.
3. Composer et valider la navigation mobile avec le catalogue complet, puis effectuer les affectations et le deploiement du lot approuve.

Critere de fin : chaque pierre retenue a une carte, une destination valide, son contenu et ses produits exacts ; aucun lien vide ou mauvais template, aucun bijou actif pertinent oublie ; responsive controle a 390 et 1440 px.

## Sources et limites

- Hub public et liens DOM : https://milaura.fr/pages/bijoux-par-pierre
- Catalogue public : https://milaura.fr/products.json?limit=250&page=1, 233 produits, pas de page suivante necessaire pour cette taille de page.
- Collections publiques : https://milaura.fr/collections.json?limit=250, 30 collections.
- Appartenance controlee sur les dix endpoints `/collections/<handle>/products.json?limit=250`.
- Shopify Admin : 31 collections sur une page ; detail Quartz rose et template `milaura-pierre` relus. Aucune sauvegarde Admin.
- Sources theme : `templates/page.milaura-bijoux-pierre.json`, `templates/index.json`, `sections/milaura-catalogue-hub.liquid`, `assets/milaura-catalogue-hub.css`, templates et sections Polish 7.
- Snapshots de travail hors Git : `/private/tmp/milaura-stones-products-20260905-1.json`, `/private/tmp/milaura-stones-collections-20260905.json`, `/private/tmp/milaura-stones-membership-20260905.json`.
- Disponibilite storefront uniquement : aucun stock physique, cout, prix, statut produit ou canal modifie. Aucun nouveau template cree, aucune affectation, aucun deploiement effectue a ce stade.
