const arr = [1, 2];
arr[-1] = 100;
arr.foo = 100;
arr['bar'] = 100;
console.log(arr);
console.log(arr[-2])