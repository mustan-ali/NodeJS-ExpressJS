const express = require('express');
const app = express();
const morgan = require('morgan');   // 3rd party middleware for logging information about the request to the console
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(__dirname + '/public'));    // Serves static files (built-in middleware)
app.use(morgan('dev'));     // Logs information about the request to the console (3rd party middleware)

app.use((req, res, next) => {
    console.log('Middleware 1');
    console.log('Host:', req.hostname);
    console.log('Path:', req.path);
    console.log('Method:', req.method);
    next();     // Calls the next middleware function in the stack
});

app.use((req, res, next) => {
    console.log('Middleware 2');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use((req, res) => {
    res.status(404);
    res.send('404 Page Not Found')
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});


/*
Middleware functions are functions that run between the request and response of a server. They can be used to log information about a request, to modify the request or response, to end the request-response cycle, or to call the next middleware function in the stack.

next() is a function that is passed to the middleware function as an argument. When invoked, it calls the next middleware function in the stack. (If next() is not called, the request will be left hanging.)

*/