console.log(Person); // 함수 호이스팅으로 런타임 전 함수객체 생성됨. 콘솔 찍힘
console.log(Person.prototype); // 프로토타입은 함수가 만들어지는 시점에 동시에 짝꿍처럼 생성됨. 콘솔 찍힘


function Person(name) { // 함수선언문 런타임 전에 실행 함수호이스팅
  // me.sasa = saa 미는 아직 모른다.
  this.name = name;
  this.age = 'age';
  this.sayHi = function() {
    console.log(`Hi ${this.name}`) // 일반함수 내에서 this를 호출 할 수 있다.
  };
}

const me = new Person('Lee', 20); // me 라는 생성자 함수를 만듦
const you = new Person('Kim', 50); // you 라는 생성자 함수를 만듦

me.sayHi(); // 세이하이를 호출하는 방법은 이 방법밖에 없다.
you.sayHi();

