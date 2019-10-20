const express = require('express')
const products = express.Router()
const Product = require('../models/Product')
const cors = require('cors')

products.use(cors())

products.get('/products',(req,res) => {
    Product.findAll()
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

module.exports = products