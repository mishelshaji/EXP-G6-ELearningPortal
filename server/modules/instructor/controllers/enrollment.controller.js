const service = require('../../../services/enrollment.service');

const getTotalEnrolledByCourseId = async (req, res) => {
    const courseId = req.params.id;
    const enrollments = await service.getTotalEnrolledByCourseId(courseId);

    if (enrollments.result) {
        return res.status(200).json(enrollments.result);
    } else if (enrollments.Database) {
        return res.status(400).json(enrollments.errors);
    } else {
        return res.status(404).json(enrollments.errors);
    }
}

module.exports = {
    getTotalEnrolledByCourseId
}