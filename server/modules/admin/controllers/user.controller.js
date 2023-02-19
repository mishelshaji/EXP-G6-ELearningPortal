const UserUpdateDto = require('../../../dtos/user-update.dto');
const service = require('../../../services/user.service');

const getAll = async (req, res) => {
    const allUsers = await service.getAll();

    if (allUsers.result) {
        return res.status(200).json(allUsers.result.users);
    } else if (!allUsers.isValid) {
        return res.status(400).json(allUsers.errors);
    } else {
        return res.status(404).json(allUsers.result);
    }
};

const getOne = async (req, res) => {
    const id = req.params.id;
    const user = await service.getOne(id);

    if (user.result) {
        return res.status(200).json(user.result.user);
    } else if (!user.isValid) {
        return res.status(400).json(user.errors);
    } else {
        return res.status(404).json(user.result);
    }
};

const update = async (req, res) => {
    const id = req.params.id;
    const dto = new UserUpdateDto();
    dto.firstName = req.body.firstName;
    dto.lastName = req.body.lastName;
    dto.phone = req.body.phone;
    const updateUser = await service.update(id, dto);

    if (updateUser.result) {
        return res.status(200).json(updateUser.result.userUpdateStatus);
    } else if (!updateUser.isValid) {
        return res.status(400).json(updateUser.errors);
    } else {
        return res.status(404).json(updateUser.result);
    }
};

const remove = async (req, res) => {
    const id = req.params.id;
    const deleteUser = await service.remove(id);

    if (deleteUser.result) {
        return res.status(200).json(deleteUser.result.userDeletionStatus);
    } else if (!deleteUser.isValid) {
        return res.status(400).json(deleteUser.errors);
    } else {
        return res.status(404).json(deleteUser.result);
    }
};

module.exports = {
    getAll,
    getOne,
    update,
    remove
};