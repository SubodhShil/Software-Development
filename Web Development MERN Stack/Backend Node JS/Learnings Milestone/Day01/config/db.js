const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost/mytest')
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });

module.exports = connection;