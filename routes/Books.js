const express = require('express')
const books = express.Router()
const Book = require('../models/Book')
const cors = require('cors')


books.use(cors())


//Add book
books.post('/addbook',(req, res) => {
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
    
        Book.create(bookData)
        .then(() => {
            res.send('Book Added !')
        })
        .catch(err => {
            res.send('error: ' + err)
        })   
})
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
})

module.exports = books