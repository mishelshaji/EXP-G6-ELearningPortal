const express = require('express');
const courseController = require('./controllers/course.controller');
const courseContentController = require('./controllers/course-content.controller');
const enrollmentController = require('./controllers/enrollment.controller');
const courseCategoryController = require('./controllers/course-category.controller');

const router = express.Router();

router.get('/courses/all', courseController.getAll);
router.get('/courses/:id', courseController.getOne);
router.post('/courses', courseController.create);
router.put('/courses/:id', courseController.update);
router.delete('/courses/:id', courseController.remove);

router.get('/course/contents/:id', courseContentController.getAllByCourse);
router.post('/course/contents', courseContentController.create);
router.put('/course/contents/:id', courseContentController.update);
router.delete('/course/contents/:id', courseContentController.remove);

router.get('/enrollments/:id', enrollmentController.getTotalEnrolledByCourseId);

router.get('/categories', courseCategoryController.getAll);

module.exports = router;