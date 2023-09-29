//fizz buzz algo

// Divisible by 3=> Fizz
// Divisible by 5=> Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisile by both => input
// Not a Number =>"Not a Number"

let params = 161;

const output = fizzBuzz(params);
console.log(output);

function fizzBuzz(params) {
  if (params % 5 === 0 && params % 3 === 0) {
    return "FizzBuzz";
  } else if (params % 3 === 0) {
    return "Fizz";
  } else if (params % 5 === 0) {
    return "Buzz";
  } else if (typeof params !== "number") {
    return NaN;
  } else {
    console.log(typeof NaN);
    return params;
  }
}
