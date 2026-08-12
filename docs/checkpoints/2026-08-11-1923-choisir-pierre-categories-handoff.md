# MilAura - Handoff Choisir sa pierre et reprise categories

Date : 2026-08-11 19:23 CEST
Branche : `codex/milaura-reconcile-2026-08-07`
Theme live : `dawn-X-milaura/main`, ID `190430282075`
Theme de developpement : `Development (c105a8-mac-1)`, ID `199421952347`

## Mission de la session

Recentrer la refonte fonctionnelle sur les surfaces qui debloquent le catalogue et les campagnes. La page compte/Cercle n'est pas prioritaire. La priorite confirmee par Patrice est :

1. landing et destinations catalogue ;
2. Bagues, Mariage, Naissance, hubs pierre et intention ;
3. Atelier de Karine et personnalisation avec apercu reel ;
4. carrousels Nouveautes, Best sellers et Promotions ;
5. Journal, Pinterest, aigue-marine et activation acquisition dans le plan global.

## Livre et verifie en production

### Landing Choisir sa pierre

- URL publique : `https://milaura.fr/pages/choisir-sa-pierre`.
- Page Shopify : `pages-166695534939`.
- Template : `page.milaura-choisir-pierre`.
- Hero volontairement compact, sans hauteur plein ecran imposee.
- Triptyque anime : trois visuels visibles, rotation toutes les 3 secondes, jamais deux fois la meme pierre a l'ecran.
- Pool complet actuel : Amethyste, Quartz rose, Citrine, Tourmaline noire et Aventurine verte.
- Le dashboard Benefits Explorer reste sous le hero et permet le choix direct.
- La reduction de mouvement systeme est respectee.

### Navigation et quiz

- `Choisir sa pierre` est visible sous `Pierres & Mineraux` sur desktop et mobile.
- Destination : `/pages/choisir-sa-pierre`.
- Le CTA `Trouver ma pierre` reste le funnel principal et pointe vers `/pages/diagnostic-emotionnel`.
- Le lien du guide est actuellement ajoute par `sections/milaura-navbar.liquid`, avec une garde anti-doublon.
- Ce n'est pas encore un objet de menu Shopify Admin. Quand l'acces Admin est de nouveau automatisable, il pourra etre cree dans Navigation ; la garde empechera un doublon pendant la transition.

### Commits de cette livraison

- `a293df11 feat: add stone chooser landing`
- `dcc7c41e fix: compact stone chooser hero`
- `17d31321 fix: restore quiz and rotate stone triptych`
- `bfe43ff2 feat: add stone guide menu link`

Ces quatre commits ont ete pousses. Le HEAD courant est plus recent a cause de travaux concurrents sur le bandeau d'annonce. Ne pas attribuer les commits `356fba60` et `5d95b3b4` a cette mission.

## Preuves de validation

- `https://milaura.fr/pages/choisir-sa-pierre` retourne HTTP 200 le 2026-08-11 a 19:22 CEST.
- Le header de reponse confirme le theme live `190430282075`.
- Le HTML public contient les deux liens du guide, desktop et mobile.
- Le HTML public contient toujours `/pages/diagnostic-emotionnel`.
- Le HTML public contient les cinq sources du triptyque et `setInterval(rotateTriptych, 3000)`.
- Le fichier navbar recupere du theme live etait identique octet pour octet au fichier local apres le push.
- `git diff --check` et le controle cible du fichier navbar etaient propres.
- Le Theme Check complet relance en fin de session s'est bloque sans produire de diagnostic et a ete arrete. Ne pas le presenter comme un succes pour ce dernier lot.

## Travail local non livre

### Desactivation ScratchToReveal

Un patch local a ete prepare et valide techniquement, mais il n'est ni committe, ni pousse, ni deploye :

- `templates/product.milaura-produit.json` place `show_scratch` a `false` ;
- `templates/page.lp-promo-bougies.json` desactive la section `lp_bundle` ;
- `sections/milaura-product-hero.liquid` conditionne la preview et l'ancien moteur au flag ;
- `snippets/milaura-product-purchase-fallback.liquid` conserve variantes, quantite, composition, ajout panier, drawer et synchronisation des avantages lorsque Scratch est coupe ;
- la confirmation devient `Produit ajoute a votre panier` et `Voir mon panier`.

