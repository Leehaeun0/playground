const _ = require('lodash'); // 이건 node.js 만 가능 브라우저 안됌
// import _ from 'lodash'; // 이건 es문법 브라우저 node.js 둘다 가능


const todos = [
  { id: 1, content: 'HTML', completed: false},
  { id: 2, content: 'CSS', completed: true},
  { id: 3, content: 'Javascript', completed: false}
]

// const _todos = _.cloneDeep(todos);
const _todos = todos.slice();
console.log(_todos === todos); // 이건 얕은 복사도 마찬가지다.
console.log(_todos[0] === todos[0]); // 이건 깊은 복사만 false다. 얕은복사는 true



const arr = [1, 2, 3];


// es5
const copy1 = arr.slice();
// es6
const copy2 = [...arr];

function sum() {
  console.log(arguments);
  const arr = Array.prototype.slice.call(arguments);
  return arr.reduce((acc, cur) => acc + cur);
}

console.log(sum(1, 2, 3, 4))


console.log([1,[2,3,[4,[5]]]].falt); // 인피니티 써라



todos.sort((a, b) => a.id > b.id);


[1, 2, 3].forEach(console.log);