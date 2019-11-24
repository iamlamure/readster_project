const express = require('express')
const products = express.Router()
const Product = require('../models/Product')
const cors = require('cors')
const Sequelize = require('sequelize')

products.use(cors())

//Add Product
products.post('/addproduct',(req,res) => {
    const productData = {
        product_name:req.body.product_name,
        product_detail:req.body.product_detail,
        product_img:req.body.product_img,
        product_price:req.body.product_price,
        //qty:req.body.qty,
        product_condition:req.body.product_condition,
        shipping:req.body.shipping,
        shippingcost:req.body.shippingcost,
        product_user_id:req.body.product_user_id,
        product_book_id:req.body.product_book_id,
        amount : req.body.amount,
        status : "เพิ่มสินค้าเรียบร้อยแล้ว"
    }
    Product.create(productData)
    .then(() => {
        res.json('Product Added!')
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

//Update Product
products.put('/update/:productid',(req,res) => {
    const productData = {
        product_name:req.body.product_name,
        product_detail:req.body.product_detail,
        product_img:req.body.product_img,
        product_price:req.body.product_price,
        //qty:req.body.qty,
        product_condition:req.body.product_condition,
        shipping:req.body.shipping,
        shippingcost:req.body.shippingcost,
        product_user_id:req.body.product_user_id,
        product_book_id:req.body.product_book_id,
        status:req.body.status,
        amount : req.body.amount,
    }
    if (!productData){
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else{
        Product.update(
            {   
                product_name:req.body.product_name,
                product_detail:req.body.product_detail,
                product_img:req.body.product_img,
                product_price:req.body.product_price,
                //qty:req.body.qty,
                product_condition:req.body.product_condition,
                shipping:req.body.shipping,
                shippingcost:req.body.shippingcost,
                product_user_id:req.body.product_user_id,
                product_book_id:req.body.product_book_id,
                status:req.body.status,
                amount : req.body.amount,
            },
            {where: {productid : req.params.productid}}
        )
        .then(() => {
            res.send("Product Update")
        })
        .error(err => res.send(err))
    }
})

//Find All Product For Admin
products.get('/all',(req,res) => {
    const Op = Sequelize.Op;
    Product.findAll({
        where : {
            status : "เพิ่มสินค้าเรียบร้อยแล้ว",
            [Op.not]: [{status : 'ยกเลิกสินค้า'},{status : 'สินค้าถูกสั่งซื้อแล้ว'}]
        }
    })
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

//Find All For Shop
products.get('/shop_page',(req,res) => {
    const Op = Sequelize.Op;
    Product.findAll({
        where : {
            status : "เพิ่มสินค้าเรียบร้อยแล้ว",
            [Op.not]: [{status : 'ยกเลิกสินค้า'},{status : 'สินค้าถูกสั่งซื้อแล้ว'}]
        }
    })
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})


// Delete Product
products.delete('/delete/:productid' ,(req,res,next) => {
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
            productid : req.params.productid,
        }
    })
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send('err: '+ err)
    })
})

// Get All Product By userID for User Check
products.get('/byuser/get_all/:bookid',(req,res) => {
    const Op = Sequelize.Op;
    Product.findAll({
        where: {
            product_book_id : req.params.bookid,
            status : 'เพิ่มสินค้าเรียบร้อยแล้ว',
            [Op.not]: [{status : 'ยกเลิกสินค้า'}]
        }
    })
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send('err: '+err)
    })
})

// Get All Product By userID for Book Check
products.get ('/booksell/get_all/:bookid',(req,res) => {
    const Op = Sequelize.Op;
    Product.findAll({
        where: {
            product_book_id : req.params.bookid,
            [Op.not]: [{status : 'ยกเลิกสินค้า'},{status : 'สินค้าถูกสั่งซื้อแล้ว'}]
            
        }
    })
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.send('err: '+err)
    })
})

module.exports = products