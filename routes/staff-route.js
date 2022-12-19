const express = require('express');
const router = express.Router();

// Middleware Imports
const authorize = require('../middlewares/authorization-middleware');


// Controller Imports
const { staffPage } = require('../controller/staff-controller');


const accessLevels = ["staff", "admin", "superadmin"];


router.get('/staff', authorize(accessLevels), staffPage);


module.exports = router;