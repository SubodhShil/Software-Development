const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('GET request sent');
})

app.post('/', (req, res) => {
    res.send('POST request sent');
})

app.listen(3000, () => {
    console.log('App is running on port 3000');
});