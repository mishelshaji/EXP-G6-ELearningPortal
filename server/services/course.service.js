const Course = require('../models/course');
const CourseViewDTO = require('../dtos/course-view.dto');
const ServiceResponse = require('../utilities/types/service.response');

const getAll = async () => {
    const response = new ServiceResponse();

    try {
        const result = await Course.findAll();

        const courses = result.map((course) => {
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

}

const getOne = async () => {

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