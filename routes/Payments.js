const express = require('express')
const payments = express.Router()
const Payment = require('../models/Payment')
const cors = require('cors')
const Sequelize = require('sequelize')

payments.use(cors())

//Upload
const multer = require('multer')
const path = require('path');
var Upload = multer({ storage: storage })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/payment/receipt/img')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

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

//Get Paynet for Check by Admin
payments.get('/forcheckbyadmin/all',(req,res) => {
    Payment.findAll({
        where: {
            status : 'รอการตรวจสอบชำระเงิน'
        }
    })
    .then(payments => {
        res.json(payments)
    })
    .catch(err => {
        res.send('error: '+err)
    })
})

//Add Payment
payments.post('/addpayment',Upload.single('receipt_img'),(req,res) => {
    const today = new Date()
    const paymentData = {
        cart_id: req.body.cart_id,
        product_id: req.body.product_id,
        amount:req.body.amount,
        user_sell_id:req.body.user_sell_id,
        user_buy_id:req.body.user_buy_id,
        user_buy_address:req.body.user_buy_address,
        receipt:req.file.receipt,
        status:req.body.status,
        created:today,
    }
    Payment.create(paymentData)
    .then(()=>{
        res.json('Payment Added!')
        console.log(req.file.filename)
        res.send(req.file)
    })
    .catch(err => {
        res.send('error:' +err)
    })
})


//Get Payment For User buy id
payments.get('/userbuy/:id',(req,res) => {
    const Op = Sequelize.Op;
    Payment.findAll({
        where: {
            user_buy_id : req.params.id,
            [Op.or]: [
                        {status : 'แจ้งชำระเงินเรียบร้อยแล้ว' },
                        { status : 'รอการตรวจสอบชำระเงิน'},
                        { status : 'ชำระเงินสำเร็จแล้ว'},
                        { status : 'จัดส่งเรียบร้อยแล้ว'}
                      ]
        }
    })
    .then(carts => {
        res.json(carts)
    })
    .catch(err => {
        res.send('error:' + err)
    })
})

//Get Payment For User sell id
payments.get('/usersell/:id',(req,res) => {
    const Op = Sequelize.Op;
    Payment.findAll({
        where: {
            user_sell_id : req.params.id,
            [Op.or]:[
                {status : 'แจ้งชำระเงินเรียบร้อยแล้ว' },
                { status : 'รอการตรวจสอบชำระเงิน'},
                { status : 'ชำระเงินสำเร็จแล้ว'},
                //{ status : 'จัดส่งเรียบร้อยแล้ว'}
            ]
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
            paymentid : req.params.paymentid,
            [Op.or]:[
                {status : 'แจ้งชำระเงินเรียบร้อยแล้ว' },
                { status : 'รอการตรวจสอบชำระเงิน'},
                { status : 'ชำระเงินเสร็จสิ้น'},
                { status : 'จัดส่งเรียบร้อยแล้ว'}
            ]
        }
    })
    .then(payments => {
        res.json(payments)
    })
    .catch(err => {
        res.send('error: '+ err)
    })
})

//Update Payment
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
        tracking_number:req.body.tracking_number
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
                tracking_number:req.body.tracking_number
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