require('dotenv').config();
const sequelize = require('../config/db.config').sequelize;

const Certificate = require('../models/certificate');
const Course = require('../models/course');
const CourseCategory = require('../models/courseCategory');
const CourseContent = require('../models/courseContent');
const Otp = require('../models/otp');
const Payment = require('../models/payment');
const Role = require('../models/role');
const User = require('../models/user');
const UserCourseEnrollment = require('../models/userCourseEnrollment');
const UserCourseFeedback = require('../models/userCourseFeedback');
const UserCourseProgress = require('../models/userCourseProgress');
const UserDetails = require('../models/userDetails');
const UserRole = require('../models/userRole');

User.belongsToMany(Role, { through: UserRole, foreignKey: 'user_id' });
Role.belongsToMany(User, { through: UserRole, foreignKey: 'role_id' });

User.hasOne(UserDetails, {
    constraints: true,
    onDelete: 'CASCADE',
    sourceKey: 'id',
    foreignKey: 'user_id'
});
UserDetails.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id',
    foreignKey: 'user_id'
});

User.hasMany(Otp, {
    constraints: true,
    onDelete: 'CASCADE',
    sourceKey: 'id',
    foreignKey: 'user_id'
});
Otp.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id',
    foreignKey: 'user_id'
});

Course.hasMany(UserCourseEnrollment, {
    constraints: true,
    onDelete: 'CASCADE',
    sourceKey: 'id',
    foreignKey: 'course_id'
});
UserCourseEnrollment.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id',
    foreignKey: 'course_id'
});

User.hasMany(UserCourseEnrollment, {
    constraints: true,
    onDelete: 'CASCADE',
    sourceKey: 'id',
    foreignKey: 'user_id'
});
UserCourseEnrollment.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id',
    foreignKey: 'user_id'
});

UserCourseEnrollment.hasMany(Payment, {
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id',
    foreignKey: 'enrollment_id'
});

Payment.belongsTo(UserCourseEnrollment, {
    constraints: true,
    onDelete: 'CASCADE',
    sourceKey: 'id',
    foreignKey: 'enrollment_id'
});

User.hasMany(Payment, {
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id',
    foreignKey: 'user_id'
});
Payment.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE',
    sourceKey: 'id',
    foreignKey: 'user_id'
});

Course.hasMany(Payment, {
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id',
    foreignKey: 'course_id'
});
Payment.belongsTo(Course, {
    constraints: true,
    onDelete: 'CASCADE',
    sourceKey: 'id',
    foreignKey: 'course_id'
});

CourseCategory.hasMany(Course, {
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id',
    foreignKey: 'category_id'
});
Course.belongsTo(CourseCategory, {
    constraints: true,
    onDelete: 'CASCADE',
    sourceKey: 'id',
    foreignKey: 'category_id'
});

Course.hasMany(CourseContent, {
    constraints: true,
    onDelete: 'CASCADE',
    targetKey: 'id',
    foreignKey: 'course_id'
});
CourseContent.belongsTo(Course, {
    constraints: true,
    onDelete: 'CASCADE',
    sourceKey: 'id',
    foreignKey: 'course_id'
});

User.belongsToMany(Course, { through: UserCourseFeedback, foreignKey: 'user_id' });
Course.belongsToMany(User, { through: UserCourseFeedback, foreignKey: 'course_id' });

User.belongsToMany(CourseContent, { through: UserCourseProgress, foreignKey: 'user_id' });
CourseContent.belongsToMany(User, { through: UserCourseProgress, foreignKey: 'course_content_id' });

User.belongsToMany(Course, { through: Certificate, foreignKey: 'user_id' });
Course.belongsToMany(User, { through: Certificate, foreignKey: 'course_id' });

sequelize.sync({alter: true});