const first = [1, 2, 3];

const sec = [4, 5, 6];

console.log(first.concat(sec));
console.log([...first, ...sec]);
console.log(first.slice(0, 1));
const so = first.slice(); // COPY
console.log(so);
console.log(first.splice(0, 2));
console.log(first.includes(3));
