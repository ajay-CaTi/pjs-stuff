const numbers = [1, -1, 5, 9, 3, 2];

const filtered = numbers.filter((val) => {
  return val >= 0;
});

// const items = filtered.map((n) => {
//   return `<li>${n}</li>`;
// });

// console.log(items);

// const html = items.join("");
// console.log(html);
// const full = `<ul>${html}</ul>`;
// console.log(full);

const items = filtered.map((n) => {
  const obj = { value: n };
  return obj;
});

console.log(items);
