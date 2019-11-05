const express = require('express')
const blogview = express.Router()
const Blogview = require('../models/Blogview')
const cors = require('cors')

blogview.use(cors())

//Get all view 
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

//ฺGet Blog By ID
blogview.get('/read/:blogid',(req,res) => {
    Blogview.findOne({
        attributes: ['blogid','blog_title','blog_article','blog_img','blog_date','userblogid','book_id','first_name','book_name'],
        where: {
            blogid : req.params.blogid
        }
    })
    .then(blogview => {
        res.json(blogview)
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})

module.exports = blogview