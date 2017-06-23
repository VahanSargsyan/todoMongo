const express = require('express');
const router = require('./router');
const uuid = require('uuid/v1');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = 8080;
const app = express();

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use((req, res, next) => {
   
    if(!req.cookies.id) {
        res.cookie('id', uuid())
    } else {
        console.log('not need to cookie', req.cookies)
    }
    
    next()
   
    
    
});


app.use('/', router);
app.use('/', (req, res) => {
    console.log('my cookie is - ',req.cookies);
})

app.listen(PORT, () => {
    console.log(`run on ${PORT}`)
})