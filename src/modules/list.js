// Class of Todos with list of todos
export default class listTodo {
  constructor() {
    this.list = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];
  }

  addTodo(todo) {
    todo.completed = false;
    todo.index = this.list.length + 1;
    this.list.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  // remove todo & update index +1
  removeTodo(index) {
    this.list = this.list.filter((item) => item.index !== index);
    this.list = this.list.map((item, i) => ({ ...item, index: i + 1 }));
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  updateTodo(todo) {
    this.list[todo.index - 1] = todo;
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  clearCompleted() {
    this.list = this.list.filter((item) => !item.completed);
    this.list = this.list.map((item, i) => ({ ...item, index: i + 1 }));
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }
}
