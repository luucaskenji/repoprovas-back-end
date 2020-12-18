const { sanitize } = require('../helpers/stringStripHtml');
const { Exam } = require('../utils');

async function postExam(req, res) {
    let { url, courseId, professorId, semester, type } = req.body;

    if (!url || !courseId || !professorId || !semester || !type) {
        return res.status(400).send('Dados inválidos');
    }

    [url, semester, type] = sanitize([url, semester, type]);

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