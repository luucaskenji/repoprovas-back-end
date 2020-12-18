const { Professor } = require('../utils');

async function getAll(req, res) {
    let professors;
    try {
        professors = await Professor.getAllFromDB();
    }
    catch {
        return res.status(500).send('Erro interno no servidor');
    }

    return res.status(200).send(professors);
}

async function getCourseProfessors(req, res) {
    const { courseId } = req.params;

    if (!courseId) return res.status(400).send('Dados inválidos');

    let professors;
    try {
        professors = await Professor.getProfessorsByCourseId(courseId);
    }
    catch {
        return res.status(500).send('Erro interno no servidor');
    }

    return res.status(200).send(professors);
}

module.exports = { getCourseProfessors, getAll }