const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;
const Course = require('./course');

const CourseContent = sequelize.define('course_content', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    duration: {
        type: DataTypes.STRING(40),
        allowNull: false
    },

    course_video_link: {
        type: DataTypes.STRING,
        allowNull: false
    },

    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    }
});

module.exports = CourseContent;
