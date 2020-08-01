const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ocvwlym0zv3tcn68.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "jnqfhrcbvt4k9jnm",
    password: "g3x7nnwah275s2tp",
    database: "ddisrve2do16jz8o"
});

module.exports = pool;
