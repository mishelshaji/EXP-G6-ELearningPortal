const service = require('../../../services/course.service');

const getAll = async (req, res) => {
    const result = await service.getAll();
    if (result.isValid) {
        return res.status(200).json(result);
    }
    return res.status(500).json(result);
}

const getAllFree = async (req, res) => {

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