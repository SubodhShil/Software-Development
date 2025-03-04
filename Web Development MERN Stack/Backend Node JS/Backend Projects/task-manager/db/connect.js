const mongoose = require('mongoose');
require('dotenv').config();


// credentials and connection URL's  
const db_password = process.env.DB_PASS;
const connectionString = process.env.MONGODB_URI || `mongodb+srv://dakelester72:${db_password}@testcluster.lhgjz.mongodb.net/`;

// connect to the server 
const connectDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Connected successfully");
        return mongoose;
    } catch (err) {
        console.log("Something went wrong connecting to mongodb");
        throw err;
    }
};

module.exports = connectDB;