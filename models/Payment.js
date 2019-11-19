const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'payment',
    {
        paymentid:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id:{
            type: Sequelize.INTEGER
        },
        product_id:{
            type: Sequelize.INTEGER
        },
        amount:{
            type: Sequelize.INTEGER
        },
        user_sell_id:{
            type: Sequelize.INTEGER
        },
        user_buy_id:{
            type: Sequelize.INTEGER
        },
        user_buy_address:{
            type: Sequelize.STRING
        },
        receipt:{
            type:Sequelize.STRING
        },
        status:{
            type:Sequelize.STRING
        },
        created: {
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
      timestamps: false
    }
)