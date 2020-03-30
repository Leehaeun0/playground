const values = [1, 2, 3, 4, 5, 6];


const average = values.reduce((acc, cur, i, arr) => {
  // acc + cur
  // if (values.length === i) {
  //   return (acc + cur)/values.length
  // }
  return arr.length - 1 === i ? (acc + cur) / arr.length : acc + cur;
 }, 0);

const average = values.reduce((acc, cur, i, { length }) => {
  return length - 1 === i ? (acc + cur) / length : acc + cur;
 }, 0);


console.log(average); // 3.5