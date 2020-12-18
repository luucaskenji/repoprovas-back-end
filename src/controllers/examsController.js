const { Exam } = require('../utils');

async function postExam(req, res) {
    let { url, courseId, professorId, semester, type } = req.body;

    courseId = parseInt(courseId);
    professorId = parseInt(professorId);

    let newExam;
    try {
        newExam = await Exam.insertExamIntoDB(url, courseId, professorId, semester, type);
    }
    catch(err) {
        return res.status(500).send('Erro interno no servidor');
    }

    return res.status(201).send(newExam);
}

module.exports = { postExam };