const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;
const User = require('./user');

const UserDetails = sequelize.define('user_detail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    education: {
        type: DataTypes.STRING,
        allowNull: false
    },

    year_of_experience: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    area_of_expertise: {
        type: DataTypes.STRING,
        allowNull: false
    },

    profile_picture_link: {
        type: DataTypes.STRING,
        allowNull: true
    },

    alternate_mobile: {
        type: DataTypes.STRING(13),
        allowNull: true
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

module.exports = UserDetails;