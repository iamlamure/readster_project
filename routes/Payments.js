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

module.exports = payments