// require the modules 

const fs = require("fs");
let filename = 'mytext.txt';
let fileContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

let textContent = "something good will happen in your life...";

fs.writeFile(filename, textContent, 'utf8', (err) => {
    if (err) return "Error occurred";
    console.log("Created file successfully");
});