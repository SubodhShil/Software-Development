const express = require('express');
require('dotenv').config();

const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.get("/", (req, res) => {
    res.send("<h1>Store API</h1> <a href='/api/v1/products'>Products Route</a>");
});

app.use('/api/v1/products', productsRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
const startDB = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));
    } catch (err) {
        console.log(`Database connection error:\n${err}`);
    }
};

startDB();