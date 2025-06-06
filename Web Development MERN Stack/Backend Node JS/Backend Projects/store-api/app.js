const express = require('express');

require('dotenv').config();

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Store API</h1> <a href='/api/v1/products'>Products Route</a>");
})




const PORT = process.env.PORT || 3000;
const startDB = async () => {
    try {
        // await connectDB();
        app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));
    } catch (err) {
        console.log(`Database connection error:\n${err}`);
    }
};

startDB();