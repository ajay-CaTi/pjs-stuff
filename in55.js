// function sum(...args) {
//   console.log(args);
//   let total = 0;
//   for (const value of arguments) {
//     total += value;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

function sum(discount, ...prices) {
  const total = prices.reduce((acc, curr) => {
    return acc + curr;
  });
  return total - discount;
}

console.log(sum(5, 2, 3, 4, 5));
