const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    first_name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    last_name: {
        type: DataTypes.STRING(30),
        allowNull: true
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING(13),
        allowNull: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;