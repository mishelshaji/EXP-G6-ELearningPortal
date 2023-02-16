const Sequelize = require('sequelize');

const sequelize = new Sequelize('my_learn', 'root', 'experion@123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports.sequelize = sequelize;