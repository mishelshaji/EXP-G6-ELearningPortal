const service = require('../../../services/course-content.service');
const CourseContentCreateDTO = require('../../../dtos/course-content-create.dto');
const CourseContentUpdateDTO = require('../../../dtos/course-content-update.dto');

const getAllByCourse = async (req, res) => {
    const courseId = req.params.id;
    const result = await service.getAllByCourseId(courseId);
    if (result.result) {
        return res.status(200).json(result.result.courseContents);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const create = async (req, res) => {
    const courseContentDto = new CourseContentCreateDTO();
    courseContentDto.title = req.body.title;
    courseContentDto.duration = req.body.duration;
    courseContentDto.courseVideoLink = req.body.courseVideoLink;
    courseContentDto.description = req.body.description;
    courseContentDto.courseId = req.body.courseId;

    const result = await service.create(courseContentDto);
    if (result.result) {
        return res.status(200).json(result.result.courseContent);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const update = async (req, res) => {
    const courseContentId = req.params.id;
    const courseContentDto = new CourseContentUpdateDTO();
    courseContentDto.title = req.body.title;
    courseContentDto.description = req.body.description;
    const result = await service.update(courseContentId, courseContentDto);

    if (result.result) {
        return res.status(200).json(result.result.courseContentUpdateStatus);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

const remove = async (req, res) => {
    const courseContentId = req.params.id;
    const result = await service.remove(courseContentId);

    if (result.result) {
        return res.status(200).json(result.result.courseContentDeletionStatus);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

module.exports = {
    getAllByCourse,
    create,
    update,
    remove
}