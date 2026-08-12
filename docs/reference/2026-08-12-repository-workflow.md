# Procedure Git et Shopify MilAura

Date : 2026-08-12
Statut : obligatoire

## Objectif

Permettre plusieurs sessions sur des lots distincts sans partager un checkout, ecraser des fichiers, perdre des modifications Shopify ou multiplier les clones divergents.

## Sources de verite

1. GitHub conserve les commits et les branches partagees.
2. Le checkout principal `/Users/paesano/Documents/MilAura website/dawn-X-milaura` est le point d'integration local.
3. Le theme live Shopify `190430282075` est la verite publique.
4. Le theme de developpement `199421952347` est la zone de validation technique et creative.
5. `docs/project-state.md` decrit l'etat courant, `docs/codex-handoff.md` le prochain point de reprise et `docs/workstreams.md` les proprietaires actifs.

Git et Shopify ne sont pas interchangeables. Un commit ne prouve pas un deploiement. Un changement fait dans l'editeur Shopify ne devient durable qu'apres pullback cible, comparaison et commit.

## Role particulier de `main`

`main` est la branche par defaut et le miroir automatique du theme live Shopify. Elle peut avancer apres une action dans l'editeur Shopify ou une synchronisation du theme. Elle n'est pas la base des nouveaux lots.

Avant une integration ou un deploiement, le proprietaire du checkout principal execute `git fetch --prune origin`, puis controle `HEAD..origin/main` et le diff des fichiers. Un nouveau commit automatique Shopify doit etre classe fichier par fichier. Il ne doit jamais etre fusionne aveuglement.

Lorsque l'arbre d'integration contient deja la version source auditee de tous les changements utiles, l'historique du miroir peut etre rattache par un commit de reconciliation documente, sans modifier l'arbre et sans deployer. Dans tous les autres cas, effectuer d'abord un pullback cible, comparer et integrer les fichiers utiles explicitement.

## Architecture autorisee

- Un seul clone actif du depot.
- Un checkout principal reserve a l'integration.
- Un worktree Git gere par session parallele.
- Une branche dediee par lot, prefixee `codex/milaura-`.
- Un registre central des proprietaires dans `docs/workstreams.md`.
- Aucun clone complet manuel, aucun dossier `dawn-X-milaura 2`, aucune copie numerotee.

Les worktrees vivent exclusivement sous :

`/Users/paesano/Documents/MilAura website/_worktrees/`

## Demarrer un lot parallele

1. Lire `AGENTS.md`, `docs/project-state.md`, `docs/codex-handoff.md` et `docs/workstreams.md`.
2. Verifier que le checkout principal est propre avec `git status --short --branch`.
3. Recuperer les references distantes avec `git fetch origin`.
4. Choisir comme base la branche d'integration inscrite dans `docs/workstreams.md`.
5. Creer une branche et un worktree nommes d'apres le lot.
6. Ajouter immediatement une ligne au registre avec proprietaire, branche, chemin, fichiers exclusifs et theme.

Exemple de convention :

```bash
git worktree add -b codex/milaura-hero-video-20260813 \
  "/Users/paesano/Documents/MilAura website/_worktrees/hero-video-20260813" \
  codex/milaura-integration
```

Le nom de la branche d'integration doit toujours etre relu dans le registre avant d'executer la commande.

## Pendant le lot

- Ne modifier que les fichiers reserves.
- Ne jamais utiliser le checkout d'une autre session.
- Ne pas changer de theme Shopify sans mise a jour du registre.
- Ne jamais lancer un push complet du theme.
- Pour une verification live, utiliser un pull cible dans un dossier temporaire ou un worktree propre, jamais par-dessus des modifications locales.
- Conserver les secrets, exports, captures, sauvegardes et assets de travail hors du depot.
- Si le perimetre change, mettre a jour le registre avant l'edition suivante.

## Definition de pret a integrer

Une session est `pret a integrer` uniquement si :

- les changements sont limites au perimetre reserve
- `git diff --check` reussit
- `shopify theme check` ne contient aucune erreur nouvelle
- les JSON modifies sont valides selon leur format Shopify
- les parcours utiles sont testes sur mobile et desktop lorsque le lot est visuel
- les changements sont committes et pousses
- le checkpoint date explique les fichiers, tests, limites et statut Shopify
- le worktree est propre

## Integration

Le proprietaire du checkout principal :

1. confirme que le checkout principal est propre
2. relit le checkpoint et le diff du lot
3. integre uniquement le commit valide
4. relance `git diff --check` et `shopify theme check`
5. teste le parcours concerne
6. pousse la branche d'integration sur GitHub
7. deploie seulement les fichiers autorises sur le theme cible
8. effectue un pullback cible et compare bit a bit
9. met a jour `docs/project-state.md`, `docs/codex-handoff.md` et `docs/workstreams.md`

Un deploiement visuel sur le theme de developpement ne vaut pas GO creatif. Le live exige toujours l'autorisation prevue par le lot.

## Fermer un lot

1. Confirmer que le commit est integre et pousse.
2. Confirmer que le worktree ne contient aucune modification locale.
3. Passer la ligne du registre a `ferme`.
4. Retirer le worktree avec `git worktree remove <chemin>`.
5. Executer `git worktree prune`.
6. Supprimer la branche ephemere seulement apres verification de son integration.

Ne jamais forcer la suppression d'un worktree sale.

## Definition d'un depot propre

Le depot est propre uniquement si toutes ces conditions sont vraies :

- `git status --porcelain` ne retourne rien
- aucune modification n'est staged ou non staged
- aucun fichier non suivi ne reste dans le depot actif
- `git worktree list` ne contient que les sessions declarees dans le registre
- aucun clone manuel concurrent ne reste dans la zone active
- le HEAD local et la branche GitHub d'integration sont identiques
- `git fsck` reussit
- `git diff --check` reussit
- `shopify theme check` affiche 0 erreur

## Discipline de code

- Preferer une section ou un snippet MilAura dedie a une modification large d'un fichier Dawn.
- Centraliser les styles partages dans `assets/milaura.css` et garder les styles propres a une section dans cette section.
- Eviter les doublons de logique, les variantes de texte contradictoires et les valeurs logistiques codees en dur sans source de verite.
- Un lot fonctionnel, un lot donnees et un lot creatif restent des commits distincts.
- Un fichier partage ne change de proprietaire qu'avec un transfert explicite dans le registre.
