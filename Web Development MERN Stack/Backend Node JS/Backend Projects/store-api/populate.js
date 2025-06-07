require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db/connect');
const Product = require('./models/product');
const jsonProducts = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Database connected successfully');
        const totalProducts = jsonProducts.length;
        console.log(`Total products in JSON file: ${totalProducts}`);

        await Product.deleteMany({});

        try {
            const insertedProducts = await Product.insertMany(jsonProducts, { ordered: false });
            console.log(`Inserted ${insertedProducts.length} products`);
        } catch (insertError) {
            console.error('Product insertion errors:', insertError.write?.errors || insertError);
            console.log(`Inserted ${insertError.insertedDocs?.length || 0} products despite errors`);
        }

        console.log('Data insertion completed');
        await mongoose.connection.close();
    } catch (error) {
        console.error('Error during population:', error);
        await mongoose.connection.close();
        process.exit(1);
    }
};

start();