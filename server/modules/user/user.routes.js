const express = require('express');
const registrationController = require('./controllers/registration.controller');
const loginController = require('./controllers/login.controller');
const homeController = require('./controllers/home.controller');

const router = express.Router();

router.post('/student/registration', registrationController.studentRegistration);
router.post('/instructor/registration', registrationController.instructorRegistration);
router.post('/login', loginController.login);

router.get('/courses', homeController.getAll);
router.get('/courses/free', homeController.getAllFree);
router.get('/courses/:id', homeController.getOne);
router.get('/courses/:q', homeController.getByNameLike);

module.exports = router;