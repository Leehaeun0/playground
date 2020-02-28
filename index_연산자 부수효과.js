var x = 1;
x += 1; // 할당연산자 부수효과 있음
console.log(x);

let y = 1;
console.log(-y);
console.log(y); // 부수효과 없음

let a = 1;
console.log(a++);
console.log(a); // 부수효과 있음

NaN === NaN; // NaN은 유일한 자기자신이 성립되지 않는 값