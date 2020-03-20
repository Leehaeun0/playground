function Circle(radius) {
  this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 공유할 수 있도록 getArea 메소드를 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.getArea = function () {
  return 'haeun'
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1)

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype로부터 getArea 메소드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메소드를 공유한다.
// console.log(circle1.getArea === circle2.getArea); // true

// console.log(circle1.getArea()); // 3.141592653589793
// console.log(circle2.getArea()); 