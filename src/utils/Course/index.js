const { dbConnection } = require('../../database');

class Course {
    constructor(id, name, semester) {
        this.id = id;
        this.name = name;
        this.semester = semester;
    }

    static async getCourses() {
        const results = await dbConnection.query('SELECT * FROM courses');

        return results.rows.map(c => new Course(c.id, c.name, c.semester));
    }
}

module.exports = { Course };