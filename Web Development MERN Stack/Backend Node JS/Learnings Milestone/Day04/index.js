const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const express = require("express");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
    res.cookie("name", "Subodh");
    res.send("Done");
});

app.get("/encryption", (req, res) => {
    const saltRounds = 10;
    const myPlaintextPassword = "lovePassword"
});

app.get("/token", (req, res) => {
    let token = jwt.sign({ email: 'subodh@gmail.com' }, "secret");
    res.cookie("token", token);
    res.send("Token Generated");
});

app.get("/readtoken", (req, res) => {
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
    res.send("You are user");
});

app.get("/read", (req, res) => {
    console.log(req.cookies);
    res.send("Read the page");
});

app.listen(3000, () => {
    console.log('Server is running');
});
