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
    res.end();
});

app.listen(PORT, (req, res) => {
    console.log('Server is running');
});

