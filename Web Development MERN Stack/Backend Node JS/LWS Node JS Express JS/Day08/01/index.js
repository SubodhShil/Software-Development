const express = require('express');
const multer = require('multer');
const PORT = 5700;

// upload folder location
const UPLOADS_FOLDER = "./uploads/";

let upload = multer({
    dest: UPLOADS_FOLDER,
    limits: {
        fileSize: 1000000,
    },
    fileFilter: (req, file, cb) => {
        console.log(file);
    }, 

});

const app = express();

/* 
    upload.single() => for uploading single file 
    upload.array() => for uploading multiple file at a time
*/

/* upload from multiple fields */

/* app.post('/', upload.fields([
    { name: "avatar", maxCount: 2 },
    { name: "gallery", maxCount: 3 }
]), (req, res) => {
    res.status(200).send("File upload successful.");
}); */

app.post('/', upload.single("avatar"), (req, res) => {
    res.send("File uploaded");
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});
