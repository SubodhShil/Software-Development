const express = require('express');

const app = express();
const admin = express();

app.locals.title = 'My Application';

const handle = require('./handle')
const PORT = 3000;

// app.enable('case sensitive routing');
// app.disable('case sensitive routing');

admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath);
    res.send('Welcome to admin dashboard');
});

app.param('id', (req, res, next, userId) => {

    // Invalid user id handling
    if (isNaN(userId) || userId < 1 || userId > 100) {
        return res.status(404).json({
            error: "Invalid id",
            message: `The user id ${userId} doesn't contain in the server`
        })
    }

    const user = {
        id: userId,
        name: `User ${userId}`,
    };

    req.userDetails = user;
    next();
});

app.get('/user/:id', (req, res) => {
    const userId = req.userDetails.id;
    console.log(userId);
    res.send(`I am user ${userId}`);
});

/* Template engine */
app.set('view engine', 'ejs');

const complexRoute = '/about/vision/roadmap';
app.route(complexRoute)
    .get((req, res) => {
        // res.send(`GET request from ${complexRoute}`);
        res.render('pages/about');
    })
    .post((req, res) => {
        res.send(`POST request from ${complexRoute}`);
    })
    .put((req, res) => {
        res.send(`PUT request from ${complexRoute}`);
    })

app.get('/', handle);
app.use('/admin', admin);

app.all('/', (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Listening from ${PORT}`);
});