Validation du patch par l'agent dedie : syntaxe JS OK, assertions fonctionnelles OK, Theme Check 0 erreur et 29 avertissements preexistants, `git diff --check` propre.

Attention : `sections/milaura-product-hero.liquid` contient aussi des modifications concurrentes de badges/metafields. Ne pas committer ce fichier en bloc sans separer ou coordonner les proprietaires.

### Harmonisation livraison

Regle canonique confirmee par Patrice :

- livraison offerte en point relais des 30 EUR ;
- expedition sous 24 h ;
- livraison sous 3 a 5 jours en France metropolitaine.

Le worktree contient des remplacements locaux dans environ 30 fichiers. Ce lot n'a pas ete audite comme un ensemble coherent, committe et relu depuis le live dans cette session. Ne pas annoncer que tout le site est uniformise avant un controle cible, un push fichier par fichier et un pullback.

## Etat Git et concurrence

- Branche synchronisee avec son origine au debut de la cloture.
- Worktree tres sale : 44 fichiers modifies et 28 fichiers non suivis avant ecriture de ce handoff.
- Aucun fichier concurrent n'a ete nettoye, restaure ou supprime.
- Les modifications couvrent catalogue, panier, livraison, homepage, fiche produit, documentation et fichiers temporaires de plusieurs sessions.
- Ne jamais utiliser un push complet du theme ni un commit global depuis cet etat.

## Etat catalogue a reprendre

- `Bagues` : collection privee `/collections/bagues-pierres`, actuellement 3 produits selon le dernier audit. Ne pas la confondre avec l'ancienne categorie Baguettes mise en pause.
- `Choisir sa pierre` : page publique terminee et accessible depuis le menu.
- `Mariage` et `Naissance` : templates locaux/developpement connus, Pages Shopify et contenus definitifs encore a creer ou confirmer.
- Hubs pierre et intention : architecture a finaliser avec l'inventaire reel et les destinations canoniques.
- Aucun hub vide ou categorie sans produits fiables ne doit etre publie ou indexe.

## Ordre de reprise recommande

1. La session Architecture catalogue relit ce checkpoint et confirme les routes canoniques Bagues, Mariage, Naissance, pierre et intention.
2. Elle cree ou complete les destinations en prive sur le theme de developpement et y rattache uniquement les produits reels disponibles.
3. Elle fournit a la session UI/UX des routes et structures stables pour le polish.
4. Apres ce socle, ouvrir une session dediee Atelier de Karine : modele produit, choix de perles, tailles, prix, proprietes de ligne et moteur d'apercu avant de dessiner l'interface.
5. Traiter ensuite les trois carrousels Nouveautes, Best sellers et Promotions.

## Hors champ a ne pas rouvrir maintenant

- page compte et Cercle ;
- nouvelle mutation du Hero homepage deja valide ;
- retrait de preuves de marque sans preuve qu'elles sont fausses ;
- nouvel audit legal generaliste ;
- remplacement ou suppression du quiz.

## Prompt de reprise

> Reprends la refonte fonctionnelle MilAura depuis `docs/checkpoints/2026-08-11-1923-choisir-pierre-categories-handoff.md`, `docs/project-state.md` et `docs/codex-handoff.md`. La landing publique `Choisir sa pierre` et son lien sous `Pierres & Mineraux` sont livres. Le quiz `/pages/diagnostic-emotionnel` est le funnel principal et doit rester intact. Commence par les destinations catalogue privees Bagues, Mariage, Naissance, hubs pierre et intention, en coordination avec la session Architecture catalogue. Ne touche ni au Cercle, ni a la page compte, ni au Hero homepage. Preserve le worktree sale. N'effectue aucun commit global ni push complet du theme. Le patch Scratch et l'harmonisation livraison sont locaux et non livres : ne les melange pas au lot categories.
