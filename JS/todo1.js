var todo = { // create an object called todo
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
    var todo = this.todoList[position];
    todo.completed = !todo.completed;
    view.displayTodos();
  },
  toggleAll: function(){
    // if everything is true, mark false
    // otherwise mark true
    var totalTodos = this.todoList.length; //length of the todoList
    var completedTodos = 0; //create a counter
    for (var i = 0; i < totalTodos; i++){ //loop through the todoList
      if(this.todoList[i].completed){ // if the Todo is complete, then add 1 to the counter
        completedTodos++;
      }
    }

    if(totalTodos === completedTodos){ // now if the total number of todos is equal to completed
      for(var i = 0; i < totalTodos; i++){ // meaning they are all complete,
        this.todoList[i].completed = false; // make them all false
      }
    } else {
      for(var j = 0; j < totalTodos; j++){ // otherwise, make them true
        this.todoList[j].completed = true;
      }
    };
    view.displayTodos();
  },
  deleteTodo: function(position, todoText){
    this.todoList.splice(position, 1);
    view.displayTodos();
  },
}
// HANDLERS

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
  deleteTodo: function(){
    let deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todo.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },
  toggleCompleted: function(){
    let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
    todo.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  }
};

let view = { // object responsible for what the user sees
  displayTodos: function(){
      let todosUl = document.querySelector("ul");
      todosUl.innerHTML = '';

      for(let i = 0; i < todo.todoList.length; i++){
        let todoLi = document.createElement("li");
        if(!todo.todoList[i].completed){
          todoLi.innerHTML = "[ ] " + todo.todoList[i].todoText;
          todosUl.appendChild(todoLi);
        } else {
          todoLi.innerHTML = "[X] " + todo.todoList[i].todoText;
          todosUl.appendChild(todoLi);
        }
      }
  }
};
