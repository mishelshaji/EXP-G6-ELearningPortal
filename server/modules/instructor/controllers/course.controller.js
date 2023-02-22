const CourseCreateDTO = require('../../../dtos/course-create.dto');
const CourseUpdateDTO = require('../../../dtos/course-update.dto');
const service = require('../../../services/course.service');
const ServiceResponse = require('../../../utilities/types/service.response');

const getAll = async (req, res) => {
    const userId = req.user.id;
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
    courseDto.featuredImageLink = req.file.filename;
    courseDto.language = req.body.language;
    courseDto.detailedDescription = req.body.detailedDescription;
    courseDto.categoryId = req.body.category;
    courseDto.userId = req.user.id;

    if (req.fileValidationError) {
        const response = new ServiceResponse();
        response.addError('Error', req.fileValidationError);
        return res.status(400).json(response);
    }

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
    const courseId = req.params.id;
    const courseDto = new CourseUpdateDTO();
    courseDto.title = req.body.title;
    courseDto.metaDescription = req.body.metaDescription;
    courseDto.level = req.body.level;
    courseDto.detailedDescription = req.body.detailedDescription;
    const result = await service.update(courseId, courseDto);

    if (result.result) {
        return res.status(200).json(result.result.courseUpdateStatus);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const remove = async (req, res) => {
    const courseId = req.params.id;
    const result = await service.remove(courseId);

    if (result.result) {
        return res.status(200).json(result.result.courseDeletionStatus);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}