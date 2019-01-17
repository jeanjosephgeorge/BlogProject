var express = require('express');
var router = express.Router();
var db = require('../models/database');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));


router.get('/author', (req,res)=>{
    db.any('SELECT * FROM author')
    .then((data)=>{
        res.render('author',{
            author: data
        })
    });
});

router.post('/author', (req,res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var bio = req.body.bio;
    var imagepath = req.body.imagepath;

    db.none("INSERT INTO author (fname, lname, bio, imagepath) VALUES ($1, $2, $3, $4)", [fname, lname, bio, imagepath])
    .then((data)=>{
        res.render('author',{
            author: data
        })
    });
});


module.exports = router;

