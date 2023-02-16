const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;

const CourseCategory = sequelize.define('course_category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    course_category: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

module.exports = CourseCategory;