function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  return this;
}
// this reference pass an objectinside .call({})

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);
// this new keyword create empty object and pass as a first argument inside call method

console.log(another);

// More understanding 06 Function are Object
