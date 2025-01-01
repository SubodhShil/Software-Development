const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
});