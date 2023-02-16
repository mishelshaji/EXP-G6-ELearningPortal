const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;
const CourseCategory = require('./courseCategory');
const User = require('./user');

const Course = sequelize.define('course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    meta_description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    level: {
        type: DataTypes.STRING(15),
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    featured_image_link: {
        type: DataTypes.STRING,
        allowNull: false
    },

    language: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    detailed_description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    status: {
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
    },

    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CourseCategory,
            key: 'id'
        }
    }
});

module.exports = Course;