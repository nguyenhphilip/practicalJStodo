var todo = {
  todoList: [],
  displayTodo: function(){
    if(this.todoList.length === 0){
      console.log("Your todo list is empty!");
    } else {
    for(var i = 0; i < this.todoList.length; i++){
      if(this.todoList[i].completed){
      console.log("[x]", this.todoList[i].item);
    } else {
      console.log("[ ]", this.todoList[i].item);
      }
    };
    }
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
