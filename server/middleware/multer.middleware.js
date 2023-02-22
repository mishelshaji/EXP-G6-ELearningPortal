const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
    }
})
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            req.fileValidationError = 'Only image files are allowed!';
        }
        callback(null, true)
    }
})

module.exports = { upload };