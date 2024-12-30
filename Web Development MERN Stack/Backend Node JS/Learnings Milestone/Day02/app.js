const express = require("express");
const app = express();
const usermodel = require("./usermodel");

const PORT = 5700;

app.get('/', (req, res) => {
    res.send("Working");
});

// C => Create 
app.get('/create', async (req, res) => {
    let createdUser = await usermodel.create({
        name: "Subodh",
        username: "sub003",
        email: "sub@gmail.com",
    });

    res.send(createdUser);
});

// R => Read 

app.get('/read', async (req, res) => {
    let users = await usermodel.find();
    res.send(users);

    // let singleUser = await usermodel.find({ username: "Subodh" });
    // res.send(singleUser);
})

// U => Update 
app.get('/update', async (req, res) => {

    let updatedUser = await usermodel.findOneAndUpdate({ username: "sub003" }, { username: "Subodh" }, { new: true });

    res.send(updatedUser);
});

// D => Delete
app.get('/delete', async (req, res) => {
    let deletedUser = await usermodel.findOneAndDelete({ username: "Subodh" });
    res.send(deletedUser);
})

app.listen(PORT, () => {
    console.log('Running good');
});