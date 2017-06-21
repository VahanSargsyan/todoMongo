const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const PORT = 8080;
const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/', router);
app.use('/add', router)

app.listen(PORT, () => {
    console.log(`run on ${PORT}`)
})