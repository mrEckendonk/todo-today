import './style.css';
import listTodo from './modules/list';

const Todos = new listTodo();

// const myList = storageManager.getData();
const input = document.querySelector('.input');
input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 && input.value.trim() !== '') {
    const newTodo = {
      description: input.value,
    };
    input.value = '';
    Todos.addTodo(newTodo);
    renderList();
  }
});

// constuctor todoList
const renderList = () => {
  let todoList = '';
  Todos.list.forEach((item) => {
    todoList += `<li class="todo-li"><input type="checkbox">
          <p contenteditable="true" class="todo-edit" id="${item.index}">${item.description}</p>
          <i class="fas fa-trash icon trash"></i>
          <i class="fas fa-ellipsis-v icon drag"></i>
        </li>`;
  });
  document.querySelector('.todo-items').innerHTML = todoList;

  // add event listener to delete todo
  const trash = document.querySelectorAll('.trash');
  trash.forEach((item) => {
    item.addEventListener('click', (e) => {
      const index = e.target.parentNode.querySelector('.todo-edit').id;
      Todos.removeTodo(+index);
      renderList();
    });
  });

  // add event listener to edit todo
  const edit = document.querySelectorAll('.todo-edit');
  edit.forEach((item) => {
    item.addEventListener('blur', (e) => {
      const index = e.target.id;
      if (e.target.innerText.trim() === '') {
        e.target.innerText = Todos.list[+index - 1].description;
        return;
      }

      const description = e.target.innerText;
      const todo = {
        description,
        index,
      };
      Todos.updateTodo(todo);
      renderList();
    });
  });
};

renderList();