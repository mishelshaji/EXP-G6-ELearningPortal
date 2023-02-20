const bcrypt = require('bcrypt');
const joi = require('joi');
const User = require('../models/user');
const Role = require('../models/role');
const UserRole = require('../models/userRole');
const UserDetails = require('../models/userDetails');
const ServiceResponse = require('../utilities/types/service.response');
const { createToken } = require('../utilities/jwtHelper');
const { sequelize } = require('../config/db.config');
const { QueryTypes } = require('sequelize');

function convertToJson(arg) {
    return JSON.parse(JSON.stringify(arg));
}

/**
 * Student registration service
 * @param {*} data 
 * @returns 
 */
const studentRegistration = async (data) => {
    const response = new ServiceResponse();
    const studentRegistrationSchema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email().required(),
        phone: joi.string().min(10).max(10).required(),
        password: joi.string().required()
    });

    const { error } = studentRegistrationSchema.validate(data, {
        abortEarly: false
    });

    if (error) {
        response.addError('Validation', error);
        return response;
    }

    const user = 'student';

    try {
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
 * Instructor registration service
 * @param {*} data 
 */
const instructorRegistration = async (data) => {
    const response = new ServiceResponse();
    const instructorRegistrationSchema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email().required(),
        phone: joi.string().min(10).max(10),
        password: joi.string().required(),
        education: joi.string().required(),
        dateOfBirth: joi.date().less(new Date('2004-01-01')).required(),
        yearOfExperience: joi.number().required(),
        areaOfExpertise: joi.string().required(),
        alternateMobile: joi.string().min(10).max(10),
        formData: joi.object()
    });

    console.log(data.formData);

    const { error } = instructorRegistrationSchema.validate(data, {
        abortEarly: false
    });

    if (error) {
        response.addError('Validation', error);
        return response;
    }

    const user = 'instructor';

    try {
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

        await UserDetails.create({
            education: data.education,
            date_of_birth: data.dateOfBirth,
            year_of_experience: data.yearOfExperience,
            area_of_expertise: data.areaOfExpertise,
            profile_picture_link: data.profilePictureLink,
            alternate_mobile: data.alternateMobile,
            user_id: createdUser.id
        })

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
}

/**
 * Login service
 * @param {*} data 
 */
const login = async (data) => {
    const response = new ServiceResponse();
    const loginValidationSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    });

    const { error } = loginValidationSchema.validate(data, {
        abortEarly: false
    });

    if (error) {
        response.addError('Validation', error);
        return response;
    }

    try {
        const user = convertToJson(await User.findOne({
            where: { email: data.email }
        }));

        if (user) {
            const passwordComparison = await bcrypt.compare(data.password, user.password);

            if (passwordComparison) {
                const userRole = convertToJson(await sequelize.query(`SELECT roles.role FROM roles JOIN 
                user_roles ON user_roles.role_id = roles.id WHERE user_roles.user_id = :userId`, {
                    replacements: { userId: user.id },
                    type: QueryTypes.SELECT
                }
                ));
                const token = createToken({ email: user.email, role: userRole[0].role });
                response.result = { status: 'login success', token };
                return response;
            }

            response.addError('Login', 'Invalid email or password');
            return response;
        }
        response.addError('Login', 'User not found');
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
}

module.exports = {
    studentRegistrationService: studentRegistration,
    instructorRegistrationService: instructorRegistration,
    login
};