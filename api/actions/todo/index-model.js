const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  description: String,
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type : Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
