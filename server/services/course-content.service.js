const joi = require('joi');
const CourseContent = require('../models/courseContent');
const ServiceResponse = require('../utilities/types/service.response');
const CourseContentViewDTO = require('../dtos/course-content-view.dto');

const getAllByCourseId = async (id) => {
    const response = new ServiceResponse();

    try {
        const contents = await CourseContent.findAll({
            where: { course_id: id },
            order: [['createdAt', 'ASC']]
        });

        if (contents.length === 0) {
            response.result = null;
            return response;
        }

        const courseContents = generateCourseContentViewDto(contents);
        response.result = { courseContents };
        return response;
    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

const getOne = async (id) => {
    const response = new ServiceResponse();

    try {
        const content = await CourseContent.findByPk(id);

        if (!content) {
            response.result = null;
            return response;
        }

        const dto = generateCourseContentViewDto([content]);
        response.result = { courseContent: dto };
        return response;
    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

const create = async (courseContentCreateDTO) => {
    const response = new ServiceResponse();
    const courseContentSchema = joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        courseVideoLink: joi.string().required(),
        duration: joi.string().required(),
        courseId: joi.number().integer().positive().required()
    });

    const { error } = courseContentSchema.validate(courseContentCreateDTO, {
        abortEarly: false
    });

    if (error) {
        response.addError('Error', error);
        return response;
    }

    try {
        const createdCourseContent = await CourseContent.create({
            title: courseContentCreateDTO.title,
            description: courseContentCreateDTO.description,
            course_video_link: courseContentCreateDTO.courseVideoLink,
            duration: courseContentCreateDTO.duration,
            course_id: courseContentCreateDTO.courseId
        });

        const courseContent = generateCourseContentViewDto([createdCourseContent]);
        response.result = { courseContent };
        return response;
    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

const update = async (id, courseContentUpdateDto) => {
    const response = new ServiceResponse();
    const courseContentSchema = joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
    });

    const { error } = courseContentSchema.validate(courseContentUpdateDto, {
        abortEarly: false
    });

    if (error) {
        response.addError('Error', error);
        return response;
    }

    try {
        const isContentExist = await CourseContent.findByPk(id);

        if (!isContentExist) {
            response.addError('Error', 'Course content not found');
            return response;
        }

        const courseContentUpdate = await CourseContent.update({
            title: courseContentUpdateDto.title,
            description: courseContentUpdateDto.description
        }, {
            where: {
                id: id
            }
        });

        response.result = { courseContentUpdateStatus: courseContentUpdate[0] };
        return response;
    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

const remove = async (id) => {
    const response = new ServiceResponse();
    try {
        const content = await CourseContent.findByPk(id);

        if (!content) {
            response.addError('Error', 'Content not found');
            return response;
        }
        
        const contentDelete = await CourseContent.destroy({ where: { id: id } });

        response.result = { courseContentDeletionStatus: contentDelete };
        return response;
    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

function generateCourseContentViewDto(array) {
    const dtoArray = array.map((courseContent) => {
        const dto = new CourseContentViewDTO();
        dto.id = courseContent.id;
        dto.title = courseContent.title;
        dto.duration = courseContent.duration;
        dto.courseVideoLink = courseContent.course_video_link;
        dto.description = courseContent.description;
        dto.createdAt = courseContent.createdAt;
        dto.updatedAt = courseContent.updatedAt;
        return dto;
    });
    return dtoArray;
}

module.exports = {
    getAllByCourseId,
    getOne,
    create,
    update,
    remove
}