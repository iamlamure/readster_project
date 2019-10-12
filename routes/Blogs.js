var express = require('express')
var blogs = express.Router()
const Blog =  require("../models/Blog")
const core = require('cors')

blogs.use(core())


//Add Blog
blogs.post('/addblog',(req,res) => {
    const blogData = {
        blog_title : req.body.blog_title,
        blog_article : req.body.blog_article,
        blog_img : req.body.blog_img,
        bookid : req.body.bookid,
        userid : req.body.userid,
    }
    Blog.create(blogData)
    .then(() => {
        res.json('Blog Added!')
    })
    .catch(err => {
        res.send('error: ' +err)
    })
})


module.exports = blogs