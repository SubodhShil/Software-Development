"use strict";

/* 
    * node modules
*/

const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


/*  */

app.get('/login', (req, res) => {
    
});

const runServer = () => {
    try {
        // await ;
        app.listen(PORT, () => {
            console.log(`Running on: http://localhost:${PORT}/api-docs`)
        });
    }
    catch (err) {

    }
};

runServer();