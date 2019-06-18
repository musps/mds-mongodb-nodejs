const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const actionsTodo = require('./actions/todo/index-router')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.API_PORT || 3000

const mongooseOptions = {
  useNewUrlParser: true
}

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, mongooseOptions)
  .then(() => {
    console.log('Database connection established!')
  }, (err) => {
    console.log('Error connecting Database instance due to:', err)
  })

app.use('/action-todo', actionsTodo)
app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
