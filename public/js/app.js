var list = new TodoList();

// Set default date to today
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
$('#task-deadline').val(new Date().toDateInputValue());

function addTask(name, importance, deadline) {
    // Add new task to the list
    var todo = new Todo(name, importance, deadline);
    list.addTodo(todo);

    // Update list
    var stars = '';
    for (var i = 0; i < todo.importance; i++) {
        stars += '<i class="fa fa-star"></i>';
    }

    var tr = $('<tr>');
    tr.append($('<td><i class="fa fa-square-o"></i></td>'));
    tr.append($('<td>' + todo.description + '</td>'));
    tr.append($('<td><i class="fa fa-chevron-down task-options"></i> </td>'));
    tr.append($('<td>' + stars + '</td>'));
    tr.append($('<td>' + todo.deadline + '</td>'));
    tr.append($('<td><i class="fa fa-check task-options-done"></i></td>'));
    tr.append($('<td><i class="fa fa-edit task-options-edit"></i></td>'));
    tr.append($('<td><i class="fa fa-trash task-options-delete"></i></td>'));

    $('#todo-items').append(tr);
}

function setTaskAsDone(index) {
    var item = list.getItem(index);

    console.log(item.description + ' marked as done');
    list.setItemAsDone(index);
}

function deleteTask(index) {
    // Delete task from list
    list.removeItem(index);
}

$('#add-task').on('click', function () {
    var name = $('#task-name').val();
    var importance = $('#task-importance').val();
    var deadline = $('#task-deadline').val();

    if (name === '' || name === null) {
        alert('name is empty');
        return;
    }

    addTask(name, importance, deadline);

    // Reset input fields
    resetNewTaskInputFields();
});

function resetNewTaskInputFields(){
    $('#task-name').val('');
    $('#task-importance').val('1');
    $('#task-deadline').val(new Date().toDateInputValue());
}

$('#task-name, #task-deadline').on('keyup', function (e) {
    if (e.keyCode == 13) {
        var name = $('#task-name').val();
        var importance = $('#task-importance').val();
        var deadline = $('#task-deadline').val();

        if (name === '' || name === null) {
            alert('name is empty');
            return;
        }

        addTask(name, importance, deadline);

        // Reset input fields
        resetNewTaskInputFields();
    }
});

$('body')
    .on('click', '.task-options-delete', function () {
    var rowIndex = $(this).closest('tr').index();

    // Remove item from the list
    $(this).parent().parent().remove();

    // Remove item from the TodoList
    deleteTask(rowIndex);
    })

    .on('click', '.task-options-done', function () {
        var rowIndex = $(this).closest('tr').index();

        // Set item as done
        setTaskAsDone(rowIndex);
    });