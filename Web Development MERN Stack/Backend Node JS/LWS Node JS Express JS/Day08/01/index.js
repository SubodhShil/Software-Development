const express = require('express');
const multer = require('multer');
const path = require('path');
const PORT = 5700;

// upload folder location
const UPLOADS_FOLDER = "./uploads/";

// define the storage 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
        const fileExtension = path.extname(file.originalname);
        const fileName = file.originalname
            .replace(fileExtension, "")
            .toLowerCase()
            .split(" ")
            .join("-") + "-" + Date.now();
        cb(null, fileName + fileExtension);
    },
});


let upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000,
    },
    fileFilter: (req, file, cb) => {
        console.log(file);
        if (file.fieldname === "imageField") {
            if (
                file.mimetype === 'image/png' ||
                file.mimetype === 'image/jpg' ||
                file.mimetype === 'image/jpeg'
            ) {
                cb(null, true);
            }
            else {
                cb(new Error(`Only .jpg .png or .jpeg format allowed!`));
            }
        }
        else if (file.fieldname === "docField") {
            if (file.mimetype === 'application/pdf') {
                cb(null, true);
            }
            else {
                cb(new Error(`Only .pdf files are allowed! But you've uploaded ${file.mimetype} file.`));
            }
        }
        else {
            cb(new Error("Only .jpg .png or .jpeg format allowed!"));
        }
    },
});

const app = express();

/* 
    upload.single() => for uploading single file from a single field
    upload.array() => for uploading multiple file from a single field
*/

// single file upload
/* app.post('/', upload.single("avatar"), (req, res) => {
    res.send("File uploaded");
}); */

// upload from multiple fields 
app.post('/', upload.fields([
    { name: "imageField", maxCount: 2 },
    { name: "docField", maxCount: 3 }
]), (req, res) => {
    res.status(200).send("File upload successful.");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});
