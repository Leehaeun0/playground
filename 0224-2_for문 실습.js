var str = 'Hello world!';

var count = 0; // 선언을 for문 밖에 해주는게 선언 반복을 피한다.

for (var i = 0; i < str.length; i++) {
  if (str[i] === 'l') {
    count++;
  }
}
console.log(count);
