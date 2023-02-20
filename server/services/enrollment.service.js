const UserCourseEnrollment = require('../models/userCourseEnrollment');
const Course = require('../models/course');
const EnrollmentViewDTO = require('../dtos/enrollment-view.dto');
const ServiceResponse = require('../utilities/types/service.response');
const User = require('../models/user');

const enroll = async (userId, courseId) => {
    const response = new ServiceResponse();

    try {
        const alreadyEnrolled = await isEnrolled(userId, courseId);

        if (alreadyEnrolled === 1) {
            response.addError('Enrollment', 'Student is already enrolled in this course');
            return response;
        }

        const enrollment = await UserCourseEnrollment.create({
            user_id: userId,
            course_id: courseId
        });
        const dto = new EnrollmentViewDTO();
        dto.id = enrollment.id;
        dto.status = enrollment.status;
        dto.courseCompletionStatus = enrollment.course_completion_status;
        dto.createdAt = enrollment.createdAt;
        dto.updatedAt = enrollment.updatedAt;
        response.result = { enrollment: dto };
        return response;
    } catch (err) {
        response.addError('Database', err);
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
            response.addError('Enrollment', 'No records found');
            return response;
        }

        response.result = totalEnrollments;
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const getEnrolledCoursesByUserId = async (userId) => {
    const response = new ServiceResponse();

    try {
        const enrolledCourses = await User.findAll({
            where: { user_id : userId },
            include: {
                model: Course
            }
        });

        if (enrolledCourses.length === 0) {
            response.result = null;
            return response;
        }

        response.result = { enrolledCourses };
        return response;
    } catch (err) {
        console.log(err);
        response.addError('Database', err);
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