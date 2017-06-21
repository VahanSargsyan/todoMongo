const express = require('express');
const valid = require('validator');
const router = express.Router();
const data = require('./data');

const todos = {
    1: 'aaaaaaaaaaaaaa'
}


router.get('/', (req, res) => {
    // console.log(req.body);
    res.sendfile('./public/index.html')
})

router.post('/add' , (req, res) => {
    console.log('/addddd');
    res.redirect('/');
} )
router.post('/test', (req, res) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;