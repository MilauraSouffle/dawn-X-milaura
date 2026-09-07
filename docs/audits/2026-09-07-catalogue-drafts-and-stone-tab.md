# Audit catalogue DRAFT et onglet `La pierre`

Date : 2026-09-07 10:14 CEST.

## Résultat en bref

- L'audit Shopify en lecture seule a relu `765` produits : `248 ACTIVE`, `502 DRAFT` et `15 ARCHIVED`.
- Les `502 DRAFT` ne sont pas tous d'anciennes fiches : `493` sont classés `legacy_or_unknown_workflow`, `7` appartiennent au workflow récent et `2` sont des cadeaux opérationnels.
- Camille Ambiance Nature a été contrôlé pour chacun des `502 DRAFT`. Une disponibilité n'est conclue que si l'identité repose sur la référence fournisseur exacte ou sur le handle fournisseur exact.
- Résultat conservateur : `96` produits commandables, `28` en rupture, `243` correspondances à vérifier manuellement et `135` pages fournisseur non retrouvées.
- Le thème live affiche actuellement `story_text`, un texte sur le produit, dans l'onglet `La pierre`. Les `228` produits ACTIVE avec pierre sont touchés par cette erreur de source.
- Le correctif du thème est intégré et live sur le thème `190430282075`. Le workflow privé a également été durci pour bloquer ce défaut sur les futurs produits.

## Audit fournisseur des 502 DRAFT

### Périmètre Shopify actuel

| Classe | Nombre | Commandable | Rupture | Identité à vérifier | Page non retrouvée |
| --- | ---: | ---: | ---: | ---: | ---: |
| Ancien ou workflow inconnu | 493 | 93 | 28 | 243 | 129 |
| Workflow récent | 7 | 3 | 0 | 0 | 4 |
| Cadeau opérationnel | 2 | 0 | 0 | 0 | 2 |
| **Total** | **502** | **96** | **28** | **243** | **135** |

### Niveau de preuve

- `111` correspondances reposent sur une référence fournisseur exacte.
- `13` correspondances supplémentaires reposent sur un handle fournisseur exact.
- Les `124` identités fortes donnent `96` contrôles `Ajouter` et `28` contrôles `Rupture` sur la page fournisseur authentifiée.
- Les simples ressemblances de titre ne sont pas acceptées comme preuve. Elles sont incluses dans les `243` lignes `manual_match_required`.
- `orderable` signifie que la commande est ouverte sur la page fournisseur le 2026-09-07. Camille n'expose pas une quantité numérique fiable dans cette lecture, donc ce statut ne prouve pas le nombre d'unités disponibles.
- `supplier_page_not_found` signifie que la fiche n'a pas été retrouvée par les références, URLs archivées, handles ou recherche fournisseur disponibles. Ce n'est pas, seul, un ordre de suppression Shopify.
- La colonne `inventory_quantity` reprend le champ Shopify actuel à titre de contexte : `494` DRAFT ont une quantité positive et `8` sont à zéro. Elle ne constitue ni une preuve du stock fournisseur ni, pour ces fiches legacy, une preuve du stock physique MilAura.

Le premier contrôle a révélé qu'une ancienne URL produit pouvait rediriger vers l'accueil Camille et être prise à tort pour une fiche disponible. Le scraper rejette maintenant toute redirection hors de `/produit/`, et un test de régression couvre ce cas.

### Brouillons récents et cadeaux à ne pas confondre avec le legacy

Les trois brouillons récents encore commandables sont :

- produit `10357427732827`, boucles d'oreilles en cornaline, EAN `3701459082018` ;
- produit `10522152436059`, chapelet en sodalite, EAN `3667407018617` ;
- produit `10358581723483`, Palo Santo, EAN `3701459054732`.

Les quatre coffrets récents `10694309871963`, `10694309445979`, `10694307709275` et `10694313541979` n'ont pas de page fournisseur retrouvée. Les deux produits cadeaux `10504072954203` et `10504051130715` sont aussi sans page fournisseur retrouvée, mais restent classés comme cadeaux opérationnels et non comme anciennes fiches ordinaires.

Décision Patrice du 2026-09-07 : les `93` anciennes fiches commandables constituent le futur lot à remettre en ligne. Chaque fiche devra porter une notion interne obligatoire `Produit à commander`, distincte du stock physique MilAura. Cette information sert à préparer les commandes fournisseur nécessaires au traitement des commandes clientes et ne doit jamais être affichée aux visiteurs. La conception du champ, son alimentation et les activations Shopify n'ont pas commencé dans le lot actuel.

La liste complète et filtrable, avec lien Shopify Admin, preuve fournisseur et deux colonnes libres pour la décision de Patrice, est dans `docs/audits/2026-09-07-shopify-drafts-camille-availability.csv`.

