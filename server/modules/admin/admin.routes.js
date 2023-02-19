const express = require('express');
const courseController = require('./controllers/course.controller');

const router = express.Router();

router.put('/courses/status/:id', courseController.updateStatus);

module.exports = router;