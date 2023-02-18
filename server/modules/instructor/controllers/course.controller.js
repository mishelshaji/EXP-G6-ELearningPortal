const CourseCreateDTO = require('../../../dtos/course-create.dto');
const service = require('../../../services/course.service');

const getAll = async (req, res) => {
    const userId = req.params.id;
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

const create = async (req, res) => {
    const courseDto = new CourseCreateDTO();
    courseDto.title = req.body.title;
    courseDto.metaDescription = req.body.metaDescription;
    courseDto.level = req.body.level;
    courseDto.price = req.body.price;
    courseDto.featuredImageLink = req.body.featuredImageLink;
    courseDto.language = req.body.language;
    courseDto.detailedDescription = req.body.detailedDescription;
    courseDto.categoryId = req.body.categoryId;
    courseDto.userId = req.body.userId;

    const result = await service.create(courseDto);
    if (result.result) {
        return res.status(200).json(result.result.course);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
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