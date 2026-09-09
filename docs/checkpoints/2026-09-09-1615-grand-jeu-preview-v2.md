# Grand Jeu MilAura - preview V2

Date : 2026-09-09 16:15 CEST

## Decision creatif

- Master 16:9 V3 nacre valide visuellement par Patrice.
- Deux declinaisons finales produites : Meta feed 1080 x 1350 et Story/Reel 1080 x 1920.
- Message creatif verrouille : `GRAND JEU MILAURA`, `10 JOURS / 10 GAGNANTS`, `300 EUR DE CADEAUX A GAGNER`, dates du 9 au 18 septembre et mention `LES 10 LOTS A GAGNER`.
- Pinterest reste exclu de cette campagne.

## Landing simplifiee

- Le bento devient le hero de la page, avec une source desktop 1920 x 1080 et une source mobile 1080 x 1350.
- Deux onglets accessibles : conditions de participation et reglement du jeu.
- La phrase restrictive sous les CTA a ete supprimee. Le titre indique positivement que l'on peut participer sur Instagram, Facebook, ou les deux.
- Dix cartes cadeaux cliquables conservees sous les onglets.
- Ancien cadeau interactif, compte a rebours et logique de revelation supprimes du code actif.
- Footer : `GRAND JEU CONCOURS MILAURA DU 09 AU 18 SEPTEMBRE`, CTA `Je participe`.

## Mecanique synchronisee

- Jeu du 2026-09-09 a 20:00 au 2026-09-18 a 23:59, heure de Paris.
- Tirage le 2026-09-19 a 12:00.
- Cinq gagnants Instagram et cinq gagnants Facebook.
- Une participation est comptabilisee par compte et par reseau ; les commentaires multiples sur le meme reseau ne creent pas de chances supplementaires.
- Une seule recompense maximum par personne.
- Partage facultatif, sans chance supplementaire.
- Alerte anti-arnaque renforcee.
- Code individuel de 10 % demandable par message prive pendant les sept jours suivant l'annonce des resultats, selon le reglement.
- Valeur totale affichee : 300 EUR. La bague du jour 2 est valorisee a 11 EUR ; son prix public devra etre aligne de 0,10 EUR avant lancement ou cette valorisation devra etre justifiee.
- Carte cadeau du jour 10 : 30 EUR, sans livraison offerte en supplement.

## Shopify

- Theme de preview uniquement : `201111306587`, `MilAura Concours 10 jours Preview 2026-09-08`.
- URL verifiee : `https://milaura.fr/pages/jeu-concours-10-jours-10-cadeaux?preview_theme_id=201111306587`.
- Sept fichiers pousses de facon ciblee : deux assets WebP, section, snippet du reglement, template JSON, section footer et configuration footer.
- Pullback : six fichiers identiques bit pour bit ; le template JSON ne differe que par le commentaire standard auto-genere par Shopify.
- Theme live `190430282075` non modifie pendant cette reprise.

## Verification

- `jq empty templates/page.milaura-concours-10-jours.json` : PASS.
- `python3 tools/check_copywriting.py` : PASS, 338 fichiers controles.
- `git diff --check` : PASS.
- `shopify theme check` : exit 0, aucun nouvel echec ; 16 avertissements historiques hors perimetre.
- QA navigateur desktop : hero, conditions, dix cartes et footer presents.
- QA mobile 390 x 844 : hero 4:5, onglets, grille deux colonnes et footer conformes.
- Onglet `Reglement du jeu` teste : les 14 articles s'affichent.

## Gates avant publication et depense

1. GO visuel de Patrice sur la landing de preview et les deux declinaisons sociales.
2. Aligner le prix public de la bague du jour 2 de 10,90 EUR a 11 EUR, ou valider formellement la base de valorisation.
3. Valider puis publier les textes Instagram et Facebook et conserver les deux permaliens.
4. Injecter les permaliens dans la page avant le push live.
5. Tester le parcours reel de la carte cadeau et preparer le processus de remise des codes individuels de 10 %.
6. Confirmer le cout de revient et le budget media avant activation Meta.
7. Autorisation explicite separee requise pour pousser la V2 sur le theme live ou engager une depense.
