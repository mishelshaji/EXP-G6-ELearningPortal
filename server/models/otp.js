const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;
const User = require('./user');

const Otp = sequelize.define('otp', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    otp: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    request_date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    request_time: {
        type: DataTypes.TIME,
        allowNull: false
    },

    purpose: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    expiry: {
        type: DataTypes.INTEGER,
        allowNull: false
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

module.exports = Otp;