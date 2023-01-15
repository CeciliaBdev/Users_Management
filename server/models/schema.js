const mongoose = require('mongoose')

const user = mongoose.Schema({
   name: String,
    username: String,
    email: String,
    phone: Number
})

module.exports = mongoose.model('Utilisateur', user)
