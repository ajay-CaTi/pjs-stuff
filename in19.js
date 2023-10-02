function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw", radius);
  };
}

const pp = new CreateCircle(radius);
console.log(pp);

// revise
