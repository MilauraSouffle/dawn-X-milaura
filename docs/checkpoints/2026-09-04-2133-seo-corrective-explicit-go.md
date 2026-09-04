# Correctif SEO legacy : sitemap soumis, pilote PASS, GO collectif requis

Date : 2026-09-04 21:33 CEST. Proprietaire : Codex. Reprise du [checkpoint audit et stocks](2026-09-04-1942-gsc-stock-hematite.md) apres la reponse de Patrice `ok go`.

Statut : SITEMAP GSC SOUMIS ; UNE URL PILOTE RESTAUREE ET SECURISEE ; 58 AUTRES FICHES INCHANGEES, EN ATTENTE D'UN GO EXPLICITE SUR LA MUTATION COLLECTIVE.

## Resultat ferme

Dans Search Console, propriete `sc-domain:milaura.fr`, `https://milaura.fr/sitemap.xml` a ete soumis le 2026-09-04. La boite de dialogue a confirme `Sitemap envoye` et la table affiche maintenant `4 sept. 2026` comme date d'envoi. La derniere lecture reste `22 fevr. 2026`, zero page decouverte : Google n'a pas encore retraite le fichier. Aucun outil Suppressions ni demande d'indexation utilise.

Le rapprochement en lecture seule des 59 anciennes URLs avec clics recents contre les 173 canoniques actifs ne trouve toujours aucun EAN exact commun. Un classement de similarite a servi uniquement a la revue ; aucune redirection n'a ete creee par similarite de titre. Exemples refuses comme equivalence automatique : bracelet baroque versus perles rondes, dimensions 8 mm versus 10 mm, pendentif versus pendule.

## Pilote Shopify execute

Ancienne fiche `Pendule Cristal de Roche` :

- Produit `10358876275035`, variante `52487550239067`, inventory item `54530276688219`.
- Handle et URL conserves : `pendule-cristal-de-roche`, `https://milaura.fr/products/pendule-cristal-de-roche`.
- Stock Shopify `5 -> 0`, quantites `available` et `on_hand` a zero, tous les autres etats a zero.
- Suivi d'inventaire actif, politique `DENY`, puis statut `DRAFT -> ACTIVE`.
- Contenu, images, SEO, tags, prix, SKU, taxe, collections, metafields et tous les autres champs relus inchanges.

Pullback public : HTTP 200, canonique identique, aucun noindex, `Product` en `https://schema.org/OutOfStock`, variante `available=false`, bouton d'ajout desactive et texte `Epuise`. L'URL figure dans le sitemap produits.

Le premier essai s'est arrete avant ecriture sur une comparaison de jeux de champs differents. Le second a applique le stock zero, puis la mutation de statut a ete refusee avant execution car le champ de retour `UserError.code` n'existe pas. La reprise idempotente a ensuite applique ACTIVE ; sa comparaison finale avait encore le meme ecart de projection. Un script de verification independant a relu l'objet complet et confirme l'etat exact ci-dessus. Le produit n'a jamais ete rendu achetable avec l'ancien stock cinq.

Idempotency key stock pilote terminee : `6230bb13-87bf-4cdc-a61b-a3de6ef01086`. Ne pas rejouer `pilot_restore.py`. Le fichier autoritatif de verification est `pilot-verification-final.json`.

## Lot de 58 refuse avant execution

Preflight frais : les 58 autres produits sont toujours DRAFT et sans URL Online Store, avec une variante chacun, suivi d'inventaire actif et politique DENY. Aucun de ces 58 statuts ou stocks n'a ete modifie par ce lot.

La mutation demandee preparait exactement :

- 57 produits avec stock `0`, `available=0`, `on_hand=0`, politique DENY conservee, puis statut ACTIVE ;
- le collier Boho obsidienne `10557516644699` avec stock Shopify `8 -> 4`, quantite physique confirmee dans le Sheet, politique DENY conservee, puis statut ACTIVE ;
- aucune modification de contenu, prix, image, handle, SKU, barcode, metafield, taxe, collection ou theme.

Le garde-fou d'execution a refuse la commande avant son lancement : `ok go` couvre le correctif SEO, mais pas assez explicitement l'activation collective de 58 fiches et la correction de leurs stocks. Aucun contournement tente. Une autorisation explicite avec les nombres ci-dessus est requise.

Effet assume si Patrice confirme : ces 58 pages redeviendront publiques, presentes dans le sitemap, les collections et la recherche Shopify selon leurs associations historiques. Cinquante-sept seront visibles mais epuisees et impossibles a commander ; Boho sera commandable a hauteur de quatre unites. Les anciens contenus et galeries resteront en ligne temporairement. Ce filet preserve leurs URLs pendant la revue des remplacements, mais ne remplace pas les futurs enrichissements ni les 301 pertinentes.

## Verification sitemap apres pilote

Le sitemap produits public contient maintenant 176 URLs : la Home et 175 produits. Il conserve les 173 actifs connus du retrait, ajoute le pilote et contient aussi `boucles-d-oreilles-dorees-en-aigue-marine-naturelle-36-mm`, activation concurrente non realisee dans ce lot. Aucun actif connu manquant. Ne pas attribuer cette seconde activation a Codex ni la modifier.

## Hematite toujours separee

Ce GO n'a pas resolu la question physique : les 12 bracelets cadeau s'ajoutent-ils aux neuf de la fiche canonique, ou 12 est-il le total ? L'objet cadeau reste DRAFT avec stock 12 ; la fiche canonique reste ACTIVE avec stock neuf. Aucun total 21 cree, aucun stock hematite modifie dans ce correctif.

## Preuves et reprise

Racine privee : `/Users/paesano/Documents/Agentic-Ops/milaura-automation/private-workspace/product-generation/data/catalogue-batches/2026-09-04-seo-corrective/`.

Elle contient le preflight complet des 59, les snapshots avant, les requetes/reponses du pilote, ses deux pullbacks, le HTML public, les sitemaps, `candidate-ranking.json`, `public-verification.json` et leurs hashes. `bulk_restore.py` n'a pas ete execute et n'est pas une preuve de mutation.

```text
Reprends depuis docs/checkpoints/2026-09-04-2133-seo-corrective-explicit-go.md. Commence en lecture seule. Le sitemap a ete soumis et le pilote 10358876275035 est ACTIVE, stock zero, DENY, public 200 et OutOfStock. Ne rejoue pas son stock. Les 58 autres sont inchanges car la mutation collective a ete refusee avant execution. Attends un GO explicite autorisant 57 stocks a zero et ACTIVE, plus le Boho 10557516644699 a quatre et ACTIVE, contenus historiques conserves temporairement. Ne cree aucune 301 par similarite. L'hematite 12 versus neuf reste a clarifier separement.
```

Branche `codex/milaura-integration`, depart HEAD `6a07cadfde4592d1379dab7db9378a689318d226`. Checkout deja sale, changements concurrents preserves. Aucun fichier theme, Ads, suppression, redirection, demande d'indexation ou modification des 58 produits. Documentation du lot a versionner de facon ciblee uniquement.
