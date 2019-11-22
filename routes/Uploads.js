const express = require('express')
const uploads = express.Router()
//const users = express.Router()
const multer = require('multer')
const path = require('path');
const cors = require('cors')
const User = require('../models/User')
var Upload = multer({ storage: storage })
//const Upload = multer({ dest: './uploads' })

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profileimg')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

uploads.use(cors())

uploads.post('/profile/uploadimg',Upload.single('profile_img'),(req,res) => {
    try {
        console.log(req.file.filename);
        res.send(req.file);
      }catch(err) {
        res.send(400);
      }
})

module.exports = uploads
