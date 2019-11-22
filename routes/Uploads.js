const express = require('express')
const uploads = express.Router()
const multer = require('multer')
const path = require('path');
//const cors = require('cors')
//const Upload = multer({ dest: './uploads' })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profileimg')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + path.extname(file.originalname))
    }
})
var Upload = multer({ storage: storage })
//const User = require('../models/User')
//uploads.use(cors())

uploads.post('/profile',Upload.single('profile_img'),(req,res) => {
    try {
        console.log(req.file.filename);
        res.send(req.file);
      }catch(err) {
        res.send(400);
      }
})

module.exports = uploads
