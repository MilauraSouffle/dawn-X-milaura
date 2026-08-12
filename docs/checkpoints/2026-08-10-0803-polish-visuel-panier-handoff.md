# Handoff polish visuel, sélection saisonnière et avantages panier MilAura

Date : 2026-08-10 08:03 CEST
Branche : `codex/milaura-reconcile-2026-08-07`
Thème live : `dawn-X-milaura/main`, ID `190430282075`
Thème de développement catalogue : `Development (c105a8-mac-1)`, ID `199421952347`

## Intention de reprise

Patrice ouvre une session dédiée au polish visuel pixel perfect. Une autre session développe en parallèle les nouvelles sections, pages et catégories. La session design doit améliorer les surfaces livrées sans reprendre la propriété fonctionnelle, éditoriale ou taxonomique du chantier dev.

Frontière active :

- session dev : structure, sections, pages, catégories, données, destinations et logique fonctionnelle ;
- session design : hiérarchie, rythme, composition, typographie, couleurs, matières, responsive, états d'interaction et cohérence visuelle ;
- Patrice : validation créative finale avant tout push live ;
- aucune session ne doit nettoyer, reset, merger ou embarquer les fichiers concurrents de l'autre.

## État visuel live vérifié

Un pull ciblé du thème live a été réalisé le 2026-08-10 à 08:03 CEST. Les douze fichiers suivants sont identiques octet par octet entre le dépôt local et le thème live :

- `sections/milaura-hero-portal.liquid` ;
- `sections/milaura-selection-atelier.liquid` ;
- `sections/milaura-seasonal-collection.liquid` ;
- `assets/milaura-card.css` ;
- `sections/milaura-choice-doors.liquid` ;
- `assets/milaura-choice-doors.css` ;
- `assets/milaura-choice-doors.js` ;
- `templates/index.json` ;
- `templates/collection.selection-aout-2026.json` ;
- `assets/milaura-cart-rewards-auto.js` ;
- `config/settings_schema.json` ;
- `snippets/milaura-cart-rewards-drawer.liquid`.

### Hero

- Slogan live : `La beauté des bijoux rencontre les vertus des pierres.`
- `beauté` et `vertus` conservent le jeu d'échelle validé.
- `bijoux` et `pierres` conservent le jeu de matières validé.
- Le Hero, son univers, ses photos et sa signature MilAura ne doivent pas être réinventés sans demande explicite.

### Sélection d'août

- La homepage et la landing `/collections/selection-aout-2026` sont live.
- Patrice a validé le fond plage pleine largeur, les transitions nacrées, les lignes fines et les cartes photo pleine surface.
- Le haut de landing a ensuite été compacté pour réduire l'effet gros bloc. Patrice a validé cette passe par `top`.
- Le cartouche prune et lagon est une signature commune home et landing.
- Direction de couleur : prune structurant, aigue-marine pour les lignes et la respiration, doré rare.
- Copy validée : `Des créations choisies par Karine pour leurs reflets dorés, leurs pierres naturelles et leur lumière estivale.`

### Guide de découverte

- Le guide `milaura-choice-doors` et ses assets sont live et identiques au dépôt.
- Commits de référence : `dd45d24a` puis `ffab40db`.
- Son approbation visuelle finale n'est pas établie dans ce handoff. La nouvelle session doit le juger sur captures desktop et mobile avant de modifier.
- Ne pas changer ses destinations, sa taxonomie ou sa logique sans coordination avec la session dev.

## Avantages panier et livraison

Règles commerciales live :

1. 30 EUR : livraison offerte uniquement pour un tarif de point relais éligible ;
2. 50 EUR : cadeau mensuel ajouté en complément ;
3. 80 EUR : remise de 15 % ajoutée en complément des deux avantages précédents.

Configuration :

- code `MILAURA-RELAIS30` : France, minimum 30 EUR, tarif d'expédition maximum 4 EUR ;
- cadeau actuel : variante `53142713925979`, bracelet hématite à 0 EUR ;
- code `MILAURA15-80` : 15 % dès 80 EUR, cumulable avec la livraison ;
- `VINTED10` reste actif et manuel ;
- liste finale Shopify : `VINTED10`, `MILAURA-RELAIS30`, `MILAURA15-80` ;
- dix anciens codes ont été supprimés, dont `BIENVENUE10` et `MILAURASCRATCH10` ;
- ScratchToReveal, Cercle et newsletter n'ont reçu aucune modification de code dans ce lot.

