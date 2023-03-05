const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./modules/user/user.routes');
const instructorRoutes = require('./modules/instructor/instructor.routes');
const adminRoutes = require('./modules/admin/admin.routes');
const studentRoutes = require('./modules/student/student.routes');
const { authenticationMiddleware } = require('./middleware/auth.middleware');

const app = express();

app.use(cors());
app.use('/public', express.static('public'))
app.use(express.json());
app.use('/', userRoutes);
app.use(authenticationMiddleware);
app.use('/instructor', instructorRoutes);
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

app.listen(process.env.DEV_PORT);