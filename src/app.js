const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const coursesController = require('./controllers/coursesController');
const professorsController = require('./controllers/professorsController');
const examsController = require('./controllers/examsController');

app.get('/api/courses', coursesController.getAll);
app.get('/api/:courseId/professors', professorsController.getCourseProfessors);
app.post('/api/new-exam', examsController.postExam);
app.get('/api/:professorId/exams', examsController.getProfessorExams)

module.exports = { app };