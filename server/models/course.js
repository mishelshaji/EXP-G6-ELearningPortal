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
        type: DataTypes.STRING(70),
        allowNull: false
    },

    meta_description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false
    },

    featured_image_link: {
        type: DataTypes.STRING(255),
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
        allowNull: false,
        defaultValue: 0
    },

    is_deleted: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
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