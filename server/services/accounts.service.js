const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
        const role = convertToJson(await Role.findOne({
            where: { role: user }
        }));

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

        response.result = { status: 'registration success' };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
};

/**
 * Login service
 * @param {*} data 
 */
const login = async (data) => {
    const response = new ServiceResponse();
    const user = convertToJson(await User.findOne({
        where: { email: data.email }
    }));

    if (user) {
        const passwordComparison = bcrypt.compare(data.password, user.password);

        if (passwordComparison) {
            const userRole = convertToJson(await UserRole.findOne({
                where: { user_id: user.id }
            }));
            const token = jwt.sign({ name: `${user.first_name} ${user.last_name}`, email: user.email, role: userRole.role_id }, process.env.SECRET_KEY);
            response.result = { status: 'login success', token };
            return response;
        }

        response.addError('Login', 'Invalid email or password');
        return response;
    }
    response.addError('Login', 'User not found');
    return response;
}

module.exports = {
    studentRegistrationService: studentRegistration,
    login
};