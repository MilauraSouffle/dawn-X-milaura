# Registre des sessions MilAura

Derniere mise a jour : 2026-08-12 19:37 CEST

Ce fichier est le registre obligatoire avant toute edition parallele. Une ligne par session active et une trace des lots fermes recents, aucune exception.

## Point d'integration

| Role | Chemin | Branche | Theme Shopify | Etat |
| --- | --- | --- | --- | --- |
| Integration, documentation et deploiement | `/Users/paesano/Documents/MilAura website/dawn-X-milaura` | `codex/milaura-integration` | live `190430282075`, developpement `199421952347` | reserve au proprietaire d'integration |

## Sessions declarees

| Lot | Proprietaire | Branche | Worktree | Fichiers ou zone exclusive | Theme | Statut | Mise a jour |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Correction visuelle PDP, pills mobiles et bandeau social | Codex, tache `Auditer l'avancement MilAura` | `codex/milaura-pdp-visual-correction-20260812` | `/Users/paesano/Documents/MilAura website/_worktrees/pdp-visual-correction-20260812` | `sections/milaura-product-hero.liquid`, `templates/product.milaura-produit.json`, checkpoint PDP associe | developpement `199421952347`, aucun live sans GO | pret a valider visuellement | 2026-08-12 19:37 CEST |
| Capsule de titre des collections, variante aigue-marine | Codex, tache `Definir la voix editoriale MilAura` | `codex/milaura-collection-pill-aqua-20260812` | retire apres integration | `sections/milaura-collection-hero.liquid`, `docs/checkpoints/2026-08-12-1927-collection-pill-aqua.md` | live `190430282075`, push cible et pullback valides | ferme | 2026-08-12 19:37 CEST |

## Regles du registre

1. Le proprietaire inscrit sa ligne avant la premiere modification.
2. Les fichiers et le theme Shopify doivent etre exclusifs et assez precis pour detecter un conflit.
3. Une session qui a besoin d'un fichier deja reserve attend ou negocie un transfert explicite dans ce registre.
4. Le live Shopify appartient toujours au proprietaire du point d'integration.
5. Un statut `pret a integrer` exige un worktree propre, un commit pousse et un checkpoint date.
6. Apres integration et validation, la ligne passe a `ferme`, puis le worktree est retire.

Procedure detaillee : `docs/reference/2026-08-12-repository-workflow.md`.
