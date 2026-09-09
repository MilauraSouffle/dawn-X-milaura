# Grand Jeu MilAura : landing V2 live

Date : 2026-09-09 16:32 CEST

Statut : `LIVE VERIFIE, SESSION FERMEE`

## Decision et perimetre

Patrice a valide le master nacre, les declinaisons 4:5 et 9:16, la landing simplifiee et la formulation positive de la participation, puis a donne le GO commit, push et live.

Le deploiement concerne uniquement :

- les deux images WebP du hero ;
- la section de landing ;
- le snippet du reglement ;
- le template JSON de la page ;
- la section footer et sa configuration concours.

## Etat live

- URL publique : `https://milaura.fr/pages/jeu-concours-10-jours-10-cadeaux`.
- Theme live : `190430282075`, `dawn-X-milaura/main`.
- Source : `9fb4b44c`, branche `codex/milaura-concours-20260908`, poussee sur origin.
- Integration : `2e8776c4`, realisee depuis un bridge propre base sur `origin/codex/milaura-integration` afin de ne pas toucher au checkout principal sale.
- Le live affiche le bento responsive, les deux onglets, les dix cadeaux cliquables, le reglement en quatorze articles et le footer concours.
- Formulation visible : `Participez sur Instagram, Facebook, ou les deux.`
- L'ancienne phrase restrictive sous les CTA est absente.

## Mecanique verrouillee

- Jeu du 2026-09-09 a 20:00 au 2026-09-18 a 23:59, heure de Paris.
- Tirage le 2026-09-19 a 12:00.
- Cinq gagnants Instagram et cinq gagnants Facebook.
- Une participation comptabilisee par compte sur chaque reseau ; les commentaires multiples sur le meme reseau ne creent pas de participations supplementaires.
- Une personne peut participer sur Instagram et Facebook, mais remporter au maximum un lot.
- Valeur affichee et reglementaire : 300 EUR.
- Carte cadeau : 30 EUR, sans livraison offerte en supplement.
- Code individuel de 10 % demandable pendant les sept jours suivant l'annonce des resultats selon le reglement.
- Pinterest exclu.

## Preuves

- Preflight live : les cinq fichiers existants correspondaient exactement a la V1 attendue ; les deux nouveaux WebP etaient absents. Aucun changement concurrent detecte dans le perimetre.
- `shopify theme check` : exit 0, seize avertissements historiques hors perimetre.
- `python3 tools/check_copywriting.py` : PASS, 338 fichiers controles.
- Push Shopify cible : succes sur sept fichiers avec `--allow-live --nodelete --strict`.
- Pullback live : sept fichiers conformes ; seul le commentaire standard auto-genere par Shopify est ignore pour le template JSON.
- Storefront sans cookie de preview : HTTP 200.
- HTML public : deux assets hero, titre positif, reglement, footer et dix UTM `jour01` a `jour10` presents ; ancienne phrase absente.
- QA navigateur : onglet reglement fonctionnel, dix liens cadeaux, rendu mobile 390 x 844 conforme.

## Livrables creatifs

- Master 16:9 : `/Users/paesano/.codex/visualizations/2026/09/08/01a0814e-44bb-7842-929a-c0933280a989/milaura-bento-v3/bento-paysage-v3-1920x1080.png`.
- Meta feed 4:5 : `/Users/paesano/.codex/visualizations/2026/09/08/01a0814e-44bb-7842-929a-c0933280a989/milaura-bento-v3/milaura-grand-jeu-meta-4x5-1080x1350.png`.
- Story/Reel 9:16 : `/Users/paesano/.codex/visualizations/2026/09/08/01a0814e-44bb-7842-929a-c0933280a989/milaura-bento-v3/milaura-grand-jeu-story-9x16-1080x1920.png`.

## Reprise du 2026-09-10

Camilla aide Karine sur la strategie et les textes. Codex reprend uniquement les dix visuels organiques quotidiens, un par cadeau, dans la direction du master valide.

Avant diffusion payante ou publication des posts principaux :

1. verifier ou aligner le prix public de la bague du jour 2 a 11 EUR ;
2. publier les posts principaux Instagram et Facebook puis conserver leurs permaliens ;
3. remplacer les CTA de profils de la landing par ces permaliens dans un lot cible ;
4. ne depenser aucun budget Meta sans GO explicite ;
5. ne rien publier sur Pinterest.

```text
Reprends le Grand Jeu MilAura depuis docs/checkpoints/2026-09-09-1632-grand-jeu-live-handoff.md. La landing V2 est deja live et verifiee sur le theme 190430282075. Ne la redeploie pas par deduction. Camilla et Karine gerent la strategie et les textes. Produis avec Patrice les dix visuels organiques quotidiens, un par cadeau, dans la direction nacre, prune et or du master valide. Pinterest est exclu. Commence par le visuel du jour 1 et garde les formats 4:5 et 9:16 comme sorties principales. Aucun Ads ni budget media sans GO explicite.
```
