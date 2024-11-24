require('dotenv').config({
    path: './.env'
  });
const express = require("express");
const connectDB = require('./config/db');
const path = require('path');
const router = express.Router();

/**
 * General Setup
 */
const app = express();
const port = process.env.PORT || 5000;


/**
 * Connect to Database
 */
connectDB();


/**
 * Connect Paths
 */

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log(`server running on port ${port}`));

/**
 * Routes
 */
app.use("/api/rooms", require("./routes/roomsRoute"));
