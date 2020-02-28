// 1
var done = true;
var message = '';

if (done) message = '완료'; // 원래 if문 일때의 사용법

// if문은 단축 평가로 대체 가능하다.
message = done && '완료';
console.log(message);

// 2
var elem = null; // html에 elem이 없는 경우를 가정한다.
console.log(elem.value); // TypeError: Cannot read property 'value' of null
console.log(elem && elem.value); // -> null

// 위를 if 문으로 바꿔보면 이러하다 (else 생략 가능)
if (elem) {
  console.log(elem.value);
} else {
  console.log(elem);
}
// 위 예제의 사용은 elem이라는 요소가 html에 있을 때는 문제 없는데
// 만약 없을 경우에 에러가 뜨는 문제를 방지하기 위해 굳이 &&를 사용한 것이다.


// 3
// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
  str = str || ''; // str에 값이 있으면 그 값을 그대로 할당하고 만약 없으면 undefined로 자동 초기화 할당이 됌으로 이를 피하기 위해 ''를 넣는다.
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정
function getStringLength(str = '') {
  return str.length;
}

getStringLength();     // 0
getStringLength('hi'); // 2
// 위 예제도 마찬가지로 그냥 str에 값이 있으면 상관이 없는데 함수호출시 매개변수가 비어있을 경우에는 문제가 생긴다. 
//undefined.length 로 해석되기 때문에 오류가 난다. 이를 피하기 위해 굳이 || 논리합 연산자를 사용한 것이다.