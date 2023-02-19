const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;
const User = require('./user');
const Course = require('./course');

const UserCourseFeedback = sequelize.define('user_course_feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    feedback_content: {
        type: DataTypes.STRING,
        allowNull: false
    },

    feedback_reply: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 0
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

module.exports = UserCourseFeedback;