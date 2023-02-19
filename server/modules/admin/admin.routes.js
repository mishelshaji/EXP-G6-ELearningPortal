const express = require('express');
const userController = require('./controllers/user.controller');

const router = express.Router();

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getOne);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

module.exports = router;