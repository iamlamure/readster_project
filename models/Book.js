const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'book',
    {
        bookid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        book_name: {
            type: Sequelize.STRING
        },
        author_name: {
            type: Sequelize.STRING
        },
        book_detail: {
            type: Sequelize.STRING
        },
        publisher: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING 
        },
        price: {
            type: Sequelize.INTEGER
        },
        pages: {
            type: Sequelize.INTEGER
        },
        book_img: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    })