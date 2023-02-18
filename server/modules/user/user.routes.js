const express = require('express');
const registrationController = require('./controllers/registration.controller');
const loginController = require('./controllers/login.controller');

const router = express.Router();

router.post('/student/registration', registrationController.studentRegistration);
router.post('/instructor/registration', registrationController.instructorRegistration);
router.post('/login', loginController.login);

module.exports = router;