var express = require('express')
var blogs = express.Router()
const Blog =  require("../models/Blog")


//Get All Blog
blogs.get("/blogs", (req, res) => {
    Blog.findAll()
    .then(blogs => {
        res.json(blogs)
    })
    .catch(err => {
        res.send("error: "+err)
    })
})

//Add Blog
blogs.post('/blog',(req, res) => {
    const blogData = {
        title: req.body.title,
        article: req.body.article,
        img: req.body.img,
        userid: req.body.userid,
    }
    Blog.findOne({
        where: {
            user: req.body.userid
        }
    })

    if(!blogData){
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else{
        Blog.create(blogData)
        .then(() => {
            res.send("Blog Added")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

module.exports = blogs