"use strict";

/**
 *  node modules
*/
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config();

/**
 * custom modules 
 */
const login = require('./src/routes/login.route');


const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


/**
 * Template Engine (EJS) setup
 */

app.set('view engine', 'ejs');

// static files will server from this location 
app.use(express.static(`${__dirname}/public`));


/**
 * Enable cors and cookie parser 
 */
app.use(cors()).use(cookieParser());


app.get('/', (req, res) => {
    res.status(200).send("Welcome to the home page!!");
});

/**
 *  Login page 
 */
app.use('/login', login);


const runServer = () => {
    try {
        // await ;
        app.listen(PORT, () => {
            console.log(`Running on: http://localhost:${PORT}/`)
        });
    }
    catch (err) {
        res.status(404).send(err);
    }
};

runServer();