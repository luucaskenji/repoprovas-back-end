const { dbConnection } = require('../../database');

class Exam {
    constructor(id, url, course, professor, semester, type) {
        this.id = id;
        this.url = url;
        this.course = course;
        this.professor = professor;
        this.semester = semester;
        this.type = type;
    }

    static async insertExamIntoDB(url, courseId, professorId, semester, type) {
        await dbConnection.query(`
            INSERT INTO exams (url, "courseId", "professorId", semester, type)
            VALUES ($1, $2, $3, $4, $5)
        `,
        [url, courseId, professorId, semester, type]
        );
    }

    static async getByProfessorId(professorId) {
        const results = await dbConnection.query(
            `
                SELECT exams.id, exams.url, courses.name AS course, exams.semester, exams.type, professors.name AS professor
                FROM exams
                JOIN courses ON courses.id = exams."courseId"
                JOIN professors ON professors.id = exams."professorId"
                WHERE "professorId" = $1;
            `,
            [professorId]
        );

        return results.rows.map(e => new Exam(e.id, e.url, e.course, e.professor, e.semester, e.type ))
    }
}

module.exports = { Exam };