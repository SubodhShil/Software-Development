const express = require("express");
const app = express();
const PORT = 3000;

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(`Base URL: ${req.baseUrl}\nOriginal URL: ${req.originalUrl}`);
    res.send("You're in the admin dashboard");
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.baseUrl === ""); // doesn't has a base URL
    console.log(req.originalUrl);
    res.send(`It is user ${id}`);
});

app.listen(PORT, () => {
    console.log(`Listening from http://localhost:${PORT}`);
});
