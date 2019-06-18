# Configuration de MongoDB avec un replica set (1 Master <> 2 Slaves)

## Lancer le fichier docker-compose.yml

```
docker-compose up -d
docker exec -it mongo1 mongo --port 30001

rs.initiate()
rs.add("mongo2:30002")
rs.add("mongo3:30003")

```

## Configuration bindage ip

```
# Ajouter ces lignes à votre fichier host.

127.0.0.1       mongo1
127.0.0.1       mongo2
127.0.0.1       mongo3
```
