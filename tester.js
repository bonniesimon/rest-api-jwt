"use strict";
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// Set up some mock user data
const user = new User({
name: "test_name",
password: "test_password",
email: "test_email"
});

// When the db is open, 'save' this data.
db.once('open', async function () {
// we're connected!
console.log("db opened... going to save the user");
let savedUser = await user.save();
console.log("printing savedUser");
console.log(savedUser);
db.close();
});
// Print that db connection has been closed.
db.once('close', function () {
console.log('close');
});