
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cookieParser = require("cookie-parser");
const userModel = require("./models/user");
const bcrypt = require('bcrypt');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(express.static("public"));
app.use(cookieParser());


const secretKey = "readygo";

app.get("/", (req, res) => {
    res.render("index");
});


app.post('/create', (req, res) => {
    let { username, email, password, age } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        if (err)
            return;

        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                username, email, password: hash, age,
            });

            let token = jwt.sign({ email }, secretKey);
            res.cookie("token", token);
            res.send(createdUser);
        })
    })
});


app.get('/login', (req, res) => {
    res.render("login");
});


app.post('/login', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    console.log(user);

    if (!user)
        return res.status(404).send("Something went wrong");

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: user.email }, secretKey);
            res.cookie("token", token);
            res.send("Welcome, you're logged in");
        }
        else
            res.send("No you can't login");
    });
});


app.get('/logout', (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
});