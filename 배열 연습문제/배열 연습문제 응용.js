let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  // return Math.max(...todos.map( todo => todo.id)); 목록 없으면 -인피니티 나옴
  return todos.length ? Math.max(...todos.map( todo => todo.id)) : 0;
}

console.log(getMaxId()); // 3
