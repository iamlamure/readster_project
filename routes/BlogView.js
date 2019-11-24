const express = require('express')
const blogview = express.Router()
const Blogview = require('../models/Blogview')
const cors = require('cors')
const Sequelize = require('sequelize')
blogview.use(cors())

//Get all view 
blogview.get('/all',(req,res) => {
    const Op = Sequelize.Op;
    Blogview.findAll({
        attributes: ['blogid','blog_title','blog_article','blog_img','blog_date','userblogid','book_id','first_name','book_name','status'],
        where : {
            status : 'เพิ่มบทความเรียบร้อยแล้ว' ,
            [Op.not]: [{status : 'ระงับบทความ'}]
        }
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

//ฺGet All Blog By ID
blogview.get('/userblog/:id',(req,res) => {
    Blogview.findAll({
        attributes: ['blogid','blog_title','blog_article','blog_img','blog_date','userblogid','book_id','first_name','book_name','status'],
        where: {
            userblogid : req.params.id
        }
    })
    .then(blogview => {
        res.json(blogview)
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})

//Get Blog By Bookid
blogview.get('/book/review/:bookid',(req,res) => {
    const Op = Sequelize.Op;
    Blogview.findAll({
        attributes: ['blogid','blog_title','blog_article','blog_img','blog_date','userblogid','book_id','first_name','book_name','status'],
        where: {
            book_id : req.params.bookid,
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