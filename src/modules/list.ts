export default class listTodo {
  list: any;
  constructor() {
    this.list = localStorage.getItem('todoList')
      ? JSON.parse(localStorage.getItem('todoList') || '')
      : [];
  }

  addTodo(todo: { description: string; completed?: boolean; index?: number }) {
    todo.completed = false;
    todo.index = this.list.length + 1;
    this.list.push(todo);
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  // remove todo & update index +1
  removeTodo(index: number) {
    this.list = this.list.filter(
      (item: { index: number }) => item.index !== index
    );
    this.list = this.list.map((item: any, i: number) => ({
      ...item,
      index: i + 1,
    }));
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  updateTodo(todo: { description: string; index: number }) {
    this.list[todo.index - 1] = todo;
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }

  clearCompleted() {
    this.list = this.list.filter((item: { completed: boolean }) => !item.completed);
    this.list = this.list.map((item: any, i: number) => ({
      ...item,
      index: i + 1,
    }));
    localStorage.setItem('todoList', JSON.stringify(this.list));
  }
}
