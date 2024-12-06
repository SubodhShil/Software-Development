const express = require("express");
const PORT = 5500;
const cookieParser = require('cookie-parser');
const handler = require('./handler');

const app = express();
app.use(express.json());
app.use(cookieParser());

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(`Base URL: ${req.baseUrl}`);
    console.log(`Original URL: ${req.originalUrl}`);
    res.send('We are in the admin dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', handler);

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Hello world post');
});

app.listen(PORT, () => {
    console.log(`Server is listening from port ${PORT}`);
});