const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/users')

//creation
router.post('/add', UserCtrl.createUser)

//recuperation de tous les users
router.get('/all', UserCtrl.getAllUsers)

//recuperation d'un user par son id
router.get('/:id', UserCtrl.getOneUser)

//modification d'un user
router.put('/:id', UserCtrl.updateUser)

//suppression d'un user
router.delete('/:id', UserCtrl.deleteUser)

module.exports = router
