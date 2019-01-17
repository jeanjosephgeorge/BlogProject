var express = require('express');
var router = express.Router();
var db = require('../models/database');
var bodyParser = require('body-parser');

router.use(bodyParser.urlendcoded({extended: false}));

router.get('/author', (req,res)=>{
    res.render('author')
});

router.post('/author', (req,res)=>{
    var fname = req.body.fname;
    var lname = req.body.lname;
    var bio = req.body.bio;
    var imagepath = req.body.imagepath;
});


module.exports = router;