## Défaut de contenu dans l'onglet `La pierre`

### Cause exacte

Le thème assignait deux champs distincts :

- `story_text`, consacré à la construction, au style et à l'usage du produit ;
- `stone_description`, consacré à la pierre.

Dans le second onglet, le Liquid rendait pourtant `story_text` en priorité, y compris lorsque l'onglet s'appelait `La pierre`. `stone_description` n'était utilisé qu'en secours. Le texte Horus cité par Patrice est bien le `story_text` du bracelet, tandis que son `stone_description` actuel se limite à une phrase sur les fragments bleus et blancs.

### Étendue actuelle

| État du contenu pierre | Produits ACTIVE |
| --- | ---: |
| Produits ACTIVE avec une pierre | 228 |
| `story_text` actuellement rendu à tort dans `La pierre` | 228 |
| `stone_description` absent | 49 |
| `stone_description` présent mais inférieur à 240 caractères | 174 |
| `stone_description` supérieur ou égal à 240 caractères, encore à relire sémantiquement | 5 |

Il existe aussi `360` DRAFT avec pierre : `334` sans `stone_description`, `8` avec un texte inférieur à 240 caractères et `18` avec un texte plus long à relire. Leur réécriture ne doit intervenir que pour les fiches que Patrice décidera de conserver.

Le tableau de la capture, dans l'onglet `Le bijou`, n'est pas en cause et n'a pas été modifié. La file complète des `228` produits ACTIVE est dans `docs/audits/2026-09-07-active-stone-tab-content.csv`.

### Exemple Horus, proposition non écrite dans Shopify

> La sodalite se reconnaît à son bleu profond traversé de zones blanches ou plus claires. Chaque fragment présente des contours, des nuances et un veinage différents, ce qui rend le dessin de cette pierre naturellement irrégulier. En lithothérapie, la sodalite est traditionnellement associée à l'expression, à la clarté et à la confiance. Sur Horus, ses éclats bleus créent un contraste net avec le métal doré.

Le produit Horus actuel est `ACTIVE`, produit `10669625966939`, EAN `3667407008090`, stock Shopify `3`. Sa page fournisseur exacte était commandable lors du contrôle du 2026-09-07.

## Correctifs préparés

### Thème Shopify

- Branche : `codex/milaura-stone-tab-content-20260907`.
- Commit source poussé : `a6cceb12` (`fix: separate stone tab content`).
- Commit d'intégration poussé : `98fe4bd7`.
- Le second onglet `La pierre` lit uniquement `stone_description` et ne reprend plus `story_text`.
- Lorsqu'un produit n'a pas encore de `stone_description`, les faits courts `Pierre`, `Symbolique traditionnelle`, `Sélection` et, le cas échéant, `Origine documentée` restent visibles, mais le mauvais texte produit disparaît.
- Le fichier unique `sections/milaura-product-experience.liquid` est live sur le thème `190430282075` après GO explicite de Patrice.
- Le pullback live est identique au canonique, SHA-256 `b8e63ebf65befb8b271c0b98c9496572eba9fd2fcdb41a9312a6aa4da5f3522a`.
- La page Horus publique répond HTTP 200. Après clic réel sur `La pierre`, le panneau affiche uniquement le texte sodalite et les faits courts attendus ; le texte du bijou reste dans `Le bijou`.

### Workflow de génération privé

Le prompt, le schéma, le contrat agent et le quality gate imposent désormais, pour toute nouvelle fiche avec pierre :

- `3` à `5` phrases et `240` à `900` caractères ;
- le nom de la pierre, son aspect ou ses variations naturelles et sa symbolique en lithothérapie ;
- au maximum une phrase reliant la pierre au produit ;
- aucun remplacement par le montage, le fermoir, les maillons, les rangs, la longueur, la tenue ou la manière de porter le bijou ;
- aucun doublon ou texte trop proche de `story_text`.

Le quality gate applique ce contrat aux enrichissements datés à partir du 2026-09-07, sans invalider rétrospectivement les anciens fichiers avant leur reprise. Le scraper fournisseur rejette aussi les anciennes URLs redirigées vers l'accueil.

## Vérifications

- Audit Shopify paginé : `765/765` produits lus.
- Audit fournisseur : `502/502` DRAFT contrôlés.
- Test thème ciblé : PASS.
- Shopify Theme Check : `0` erreur, `16` avertissements historiques dans des fichiers hors lot.
- Tests locaux complets du pipeline : PASS, y compris le contrat sémantique de la pierre et le rejet des fausses pages fournisseur.
- Aucun produit, stock, prix, image, SEO, statut, canal ou contenu Shopify Admin n'a été modifié. Le seul changement live est le fichier Liquid du panneau produit.
