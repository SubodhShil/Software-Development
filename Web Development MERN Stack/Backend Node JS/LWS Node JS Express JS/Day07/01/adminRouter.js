const express = require('express');

const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
    res.send("Welcome to the admin dashboard");
});

adminRouter.get('/login', (req, res) => {
    res.send("Log in for dashboard");
});


module.exports = adminRouter;