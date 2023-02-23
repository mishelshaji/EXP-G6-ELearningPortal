const service = require('../../../services/enrollment.service');

const enroll = async (req, res) => {
    const courseId = req.params.id;
    let status = req.params.status;
    if (!status) {
        status = 0;
    }
    const userId = req.user.id;
    const enrollment = await service.enroll(userId, courseId, status);

    if (enrollment.result) {
        return res.status(200).json(enrollment.result.enrollment);
    } else if (enrollment.errors.Database) {
        return res.status(400).json(enrollment.errors);
    } else if (!enrollment.isValid) {
        return res.status(409).json(enrollment.errors);
    } else {
        return res.status(500).json(enrollment.result);
    }
}

const getEnrolledCoursesByUserId = async (req, res) => {
    const userId = 8;
    const enrolledCourses = await service.getEnrolledCoursesByUserId(userId);

    if (enrolledCourses.result) {
        return res.status(200).json(enrolledCourses.result.enrolledCourses);
    } else if (enrolledCourses.errors.Database) {
        return res.status(400).json(enrolledCourses.errors);
    } else {
        return res.status(400).json(enrolledCourses.result);
    }
}

module.exports = {
    enroll,
    getEnrolledCoursesByUserId
}