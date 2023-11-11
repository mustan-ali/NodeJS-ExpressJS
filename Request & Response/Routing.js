const http = require('http');
const PORT = process.env.PORT || 3000;
const fs = require('fs');


const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    let path = './Request & Response/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-me':       //redirecting to about page
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            res.end(data);
        }
    });
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*
----Status Codes----
200 - OK
301 - Resource moved
404 - Not Found
500 - Internal Server Error

100 Range - Informational responses
200 Range - Success codes
300 Range - Codes for redirects
400 Range - User or client error codes
500 Range - Server error codes
*/
