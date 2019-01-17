var express = require('express');
var router = express.Router();
var db = require('../models/database');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/blogs',(req,res)=>{
    res.render('blogs')
})

router.post('/blogs', (req,res)=>{
    var title = req.body.title;
    var body = req.body.body;
    var author = req.body.author;
    var category = req.body.category;

    
})
module.exports = router;