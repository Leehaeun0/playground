class Base{
  constructor(x, y) {
    console.log(this) // Deliver {}
    console.log(this instanceof Deliver); // true
    console.log(this instanceof Base); // true

    this.x = x;
    this.y = y;

  }

  // static sayHi() {
  //   console.log('x');
  // }
  sayHi() {
    return `x: ${this.x} y: ${this.y}`;
  }
}

class Deliver extends Base {
  constructor(x, y, z) {
    // console.log(this); // 수퍼전에 디스쓰면 오류
    super(x, y); // 암묵적으로 앞에 this.super 있다. 그러므로 수퍼뒤는 디스가 있다.
    console.log(this); // Deliver { x: 1, y: 2 }
    this.z = z;
  }

  sayHi() {
    return `${super.sayHi} z: ${this.z}`;
  }
}
// 비어있는 클래스에 내부적으로 돌아가는 문. 
// 수퍼를 호출하면 상위 클래스의 컨스트럭터를 호출한다.
// 컨스트럭터 맨첫줄에서 디스 찍으면 빈객체 반환
// 


const d = new Deliver(1, 2, 3);
console.log(d); // {x: 1, y: 2, z: 3}
d.sayHi();
console.log(d.sayHi())