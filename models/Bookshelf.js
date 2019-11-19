const sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'bookshelf',
    {
        bookshelfid: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        book_id: {
            type: sequelize.INTEGER
        },
        userid: {
            type: sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }
)