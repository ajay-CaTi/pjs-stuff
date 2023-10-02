let numbers = [1, 2, 3, 4, 5];

let another = numbers;

// numbers = []; // IMPORTANT -->USE this
// numbers.length = 0; // IMPORTANT -->USE this
// numbers.splice(0, numbers.length); // IMPORTANT
while (numbers.length > 0) {
  numbers.pop();
} // IMPORTANT

console.log(another, numbers);
