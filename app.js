// Setup and intialize express
const express = require('express');
const app = express();

// Setup and initalize EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Setup Public folder
app.use(express.static('public'));


//Middleware for Routes
app.use(require('./routes/home');




app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

