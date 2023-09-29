// FOR OF Iterate properties of an object
const person = { name: "somya", age: 23 };

for (const key in person) {
  console.log(key, person[key]); // when we do not know what s the key at runtime then we use square brackets
}

// FOR IN Iterate elements of an Array

const colors = ["red", "green", "blue"];

for (let i of colors) {
  console.log(i);
}
