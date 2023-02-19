const express = require('express');
const courseController = require('./controllers/course.controller');
const userController = require('./controllers/user.controller');

const router = express.Router();

router.put('/courses/status/:id', courseController.updateStatus);
router.put('/courses/price/:id', courseController.updatePrice);

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getOne);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

module.exports = router;