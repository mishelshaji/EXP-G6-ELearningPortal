const service = require('../../../services/category.service');

const getAll = async (req, res) => {
    const result = await service.getAll();
    
    if (result.result) {
        return res.status(200).json(result.result.categories);
    } else if (!result.isValid) {
        return res.status(400).json(result.errors);
    } else {
        return res.status(404).json(result.result);
    }
}

module.exports = {
    getAll
}