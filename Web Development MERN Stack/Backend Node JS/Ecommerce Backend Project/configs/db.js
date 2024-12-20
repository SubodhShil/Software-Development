const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Mongodb Error ${error}`.bgRed.white);
    }
};


module.exports = connectDB;
