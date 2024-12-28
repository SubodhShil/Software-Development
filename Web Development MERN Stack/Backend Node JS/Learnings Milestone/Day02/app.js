const express = require("express");
const app = express();
const usermodel = require("./usermodel");

const PORT = 5700;

app.get('/', (req, res) => {
    res.send("Working");
});

app.get('/create', async (req, res) => {
    let createdUser = await usermodel.create({
        name: "Subodh",
        username: "sub003",
        email: "sub@gmail.com",
    });

    res.send(createdUser);
});

app.listen(PORT, () => {
    console.log('Running good');
})