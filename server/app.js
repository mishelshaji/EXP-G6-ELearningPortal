const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./modules/user/user.routes');
const instructorRoutes = require('./modules/instructor/instructor.routes');
const adminRoutes = require('./modules/admin/admin.routes');
const { authenticationMiddleware } = require('./middleware/auth.middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(authenticationMiddleware);
app.use('/', userRoutes);
app.use('/instructor', instructorRoutes)
app.use('/admin', adminRoutes)

app.listen(process.env.DEV_PORT);