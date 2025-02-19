const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');


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


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const userDocument = await User.findOne({ email });
        if (!userDocument) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the provided password with the hashed password
        const passOk = await bcrypt.compare(password, userDocument.password);
        if (!passOk) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate a JWT token
        const jwtSecret = '43ffawfas4321vsflsjafosdfsafjsafjl';
        const token = jwt.sign(
            { email: userDocument.email, id: userDocument._id },
            jwtSecret
        );

        // Set the token in a cookie or send it in the response
        res.cookie('token', token, { httpOnly: true }).json({ message: 'Login successful', user: userDocument });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});

const PORT = 4000;
app.listen(PORT, (req, res) => {
    console.log('Running');
});