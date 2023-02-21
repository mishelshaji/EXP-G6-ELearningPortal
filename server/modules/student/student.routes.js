const express = require('express');
const enrollmentController = require('./controllers/enrollment.controller');

const router = express.Router();

router.post('/enrollments/:id', enrollmentController.enroll);
router.get('/enrollments', enrollmentController.getEnrolledCoursesByUserId);

module.exports = router;