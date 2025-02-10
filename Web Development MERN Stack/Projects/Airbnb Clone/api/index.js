const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5174',
}));

app.get('/test', (req, res) => {
    res.json('Running');
});

app.post('/register,', (req, res) => {
    const { name, email, password } = req.body;
    res.json('Running');
});


const PORT = 4000;
app.listen(PORT, (req, res) => {
    console.log('Running');
});