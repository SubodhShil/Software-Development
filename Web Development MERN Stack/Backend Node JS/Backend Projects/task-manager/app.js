const express = require('express');
const tasks = require('./routes/tasks');
const app = express();


app.use('api/v1/tasks', tasks);

// routes
app.get('/api/v1/');
app.post('/api/v1/');
app.get('/api/v1/');

app.get('/', (req, res) => {
    res.status(200).send("Welcome to home page");
});


app.use('/api/v1/tasks', tasks);


app.get('/hello', (req, res) => {

});


const PORT = 3000;
app.listen(PORT, (req, res) => {
    console.log(`Running on: localhost:${PORT}`);
}); 