const express = require('express')
const books = express.Router()
const Book = require('../models/Book')
const cors = require('cors')
const Sequelize = require('sequelize')

books.use(cors())

//Upload
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/book/cover')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

//Get all book
books.get('/all',(req,res) => {
    const Op = Sequelize.Op;
    Book.findAll({
        where:{
            status : 'เพิ่มหนังสือเรียบร้อยแล้ว' ,
            [Op.not]: [{status : 'ระงับหนังสือ'}]
        }
    })
    
    .then(books => {
        const data = books.map((value)=>{
            value.book_img = "http://localhost:5000/book/cover/"+value.book_img
            return value;
        })
        res.json(data)
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})


//Add book
books.post('/addbook',upload.single('book_img'),(req, res) => {
    const today = new Date()
    const bookData = {
        book_name: req.body.book_name,
        author_name: req.body.author_name,
        book_detail: req.body.book_detail,
        publisher: req.body.publisher,
        category: req.body.category,
        price: req.body.price,
        pages: req.body.pages,
        book_img: req.file.filename,
        created: today,
        status: "เพิ่มหนังสือเรียบร้อยแล้ว"
    }
        Book.create(bookData)
        .then(() => {
            res.send('Book Added !')
        })
        .catch(err => {
            res.send('error: ' + err)
        })   
})

//Update Blog
books.put('/update/:bookid',(req,res) => {
    const bookData = {
        book_name: req.body.book_name,
        author_name: req.body.author_name,
        book_detail: req.body.book_detail,
        publisher: req.body.publisher,
        category: req.body.category,
        price: req.body.price,
        pages: req.body.pages,
        book_img: req.body.book_img,
        status: req.body.status
    }
    if (!bookData){
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else{
       Book.update(
            {   
                book_name: req.body.book_name,
                author_name: req.body.author_name,
                book_detail: req.body.book_detail,
                publisher: req.body.publisher,
                category: req.body.category,
                price: req.body.price,
                pages: req.body.pages,
                book_img: req.body.book_img,
                status: req.body.status
            },
            {where: {bookid : req.params.bookid}}
        )
        .then(() => {
            res.send("Book Update")
        })
        .error(err => res.send(err))
    }
})


//Delete Book
books.delete('/delete/:bookid',(req,res ,next) => {
    Book.destroy({
        where: {
            bookid: req.params.bookid
        }
    })
    .then(() => {
        res.send('Book Deleted!')
    })
    .catch(err => {
        res.send('error:' + err)
    })
}),

//Get book id from click
books.get('/book_detail/:bookid',(req,res) => {
    Book.findOne({
        where: {
            bookid : req.params.bookid
        }
    })
    .then(books => {
        res.json(books)
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})


module.exports = books