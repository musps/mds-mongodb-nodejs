# MDS-MONGODB-NODEJS

* Un projet d'api avec MongoDB et ExpressJS qui contient des tests tests unitaires et une base de données locale et distante.

## Pré-requis

* Avoir docker et docker-compose sur sa machine.

## Liste des commandes

* Les commandes ci-dessous sont basé sur un `MakeFile`
* Toutes ces commandes doivent être utilisé avec le prefix `make`. ex: `make ma-commande`.

| Commande | Description |
| --- | --- |
| docker-node | Démarrer le service nodejs |
| docker-db | Démarrer les services mongodb |
| install-dependencies | Installer les dépendences du projet |
| run-local | Démarrer le projet avec une base de données local |
| run-remote | Démarrer le projet avec une base de données externe |
| tests-local | Lancer les tests unitaires avec une base de données local |
| tests-remote | Lancer les tests unitaires avec une base de données externe |
| init-configuration | Initialise le fichier de configuration `.env`

## Liste des routes de l'api

| méthode | chemin | description |
| --- | --- | --- |
| GET | /action-todo/readAll | [description](https://github.com/musps/mds-mongodb-nodejs/blob/master/doc/doc-api-readAll.md) |
| GET | /action-todo/readByUUID/:uuid |[description](https://github.com/musps/mds-mongodb-nodejs/blob/master/doc/doc-api-readByUUID.md) |
| PUT | /action-todo/create | [description](https://github.com/musps/mds-mongodb-nodejs/blob/master/doc/doc-api-create.md) |
| POST | /action-todo//updateByUUID/:uuid | [description](https://github.com/musps/mds-mongodb-nodejs/blob/master/doc/doc-api-updateByUUID.md) |
| DELETE | /action-todo/deleteByUUID/:uuid | [description](https://github.com/musps/mds-mongodb-nodejs/blob/master/doc/doc-api-deleteByUUID.md) |
| DELETE | /action-todo/deleteAll | [description](https://github.com/musps/mds-mongodb-nodejs/blob/master/doc/doc-api-deleteAll.md) |

## Schéma

Il s'agit d'un projet tournant dans un environnement docker qui contient un service NodeJs et 3 services MongoDB.

* Il y a un service NodeJs qui va contenir l'api.
* Il y a 3 services MongoDB qui vont être défini en mode replica set (1 Master 2 slaves)
* Il y a une base de données externe relié au cloud.

![Schéma](https://raw.githubusercontent.com/musps/mds-mongodb-nodejs/master/doc/images/schema.png "Schéma")

## Installation
* Récupérer ce dépôt en local.
* Executer la commande `make docker-node`
* Executer la commande `make install-dependencies`
* Executer la commande `make init-configuration`

## Configuration de la base de données

### Pour un accès local
* Executer la commande `make docker-db`

Cette commande va démarrer les services MongoDB en local.

## Pour un accès distant (MongoDB Atlas)

### Étape 1 : Création du cluster
* Se créer un compte [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
* Créer un nouveau cluster **Create New Cluster**
* Sélectionner la région **Europe / Frankfurt (eu-central-1)**
* Sélectionner l'offre gratuite **M0 Sandbox**
* Puis valider **Create Cluster**
* *(Une attente de 2/3 minutes et nécessaire pour la création du cluster)*

### Étape 2 : Création d'un accès au cluster
* Cliquer sur le menu de gauche **Database Access**
* Sur la nouvelle page, cliquer sur **+ ADD NEW USER**
* Saisir nom d'utilisateur + mot de passe et sélectionner les privilèges **Read and write to any database**
* Puis valider **Add User**

### Étape 3 : Configuration des règles de sécurité
* Cliquer sur le menu de gauche **Network Access**
* Sur la nouvelle page, cliquer sur **+ ADD IP ADDRESS**
  * Valeurs des champs
    * Whitelist Entry: 0.0.0.0/0
    * Comment:
  * Puis valider **Confirm**

### Étape 4 : Obtention de la chaîne de connexion au cluster
* Cliquer sur le menu de gauche **Clusters**
* Sur la nouvelle page, cliquer sur **CONNECT**
* Dans la popup, cliquer sur **Connect Your Application**
* Dans le champ `Connection String Only`, copier la chaîne de caractère.

### Étape 5 : Mise en place
* Depuis le fichier `.env` à la racine du projet
* Renseigner la valeur de la variable d'environnement `PROD_MONGO_CONNECTION_STRING` par celle **de l'étape 4**
* Renseigner le mot de passe du compte crée précédemment en replacement la valeur `<password>`  par celle du mot de passe **de l'étape 2**
* FIN !

## Démarrage

* Sur la base de données local
  `make run-locale`

* Sur la base de données distante
  `make run-remote`

## Tests

* Sur la base de données local
  `make tests-locale`

* Sur la base de données distante
  `make tests-remote`
