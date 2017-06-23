const express = require('express');
const valid = require('validator');
const router = express.Router();
const data = require('./data');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
router.use(cookieParser());
mongoose.connect('mongodb://localhost:27017/todos');

const Schema = mongoose.Schema;
const TaskScheme = new Schema({
    task: String, 
    cookie: String, 
    //created: Date, 
    // updated: Date
});
mongoose.model('Task', TaskScheme);
const Task = mongoose.model('Task');

const getDB = (req, collection, id) => {
    console.log('get deb id is', id)
    collection.find({cookie: 'fakeId'})
        .then(result => {
            // console.log('respons is - '+result);
            req.json(result);
        })
        .catch(err =>  console.log(err))
}    

const insertDB = (el, collection ) =>  collection.create(el);
const updateDB = (el, id, collection) =>  collection.update({_id: id}, {$set: {task : el}})
const deleteDB = (id, collection) =>  collection.remove({_id : id})


router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
   
});

router.post('/api/todos', (req, res) => {
    console.log('before', req.cookies)
    
    req.body.cookie = `fakeId`;
    insertDB(req.body, Task)
        .then(() => getDB(res, Task, req.cookies.id))
        .catch(err => console.log(err))
})
router.get('/api/todos', (req, res) => {
    getDB(res, Task, req.cookies);
})
router.delete('/api/todos/:id', (req, res) => {
    const {id} = req.params;
    deleteDB(id, Task)
        .then(() => getDB(res, Task, req.cookies.id))
})

router.put('/api/todos/:id', (req, res) => {
    const {id} = req.params;
    const {task} = req.body;
    updateDB(task, id, Task)
        .then(() => getDB(res, Task, req.cookies));

    
})


module.exports = router;