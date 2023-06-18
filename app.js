const nunjucks = require('nunjucks');
const express = require('express');

var app = express();
const port = 8000;

nunjucks.configure('.', {
    autoescape: true,
    express: app
});

app.get('', (req, res) => {
    res.render('index.html', { message: 'Hello, World!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});