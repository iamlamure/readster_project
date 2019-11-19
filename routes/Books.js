const express = require('express')
const books = express.Router()
const Book = require('../models/Book')
const cors = require('cors')

books.use(cors())


//Get all book
books.get('/books',(req,res) => {
    Book.findAll()
    .then(books => {
        res.json(books)
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})


//Add book
books.post('/addbook',(req, res) => {
    const today = new Date()
    const bookData = {
        book_name: req.body.book_name,
        author_name: req.body.author_name,
        book_detail: req.body.book_detail,
        publisher: req.body.publisher,
        category: req.body.category,
        price: req.body.price,
        pages: req.body.pages,
        book_img: req.body.book_img,
        created: today
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
books.delete('/books/:bookid',(req,res ,next) => {
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