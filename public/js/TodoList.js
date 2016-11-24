var TodoList = function () {
    this.items = [];

    this.addTodo = function(todo) {
        this.items.push(todo);
    };

    this.setItemAsDone = function(index) {
        this.items[index].done = true;
    };

    this.setItemAsNotDone = function(index) {
        this.items[index].done = false;
    };

    this.removeItem = function(index) {
        this.items.splice(index, 1);
    };

    this.getItem = function(index) {
        return this.items[index];
    };

    this.getAllItems = function() {
        return this.items;
    }
};