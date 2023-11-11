const fs = require('fs');

const readStream = fs.createReadStream('./NodeJS Basics/sample.txt');
const writeStream = fs.createWriteStream('./NodeJS Basics/sample2.txt');

//ReadStream is used to read data from a file and send it to the client in chunks (instead of waiting for the whole file to be read).
readStream.on('data', (chunk) => {
    console.log('-----NEW CHUNK-----');
    console.log(chunk);
    // console.log(chunk.toString()); use this to print the data in string format
});

//WriteStream is used to write data to a file in chunks (instead of waiting for the whole file to be written).
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

//Piping is used to read data from a file and write it to another file.
readStream.pipe(writeStream);