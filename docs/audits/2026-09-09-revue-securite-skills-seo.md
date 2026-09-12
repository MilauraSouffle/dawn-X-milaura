# Revue de sécurité des skills SEO externes

Date : 2026-09-09
Décision : aucun skill externe installé

## Résultat

La recherche confirme qu'il existe des dépôts SEO intéressants, mais aucun n'améliore assez le dispositif MilAura pour justifier son installation aujourd'hui. Le skill local `seo-aeo-geo-audit`, les outils standards Python et les accès déjà configurés couvrent le besoin avec moins de surface d'attaque.

La décision n'est pas une accusation de malware. Elle signifie que la provenance, les dépendances, les accès aux secrets et les commandes d'installation ne passent pas la politique de sécurité MilAura.

## Méthode

- revue en lecture seule de la documentation, des scripts d'installation et des appels système ;
- recherche ciblée de `curl | sh`, `npm`, `npx`, fichiers `.env`, clés API, processus enfants et scripts de cycle de vie ;
- aucun installateur exécuté ;
- aucun secret lu ou fourni ;
- dépôts clonés seulement dans un dossier temporaire ;
- versions inspectées figées par commit.

## Dépôts examinés

| Candidat | Commit inspecté | Constat | Décision |
|---|---|---|---|
| [OpenAI skills](https://github.com/openai/skills) | état public du 2026-09-09 | aucune offre SEO spécialisée dans le catalogue officiel observé | rien à installer |
| [eigent-ai agent-skills, seo-audit](https://github.com/eigent-ai/agent-skills/blob/main/skills/marketing-and-sales/seo-audit/SKILL.md) | `9be8efc71d49b0712653e34542638f89baf860e8` | skill d'instructions simple, lisible et sans exécutable dans son périmètre ; méthode générique déjà couverte localement | sûr en apparence mais redondant |
| [imustitanveer/codex-seo](https://github.com/imustitanveer/codex-seo) | `d08cadbe163afe072c622689ac01f0d03718f07e` | application large, dépendances Node, installation npm et gestion de `.env` | rejeté |
| [seo-skills/seo-audit-skill](https://github.com/seo-skills/seo-audit-skill) | `bbd213fe01402043f2a222c7eda8e10c9ae4c0cd` | demande une installation globale npm et utilise un projet Node/Electron beaucoup plus large qu'un simple skill | rejeté |
| [benskamps/seo-superpower](https://github.com/benskamps/seo-superpower) | `29708dcae1f0f92e783461e7ed6613b2ca95b367` | corpus méthodologique riche, mais installation proposée avec `curl | sh`, outils tirés au runtime via `npx` ou `uvx`, accès à plusieurs clés API et lecture possible de fichiers `.env` | pack complet rejeté |

## Raisons techniques du rejet

1. `npm` et `npx` sont interdits sur les projets de Patrice.
2. Une installation globale ou un téléchargement au runtime empêche de garantir exactement le code exécuté.
3. Plusieurs candidats demandent des clés Search Console, PageSpeed, OpenAI, Anthropic ou Perplexity sans nécessité pour l'audit actuel.
4. Le gain méthodologique est faible face au skill local déjà adapté à MilAura.
5. Les outils externes ne connaissent ni la taxonomie MilAura, ni le contrat de preuve, ni la séparation entre stock, statut et URL.

## Ce qui a été retenu sans installation

Les bonnes idées générales ont été reprises manuellement dans les outils locaux :

- baseline déterministe ;
- audit sitemap, canonicals, titres, metas, H1, JSON-LD et liens internes ;
- contrôle public des redirections ;
- comparaison de snapshots pour détecter les changements de handle et de statut ;
- matrice de collections avec seuils et contrôle de collision.

Ces outils sont écrits avec la bibliothèque standard Python et n'ajoutent aucune dépendance.

## Gate pour une future installation

Un skill externe ne pourra être installé que si :

1. le bénéfice manque réellement au dispositif local ;
2. le dépôt et ses dépendances sont figés par commit et version ;
3. aucun installateur distant, `npm`, `npx`, lifecycle script ou exécutable opaque n'est nécessaire ;
4. les accès réseau, fichiers et secrets sont explicitement listés ;
5. le code est audité avant exécution ;
6. un essai isolé démontre un résultat meilleur sur MilAura.
