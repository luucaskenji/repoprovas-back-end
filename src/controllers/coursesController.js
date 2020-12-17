const { Course } = require("../utils");

async function getAll(req, res) {
    const courses = await Course.getCourses();

    res.status(200).send(courses);
}

module.exports = { getAll };