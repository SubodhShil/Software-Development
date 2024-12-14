const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 5500;

app.use(express.json());
app.use(cookieParser());
const myMiddleware = (req, res, next) => {
    console.log('I am logging');
    next();
};

const adminRouter = express.Router();

adminRouter.get('/dashboard', (req, res) => {
    res.send("User Dashboard");
});

const loggerWrapper = (options) =>
    function (req, res, next) {
        if (options.log === true) {
            console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${req.protocol} - ${req.ip}`);
            next();
        }
        else {
            next(new Error("Logging is disabled. This is an error."));
        }
    };


adminRouter.use(loggerWrapper({ log: false }));
app.use('/admin', adminRouter);

app.get('/about', (req, res) => {
    res.send("About");
});

const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('There was an error');
};

adminRouter.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/ running`);
});