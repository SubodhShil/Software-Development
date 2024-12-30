const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(cookieParser());

app.get("/", (req, res) => {
    res.cookie("name", "Subodh");
    res.send("Done");
});

app.get("/read", (req, res) => {
    console.log(req.cookies);
    res.send("Read the page");
});

app.listen(3000, () => {
    console.log('Server is running');
});
