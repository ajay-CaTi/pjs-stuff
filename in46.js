const numbers = [1, 2, 3, -1, 5, 6, -2];

// let sum = 0;

// for (const num of numbers) {
//   sum += num;
// }
// console.log(sum);

let sum = numbers.reduce((acc, cval) => {
  return acc + cval;
}, 0);

console.log(sum);
