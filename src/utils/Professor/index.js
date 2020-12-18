const { dbConnection } = require("../../database");

class Professor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static async getProfessorsByCourseId(courseId) {
        const results = await dbConnection.query(`
            SELECT professors.name, professors.id
            FROM professors
            JOIN courses_professors ON professors.id = courses_professors."professorId"
            JOIN courses ON courses.id = courses_professors."courseId"
            WHERE "courseId" = $1
        `,
        [courseId]);

        return results.rows.map(p => new Professor(p.id, p.name));
    }
}

module.exports = { Professor };