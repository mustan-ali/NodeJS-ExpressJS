const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    // res.sendFile(__dirname + '/about.html');
    res.sendFile('/about.html', { root: __dirname });    // Alternative method to sendFile using root option
});

app.get('/about-me', (req, res) => {
    res.redirect('/about'); // Sends a 302 status code and redirects to /about
});

// Middleware
app.use((req, res) => {     //Checks if the request matches any of the above routes and if not, sends a 404 page. (must be at the bottom)
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

/*
res.send() automatically sets the Content-Type and status code.
*/