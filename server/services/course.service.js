const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const Course = require('../models/course');
const CourseViewDTO = require('../dtos/course-view.dto');
const ServiceResponse = require('../utilities/types/service.response');

const getAllActive = async () => {
    const response = new ServiceResponse();

    try {
        const allCourses = await Course.findAll({
            where: { status: 1 }
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
            where: { [Op.and]: { price: 0, status: 1 } }
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
                [Op.and]: { title: { [Op.substring]: courseName }, status: 1 }
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
            where: { user_id: userId }
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

const create = async () => {

}

const update = async () => {

}

const remove = async () => {

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
    remove
}