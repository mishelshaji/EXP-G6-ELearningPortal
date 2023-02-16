const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    role: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
});

module.exports = Role;