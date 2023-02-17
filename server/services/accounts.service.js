const bcrypt = require('bcrypt');
const User = require('../models/user');
const Role = require('../models/role');
const UserRole = require('../models/userRole');
const ServiceResponse = require('../utilities/types/service.response');

function convertToJson(arg) {
    return JSON.parse(JSON.stringify(arg));
}

/**
 * Student registration service
 * @param {*} data 
 * @returns 
 */
const studentRegistration = async (data) => {
    const user = 'student';
    const response = new ServiceResponse();

    const role = convertToJson(await Role.findOne({
        where: { role: user }
    }));

    const isUserAlreadyExist = await User.findOne({
        where: { email: data.email }
    });

    if (isUserAlreadyExist) {
        response.addError('Email', 'User already exist');
        return response;
    }

    const hash = bcrypt.hashSync(
        data.password,
        parseInt(process.env.SALT_ROUNDS)
    );

    try {
        const createdUser = await User.create({
            first_name: data.firstName,
            last_name: data.lastName,
            phone: data.phone,
            email: data.email,
            password: hash
        });

        await UserRole.create({
            user_id: createdUser.id,
            role_id: role.id
        });

        response.result = { registration: 'success' };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
};

module.exports = {
    studentRegistrationService: studentRegistration
};