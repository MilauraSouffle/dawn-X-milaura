# Lot contenu six pages

Date : 2026-09-07. État : préparation locale complète, publication non exécutée.

Lire [la version finale des six textes](REVUE-SIX-PAGES.md). Le manifeste contient les titles, metas, IDs connus, champs autorisés et propriétaires. Les cinq HTML constituent les corps proposés ; le sixième contenu est implémenté dans `templates/page.milaura-pierres-naissance.json` par trois blocs Conseil déjà supportés par la section existante. Aucun CSS, JS ou composant partagé modifié.

## Changements

- Collier obsidienne : introduction mesurée, caractéristiques regroupées, chaîne comprise, distinction finition dorée/or massif, deux liens pertinents. H1 et faits produit conservés.
- Bague aigue-marine : titre SEO, dimensions, limite du réglage, mois de mars, entretien et retour vers le guide. H1, produit et offre conservés.
- Pendule cristal : texte produit concret et début de pratique, suppression des garanties non démontrées sur oscillations et limpidité. Proposition transmise au propriétaire catalogue, pas appliquée au JSON V4.1 ni à Shopify.
- Bracelet labradorite : éclats/reflets/entretien, sans provenance inventée, sans garantie d'impossibilité d'imitation. Ambiguïté diamètre/tour de poignet signalée et retrait confirmé par propriétaire catalogue. Proposition transmise.
- Guide débutants : contenu réécrit, accents rétablis, suppression du H1 répété dans le corps, choix et entretien concrets, usages symboliques préservés, liens d'achat et de conseil. Auteur Karine et date de publication initiale à préserver ; ne pas prétendre que Karine a déjà relu ce nouveau texte.
- Pierres de naissance : introduction et sélection clarifiées ; trois conseils après les produits ; source GIA et liens utiles. Mois, correspondances existantes, produits et défaut d'ouverture conservés.

## Sources et état avant modification

Sources publiques relues le 2026-09-07 : quatre endpoints produits `.js`, article et histoire MilAura. Les réponses brutes sont hors Git dans `/private/tmp/milaura-six-pages-20260907/`. Template live relu seul et comparé byte à byte avec le fichier local avant édition : identique. Copie hors Git : `/private/tmp/milaura-six-pages-live-20260907/templates/page.milaura-pierres-naissance.json`.

Référence pour mars et alternatives : https://www.gia.edu/birthstones/march-birthstones ; guide général https://www.gia.edu/birthstones. Les informations produit restent celles des fiches relues, pas une généralisation depuis le GIA. Certification LFG confirmée par Patrice dans cette tâche : aucune modification de ce sujet.

## Vérifications du 2026-09-07

- Theme Check : zéro erreur, seize avertissements historiques.
- JSON manifeste et template valides ; trois blocs supportés ; ordre/blocs cohérents ; limite de quarante respectée.
- Douze destinations internes : HTTP 200, sans redirection à la lecture.
- Aucun H1 dans les cinq HTML ; aucun tiret cadratin ; `git diff --check` conforme.
- Les cinq dossiers presse contiennent chacun un angle, une destination, un texte et les conditions particulières du canal. Zéro message envoyé.
- Aucun rendu Shopify des nouvelles versions n'a été publié ou prévisualisé dans le profil de Patrice. La recette visuelle du template reste à faire dans un contexte réellement isolé avant publication.

## Application après revue finale

Le guide canonique impose la validation du copywriting final par Patrice. Le GO du 2026-09-07 couvre la réalisation de ce lot ; cette revue porte sur la version désormais concrète des textes, pas sur un nouveau diagnostic.

Pour les quatre pages sous propriétaire SEO : relire Admin et sauvegarder les champs actuels hors dépôt avant écriture ; retrouver IDs article/page par handle exact ; comparer la version courante afin de préserver toute édition intervenue depuis la capture. Appliquer uniquement title/meta/corps prévus au manifeste. Ne pas renommer les URLs ni les produits disponibles. Conserver auteur, publication et images de l'article.

Pour le template naissance : propriétaire intégration chargé du push ciblé d'un fichier après recette isolée, sans suppression, puis pullback identique et contrôle des liens. Ne pas pousser le thème entier. Les modifications live du lot précédent restent à rapprocher séparément.

Pour les deux legacy : seul le propriétaire catalogue intègre les propositions après comparaison avec son travail. Aucun changement de statut, de stock, de prix ou de délai de livraison inclus dans ce lot.

## Mesure commerciale

Baseline déjà lue dans la tâche : GA4 89 sessions Organic Search et 14,90 EUR de revenu sur 2026-08-10 à 2026-09-06 ; GSC 179 clics sur 2026-08-09 à 2026-09-05. Fenêtres et métriques différentes : ne pas déduire une perte de tracking de cet écart seul. Commandes organiques, conversion achat, panier moyen et marge organique restent non établis : aucun ratio inventé. Ils sont à extraire avant un budget d'acquisition ; aucun budget ou lancement payant demandé ici.

Après publication, noter la date réelle puis comparer clics hors marque, CTR, sessions engagées et achats sur fenêtres identiques de vingt-huit jours. Conserver la distinction entre deux produits disponibles, deux dépendances catalogue et deux guides éditoriaux.
