# Descriptions

### `PUT` - `/action-todo/create`

* Paramètres
```
```

* Body
```
{
    "description": "<Une description>"
}
```

* Succès : code 200
```
{
    "data": {
        "done": false,
        "_id": "5d0a1aa7e5e69f0079cc83ef",
        "description": "test default description",
        "createdAt": "2019-06-19T11:21:11.860Z",
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
