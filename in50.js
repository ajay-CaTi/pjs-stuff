const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
  const output = [...array]; // clone the above array
  console.log(output);
  const element = output.splice(index, 1);
  console.log(element);
  console.log(output);
  const elem = output.splice(offset, 0, element);
  console.log(elem);
  return elem;
}

// Incomplete
