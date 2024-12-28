const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const userModel = require('./models/user');
const connection = require('./config/db');

// express app 
const app = express();

app.set("view engine", "ejs");

dotenv.config();


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));


app.use((req, res, next) => {
    console.log('middleware 1');
    next();
});


const homeMiddleware = (req, res, next) => {
    console.log('This middleware is only available for home route');
    next();
};

app.get('/', homeMiddleware, (req, res) => {
    res.render('index');
});


app.post('/get-form-data', (req, res, next) => {
    console.log(req.body);
    res.send('Data received');
});

const PORT = process.env.PORT || 5300;

app.listen(PORT, () => {
    console.log(`Running at port http://localhost:${PORT}`);
});
