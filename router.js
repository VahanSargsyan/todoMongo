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
    res.sendfile('./public/index.html')
});

router.post('/api/todos', (req, res) => {
    todos.push(req.body);
    res.json(todos);
})
router.get('/api/todos', (req, res) => {
    res.json(todos);
})
router.delete('/api/todos/:id', (req, res) => {
    const {id} = req.params;
    todos.splice(id, 1);
    res.json(todos);
})

router.put('/api/todos/:id', (req, res) => {
    const {id} = req.params;
    const {task} = req.body;
    todos[id] = {task};
    res.json(todos);
})


module.exports = router;