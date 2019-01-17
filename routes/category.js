const express = require('express');
const router = express.Router();
var db = require('../models/database');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/category',(req,res)=>{
    db.any('SELECT * FROM categories')
    .then((data)=>{
        res.render('category',{
            cat : data
        })
    });
});

router.post('/category', (req,res)=>{

    var category = req.body.category;

    db.none("INSERT INTO categories (name) VALUES ($1)", [category])
    .then((data)=>{
        res.render('category', {
            cat : data
        })
    });


});
module.exports = router;