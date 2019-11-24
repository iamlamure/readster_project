const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'blogview',
    {
        blogid: {
            type: Sequelize.INTEGER,
        },
        blog_title: {
            type: Sequelize.STRING
        },
        blog_article: {
            type: Sequelize.STRING
        },
        blog_img: {
            type: Sequelize.STRING
        },
        blog_date: {
            type: Sequelize.DATE,
        },
        userblogid: {
            type: Sequelize.INTEGER,
        },
        book_id: {
            type: Sequelize.INTEGER,
        },
        first_name: {
            type: Sequelize.STRING,
        },
        book_name: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
        }
    },
    {
        timestamps: false,
    }
)