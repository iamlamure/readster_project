const express = require('express')
const uploads = express.Router()
const multer = require('multer')
const Upload = multer()

uploads.post('/profile',upload)

module.exports = uploads