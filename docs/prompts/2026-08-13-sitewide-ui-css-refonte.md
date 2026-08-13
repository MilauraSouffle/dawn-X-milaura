# Prompt de reprise - UI, cartes et actions MilAura

Date : 2026-08-13

Reprends la refonte UI globale MilAura en lecture seule depuis `AGENTS.md`, `docs/project-state.md`, `docs/codex-handoff.md`, `docs/workstreams.md`, `docs/reference/MILAURA-DIRECTION-ARTISTIQUE-2026.md`, `docs/reference/MILAURA-CTA-SYSTEM-2026.md` et `docs/reference/MILAURA-VISUAL-SYMBOLS-2026.md`.

Patrice veut propager a tout le site le langage visuel valide le 2026-08-13 sur les cartes de la Selection d'aout : simple, sobre, efficace, premium, photographie prioritaire, carte transparente, cadre aigue-marine fin, informations compactes, selecteur souligne et action Ajouter soulignee d'or. Pas de fond blanc ajoute, pas de grosse pastille prune et aucun aspect bouton natif Dawn.

Mission : auditer puis unifier toutes les familles de cartes produit, boutons et controles. Ne lance pas une recherche-remplacement globale. Commence par produire un inventaire par composant et par parcours : homepage, collections, pages editoriales, PDP, panier, recherche et compte. Pour chaque famille, indique le fichier source, la variante actuelle, le niveau d'action et le risque de regression.

Architecture attendue :

- tokens existants comme seule source de couleur, typo, espacement et geometrie ;
- classes et snippets reutilisables, sans duplication de longs blocs CSS dans les sections ;
- carte produit traitee comme un seul objet transparent, photo jamais masquee ;
- actions de carte et editoriales fines et soulignees ;
- surfaces remplies reservees aux actions commerciales majeures qui exigent une identification immediate, notamment PDP, panier et paiement, avec une geometrie plate et contenue ;
- cibles tactiles de 44 px recommandees, 40 px minimum ;
- focus visible, contraste AA, loading, disabled, clavier et panier fonctionnels ;
- aucune valeur hex ou `font-family` en dur ;
- aucun nouveau glassmorphism, gros rayon, gradient decoratif, double anneau generique ou pictogramme de luxe IA.

Travaille par vagues. Premiere vague : composants partages puis une page representative de chaque parcours. Pousse seulement sur le theme de developpement `199421952347`, controle 360/390/430 px et desktop, puis soumets des captures a Patrice. Ne touche pas aux fichiers reserves par la session Hero. Aucun deploiement live, aucune propagation sitewide et aucune modification de produit sans GO explicite.
