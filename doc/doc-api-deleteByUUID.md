# Descriptions

### `DELETE` - `/action-todo/deleteByUUID/:uuid`

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
    "data": null,
    "message": "Todo successfully deleted"
}
```

* Error : code 404
```
{
    "message": "Todo not found"
}
```
