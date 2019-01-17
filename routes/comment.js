var express = require('express');
var router = express.Router();
var db = require('../models/database');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/comment', (req,res)=>{
    db.any('SELECT * FROM comments')
    .then((data)=>{
        res.render('comment',{
            comment: data
        });
    });
});

router.post('/comment', (req,res)=>{
    var username = req.body.username;
    var body = req.body.body;

    // Need to revisit to ensure that this code is stored into comments DB and that it pulls onto EJS file
    db.none("INSERT INTO comments (username, post_date, body) VALUES ($1, CURRENT_DATE, $2)", [username, body])
    .then((data)=>{
        res.render('comment', {
            commment: data
        });
    });
});

module.exports = router;