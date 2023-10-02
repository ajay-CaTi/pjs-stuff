const numbers = [1, 2, 3, 4, 5];

for (const iterator of numbers) {
  console.log(iterator);
}

numbers.forEach((number) => {
  console.log(number);
});

const bo = numbers.join("-");
console.log(bo);
console.log(bo.split("-"));

console.log(typeof numbers.join(", "));
