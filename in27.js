// Object are Object
// Array are Object
// function are Object

let x = 10;
let y = x;

x = 20;

// Premitive are copied by value
// Objects are copied by their reference

// FOCUS HERE ◀️

let num = 10;
function increase(num) {
  num++;
}

increase(num);
console.log(num);

// FOCUS HERE ◀️

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);

// Object.keys(circle) returns Array

// function Object(){
// return [this.radius, this.draw]
// }

// const yy = new Object()
