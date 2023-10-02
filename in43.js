const numbers = [1, 5, 3, 9, 7];

console.log(numbers.sort());
numbers.sort(); // converts each element in string  and then sort

// 1.

// const courses = [
//   { id: 1, name: "ajay" },
//   { id: 2, name: "aman" },
//   { id: 3, name: "abhay" },
// ];

// let a = [];
// for (const iterator of courses) {
//   a.push(iterator.id);
// }
// console.log(a.sort());

// 2.

// const courses = [
//   { id: 2, name: "ajay" },
//   { id: 1, name: "aman" },
//   { id: 3, name: "abhay" },
// ];

// let a = courses.sort((a, b) => {
//   return a.id - b.id;
// }); // Imp

// console.log(a);

// 3.

const courses = [
  { id: 2, name: "Node" },
  { id: 1, name: "java" },
  { id: 3, name: "Javascript" },
];

const course = courses.sort(function (a, b) {
  // a<b=>-1
  // a>b=>1
  // a===b=>0

  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  //   if (a.name < b.name) return -1;
  //   if (a.name > b.name) return 1;
  //   if (a.name === b.name) return 0;
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  if (nameA === nameB) return 0;
});

console.log(course);

// SEE sorting more??????
