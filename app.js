// Setup and intialize express
const express = require('express');
const app = express();

// Running Database
var db = require('./models/database');

// Setup and initalize EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Setup Public folder
app.use(express.static('public'));


//Middleware for Routes
app.use(require('./routes/home'));
app.use(require('./routes/blogs'))


// Setting up server
app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

