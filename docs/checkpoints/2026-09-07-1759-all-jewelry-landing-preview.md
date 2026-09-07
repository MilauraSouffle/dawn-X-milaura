# Landing Tous les bijoux, preview du 2026-09-07 17:59 CEST

## Etat

- Statut : PREVIEW PRETE, PASS TECHNIQUE, GO VISUEL PATRICE EN ATTENTE.
- Branche : `codex/milaura-all-jewelry-landing-20260907`.
- Worktree : `/Users/paesano/Documents/MilAura website/_worktrees/all-jewelry-landing-20260907`.
- Base d'integration : `74bd5f20`.
- Theme preview : `201065824603`, `MilAura Notes et états vides Preview 2026-09-07`.
- URL de revue : `https://milaura.fr/collections/bijoux-pierres-naturelles?view=milaura-all-jewelry&preview_theme_id=201065824603`.
- Theme live `190430282075` : inchange.
- Affectation du template a la collection Shopify Admin : non realisee.

## Livraison

- Un Hero editorial dedie avec un H1 unique, une promesse concrete et une action soulignee.
- Deux compositions Hero distinctes, bureau et mobile, construites a partir de cinq bijoux actuellement disponibles sur MilAura.
- Cinq grandes entrees par type : bracelets, colliers, boucles d'oreilles, bagues et pendentifs.
- Un chemin secondaire vers la page existante de choix par pierre.
- Les filtres et la grille produit existants restent reutilises sous la nouvelle introduction.
- Sur mobile, les cartes forment un rail horizontal natif avec une partie de la carte suivante visible.

## Fichiers du lot theme

- `sections/milaura-all-jewelry-landing.liquid`
- `assets/milaura-all-jewelry-landing.css`
- `assets/milaura-hero-editorial-collection-all-jewelry-desktop.webp`
- `assets/milaura-hero-editorial-collection-all-jewelry-mobile.webp`
- `templates/collection.milaura-all-jewelry.json`

## Direction visuelle et medias

- DA MilAura appliquee : Nacre, encre prune, touche d'or mat, Gloock, Instrument Sans et Dancing Script par tokens uniquement.
- Reference joaillerie haut de gamme traduite par la respiration, la photographie, les filets fins et la retenue. Aucun motif, signe ou composant de marque tierce n'est copie.
- Le skill `imagegen` a produit les deux compositions a partir des references publiques exactes d'un bracelet, d'un collier, de boucles d'oreilles, d'une bague et d'un pendentif disponibles.
- Prompt de production : nature morte joailliere editoriale MilAura, produit fidele, support mineral Nacre, verre aigue-marine, pierre prune, accent or mat tres limite, sans texte, sans logo, sans trefle ni motif quadrilobe, sans bijou invente.
- Hero bureau : 1586 x 992 px, WebP, environ 132 Ko.
- Hero mobile : 1060 x 1484 px, WebP, environ 92 Ko.

## Verifications

- `python3 tools/check_copywriting.py` : PASS, 334 fichiers controles.
- `shopify theme check` : 0 erreur ; 16 avertissements preexistants dans 8 anciens fichiers ; aucun avertissement dans le lot.
- JSON du template : valide apres retrait de l'en-tete de commentaire Shopify.
- Controle DA du lot : aucun em dash, aucune police legacy, aucune couleur hexadecimale ni famille de police en dur.
- Responsive reel : 360, 390, 430, 768 et 1440 px sans debordement horizontal de page.
- Cinq cartes rendues, cinq liens de collection valides, cinq textes alternatifs presents, aucun lien vide.
- Rail mobile reellement defilable ; aucun journal d'erreur navigateur sur mobile ou bureau.
- Pullback cible depuis le theme preview : sommes SHA-256 identiques pour les cinq fichiers, 5/5.

## Prochaine validation

Patrice juge la preview sur mobile et bureau. Apres un GO visuel explicite, l'integration, l'affectation Admin du template a `bijoux-pierres-naturelles` et le deploiement live restent trois actions a executer et verifier dans leur perimetre exact.
