const numbers = [1, 2, 3, 2, 4, 5, 1];

// 1.

// const count = countOccurences(numbers, 3);
// console.log(count);
// function countOccurences(array, searchElement) {
//   let i = 0;
//   for (const elem of array) {
//     if (elem === searchElement) {
//       i++;
//     }
//   }
//   return i;
// }

// 2.

const count = countOccurences(numbers, 3);
console.log(count);
function countOccurences(array, searchElement) {
  return array.reduce((accum, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accum, current, searchElement);
    return accum + occurrence;
  }, 0);
}

// samanj nahi aaya
