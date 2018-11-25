// Version 4//
var todo = {
  todoList: [],
  displayTodo: function(){
    console.log("My todos:",this.todoList);
  },
  addTodo: function(item){
    this.todoList.push({ // - todo items as objects - represent more data
      item: item,
      completed: false // - in this case whether or not the task was completed
    });
    this.displayTodo();
  },
  changeTodo: function(position, todoText){
    if (position > this.todoList.length | position < 0) {
      console.log("The list isn't that big yet. Try starting with ", this.todoList.length);
    } else {
    this.todoList[position].todoText = todoText; //accessing objects inside of objects
    this.displayTodo();
    }
  },
  toggleCompleted: function(position){
    var todo = this.todoList[position];
    todo.completed = !todo.completed;
    this.displayTodo();
  },
  deleteTodo: function(position, item){
    this.todoList.splice(position, 1);
    this.displayTodo();
  },
}
