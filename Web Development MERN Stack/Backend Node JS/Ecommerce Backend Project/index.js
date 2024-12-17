const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

// dotenv config 
dotenv.config();


// REST object 
const app = express();


// Middlewares 
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


// Route 
app.get('', (req, res) => {
    return res.status(200).send(`<h1>Welcome guys!!</h1>`);
});


// Port 
const PORT = process.env.PORT || 5700;


// Listen or run the server
app.listen(PORT, () => {
    console.log('Server is running'.bgRed);
});