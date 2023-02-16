'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('roles', [
            {
                role: 'admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                role: 'student',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
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
