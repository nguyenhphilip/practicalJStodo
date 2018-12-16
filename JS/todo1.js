var todo = { // create an object called todo
  todoList: [],
  displayTodos: function(){
    if(this.todoList.length === 0){
      console.log("Your todo list is empty!");
    } else {
      for(var i = 0; i < this.todoList.length; i++){
        if(this.todoList[i].completed){
          console.log("[x]", this.todoList[i].todoText);
        } else {
          console.log("[ ]", this.todoList[i].todoText);
        }
    };
    }
  },
  addTodo: function(todoText){ // add each todoItem as an object within the todolist

    this.todoList.push({ // - todo items as objects - represent more data
      todoText: todoText,
      completed: false // - in this case whether or not the task was completed
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    if (position > this.todoList.length | position < 0) {
      console.log("The list isn't that big yet. Try starting with ", this.todoList.length);
    } else {
    this.todoList[position].todoText = todoText; //accessing objects inside of objects
    this.displayTodos();
    }
  },
  toggleCompleted: function(position){
    var todo = this.todoList[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
  },
  deleteTodo: function(position, todoText){
    this.todoList.splice(position, 1);
    this.displayTodos();
  },
}
// button functionality

const displayTodosButton = document.getElementById("displayTodosBtn");

displayTodosButton.addEventListener('click', function(){
  todo.displayTodos();
});

// 2. run displayTodo method when someone clicks the displayTodo button
const toggleAllButton = document.getElementById("toggleAllBtn");

toggleAllButton.addEventListener('click', function(){
  todo.toggleAll();
})
