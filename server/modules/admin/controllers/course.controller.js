const service = require('../../../services/course.service');

const updateStatus = async (req, res) => {
    const courseId = req.params.id;
    const status = req.body.status;
    const result = await service.updateStatus(courseId, status);

    if (result.result) {
        return res.status(200).json(result.result);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

module.exports = {
    updateStatus
}