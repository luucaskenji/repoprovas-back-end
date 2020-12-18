const { dbConnection } = require('../../database');

class Exam {
    constructor(id, url, courseId, professorId, semester, type) {
        this.id = id;
        this.url = url;
        this.courseId = courseId;
        this.professorId = professorId;
        this.semester = semester;
        this.type = type;
    }

    static async insertExamIntoDB(url, courseId, professorId, semester, type) {
        const result = await dbConnection.query(`
            INSERT INTO exams (url, "courseId", "professorId", semester, type)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `,
        [url, courseId, professorId, semester, type]
        );

        const newExam = result.rows[0];

        return new Exam(newExam.id, newExam.url, newExam.courseId, newExam.professorId, newExam.semester, newExam.type);
    }
}

module.exports = { Exam };