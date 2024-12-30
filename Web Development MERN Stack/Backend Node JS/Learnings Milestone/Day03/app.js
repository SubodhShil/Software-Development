const express = require("express");
const app = express();
const path = require('path');
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 5700;
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/read', async (req, res) => {

    let users = await userModel.find();
    res.render("read", { users });
});

app.post('/create', async (req, res) => {
    let { name, email, image } = req.body;
    let createdUser = await userModel.create({
        name, email, image
    });
    res.redirect("/read");
});

app.get('/delete/:id', async (req, res) => {
    let users = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/read");
});

app.get('/edit/:id', async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.id });
    res.render("edit", { user });
});

app.post('/update/:id', async (req, res) => {
    let { name, email, image } = req.body;
    let user = await userModel.findOneAndUpdate({ _id: req.params.id }, { image, name, email }, { new: true });
    res.redirect("/read");
})

app.listen(PORT, () => {
    console.log(`The app is running on http://localhost:${PORT}`);
});
