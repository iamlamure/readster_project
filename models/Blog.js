const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'blog',
    {
        blogid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
            defaultValue: Sequelize.NOW
        },
        userblogid: {
            type: Sequelize.INTEGER,
            references: 'users',
            referencesKey: 'id'
        },
        book_id: {
            type: Sequelize.INTEGER,
            references: 'books',
            referencesKey: 'bookid'
        },
        status:{
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
    }
    
)