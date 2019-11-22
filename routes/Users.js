const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'


//For Upload Profile Img
const multer = require('multer')
const path = require('path')
const Upload = multer({ storage: storage })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads/profileimg')
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
  }
})


//Upload and Update User_img
users.put('/profile/uploadimg/:id',Upload.single('profile_img'),(req,res) => {
  const imgData = {
    user_img : req.file.filename.user_img
  }
  if(!imgData){
    res.status(400)
    res.json({
        error: "Bad Data"
    })
  }else{
    User.update(
      {
        user_img : req.file.filename.user_img
      },
        {where: {id : req.params.id}}
      )
    .then(() => {
      res.send('Profile Img Update !')
      console.log(req.file.filename);
      res.send(req.file);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
  }
})


users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    user_address :req.body.user_address,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

//User Update
users.put('/update/:id',(req,res) => {
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    user_address :req.body.user_address,
  }
  if (!userData){
      res.status(400)
      res.json({
          error: "Bad Data"
      })
  }else{
      User.update(
          {   
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            user_address :req.body.user_address,
          },
          {where: {id : req.params.id}}
      )
      .then(() => {
          res.send("User Update")
      })
      .catch(err => {
        res.send('error: ' + err)
      }) 
  }
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

//Delete User
users.delete('/delete/confirmed/:id',(req,res,next) =>{
  User.destroy({
      where:{
        id: req.params.id
      }
  })
  .then(() => {
      res.send('User Deleted!')
  })
  .catch(err => {
      res.send('error: ' + err)
  })
}),

module.exports = users
