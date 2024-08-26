const fs = require("fs");

fs.readFile("./mytext.txt", 'utf8', (err, data) => {
    if (err) return "An error occurred";
    console.log("File content: ", data);
});

