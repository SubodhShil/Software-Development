require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db/connect');
const Product = require('./models/product');
const Companies = require('./models/company');
const jsonProducts = require('./products.json');
const jsonCompanies = require('./companies.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Database connected successfully');

        // Clear existing data
        await Companies.deleteMany({});
        await Product.deleteMany({});

        // Insert companies
        const insertedCompanies = await Companies.insertMany(jsonCompanies);
        console.log(`Inserted ${insertedCompanies.length} companies`);

        // Insert products with ordered: false to continue on validation errors
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