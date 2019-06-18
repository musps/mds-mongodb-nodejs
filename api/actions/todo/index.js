const TodoModel = require('./index-model')
const { sendError, sendSuccess } = require('./index-utils')

const create = (req, res) => {
  const description = req.body.description || null
  if (!description) {
    sendError(res, '"description" must be set', 400)
    return
  }

  (new TodoModel({ description }))
    .save((err, todo) => {
      if (err) {
        sendError(res, 'Something went wrong')
        return
      }
      sendSuccess(res, todo)
    })
}

const readByUUID = (req, res) => {
  const uuid = req.params.uuid || null
  if (!uuid) {
    sendError(res, '"uuid" must be set', 400)
    return
  }

  TodoModel.findById(uuid, (err, todo) => {
    if (err) {
      sendError(res, 'Todo not found', 404)
      return
    }
    sendSuccess(res, todo)
  })
}

const readAll = (req, res) => {
  TodoModel.find({}, (err, todos) => {
    if (err) {
      sendError(res, 'Something went wrong')
      return
    }
    sendSuccess(res, todos)
  })
}

const updateByUUID = (req, res) => {
  const uuid = req.params.uuid || null
  if (!uuid) {
    sendError(res, '"uuid" must be set', 400)
    return
  }
  const description = req.body.description || null
  if (!description) {
    sendError(res, '"description" must be set',  400)
    return
  }
  const done = req.body.done || null
  if (!done) {
    sendError(res, '"done" must be set', 400)
    return
  }

  TodoModel.findOneAndUpdate(
    { _id: uuid },
    { description, done },
    { useFindAndModify: false },
    (err, task) => {
      if (err || !task) {
        sendError(res, 'Todo not found', 404)
        return
      }

      sendSuccess(res, null, 'Todo successfully updated')
    }
  )
}

const deleteByUUID = (req, res) => {
  const uuid = req.params.uuid || null
  if (!uuid) {
    sendError(res, '"uuid" must be set', 400)
    return
  }

  TodoModel.deleteOne({ _id: uuid }, (err, { n }) => {
    if (err || n === 0) {
      sendError(res, 'Todo not found', 404)
      return
    }

    sendSuccess(res, null, 'Todo successfully deleted')
  })
}

const deleteAll = (req, res) => {
  TodoModel.deleteMany({}, (err) => {
    if (err) {
      sendError(res, 'Something went wrong')
      return
    }

    sendSuccess(res, null, 'Todos successfully deleted')
  })
}

module.exports = {
  create,
  readByUUID,
  readAll,
  updateByUUID,
  deleteByUUID,
  deleteAll
}
