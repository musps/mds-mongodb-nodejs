const dotenv = require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const actionsTodo = require('./actions/todo/index-router')
const { sendError } = require('./actions/todo/index-utils')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const mongooseOptions = {
  useNewUrlParser: true,
  autoReconnect: true
}

let dbConnected = false
const API_PORT = parseInt(process.env.API_PORT || 3000, 10)
const MONGO_CONNECTION_STRING = (process.env.API_ENV === 'prod'
  ? process.env.PROD_MONGO_CONNECTION_STRING
  : process.env.DEV_MONGO_CONNECTION_STRING)

if (!MONGO_CONNECTION_STRING) {
  process.exit(0)
}

const startServer = () => {
  return new Promise(async (resolve, reject) => {
    await mongoose
      .connect(MONGO_CONNECTION_STRING, mongooseOptions)
      .then(() => console.log('connected') || (dbConnected = true))
      .catch((e) => console.log('not connected', e) || (dbConnected = false))

    /**
     * START: Healthcheck bdd
     */
    mongoose.connection.on('connected', () => console.log('connected') || (dbConnected = true))
    mongoose.connection.on('error', () => console.log('error') || (dbConnected = false))
    mongoose.connection.on('disconnected', () => console.log('disconnected') || (dbConnected = false))
    // If the bdd is not connected we throw an error.
    app.use(function (req, res, next) {
      if (!dbConnected) {
         sendError(res, 'Something went wrong', 503)
        return
      }
      next();
    })
    /**
     * STOP: Healthcheck bdd
     */

    app.use('/action-todo', actionsTodo)
    app.listen(API_PORT, () => console.log(`Server running at http://localhost:${API_PORT}`))
    resolve({
      app,
      mongoose
    })
  })
}

module.exports = startServer()
