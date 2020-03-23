let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 원본배열 유지하면서 새 배열 생성
function removeTodo(id) {
 return todos.filter( todo => todo.id === id );
}

const rt = removeTodo(2);
console.log(rt);


// 원본 todos를 재할당으로 변경
function removeTodo2(id) {
  todos = todos.filter( todo => todo.id === id );
 } 

removeTodo2(2);
console.log(todos);

/* 예상 결과
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/