// if 문 > 삼항 조건 연산자로 변경하기
var num = 0;
var kind = ''; // 왜 썼었지?? undifined 초기화와 관련있나??

kind = num > 0 ? '양수' : (num < 0 ? '음수' : '영');

console.log(kind);

kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind);

kind = num > 0 ? '양수' : (num ? '음수' : '영');


// if (num > 0) {
//   kind = '양수';
// } else {
//   kind = '음수';
// }
// console.log(kind);


// var kind = num > 0 ? '양수' : '음수';

// num > 0 ? kind = '양수' : kind = '음수';

// console.log(kind);

// console.log(num > 0 ? kind = '양수' : kind = '음수');

// kind = !(kind = num > 0 ? '양수' : '음수') ? 0; // 내가쓴 엉터리 답
