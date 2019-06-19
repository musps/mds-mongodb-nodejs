# Descriptions

### `GET` - `/action-todo/readByUUID/:uuid`

* Paramètres
```
uuid = uuid de l'item créé.
```

* Body
```
```

* Succès : code 200
```
{
    "data": {
        "done": true,
        "_id": "5d08bc58c6cc210da9e71378",
        "description": "new descriptionnnn",
        "createdAt": "2019-06-18T10:26:32.755Z",
        "__v": 0
    },
    "message": null
}
```

* Error : code 500
```
{
    "message": "<Message d'erreur spécifique>"
}
```
