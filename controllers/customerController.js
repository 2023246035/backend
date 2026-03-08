const customerModel = require("../models/customerModel");

exports.createCustomer = (req, res) => {
    customerModel.createCustomer(req.body, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({
            message: "Customer created",
            id: result.insertId
        });
    });
};

exports.getCustomers = (req, res) => {

    console.log("API called");

    customerModel.getCustomers((err, result) => {

        console.log("Query finished");

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });
};