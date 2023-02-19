const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;
const User = require('./user');
const CourseContent = require('./courseContent');

const UserCourseProgress = sequelize.define('user_course_progress', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    course_content_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CourseContent,
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

module.exports = UserCourseProgress;