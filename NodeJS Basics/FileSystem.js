const fs = require('fs');

//Create a folder
fs.mkdir('./NodeJS Basics/test', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Folder created');
    }
});


//Write to a file (create if not exist)
fs.writeFile('./NodeJS Basics/test.txt', 'Hello World!', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File created');
    }
});


//Append to a file
fs.appendFile('./NodeJS Basics/test.txt', ' Hello World Again!', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File appended');
    }
});


//Read a file
fs.readFile('./NodeJS Basics/test.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});


//Delete a file
fs.unlink('./NodeJS Basics/test.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File deleted');
    }
});

