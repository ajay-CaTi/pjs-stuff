const numbers = [1, 2, 3, 4, 5, 7, 89, 56];

function includes(arr, searchElem) {
  for (const element of arr) {
    if (searchElem === element) {
      return true;
    }
  }
  return false;
}
const ss = includes(numbers, 5);
console.log(ss);
