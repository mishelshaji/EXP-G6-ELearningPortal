const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;
const Course = require('./course');
const User = require('./user');

const Certificate = sequelize.define('certificate', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    certificate_link: {
        type: DataTypes.STRING,
        allowNull: false
    },

    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

module.exports = Certificate;