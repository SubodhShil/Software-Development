const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "A simple API",
    })
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`App is running on: http://localhost:${PORT}`);
});


