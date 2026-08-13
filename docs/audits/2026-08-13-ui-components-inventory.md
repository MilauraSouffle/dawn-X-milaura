# Inventaire UI sitewide : cartes, CTA et controles

Date : 2026-08-13 20:43 CEST
Branche : `codex/milaura-sitewide-ui-unification-20260813`
Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/sitewide-ui-unification-20260813`

## Cadrage valide

La Selection d'aout est la reference visuelle : carte transparente, photo prioritaire, filet aigue-marine fin, information compacte, quantite soulignee d'aigue-marine et action Ajouter soulignee d'or. Les CTA editoriaux sont du texte souligne, sans pastille ni rendu Dawn natif.

Les actions transactionnelles principales restent contenues en prune : achat PDP, validation panier, formulaires critiques et etats de chargement. Cette exception preserve la hierarchie, le contraste et la conversion. Les controles conservent une cible tactile de 44 px, un focus visible, le clavier et les etats disabled/loading.

Le lot n'effectue aucun remplacement global aveugle de `.button` ou `.card`. Les adaptations ciblent des composants MilAura ou des contextes Dawn identifies.

## Inventaire des familles

| Famille | Pages et usages | Source historique | Variante unifiee | Risque et controle |
| --- | --- | --- | --- | --- |
| Carte Selection d'aout | Collection saisonniere | `milaura-card-product`, `milaura-editorial-purchase` | Reference canonique conservee et transformee en composants partages | Faible. Structure et comportement d'achat preserves |
| Grille produit MilAura | Collections personnalisees | `sections/milaura-collection-grid.liquid` et CSS local duplique | `snippets/milaura-product-card.liquid` + `assets/milaura-card.css` | Moyen. Pagination et filtres non reecrits ; seulement le rendu des cartes |
| Nouveautes et Best-sellers | Homepage | `sections/milaura-featured-products.liquid` avec cartes et achat locaux | Carte canonique + achat partage ; carrousel mobile/tablette et grille desktop | Eleve. Scroll horizontal, snap, largeur et resize verifies dans le code |
| Processus video avec produits | Homepage | `sections/milaura-video-process.liquid`, carte blanche specifique | Carte produit partagee et controles de carrousel fins | Moyen. Semantique mobile et restauration de la slide active preserves |
| Cartes Dawn | Collections natives, produits lies, featured collection, collage | `snippets/card-product.liquid` | Adaptateur explicite `.milaura-dawn-card` vers le systeme canonique | Eleve. Aucun override global de `.card`; quick-add Dawn reste fonctionnel |
| Hub catalogue | Pages destinations catalogue | Fichiers reserves `milaura-catalogue-hub.*` | Beneficie seulement des composants partages charges globalement | Eleve. Aucun fichier reserve par le lot Heroes n'a ete modifie |
| Recommandations PDP | Fiche produit | `sections/milaura-product-crosssell.liquid`, `snippets/milaura-pdp-recos.liquid` | Carte et achat partages ; carrousel tactile conserve | Eleve. Une seule delegation d'ajout panier ; ecart calcule depuis le CSS |
| Achat PDP principal | Fiche produit | `snippets/buy-buttons.liquid`, anciens neutralisateurs locaux | CTA transactionnel prune, rayon tokenise, focus et etats natifs preserves | Eleve. Aucun changement de formulaire, identifiant de variante ou parcours panier |
| Diagnostic et quiz | Quiz, resultat et cross-sell | `milaura-quiz`, `milaura-quiz-crosssell`, familles `qcs` | Adaptateurs nommes, cartes transparentes et controles soulignes | Moyen. Les CTA cabochon des panneaux de choix restent une exception intentionnelle |
| Upsell panier | Page panier | `sections/milaura-cart-upsell.liquid` | Carte transparente, onglets et actions soulignes | Eleve. Un produit multi-variante renvoie vers Choisir au lieu d'ajouter une variante arbitraire |
| Recommandations drawer | Tiroir panier | `snippets/milaura-cart-recos.liquid` | Carte canonique compacte sans controle d'achat direct | Eleve. Exception volontaire pour eviter une seconde logique panier dans le tiroir |
| Lignes et resume panier | Page panier | `milaura-cart-items`, `milaura-cart-summary` | Lignes transparentes, quantite soulignee, retrait utilitaire, checkout prune | Eleve. Inputs, formulaires, remises et checkout restent natifs |
| Recherche | Resultats produit, article et page | `sections/main-search.liquid` | Produits canoniques ; resultats editoriaux transparents et encadres | Moyen. Types de resultat et pagination preserves |
| Compte | Connexion, inscription, commandes, dashboard | `assets/milaura.css`, `main-account`, `milaura-dashboard` | Surfaces transparentes, onglets soulignes, produits canoniques | Moyen. Roles de tabs, `aria-selected`, focus et zone live ajoutes |
| Cartes editoriales | Blog, explorer, blocs de contenu | `milaura-featured-blog-post`, `milaura-benefits-explorer` | Cadres aigue-marine, surfaces transparentes, actions soulignees | Faible. Hierarchie et contenus inchanges |
| Cartes destination | Liste des collections, spotlight, crosslinks, sous-categories | CSS locaux de `milaura-list-collections-*`, `crosslinks`, `subcategories` | Photographie prioritaire, cadre fin et libelle souligne | Moyen. Liens complets et focus visibles preserves |
| Portes de choix | Pages editoriales | `assets/milaura-choice-doors.css` | Cartes transparentes, filet fin, controle souligne | Moyen. Arches, symboles et panneau quiz restent specifiques a leur composition |
| Panneaux de section | Pages MilAura diverses | `.milaura-section-card` et halo global de page dans `milaura.css` | Surface transparente, sans verre, ombre ou panneau blanc | Moyen. Changement explicite de la surface MilAura, sans toucher aux cartes generiques Dawn |
| CTA editoriaux | Homepage, collections, blog, 404, footer, multicolumn | Multiples boutons or, gradients et pastilles locales | `assets/milaura-actions.css`, texte Instrument Sans souligne d'or, aigue-marine au survol | Moyen. Adaptateurs nommes ; cible 44 px et focus visibles |
| CTA transactionnels | PDP, panier, formulaires critiques | Boutons Dawn et variantes locales | Surface prune plate et compacte via adaptateurs nommes | Eleve. Loading, disabled, submit et contraste conserves |
| Controles utilitaires | Filtres, quantite, tabs, pagination, dots | Styles locaux heterogenes | Soulignement, cible tactile, focus et etats actifs tokenises | Moyen. Aucun controle natif masque ou retire |

## Composants partages

- `assets/milaura-tokens.css` : rayons, cibles tactiles, focus, transitions, etats disabled et ratio photo.
- `assets/milaura-card.css` : carte produit canonique et adaptateurs identifies.
- `assets/milaura-actions.css` : actions editoriales, transactionnelles et utilitaires.
- `snippets/milaura-product-card.liquid` : enveloppe de carte commune.
- `snippets/milaura-card-product.liquid` : photo et informations produit.
- `snippets/milaura-editorial-purchase.liquid` : quantite et ajout panier, ou lien Choisir pour les variantes multiples.

## Risques residuels et limites

1. Aucune validation visuelle navigateur n'est declaree dans ce lot. Patrice reste l'autorite du GO visuel.
2. Le theme de developpement `199421952347` est occupe par la session Heroes. Aucun push Shopify n'a ete effectue.
3. Les fichiers reserves Heroes n'ont pas ete modifies. Leur controle visuel final doit etre fait apres integration des deux lots.
4. Le theme conserve du CSS historique pour des composants hors familles de cartes et d'actions actives. Le nouveau systeme utilise des adaptateurs explicites et prend la priorite sans remplacement aveugle.
5. Les produits a variantes multiples utilisent Choisir. Les recommandations du drawer panier n'ajoutent pas directement au panier.
6. Le live `190430282075` reste interdit sans GO visuel explicite.

## Validation technique

- `git diff --check` : valide.
- `shopify theme check` : 0 erreur, 28 avertissements historiques deja presents.
- Equilibre des accolades CSS verifie sur les assets partages et globaux modifies.
- Les nouveaux composants partages n'introduisent aucune couleur hexadecimale ni famille de police en dur.
- Aucun fichier reserve par la session Heroes n'apparait dans le diff.
