const express = require('express');
const router = express.Router();



app.get('/', (req,res)=>{
    res.render('homepage')
})



module.exports = router;

