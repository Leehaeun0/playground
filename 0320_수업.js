class Person {
  constructor(name) {
    this.name  = name;
  }
}

const me = new Person('Lee');
console.log(me);


//
class Person {
  constructor() {
    this.name  = 'Lee';
  }
}

const me = new Person();
//


//
class Person {
  name = 'Lee'; // 필드가 컨스트럭터를 생성한다 > 컨스트럭터의 내부에 디스네임과 같다. 바로 위 코드와 같다.
}

const me = new Person();
//


//
class Person {
  constructor() {
    this.name  = 'Lee';
    this.sayHi = () => console.log(`Hi ${this.name}`);
  }
}

const me = new Person();
//


//
class Person {
  // name = 'Lee';
  // sayHi = () => console.log(`Hi ${this.name}`);
  constructor() {
    this.name = 'Lee';
    this.sayHi = () => console.log(`Hi ${this.name}`);
  }
}

const me = new Person();
console.log(me); // Person { name: 'Lee', sayHi: [Function (anonymous)]}
me.sayHi(); // Hi Lee



