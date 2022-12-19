// importing the environmental variables
require('dotenv').config();


// Imports
const express = require('express');
const cors = require('cors');


// Routes Imports
const userRoutes = require('./routes/user-route');
const adminRoutes = require('./routes/admin-route');
const staffRoutes = require('./routes/staff-route');


// configuring our express app
const app = express();
app.use(cors());
app.use(express.json());


// configuring routes
app.use(userRoutes);
app.use(adminRoutes);
app.use(staffRoutes);


// Starting our server app
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log("Server is listening to port 4000....");
});