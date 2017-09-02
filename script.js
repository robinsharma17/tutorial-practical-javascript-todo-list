var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length > 0) {
      console.log('My Todos:')
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x) " + this.todos[i].todoText);
        } else if (this.todos[i].completed === false) {
          console.log("( ) " + this.todos[i].todoText);
        }
      }
    } else {
        console.log("Your todo list is empty!");
    }
  },
  addTodo: function(addTodoText) {
    this.todos.push({
      todoText: addTodoText,
      completed: false
      }
    );
    this.displayTodos();
  },
  changeTodo: function(position, newTodoText) {
    // .todoText is accessing property within that todo object
    this.todos[position].todoText = newTodoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    // .completed is referencing the completed property
    // in the todos list
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true)
      completedTodos++;
    }
    // If all completed todos are true, make them all false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } // If all completed todos are true, make them all false
      else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    // Displays todos after they have been toggled
    this.displayTodos();
  }
  
};