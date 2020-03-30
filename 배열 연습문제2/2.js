const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getValues2(key) { // (key)여기 키는 식별자 todo.key는 프로퍼티 키
  return todos.map(todo => todo[key]);
}
const getValues = key => (todos.map (todo => todo[key]));

console.log(getValues('id')); // [3, 2, 1]
console.log(getValues('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues('completed')); // [false, true, false]

console.log(getValues2('id')); // [3, 2, 1]
console.log(getValues2('content')); // ['HTML', 'CSS', 'Javascript']
console.log(getValues2('completed')); // [false, true, false]