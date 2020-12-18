const { Professor } = require('../utils');

async function getCourseProfessors(req, res) {
    const { courseId } = req.params;

    let professors;
    try {
        professors = await Professor.getProfessorsByCourseId(courseId);
    }
    catch {
        return res.status(500).send('Erro interno no servidor');
    }

    return res.status(200).send(professors);
}

module.exports = { getCourseProfessors }