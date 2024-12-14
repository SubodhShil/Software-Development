const express = require('express');
const PORT = 5500;

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    /* console.log(res.headersSent);
    res.render('pages/about', {
        name: 'House of the death',
    });
    console.log(res.headersSent); */

    res.cookie('userName', "Subodh");
    res.end(); // sending response without any data
});

app.get('/test1', (req, res) => {
    res.format({
        'text/plain': () => {
            res.send("Hello");
        },
        'text/html': () => {
            res.render('pages/about', {
                name: 'Bangladesh'
            });
        },
        'application/json': () => {
            res.json({
                message: 'About'
            })
        },
        default: () => {
            res.sendStatus(406);
        }
    });

    // res.status(404).send("404 not found");
    // res.sendStatus(404);
});

app.get('/about', (req, res) => {
    res.set('Birth', 'Earth');
    res.send("Welcome to about route");
});

app.get('/test2', (req, res) => {
    // res.cookie('access', 'granted');
    // res.location('/test2');
    res.redirect('/about');
    res.status(200).send("Cookie added successfully");
});

app.listen(PORT, (req, res) => {
    console.log('Server is running');
});

