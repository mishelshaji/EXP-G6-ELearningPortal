const Sequelize = require("sequelize");
const joi = require('joi');
const Op = Sequelize.Op;
const Course = require('../models/course');
const CourseViewDTO = require('../dtos/course-view.dto');
const ServiceResponse = require('../utilities/types/service.response');

const getAllActive = async () => {
    const response = new ServiceResponse();

    try {
        const allCourses = await Course.findAll({
            where: { [Op.and]: { status: 1, is_deleted: 0 } }
        });

        if (allCourses.length === 0) {
            response.result = null;
            return response;
        }

        const courses = generateCourseViewDto(allCourses);
        response.result = { courses };
        return response;
    } catch (error) {
        response.addError('Database', err);
        return response;
    }
}

const getAllInActive = async () => {
    const response = new ServiceResponse();

    try {
        const allCourses = await Course.findAll({
            where: { status: 0 }
        });

        if (allCourses.length === 0) {
            response.result = null;
            return response;
        }

        const courses = generateCourseViewDto(allCourses);
        response.result = { courses };
        return response;
    } catch (error) {
        response.addError('Database', err);
        return response;
    }
}

const getAllFree = async () => {
    const response = new ServiceResponse();

    try {
        const freeCourses = await Course.findAll({
            where: { [Op.and]: { price: 0, status: 1, is_deleted: 0 } }
        });

        if (freeCourses.length === 0) {
            response.result = null;
            return response;
        }

        const courses = generateCourseViewDto(freeCourses);
        response.result = { courses };
        return response;
    } catch (error) {
        response.addError('Database', err);
        return response;
    }
}

const getOne = async (id) => {
    const response = new ServiceResponse();

    try {
        const course = await Course.findByPk(id);

        if (!course) {
            response.result = null;
            return response;
        }

        const dto = generateCourseViewDto([course]);
        response.result = { course: dto };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const getByNameLike = async (courseName) => {
    const response = new ServiceResponse();

    try {
        const courseResult = await Course.findAll({
            where: {
                [Op.and]: { title: { [Op.substring]: courseName }, status: 1, is_deleted: 0 }
            }
        });

        if (courseResult.length === 0) {
            response.result = null;
            return response;
        }

        const courses = generateCourseViewDto(courseResult);
        response.result = { courses };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const getCourseByUser = async (userId) => {
    const response = new ServiceResponse();

    try {
        const userCourses = await Course.findAll({
            where: { [Op.and]: { user_id: userId, is_deleted: 0 } }
        });

        if (userCourses.length === 0) {
            response.result = null;
            return response;
        }

        const courses = generateCourseViewDto(userCourses);
        response.result = { courses };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const create = async (courseCreateDto) => {
    const response = new ServiceResponse();
    const courseSchema = joi.object({
        title: joi.string().required(),
        metaDescription: joi.string().required(),
        level: joi.number().required(),
        price: joi.number().required(),
        featuredImageLink: joi.string().required(),
        language: joi.string().required(),
        detailedDescription: joi.string().required(),
        userId: joi.number().integer().positive().required(),
        categoryId: joi.number().integer().positive().required()
    });

    const { error } = courseSchema.validate(courseCreateDto, {
        abortEarly: false
    });

    if (error) {
        response.addError('Validation', error);
        return response;
    }

    try {
        const createdCourse = await Course.create({
            title: courseCreateDto.title,
            meta_description: courseCreateDto.metaDescription,
            level: courseCreateDto.level,
            price: courseCreateDto.price,
            featured_image_link: courseCreateDto.featuredImageLink,
            language: courseCreateDto.language,
            detailed_description: courseCreateDto.detailedDescription,
            user_id: courseCreateDto.userId,
            category_id: courseCreateDto.categoryId
        });

        const course = generateCourseViewDto([createdCourse]);
        response.result = { course };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const update = async (courseId, courseUpdateDto) => {
    const response = new ServiceResponse();
    const courseSchema = joi.object({
        title: joi.string().required(),
        metaDescription: joi.string().required(),
        level: joi.number().required(),
        detailedDescription: joi.string().required(),
    });

    const { error } = courseSchema.validate(courseUpdateDto, {
        abortEarly: false
    });

    if (error) {
        response.addError('Validation', error);
        return response;
    }

    try {
        const isCourseExist = await Course.findByPk(courseId);

        if (!isCourseExist) {
            response.addError('Course', 'Course not found');
            return response;
        }

        const courseUpdate = await Course.update({
            title: courseUpdateDto.title,
            meta_description: courseUpdateDto.metaDescription,
            level: courseUpdateDto.level,
            detailed_description: courseUpdateDto.detailedDescription
        }, {
            where: {
                id: courseId
            }
        });

        response.result = { courseUpdateStatus: courseUpdate[0] };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const remove = async (courseId) => {
    const response = new ServiceResponse();

    try {
        const course = await Course.findByPk(courseId);

        if (!course) {
            response.addError('Course', 'Course not found');
            return response;
        }

        const courseDelete = await Course.update({ is_deleted: 1 }, { where: { id: courseId } })

        response.result = { courseDeletionStatus: courseDelete[0] };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const updateStatus = async (courseId, status) => {
    const response = new ServiceResponse();

    try {
        const course = await Course.findByPk(courseId);

        if (!course) {
            response.addError('Course', 'Course not found');
            return response;
        }

        const courseStatusUpdate = await Course.update({ status: status }, { where: { id: courseId } });

        response.result = { courseStatusUpdate: courseStatusUpdate[0] };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const setPrice = async (courseId, price) => {
    const response = new ServiceResponse();

    try {
        const course = await Course.findByPk(courseId);

        if (!course) {
            response.addError('Course', 'Course not found');
            return response;
        }

        const coursePriceUpdate = await Course.update({ price: price }, { where: { id: courseId } });

        response.result = { coursePriceUpdate: coursePriceUpdate[0] };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const getAllDeleted = async () => {
    const response = new ServiceResponse();

    try {
        const allCourses = await Course.findAll({
            where: { is_deleted: 1 }
        });

        if (allCourses.length === 0) {
            response.result = null;
            return response;
        }

        const courses = generateCourseViewDto(allCourses);
        response.result = { courses };
        return response;
    } catch (error) {
        response.addError('Database', err);
        return response;
    }
}

const removeFromDb = async (courseId) => {
    const response = new ServiceResponse();

    try {
        const course = await Course.findByPk(courseId);

        if (!course) {
            response.addError('Course', 'Course not found');
            return response;
        }

        const courseDelete = await Course.destroy({ where: { id: courseId } })

        response.result = { courseDeletionStatus: courseDelete };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

function generateCourseViewDto(array) {
    const dtoArray = array.map((course) => {
        const dto = new CourseViewDTO();
        dto.id = course.id;
        dto.title = course.title;
        dto.metaDescription = course.meta_description;
        dto.level = course.level;
        dto.price = course.price;
        dto.featuredImageLink = course.featured_image_link;
        dto.language = course.language;
        dto.detailedDescription = course.detailed_description;
        dto.createdAt = course.createdAt;
        dto.updatedAt = course.updatedAt;
        return dto;
    });
    return dtoArray;
}

module.exports = {
    getAllActive,
    getAllInActive,
    getAllFree,
    getOne,
    getByNameLike,
    getCourseByUser,
    create,
    update,
    remove,
    updateStatus,
    setPrice,
    getAllDeleted,
    removeFromDb
}