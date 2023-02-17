'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('course_categories', [
            {
                course_category: 'Science',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                course_category: 'Programming',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                course_category: 'Designing',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('categories', null, {});
    }
};
