const http = require('http');
const PORT = process.env.PORT || 3000;
const fs = require('fs');


const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');                 //setting the content type of the response

    //Method 1 - using write() method
    // res.write('<head><link rel="stylesheet" href="#"></head>'); //adding a stylesheet to the response, used when we have multiple data to send
    // res.write('<h1>Hello World !</h1>');                        //write a response to the client
    // res.end();                                                  //ending the response

    //Method 2 - using file system module
    fs.readFile('./Request & Response/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.end(data);      //sending the data to the client as a response, used when we have single data to send
        }
    });
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*
Request Object - it contains all the information about the request that was made to the server.
Response Object - it contains all the information about what we're going to respond with.


----Content Types----
text/plain
text/html
application/json
*/ 