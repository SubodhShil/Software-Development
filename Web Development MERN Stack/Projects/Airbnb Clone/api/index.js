const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('Running');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        const userDoc = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        console.log('working fine')
        res.json(userDoc);
    }
    catch (err) {
        res.status(422).json(err);
    }
});

const PORT = 4000;
app.listen(PORT, (req, res) => {
    console.log('Running');
});