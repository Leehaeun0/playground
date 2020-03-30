const o1 = { x: 1, y: 2 };
const o2 = { y: 100 };

const o3 = { ...o1, ...o2 };
Object.assign({}, o1, o2); // 배열 메소드가 아니라 객체 메소드다. 원본배열 변경한다. 첫번쨰 인수만!

console.log(o1);