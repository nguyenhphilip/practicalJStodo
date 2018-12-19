function runWithDebugger(func){
  debugger;
  func();
}
// TODO handles the creation and manipulation of data
let todo = { // create an object called todo
  todoList: [],
  addTodo: function(todoText){ // add each todoItem as an object within the todolist
    this.todoList.push({ // - todo items as objects - represent more data
      todoText: todoText,
      completed: false // - in this case whether or not the task was completed
    });
    view.displayTodos();
  },
  changeTodo: function(position, todoText){
    if (position > this.todoList.length | position < 0) {
      console.log("The list isn't that big yet. Try starting with ", this.todoList.length);
    } else {
    this.todoList[position].todoText = todoText; //accessing objects inside of objects
    view.displayTodos();
    }
  },
  toggleCompleted: function(position){
    let todo = this.todoList[position];
    todo.completed = !todo.completed;
    view.displayTodos();
  },
  toggleAll: function(){
    let totalTodos = this.todoList.length;
    let completedTodos = 0;

    this.todoList.forEach(function(todoItem){ // calls our anon function for each todoItem in todoList
      if(todoItem.completed){
        completedTodos++;
      }
    });

    this.todoList.forEach(function(todoItem){
      if(totalTodos === completedTodos){
        todoItem.completed = false;
      } else {
        todoItem.completed = true;
      };
    });
    view.displayTodos();
  },
  deleteTodo: function(position){
    this.todoList.splice(position, 1);
    view.displayTodos();
  },
}
// HANDLERS - these handle the physical

let handlers = { // we want this object to house the methods that "handle" all the onclick events
  toggleAll: function(){
    todo.toggleAll();
  },
  addTodo: function(){
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todo.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function(){
    let changeTodoTextInput = document.getElementById("changeTodoTextInput");
    let changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    todo.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoTextInput.value = "";
    changeTodoPositionInput.value = "";
  },
  deleteTodo: function(position){
    todo.deleteTodo(position);
  },
  toggleCompleted: function(){
    let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todo.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  }
};

let view = {
  displayTodos: function(){
    let todosUl = document.querySelector("ul");
    todosUl.innerHTML = '';
    todo.todoList.forEach(function(todoItem, position){
      let todoLi = document.createElement("li");
      let todoTextWithCompletion = "";
      if(!todoItem.completed){
        todoTextWithCompletion = "[ ]" + todoItem.todoText;
      } else {
        todoTextWithCompletion = "[X]" + todoItem.todoText;
      }
      todoLi.id = position;
      todoLi.innerHTML = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },
  createDeleteButton: function(){
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function(){
    let todosUl = document.querySelector("ul");
    todosUl.addEventListener('click', function(event){
      let elementClicked = event.target;
      if(elementClicked.className === "deleteButton"){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    })
  }
};

view.setUpEventListeners();
