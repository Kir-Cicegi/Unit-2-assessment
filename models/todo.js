const todos = [];

module.exports = {
    getAll,
    create,
    deleteItem,
}

function getAll() {
    return todos;
}

function create(todo) {
    todo.id = Date.now() % 1000000;
    todo.done = false;
    todos.push(todo);
}

function deleteItem(id) {
    const x = todos.findIndex(t => t.id === parseInt(id));
    todos.splice(x, 1);
}