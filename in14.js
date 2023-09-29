console.log(sum(10));

//Multiple of 3: 3, 6, 9
//Multiple of 5: 5, 10

// function sum(limit) {
//   let num = 0;
//   for (let i = 1; i <= limit; i++) {
//     if (i % 3 === 0) {
//       num += i;
//       //   console.log(i);
//     }
//     if (i % 5 === 0) {
//       num += i;
//       //   console.log(i);
//     }
//     // console.log(num);
//   }
//   return num;
// }

// 2.

function sum(limit) {
  let num = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      num += i;
    }
  }
  return num;
}
