const fs = require("fs");
const filename = "./mytext.txt";
fs.unlink(filename, (err) => {
    if (err) return "error occurred";
    console.log("File deleted successfully");
});