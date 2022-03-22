import './style.css';
// import './debug.css';

const list = document.querySelector('.todo-items');

const myList = [
  {
    description: 'Wash BMW at 3pm',
    completed: false,
    index: 1,
  },
  {
    description: 'Watch news at 21pm',
    completed: false,
    index: 2,
  },
  {
    description: 'Call mom at 22pm',
    completed: false,
    index: 3,
  },
];

let todoList = '';

myList.forEach((item) => {
  todoList += `<li class="todo-li"><input type="checkbox">
    <p class="todo-edit" id="${item.index}">${item.description}</p>
    <i class="fas fa-trash icon trash"></i>
    <i class="fas fa-ellipsis-v icon drag"></i>
  </li>`;
});

list.innerHTML = todoList;
