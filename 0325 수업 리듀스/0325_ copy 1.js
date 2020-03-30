const values = [1, 2, 3, 4, 5];

// const max = values.reduce((acc, cur, i, arr) => acc < cur ? cur : 0, 0);
const max = values.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
console.log(max); // 5

// console.log( values.length ? Math.max(...values) : 0);
// console.log( values.length ? Math.max.apply(null, values) : 0); // es5 