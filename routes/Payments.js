const express = require('express')
const payments = express.Router()
const Payment = require('../models/Payment')
const cors = require('cors')

payments.use(cors())

//Get All Payment
payments.get('/all',(req,res) => {
    Payment.findAll()
    .then(payments => {
        res.json(payments)
    })
    .catch(err => {
        res.send('error: '+err)
    })
})

//Add Payment
payments.post('/addpayment',(req,res) => {
    const today = new Date()
    const paymentData = {
        cart_id: req.body.cart_id,
        product_id: req.body.product_id,
        amount:req.body.amount,
        user_sell_id:req.body.user_sell_id,
        user_buy_id:req.body.user_buy_id,
        user_buy_address:req.body.user_buy_address,
        receipt:req.body.receipt,
        status:req.body.status,
        created:today,
    }
    Payment.create(paymentData)
    .then(()=>{
        res.json('Payment Added!')
    })
    .catch(err => {
        res.send('error:' +err)
    })
})


//Get Payment For Userid
payments.get('/user/:id',(req,res) => {
    Payment.findAll({
        where: {
            user_buy_id : req.params.id
        }
    })
    .then(carts => {
        res.json(carts)
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

//Get Payment detail form cartid on click
payments.get('/checkout/:paymentid',(req,res) => {
    Payment.findOne({
        where: {
            paymentid : req.params.paymentid
        }
    })
    .then(payments => {
        res.json(payments)
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})

//Update Product
payments.put('/update/:paymentid',(req,res) => {
    const paymentData = {
        cart_id: req.body.cart_id,
        product_id: req.body.product_id,
        amount:req.body.amount,
        user_sell_id:req.body.user_sell_id,
        user_buy_id:req.body.user_buy_id,
        user_buy_address:req.body.user_buy_address,
        receipt:req.body.receipt,
        status:req.body.status,
    }
    if (!paymentData){
        res.status(400)
        res.json({
            error: "Bad Data"
        })
    }else{
        Payment.update(
            {   
                cart_id: req.body.cart_id,
                product_id: req.body.product_id,
                amount:req.body.amount,
                user_sell_id:req.body.user_sell_id,
                user_buy_id:req.body.user_buy_id,
                user_buy_address:req.body.user_buy_address,
                receipt:req.body.receipt,
                status:req.body.status,
            },
            {where: {paymentid : req.params.paymentid}}
        )
        .then(() => {
            res.send("Payment Update")
        })
        .error(err => res.send(err))
    }
})

//Delete Blog
payments.delete('/delete/:paymentid',(req,res,next) =>{
    Payment.destroy({
        where:{
            paymentid: req.params.paymentid
        }
    })
    .then(() => {
        res.send('Payment Deleted!')
    })
    .catch(err => {
        res.send('error: ' + err)
    })
}),

module.exports = payments