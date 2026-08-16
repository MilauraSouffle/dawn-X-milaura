# Handoff master de mi-parcours MilAura

Date : 2026-08-16 07:51 CEST

## Objet

Clore la session master chargee de l'audit global et transmettre un contexte propre a une nouvelle session master. Aucun fichier theme, produit, stock, prix, reglage Shopify ou contenu live n'a ete modifie pendant cette cloture.

## Conclusion de l'audit

La refonte visible est proche de la finition. Les fondations live couvrent le Hero, la navigation, le mobile, le catalogue V1, les hubs, la section 3, la selection saisonniere, les occasions, la nouvelle experience PDP et les recommandations.

Le plan directeur n'est pas termine. Les lots structurants encore ouverts sont :

- cookies ;
- compte et Cercle ;
- persistance du diagnostic ;
- emails, notifications, relances et inscription ;
- inventaire physique ;
- Atelier des emotions et Sur mesure ;
- campagne de rentree ou septembre ;
- pages enfants Naissance et Mariage ;
- Journal ;
- SEO, DataForSEO et netlinking ;
- GA4, GSC et Merchant Center ;
- Pinterest organique, catalogue et paid ;
- performance et accessibilite finales.

## Arbitrages de Patrice

### Sujets clos ou refuses comme anomalies

1. LFG : Patrice a tout verifie et ferme ce sujet. Il sort du backlog actif et ne doit pas etre recree depuis les anciens checkpoints.
2. PDP : leur longueur n'est pas consideree comme un probleme. Une session specialisee fera les recherches avant toute modification de structure.
3. Quiz : les formulations actuelles autour de l'apaisement, de la protection et de l'energie sont validees. Le chantier porte sur le polish et la page resultat, pas sur une reecriture corrective.
4. Preuve sociale : Judge.me lorsqu'un avis du site existe, fallback multi-canal approuve sinon.

### Probleme fonctionnel confirme

Le diagnostic n'est pas sauvegarde dans une source cliente durable. Il repose sur le navigateur, un cookie et des attributs panier. Le chantier `C1 - Le Cercle MilAura` doit assurer la persistance entre appareils et la restitution dans `Mon Ecrin`.

### Priorites

- Bandeau cookies : urgence immediate.
- Emails et inscription : criticite 10/10.
- Inventaire : chantier parallele mene par Patrice, sans blocage du polish UI.
- Atelier des emotions : session dediee lancee.
- Pinterest : fondations urgentes maintenant, paid plus tard.
- DataForSEO : recherche ciblee avant les pages si necessaire, audit global final apres stabilisation.

## Decision UX homepage

Pour conserver Nouveautes, Meilleures ventes et Promotions sans empiler trois rails, la piste recommandee est une section unique apres `Pierre du moment` :

- trois choix accessibles ;
- un seul rail visible ;
- CTA et destination adaptes au choix ;
- Promotions masquee si vide ;
- destinations publiques distinctes conservees ;
- validation visuelle avant live.

## Cap commercial et creation

- Objectif directeur : site capable d'atteindre 100 000 EUR de chiffre d'affaires ; horizon a preciser.
- Sources de verite : charte et DA MilAura.
- References externes : Tiffany & Co. et Van Cleef & Arpels pour le niveau d'execution, la sobriete et la photographie joailliere, sans copie.
- Atelier des emotions : Little Words Project pour la logique fonctionnelle ; Van Cleef & Arpels pour le niveau visuel ; MilAura pour l'identite.

## Etat Git et parallelisation

Avant les ecritures documentaires :

- branche d'integration `codex/milaura-integration` ;
- HEAD `26f343ab142ca47ef2ebf80f63c688b50e41adad` ;
- branche alignee avec `origin/codex/milaura-integration` ;
- depot propre ;
- worktree actif `/Users/paesano/Documents/MilAura website/_worktrees/ruban-repair-20260816` ;
- branche `codex/milaura-ruban-repair-20260816` propre et alignee ;
- session Ruban proprietaire exclusive de `milaura-recommendation-*` et de ses detourages autorises.

La session Atelier des emotions est lancee par Patrice mais n'apparait pas encore dans le registre au moment de ce checkpoint. Elle doit se declarer avant toute edition theme ou Shopify.

## Documents mis a jour

- `docs/codex-handoff.md` ;
- `docs/project-state.md` ;
- `docs/superpowers/plans/2026-08-05-milaura-renouveau-plan-execution.md` ;
- ce checkpoint ;
- note Obsidian MilAura correspondante.

## Aucun deploiement

- aucun push Shopify ;
- aucun changement live ;
- aucune mutation Admin ;
- aucune creation ou modification de produit ;
- aucun DataForSEO consomme ;
- aucun email envoye.

## Reprise

La nouvelle session master commence par les lectures indiquees dans `docs/codex-handoff.md`, controle le retour de la session Ruban, puis orchestre cookies, emails, Cercle, rail commercial, PDP specialisee, inventaire, Atelier et Pinterest sans chevauchement de fichiers ni de theme.
