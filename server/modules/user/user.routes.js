const express = require('express');
const validation = require('../../middleware/validation.middleware');
const registrationController = require('./controllers/registration.controller');
const loginController = require('./controllers/login.controller');

const router = express.Router();

router.post('/student/registration', validation , registrationController.studentRegistration);
router.post('/login', validation, loginController.login);

module.exports = router;