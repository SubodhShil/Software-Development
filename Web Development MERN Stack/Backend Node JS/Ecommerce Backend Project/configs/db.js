import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb connected: ${mongoose.connection.host}`.green.bold);
    } catch (error) {
        console.log(`Mongodb Error: ${error}`.bgRed.white);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;
