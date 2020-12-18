const { sanitize } = require('../helpers/stringStripHtml');
const { Exam } = require('../utils');

async function getAll(req, res) {
    let exams;
    try {
        exams = await Exam.getAll();
    }
    catch {
        return res.status(500).send('Erro interno no servidor');
    }

    return res.status(200).send(exams);
}

async function postExam(req, res) {
    let { url, courseId, professorId, semester, type } = req.body;

    if (!url || !courseId || !professorId || !semester || !type) {
        return res.status(400).send('Dados inválidos');
    }

    [url, semester, type] = sanitize([url, semester, type]);

    courseId = parseInt(courseId);
    professorId = parseInt(professorId);

    try {
        await Exam.insertExamIntoDB(url, courseId, professorId, semester, type);
    }
    catch {
        return res.status(500).send('Erro interno no servidor');
    }

    return res.sendStatus(201);
}

module.exports = { postExam, getAll };