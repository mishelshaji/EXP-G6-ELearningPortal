const joi = require('joi');

function validation(req, res, next) {
    if (req.url === '/student/registration') {
        const studentRegistrationSchema = joi.object({
            firstName: joi.string().required('First name is required'),
            lastName: joi.string().required('Last name is required'),
            email: joi.string().email().required('Email is mandatory'),
            phone: joi.string().min(10).max(10).required('Mobile is required'),
            password: joi.string().required('Password cannot be empty*')
        });

        const { error } = studentRegistrationSchema.validate(req.body, {
            abortEarly: false
        });

        if (error) {
            return res.status(400).json({ error });
        } else {
            return next();
        }
    }

    if (req.url === '/instructor/registration') {
        const instructorRegistrationSchema = joi.object({
            firstName: joi.string().required('First name is required'),
            lastName: joi.string().required('Last name is required'),
            email: joi.string().email().required('Email is mandatory'),
            phone: joi.string().min(10).max(10),
            password: joi.string().required('Password cannot be empty*'),
            education: joi.string().required(),
            dateOfBirth: joi.date().less(new Date('2004-01-01')).required(),
            yearOfExperience: joi.number().required(),
            areaOfExpertise: joi.string().required(),
            alternateMobile: joi.string().min(10).max(10),
            profilePictureLink: joi.string()
        });

        const { error } = instructorRegistrationSchema.validate(req.body, {
            abortEarly: false
        });

        if (error) {
            return res.status(400).json({ error });
        } else {
            return next();
        }
    }

    if (req.url === '/login') {
        const loginValidationSchema = joi.object({
            email: joi.string().email().required('Email is required'),
            password: joi.string().required()
        });

        const { error } = loginValidationSchema.validate(req.body, {
            abortEarly: false
        });

        if (error) {
            return res.status(400).json({ error });
        } else {
            return next();
        }
    }
}

module.exports = validation;