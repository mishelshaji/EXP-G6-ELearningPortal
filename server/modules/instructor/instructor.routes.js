const express = require('express');
const courseController = require('./controllers/course.controller');

const router = express.Router();

router.get('/courses/all', courseController.getAll);
router.get('/courses/:id', courseController.getOne);
router.post('/courses', courseController.create);
router.put('/courses/:id', courseController.update);
router.delete('/courses/:id', courseController.remove);

module.exports = router;