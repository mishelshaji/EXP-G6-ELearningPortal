const service = require('../../../services/course.service');

const getAll = async (req, res) => {
    const userId = 3;
    const result = await service.getCourseByUser(userId);
    if (result.result) {
        return res.status(200).json(result.result.courses);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const getOne = async (req, res) => {

}

const create = async (req, res) => {

}

const update = async (req, res) => {

}

const remove = async (req, res) => [

]

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}