const express = require('express');
const valid = require('validator');
const router = express.Router();
const data = require('./data');

const todos = [
            {
                task: 'do something-1'
                
            },
            {
                task: 'do something-2'
                
            },
            {
                task: 'do something-3'
                
            }

]


router.get('/', (req, res) => {
    // console.log(req.body);
    res.sendfile('./public/index.html')
});

router.post('/api/todos', (req, res) => {
    // console.log(req.body)
    todos.push(req.body);
    res.json(todos);
})
router.get('/api/todos', (req, res) => {
    res.json(todos);
})
router.delete('/api/todos/:id', (req, res) => {
    const {id} = req.params;
    todos.splice(id, 1);
    console.log(todos)
    res.json(todos);
})

router.put('/api/todos/:id', (req, res) => {
    const {id} = req.params;
    const {task} = req.body;
    console.log('ujhfdsasijfuiysdfc7hsduyfg')
    todos[id] = {task};
    console.log(todos)
    res.json(todos);
})


module.exports = router;