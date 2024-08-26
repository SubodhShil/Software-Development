const fs = require('fs');

// Create a Readable Stream from a file
const readableStream = fs.createReadStream('example.txt', 'utf8');

// Handle 'data' event: triggered when data is available
readableStream.on('data', (err, chunk) => {
    if(err) return err;
    console.log('Received chunk:', chunk);
});