const service = require('../../../services/course.service');

const getAllActive = async (req, res) => {
    const result = await service.getAllActive();
    if (result.result) {
        return res.status(200).json(result.result.courses);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const getAllRequests = async (req, res) => {
    const result = await service.getAllRequests();
    if (result.result) {
        return res.status(200).json(result.result.courses);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const getAllDeleted = async (req, res) => {
    const result = await service.getAllDeleted();
    if (result.result) {
        return res.status(200).json(result.result.courses);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const getOne = async (req, res) => {
    const courseId = req.params.id;
    const result = await service.getOne(courseId);
    if (result.result) {
        return res.status(200).json(result.result.course);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const remove = async (req, res) => {
    const courseId = req.params.id;
    const result = await service.removeFromDb(courseId);

    if (result.result) {
        return res.status(200).json(result.result.courseDeletionStatus);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const updateStatus = async (req, res) => {
    const courseId = req.params.id;
    const status = req.body.status;
    const result = await service.updateStatus(courseId, status);

    if (result.result) {
        return res.status(200).json(result.result.courseStatusUpdate);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const updatePrice = async (req, res) => {
    const courseId = req.params.id;
    const price = req.body.price;
    const result = await service.setPrice(courseId, price);

    if (result.result) {
        return res.status(200).json(result.result.coursePriceUpdate);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

module.exports = {
    getAllActive,
    getAllRequests,
    getAllDeleted,
    getOne,
    remove,
    updateStatus,
    updatePrice
}