const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'blog',
    {
        blockid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        article: {
            type: Sequelize.STRING
        },
        img: {
            type: Sequelize.STRING
        },
        userid: {
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        like: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    }
)