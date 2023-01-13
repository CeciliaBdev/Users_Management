// CRUD //

// on appelle le modele
const User = require('../models/schema')

// 1 . Create avec new schema et save()
exports.createUser = (req, res) => {
  const user = new User(req.body)
  user
    .save()
    .then((user) => res.status(201).json({ user }))
    .catch((error) => {
      res.status(400).json({ error })
    })
}

//2. Read avec find()
exports.getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json({ users })
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
}

//3. Read avec findOne()
exports.getOneUser = (req, res) => {
  User.findOne({
    _id: req.params.id,
  })
    .then((users) => {
      res.status(200).json({ users })
    })
    .catch((error) => {
      res.status(404).json({ error })
    })
}

//4. Update avec updateOne()
exports.updateUser = (req, res) => {
  const user = new User({
    _id: req.params.id,
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
  })
  User.updateOne({ _id: req.params.id }, user)
    .then((user) => {
      res.status(201).json({
        user,
      })
    })
    .catch((error) => {
      res.status(400).json({
        error,
      })
    })
}

//5. Delete avec deleteOne()
exports.deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((user) => {
      res.status(200).json({ user })
    })
    .catch((error) => res.status(401).json({ error }))
}
