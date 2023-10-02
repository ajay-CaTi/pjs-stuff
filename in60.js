// sum(1, 2, 3, 4, 5)

// 1.

// function sum(...args) {
//   let sum = 0;
//   for (const elem of args) {
//     sum += elem;
//   }
//   return sum;
// }

// const s = sum(1, 2, 3, 4, 5);
// console.log(s);

// 2.

// function sum(...args) {
//   return args.reduce((a, b) => {
//     return a + b;
//   });
// }

// const s = sum(1, 2, 3, 4, 5);
// console.log(s);

// 3.

// function sum(...items) {
//   return items.reduce((a, b) => {
//     return a + b;
//   });
// }

// const s = sum(1, 2, 3, 4, 5);
// console.log(s);

// 4.

function sum(...items) {
  if (items.length == 1 && Array.isArray(items[0])) {
    items = [...items[0]];
  }
  return items.reduce((a, b) => a + b);
}

const s = sum([1, 2, 3, 4, 5]);
console.log(s);
