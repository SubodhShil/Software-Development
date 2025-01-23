const express = require('express');
const userModel = require('./models/user');
const app = express();


app.get("/", (req, res) => {
    res.send("Hey");
});

app.get("/create", (req, res) => {
    let user = userModel.create({
        username: "Subodh",
        age: 33,
        email: "subodh@supermail.com"
    })

    res.send(user);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
});