// This Circle function is an Object
// Having Methods:- call apply bind
// Properties:- arguments, caller, length, name, prototype
// If new is missed then this will reference to global object window

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
  this.deaw = function () {
    console.log("draw");
  }`
);

const circle = new Circle1(1);
console.log(circle);

//

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  // return this;
}

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);

console.log(another);
