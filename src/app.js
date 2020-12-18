const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const coursesController = require('./controllers/coursesController');
const professorsController = require('./controllers/professorsController');

app.get('/api/courses', coursesController.getAll);
app.get('/api/:courseId/professors', professorsController.getCourseProfessors);

module.exports = { app };