const { Professor } = require('../utils');

async function getCourseProfessors(req, res) {
    const { courseId } = req.params;

    const professors = await Professor.getProfessorsByCourseId(courseId);

    return res.status(200).send(professors);
}

module.exports = { getCourseProfessors }