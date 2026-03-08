const mysql = require("mysql2");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const db = mysql.createPool({
    host: "arpudhahost.in",
    user: "uhhkfcjm_rvdm",
    password: process.env.DB_PASSWORD,
    database: "uhhkfcjm_rvdm"
});

db.getConnection((err, connection) => {
    if (err) {
        console.log("Database connection failed", err);
    } else {
        console.log("Database connected successfully");
        connection.release();
    }
});

module.exports = db;