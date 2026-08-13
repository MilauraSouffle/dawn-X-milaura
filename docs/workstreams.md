# Registre des sessions MilAura

Derniere mise a jour : 2026-08-13 11:20 CEST

Ce fichier est le registre obligatoire avant toute edition parallele. Une ligne par session active et une trace des lots fermes recents, aucune exception.

## Point d'integration

| Role | Chemin | Branche | Theme Shopify | Etat |
| --- | --- | --- | --- | --- |
| Integration, documentation et deploiement | `/Users/paesano/Documents/MilAura website/dawn-X-milaura` | `codex/milaura-integration` | live `190430282075`, developpement `199421952347` | reserve au proprietaire d'integration |

## Sessions declarees

| Lot | Proprietaire | Branche | Worktree | Fichiers ou zone exclusive | Theme | Statut | Mise a jour |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Refonte editoriale de la selection saisonniere : titre, cartes et Hero de destination | Codex, tache `Design UI MilAura` | `codex/milaura-seasonal-editorial-20260813` | `/Users/paesano/Documents/MilAura website/_worktrees/seasonal-editorial-20260813` | `assets/milaura-card.css`, `assets/milaura-section-heading.css`, `assets/milaura-editorial-purchase.js`, `assets/cart-drawer.js`, `snippets/milaura-section-heading.liquid`, `snippets/milaura-editorial-purchase.liquid`, `sections/milaura-selection-atelier.liquid`, `sections/milaura-seasonal-collection.liquid`, `templates/collection.selection-aout-2026.json`, checkpoint associe | developpement `199421952347`, aucun live sans GO visuel | en cours, retours visuels P2 | 2026-08-13 12:18 CEST |
| Fondation design : tokens minerals, echelle typo et pipeline polices | Claude, session frontend design | `claude/milaura-design-foundation-20260813` | checkout principal, aucune session parallele active | `CLAUDE.md`, `AGENTS.md`, `assets/milaura-tokens.css`, `assets/milaura.css`, `layout/theme.liquid`, `config/settings_data.json`, familles de polices dans `sections/` et `snippets/` | dev `199421952347` puis live `190430282075`, pullback 101/101 bit a bit | ferme | 2026-08-13 11:20 CEST |
| Accent rose `b♥nheur` dans la bulle sociale PDP | Codex, tache `Auditer l'avancement MilAura` | `codex/milaura-pdp-bonheur-heart-20260813` | retire apres integration | `sections/milaura-product-hero.liquid`, `docs/checkpoints/2026-08-13-0810-pdp-bonheur-heart.md` | live `190430282075`, push cible et pullback valides | ferme | 2026-08-13 08:25 CEST |
| Correction visuelle PDP, pills mobiles et bulle sociale historique | Codex, tache `Auditer l'avancement MilAura` | `codex/milaura-pdp-visual-correction-20260812` | retire apres integration | `sections/milaura-product-hero.liquid`, `templates/product.milaura-produit.json`, checkpoint PDP associe | live `190430282075`, six fichiers cibles et pullback valides | ferme | 2026-08-12 20:00 CEST |
| Capsule de titre des collections, variante aigue-marine | Codex, tache `Definir la voix editoriale MilAura` | `codex/milaura-collection-pill-aqua-20260812` | retire apres integration | `sections/milaura-collection-hero.liquid`, `docs/checkpoints/2026-08-12-1927-collection-pill-aqua.md` | live `190430282075`, push cible et pullback valides | ferme | 2026-08-12 19:37 CEST |

## Regles du registre

1. Le proprietaire inscrit sa ligne avant la premiere modification.
2. Les fichiers et le theme Shopify doivent etre exclusifs et assez precis pour detecter un conflit.
3. Une session qui a besoin d'un fichier deja reserve attend ou negocie un transfert explicite dans ce registre.
4. Le live Shopify appartient toujours au proprietaire du point d'integration.
5. Un statut `pret a integrer` exige un worktree propre, un commit pousse et un checkpoint date.
6. Apres integration et validation, la ligne passe a `ferme`, puis le worktree est retire.

Procedure detaillee : `docs/reference/2026-08-12-repository-workflow.md`.
