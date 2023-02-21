const CategoryViewDTO = require('../dtos/category-view-dto');
const ServiceResponse = require('../utilities/types/service.response');
const CourseCategory = require('../models/courseCategory');

const getAll = async () => {
    const response = new ServiceResponse();
    try {
        const allCategories = await CourseCategory.findAll();

        if (allCategories.length === 0) {
            response.result = null;
            return response;
        }

        const categories = allCategories.map((category) => {
            const dto = new CategoryViewDTO();
            dto.id = category.id;
            dto.category = category.course_category;
            return dto;
        })

        response.result = { categories };
        return response;
    } catch (err) {
        response.addError('Error', err);
        return response;
    }
}

module.exports = {
    getAll
}