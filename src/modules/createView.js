// Add data
// ID, TASK, COMPLETED=FALSE
// Add items todo to my List
function addTodo(myList) {
  const input = document.querySelector('.input');
  input.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      const newTodo = {
        description: input.value,
        completed: false,
        index: myList.length + 1,
      };
      myList.push(newTodo);
      createList(myList);
      input.value = '';
    }
  });
}

