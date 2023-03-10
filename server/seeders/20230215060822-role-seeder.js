'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('roles', [
            {
                id: 1,
                role: 'admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                role: 'student',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                role: 'instructor',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('roles', null, {});
    }
};
