let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function countCompletedTodos() {
  return todos.filter( todo => todo.completed ).length;
}

console.log(countCompletedTodos()); // 1