const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur, arr) => {
  // arr.indexOf(cur) !== i // 앞에 있으면 0 없으면 -1
  if (arr.indexOf(cur) === i) acc.push(cur); // 앞에 있으면 0 없으면 -1
  return acc
}, {});

con

// {banana: 1} => {banana: 1, apple: 1} => {banana: 1, apple: 1, orange: 1}
// => {banana: 1, apple: 1, orange: 2} => {banana: 1, apple: 2, orange: 2}

console.log(count); // { banana: 1, apple: 2, orange: 2 }

// indexOf - -1 or dindex
// includes ture/ false