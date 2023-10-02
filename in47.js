const numbers = arrayFromRange(-1, 4);
console.log(numbers);

function arrayFromRange(min, max) {
  let a = [];
  for (let i = min; i <= max; i++) {
    a.push(i);
  }
  return a;
}
