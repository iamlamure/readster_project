const express = require('express')
const blogs = express.Router()
const Blog =  require("../models/Blog")
const cors = require('cors')
const Sequelize = require('sequelize')

blogs.use(cors())

//Upload
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/blog/banner')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })



//Add Blog
blogs.post('/addblog',upload.single('blog_img'),(req,res) => {
    const blogData = {
        blog_title : req.body.blog_title,
        blog_article : req.body.blog_article,
        blog_img : req.file.filename,
        userblogid : req.body.userblogid,
        book_id: req.body.book_id,
        status: "เพิ่มบทความเรียบร้อยแล้ว"
    }
    Blog.create(blogData)
    .then(() => {
        res.json('Blog Added!')
    })
    .catch(err => {
        res.send('error: ' +err)
    })
})

//Get All blog 
blogs.get('/blogs',(req,res) => {
    const Op = Sequelize.Op;
    Blog.findAll({
        where :{
            status : 'เพิ่มบทความเรียบร้อยแล้ว' ,
            [Op.not]: [{status : 'ระงับบทความ'}]
        }
    })
    .then(blogs => {
        const data = blogs.map((value)=>{
            value.blog_img = "http://localhost:5000/blog/banner/"+value.blog_img
            return value;
        })
        res.json(data)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

//Delete Blog
blogs.delete('/delete/:blogid',(req,res,next) =>{
    Blog.destroy({
        where:{
            blogid: req.params.blogid
        }
    })
    .then(() => {
        res.send('Blog Deleted!')
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}),

//Update Blog
blogs.put('/update/:blogid',(req,res) => {
    const blogData = {
        blog_title : req.body.blog_title,
        blog_article : req.body.blog_article,
        blog_img : req.body.blog_img,
        userblogid : req.body.userblogid,
        book_id: req.body.book_id,
        status: req.body.status
    }
    if (!blogData){
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else{
        Blog.update(
            {   
                blog_title : req.body.blog_title,
                blog_article : req.body.blog_article,
                blog_img : req.body.blog_img,
                userblogid : req.body.userblogid,
                book_id: req.body.book_id,
                status: req.body.status
            },
            {where: {blogid : req.params.blogid}}
        )
        .then(() => {
            res.send("Blog Update")
        })
        .error(err => res.send(err))
    }
})


//Read blog to Read.vue
blogs.get('/read/:blogid',(req,res) => {
    const Op = Sequelize.Op;
    Blog.findOne({
        where: {
            blogid : req.params.blogid,
            status : 'เพิ่มบทความเรียบร้อยแล้ว' ,
            [Op.not]: [{status : 'ระงับบทความ'}]
        }
    })
    .then(blogs => {
        res.json(blogs)
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})


module.exports = blogs