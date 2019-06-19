const dotenv = require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const actionsTodo = require('./actions/todo/index-router')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongooseOptions = {
  useNewUrlParser: true
}

const PORT = 3000
const MONGO_CONNECTION_STRING = (process.env.API_ENV === 'prod'
  ? process.env.PROD_MONGO_CONNECTION_STRING
  : process.env.DEV_MONGO_CONNECTION_STRING)

const startServer = () => {
  return new Promise(async (resolve, reject) => {
    await mongoose
      .connect(MONGO_CONNECTION_STRING, mongooseOptions)
      .then(() => console.log('Connected to database'))
      .catch(err => {
        console.log('Error connecting Database instance due to:', err)
        process.exit(0)
      })

    app.use('/action-todo', actionsTodo)
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
    resolve({
      app,
      mongoose
    })
  })
}

module.exports = startServer()
