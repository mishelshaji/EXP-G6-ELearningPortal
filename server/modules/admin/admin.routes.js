const express = require('express');
const courseController = require('./controllers/course.controller');

const router = express.Router();

router.get('/courses/active', courseController.getAllActive);
router.get('/courses/inactive', courseController.getAllInActive);
router.get('/courses/deleted', courseController.getAllDeleted);
router.get('/courses/:id', courseController.getOne);
router.put('/courses/status/:id', courseController.updateStatus);
router.put('/courses/price/:id', courseController.updatePrice);
router.delete('/courses/:id', courseController.remove);

module.exports = router;