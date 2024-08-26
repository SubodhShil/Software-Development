const http = require('http')
const fs = require('fs');
const PORT = 3000;

const myServer = http.createServer((req, res) => {

    // reading html file
    fs.readFile('./index.html', (err, data) => {
        if (err) return err;
        res.end(data)
    })

    // only sending text 
    // res.write("server running");
    // res.end();
});

myServer.listen(PORT, (err) => {
    if (err) return "Error occurred";
    console.log(`Error occurred on ${PORT}`);
})
