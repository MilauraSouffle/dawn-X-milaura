# Agent editorial du Journal MilAura

Date : 2026-09-07. Proposition de fonctionnement, aucune publication recurrente configuree. Le polish de la liste du Journal est traite dans un worktree distinct.

## Decision proposee

Un role editorial dans Hermes MilAura, declenche par une tache planifiee, produit deux brouillons par semaine. Le role choisit et documente les sujets ; le planificateur ne fait que lancer ce travail. Commencer par huit contenus ou mises a jour sur quatre semaines, sans quota de publication si la proposition n'apporte rien. La cadence de publication suit les validations de Patrice. Aucun besoin de creer un nouveau conteneur ou de nouveaux acces tant que les capacites existantes ne sont pas auditees.

La production automatique de brouillons et la publication automatique sont deux permissions distinctes. Aucune activation Hermes, cron de publication ou extension d'acces n'est effectuee dans ce lot. Le suivi SEO est deja programme separement dans Codex : `mesure-seo-et-visibilit-ia-milaura`, lundi 10 h, bilans 2026-09-21 et 2026-10-05.

## Entrees et selection des sujets

1. Search Console : requetes qui affichent deja MilAura, page associee, impressions/clics/CTR/position, pays et appareil. Une impression MilAura ne mesure pas le volume total de recherches Google.
2. Catalogue actuel : pierre, dimensions, montage, photos existantes, disponibilite et destination commerciale. Verifier les informations au moment de preparer et publier. Conserver une alternative utile si un produit sort du catalogue.
3. Questions clients et choix de Karine : utiliser des questions anonymisees et des propos effectivement recueillis. Ne pas inventer entretien, experience personnelle ou citation.
4. Recherche du marche : Keyword Planner ou fournisseur de donnees autorise pour les volumes estimes, Google Trends pour la saisonnalite relative, resultats de recherche pour comprendre l'intention. Date, France et source obligatoires ; une suggestion n'est pas un volume.
5. Sources primaires pour les faits : fournisseur pour le produit, GIA pour les correspondances et caracteristiques gemmologiques pertinentes. Les connaissances du modele servent a structurer, jamais a fabriquer une preuve ou une actualite.

Choisir une question precise qui aide a choisir, porter, offrir ou entretenir. Comparer les URL existantes avant creation : enrichir une page qui repond deja a la question. Un groupe d'intentions coherent correspond a une page, pas a des variantes d'articles interchangeables.

## Premiere file de sujets

| Priorite | Sujet de travail | Signal disponible | Destination et decision |
| --- | --- | --- | --- |
| 1 | Bague en argent et aigue-marine : dimensions, reglage et cadeau de mars | GSC : `bague aigue marine argent`, 102 impressions, 1 clic, position 15,8 sur 2026-08-09 a 2026-09-05 | Fiche/collection deja enrichies ; evaluer leur progression avant article dedie, eviter doublon |
| 2 | Bracelet labradorite : choisir forme, taille et montage | GSC : `labradorite bracelet`, 215 impressions, 1 clic, position 11,1 sur meme periode | Attendre fiche catalogue finale ; verifier les tailles, ne pas reprendre 16-18 cm comme tour de poignet sans preuve |
| 3 | Collier obsidienne : quelle longueur et quel metal ? | GSC : `collier obsidienne noire`, 134 impressions, 4 clics, position 10,9 | Reponses deja dans la fiche publiee ; sujet d'enrichissement ou comparatif seulement si plusieurs choix reels |
| 4 | Pendule cristal de roche : forme et premiers gestes | GSC : `pendule cristal de roche`, 197 impressions, 2 clics, position 9,2 | Attendre offre catalogue finalisee ; expliquer l'usage, sans pretendre verifier des faits par oscillation |
| 5 | Comment mesurer son poignet avant de choisir un bracelet ? | Hypothese utile, volume non mesure | Guide transversal avec demonstration reelle et dimensions confirmees ; lien vers bracelets |
| 6 | Quel bijou offrir quand on ne connait pas la taille ? | Hypothese utile, volume non mesure | Completer le guide naissance existant ou comparer formats disponibles ; ne pas creer avant verification intention |

Cette liste ne pretend pas contenir les mots les plus recherches en France. Elle utilise les premiers signaux accessibles de MilAura ; le volume du marche reste a collecter.

## Contrat de sortie de chaque brouillon

- Question, lecteur, intention, requetes sources et decision creation/mise a jour.
- URL cible, title, meta description, H1 simple, extrait et corps HTML sans H1 duplique.
- Reponse directe, details concrets, exemple MilAura, liens contextuels utiles et photos existantes selectionnees.
- Registre des faits et sources datees ; informations inconnues explicitement exclues.
- Comparaison avec les contenus existants, correction orthographique, verification des liens et donnees produit.
- Validation editoriale et visuelle de Patrice avant publication selon le guide canonique ; ne pas signer Karine comme autrice d'un texte qu'elle n'a pas relu.

Apres publication autorisee : conserver ID Shopify, URL, date, version et champs modifies ; verifier HTTP200, canonique, corps rendu et maillage. Actualiser les articles utiles plutot que changer artificiellement leur date.

## Mesure

Suivre les articles par cohorte de date de publication : indexation, impressions/clics hors marque, sessions engagees, passages vers produits et achats observables. Bilans a J+14 et J+28 pour les premieres tendances, plus longs si le volume est faible. Mesurer les citations IA dans le panel reproductible, pas avec des prompts qui imposent MilAura. La cadence augmente seulement si la qualite, la validation et les premieres donnees justifient cette capacite.

Sources Google relues le 2026-09-07 :
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/essentials/spam-policies

Google met l'accent sur l'utilite et l'apport propre du contenu, pas sur un quota quotidien d'articles. La longue traine sert a repondre a des besoins precis, pas a multiplier mecaniquement les variantes de mots-cles.
