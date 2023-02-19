const joi = require('joi');
const User = require('../models/user');
const UserViewDto = require('../dtos/user-view.dto');
const ServiceResponse = require('../utilities/types/service.response');

const getAll = async () => {
    const response = new ServiceResponse();
    try {
        const allUsers = await User.findAll();

        if (allUsers.length === 0) {
            response.addError('Users', 'Users not found');
            return response;
        }

        const users = allUsers.map((user) => {
            const dto = new UserViewDto();
            dto.id = user.id;
            dto.firstName = user.first_name;
            dto.lastName = user.last_name;
            dto.email = user.email;
            dto.phone = user.phone;
            return dto;
        });
        response.result = { users };
        return response;
    } catch (error) {
        response.addError('Database', error);
        return response;
    }
};

const getOne = async (userId) => {
    const response = new ServiceResponse();

    try {
        const user = await User.findByPk(userId);

        if (!user) {
            response.addError('User', 'user is not found');
            return response;
        }

        const dto = new UserViewDto();
        dto.id = user.id;
        dto.firstName = user.first_name;
        dto.lastName = user.last_name;
        dto.email = user.email;
        dto.phone = user.phone;

        response.result = { user: dto };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
};

const update = async (userId, userUpdateDto) => {
    const response = new ServiceResponse();
    const userSchema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string(),
        phone: joi.number()
    });

    const { error } = userSchema.validate(userUpdateDto, {
        abortEarly: false
    });

    if (error) {
        response.addError('Validation', error);
        return response;
    }

    try {
        const isUserExist = await User.findByPk(userId);

        if (!isUserExist) {
            response.addError('User', 'User not found');
            return response;
        }

        const userUpdate = await User.update(
            {
                first_name: userUpdateDto.firstName,
                last_name: userUpdateDto.lastName,
                phone: userUpdateDto.phone
            },
            {
                where: {
                    id: userId
                }
            }
        );
        response.result = { userUpdateStatus: userUpdate[0] };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
};

const remove = async (userId) => {
    const response = new ServiceResponse();
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            response.addError('User', 'user is not found');
            return response;
        }
        
        const userDelete = await User.destroy({ where: { id: userId } });

        response.result = { userDeletionStatus: userDelete };
        return response;
    } catch (err) {
        response.addError('Database', err);
        return response;
    }
};

module.exports = {
    getAll,
    getOne,
    update,
    remove
};