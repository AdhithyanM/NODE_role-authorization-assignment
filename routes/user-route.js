const express = require('express');
const router = express.Router();

const { getTestUsers } = require('../controller/user-controller');

/**
 * This endpoint will return all the test user details along with their jwt tokens.
 * access it using the link, http://localhost:4000/test-users
 * This doesn't require authorization.
 */
router.get("/test-users", getTestUsers);

module.exports = router;