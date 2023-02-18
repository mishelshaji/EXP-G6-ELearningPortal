const service = require('../../../services/course.service');

const getAll = async (req, res) => {
    const result = await service.getAll();
    if (result.isValid) {
        return res.status(200).json(result);
    }
    return res.status(400).json(result);
}

const getAllFree = async (req, res) => {
    const result = await service.getAllFree();
    if (result.isValid) {
        return res.status(200).json(result);
    }
    return res.status(400).json(result);
}

const getOne = async (req, res) => {

}

const getByNameLike = async (req, res) => {

}

module.exports = {
    getAll,
    getAllFree,
    getOne,
    getByNameLike
}