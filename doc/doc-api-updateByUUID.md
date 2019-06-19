# Descriptions

### `POST` - `/action-todo//updateByUUID/:uuid`

* Paramètres
```
uuid = uuid de l'item créé.
```

* Body
```
{
    "description": "<Une description>",
    "state": true
}
```

* Succès : code 200
```
{
    "data": null,
    "message": "Todo successfully updated"
}
```

* Error : code 500
```
{
    "message": "<Message d'erreur spécifique>"
}
```
