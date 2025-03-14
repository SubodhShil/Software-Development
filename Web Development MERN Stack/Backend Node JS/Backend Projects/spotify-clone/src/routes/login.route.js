"use strict";

const { login } = require('../controllers/login.controller');


/**
 * Router setup 
*/

const router = require('express').Router();

router.get('/', login);

module.exports = router;