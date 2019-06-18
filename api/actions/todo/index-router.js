const actionsTodo = require('./index')
const router = require('express').Router()

router.get('/readByUUID/:uuid', actionsTodo.readByUUID)
router.get('/readAll', actionsTodo.readAll)
router.put('/create', actionsTodo.create)
router.post('/updateByUUID/:uuid', actionsTodo.updateByUUID)
router.delete('/deleteByUUID/:uuid', actionsTodo.deleteByUUID)
router.delete('/deleteAll', actionsTodo.deleteAll)

module.exports = router
