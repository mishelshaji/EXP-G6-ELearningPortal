const express = require('express');
const registrationController = require('./controllers/registration.controller');
const loginController = require('./controllers/login.controller');
const homeController = require('./controllers/home.controller');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, '../../public/uploads')
    },
    filename: (req, file, cb) => {
        return cb(null, `pic`)
    }
})
const upload = multer({storage});

const router = express.Router();

router.post('/student/registration', registrationController.studentRegistration);
router.post('/instructor/registration', upload.single('profilePicture'), registrationController.instructorRegistration);
router.post('/login', loginController.login);

router.get('/courses', homeController.getAll);
router.get('/courses/free', homeController.getAllFree);
router.get('/courses/:id', homeController.getOne);
router.get('/courses/search/:q', homeController.getByNameLike);

module.exports = router;