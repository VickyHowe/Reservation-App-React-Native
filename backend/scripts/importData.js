require('dotenv').config(); 
const fs = require("fs");
const path = require("path"); 
const roomModel = require("../models/room");
const connectDB = require('../config/db'); 


/**
 * Import Data Function
 * Read the JSON file
 * Insert rooms into MongoDB
 */


const importData = async () => {
    try {
        const dataPath = path.join(__dirname, '../data/hostelData.json');
        const jsonData = fs.readFileSync(dataPath, 'utf-8');
        const hostelData = JSON.parse(jsonData);

        await roomModel.insertMany(hostelData.hostel.rooms);
        console.log("Data Imported Successfully!");
        process.exit();
    } catch (error) {
        console.error(`Error importing data: ${error.message}`);
        process.exit(1);
    }
};

/**
 * Connect to Database
 * Import Data
 */
const run = async () => {
    await connectDB(); 
    await importData(); 
};

/**
 * Execute run 
 */
run();