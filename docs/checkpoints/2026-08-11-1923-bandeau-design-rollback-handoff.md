# MilAura - Handoff bandeau design et rollback

Date : 2026-08-11 19:23 CEST

## Verdict

La session design n'est pas validée par Patrice. Le niveau attendu est celui de `tiffany.com`. Les essais décoratifs du bandeau sont restés sous ce niveau.

## État final vérifié

- Live : thème `dawn-X-milaura/main`, ID `190430282075`.
- Bandeau restauré dans une version aigue-marine sobre, sans image ni décor.
- Rollback : commit `5d95b3b4`, poussé sur `codex/milaura-reconcile-2026-08-07`.
- Theme Check ciblé : zéro erreur.
- Contrôle HTTP live : `200`, ancien texte présent, aucun asset rejeté référencé.
- Six assets décoratifs et deux copies temporaires supprimés.

## Reprise

1. Attendre que Patrice désigne le prochain lot.
2. Commencer en lecture seule et viser Tiffany.com dès la première proposition.
3. Ne pas réutiliser les sprites photographiques, détourages approximatifs, pierres générées ou motifs IA génériques.
4. Préserver les changements parallèles et demander un GO visuel avant tout push live.
5. Fermer navigateurs, Playwright, previews et serveurs lancés après chaque contrôle.

Le worktree reste volontairement sale avec de nombreux changements parallèles sans rapport avec ce rollback.
