// 비동기 Hello가 맨 나중에 찍힘 코드의 실행순서를 알 수 없음

console.log(1);

setTimeout(function (){
    console.log('Hello');
}, 1000);

console.log (2);

