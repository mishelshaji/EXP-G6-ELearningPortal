const service = require('../../../services/accounts.service');

const studentRegistration = async (req, res) => {
    const data = req.body;
    const result = await service.studentRegistrationService(data);

    if (result.isValid) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
};

const instructorRegistration = async (req, res) => {
    const data = req.body;
    const result = await service.instructorRegistrationService(data);

    if (result.isValid) {
        res.status(201).json(result);
    } else {
        res.status(400).json(result);
    }
};

module.exports = {
    studentRegistration,
    instructorRegistration
};