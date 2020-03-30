const values = [1, [2, 3], 4, [5, 6]];

// const flatten = values.flat();

const flatten = values.reduce((pre, cur) => {
  // [], + 1 => [1]
  // [1], + [2, 3] => [1, 2, 3]
  // [1, 2, 3] + 4 => [1, 2, 3, 4]
  return pre = pre.concat(cur)
}, []);
// [1] => [1, 2, 3] => [1, 2, 3, 4] => [1, 2, 3, 4, 5, 6]

console.log(flatten);