// Add Elements to Array

const numbers = [1, 2, 3, 4, 1, 5, 6];
console.log(numbers.indexOf(1, 3));

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// find name a is or not in courses array

let fi = courses.find((element) => {
  return element.name === "a";
});

console.log(fi);

let fa = courses.findIndex((element) => {
  return element.name === "b";
});

console.log(fa);
