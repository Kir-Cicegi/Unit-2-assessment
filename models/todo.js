const todos = [];

module.exports = {
    getAll,
    create,
    deleteItem,
}

function getAll() {
    return todos;
}

function create(item) {
    item.id = Date.now() % 1000000;
    item.done = false;
    todos.push(item);
}

function deleteItem(id) {
    todos.splice(todos.findIndex(t => t.id === parseInt(id)), 1);
}