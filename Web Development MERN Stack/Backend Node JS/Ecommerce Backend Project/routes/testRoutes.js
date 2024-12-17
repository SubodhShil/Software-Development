const express = require('express');
const { testController } = require('../controllers/testController');

// import controller 

// Router object 
const router = express.Router();

// routes
router.get('test/', testController);

// export 
module.exports = router;