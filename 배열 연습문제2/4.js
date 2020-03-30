let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function addTodo(newTodo) {
  // todos = [newTodo, ...todos];
  todos = [newTodo].concat(todos); // 재할당을 통해 바꾸는 경우는 원시값처럼 객체의 주소가 위치가 바뀐다. 그러므로 바뀐것을 알수있다. push는 원본 주소가 안바뀐상태이므로 문제가 된다.
  // 객체가 바뀔때는 재할당을 통해 바꿔라.
}
// 두가지 가정이 생략되있다. 같은 프로퍼티 를 가진 객체일때. 아이디가 중복되지 않는 값을 가진 객체일때

addTodo({ id: 4, content: 'Test', completed: false });

console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/