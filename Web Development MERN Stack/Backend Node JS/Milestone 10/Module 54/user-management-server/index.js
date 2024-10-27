const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Ema", email: "ema@example.com" },
    { id: 3, name: "Rony", email: "rony@example.com" }
]

app.get('/', (req, res) => {
    res.send("User management server is running");
});

app.post('/users', (req, res) => {
    console.log("POST api hitting");
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});