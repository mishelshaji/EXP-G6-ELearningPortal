const service = require('../../../services/accounts.service');

const studentRegistration = async (req, res) => {
    const data = req.body;
    const result = await service.studentRegistrationService(data);

    res.json(result)
};

module.exports = {
    studentRegistration
};