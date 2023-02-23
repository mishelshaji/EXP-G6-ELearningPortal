const UserCourseEnrollment = require('../models/userCourseEnrollment');
const ServiceResponse = require('../utilities/types/service.response');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');
const paymentService = require('./payment.service');

const enroll = async (userId, data) => {
    const response = new ServiceResponse();

    try {
        const alreadyEnrolled = await isEnrolled(userId, data.courseId);

        if (alreadyEnrolled === 1) {
            response.addError('Error', 'Student is already enrolled in this course');
            return response;
        }

        const enrollment = await UserCourseEnrollment.create({
            user_id: userId,
            course_id: data.courseId,
            status: data.status
        });
        const paymentDetails = {
            paymentMethod: data.paymentMethod,
            amount: data.amount,
            userId: userId,
            courseId: data.courseId,
            enrollId: enrollment.id,
            status: 1
        }
        const payment = await paymentService.create(paymentDetails)

        if (payment) {
            response.result = {enrollment, payment};
            return response;
        }
    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

const getTotalEnrolledByCourseId = async (courseId) => {
    const response = new ServiceResponse();

    try {
        const totalEnrollments = await UserCourseEnrollment.count({
            where: {
                course_id: courseId,
                status: 1
            }
        });

        if (totalEnrollments === 0) {
            response.addError('Error', 'No records found');
            return response;
        }

        response.result = totalEnrollments;
        return response;
    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

const getEnrolledCoursesByUserId = async (userId) => {
    const response = new ServiceResponse();

    try {
        const enrolledCourses = await sequelize.query(`select courses.title, courses.meta_description, courses.level,
        courses.language, courses.featured_image_link, user_course_enrollments.course_completion_status, user_course_enrollments.createdAt from user_course_enrollments
        inner join users on user_course_enrollments.user_id = users.id inner join courses on user_course_enrollments.course_id = courses.id
        where user_course_enrollments.user_id = :userId and user_course_enrollments.status = 1`, {
            replacements: { userId: userId },
            type: QueryTypes.SELECT
        });

        if (enrolledCourses.length === 0) {
            response.result = null;
            return response;
        }

        response.result = { enrolledCourses };
        return response;
    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

const isEnrolled = async (userId, courseId) => {
    const enrollment = await UserCourseEnrollment.count({
        where: {
            user_id: userId,
            course_id: courseId,
        }
    });

    return enrollment;
};

module.exports = {
    enroll,
    getTotalEnrolledByCourseId,
    getEnrolledCoursesByUserId
}