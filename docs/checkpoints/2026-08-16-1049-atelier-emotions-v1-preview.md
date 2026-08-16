# Checkpoint MilAura - Atelier des emotions V1 privee

Date : 2026-08-16 10:49 CEST

Statut : socle technique deploye sur un theme non publie, verrou commercial actif, aucune publication live

## 1. Decision executee

La V1 de `L'Atelier des emotions` automatise un seul parcours : un bracelet pilote a message avec taille Shopify, palette de perles, finition de lettres, mot, charm optionnel, note et confirmation d'orthographe.

Le configurateur reste volontairement verrouille tant que le produit pilote, les limites physiques et au moins une palette et une finition de lettres compatibles ne sont pas renseignes. Aucun prix, stock, composant, matiere ou delai fictif n'est affiche.

Les niveaux `Etre guidee par Karine` et `Imaginer une piece singuliere` sont presentes comme services secondaires sans promesse automatique de prix, de faisabilite ou de delai.

## 2. Isolation

- branche : `codex/milaura-atelier-emotions-20260816` ;
- worktree : `/Users/paesano/Documents/MilAura website/_worktrees/atelier-emotions-20260816` ;
- theme Shopify non publie : `200007713115` ;
- nom : `MilAura Atelier emotions DEV 2026-08-16` ;
- live `190430282075` non touche ;
- theme partage `199421952347` non touche ;
- aucun fichier Hero PDP, sticky, Ruban, recommandation, panier partage, navigation ou compte modifie.

## 3. Fichiers du lot

### Theme

- `sections/milaura-atelier-configurator.liquid` ;
- `assets/milaura-atelier.css` ;
- `assets/milaura-atelier.js` ;
- `templates/page.atelier-emotions.json`.

### Contrat et exploitation

- `docs/superpowers/specs/2026-08-16-milaura-atelier-emotions-v1.md` ;
- `docs/reference/2026-08-16-atelier-emotions-inventaire.md` ;
- `docs/reference/2026-08-16-atelier-emotions-inventaire.csv` ;
- `docs/workstreams.md` ;
- ce checkpoint.

## 4. Architecture livree

- prix, disponibilite et taille controles par une variante Shopify reelle ;
- formulaire Shopify standard vers `routes.cart_add_url` ;
- line item properties publiques pour le modele, la taille, la palette, le mot, les lettres, le charm, la note et l'orthographe ;
- proprietes techniques masquees pour l'identifiant UUID, la version de contrat et les identifiants de composants ;
- JSON technique sans nom, email, telephone ni donnee d'analytics ;
- parcours HTML utilisable sans JavaScript, enrichi en trois etapes avec JavaScript ;
- validation exacte des caracteres disponibles ;
- `fil de composition` alimente par les photos reelles des blocs Shopify, sans simulation de pierre ;
- resume mobile fixe au-dessus du dock existant a l'etape de revue ;
- modification autonome des options, photos, disponibilites, compatibilites et limites dans l'editeur de theme.

## 5. Validation executee

### Code et Liquid

- `git diff --check` : succes ;
- `node --check assets/milaura-atelier.js` : succes ;
- Theme Check : 294 fichiers, 17 avertissements historiques dans 9 autres fichiers, zero avertissement ou erreur sur le lot Atelier ;
- aucune couleur hex ni police en dur dans les fichiers de theme Atelier ;
- aucun caractere em dash dans le lot.

### Shopify

- push cible des quatre fichiers de theme uniquement vers `200007713115` : succes ;
- aucune suppression distante ;
- pullback cible : 4 fichiers sur 4 identiques octet par octet ;
- preview privee : `https://milaura.fr/pages/contact-milaura?view=atelier-emotions&preview_theme_id=200007713115` ;
- la page Contact sert seulement de route porteuse avec le suffixe `view`, aucune page Shopify ni affectation de template n'a ete creee.

### Responsive et navigateur

Etat final verrouille controle avec Playwright a 360, 390, 430 et 1440 px :

- `data-ready=false` ;
- aucun formulaire rendu ;
- trois niveaux de service rendus ;
- zero debordement horizontal aux quatre largeurs ;
- console finale : zero erreur, deux avertissements globaux sans lien avec l'Atelier ;
- copie francaise finale et hierarchie H1, H2, H3 verifiees.

Captures temporaires :

- `/private/tmp/milaura-atelier-qa/output/playwright/atelier-final-locked-360.png` ;
- `/private/tmp/milaura-atelier-qa/output/playwright/atelier-final-locked-390.png` ;
- `/private/tmp/milaura-atelier-qa/output/playwright/atelier-final-locked-430.png` ;
- `/private/tmp/milaura-atelier-qa/output/playwright/atelier-final-locked-1440.png`.

### Parcours actif en memoire

Un jeu de donnees `QA` a ete injecte uniquement dans le DOM du navigateur. Il n'a ete ni enregistre dans Shopify, ni pousse dans le theme, ni envoye au panier.

- initialisation progressive : succes ;
- etape 1 vers etape 2 : succes ;
- caractere `@` non disponible : blocage confirme ;
- mot `MILAURA` : restitution en revue confirmee ;
- taille, palette, finition, charm, note et prix : restitution confirmee ;
- identifiant UUID : genere ;
- JSON technique : variante et identifiants de composants corrects ;
- soumission interceptee avant Shopify : aucune commande et aucune ligne de panier QA creee ;
- debordement horizontal a 390 px : zero.

## 6. Risques et limites restants

1. Aucun inventaire physique exploitable n'a ete trouve : quantites, dimensions, diametres de trou, alphabet lettre par lettre, couts, consommation, photos exactes et compatibilites restent a mesurer.
2. Aucun produit Shopify pilote, prix TTC, marge, variante de taille ou delai de preparation n'est valide pour cette offre.
3. Le panier et la commande Shopify n'ont pas encore ete testes avec une configuration reelle, car cela exigerait d'inventer des composants ou d'activer une offre non prete.
4. Le montage temoin, le test de traction, la capacite quotidienne et la procedure qualite de Karine restent a effectuer.
5. Le cadre personnalisation et retractation doit etre relu avant toute copie juridique definitive. Aucun texte juridique final n'a ete redige dans ce lot.
6. Patrice n'a pas encore donne de GO visuel sur le parcours actif avec les vraies photos.

## 7. Definition de termine avant GO live

1. Patrice complete les preuves d'achat et les couts dans le gabarit d'inventaire.
2. Karine compte, mesure, photographie et valide les composants compatibles.
3. Le produit pilote, ses variantes, son prix et la limite de caracteres sont decides.
4. Les blocs Shopify sont configures avec les donnees reelles sur le theme `200007713115`.
5. Une configuration reelle passe dans le panier puis dans une commande test et reste lisible dans l'administration.
6. Karine monte physiquement la commande test sans interpretation et valide le temps de travail.
7. Les captures actives 360, 390, 430 et 1440 px sont relues par Patrice.
8. Le GO visuel est donne explicitement.
9. Le cadre commercial et juridique est finalise.
10. Le GO live est donne separement.

## 8. Prochaine action ordonnee

La prochaine action n'est pas une nouvelle couche de code. Patrice et Karine remplissent `docs/reference/2026-08-16-atelier-emotions-inventaire.csv`, puis la session reprend avec la selection du produit pilote et la configuration reelle du theme prive.
