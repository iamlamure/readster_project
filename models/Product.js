const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'product',
    {
        productid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: Sequelize.STRING
        },
        product_detail: {
            type: Sequelize.STRING
        },
        product_price: {
            type: Sequelize.INTEGER
        },
        qty: {
            type: Sequelize.INTEGER
        },
        product_condition: {
            type: Sequelize.STRING
        },
        shipping: {
            type: Sequelize.STRING
        },
        shippingcost: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)