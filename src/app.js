const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const coursesController = require('./controllers/coursesController');

app.get('/api/courses', coursesController.getAll);
// app.get('/api/:course/teachers', getCourseTeachers);

module.exports = { app };