require('dotenv').config();
const { Pool } = require('pg');


const dbConnection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = { dbConnection };