const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const Routes = require('../routes/route')
const cors = require('cors')

mongoose
  .connect(
    'mongodb+srv://user_database:la07b7vKr6p1Lvwh@cluster0.w6uy9pj.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connexion à MongoDb réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(cors())
app.use(bodyparser.json())
app.use('/', Routes)

module.exports = app
