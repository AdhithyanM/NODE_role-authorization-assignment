const express = require('express');
const router = express.Router();

// Middleware Imports
const authorize = require('../middlewares/authorization-middleware');


// Controller Imports
const { adminPage } = require('../controller/admin-controller');


const accessLevels = ["admin", "superadmin"];


router.get('/admin', authorize(accessLevels), adminPage);


module.exports = router;