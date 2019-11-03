const express = require('express')
const blogview = express.Router()
const Blogview = require('../models/Blogview')
const cors = require('cors')

blogview.use(cors())

//Get all book
blogview.get('/blogview',(req,res) => {
    Blogview.findAll({
        attributes: ['blogid','blog_title','blog_article','blog_img','blog_date','userblogid','book_id','first_name','book_name']
    })
    .then(blogview => {
        res.json(blogview)
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})

module.exports = blogview