const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config').sequelize;
const User = require('./user');
const Course = require('./course');
const UserCourseEnrollment = require('./userCourseEnrollment');

const Payment = sequelize.define('payment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    payment_method: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    transaction_id: {
        type: DataTypes.STRING(100),
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

    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    },

    enrollment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserCourseEnrollment,
            key: 'id'
        }
    },

    status: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
});

module.exports = Payment;