const db = require("../config/db");

exports.createCustomer = (data, callback) => {

    const sql = "INSERT INTO customers (name,email,phone) VALUES (?,?,?)";

    db.query(sql, [data.name, data.email, data.phone], (err, result) => {

        if (err) {
            console.log("MYSQL ERROR:", err);
        }

        callback(err, result);
    });
};

exports.getCustomers = (callback) => {

    const sql = "SELECT * FROM customers";

    db.query(sql, (err, result) => {

        if (err) {
            console.log("MYSQL ERROR:", err);
        }

        callback(err, result);
    });
};