const Course = require('../models/course');
const CourseViewDTO = require('../dtos/course-view.dto');
const ServiceResponse = require('../utilities/types/service.response');

const getAll = async () => {
    const response = new ServiceResponse();

    try {
        const allCourses = await Course.findAll();

        if (!allCourses) {
            response.result =  null;
            return response;
        }

        const courses = allCourses.map((course) => {
            const dto = new CourseViewDTO();
            dto.id = course.id;
            dto.title = course.title;
            dto.metaDescription = course.meta_description;
            dto.level = course.level;
            dto.price = course.price;
            dto.featuredImageLink = course.featured_image_link;
            dto.language = course.language;
            dto.detailedDescription = course.detailed_description;
            return dto;
        });
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
            where: { price: 0 }
        });

        if (!freeCourses) {
            response.result =  null;
            return response;
        }

        const courses = freeCourses.map((course) => {
            const dto = new CourseViewDTO();
            dto.id = course.id;
            dto.title = course.title;
            dto.metaDescription = course.meta_description;
            dto.level = course.level;
            dto.price = course.price;
            dto.featuredImageLink = course.featured_image_link;
            dto.language = course.language;
            dto.detailedDescription = course.detailed_description;
            return dto;
        });
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
            response.result =  null;
            return response;
        }

        const dto = new CourseViewDTO();
        dto.id = course.id;
        dto.title = course.title;
        dto.metaDescription = course.meta_description;
        dto.level = course.level;
        dto.price = course.price;
        dto.featuredImageLink = course.featured_image_link;
        dto.language = course.language;
        dto.detailedDescription = course.detailed_description;
        response.result = { course: dto };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

const getByNameLike = async () => {

}

const create = async () => {

}

const update = async () => {

}

const remove = async () => {

}

module.exports = {
    getAll,
    getAllFree,
    getOne,
    getByNameLike,
    create,
    update,
    remove
}