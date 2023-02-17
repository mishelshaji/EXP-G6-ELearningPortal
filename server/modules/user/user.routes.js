const express = require('express');
const validation = require('../../middleware/validation.middleware');
const registrationController = require('./controllers/registration.controller');

const router = express.Router();

router.post('/student/registration', validation , registrationController.studentRegistration);

module.exports = router;