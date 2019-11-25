const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'cart',
    {
        cartid:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id:{
            type: Sequelize.INTEGER
        },
        price:{
            type: Sequelize.INTEGER
        },
        user_id:{
            type: Sequelize.INTEGER
        },
        user_sell_id:{
            type: Sequelize.INTEGER
        },
        qty:{
            type: Sequelize.INTEGER
        },
        shippingcost:{
            type: Sequelize.INTEGER
        },
        amount:{
            type: Sequelize.INTEGER
        },
        status:{
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)