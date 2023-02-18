const express = require('express');
require('dotenv').config();
const userRoutes = require('./modules/user/user.routes');
const instructorRoutes = require('./modules/instructor/instructor.routes');

const app = express();

app.use(express.json());
app.use('/', userRoutes);
app.use('/instructor', instructorRoutes)

app.listen(process.env.DEV_PORT);