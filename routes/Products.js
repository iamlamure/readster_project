const express = require('express')
const products = express.Router()
const Product = require('../models/Product')
const cors = require('cors')

products.use(cors())

products.post('/addproduct',(req,res) => {
    const productData = {
        product_name:req.body.product_name,
        product_detail:req.body.product_detail,
        product_img:req.body.product_img,
        product_price:req.body.product_price,
        qty:req.body.qty,
        product_condition:req.body.product_condition,
        shipping:req.body.shipping,
        shippingcost:req.body.shippingcost
    }

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
products.delete('/products/:productid' ,(req,res) => {
    Product.destroy({
        where : {
            productid: req.param.productid
        }
    })
    .then(() => {
        res.send('Product Deleted!')
    })
    .catch(err => {
        res.send('error :' + err)
    })
})
module.exports = products