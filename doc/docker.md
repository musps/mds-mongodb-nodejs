# Configuration de MongoDB avec un replica set (1 Master <> 2 Slaves)

## Lancer le fichier docker-compose.yml

```
docker-compose up -d
docker exec -it mongo1 mongo --port 30001

rs.initiate()

```

## Démmarer l'api
```
docker exec -it api npm run dev
```

config = {
     "_id" : "my-mongo-set",
      "members" : [
          {
              "_id" : 0,
              "host" : "mongo1:30001"
          },
          {
              "_id" : 1,
              "host" : "mongo2:30002"
          },
          {
              "_id" : 2,
              "host" : "mongo3:30003"
          }
      ]
}
