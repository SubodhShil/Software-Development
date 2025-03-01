const express = require('express');
const tasks = require('./routes/tasks');
const app = express();


app.use(express.json());
app.use('api/v1/tasks', tasks);


app.get('/', (req, res) => {
    res.status(200).send("Welcome to home page");
});


// task route 
app.use('/api/v1/tasks', tasks);


app.get('/hello', (req, res) => {
    res.status(200).send("OK");
});


const PORT = 3000;
app.listen(PORT, (req, res) => {
    console.log(`Running on: localhost:${PORT}`);
}); 