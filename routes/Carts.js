const express = require('express')
const carts = express.Router()
const Cart = require('../models/Cart')
const cors = require('cors')

carts.use(cors())

//Get Cart All for admin
carts.get('/all',(req,res) => {
    Cart.findAll({
        where: {
            status : 'เพิ่มสินค้าเรียบร้อยแล้ว'
        }
    })
    .then(carts => {
        res.json(carts)
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

//Add Cart From BTN
carts.post('/addcart',(req,res) =>{
    const cartdata = {
        product_id : req.body.product_id,
        price : req.body.price,
        qty : req.body.qty,
        shippingcost : req.body.shippingcost,
        amount : req.body.amount,
        user_id : req.body.user_id,
        status : "เพิ่มสินค้าเรียบร้อยแล้ว"
    }
    Cart.create(cartdata)
    .then(() => {
        res.json('Add Cart Complete!')
    })
    .catch(err => {
        res.send('error:' +err)
    })
})

//Get Cart Forn userid
carts.get('/user/:id',(req,res) => {
    Cart.findAll({
        where: {
            user_id : req.params.id,
            status : 'เพิ่มสินค้าเรียบร้อยแล้ว'
        }
    })
    .then(carts => {
        res.json(carts)
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

//Get Cart Detail by cartid
carts.get('/cart_detail/:cartid',(req,res) => {
    Cart.findOne({
        where:{
            cartid : req.params.cartid
        }
    })
    .then(carts => {
        res.json(carts)
    })
    .catch(err => {
        res.send('error:' + err)
    })
})



//Update Blog
carts.put('/update/:cartid',(req,res) => {
    const cartData = {
        price : req.body.price,
        qty : req.body.qty,
        shippingcost : req.body.shippingcost,
        amount : req.body.amount,
        status : req.body.status
    }
    if (!cartData){
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else{
        Cart.update(
            {   
                price : req.body.price,
                qty : req.body.qty,
                shippingcost : req.body.shippingcost,
                amount : req.body.amount,
                status : req.body.status
            },
            {where: {cartid : req.params.cartid}}
        )
        .then(() => {
            res.send("Cart Update")
        })
        .error(err => res.send(err))
    }
})

//Delete Cart
carts.delete('/delete/:cartid',(req,res,next) =>{
    Cart.destroy({
        where:{
            cartid: req.params.cartid
        }
    })
    .then(() => {
        res.send('Item in Cart Deleted!')
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}),

//check out to cart_detail and before post to payment
carts.get('/checkout/:cartid',(req,res,next) =>{
    Cart.findOne({
        where:{
            cartid: req.params.cartid
        }
    })
    .then(() => {
        res.json(carts)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}),


module.exports = carts