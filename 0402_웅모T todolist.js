let todos = [];
const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.inputTodo');

const render = () => {
  let html = '';
  todos.forEach(todo => {
    html += `<li id="${todo.id}">
      <input type="checkbox"${todo.completed ? ' checked' : ''}>
      <span>${todo.content}</span>
      <button class="remove">x</button>
    </li>`;
  });
  $todos.innerHTML = html;
};


const getTodos = () => {
  todos = [{
    id: 1,
    content: 'HTML',
    completed: false
  }, {
    id: 2,
    content: 'CSS',
    completed: true
  }, {
    id: 3,
    content: 'JS',
    completed: false
  }].sort((todo1, todo2) => (todo1.id < todo2.id ? 1 : (todo1.id > todo2.id ? -1 : 0)));
  render();
};


const toggleCompleted = id => {
  todos = todos.map(todo => (todo.id === +id ? { ...todo, completed: !todo.completed } : todo));
  console.log(todos);
  render();
};


const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);
  render();
};


const generateId = () => {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
};


window.onload = getTodos;


$todos.onchange = ({ target }) => {
  toggleCompleted(target.parentNode.id);
};


$inputTodo.onkeyup = e => {
  const content = $inputTodo.value;
  if (e.keyCode !== 13 || content.trim() === '') return;
  todos = [{
    id: generateId(),
    content,
    completed: false
  }, ...todos];
  render();
  $inputTodo.value = '';
};


$todos.onclick = e => {
  if (!e.target.matches('.todos > li > button.remove')) return;
  removeTodo(e.target.parentNode.id);
};