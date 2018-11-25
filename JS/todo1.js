// Version 3 //
var todo = {
  todoList: [],
  displayTodo: function(){
    console.log("My todos:",this.todoList);
  },
  addTodo: function(item){
    this.todoList.push(item);
    this.displayTodo();
  },
  changeTodo: function(position, item){
    if (position > this.todoList.length | position < 0) {
      console.log("The list isn't that big yet. Try starting with ", this.todoList.length);
    } else {
    this.todoList[position] = item;
    this.displayTodo();
    }
  },
  deleteTodo: function(position, item){
    this.todoList.splice(position, 1);
    this.displayTodo();
  },
}
