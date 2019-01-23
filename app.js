// Setup and intialize express
const express = require('express');
const app = express();

// Running Database
var db = require('./models/database');

// Setup and initalize EJS and accessing views folder
app.set('view engine', 'ejs');
app.set('views', 'views');

// Setup Public folder to access CSS and Images
app.use(express.static('public'));


// Middleware for Routes Setup
app.use(require('./routes/home'));
app.use(require('./routes/blogs'));
app.use(require('./routes/author'));
app.use(require('./routes/comment'));
app.use(require('./routes/category'));


// Setting up server
app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

