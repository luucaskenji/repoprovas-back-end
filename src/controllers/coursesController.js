const { Course } = require('../utils');

async function getAll(req, res) {
    let courses;
    try {
        courses = await Course.getCourses();
    }
    catch {
        return res.status(500).send('Erro interno no servidor');
    }

    return res.status(200).send(courses);
}

module.exports = { getAll };