var express = require('express');
var router = express.Router();
var db = require('../models/database');
var bodyParser = require('body-parser');


router.use(bodyParser.urlendcoded({extended: false}));

router.get('/comment', (req,res)=>{
    res.render('comment');
});

router.post('/comment', (req,res)=>{
    var username = req.body.username;
    var body = req.body.body;
});


module.exports = router;