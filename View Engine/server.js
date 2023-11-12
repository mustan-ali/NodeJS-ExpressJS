const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');  // Sets the view engine to ejs
app.set('views', __dirname + '/views');    // Sets the views directory to myviews (default is views)

app.get('/', (req, res) => {

    const blogsContent = [
        { title: 'My new website', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Welcome party!', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Web dev top tips', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ]

    res.render('index', { title: 'Home', blogs: blogsContent });    // Renders the index.ejs file in the views directory (extension is not required)
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blog/create', (req, res) => {
    res.render('create', { title: 'New Blog' });
});

// Middleware
app.use((req, res) => {
    res.status(404);
    res.render('404', { title: '404' });
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});


/*
Views are the files that are displayed to the client using the view engine like ejs, pug, etc. It is also used to pass data to front-end from the server.

Partials are the reusable components that are used in multiple views. For example, a header and footer can be a partial view.

<%= title %> is used to display the value of the title variable. 

<%- include('partials/header') %> is used to include a partial in a view. - is used to render html tags.

*/