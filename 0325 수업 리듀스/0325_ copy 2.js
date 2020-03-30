const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {
  console.log(acc);
  acc[cur] = acc[cur] || 1;
  return acc;
}, {});


console.log(count); // { banana: 1, apple: 2, orange: 2 }