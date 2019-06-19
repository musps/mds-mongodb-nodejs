### Pré-requis
* Avoir docker et docker-compose sur sa machine.

### Liste des commandes

* Les commandes ci-dessous sont basé sur un `MakeFile`
* Toutes ces commandes doivent être utilisé avec le prefix `make`. ex: `make ma-commande`.

| Commande | Description |
| --- | --- |
| docker-node | Démarrer le service nodejs |
| docker-node-db | Démarrer les services nodejs et mongodb |
| install-dependencies | Installer les dépendences du projet |
| run-local | Démarrer le projet avec une base de données local |
| run-remote | Démarrer le projet avec une base de données externe |
| tests-local | Lancer les tests unitaires avec une base de données local |
| tests-remote | Lancer les tests unitaires avec une base de données externe |

### Schéma

![Schéma](https://raw.githubusercontent.com/musps/mds-mongodb-nodejs/master/doc/images/schema.png "Schéma")
