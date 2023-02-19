const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./modules/user/user.routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

app.listen(process.env.DEV_PORT);