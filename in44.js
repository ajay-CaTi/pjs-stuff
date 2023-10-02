const numbers = [1, -2, 3, 4];

// const allPositive = numbers.every((val) => {
//   return val >= 0;
// });

// console.log(allPositive);

const allPositive = numbers.some((val) => {
  return val >= 0;
});

console.log(allPositive);
