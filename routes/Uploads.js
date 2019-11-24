const express = require('express')
const uploads = express.Router()
const multer = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/profileimg')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
                      
var upload = multer({ storage: storage })

uploads.post('/single',upload.single('profile'), (req,res) => {
    try {
        console.log(req.file.filename);
        res.send(req.file)
    }catch(err){
        res.send(400)
    }
})

module.exports = uploads