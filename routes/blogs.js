var express = require('express');
var router = express.Router();
var db = require('../models/database');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/blogs',(req,res)=>{
    db.any('SELECT * FROM blog')
    .then((data)=>{
        res.render('blogs',{
            blog : data
        })
    });
});

router.post('/blogs', (req,res)=>{
    var title = req.body.title;
    var body = req.body.body;

    // Need to adjust code based on how comment.js code is adjusted to account for current_date using SQL command
    db.none("INSERT INTO blog (title, body) VALUES ($1, CURRENT_DATE, $2")

    
})
module.exports = router;