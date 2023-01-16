const express = require('express')
const router = express.Router()
const UserCtrl = require('../controllers/users')

//creation
router.post('/add', UserCtrl.addUser)

//recuperation de tous les users
router.get('/all', UserCtrl.getUsers)

// //recuperation d'un user par son id
router.get('/:id', UserCtrl.getUserById)

//modification d'un user
router.put('/:id', UserCtrl.editUser)

//suppression d'un user
router.delete('/:id', UserCtrl.deleteUser)

module.exports = router
