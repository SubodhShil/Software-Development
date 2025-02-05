const express = require('express');
const userModel = require('./models/user');
const postModel = require('./models/post');
const app = express();


app.get("/", (req, res) => {
    res.send("Hey");
});


app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "Subodh",
        age: 33,
        email: "subodh@supermail.com"
    })

    res.send(user);
});


app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postData: "Hello everyone!",
        user: "67a313b1fc3138d184df0e8c",
    });

    let user = await userModel.findOne({ _id: "67a313b1fc3138d184df0e8c" });
    user.posts.push(post._id);
    await user.save();
    res.send({ post, user });

    // res.send("Nothing in the route");
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
});