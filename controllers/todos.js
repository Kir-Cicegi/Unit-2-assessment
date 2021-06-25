const Todo = require('../models/todo');

module.exports = {
    index,
    create,
    deleteToDo
}

function index(req, res) {
  res.render('index', {
    todos: Todo.getAll(),
    title: 'Unit 2 Assessment' 
  });
}

function create(req, res) {
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/');
  }

function deleteToDo(req, res) {
    Todo.deleteItem(req.params.id);
    res.redirect('/');
}