Profil d'expédition France :

- ancienne règle Standard gratuite dès 50 EUR supprimée ;
- Standard : 5,80 EUR sans plafond de panier ;
- Express : 9,90 EUR à partir de 30 EUR ;
- Points de retrait : activés dans Shopify ;
- le code limité à 4 EUR ne peut pas rendre Standard ou Express gratuits.

Tests :

- 71,70 EUR : cadeau mensuel à 0 EUR ajouté dans le panier isolé ;
- 95,60 EUR : cadeau présent et remise exacte de 14,34 EUR ;
- `VINTED10` : remise exacte de 9,56 EUR sur 95,60 EUR ;
- au-dessus de 50 EUR sans code : Standard 5,80 EUR, Express 9,90 EUR ;
- aucun achat ni commande réelle n'a été créé ;
- le point relais n'est pas exposé par l'endpoint standard des tarifs. Son activation est prouvée dans Shopify Admin, mais aucun checkout réel n'a été finalisé.

## État Git et fichiers concurrents

- HEAD : `08f3207b feat: establish private catalogue foundation`.
- Branche locale : 1 commit devant `origin/codex/milaura-reconcile-2026-08-07`.
- Le commit en avance appartient au chantier catalogue parallèle.
- Trois fichiers panier restent modifiés localement, non stagés et non commités, bien qu'ils soient déjà live et vérifiés :
  - `assets/milaura-cart-rewards-auto.js` ;
  - `config/settings_schema.json` ;
  - `snippets/milaura-cart-rewards-drawer.liquid`.
- SHA-256 :
  - `4714938599939a9f08b885da91ab00323b799e23f8534f909038307309610372` ;
  - `3b4fec990c8c57dacc76a3b66d9a3f212659d30e1dc5e8fb385e82bee72bd67a` ;
  - `64b4d74235c01409b6ae52af74f76702da8f6571e41da1ecb579dbe0b711bc0a`.

Ne pas pousser la branche entière et ne pas inclure ces fichiers dans un commit design sans décision explicite.

## Points non terminés

- Le bandeau d'annonce, le footer, certaines fiches produit et `page.llms-txt.liquid` peuvent encore porter d'anciens seuils de livraison. Leur harmonisation n'a pas été exécutée dans ce lot.
- Le popup peut encore afficher `BIENVENUE10`, désormais supprimé. Le popup appartient à la refonte ScratchToReveal et reste hors périmètre du polish initial.
- `templates/index.json` référence encore historiquement `shopify://collections/bagues`. La correction vers le fallback validé doit être coordonnée avec la session catalogue/UI.
- Les pages et sections créées par la session dev doivent être contrôlées sur le thème de développement avant toute publication.

## Méthode de la nouvelle session design

1. Commencer en lecture seule par des captures desktop et mobile du live et des previews de la session dev.
2. Classer les défauts en trois groupes maximum : bloquant, hiérarchie/rythme, finition.
3. Proposer une passe courte avec sélecteurs et fichiers exacts avant de coder.
4. Ne pas modifier le copywriting, les destinations, les règles économiques, le schema ou la taxonomie sans GO correspondant.
5. Capturer avant/après en desktop et mobile, puis demander la validation visuelle de Patrice avant tout push live.
6. Fermer Playwright, previews et navigateurs d'automatisation après chaque contrôle.

## Prompt de reprise

> Reprends le polish visuel MilAura depuis `docs/codex-handoff.md`, `docs/project-state.md` et `docs/checkpoints/2026-08-10-0803-polish-visuel-panier-handoff.md`. Une session dev construit en parallèle les sections, pages et catégories. Tu es propriétaire uniquement du design et du polish : commence en lecture seule par des captures desktop et mobile, vérifie le live et les previews, puis propose au maximum trois corrections pixel perfect avec les fichiers et sélecteurs exacts. Préserve la logique, les destinations, la taxonomie, le copywriting validé et les trois fichiers panier non commités. Ne pousse rien live avant mon GO visuel. Ferme tous les navigateurs d'automatisation après les contrôles.
