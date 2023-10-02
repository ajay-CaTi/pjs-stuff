const numbers = [1, 2, 3, 4];

const max = getMax(numbers); //[]

console.log(max);

// 1.

// function getMax(array) {
//   return array.sort((a, b) => {
//     return a - b;
//   });
// }

// 2.

// function getMax(array) {
//   if (array.length === 0) return undefined;
//   let max = array[0];
//   for (let i = 0; i < array.length; i++) if (array[i] > max) max = array[i];
//   return max;
// }

// 3.

function getMax(array) {
  if (array.length === 0) return undefined;
  array.reduce((a, b) => {
    return a > b ? a : b;
  });
}
