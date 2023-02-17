const express = require('express');
require('dotenv').config();
const userRoutes = require('./modules/user/user.routes');

const app = express();

app.use(express.json());
app.use('/', userRoutes);

app.listen(80);