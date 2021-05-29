require("dotenv").config();
const mysql = require("mysql2");

// create the connection to database
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
conn.connect((err) => {
    if (err) {
        console.log(
            "CONNECTION ERROR!! Connection error message: " + err.message
        );
        return;
    }
    console.log("Oh yea, our connection is established!");
});

module.exports = conn;
