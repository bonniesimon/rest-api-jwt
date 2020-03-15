const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

/**
 * *Import Routes
 */
const authRoute = require('./routes/auth');



/**
 * *DB
 */
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, ()=> console.log("Connected to DB"));


/**
 * *MiddleWares
 */
app.use(express.json());

/**
 * *Route Middleware
 */

app.use('/api/user', authRoute);





app.listen(process.env.PORT, () => console.log("Server running at 3000"));