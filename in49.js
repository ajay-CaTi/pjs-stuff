const numbers = [1, 2, 3, 4, 5, 6];

// function except(array, excluded) {
//   let a = [];
//   for (const element of array) {
//     if (element === excluded[0]) {
//       continue;
//     }
//     a.push(element);
//   }
//   return a;
// }

// const ops = except(numbers, [3, 4]);

const output = except(numbers, [1, 2]);

console.log(output);
function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) {
      output.push(element);
    }
  return output;
}

// Samanjh nahi aaya
