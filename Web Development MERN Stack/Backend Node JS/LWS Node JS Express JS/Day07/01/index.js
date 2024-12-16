const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');
const PORT = 5500;

const app = express();

app.use('/', publicRouter);
app.use('/admin', adminRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});