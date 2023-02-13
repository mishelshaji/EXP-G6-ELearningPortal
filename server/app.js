const express = require('express');
const instructorRoutes = require('./modules/instructor/instructor.routes');
const adminRoutes = require('./modules/admin/admin.routes');
const studentRoutes = require('./modules/student/student.routes');

const app = express();

app.use(express.json());
app.use('/instructor', instructorRoutes);
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

app.listen(80);