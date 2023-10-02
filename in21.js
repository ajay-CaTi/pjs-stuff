// constructor function

// Naming of constructor fun is CAMEL Notation
// Pascal notation OneTwoThrwwFour

// this is the reference to the Object that is executing this piece of code

// For now this reference empty object

// with . Notation weread property or set Property

// JS me Objects are dynamic so we can  alwayas add additional methods/properties to it

function Circle(radius) {
  this.radius = radius;
  this.drew = function () {
    console.log("draw");
  };
  return this;
}

const circle = new Circle(1);

console.log(circle);

// new operator creates 3 things
// new Opertor created empty JS object {}
// Ex:-
// const x = {}

// NEXT

// this points to the EMPTY OBJECT x = {}

// FINALLY

// new perator return this object from this  function
// function Circle(radius) {
//   this.radius = radius;
//   this.deaw = function () {
//     console.log("draw");
//   };
// return this;
// }

// Diff between CONSTRUCTOR fun and Factory function

// Constrctor function use new operator and insted of returning an object, we use this keyword, also name capital
