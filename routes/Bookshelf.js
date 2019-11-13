const express = require('express')
const bookshelfs = express.Router()
const Bookshelf = require('../models/Bookshelf')
const cors = require('cors')

bookshelfs.use(cors())

//Add Blog
bookshelfs.post('/addbookshelf/:bookid',(req,res,next) => {
    const booktoshelfData = {
        book_id : req.params.bookid,
        userid : req.params.id
    }
    Bookshelf.create(booktoshelfData)
    .then(() => {
        res.json('Added Book to Shelf!')
    })
    .catch(err => {
        res.send('error: '+err)
    })
})

//Show book
bookshelfs.get('/bookshelfs',(req,res) => {
    Bookshelf.findAll()
    .then(bookshelfs => {
        res.json(bookshelfs)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = bookshelfs