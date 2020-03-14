const express = require('express');
const app = express();
require('dotenv').config();

/**
 * *Import Routes
 */
const authRoute = require('./routes/auth');


/**
 * *Route Middleware
 */

app.use('/api/user', authRoute);




app.listen(process.env.PORT, () => console.log("Server running at 3000"));