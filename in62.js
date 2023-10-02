// console.log(Array.isArray(numbers));

try {
  let numbers = [1, 2, 3, 4, 5];
  const count = countOccurences(null, 3);
  console.log(count);
} catch (err) {
  console.log(err.message);
}

function countOccurences(array, searchElement) {
  if (Array.isArray(array) !== true) throw new Error("Invalid array");

  return array.reduce((accum, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accum, current, searchElement);
    return accum + occurrence;
  }, 0);
}
