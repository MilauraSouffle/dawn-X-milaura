# Hero aigue-marine et HERO CHLOE, cloture live

> Remplace le 2026-09-14 15:20 CEST : Patrice a demande le retrait definitif de `HERO CHLOE`. Ce checkpoint conserve l etat historique de 15:03 CEST, il ne doit plus servir d instruction de reprise.

Date : 2026-09-14 15:03 CEST.

## Etat livre

- Le Hero de la page d accueil est live sur le theme Shopify `190430282075`.
- Le Hero actif utilise les assets `milaura-home-hero-harmonie-desktop-20260914.webp` et `milaura-home-hero-harmonie-mobile-20260914.webp`, le surtitre `La beaute des mineraux et leurs vertus`, le H1 `L harmonie parfaite.` en Dancing Script et le CTA `Decouvrir nos bijoux`.
- Les commits fonctionnels sont `509ed8e2`, `c29ae504`, `e60effeb` et `a956bc69`. Ils sont pousses sur `codex/milaura-aqua-hero-preview-20260914` et sur `codex/milaura-integration`.
- Theme Check : 0 erreur, 16 avertissements historiques dans 8 fichiers hors lot.
- Le pullback du Hero actif apres le passage en Dancing Script est identique SHA-256 : `00b2c3e7234845c20d527a126f9352041c0e0df83ed4df2d5dc0dc93daf83931`.

## HERO CHLOE reutilisable

- L ancien Hero d accueil avec Chloé n a pas ete supprime. Il est conserve dans `sections/milaura-hero-portal-original.liquid` et ses deux visuels originaux restent versionnes : `milaura-home-hero-fashion-chloe-parure-desktop-v3b.webp` et `milaura-home-hero-fashion-chloe-parure-mobile-v4.webp`.
- Dans l editeur Shopify, cette section s appelle exactement `HERO CHLOE`. Elle est disponible pour etre ajoutee a une autre page sans toucher au nouveau Hero de l accueil.
- Le pullback live de `HERO CHLOE` est identique au source, SHA-256 `c125edbd90c4559a4895ce2d902075683cfbcff79ae95c8101f0a2d7e661ffd2`.
- Ne pas supprimer ni modifier `HERO CHLOE` par deduction. Il est une reserve creative validee par Patrice.

## Reprise

Patrice pourra ouvrir une nouvelle session avec :

```text
Creons cette page et reutilisons le HERO CHLOE.
```

La prochaine session commence en lecture seule, identifie la page ou le template a creer, puis ajoute `HERO CHLOE` sans modifier le Hero aigue-marine de l accueil. Toute nouvelle page, son contenu et sa publication restent soumis au GO de Patrice.

## Etat des checkouts

- Worktree source : `/Users/paesano/Documents/MilAura website/_worktrees/aqua-hero-preview-20260914`, propre apres le commit `a956bc69`.
- Checkout principal d integration : volontairement non touche. Au 2026-09-14 15:03 CEST, il est sale et divergent, `ahead 2, behind 71`, avec des changements concurrents. Aucun nettoyage, reset, pull global ou staging large n est autorise dans cette cloture.
- Le nettoyage Git, des worktrees et des previews reste explicitement reporte a une session distincte apres instruction de Patrice.
