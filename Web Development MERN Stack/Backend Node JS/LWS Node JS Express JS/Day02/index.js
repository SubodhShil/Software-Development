const express = require('express');

const app = express();
const admin = express();

app.locals.title = 'My Application';

const handle = require('./handle')
const PORT = 3000;

app.enable('case sensitive routing');
app.disable('case sensitive routing');

admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath);
    res.send('Welcome to admin dashboard');
});

app.param('id', (req, res, next, id) => {
    // Invalid user id handling
});

app.get('/user/:id', (req, res) => {
    res.send("I am user");
});

app.get('/', handle);
app.use('/admin', admin);

app.all('/', (req, res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Listening from ${PORT}`);
});


