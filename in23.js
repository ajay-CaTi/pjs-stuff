// Every OBJECT in JS has a property called constructor, and that reference the function that was use to construct or create that OBJECT

// Factory function

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("first");
    },
  };
}
const circle = createCircle(1);

// IMP Note:- When we use Object literal syntax to create object, under the hood it is created by an inBuilt Objecet Constructor Function

// inBuilt Constructor Function
// new Object();
// new String();
// new Boolean();
// new RegExp();
// new Array();
// new Nummber();
// new Function();
// new Date();

// Not incude new Math object bec it is global object

// Constructor function

function Circle(radius) {
  this.radius = radius;
  this.deaw = function () {
    console.log("draw");
  };
  return this;
}

const another = new Circle(1);

console.log(another);
