const db = require("../config/db");

exports.createCustomer = (data, callback) => {

    const sql = "INSERT INTO customers (name,email,phone) VALUES (?,?,?)";

    db.query(sql, [data.name, data.email, data.phone], callback);
};

exports.getCustomers = (callback) => {

    const sql = "SELECT * FROM customers";

    db.query(sql, callback);
};
