const express = require('express')
const products = express.Router()
const Product = require('../models/Product')
const cors = require('cors')

products.use(cors())

products.post('/addproduct',(req,res) => {
    const productData = {
        product_name:product_name,
        product_detail:product_detail,
        product_img:product_img,
        product_price:product_price,
        qty:req.qty,
        product_condition:product_condition,
        shipping:shipping,
        shippingcost:shippingcost
    } = req.body

    Product.create(productData)
    .then(() => {
        res.send('Product Added!')
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

//Find All Product
products.get('/products',(req,res) => {
    Product.findAll()
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

// Delete Product
products.delete('/products/:productid' ,(req,res,next) => {
    Product.destroy({
        where: {
            productid: req.params.productid
        }
    })
    .then(() => {
        res.send('Product Deleted!')
    })
    .catch(err => {
        res.send('error :' + err)
    })
})

// Product detail
products.get ('/product_detail/:productid',(req,res) => {
    Product.findOne({
        where: {
            productid : req.params.productid
        }
    })
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send('err: '+ err)
    })
})

module.exports = products