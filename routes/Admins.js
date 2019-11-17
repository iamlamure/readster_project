const express = require('express')
const admins = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Admin = require('../models/Admin')
admins.use(cors())

process.env.SECRET_KEY = 'secret'

admins.post('/register', (req, res) => {
  const today = new Date()
  const adminData = {
    admin_id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  Admin.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(admin => {
      if (!admin) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          adminData.password = hash
          Admin.create(adminData)
            .then(admin => {
              res.json({ status: admin.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'Admin already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

admins.post('/login', (req, res) => {
  Admin.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(admin => {
      if (admin) {
        if (bcrypt.compareSync(req.body.password, admin.password)) {
          let token = jwt.sign(admin.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'Admin does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

admins.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Admin.findOne({
    where: {
      admin_id: decoded.admin_id
    }
  })
    .then(admin => {
      if (admin) {
        res.json(admin)
      } else {
        res.send('Admin does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = admins
