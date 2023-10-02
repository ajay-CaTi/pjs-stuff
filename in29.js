const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// OLD Way

// const another = {};
// for (let key in circle) {
//   another[key] = circle[key];
// }
// another["radius"] = circle["radius"];
// console.log(another);

const obj = Object.assign({}, circle);

console.log(obj);

const another1 = { ...circle };

console.log(another1);

const another = Object.assign({ color: "yellow" }, circle);
console.log(another);

let an = { ...circle }; // spread operator tales all propeties and values from circle and put it inside curley braces

console.log(an);
