# Certificats fournisseur publies en live

Date de cloture : 2026-09-12 19:16 CEST

## Resultat

La page publique est disponible a l URL canonique `https://milaura.fr/pages/certificats-des-pierres-naturelles` sur le theme live Shopify `190430282075`.

- La page annonce exactement 340 rapports d analyse fournisseur conserves par MilAura et en montre quatre exemples proteges.
- Le nom commercial du fournisseur n apparait pas dans le texte public.
- Les documents complets ne sont ni affiches ni telechargeables. Aucun lien vers les scans sources ou le portail fournisseur n est present.
- L entree vers la page est limitee au footer, sous le libelle `Certificats des pierres`. Aucun lien n a ete ajoute au menu principal ni a Mon ecrin.
- Le bandeau rose conserve la preuve `340 rapports d analyse fournisseur conserves par MilAura` sous forme non cliquable.
- Les avantages panier sont coherents a `30 / 50 / 80` dans le template PDP et le fallback panier.

## Shopify Admin et SEO

- Page ID : `168401633627`.
- Titre : `Certificats des pierres naturelles`.
- Handle : `certificats-des-pierres-naturelles`.
- Template : `milaura-certificats`.
- Title SEO : `Certificats des pierres naturelles | MilAura`.
- Meta description : `Découvrez comment nos fournisseurs font analyser des échantillons de pierres par le LFG Paris. MilAura conserve 340 rapports et en présente quatre exemples.`
- Reponse publique : HTTP 200.
- Canonical : `https://milaura.fr/pages/certificats-des-pierres-naturelles`.
- Indexation : aucune meta `noindex` et URL presente dans `sitemap_pages_1.xml`.
- Open Graph et Twitter reprennent le title et la meta description propres.

## Git et deploiement

- Branche : `codex/milaura-certificates-rewards-20260910`.
- Fusion de la derniere integration disponible au moment du lot : `c01a1332`.
- Commits fonctionnels : `98b90613`, `f3149217`, `0488c6a2`.
- Branche distante poussee et alignee.
- Deploiement effectue uniquement sur le theme live `190430282075`, par pushes cibles avec `--nodelete --strict --allow-live`.
- Sauvegarde pre-deploiement : `/private/tmp/milaura-certificates-live-before-20260912.Numlt0`.
- Pullback des 11 fichiers livres : 11 sur 11 identiques bit a bit. Le dernier ajustement footer-only de `sections/milaura-announcement.liquid` a ensuite ete repousse et repulle identique.
- Le checkout principal sale et en retard sur `origin/codex/milaura-integration` n a pas ete modifie.

## Verification

- `python3 tools/check_copywriting.py` : PASS, 350 fichiers controles.
- `git diff --check` : PASS.
- `shopify theme check --fail-level error` : PASS, zero erreur ; 16 avertissements historiques dans huit fichiers hors lot.
- QA publique a 1280 px : largeur document 1280 px, largeur scroll 1280 px.
- QA publique a 390 px : largeur document 390 px, largeur scroll 390 px.
- DOM public : un H1, quatre cartes de rapports, zero lien de scan, un seul lien interne vers la page et il se trouve dans le footer.
- Le header HTTP public confirme le theme servi `190430282075`.

## Risque restant

Le depot GitHub est public et l ancien commit `d77c0e46` de la branche conserve encore les quatre scans lisibles dans son historique. Les fichiers servis par Shopify sont proteges, mais une purge complete de l historique Git demanderait une reecriture destructive et un force-push. Cette operation reste interdite sans GO distinct de Patrice.

Les rapports portent sur des echantillons de lots. Aucun mapping individuel entre rapport, lot fournisseur, EAN et produit MilAura n est etabli ; la page ne presente donc aucune pierre ou aucun bijou comme individuellement certifie.
