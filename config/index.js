const express = require('express')
const bodyParser = require('body-parser')
const CORS = require('cors')({origin: true})
const app = express()
const db = require('./db')

const port = 7777

app.use(CORS)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

module.exports = {
  app,
  port,
  db
}