const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// console.log(todos[0]);
function render() {
  let html = '';

  // todos.forEach((todo)  => { html = [todos[0], todos[1], todos[2]]} );
  todos.forEach((todo, i, array)  => { 
    html += `<li id="${todo.id}">
    <label><input type="checkbox"${todo.completed ? ' checked' : '' }>${todo.content}</label>
</li>` 
  } );

  return html;
}
// array는 함수에사용하지 않으므로 생략가능
console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/



