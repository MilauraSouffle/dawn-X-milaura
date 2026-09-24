# Pinterest Ads Automne : préparation du test ventes

Date : 2026-09-24

Statut : `PRET POUR REVUE, NON ACTIVE, AUCUN BUDGET AUTORISE`

## Objectif commercial

- Cible MilAura : atteindre 100 EUR de chiffre d'affaires par jour à partir du 2026-10-01.
- Cette cible est un objectif de pilotage, pas une prévision garantie.
- Le nombre de commandes requis dépend du panier moyen réel : `commandes/jour = 100 / panier moyen`.
- La vérité commerciale reste Shopify : commandes payées, chiffre d'affaires net, remboursements et marge. Les conversions Pinterest seules ne prouvent pas une vente.

## Point de départ vérifié

- Campagne Pinterest `626759817213` mise en pause le 2026-09-24.
- Au moment de la pause : 59,67 EUR dépensés, 26 074 impressions, 373 clics sortants et CPC sortant de 0,16 EUR.
- Dernière réconciliation complète du 2026-09-23 : 5 ajouts panier, 3 débuts de paiement, 0 achat Pinterest et aucune commande Shopify attribuable.
- Conclusion : le trafic est peu coûteux, mais la preuve de vente manque. Le prochain test doit optimiser et décider sur le bas de tunnel, pas sur le clic.

## Structure préparée

Nom de campagne : `FR | PIN | SALES | AUTOMNE | 2026-10`

| Niveau | Réglage préparé | Justification |
|---|---|---|
| Campagne | Ventes, création personnalisée | Pinterest indique que l'objectif Ventes peut optimiser vers des conversions. |
| Statut | En pause à la création | Aucun départ sans GO Ads distinct. |
| Budget | 10 EUR/jour fixe, 7 jours, plafond de test 70 EUR | Le budget fixe évite la flexibilité quotidienne du budget Performance+ et garde un test borné. |
| Groupe | France, large, tous appareils, un seul groupe | Le budget est trop faible pour être fragmenté entre plusieurs audiences. |
| Optimisation initiale | InitiateCheckout si Purchase n'est pas confirmé exploitable dans Events Manager | Le pixel n'a encore enregistré aucun achat vérifié. |
| Passage à Purchase | Après validation d'un achat réel dédupliqué et réconcilié dans Shopify | Evite d'optimiser un signal vide ou défaillant. |
| Enchère | Performance+ sans CPA cible au premier test | Aucun CPA d'achat fiable n'existe encore. |
| Destination | `/collections/selection-automne` après release des corrections conversion | Correspondance directe entre message et landing. |

Pinterest distingue les budgets quotidiens fixes des budgets Performance+ quotidiens, qui peuvent dépasser le montant journalier saisi tout en restant moyennés sur la semaine : [documentation budget Pinterest](https://help.pinterest.com/en/business/article/set-up-campaign-budgets). L'objectif Ventes et ses événements d'optimisation sont décrits dans la [documentation des objectifs Pinterest](https://help.pinterest.com/en/business/article/campaign-objective).

## Offre et créations

Une seule offre est retenue pour le premier test : la Sélection d'automne. Quatre créations distinctes sont à préparer avant activation, sans modifier simultanément l'audience ou l'objectif :

1. Hero Automne vertical 2:3, bijoux clairement visibles, accroche `L'automne vous va si bien`.
2. Gros plan produit grenat, prix et bénéfice produit concrets.
3. Gros plan produit cornaline, prix et bénéfice produit concrets.
4. Composition sélection, CTA `Découvrir la sélection`.

Chaque création doit montrer le produit comme sujet, porter MilAura lisiblement et utiliser un CTA spécifique. Pinterest recommande le format vertical 2:3, une marque visible, le produit au premier plan et un CTA clair : [bonnes pratiques créatives Pinterest](https://business.pinterest.com/creative-best-practices/).

Le bracelet Iris ne devient pas l'offre payante centrale tant que son stock réel, son coût rendu, sa marge contributive et son réassort ne sont pas documentés.

## Tracking préparé

URL commune :

```text
https://milaura.fr/collections/selection-automne?utm_source=pinterest&utm_medium=paid_social&utm_campaign=fr_sales_automne_2026q4&utm_content=<creative>
```

Valeurs `utm_content` prévues :

- `hero_automne_v1`
- `grenat_product_v1`
- `cornaline_product_v1`
- `selection_grid_v1`

Avant activation :

- vérifier PageVisit, AddToCart, InitiateCheckout et Purchase dans Events Manager ;
- vérifier que Purchase remonte une valeur et une devise exactes ;
- vérifier la déduplication Tag / Conversions API si les deux sources sont actives ;
- effectuer une réconciliation Pinterest / Shopify sur une commande réelle, sans créer de commande artificielle non autorisée.

Pinterest recommande l'envoi des événements serveur en temps réel, la déduplication par `event_id` et la validation dans Events Manager : [Conversions API Pinterest](https://help.pinterest.com/en/business/article/the-pinterest-api-for-conversions).

## Règles de décision

- Stop créatif à 25 EUR sans ajout panier.
- Stop campagne à 40 EUR sans début de paiement.
- Stop campagne à 70 EUR sans achat Shopify réconcilié.
- Ne pas augmenter le budget après un seul achat.
- Autoriser une hausse de 20 % maximum tous les trois jours seulement après 3 achats réels et un coût d'acquisition compatible avec la marge.
- Ne pas conclure sur le ROAS tant que le coût produit, la remise, la livraison, les frais et les remboursements ne sont pas intégrés.

## Gates avant activation

1. `GO VISUEL PATRICE` sur les corrections Automne en preview.
2. `GO LIVE CORRECTIONS AUTOMNE`, puis push ciblé et QA publique.
3. Stock, panier moyen et marge contributive documentés pour l'offre.
4. Événement Purchase et déduplication validés dans Events Manager.
5. Quatre créations Ads validées.
6. GO distinct exact : `GO ACTIVATION ADS PINTEREST 10 EUR/JOUR`.

Tant que ces six gates ne sont pas franchies, aucune campagne n'est créée active et aucun budget ne peut être dépensé.
