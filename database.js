const Pool = require('pg').Pool;
const pool = new Pool({
 user: "postgres",
 password: "sudo",
 database: "hw4",
 host: "localhost",
 port: "5432"
});
module.exports = pool;